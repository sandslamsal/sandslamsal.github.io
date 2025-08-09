// Wave App - Externalized JavaScript
// Handles wavelength, wave statistics, and three-gauge reflection analysis with Chart.js plotting

(function() {
  'use strict';
  const g = 9.81;

  // Utility logging
  function log(msg, data) { console.log('[WaveApp] ' + msg, data || ''); }
  function debug(msg, data) { console.debug('[WaveApp][Debug] ' + msg, data || ''); }
  function error(msg, e) { console.error('[WaveApp][Error] ' + msg, e); }

  // FFT Class (same implementation as before)
  class FFT {
    static isPowerOfTwo(n) { return n && (n & (n - 1)) === 0; }
    static nextPowerOfTwo(n) { return Math.pow(2, Math.ceil(Math.log2(n))); }
    static fft(signal) {
      const N = signal.length;
      if (N <= 1) return signal;
      if (!this.isPowerOfTwo(N)) {
        const paddedN = this.nextPowerOfTwo(N);
        const padded = new Array(paddedN).fill().map((_, i) => i < N ? signal[i] : {re:0, im:0});
        return this.fft(padded);
      }
      const result = new Array(N);
      for (let i=0;i<N;i++) { let j=0; for (let k=1,temp=i;k<N;k<<=1,temp>>=1) j = (j<<1)|(temp&1); result[j]=signal[i]; }
      for (let len=2; len<=N; len*=2) {
        const half=len/2; const w={re:Math.cos(-2*Math.PI/len), im:Math.sin(-2*Math.PI/len)};
        for (let i=0;i<N;i+=len) {
          let wn={re:1,im:0};
            for (let j=0;j<half;j++) {
              const u=result[i+j];
              const vIdx=i+j+half;
              const v={
                re: result[vIdx].re*wn.re - result[vIdx].im*wn.im,
                im: result[vIdx].re*wn.im + result[vIdx].im*wn.re
              };
              result[i+j]={re:u.re+v.re, im:u.im+v.im};
              result[vIdx]={re:u.re-v.re, im:u.im-v.im};
              wn={re: wn.re*w.re - wn.im*w.im, im: wn.re*w.im + wn.im*w.re};
            }
        }
      }
      return result;
    }
    static magnitude(c){ return Math.hypot(c.re, c.im); }
    static phase(c){ return Math.atan2(c.im, c.re); }
  }

  function wavelen(h, T, gval=9.81) {
    const omega=2*Math.PI/T; const k0=omega*omega/gval; let k=k0; const tol=1e-10;
    for (let i=0;i<100;i++) { const f=k*Math.tanh(k*h)-k0; const df=Math.tanh(k*h)+k*h*(1-Math.tanh(k*h)**2); const dk=f/df; k-=dk; if (Math.abs(dk)<tol) break; }
    return 2*Math.PI/k;
  }

  function solveDispersion(omega, h) {
    // Newton-Raphson on k for omega^2 = g k tanh(kh)
    let k = omega*omega/g; // deep water guess
    for (let i=0;i<60;i++) {
      const f = g*k*Math.tanh(k*h) - omega*omega;
      const df = g*Math.tanh(k*h) + g*k*h*(1/Math.cosh(k*h))**2; // derivative wrt k
      const dk = f/df;
      k -= dk;
      if (Math.abs(dk) < 1e-10) break;
    }
    return k;
  }

  function zeroCrossing(eta, dt, threshold=0.001) {
    const n=eta.length; const mean=eta.reduce((s,v)=>s+v,0)/n; const e=eta.map(v=>v-mean);
    const up=[]; for (let i=0;i<n-1;i++){ if (e[i] <=0 && e[i+1]>0){ const t=i*dt - e[i]*dt/(e[i+1]-e[i]); up.push(t);} }
    const waves=[]; for (let i=0;i<up.length-1;i++){ const t1=up[i]; const t2=up[i+1]; const i1=Math.round(t1/dt); const i2=Math.round(t2/dt); if(i2<n && i2>i1){ const seg=e.slice(i1,i2+1); const max=Math.max(...seg); const min=Math.min(...seg); const h=max-min; if (h>threshold) waves.push({height:h, period:t2-t1,startTime:t1,endTime:t2}); }}
    if (!waves.length) return {nWaves:0,Hmean:0,Tmean:0,Hs:0,Ts:0,H10:0,waves:[]};
    const heights=waves.map(w=>w.height); const periods=waves.map(w=>w.period);
    const sorted=heights.slice().sort((a,b)=>b-a); const sortedP=periods.slice().sort((a,b)=>b-a);
    const nW=waves.length; const Hmean=heights.reduce((s,h)=>s+h,0)/nW; const Tmean=periods.reduce((s,t)=>s+t,0)/nW;
    const n3=Math.floor(nW/3); const Hs=n3?sorted.slice(0,n3).reduce((s,h)=>s+h,0)/n3:Hmean; const Ts=n3?sortedP.slice(0,n3).reduce((s,t)=>s+t,0)/n3:Tmean;
    const n10=Math.floor(nW/10); const H10=n10?sorted.slice(0,n10).reduce((s,h)=>s+h,0)/n10:Hs;
    return {nWaves:nW,Hmean,Tmean,Hs,Ts,H10,waves};
  }

  // --- Complex algebra helpers for reflection algorithm ---
  function cAdd(a,b){ return {re:a.re+b.re, im:a.im+b.im}; }
  function cSub(a,b){ return {re:a.re-b.re, im:a.im-b.im}; }
  function cMul(a,b){ return {re:a.re*b.re - a.im*b.im, im:a.re*b.im + a.im*b.re}; }
  function cConj(a){ return {re:a.re, im:-a.im}; }
  function cScale(a,s){ return {re:a.re*s, im:a.im*s}; }
  function cDiv(a,b){ const d=b.re*b.re + b.im*b.im; return {re:(a.re*b.re + a.im*b.im)/d, im:(a.im*b.re - a.re*b.im)/d}; }
  function cAbs(a){ return Math.hypot(a.re,a.im); }

  // Least squares solve (A^H A)^{-1} A^H y for 3x2 complex matrix A and vector y length 3
  function solveLeastSquares(A, y){
    // A: [{c1,c2}, ... 3 rows]; each c1,c2 complex
    // Compute A^H A (2x2)
    const a11 = A.reduce((s,row)=> s + cAbs(row.c1)**2, 0);
    const a22 = A.reduce((s,row)=> s + cAbs(row.c2)**2, 0);
    const a12c = A.reduce((s,row)=> cAdd(s, cMul(cConj(row.c1), row.c2)), {re:0,im:0}); // (1,2)
    const a21c = {re:a12c.re, im:-a12c.im};
    // Determinant
    const det = a11*a22 - (a12c.re*a12c.re + a12c.im*a12c.im);
    if (Math.abs(det) < 1e-16) return null;
    // (A^H y)
    const Ahy1 = A.reduce((s,row,i)=> cAdd(s, cMul(cConj(row.c1), y[i])), {re:0,im:0});
    const Ahy2 = A.reduce((s,row,i)=> cAdd(s, cMul(cConj(row.c2), y[i])), {re:0,im:0});
    // Inverse(A^H A) * (A^H y) for 2x2 hermitian
    // Inverse of [[a11,a12],[a21,a22]] = 1/det * [[a22, -a12],[ -a21, a11]] with complex off-diagonals
    const v1 = cDiv( cSub( cMul({re:a22,im:0}, Ahy1), cMul(a12c, Ahy2) ), {re:det, im:0} );
    const v2 = cDiv( cSub( cMul({re:a11,im:0}, Ahy2), cMul(cConj(a12c), Ahy1) ), {re:det, im:0} );
    return {Ai:v1, Ar:v2};
  }

  function threeArray(x, eta, dt, h, fmin=0.05, fmax=null) {
    // Enhanced three-gauge reflection analysis (frequency-domain LSQ separation)
    if (eta.length!==3) throw new Error('Three-gauge analysis requires exactly 3 gauges');
    const nRaw = eta[0].length;
    const n = FFT.isPowerOfTwo(nRaw) ? nRaw : FFT.nextPowerOfTwo(nRaw);
    const demeaned = eta.map(sig=>{ const m=sig.reduce((s,v)=>s+v,0)/sig.length; const arr=sig.map(v=>v-m); if (arr.length < n) { // zero-pad
      return arr.concat(new Array(n-arr.length).fill(0));
    } return arr; });
    const complex = demeaned.map(sig=>sig.map(v=>({re:v, im:0})));
    const ffts = complex.map(sig=>FFT.fft(sig));
    const fs = 1/dt;
    const N = ffts[0].length;
    const half = Math.floor(N/2);
    const df = fs/N;
    if (!fmax) fmax = fs/2 * 0.95; // below Nyquist

    const AiAmps = []; const ArAmps = []; const usedFreqs = []; const debugInfo = [];

    for (let i=1;i<half;i++) { // skip zero frequency
      const f = i*df;
      if (f < fmin || f > fmax) continue;
      const omega = 2*Math.PI*f;
      const k = solveDispersion(omega, h);
      if (!isFinite(k) || k<=0) continue;
      // Build matrix rows for positions xj
      const A = x.map(xj => ({ c1: {re:Math.cos(-k*xj), im:Math.sin(-k*xj)}, c2: {re:Math.cos(k*xj), im:Math.sin(k*xj)} }));
      const y = [ffts[0][i], ffts[1][i], ffts[2][i]];
      const sol = solveLeastSquares(A, y);
      if (!sol) continue;
      const AiMag = cAbs(sol.Ai)/ (N/2); // scale FFT amplitude to physical amplitude (one-sided)
      const ArMag = cAbs(sol.Ar)/ (N/2);
      // Basic filtering: discard extremely small signals or ill-conditioning where both magnitudes tiny
      if (AiMag < 1e-6 && ArMag < 1e-6) continue;
      AiAmps.push(AiMag);
      ArAmps.push(ArMag);
      usedFreqs.push(f);
      debugInfo.push({f, k, AiMag, ArMag});
    }

    if (!AiAmps.length) return {Hi:0,Hr:0,Kr:0,validFrequencies:0, details:[]};

    // Compute representative heights using mean amplitudes
    const meanAi = AiAmps.reduce((s,v)=>s+v,0)/AiAmps.length;
    const meanAr = ArAmps.reduce((s,v)=>s+v,0)/ArAmps.length;
    const Hi_mean = 2*meanAi;
    const Hr_mean = 2*meanAr;

    // Energy-based equivalent heights: H ~ 4 * sqrt(sum(A^2)/ (2*count)) adjustment
    const m0i = AiAmps.reduce((s,v)=>s+v*v,0) * df / 2; // approximate incident spectral moment
    const m0r = ArAmps.reduce((s,v)=>s+v*v,0) * df / 2;
    const Hi_spec = 4*Math.sqrt(Math.max(m0i,0));
    const Hr_spec = 4*Math.sqrt(Math.max(m0r,0));

    // Choose spec heights if they are sensible (>0)
    const Hi = Hi_spec || Hi_mean;
    const Hr = Hr_spec || Hr_mean;

    const Kr = Hi ? (Hr/Hi) : 0;

    debug('Reflection summary', {count:AiAmps.length, Hi_mean, Hr_mean, Hi_spec, Hr_spec, Kr});
    return {
      Hi, Hr, Kr,
      validFrequencies: AiAmps.length,
      details: debugInfo,
      Hi_mean, Hr_mean, Hi_spec, Hr_spec
    };
  }

  // Example dataset generator (strictly deterministic now – no random noise)
  const REAL_WAVE_DATA={ depth:0.30, waveFrequency:0.75, samplingFrequency:100, gaugeSpacing:[0,0.3,0.9], generateData:function(duration=20){ const dt=1/this.samplingFrequency; const n=Math.floor(duration/dt); const omega=2*Math.PI*this.waveFrequency; const T=1/this.waveFrequency; const L=wavelen(this.depth,T); const k=2*Math.PI/L; const Ai=0.025; const Ar=0.008; const phase=0.2; const data=[]; for (let i=0;i<n;i++){ const t=i*dt; const row=[]; for (let j=0;j<3;j++){ const x=this.gaugeSpacing[j]; const incident=Ai*Math.sin(k*x - omega*t); const reflected=Ar*Math.sin(-k*x - omega*t + phase); // secondary deterministic harmonic (no randomness)
        const secondary=0.003*Math.sin(1.5*omega*t + 0.5*j); const elev=incident+reflected+secondary; row.push(elev.toFixed(6)); } data.push(row);} return data; }};
  // Cache one example dataset so repeated "Load Example" uses identical data
  const CACHED_EXAMPLE_DATA = REAL_WAVE_DATA.generateData(20, 20250208);

  // State
  let currentWaveData=null, currentWaveResults=null, currentReflectionData=null; let waveChart=null, reflectionChart=null;

  function byId(id){ return document.getElementById(id); }

  // Wavelength example & calculation
  window.loadWavelengthExample=function(showAlert=true){ byId('water-depth').value=REAL_WAVE_DATA.depth; byId('wave-period').value=(1/REAL_WAVE_DATA.waveFrequency).toFixed(2); if(showAlert) alert('Example loaded.'); };
  window.calculateWavelength=function(){ try { const h=parseFloat(byId('water-depth').value); const T=parseFloat(byId('wave-period').value); if(!(h>0)&&!(T>0)) return alert('Enter positive values.'); const L=wavelen(h,T); const k=2*Math.PI/L; const c=L/T; const omega=2*Math.PI/T; const n=0.5*(1+2*k*h/Math.sinh(2*k*h)); const cg=n*c; let regime=h/L>0.5?'Deep Water': h/L<0.05?'Shallow Water':'Intermediate Water'; byId('wavelength-value').textContent=L.toFixed(3); byId('wavelength-details').innerHTML=`<strong>Additional Parameters:</strong><br>• Wave Number (k): ${k.toFixed(4)} rad/m<br>• Wave Celerity (c): ${c.toFixed(2)} m/s<br>• Group Velocity (cg): ${cg.toFixed(2)} m/s<br>• Relative Depth (h/L): ${(h/L).toFixed(3)}<br>• Water Regime: ${regime}<br>• Angular Frequency: ${omega.toFixed(3)} rad/s`; byId('wavelength-result').style.display='block'; } catch(e){ error('Wavelength calc failed', e); alert('Error calculating wavelength.'); }};

  // Wave stats
  window.loadWaveStatsExample=function(showAlert=true){ const waveData=CACHED_EXAMPLE_DATA; const first=waveData.map(r=>parseFloat(r[0])); byId('wave-data').value=first.map(v=>v.toFixed(6)).join('\n'); byId('sampling-frequency').value=REAL_WAVE_DATA.samplingFrequency; if(showAlert) alert('Wave stats example loaded.'); };
  window.calculateWaveStats=function(){ try { const txt=byId('wave-data').value.trim(); const fs=parseFloat(byId('sampling-frequency').value); if(!txt||!(fs>0)) return alert('Enter data and valid frequency'); const data=txt.split(/[\,\n\r\s]+/).map(x=>parseFloat(x)).filter(x=>!isNaN(x)); if(data.length<10) return alert('Need at least 10 points'); const dt=1/fs; const res=zeroCrossing(data, dt); if(!res.nWaves) return alert('No valid waves found'); currentWaveData=data; currentWaveResults=res; const totalDuration=data.length*dt; const heights=res.waves.map(w=>w.height); const maxH=Math.max(...heights); const minH=Math.min(...heights); const stdH=Math.sqrt(heights.reduce((s,h)=>s+(h-res.Hmean)**2,0)/res.nWaves); byId('hs-value').textContent=res.Hs.toFixed(3); byId('hmean-value').textContent=res.Hmean.toFixed(3); byId('tmean-value').textContent=res.Tmean.toFixed(2); byId('h10-value').textContent=res.H10.toFixed(3); byId('wave-count-value').textContent=res.nWaves; const container=byId('wave-stats-result'); let ext=container.querySelector('.additional-results'); if(!ext){ ext=document.createElement('div'); ext.className='additional-results'; container.appendChild(ext);} ext.innerHTML=`<strong>Extended Statistics:</strong><br>• Maximum Wave Height: ${maxH.toFixed(3)} m<br>• Minimum Wave Height: ${minH.toFixed(3)} m<br>• Standard Deviation: ${stdH.toFixed(3)} m<br>• Significant Period (Ts): ${res.Ts.toFixed(2)} s<br>• Data Duration: ${totalDuration.toFixed(1)} s<br>• Sampling Rate: ${fs} Hz<br>• Data Points: ${data.length}`; container.style.display='block'; byId('wave-stats-plot-controls').style.display='block'; } catch(e){ error('Wave stats failed', e); alert('Error analyzing wave data'); }};

  // Reflection
  window.loadReflectionExample=function(showAlert=true){ byId('gauge-positions').value=REAL_WAVE_DATA.gaugeSpacing.join(', '); byId('reflection-depth').value=REAL_WAVE_DATA.depth; byId('time-step').value=(1/REAL_WAVE_DATA.samplingFrequency); const gauge=CACHED_EXAMPLE_DATA; byId('gauge-data').value=gauge.map(r=>r.join(',')).join('\n'); if(showAlert) alert('Reflection example loaded.'); };
  window.calculateReflection=function(){ try { const pos=byId('gauge-positions').value.split(',').map(x=>parseFloat(x.trim())); const h=parseFloat(byId('reflection-depth').value); const dt=parseFloat(byId('time-step').value); const txt=byId('gauge-data').value.trim(); if(pos.length!==3||pos.some(isNaN)||!(h>0)||!(dt>0)||!txt) return alert('Enter valid inputs'); const lines=txt.split('\n').filter(l=>l.trim()); const data=[]; for (const line of lines){ const vals=line.split(',').map(v=>parseFloat(v.trim())); if(vals.length===3&&!vals.some(isNaN)) data.push(vals); } if(data.length<10) return alert('Need at least 10 rows'); currentReflectionData=data; const eta=[data.map(r=>r[0]), data.map(r=>r[1]), data.map(r=>r[2])]; const res=threeArray(pos, eta, dt, h); byId('hi-value').textContent=res.Hi.toFixed(3); byId('hr-value').textContent=res.Hr.toFixed(3); byId('kr-value').textContent=res.Kr.toFixed(3); byId('freq-count-value').textContent=res.validFrequencies; const container=byId('reflection-result'); let ext=container.querySelector('.additional-results'); if(!ext){ ext=document.createElement('div'); ext.className='additional-results'; container.appendChild(ext);} const kr=res.Kr; let perf= kr<0.3?'Low reflection - Good absorption': kr<0.7?'Moderate reflection - Partial absorption':'High reflection - Strong reflection'; const totalDuration=data.length*dt; const spacing=Math.abs(pos[1]-pos[0]); const energyRefPct=(kr*kr*100).toFixed(1); ext.innerHTML=`<strong>Analysis Details:</strong><br>• Gauge Spacing: ${spacing.toFixed(2)} m<br>• Data Duration: ${totalDuration.toFixed(1)} s<br>• Performance: ${perf}<br>• Energy Reflection: ${energyRefPct}%<br>• Data Points: ${data.length}<br>• Method: 3-gauge LSQ (freq-domain)`; container.style.display='block'; byId('reflection-plot-controls').style.display='block'; debug('Reflection frequencies sample', res.details.slice(0,5)); } catch(e){ error('Reflection failed', e); alert('Error analyzing reflection'); }};

  // Plotting helpers
  function destroyChart(ref){ if(ref){ try { ref.destroy(); } catch(e){ error('Destroy chart failed', e); } } }

  window.plotWaveTimeSeries=function(){ if(!currentWaveData) return alert('No wave data'); const fs=parseFloat(byId('sampling-frequency').value); const dt=1/fs; const time=currentWaveData.map((_,i)=>(i*dt).toFixed(3)); destroyChart(waveChart); const ctx=document.getElementById('wave-plot').getContext('2d'); waveChart=new Chart(ctx,{ type:'line', data:{ labels:time, datasets:[{ label:'Wave Elevation (m)', data:currentWaveData, borderColor:'#667eea', backgroundColor:'rgba(102,126,234,0.1)', borderWidth:2, pointRadius:0, tension:0.1, fill:true }]}, options: baseLineChartOptions('Wave Time Series', 'Time t (s)', 'Wave Elevation η (m)') }); byId('wave-chart-title').textContent='Wave Time Series Plot'; byId('wave-plot-container').style.display='block'; ensureAxisLabels(waveChart,'Time t (s)','Wave Elevation η (m)'); };

  window.plotWaveHeights=function(){ if(!currentWaveResults||!currentWaveResults.waves.length) return alert('No wave analysis results'); const waves=currentWaveResults.waves; const labels=waves.map((_,i)=>i+1); const heights=waves.map(w=>w.height); const periods=waves.map(w=>w.period); destroyChart(waveChart); const ctx=document.getElementById('wave-plot').getContext('2d'); waveChart=new Chart(ctx,{ type:'bar', data:{ labels, datasets:[{ label:'Wave Height (m)', data:heights, backgroundColor:'rgba(79,172,254,0.7)', borderColor:'#4facfe', borderWidth:2, borderRadius:4, borderSkipped:false }]}, options: barChartOptions('Individual Wave Heights Distribution','Wave Number (#)','Wave Height H (m)', (context)=>{ const i=context.dataIndex; return ['Height: '+heights[i].toFixed(3)+' m','Period: '+periods[i].toFixed(2)+' s']; }) }); byId('wave-chart-title').textContent='Individual Wave Heights'; byId('wave-plot-container').style.display='block'; ensureAxisLabels(waveChart,'Wave Number (#)','Wave Height H (m)'); };

  window.plotGaugeData=function(){ if(!currentReflectionData) return alert('No gauge data'); const dt=parseFloat(byId('time-step').value); const time=currentReflectionData.map((_,i)=>(i*dt).toFixed(3)); destroyChart(reflectionChart); const ctx=document.getElementById('reflection-plot').getContext('2d'); const pos=byId('gauge-positions').value.split(',').map(x=>parseFloat(x.trim())); const colors=['#667eea','#f093fb','#4facfe']; const labels=[`Gauge 1 (x=${pos[0]}m)`,`Gauge 2 (x=${pos[1]}m)`,`Gauge 3 (x=${pos[2]}m)`]; const ds=[0,1,2].map(i=>({ label:labels[i], data: currentReflectionData.map(r=>r[i]), borderColor:colors[i], backgroundColor:colors[i]+'15', borderWidth:2, pointRadius:0, tension:0.2, fill:false })); reflectionChart=new Chart(ctx,{ type:'line', data:{ labels:time, datasets:ds }, options: multiLineChartOptions('Three-Gauge Time Series Data','Time t (s)','Wave Elevation η (m)') }); byId('reflection-chart-title').textContent='Three-Gauge Data Comparison'; byId('reflection-plot-container').style.display='block'; ensureAxisLabels(reflectionChart,'Time t (s)','Wave Elevation η (m)'); };

  window.plotFrequencySpectrum=function(){ if(!currentReflectionData) return alert('No gauge data'); destroyChart(reflectionChart); const first=currentReflectionData.map(r=>({re:r[0], im:0})); const dt=parseFloat(byId('time-step').value); const fs=1/dt; const fft=FFT.fft(first); const n=fft.length; const freqs=[]; const energy=[]; for (let i=0;i<n/2;i++){ freqs.push(i*fs/n); const mag=FFT.magnitude(fft[i])/n; energy.push((mag*mag)/fs); } const ctx=document.getElementById('reflection-plot').getContext('2d'); reflectionChart=new Chart(ctx,{ type:'line', data:{ labels:freqs, datasets:[{ label:'Energy Spectrum', data:energy, borderColor:'#667eea', backgroundColor:'rgba(102,126,234,0.1)', borderWidth:2, pointRadius:0, tension:0.1, fill:true }]}, options: baseLineChartOptions('Frequency Spectrum Analysis (Gauge 1)','Frequency f (Hz)','Energy Spectrum (m²/Hz)') }); byId('reflection-chart-title').textContent='Wave Frequency Spectrum'; byId('reflection-plot-container').style.display='block'; ensureAxisLabels(reflectionChart,'Frequency f (Hz)','Energy Spectrum (m²/Hz)'); };

  // Reset zoom compatibility
  window.resetWaveZoom=function(){ if (waveChart && waveChart.resetZoom) waveChart.resetZoom(); };
  window.resetReflectionZoom=function(){ if (reflectionChart && reflectionChart.resetZoom) reflectionChart.resetZoom(); };

  // Shared chart options builders
  function axisTitleConfig(text){ return { display:true, text, font:{ size:16, weight:'bold', family:'Inter, sans-serif'}, color:'#2c3e50' }; }
  function baseLineChartOptions(title, xLabel, yLabel){ return { responsive:true, maintainAspectRatio:false, plugins:{ title:{ display:true, text:title, font:{ size:16, weight:'bold'}}, legend:{ display:true, position:'top'}, tooltip:{ mode:'index', intersect:false }}, scales:{ x:{ display:true, title: axisTitleConfig(xLabel), grid:{ color:'rgba(0,0,0,0.1)'}, ticks:{ font:{ size:12, family:'Inter, sans-serif'}, color:'#34495e'}}, y:{ display:true, title: axisTitleConfig(yLabel), grid:{ color:'rgba(0,0,0,0.1)'}, ticks:{ font:{ size:12, family:'Inter, sans-serif'}, color:'#34495e'}}}, animation:{ duration:1000, easing:'easeInOutQuart'} }; }
  function multiLineChartOptions(title,xLabel,yLabel){ const opt=baseLineChartOptions(title,xLabel,yLabel); opt.plugins.legend.labels={ usePointStyle:true, pointStyle:'line', font:{ size:14 } }; opt.plugins.zoom={ zoom:{ wheel:{enabled:true}, pinch:{enabled:true}, mode:'xy'}, pan:{enabled:true, mode:'xy'} }; return opt; }
  function barChartOptions(title,xLabel,yLabel,tooltipCb){ return { responsive:true, maintainAspectRatio:false, interaction:{ mode:'index', intersect:false }, plugins:{ title:{ display:true, text:title, font:{ size:16, weight:'bold'}}, legend:{ display:true, position:'top'}, tooltip:{ callbacks:{ title:(ctx)=>'Wave #'+ctx[0].label, label:(ctx)=>tooltipCb(ctx) }}}, scales:{ x:{ display:true, title: axisTitleConfig(xLabel), grid:{ display:false }, ticks:{ font:{ size:12, family:'Inter, sans-serif'}, color:'#34495e'}}, y:{ display:true, title: axisTitleConfig(yLabel), beginAtZero:true, grid:{ color:'rgba(0,0,0,0.1)'}, ticks:{ font:{ size:12, family:'Inter, sans-serif'}, color:'#34495e'}}}, animation:{ duration:1000, easing:'easeInOutQuart'} }; }

  // Ensure axis labels exist (fallback in case Chart.js config changes or was stripped)
  function ensureAxisLabels(chart, xLabel, yLabel){
    if(!chart) return;
    const sc=chart.options.scales||{};
    if(sc.x){ if(!sc.x.title) sc.x.title={}; sc.x.title.display=true; sc.x.title.text=xLabel; }
    if(sc.y){ if(!sc.y.title) sc.y.title={}; sc.y.title.display=true; sc.y.title.text=yLabel; }
    chart.update();
  }

  // DOM Ready check for essential elements & auto-load examples
  document.addEventListener('DOMContentLoaded', ()=>{ const required=['water-depth','wave-period','wave-data','sampling-frequency','gauge-positions','reflection-depth','time-step','gauge-data']; const missing=required.filter(id=>!byId(id)); if(missing.length){ error('Missing elements: '+missing.join(',')); } else { log('Wave app initialized v1.1 (deterministic examples)'); // Auto-load examples without alert popups
      try { loadWavelengthExample(false); calculateWavelength(); loadWaveStatsExample(false); calculateWaveStats(); loadReflectionExample(false); calculateReflection(); } catch(e){ error('Auto-load failed', e); }
    } });
})();
