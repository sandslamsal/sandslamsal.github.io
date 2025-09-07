// PileCap Core Computational Module (extracted from inline script)
// Provides pure functions usable in browser and Node (for regression tests)
(function(global){
  'use strict';
  const Core = {};
  
  // Ensure global object exists
  if (typeof global === 'undefined') {
    global = typeof window !== 'undefined' ? window : {};
  }
  // ---- Constants / Spec Factors (placeholders for future AASHTO alignment) ----
  Core.factors = {
    beta1: fc => { // AASHTO approximate beta1
      if(!isFinite(fc)) return 0.85; const b = 0.85 - 0.05 * ((fc - 28)/7); return Math.max(0.65, Math.min(0.85, b));
    },
    phiFlex: fc => 0.9, // TODO: refine per AASHTO LRFD (tension-controlled)
    phiShear: fc => 0.75,
    phiPunch: fc => 0.75,
    lambda: fc => 1.0 // lightweight modifier if needed
  };

  // ---- Utilities ----
  Core.mean = arr => arr.length? arr.reduce((a,b)=>a+b,0)/arr.length : 0;
  Core.clone = o => JSON.parse(JSON.stringify(o));

  Core.parseCoordsText = text => text.split(/\n+/).map(l=>l.trim()).filter(Boolean).map(l=>{ const parts=l.split(/[\s,]+/).map(Number).filter(v=>!isNaN(v)); if(parts.length<2) throw new Error('Invalid coord line: '+l); return {x:parts[0], y:parts[1]}; });

  Core.parseMultiLoadCases = text => {
    const lines=text.split(/\n+/).map(l=>l.trim()).filter(Boolean); const cases=[];
    for(const l of lines){ const parts=l.split(/[\s,]+/).filter(Boolean); if(parts.length<4) throw new Error('Line needs name P Mx My: '+l); const [name,Ps,Mxs,Mys]=parts; const P=parseFloat(Ps), Mx=parseFloat(Mxs), My=parseFloat(Mys); if([P,Mx,My].some(v=>isNaN(v))) throw new Error('Non-numeric: '+l); cases.push({name,P,Mx,My}); }
    return cases;
  };

  // ---- Reaction Distribution ----
  Core.computeReactionsRigid = ({P,Mx,My,coords, activeMask=null}) => {
    // activeMask: optional boolean array; inactive piles removed from system (iterative tension elimination)
    const useCoords = coords.map((p,i)=> ({...p, active: !activeMask || activeMask[i]}));
    const active = useCoords.filter(p=>p.active);
    if(!active.length) throw new Error('No active piles for reaction distribution');
    const cx = Core.mean(active.map(p=>p.x)); const cy = Core.mean(active.map(p=>p.y));
    const pts = useCoords.map(p=> ({x:p.x - cx, y:p.y - cy, active:p.active}));
    const n = active.length; let Sxx=0,Syy=0,Sxy=0; pts.forEach(p=>{ if(!p.active) return; Sxx+=p.x*p.x; Syy+=p.y*p.y; Sxy+=p.x*p.y; });
    const a = P / n; const det = Sxx*Syy - Sxy*Sxy; const eps = 1e-12;
    let b=0,c=0; if(Math.abs(det)>eps){ b = ( Syy*My - Sxy*Mx)/det; c = (-Sxy*My + Sxx*Mx)/det; } else { b = Sxx? My/Sxx:0; c = Syy? Mx/Syy:0; }
    const reactions = coords.map((p,i)=>{ if(activeMask && !useCoords[i].active) return {index:i+1,x:p.x,y:p.y,R:0, inactive:true}; const p0=pts[i]; const R = a + b*p0.x + c*p0.y; return {index:i+1,x:p.x,y:p.y,R}; });
    const Pmax = Math.max(...reactions.map(r=>r.R)); const Pmin = Math.min(...reactions.map(r=>r.R));
    return {reactions,Pmax,Pmin,cx,cy,a,b,c,Sxx,Syy,Sxy};
  };

  // Iterative tension redistribution (remove tension piles, recompute until stable or max loops)
  Core.computeReactionsIterative = ({P,Mx,My,coords,maxLoops=20}) => {
    let activeMask = new Array(coords.length).fill(true);
    let lastNegCount=-1; let sol=null;
    for(let loop=0; loop<maxLoops; loop++){
      sol = Core.computeReactionsRigid({P,Mx,My,coords,activeMask});
      const negatives = sol.reactions.map((r,i)=> ({r,i})).filter(o=>o.r.R<0 && activeMask[o.i]);
      if(!negatives.length) break; // done
      if(negatives.length === lastNegCount){ // no change -> stop
        break;
      }
      negatives.forEach(o=> activeMask[o.i]=false);
      lastNegCount = negatives.length;
    }
    // Scale positives to carry total P
    const pos = sol.reactions.filter(r=>r.R>0); const sumPos = pos.reduce((a,b)=>a+b.R,0);
    if(sumPos>0){ const scale = P/sumPos; pos.forEach(r=> r.R *= scale); }
    sol.Pmax = Math.max(...sol.reactions.map(r=>r.R)); sol.Pmin = Math.min(...sol.reactions.map(r=>r.R));
    sol.iterative = true; return sol;
  };

  // ---- Punching (per pile, governing) ----
  Core.punchingChecks = ({fcMPa,pileDia_m,capThk_m}, sol) => {
    const phi = Core.factors.phiPunch(fcMPa); const d = 0.8*capThk_m; const results=[];
    for(const r of sol.reactions){ if(r.R<=0) continue; const b0_m = Math.PI*(pileDia_m + d); const b0_mm=b0_m*1000; const d_mm=d*1000; const Vc_N=0.33*Math.sqrt(fcMPa)*b0_mm*d_mm; const Vc_kN=Vc_N/1000; const phiVc=phi*Vc_kN; const Vu=r.R; const util=phiVc>0? Vu/phiVc:Infinity; results.push({pile:r.index, Vu_kN:Vu, phiVc_kN:phiVc, utilisation:util, OK: util<=1.0, d_m:d, b0_m}); }
    if(!results.length) return {governing:null, perPile:[]};
    const governing = results.reduce((m,c)=> c.utilisation>m.utilisation? c:m, results[0]);
    return {governing, perPile:results};
  };

  // ---- Flexure & Shear ----
  Core.flexureCapacity = ({Mu_kNm, b_m, d_m, fc_MPa, fy_MPa, phi}) => {
    const Mu_Nmm=Mu_kNm*1e6; const b_mm=b_m*1000; const d_mm=d_m*1000; let As_mm2=1000;
    for(let i=0;i<200;i++){ const a_mm=(As_mm2*fy_MPa)/(0.85*fc_MPa*b_mm); const jd=d_mm-a_mm/2; const Mn=As_mm2*fy_MPa*jd; const phiMn=phi*Mn; if(phiMn>=Mu_Nmm) break; const deficit=(Mu_Nmm-phiMn)/(fy_MPa*Math.max(jd,1)); As_mm2+=Math.max(5,deficit); }
    const h_mm=(d_m/0.8)*1000; const As_min=0.0018*b_mm*h_mm; As_mm2=Math.max(As_mm2,As_min); const a_mm=(As_mm2*fy_MPa)/(0.85*fc_MPa*b_mm); const jd=d_mm-a_mm/2; const Mn=As_mm2*fy_MPa*jd; return {phiMn_kNm:(phi*Mn)/1e6, As_req_mm2:As_mm2, As_min_mm2:As_min};
  };

  Core.oneWayShear = ({Vu_kN,b_m,d_m,fc_MPa,phi,lambda=1.0}) => { const b_mm=b_m*1000, d_mm=d_m*1000; const Vc_N=0.17*lambda*Math.sqrt(fc_MPa)*b_mm*d_mm; const Vc_kN=Vc_N/1000; const phiVc=phi*Vc_kN; const util=phiVc>0? Vu_kN/phiVc:Infinity; return {Vu_kN, phiVc_kN:phiVc, util, OK:util<=1}; };

  // Derive Mu, Vu demands from reactions relative to column footprint
  Core.deriveStrengthDemands = (reactions,colx,coly,d_eff) => { let Mu_x=0,Mu_y=0; for(const r of reactions){ const dx=Math.abs(r.x); const dy=Math.abs(r.y); if(dy>coly/2) Mu_x+=r.R*(dy-coly/2); if(dx>colx/2) Mu_y+=r.R*(dx-colx/2); }
    const cutXp=colx/2 + d_eff; const cutXm=-cutXp; const cutYp=coly/2 + d_eff; const cutYm=-cutYp; let Vu_x_pos=0,Vu_x_neg=0,Vu_y_pos=0,Vu_y_neg=0; for(const r of reactions){ if(r.x>cutXp) Vu_y_pos+=r.R; if(r.x<cutXm) Vu_y_neg+=r.R; if(r.y>cutYp) Vu_x_pos+=r.R; if(r.y<cutYm) Vu_x_neg+=r.R; } const Vu_x=Math.max(Vu_x_pos,Vu_x_neg,0); const Vu_y=Math.max(Vu_y_pos,Vu_y_neg,0); return {Mu_x,Mu_y,Vu_x,Vu_y}; };

  // Multi-case strength aggregator
  Core.multiCaseStrength = (solutions, params) => {
    const {colx,coly,d_eff,fc,fy,phiF,phiV,b_x,b_y} = params;
    let Mu_x_max=0,Mu_y_max=0,Vu_x_max=0,Vu_y_max=0;
    for(const rec of solutions){ const d=Core.deriveStrengthDemands(rec.sol.reactions,colx,coly,d_eff); rec.demands=d; Mu_x_max=Math.max(Mu_x_max,d.Mu_x); Mu_y_max=Math.max(Mu_y_max,d.Mu_y); Vu_x_max=Math.max(Vu_x_max,d.Vu_x); Vu_y_max=Math.max(Vu_y_max,d.Vu_y); }
    const fx=Core.flexureCapacity({Mu_kNm:Mu_x_max,b_m:b_x,d_m:d_eff,fc_MPa:fc,fy_MPa:fy,phi:phiF});
    const fyres=Core.flexureCapacity({Mu_kNm:Mu_y_max,b_m:b_y,d_m:d_eff,fc_MPa:fc,fy_MPa:fy,phi:phiF});
    const owsX=Core.oneWayShear({Vu_kN:Vu_x_max,b_m:b_x,d_m:d_eff,fc_MPa:fc,phi:phiV});
    const owsY=Core.oneWayShear({Vu_kN:Vu_y_max,b_m:b_y,d_m:d_eff,fc_MPa:fc,phi:phiV});
    for(const rec of solutions){ const d=rec.demands; rec.flexUtilX=d.Mu_x/(fx.phiMn_kNm||1e-9); rec.flexUtilY=d.Mu_y/(fyres.phiMn_kNm||1e-9); rec.owsUtilX=d.Vu_x/(owsX.phiVc_kN||1e-9); rec.owsUtilY=d.Vu_y/(owsY.phiVc_kN||1e-9); }
    return {solutions,fx,fyres,owsX,owsY};
  };

  // Provided reinforcement based capacities
  Core.flexureFromProvided = ({As_mm2,b_m,d_m,fc_MPa,fy_MPa,phi}) => {
    const b_mm=b_m*1000,d_mm=d_m*1000; const a_mm=(As_mm2*fy_MPa)/(0.85*fc_MPa*b_mm); const jd=d_mm-a_mm/2; const Mn=As_mm2*fy_MPa*jd; return {phiMn_kNm:(phi*Mn)/1e6};
  };

  if(typeof module !== 'undefined' && module.exports){ 
    module.exports = Core; 
  } else { 
    global.PileCapCore = Core; 
  }
})(typeof global !== 'undefined' ? global : this);
