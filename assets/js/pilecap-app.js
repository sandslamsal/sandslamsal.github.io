// PileCapDesign Beta - Rigid pile cap load distribution
(function(){
  'use strict';
  function el(id){ return document.getElementById(id); }
  function msg(t,cls='info'){ const s=el('pc-status'); if(!s) return; s.textContent=t; s.className='pc-status '+cls; }

  function parseCoords(raw){
    const lines=raw.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
    const pts=[]; const re=/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;
    lines.forEach(line=>{ const nums=line.match(re); if(nums && nums.length>=2){ const x=parseFloat(nums[0]); const y=parseFloat(nums[1]); if(isFinite(x)&&isFinite(y)) pts.push({x,y}); }});
    return pts;
  }

  function analyze(){
    try {
      const P=parseFloat(el('pc-load-p').value);
      const Mx=parseFloat(el('pc-mx').value)||0; // about x-axis (acts on y')
      const My=parseFloat(el('pc-my').value)||0; // about y-axis (acts on x')
      const allowComp=parseFloat(el('pc-allow-comp').value)||Infinity;
      const allowTen=parseFloat(el('pc-allow-ten').value)||0;
      const fc=parseFloat(el('pc-fc').value)||0; // MPa
      const d_p=parseFloat(el('pc-diameter').value)||0.4;
      const t_c=parseFloat(el('pc-cap-thk').value)||0.9;
      if(!(P>0)) return msg('Enter positive axial load P','error');
      const pts=parseCoords(el('pc-coords').value);
      if(pts.length<3) return msg('Need at least 3 piles','error');

      // Centroid
      const cx=pts.reduce((s,p)=>s+p.x,0)/pts.length;
      const cy=pts.reduce((s,p)=>s+p.y,0)/pts.length;
      const shifted=pts.map(p=>({x:p.x-cx, y:p.y-cy}));
      const n=shifted.length;
      // Sums for system
      let Sxx=0,Syy=0,Sxy=0; shifted.forEach(p=>{ Sxx+=p.x*p.x; Syy+=p.y*p.y; Sxy+=p.x*p.y; });
      // Reaction surface R=a + b x' + c y'
      // Equations: ΣR = n a = P => a=P/n
      // ΣR x' = b Σx'^2 + c Σx'y' = My
      // ΣR y' = b Σx'y' + c Σy'^2 = -Mx
      const a=P/n;
      const det=Sxx*Syy - Sxy*Sxy;
      let b=0,c=0, coupled=false;
      if(Math.abs(det)>1e-12){
        b = (My*Syy - (-Mx)*Sxy)/det;
        c = (Sxx*(-Mx) - Sxy*My)/det;
        coupled=true;
      } else {
        // Degenerate layout (e.g., line). Use uncoupled fallback.
        b = Sxx? My/Sxx : 0;
        c = Syy? -Mx/Syy : 0;
      }
      const reactions=shifted.map(p=> a + b*p.x + c*p.y);
      // Checks
      const maxR=Math.max(...reactions);
      const minR=Math.min(...reactions);
      const upliftCount=reactions.filter(r=>r<0).length;
      // Utilisation: compression vs tension
      const rows=reactions.map((R,i)=>{
        let util=''; let status='OK';
        if(R>=0){ util = allowComp && isFinite(allowComp)? (R/allowComp*100).toFixed(1)+'%':'-'; if(R>allowComp) status='Over'; }
        else { const T=-R; util = allowTen>0? (T/allowTen*100).toFixed(1)+'%':'Tension'; if(T>allowTen) status='Over-Tension'; }
        return {i:i+1, x:pts[i].x, y:pts[i].y, R, util, status};
      });

      // Punching shear crude check: pick most compressed pile
      const idxMost=rows.reduce((m,r,i,a)=> r.R>a[m].R? i:m,0);
      const Rc=rows[idxMost].R; // kN
      const d = 0.8*t_c; // effective depth assumption
      const bo = Math.PI*(d_p + d); // very simplified critical perimeter ~ at 0.5d outside pile (placeholder)
      const Vc = 0.33*Math.sqrt(fc)*bo*d; // kN (fc MPa -> sqrt(fc) ~ MPa^0.5, treat constant)
      const shearStatus = Rc>Vc? 'Punching Demand > Capacity (Prelim)' : 'OK (Prelim)';

      renderResults({P,Mx,My,cx,cy,rows,maxR,minR,upliftCount,coupled,b,c,Rc,Vc,shearStatus});
      plotPlan(rows,cx,cy);
      msg('Analysis complete','success');
    } catch(e){ console.error(e); msg('Error during analysis','error'); }
  }

  function renderResults(r){
    el('pc-results').hidden=false;
    el('pc-summary').innerHTML=`<strong>Total Load P:</strong> ${r.P.toFixed(2)} kN<br>
      <strong>Moments:</strong> Mx=${r.Mx.toFixed(2)} kN·m, My=${r.My.toFixed(2)} kN·m<br>
      <strong>Centroid:</strong> (${r.cx.toFixed(3)}, ${r.cy.toFixed(3)}) m<br>
      <strong>Max Reaction:</strong> ${r.maxR.toFixed(2)} kN<br>
      <strong>Min Reaction:</strong> ${r.minR.toFixed(2)} kN<br>
      <strong>Uplift Piles:</strong> ${r.upliftCount}<br>
      <strong>Coupled Solution:</strong> ${r.coupled? 'Yes':'No (degenerate layout)'}<br>`;
    // Table
    const tb=el('pc-table').querySelector('tbody'); tb.innerHTML='';
    r.rows.forEach(row=>{
      const tr=document.createElement('tr');
      tr.innerHTML=`<td>${row.i}</td><td>${row.x}</td><td>${row.y}</td><td>${row.R.toFixed(2)}</td><td>${row.util}</td><td class="${row.status!=='OK'?'warn':''}">${row.status}</td>`;
      if(row.R<0) tr.classList.add('uplift');
      tb.appendChild(tr);
    });
    el('pc-punch').innerHTML=`<h3>Punching Shear (Preliminary)</h3>
      Critical pile #${r.rows.findIndex(rr=>rr.R===r.Rc)+1} Reaction Rc=${r.Rc.toFixed(2)} kN<br>
      Nominal Vc ≈ ${r.Vc.toFixed(2)} kN<br>
      Status: <strong>${r.shearStatus}</strong>`;
  }

  function plotPlan(rows,cx,cy){
    const canvas=el('pc-plan'); if(!canvas) return; const ctx=canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const pad=40; const xs=rows.map(r=>r.x); const ys=rows.map(r=>r.y);
    const minX=Math.min(...xs), maxX=Math.max(...xs), minY=Math.min(...ys), maxY=Math.max(...ys);
    const rangeX=maxX-minX||1, rangeY=maxY-minY||1;
    function sx(x){ return pad + (x-minX)/rangeX*(canvas.width-2*pad); }
    function sy(y){ return canvas.height - ( pad + (y-minY)/rangeY*(canvas.height-2*pad)); }
    const maxR=Math.max(...rows.map(r=>r.R));
    const minR=Math.min(...rows.map(r=>r.R));
    function color(R){ if(R<0) return '#e74c3c'; const t=(R-minR)/(maxR-minR||1); const b=Math.round(200-120*t); const g=Math.round(80+120*t); return `rgb(${50},${g},${b})`; }
    // axes
    ctx.strokeStyle='#888'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(sx(minX), sy(cy)); ctx.lineTo(sx(maxX), sy(cy)); ctx.moveTo(sx(cx), sy(minY)); ctx.lineTo(sx(cx), sy(maxY)); ctx.stroke();
    // piles
    rows.forEach(r=>{ const x=sx(r.x), y=sy(r.y); ctx.beginPath(); ctx.fillStyle=color(r.R); ctx.arc(x,y,10,0,Math.PI*2); ctx.fill(); ctx.strokeStyle='#222'; ctx.stroke(); ctx.fillStyle='#000'; ctx.font='12px Inter, sans-serif'; ctx.fillText(r.i, x+12, y-12); ctx.fillText(r.R.toFixed(0)+'kN', x+12, y+4); });
    // legend
    ctx.fillStyle='#000'; ctx.font='12px Inter, sans-serif'; ctx.fillText('Red: Tension (uplift). Blue/Green: Compression.', pad, pad-10);
  }

  function loadExample(){ msg('Example loaded','info'); }

  document.addEventListener('DOMContentLoaded',()=>{
    const btn=el('pc-analyze'); if(btn){ btn.addEventListener('click', analyze); }
    el('pc-example')?.addEventListener('click', loadExample);
    el('pc-reset')?.addEventListener('click', ()=>{ msg('Reset','info'); el('pc-results').hidden=true; });
  });
})();
