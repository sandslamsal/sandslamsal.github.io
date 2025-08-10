---
layout: page
permalink: /apps/pilecap/
title: PileCapDesign - Rigid Pile Cap Load Distribution
description: Rigid pile cap load & moment distribution to piles, reactions, uplift and basic checks.
nav: false
---

<div class="post pilecap-app" id="pilecap-app-root">
  <a href="/apps/" class="back-button">&larr; Back to Apps</a>
  <h1>PileCapDesign (Beta)</h1>
  <p class="intro">Rigid distribution of axial load P and biaxial moments Mx, My to pile reactions assuming a perfectly rigid cap. Provides reactions, uplift highlighting, basic capacity utilisation and a preliminary punching shear check.</p>

  <form id="pilecap-form" class="pc-form" novalidate>
    <fieldset>
      <legend>Loads</legend>
      <div class="field"><label for="pc-load-p">Axial Load P (kN)</label><input type="number" id="pc-load-p" step="0.01" required value="5000"></div>
      <div class="field-group">
        <div class="field"><label for="pc-mx">Mx (kN·m) (+ causes compression at −y)</label><input type="number" id="pc-mx" step="0.01" value="0"></div>
        <div class="field"><label for="pc-my">My (kN·m) (+ causes compression at +x)</label><input type="number" id="pc-my" step="0.01" value="0"></div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Pile Layout</legend>
      <p class="help">Enter pile coordinates (m). One pile per line as: x,y  (comma / space separated). Example rectangle shown.</p>
      <textarea id="pc-coords" rows="6" placeholder="0,0
3,0
3,2
0,2">0,0
3,0
3,2
0,2</textarea>
    </fieldset>

    <fieldset>
      <legend>Cap & Pile Properties</legend>
      <div class="field-group">
        <div class="field"><label for="pc-allow-comp">Allowable Compression (kN)</label><input type="number" id="pc-allow-comp" value="1500" step="1"></div>
        <div class="field"><label for="pc-allow-ten">Allowable Tension (kN) (>=0)</label><input type="number" id="pc-allow-ten" value="0" step="1"></div>
        <div class="field"><label for="pc-fc">Concrete f'c (MPa)</label><input type="number" id="pc-fc" value="35" step="1"></div>
      </div>
      <div class="field-group">
        <div class="field"><label for="pc-diameter">Pile Diameter d_p (m)</label><input type="number" id="pc-diameter" value="0.4" step="0.01"></div>
        <div class="field"><label for="pc-cap-thk">Cap Thickness t_c (m)</label><input type="number" id="pc-cap-thk" value="0.9" step="0.01"></div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Member Demands & Strips</legend>
      <div class="field-group">
        <div class="field"><label for="pc-fy">Steel fy (MPa)</label><input type="number" id="pc-fy" value="420" step="1"></div>
        <div class="field"><label for="pc-phi-flex">ϕ (Flexure)</label><input type="number" id="pc-phi-flex" value="0.90" step="0.01"></div>
        <div class="field"><label for="pc-phi-shear">ϕ (Shear)</label><input type="number" id="pc-phi-shear" value="0.75" step="0.01"></div>
      </div>
      <div class="field-group">
        <div class="field"><label for="pc-bx">Strip width b<sub>x</sub> (m)</label><input type="number" id="pc-bx" value="1.0" step="0.01"></div>
        <div class="field"><label for="pc-by">Strip width b<sub>y</sub> (m)</label><input type="number" id="pc-by" value="1.0" step="0.01"></div>
        <div class="field"><label for="pc-deff">Effective depth d (m)</label><input type="number" id="pc-deff" value="0.72" step="0.01"></div>
      </div>
      <div class="field-group">
        <div class="field"><label for="pc-mux">Mu<sub>x</sub> (kN·m)</label><input type="number" id="pc-mux" value="800" step="1"></div>
        <div class="field"><label for="pc-muy">Mu<sub>y</sub> (kN·m)</label><input type="number" id="pc-muy" value="650" step="1"></div>
        <div class="field"><label for="pc-vux">Vu<sub>x</sub> (kN)</label><input type="number" id="pc-vux" value="250" step="1"></div>
        <div class="field"><label for="pc-vuy">Vu<sub>y</sub> (kN)</label><input type="number" id="pc-vuy" value="220" step="1"></div>
      </div>
    </fieldset>

    <div class="action-row">
      <button type="button" id="pc-analyze" class="calc-button">Analyze</button>
      <button type="button" id="pc-example" class="calc-button secondary">Load Example</button>
      <button type="reset" class="calc-button secondary" id="pc-reset">Reset</button>
    </div>
  </form>

  <div id="pc-status" class="pc-status" role="status" aria-live="polite"></div>

  <div id="pc-results" class="pc-results" hidden>
    <h2>Results</h2>
    <div class="pc-summary" id="pc-summary"></div>
    <div class="pc-table-wrapper">
      <table class="pc-table" id="pc-table" aria-describedby="pc-summary">
        <thead><tr><th>#</th><th>x (m)</th><th>y (m)</th><th>Reaction (kN)</th><th>Utilisation</th><th>Status</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
    <div class="pc-plot-wrapper">
      <canvas id="pc-plan" width="600" height="400" aria-label="Pile reaction plan view"></canvas>
    </div>
    <div class="pc-punch" id="pc-punch"></div>
    <div class="pc-flexure" id="pc-flexure"></div>
    <div class="pc-ows" id="pc-ows"></div>
  </div>

  <section class="pc-notes">
    <h3>Method Notes</h3>
    <ul>
      <li>Assumes rigid cap: reaction distribution via linear surface R(x,y)=a+b x'+c y'.</li>
      <li>Centroid subtraction ensures Σx'=Σy'=0 so a=P/n.</li>
      <li>Moments give 2×2 system for b & c including coupling term Σx'y'.</li>
      <li>Uplift reported where reaction &lt; 0 (tension). Tension capacity check uses allowable tension input.</li>
      <li>Punching shear check: preliminary per-pile check using the most compressed pile with V<sub>u</sub> = P<sub>max</sub>, critical perimeter at d/2 around pile (b<sub>0</sub> = π(d<sub>p</sub> + d)), nominal V<sub>c</sub> = 0.33√f'c·b<sub>0</sub>·d (SI formulation, converted to kN), and ϕ = 0.75.</li>
      <li>Flexure module assumes singly-reinforced rectangular strip; ϕM<sub>n</sub> computed from equilibrium with a=As·fy/(0.85f'c·b). ACI/AASHTO-style β<sub>1</sub> approximation is used.</li>
      <li>One-way shear uses an ACI-like V<sub>c</sub>=0.17·λ·√f'c·b·d in SI (converted to kN). Adjust ϕ as needed.</li>
      <li>Beta version: does not include differential stiffness or lateral load effects.</li>
    </ul>
  </section>
</div>

<script>
(function(){
  // ------- Utilities -------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  function toNumber(el) { const v = parseFloat(el.value); return isNaN(v) ? 0 : v; }
  function parseCoords(text) {
    // Accept comma or space separated pairs; ignore blank lines
    return text.split(/\n+/).map(l=>l.trim()).filter(Boolean).map(l=>{
      const parts = l.split(/[\s,]+/).map(Number).filter(v=>!isNaN(v));
      if(parts.length < 2) throw new Error(`Invalid line: "${l}"`);
      return {x: parts[0], y: parts[1]};
    });
  }
  function mean(arr){ return arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0; }

  // ------- RC Flexure (rectangular, singly-reinforced) -------
  // Units: MPa, m, kN·m; internal conversion to N & mm
  function flexure_As_required({Mu_kNm, b_m, d_m, fc_MPa, fy_MPa, phi}){
    const Mu_Nmm = Mu_kNm * 1e6; // kN·m -> N·mm
    const b_mm = b_m * 1000;
    const d_mm = d_m * 1000;
    const beta1 = Math.max(0.65, Math.min(0.85, 0.85 - 0.05*((fc_MPa-28)/7))); // ACI-like
    // Solve As iteratively for phi*Mn >= Mu
    let As_mm2 = 1000.0; // initial guess
    const eps = 1e-6;
    for(let i=0;i<200;i++){
      const a_mm = (As_mm2 * fy_MPa) / (0.85 * fc_MPa * b_mm);
      const jd_mm = d_mm - a_mm/2.0;
      const Mn_Nmm = As_mm2 * fy_MPa * jd_mm; // nominal
      const phiMn = phi * Mn_Nmm;
      if (phiMn >= Mu_Nmm) break;
      // update with secant-like step
      const deficit = (Mu_Nmm - phiMn) / (fy_MPa * Math.max(jd_mm, 1.0));
      As_mm2 += Math.max(10.0, deficit);
    }
    // Minimum steel (ACI/AASHTO common simplification): As_min = 0.0018 * b * h
    const h_mm = (d_m/0.8) * 1000; // if d≈0.8h assumption
    const As_min = 0.0018 * b_mm * h_mm;
    const As_req = Math.max(As_mm2, As_min);
    const a_mm = (As_req * fy_MPa) / (0.85 * fc_MPa * b_mm);
    const jd_mm = d_mm - a_mm/2.0;
    const Mn_Nmm = As_req * fy_MPa * jd_mm;
    const phiMn_kNm = (phi * Mn_Nmm)/1e6;
    return { As_req_mm2: As_req, As_min_mm2: As_min, phiMn_kNm, a_mm, jd_mm };
  }

  // ------- One-Way Shear (code-parameterized) -------
  // Vc (N) = 0.17 * λ * sqrt(fc[MPa]) * b[mm] * d[mm] (ACI-like). Convert to kN.
  function oneWayShear({Vu_kN, b_m, d_m, fc_MPa, phi, lambda_c=1.0}){
    const b_mm = b_m * 1000;
    const d_mm = d_m * 1000;
    const Vc_N = 0.17 * lambda_c * Math.sqrt(fc_MPa) * b_mm * d_mm;
    const Vc_kN = Vc_N / 1000;
    const phiVc_kN = phi * Vc_kN;
    const util = phiVc_kN > 0 ? Vu_kN / phiVc_kN : Infinity;
    return { Vu_kN, Vc_kN, phiVc_kN, util, OK: util <= 1.0 };
  }

  // ------- Core Calculations -------
  function computeReactions({P, Mx, My, coords}){
    // Shift to centroid so \Sigma x' = \Sigma y' = 0
    const cx = mean(coords.map(p=>p.x));
    const cy = mean(coords.map(p=>p.y));
    const pts = coords.map(p=>({ x: p.x - cx, y: p.y - cy }));
    const n = pts.length;

    // Sums for 2x2 system
    let Sxx = 0, Syy = 0, Sxy = 0;
    for(const p of pts){ Sxx += p.x*p.x; Syy += p.y*p.y; Sxy += p.x*p.y; }

    // a = P/n (since sum x' = sum y' = 0)
    const a = P / n;

    // Solve for b and c:
    // [ Sxx  Sxy ] [ b ] = [ My ]
    // [ Sxy  Syy ] [ c ]   [ Mx ]
    const det = Sxx*Syy - Sxy*Sxy;
    const eps = 1e-12;
    const b = Math.abs(det) < eps ? 0 : (  Syy*My - Sxy*Mx)/det;
    const c = Math.abs(det) < eps ? 0 : (-Sxy*My + Sxx*Mx)/det;

    // Reactions
    const reactions = pts.map((p, i)=>{
      const R = a + b*p.x + c*p.y; // kN
      return { index: i+1, x: coords[i].x, y: coords[i].y, R, x0:p.x, y0:p.y };
    });

    const Pmax = Math.max(...reactions.map(r=>r.R));
    const Pmin = Math.min(...reactions.map(r=>r.R));
    return { reactions, Pmax, Pmin, cx, cy, a, b, c, Sxx, Syy, Sxy };
  }

  function utilisation(R, allowComp, allowTen){
    if(R >= 0){
      // compression
      return allowComp > 0 ? R/allowComp : Infinity;
    } else {
      // tension (uplift)
      const T = Math.abs(R);
      return allowTen > 0 ? T/allowTen : Infinity;
    }
  }

  // Preliminary punching check per Notes (metric):
  // V_c [N] = 0.33 * sqrt(f'c[MPa]) * b0[mm] * d[mm]
  // Use most compressed pile, critical perimeter at d/2 around a circular pile: b0 = pi*(d_p + d)
  function punchingCheck({fcMPa, pileDia_m, capThk_m}, maxReaction_kN){
    const d = 0.8 * capThk_m; // m
    const b0_m = Math.PI * (pileDia_m + d); // m
    const b0_mm = b0_m * 1000;
    const d_mm = d * 1000;
    const Vc_N = 0.33 * Math.sqrt(fcMPa) * b0_mm * d_mm; // N
    const Vc_kN = Vc_N / 1000; // kN
    const phi = 0.75; // typical
    const phiVc = phi * Vc_kN;
    const Vu = Math.max(0, maxReaction_kN); // kN
    const util = phiVc > 0 ? Vu / phiVc : Infinity;
    return { d_m: d, b0_m, Vc_kN, phi, phiVc_kN: phiVc, Vu_kN: Vu, utilisation: util, OK: util <= 1.0 };
  }

  // ------- Rendering -------
  function renderTable({reactions}, allowComp, allowTen){
    const tbody = $("#pc-table tbody");
    tbody.innerHTML = "";
    for(const r of reactions){
      const u = utilisation(r.R, allowComp, allowTen);
      const status = r.R < 0 ? (allowTen > 0 ? (u<=1?"OK (tension)":"NG (tension)") : "Uplift")
                             : (u<=1?"OK":"NG");
      const tr = document.createElement("tr");
      if(r.R < 0) tr.classList.add("uplift");
      tr.innerHTML = `
        <td>${r.index}</td>
        <td>${r.x.toFixed(3)}</td>
        <td>${r.y.toFixed(3)}</td>
        <td>${r.R.toFixed(2)}</td>
        <td>${Number.isFinite(u)?u.toFixed(2):"-"}</td>
        <td>${status}</td>
      `;
      tbody.appendChild(tr);
    }
  }

  function renderSummary(sol, allowComp, allowTen){
    const {Pmax, Pmin} = sol;
    const uMax = utilisation(Pmax, allowComp, allowTen);
    const uMin = utilisation(Pmin, allowComp, allowTen);
    $("#pc-summary").innerHTML = `
      <p><strong>Pmax:</strong> ${Pmax.toFixed(2)} kN (util ${Number.isFinite(uMax)?uMax.toFixed(2):"-"})
      &nbsp; &nbsp; <strong>Pmin:</strong> ${Pmin.toFixed(2)} kN (util ${Number.isFinite(uMin)?uMin.toFixed(2):"-"})</p>
    `;
  }

  function renderPlan(sol){
    const canvas = $("#pc-plan");
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0,0,W,H);

    const xs = sol.reactions.map(r=>r.x), ys = sol.reactions.map(r=>r.y);
    const minx = Math.min(...xs), maxx = Math.max(...xs);
    const miny = Math.min(...ys), maxy = Math.max(...ys);
    const pad = 40;
    const sx = (W-2*pad)/((maxx-minx)||1);
    const sy = (H-2*pad)/((maxy-miny)||1);
    const toCanvas = (x,y)=>({
      X: pad + (x-minx)*sx,
      Y: H - (pad + (y-miny)*sy)
    });

    // Axes
    ctx.lineWidth = 1; ctx.strokeStyle = '#ccc';
    ctx.strokeRect(pad, pad, W-2*pad, H-2*pad);

    // Color scale by reaction
    const vals = sol.reactions.map(r=>r.R);
    const vmin = Math.min(...vals), vmax = Math.max(...vals);
    function color(v){
      // blue (tension) to red (compression)
      const t = (v - vmin)/((vmax-vmin)||1);
      const r = Math.round(255*t), b = Math.round(255*(1-t));
      return `rgb(${r},80,${b})`;
    }

    for(const r of sol.reactions){
      const {X,Y} = toCanvas(r.x, r.y);
      ctx.beginPath();
      ctx.arc(X, Y, 6, 0, Math.PI*2);
      ctx.fillStyle = color(r.R);
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.stroke();

      ctx.fillStyle = '#000';
      ctx.font = '12px sans-serif';
      ctx.fillText(`#${r.index}`, X+8, Y-8);
      ctx.fillText(`${r.R.toFixed(0)} kN`, X+8, Y+10);
    }
  }

  function renderPunch(p){
    const el = $("#pc-punch");
    el.innerHTML = `
      <h3>Punching Check (Preliminary)</h3>
      <p><strong>Vu:</strong> ${p.Vu_kN.toFixed(1)} kN, <strong>ϕVc:</strong> ${p.phiVc_kN.toFixed(1)} kN
      &nbsp; <strong>Util:</strong> ${Number.isFinite(p.utilisation)?p.utilisation.toFixed(2):"-"}
      &nbsp; <strong>Status:</strong> ${p.OK?"OK":"NG"}</p>
      <p><em>Assumptions:</em> d = 0.8·t_c, b₀ = π(d_p + d), ϕ = 0.75, V_c = 0.33√f'c·b₀·d (SI, N). Convert to kN.</p>
    `;
  }

  function renderFlexure(resX, resY){
    const el = document.getElementById("pc-flexure");
    el.innerHTML = `
      <h3>Flexure (Singly-Reinforced, Rectangular)</h3>
      <table class="pc-table"><thead><tr><th>Strip</th><th>ϕM<sub>n</sub> (kN·m)</th><th>A<sub>s,req</sub> (mm²)</th><th>A<sub>s,min</sub> (mm²)</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>X</td><td>${resX.phiMn_kNm.toFixed(1)}</td><td>${resX.As_req_mm2.toFixed(0)}</td><td>${resX.As_min_mm2.toFixed(0)}</td><td>${resX.phiMn_kNm>=toNumber(document.getElementById('pc-mux'))?"OK":"NG"}</td></tr>
        <tr><td>Y</td><td>${resY.phiMn_kNm.toFixed(1)}</td><td>${resY.As_req_mm2.toFixed(0)}</td><td>${resY.As_min_mm2.toFixed(0)}</td><td>${resY.phiMn_kNm>=toNumber(document.getElementById('pc-muy'))?"OK":"NG"}</td></tr>
      </tbody></table>`;
  }

  function renderOWS(sx, sy){
    const el = document.getElementById("pc-ows");
    el.innerHTML = `
      <h3>One-Way Shear</h3>
      <table class="pc-table"><thead><tr><th>Strip</th><th>V<sub>u</sub> (kN)</th><th>ϕV<sub>c</sub> (kN)</th><th>Util</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>X</td><td>${sx.Vu_kN.toFixed(1)}</td><td>${sx.phiVc_kN.toFixed(1)}</td><td>${Number.isFinite(sx.util)?sx.util.toFixed(2):"-"}</td><td>${sx.OK?"OK":"NG"}</td></tr>
        <tr><td>Y</td><td>${sy.Vu_kN.toFixed(1)}</td><td>${sy.phiVc_kN.toFixed(1)}</td><td>${Number.isFinite(sy.util)?sy.util.toFixed(2):"-"}</td><td>${sy.OK?"OK":"NG"}</td></tr>
      </tbody></table>`;
  }

  // ------- Actions -------
  function run(){
    const P = toNumber($("#pc-load-p"));
    const Mx = toNumber($("#pc-mx"));
    const My = toNumber($("#pc-my"));
    const allowComp = toNumber($("#pc-allow-comp"));
    const allowTen = toNumber($("#pc-allow-ten"));
    const fc = toNumber($("#pc-fc"));
    const d_p = toNumber($("#pc-diameter"));
    const t_c = toNumber($("#pc-cap-thk"));
    let coords;
    try {
      coords = parseCoords($("#pc-coords").value);
    } catch(err){
      const s = $("#pc-status");
      s.textContent = err.message; s.classList.add("error");
      return;
    }

    const sol = computeReactions({P, Mx, My, coords});
    const pc = punchingCheck({fcMPa: fc, pileDia_m: d_p, capThk_m: t_c}, sol.Pmax);

    // Flexure
    const fy = toNumber(document.getElementById('pc-fy'));
    const phiF = toNumber(document.getElementById('pc-phi-flex')) || 0.9;
    const b_x = toNumber(document.getElementById('pc-bx'));
    const b_y = toNumber(document.getElementById('pc-by'));
    const d_eff = toNumber(document.getElementById('pc-deff')) || (0.8 * toNumber(document.getElementById('pc-cap-thk')));
    const Mu_x = toNumber(document.getElementById('pc-mux'));
    const Mu_y = toNumber(document.getElementById('pc-muy'));
    const fx = flexure_As_required({Mu_kNm: Mu_x, b_m: b_x, d_m: d_eff, fc_MPa: fc, fy_MPa: fy, phi: phiF});
    const fyres = flexure_As_required({Mu_kNm: Mu_y, b_m: b_y, d_m: d_eff, fc_MPa: fc, fy_MPa: fy, phi: phiF});

    // One-way shear
    const phiV = toNumber(document.getElementById('pc-phi-shear')) || 0.75;
    const Vu_x = toNumber(document.getElementById('pc-vux'));
    const Vu_y = toNumber(document.getElementById('pc-vuy'));
    const owsX = oneWayShear({Vu_kN: Vu_x, b_m: b_x, d_m: d_eff, fc_MPa: fc, phi: phiV});
    const owsY = oneWayShear({Vu_kN: Vu_y, b_m: b_y, d_m: d_eff, fc_MPa: fc, phi: phiV});

    $("#pc-status").textContent = "Calculated.";
    $("#pc-results").hidden = false;
    renderSummary(sol, allowComp, allowTen);
    renderTable(sol, allowComp, allowTen);
    renderPlan(sol);
    renderPunch(pc);
    renderFlexure(fx, fyres);
    renderOWS(owsX, owsY);
  }

  function loadExample(){
    $("#pc-load-p").value = 5000;
    $("#pc-mx").value = 0;
    $("#pc-my").value = 0;
    $("#pc-allow-comp").value = 1500;
    $("#pc-allow-ten").value = 0;
    $("#pc-fc").value = 35;
    $("#pc-diameter").value = 0.4;
    $("#pc-cap-thk").value = 0.9;
    $("#pc-coords").value = "0,0\n3,0\n3,2\n0,2";
  }

  $("#pc-analyze").addEventListener("click", run);
  $("#pc-example").addEventListener("click", loadExample);
  $("#pc-reset").addEventListener("click", ()=>{
    $("#pc-results").hidden = true; $("#pc-status").textContent = "";
  });
})();
</script>
