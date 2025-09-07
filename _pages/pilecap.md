---
layout: page
permalink: /apps/pilecap/
title: PileCapDesign - Rigid Pile Cap Load Distribution
description: Rigid pile cap load & moment distribution to piles, reactions, uplift and basic checks.
nav: false
---
<!-- filepath: /Users/sandeshlamsal/Desktop/MyWeb/sandslamsal.github.io/_pages/pilecap.md -->
<!-- markdownlint-disable MD033 -->

<div class="post pilecap-app" id="pilecap-app-root">
  <a href="/apps/" class="back-button">&larr; Back to Apps</a>
  <h1>PileCapDesign (Beta)</h1>
  <p class="intro">Rigid distribution of axial load P and biaxial moments Mx, My to pile reactions assuming a perfectly rigid cap. Provides reactions, uplift highlighting, basic capacity utilisation and a preliminary punching shear check.</p>

  <form id="pilecap-form" class="pc-form" novalidate>
    
    <!-- New Comprehensive Design Data Input System -->
    <fieldset class="design-data-section">
      <legend>📋 Design Data Input System</legend>
      
      <!-- Project Information -->
      <div class="subsection">
        <h4>Project Information</h4>
        <div class="field-group">
          <div class="field"><label for="pc-project-name">Project Name</label><input type="text" id="pc-project-name" value="Pile Cap Design"></div>
          <div class="field"><label for="pc-designer">Designer</label><input type="text" id="pc-designer" value=""></div>
          <div class="field"><label for="pc-date">Date</label><input type="date" id="pc-date"></div>
        </div>
      </div>

      <!-- Footing Data -->
      <div class="subsection">
        <h4>🏗️ Footing Data</h4>
        <div class="field-group">
          <div class="field"><label for="pc-footing-length">Footing Length (ft)</label><input type="number" id="pc-footing-length" step="0.1" value="20.0"></div>
          <div class="field"><label for="pc-footing-width">Footing Width (ft)</label><input type="number" id="pc-footing-width" step="0.1" value="16.0"></div>
          <div class="field"><label for="pc-footing-thickness">Footing Thickness (ft)</label><input type="number" id="pc-footing-thickness" step="0.1" value="3.0"></div>
        </div>
        <div class="field-group">
          <div class="field"><label for="pc-top-elevation">Top of Footing Elevation (ft)</label><input type="number" id="pc-top-elevation" step="0.1" value="100.0"></div>
          <div class="field"><label for="pc-bottom-elevation">Bottom of Footing Elevation (ft)</label><input type="number" id="pc-bottom-elevation" step="0.1" value="97.0"></div>
        </div>
        <div class="field-group">
          <div class="field"><label for="pc-concrete-fc">Concrete f'c (psi)</label><input type="number" id="pc-concrete-fc" step="100" value="4000"></div>
          <div class="field"><label for="pc-concrete-density">Concrete Density (pcf)</label><input type="number" id="pc-concrete-density" step="1" value="150"></div>
          <div class="field"><label for="pc-concrete-ec">Concrete Ec (ksi)</label><input type="number" id="pc-concrete-ec" step="100" value="3605"></div>
        </div>
      </div>

      <!-- Pile Data -->
      <div class="subsection">
        <h4>🔧 Pile Data</h4>
        <div class="field-group">
          <div class="field"><label for="pc-pile-size">Pile Size (in)</label><input type="number" id="pc-pile-size" step="0.5" value="14"></div>
          <div class="field"><label for="pc-pile-capacity-compression">Pile Capacity - Compression (kips)</label><input type="number" id="pc-pile-capacity-compression" step="10" value="350"></div>
          <div class="field"><label for="pc-pile-capacity-tension">Pile Capacity - Tension (kips)</label><input type="number" id="pc-pile-capacity-tension" step="10" value="100"></div>
        </div>
        <div class="field-group">
          <div class="field"><label for="pc-pile-spacing-x">Pile Spacing X-direction (ft)</label><input type="number" id="pc-pile-spacing-x" step="0.5" value="8.0"></div>
          <div class="field"><label for="pc-pile-spacing-y">Pile Spacing Y-direction (ft)</label><input type="number" id="pc-pile-spacing-y" step="0.5" value="8.0"></div>
        </div>
        <div class="field-group">
          <div class="field"><label for="pc-pile-no-x">Number of Piles (X-direction)</label><input type="number" id="pc-pile-no-x" min="1" step="1" value="3"></div>
          <div class="field"><label for="pc-pile-no-y">Number of Piles (Y-direction)</label><input type="number" id="pc-pile-no-y" min="1" step="1" value="2"></div>
        </div>
        <div class="field-group">
          <div class="field"><label for="pc-pile-top-elevation">Top of Pile Elevation (ft)</label><input type="number" id="pc-pile-top-elevation" step="0.1" value="97.0"></div>
          <div class="field"><label for="pc-pile-tip-elevation">Tip of Pile Elevation (ft)</label><input type="number" id="pc-pile-tip-elevation" step="0.1" value="47.0"></div>
        </div>
      </div>

      <!-- Column Data -->
      <div class="subsection">
        <h4>🏛️ Column Data</h4>
        <div class="field-group">
          <div class="field"><label for="pc-column-x-dim">Column X-dimension (ft)</label><input type="number" id="pc-column-x-dim" step="0.1" value="2.0"></div>
          <div class="field"><label for="pc-column-y-dim">Column Y-dimension (ft)</label><input type="number" id="pc-column-y-dim" step="0.1" value="2.0"></div>
          <div class="field"><label for="pc-column-base-elevation">Column Base Elevation (ft)</label><input type="number" id="pc-column-base-elevation" step="0.1" value="100.0"></div>
        </div>
      </div>

      <!-- Additional Design Parameters -->
      <div class="subsection">
        <h4>🏗️ Additional Design Parameters</h4>
        <div class="field-group">
          <div class="field"><label for="pc-pile-overhang">Pile Overhang (in)</label><input type="number" id="pc-pile-overhang" step="0.5" value="6.0"></div>
          <div class="field"><label for="pc-pile-embedment">Pile Embedment in Footing (in)</label><input type="number" id="pc-pile-embedment" step="0.5" value="6.0"></div>
          <div class="field"><label for="pc-seal-thickness">Seal Thickness (ft)</label><input type="number" id="pc-seal-thickness" step="0.1" value="0.5"></div>
        </div>
        <div class="field-group">
          <div class="field"><label for="pc-reinforcing-cover">Reinforcing Cover (in)</label><input type="number" id="pc-reinforcing-cover" step="0.25" value="3.0"></div>
          <div class="field"><label for="pc-reinforcing-steel-fy">Reinforcing Steel fy (ksi)</label><input type="number" id="pc-reinforcing-steel-fy" step="1" value="60"></div>
          <div class="field"><label for="pc-concrete-fc-ksi">Concrete f'c (ksi)</label><input type="number" id="pc-concrete-fc-ksi" step="0.1" value="4.0"></div>
        </div>
        <div class="field-group">
          <div class="field"><label for="pc-soil-weight">Soil Weight (ksf)</label><input type="number" id="pc-soil-weight" step="0.01" value="0.12"></div>
          <div class="field"><label for="pc-ground-elevation">Ground Elevation (ft)</label><input type="number" id="pc-ground-elevation" step="0.1" value="105.0"></div>
          <div class="field"><label for="pc-water-elevation">Water Elevation (ft)</label><input type="number" id="pc-water-elevation" step="0.1" value="95.0"></div>
        </div>
        <div class="field-group">
          <div class="field"><label for="pc-column-ecc-x">Column Eccentricity X (ft)</label><input type="number" id="pc-column-ecc-x" step="0.1" value="0.0"></div>
          <div class="field"><label for="pc-column-ecc-y">Column Eccentricity Y (ft)</label><input type="number" id="pc-column-ecc-y" step="0.1" value="0.0"></div>
        </div>
      </div>

      <!-- Generate Pile Coordinates Button -->
      <div class="action-row">
        <button type="button" id="pc-generate-coords" class="calc-button">🎯 Generate Pile Coordinates</button>
        <button type="button" id="pc-validate-layout" class="calc-button secondary">✅ Validate Layout</button>
      </div>

      <!-- Pile Coordinates Display -->
      <div id="pc-coordinates-display" class="coordinates-display" hidden>
        <h4>📍 Generated Pile Coordinates</h4>
        <div id="pc-coordinates-table"></div>
        <div id="pc-layout-validation" class="validation-results"></div>
      </div>
    </fieldset>

    <fieldset>
      <legend>📊 Load Input Configuration</legend>
      
      <!-- Load Case Selection -->
      <div class="load-case-selection">
        <h4>Load Case Selection</h4>
        <div class="field-group">
          <label class="radio-option">
            <input type="radio" name="load-case-type" id="pc-single-load" value="single" checked>
            <span>Single Load Case</span>
          </label>
          <label class="radio-option">
            <input type="radio" name="load-case-type" id="pc-multiple-loads" value="multiple">
            <span>Multiple Load Cases</span>
          </label>
        </div>
      </div>

      <!-- Single Load Case Input -->
      <div id="single-load-section" class="load-section">
        <h4>Single Load Case Input</h4>
        <div class="field"><label for="pc-load-p">Axial Load P (kips)</label><input type="number" id="pc-load-p" step="0.01" required value="5000"></div>
        <div class="field-group">
          <div class="field"><label for="pc-mx">Mx (kip-ft) (+ causes compression at −y)</label><input type="number" id="pc-mx" step="0.01" value="0"></div>
          <div class="field"><label for="pc-my">My (kip-ft) (+ causes compression at +x)</label><input type="number" id="pc-my" step="0.01" value="0"></div>
        </div>
      </div>

      <!-- Multiple Load Cases Input -->
      <div id="multiple-load-section" class="load-section" hidden>
        <h4>Multiple Load Cases Input</h4>
        <p class="help">
          Paste data from Excel/CSV with columns: Load Case, Factor, Fx (k), Fy (k), Fz (k), Mx (k-ft), My (k-ft)<br>
          <strong>Example format:</strong><br>
          <code>1  1.00  230  233  6764  10600  12710</code><br>
          <code>2  1.00  -230  233  4876  10590  10160</code>
        </p>
        <textarea id="pc-multiple-load-data" rows="10" placeholder="Load Case	Factor	Fx (k)	Fy (k)	Fz (k)	Mx (k-ft)	My (k-ft)
1	1.00	230	233	6764	10600	12710
2	1.00	-230	233	4876	10590	10160
3	1.00	0	143	8113	6958	1782"></textarea>
        
        <div class="action-row">
          <button type="button" id="pc-parse-loads" class="calc-button secondary">📋 Parse Load Data</button>
          <button type="button" id="pc-clear-loads" class="calc-button secondary">🗑️ Clear Data</button>
        </div>
        
        <!-- Parsed Load Cases Display -->
        <div id="pc-parsed-loads-display" class="parsed-loads-display" hidden>
          <h5>Parsed Load Cases</h5>
          <div id="pc-parsed-loads-table"></div>
        </div>
      </div>
    </fieldset>

    <!-- New Multi Load Case Input -->
    <fieldset>
      <legend>Multi Load Cases (Optional)</legend>
      <p class="help">Enter load cases (overrides single load inputs when not empty). One per line:<br><code>Name  P(kN)  Mx(kN·m)  My(kN·m)</code> (space or comma separated)<br>Example:<br><code>LC1 5000 200 150</code><br><code>LC2 6200 -150 300</code></p>
      <textarea id="pc-loadcases" rows="4" placeholder="LC1 5000 200 150\nLC2 6200 -150 300"></textarea>
      <label class="inline"><input type="checkbox" id="pc-allow-tension-cases"> Allow tension (do not zero negatives)</label>
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

    <fieldset>
      <legend>Column & Reinforcement (Multi-Case Auto)</legend>
      <div class="field-group">
        <div class="field"><label for="pc-colx">Column Dim X (m)</label><input type="number" id="pc-colx" value="1.0" step="0.01"></div>
        <div class="field"><label for="pc-coly">Column Dim Y (m)</label><input type="number" id="pc-coly" value="1.0" step="0.01"></div>
        <div class="field"><label for="pc-bar-dia">Bar Ø (mm)</label><input type="number" id="pc-bar-dia" value="32" step="1"></div>
        <div class="field"><label for="pc-bar-spacing">Bar Spacing (mm)</label><input type="number" id="pc-bar-spacing" value="150" step="5"></div>
      </div>
      <p class="help">Used to auto-compute Mu & Vu per load case from reactions (AASHTO-style simplified). Single-load manual Mu/Vu inputs still honored.</p>
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
    <!-- New multi-case wrapper -->
    <div class="pc-mc-wrapper" id="pc-mc-wrapper" hidden>
      <h2>Multi Load Case Summary</h2>
      <table class="pc-table" id="pc-lc-table"><thead><tr><th>Case</th><th>P (kN)</th><th>Mx</th><th>My</th><th>Pmax</th><th>Pmin</th><th>Punch Util</th><th>Uplift?</th></tr></thead><tbody></tbody></table>
      <h3>Per-Pile Governing Reactions</h3>
      <table class="pc-table" id="pc-pile-extremes"><thead><tr><th>Pile</th><th>x (m)</th><th>y (m)</th><th>Max (kN)</th><th>Case</th><th>Min (kN)</th><th>Case</th></tr></thead><tbody></tbody></table>
      <h3>Multi-Case Strength (Auto Mu/Vu)</h3>
      <table class="pc-table" id="pc-strength-cases"><thead><tr><th>Case</th><th>Mu_x (kN·m)</th><th>Mu_y</th><th>Vu_x (kN)</th><th>Vu_y</th><th>Flex Util X</th><th>Flex Util Y</th><th>OWS Util X</th><th>OWS Util Y</th></tr></thead><tbody></tbody></table>
      <h3>Governing Checks</h3>
      <table class="pc-table" id="pc-governing"><thead><tr><th>Check</th><th>Governing Case</th><th>Utilisation</th></tr></thead><tbody></tbody></table>
    </div>
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

<!-- Include core computational module -->
<script src="/assets/js/pilecap-core.js"></script>

<script>
(function(){
  // ------- Configuration -------
  const PC_USE_BACKEND = false; // Set to true when backend is ready
  const PC_API_URL = '/api/pilecap/analyze';
  let UNIT_SYSTEM = 'SI'; // 'SI' | 'US' (placeholder)

  // ------- Utilities -------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  function toNumber(el) { const v = parseFloat(el.value); return isNaN(v) ? 0 : v; }
  function formatNum(v, dec = 2) { return Number.isFinite(v) ? v.toFixed(dec) : '-'; }
  
  function parseCoords(text) {
    return text.split(/\n+/).map(l => l.trim()).filter(Boolean).map(l => {
      const parts = l.split(/[\s,]+/).map(Number).filter(v => !isNaN(v));
      if (parts.length < 2) throw new Error(`Invalid line: "${l}"`);
      return { x: parts[0], y: parts[1] };
    });
  }

  function parseMultiLoadCases(text) {
    const lines = text.split(/\n+/).map(l => l.trim()).filter(l => l.length);
    const cases = [];
    for (const l of lines) {
      const parts = l.split(/[\s,]+/).filter(Boolean);
      if (parts.length < 4) throw new Error(`Line needs name P Mx My: ${l}`);
      const [name, Ps, Mxs, Mys] = parts;
      const P = parseFloat(Ps), Mx = parseFloat(Mxs), My = parseFloat(Mys);
      if ([P, Mx, My].some(v => isNaN(v))) throw new Error(`Non-numeric in: ${l}`);
      cases.push({ name, P, Mx, My });
    }
    return cases;
  }

  function mean(arr) { return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0; }

  function updateStatus(message, type = 'info') {
    const statusEl = $('#pc-status');
    statusEl.textContent = message;
    statusEl.classList.remove('error', 'success');
    if (type === 'error') statusEl.classList.add('error');
    if (type === 'success') statusEl.classList.add('success');
  }

  // ------- Design Data Input System -------
  
  // Pile utilities functions
  function generatePileCoordinates(pileNoX, pileSpacingXFt, pileNoY, pileSpacingYFt) {
    const pileCoordinates = [];
    let pileNumber = 1;
    const totalWidthX = (pileNoX - 1) * pileSpacingXFt;
    const totalWidthY = (pileNoY - 1) * pileSpacingYFt;
    const startX = -totalWidthX / 2.0;
    const startY = -totalWidthY / 2.0;
    
    for (let j = 0; j < pileNoY; j++) {
      for (let i = 0; i < pileNoX; i++) {
        const xCoord = startX + i * pileSpacingXFt;
        const yCoord = startY + j * pileSpacingYFt;
        pileCoordinates.push({ no: pileNumber, x: xCoord, y: yCoord });
        pileNumber++;
      }
    }
    return pileCoordinates;
  }
  
  function calculatePileGroupProperties(pileCoordinates) {
    if (!pileCoordinates || pileCoordinates.length === 0) return null;
    const totalPiles = pileCoordinates.length;
    const sumX = pileCoordinates.reduce((sum, pile) => sum + pile.x, 0);
    const sumY = pileCoordinates.reduce((sum, pile) => sum + pile.y, 0);
    const centroidX = sumX / totalPiles;
    const centroidY = sumY / totalPiles;
    const momentOfInertiaX = pileCoordinates.reduce((sum, pile) => sum + Math.pow(pile.y - centroidY, 2), 0);
    const momentOfInertiaY = pileCoordinates.reduce((sum, pile) => sum + Math.pow(pile.x - centroidX, 2), 0);
    return { centroidX, centroidY, totalPiles, momentOfInertiaX, momentOfInertiaY };
  }
  
  function validatePileLayout(pileNoX, pileNoY, pileSpacingXFt, pileSpacingYFt, columnXDimFt, columnYDimFt) {
    const warnings = [];
    const errors = [];
    const minSpacing = 3.0;
    if (pileSpacingXFt < minSpacing) warnings.push(`X-direction pile spacing (${pileSpacingXFt} ft) may be too small. Consider minimum ${minSpacing} ft.`);
    if (pileSpacingYFt < minSpacing) warnings.push(`Y-direction pile spacing (${pileSpacingYFt} ft) may be too small. Consider minimum ${minSpacing} ft.`);
    const pileGroupWidth = (pileNoX - 1) * pileSpacingXFt;
    const pileGroupHeight = (pileNoY - 1) * pileSpacingYFt;
    if (pileGroupWidth < columnXDimFt * 1.5) warnings.push(`Pile group width (${pileGroupWidth.toFixed(1)} ft) may be small relative to column width (${columnXDimFt} ft).`);
    if (pileGroupHeight < columnYDimFt * 1.5) warnings.push(`Pile group height (${pileGroupHeight.toFixed(1)} ft) may be small relative to column height (${columnYDimFt} ft).`);
    const totalPiles = pileNoX * pileNoY;
    if (totalPiles < 4) warnings.push(`Total number of piles (${totalPiles}) is very low. Consider increasing for stability.`);
    return { warnings, errors, pileGroupWidth, pileGroupHeight, totalPiles };
  }

  // Initialize design data system
  function initializeDesignDataSystem() {
    const today = new Date().toISOString().split('T')[0];
    $('#pc-date').value = today;
    
    $('#pc-generate-coords').addEventListener('click', generatePileCoordinatesFromInput);
    $('#pc-validate-layout').addEventListener('click', validatePileLayoutFromInput);
    
    ['#pc-pile-no-x', '#pc-pile-no-y', '#pc-pile-spacing-x', '#pc-pile-spacing-y'].forEach(id => {
      $(id).addEventListener('input', updateFootingDimensions);
    });
    
    // Load Case Selection System
    initializeLoadCaseSelection();
  }
  
  // ------- Load Case Selection System -------
  function initializeLoadCaseSelection() {
    const singleRadio = $('#pc-single-load');
    const multipleRadio = $('#pc-multiple-loads');
    const singleSection = $('#single-load-section');
    const multipleSection = $('#multiple-load-section');
    
    function toggleLoadSections() {
      if (singleRadio.checked) {
        singleSection.hidden = false;
        multipleSection.hidden = true;
      } else {
        singleSection.hidden = true;
        multipleSection.hidden = false;
      }
    }
    
    singleRadio.addEventListener('change', toggleLoadSections);
    multipleRadio.addEventListener('change', toggleLoadSections);
    
    $('#pc-parse-loads').addEventListener('click', parseMultipleLoadCases);
    $('#pc-clear-loads').addEventListener('click', clearMultipleLoadCases);
    
    // Initialize with single load case visible
    toggleLoadSections();
  }
  
  function parseMultipleLoadCases() {
    try {
      const rawData = $('#pc-multiple-load-data').value.trim();
      if (!rawData) {
        updateStatus('Please enter load case data to parse.', 'error');
        return;
      }
      
      const parsedCases = parseExcelStyleLoadCases(rawData);
      displayParsedLoadCases(parsedCases);
      updateStatus(`Successfully parsed ${parsedCases.length} load cases.`, 'success');
      
    } catch (error) {
      updateStatus(`Error parsing load cases: ${error.message}`, 'error');
    }
  }
  
  function parseExcelStyleLoadCases(data) {
    const lines = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const loadCases = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Skip header lines that might contain text
      if (line.toLowerCase().includes('load case') || line.toLowerCase().includes('factor')) {
        continue;
      }
      
      // Split by tabs, spaces, or commas and filter out empty strings
      const parts = line.split(/[\t\s,]+/).filter(part => part.length > 0);
      
      if (parts.length < 7) {
        throw new Error(`Line ${i + 1}: Expected 7 columns (Load Case, Factor, Fx, Fy, Fz, Mx, My), got ${parts.length}`);
      }
      
      const [caseId, factor, fx, fy, fz, mx, my] = parts.map((part, index) => {
        if (index === 0) return part; // Keep case ID as string
        const num = parseFloat(part);
        if (isNaN(num)) throw new Error(`Line ${i + 1}: Invalid number "${part}" in column ${index + 1}`);
        return num;
      });
      
      loadCases.push({
        caseId,
        factor,
        forces: { fx, fy, fz },
        moments: { mx, my },
        // Convert to internal units (kN, kN·m) assuming input is in kips, kip-ft
        P: fz * factor, // Axial load (already in kips, convert if needed)
        Mx: mx * factor, // Moment about x-axis
        My: my * factor  // Moment about y-axis
      });
    }
    
    return loadCases;
  }
  
  function displayParsedLoadCases(loadCases) {
    const display = $('#pc-parsed-loads-display');
    const tableContainer = $('#pc-parsed-loads-table');
    
    let html = `<table class="load-cases-table">
      <thead>
        <tr>
          <th>Case</th>
          <th>Factor</th>
          <th>Fx (k)</th>
          <th>Fy (k)</th>
          <th>Fz (k)</th>
          <th>Mx (k-ft)</th>
          <th>My (k-ft)</th>
        </tr>
      </thead>
      <tbody>`;
    
    loadCases.forEach(lc => {
      html += `<tr>
        <td>${lc.caseId}</td>
        <td>${lc.factor.toFixed(2)}</td>
        <td>${lc.forces.fx.toFixed(1)}</td>
        <td>${lc.forces.fy.toFixed(1)}</td>
        <td>${lc.forces.fz.toFixed(1)}</td>
        <td>${lc.moments.mx.toFixed(1)}</td>
        <td>${lc.moments.my.toFixed(1)}</td>
      </tr>`;
    });
    
    html += `</tbody></table>`;
    tableContainer.innerHTML = html;
    display.hidden = false;
    
    // Store parsed data for analysis
    window.parsedLoadCases = loadCases;
  }
  
  function clearMultipleLoadCases() {
    $('#pc-multiple-load-data').value = '';
    $('#pc-parsed-loads-display').hidden = true;
    window.parsedLoadCases = null;
    updateStatus('Load case data cleared.', 'info');
  }
  
  function generatePileCoordinatesFromInput() {
    try {
      const pileNoX = parseInt($('#pc-pile-no-x').value) || 3;
      const pileNoY = parseInt($('#pc-pile-no-y').value) || 2;
      const pileSpacingX = parseFloat($('#pc-pile-spacing-x').value) || 8.0;
      const pileSpacingY = parseFloat($('#pc-pile-spacing-y').value) || 8.0;
      
      const coordinates = generatePileCoordinates(pileNoX, pileSpacingX, pileNoY, pileSpacingY);
      const properties = calculatePileGroupProperties(coordinates);
      
      displayPileCoordinatesInApp(coordinates, properties);
      
      const coordsText = coordinates.map(pile => 
        `${(pile.x * 0.3048).toFixed(3)},${(pile.y * 0.3048).toFixed(3)}`
      ).join('\n');
      $('#pc-coords').value = coordsText;
      
      $('#pc-coordinates-display').hidden = false;
      updateStatus(`Generated ${coordinates.length} pile coordinates successfully.`, 'success');
      
    } catch (error) {
      updateStatus(`Error generating coordinates: ${error.message}`, 'error');
    }
  }
  
  function validatePileLayoutFromInput() {
    try {
      const pileNoX = parseInt($('#pc-pile-no-x').value) || 3;
      const pileNoY = parseInt($('#pc-pile-no-y').value) || 2;
      const pileSpacingX = parseFloat($('#pc-pile-spacing-x').value) || 8.0;
      const pileSpacingY = parseFloat($('#pc-pile-spacing-y').value) || 8.0;
      const columnXDim = parseFloat($('#pc-column-x-dim').value) || 2.0;
      const columnYDim = parseFloat($('#pc-column-y-dim').value) || 2.0;
      
      const validation = validatePileLayout(pileNoX, pileNoY, pileSpacingX, pileSpacingY, columnXDim, columnYDim);
      displayValidationResults(validation);
      $('#pc-coordinates-display').hidden = false;
      
    } catch (error) {
      updateStatus(`Error validating layout: ${error.message}`, 'error');
    }
  }
  
  function displayPileCoordinatesInApp(coordinates, properties) {
    const container = $('#pc-coordinates-table');
    let html = `<div class="coordinates-summary"><h5>Pile Group Summary</h5><div class="summary-grid">`;
    html += `<div>Total Piles: <strong>${properties.totalPiles}</strong></div>`;
    html += `<div>Centroid X: <strong>${properties.centroidX.toFixed(3)} ft</strong></div>`;
    html += `<div>Centroid Y: <strong>${properties.centroidY.toFixed(3)} ft</strong></div>`;
    html += `</div></div><table class="pile-coordinates-table"><thead><tr><th>Pile No.</th><th>X (ft)</th><th>Y (ft)</th><th>X (m)</th><th>Y (m)</th></tr></thead><tbody>`;
    
    coordinates.forEach(pile => {
      const xMeters = pile.x * 0.3048;
      const yMeters = pile.y * 0.3048;
      html += `<tr><td>${pile.no}</td><td>${pile.x.toFixed(2)}</td><td>${pile.y.toFixed(2)}</td><td>${xMeters.toFixed(3)}</td><td>${yMeters.toFixed(3)}</td></tr>`;
    });
    
    html += `</tbody></table>`;
    container.innerHTML = html;
  }
  
  function displayValidationResults(validation) {
    const container = $('#pc-layout-validation');
    let html = `<div class="validation-summary"><h5>Layout Validation</h5>`;
    html += `<div>Pile Group Width: <strong>${validation.pileGroupWidth.toFixed(1)} ft</strong></div>`;
    html += `<div>Total Piles: <strong>${validation.totalPiles}</strong></div></div>`;
    
    if (validation.warnings.length > 0) {
      html += `<div class="validation-warnings"><h6>⚠️ Warnings:</h6><ul>`;
      validation.warnings.forEach(warning => html += `<li>${warning}</li>`);
      html += `</ul></div>`;
    } else {
      html += `<div class="validation-success"><h6>✅ Layout validation passed with no issues.</h6></div>`;
    }
    
    container.innerHTML = html;
  }
  
  function updateFootingDimensions() {
    const pileNoX = parseInt($('#pc-pile-no-x').value) || 3;
    const pileNoY = parseInt($('#pc-pile-no-y').value) || 2;
    const pileSpacingX = parseFloat($('#pc-pile-spacing-x').value) || 8.0;
    const pileSpacingY = parseFloat($('#pc-pile-spacing-y').value) || 8.0;
    
    const pileGroupWidth = (pileNoX - 1) * pileSpacingX;
    const pileGroupHeight = (pileNoY - 1) * pileSpacingY;
    const pileSize = parseFloat($('#pc-pile-size').value) || 14;
    const pileDiameterFt = pileSize / 12;
    const edgeDistance = Math.max(2.0, pileDiameterFt * 2);
    
    const suggestedLength = pileGroupWidth + 2 * edgeDistance;
    const suggestedWidth = pileGroupHeight + 2 * edgeDistance;
    
    const currentLength = parseFloat($('#pc-footing-length').value);
    const currentWidth = parseFloat($('#pc-footing-width').value);
    
    if (currentLength < suggestedLength) $('#pc-footing-length').value = suggestedLength.toFixed(1);
    if (currentWidth < suggestedWidth) $('#pc-footing-width').value = suggestedWidth.toFixed(1);
  }

  // ------- Comprehensive Footing Design Calculations -------
  
  function calculateFootingWeights() {
    const footingLength = parseFloat($('#pc-footing-length').value) || 20.0;
    const footingWidth = parseFloat($('#pc-footing-width').value) || 16.0;
    const footingThickness = parseFloat($('#pc-footing-thickness').value) || 3.0;
    const sealThickness = parseFloat($('#pc-seal-thickness').value) || 0.5;
    const concreteDensity = parseFloat($('#pc-concrete-density').value) || 150; // pcf
    const soilWeight = parseFloat($('#pc-soil-weight').value) || 0.12; // ksf
    const groundElevation = parseFloat($('#pc-ground-elevation').value) || 105.0;
    const topElevation = parseFloat($('#pc-top-elevation').value) || 100.0;
    const waterElevation = parseFloat($('#pc-water-elevation').value) || 95.0;
    
    const footingArea = footingLength * footingWidth; // ft²
    const footingVolume = footingArea * footingThickness; // ft³
    const sealVolume = footingArea * sealThickness; // ft³
    
    // Footing weight
    const footingWeight = footingVolume * concreteDensity / 1000; // kips
    
    // Seal weight
    const sealWeight = sealVolume * concreteDensity / 1000; // kips
    
    // Soil weight above footing
    const soilHeight = Math.max(0, groundElevation - topElevation); // ft
    const soilWeight_kips = footingArea * soilHeight * soilWeight; // kips
    
    // Buoyancy effect (water above bottom of footing)
    const waterHeight = Math.max(0, waterElevation - (topElevation - footingThickness)); // ft
    const buoyancyForce = footingArea * waterHeight * 0.0624; // kips (62.4 pcf for water)
    
    return {
      footingWeight,
      sealWeight,
      soilWeight: soilWeight_kips,
      buoyancyForce,
      totalWeight: footingWeight + sealWeight + soilWeight_kips - buoyancyForce,
      footingArea,
      footingVolume,
      sealVolume
    };
  }
  
  function calculateOneWayShear(pileReactions, footingGeometry) {
    const { footingLength, footingWidth, footingThickness } = footingGeometry;
    const cover = parseFloat($('#pc-reinforcing-cover').value) || 3.0; // inches
    const fc_ksi = parseFloat($('#pc-concrete-fc-ksi').value) || 4.0;
    const columnXDim = parseFloat($('#pc-column-x-dim').value) || 2.0; // ft
    const columnYDim = parseFloat($('#pc-column-y-dim').value) || 2.0; // ft
    
    const d = footingThickness * 12 - cover; // effective depth in inches
    
    // Critical sections for one-way shear
    const criticalSectionX = columnXDim / 2 + d / 12; // ft from centerline
    const criticalSectionY = columnYDim / 2 + d / 12; // ft from centerline
    
    // Calculate shear forces
    let vuX = 0, vuY = 0;
    
    pileReactions.forEach(pile => {
      if (Math.abs(pile.x) > criticalSectionX) {
        vuX += pile.R;
      }
      if (Math.abs(pile.y) > criticalSectionY) {
        vuY += pile.R;
      }
    });
    
    // Shear capacity (ACI 318)
    const lambda = 1.0; // normal weight concrete
    const vcX = 2 * lambda * Math.sqrt(fc_ksi * 1000) * footingWidth * 12 * d / 1000; // kips
    const vcY = 2 * lambda * Math.sqrt(fc_ksi * 1000) * footingLength * 12 * d / 1000; // kips
    
    const phi = 0.75;
    const phiVcX = phi * vcX;
    const phiVcY = phi * vcY;
    
    return {
      vuX: Math.abs(vuX),
      vuY: Math.abs(vuY),
      phiVcX,
      phiVcY,
      utilizationX: Math.abs(vuX) / phiVcX,
      utilizationY: Math.abs(vuY) / phiVcY,
      passX: Math.abs(vuX) <= phiVcX,
      passY: Math.abs(vuY) <= phiVcY
    };
  }
  
  function calculatePunchingShear(pileReactions, footingGeometry) {
    const { footingThickness } = footingGeometry;
    const cover = parseFloat($('#pc-reinforcing-cover').value) || 3.0; // inches
    const fc_ksi = parseFloat($('#pc-concrete-fc-ksi').value) || 4.0;
    const columnXDim = parseFloat($('#pc-column-x-dim').value) || 2.0; // ft
    const columnYDim = parseFloat($('#pc-column-y-dim').value) || 2.0; // ft
    
    const d = footingThickness * 12 - cover; // effective depth in inches
    
    // Critical perimeter for punching shear (at d/2 from column face)
    const criticalLengthX = columnXDim * 12 + d; // inches
    const criticalLengthY = columnYDim * 12 + d; // inches
    const bo = 2 * (criticalLengthX + criticalLengthY); // perimeter in inches
    
    // Total factored load (sum of all pile reactions)
    const vu = pileReactions.reduce((sum, pile) => sum + pile.R, 0); // kips
    
    // Punching shear capacity (ACI 318)
    const lambda = 1.0; // normal weight concrete
    const betac = columnXDim / columnYDim; // aspect ratio
    const alphac = 40; // interior column
    
    // Three potential failure modes
    const vc1 = (2 + 4/betac) * lambda * Math.sqrt(fc_ksi * 1000) * bo * d / 1000; // kips
    const vc2 = (alphac * d/bo + 2) * lambda * Math.sqrt(fc_ksi * 1000) * bo * d / 1000; // kips
    const vc3 = 4 * lambda * Math.sqrt(fc_ksi * 1000) * bo * d / 1000; // kips
    
    const vc = Math.min(vc1, vc2, vc3);
    const phi = 0.75;
    const phiVc = phi * vc;
    
    return {
      vu,
      phiVc,
      utilization: vu / phiVc,
      pass: vu <= phiVc,
      bo: bo / 12, // convert to feet for display
      d: d / 12 // convert to feet for display
    };
  }
  
  function calculateFlexuralMoments(pileReactions, footingGeometry) {
    const columnXDim = parseFloat($('#pc-column-x-dim').value) || 2.0; // ft
    const columnYDim = parseFloat($('#pc-column-y-dim').value) || 2.0; // ft
    const cover = parseFloat($('#pc-reinforcing-cover').value) || 3.0; // inches
    const footingThickness = footingGeometry.footingThickness;
    const fy = parseFloat($('#pc-reinforcing-steel-fy').value) || 60; // ksi
    const fc_ksi = parseFloat($('#pc-concrete-fc-ksi').value) || 4.0;
    
    const d = footingThickness * 12 - cover; // effective depth in inches
    
    // Critical sections for moment (at face of column)
    const criticalSectionX = columnXDim / 2; // ft from centerline
    const criticalSectionY = columnYDim / 2; // ft from centerline
    
    // Calculate moments
    let muX = 0, muY = 0;
    
    pileReactions.forEach(pile => {
      const momentArmX = Math.abs(pile.y) - criticalSectionY;
      const momentArmY = Math.abs(pile.x) - criticalSectionX;
      
      if (momentArmX > 0) {
        muX += pile.R * momentArmX; // kip-ft
      }
      if (momentArmY > 0) {
        muY += pile.R * momentArmY; // kip-ft
      }
    });
    
    // Required reinforcement calculation
    const b = 12; // width of 1-ft strip in inches
    const phi = 0.9;
    
    // Convert moments to inch-kips
    const muX_in = muX * 12;
    const muY_in = muY * 12;
    
    // Calculate required As for each direction
    const asReqX = calculateRequiredSteel(muX_in, b, d, fc_ksi, fy, phi);
    const asReqY = calculateRequiredSteel(muY_in, b, d, fc_ksi, fy, phi);
    
    // Minimum reinforcement
    const asMin = 0.0018 * b * footingThickness * 12; // in²/ft
    
    return {
      muX,
      muY,
      asReqX: Math.max(asReqX, asMin),
      asReqY: Math.max(asReqY, asMin),
      asMin,
      d: d / 12 // convert to feet for display
    };
  }
  
  function calculateRequiredSteel(mu, b, d, fc, fy, phi) {
    // Iterative solution for required steel area
    let as = 0.5; // initial guess in²
    let iteration = 0;
    const maxIterations = 20;
    
    while (iteration < maxIterations) {
      const a = as * fy / (0.85 * fc * b);
      const mn = as * fy * (d - a/2);
      const phiMn = phi * mn;
      
      if (phiMn >= mu) {
        return as;
      }
      
      // Increase steel area
      const deficit = (mu - phiMn) / (phi * fy * d);
      as += Math.max(0.01, deficit);
      iteration++;
    }
    
    return as;
  }
  
  function performComprehensiveDesign(solutions) {
    const footingGeometry = {
      footingLength: parseFloat($('#pc-footing-length').value) || 20.0,
      footingWidth: parseFloat($('#pc-footing-width').value) || 16.0,
      footingThickness: parseFloat($('#pc-footing-thickness').value) || 3.0
    };
    
    const weights = calculateFootingWeights();
    const results = [];
    
    solutions.forEach(solution => {
      const pileReactions = solution.sol.reactions;
      
      // Calculate design checks for this load case
      const oneWayShear = calculateOneWayShear(pileReactions, footingGeometry);
      const punchingShear = calculatePunchingShear(pileReactions, footingGeometry);
      const flexuralMoments = calculateFlexuralMoments(pileReactions, footingGeometry);
      
      results.push({
        loadCase: solution.lc,
        weights,
        oneWayShear,
        punchingShear,
        flexuralMoments,
        overallPass: oneWayShear.passX && oneWayShear.passY && punchingShear.pass
      });
    });
    
    return {
      results,
      weights,
      footingGeometry
    };
  }
  function computeReactionsLocal({ P, Mx, My, coords, activeMask = null }) {
    const useCoords = coords.map((p, i) => ({ ...p, active: !activeMask || activeMask[i] }));
    const active = useCoords.filter(p => p.active);
    if (!active.length) throw new Error('No active piles');
    
    const cx = mean(active.map(p => p.x));
    const cy = mean(active.map(p => p.y));
    const pts = useCoords.map(p => ({ x: p.x - cx, y: p.y - cy, active: p.active }));
    
    const n = active.length;
    let Sxx = 0, Syy = 0, Sxy = 0;
    pts.forEach(p => {
      if (!p.active) return;
      Sxx += p.x * p.x;
      Syy += p.y * p.y;
      Sxy += p.x * p.y;
    });
    
    const a = P / n;
    const det = Sxx * Syy - Sxy * Sxy;
    const eps = 1e-12;
    let b = 0, c = 0;
    if (Math.abs(det) > eps) {
      b = (Syy * My - Sxy * Mx) / det;
      c = (-Sxy * My + Sxx * Mx) / det;
    } else {
      b = Sxx ? My / Sxx : 0;
      c = Syy ? Mx / Syy : 0;
    }
    
    const reactions = coords.map((p, i) => {
      if (activeMask && !useCoords[i].active) 
        return { index: i + 1, x: p.x, y: p.y, R: 0, inactive: true };
      const p0 = pts[i];
      const R = a + b * p0.x + c * p0.y;
      return { index: i + 1, x: p.x, y: p.y, R };
    });
    
    const Pmax = Math.max(...reactions.map(r => r.R));
    const Pmin = Math.min(...reactions.map(r => r.R));
    return { reactions, Pmax, Pmin, cx, cy, a, b, c, Sxx, Syy, Sxy };
  }

  function computeReactionsIterative({ P, Mx, My, coords, maxLoops = 20 }) {
    let activeMask = new Array(coords.length).fill(true);
    let lastNegCount = -1;
    let sol = null;
    
    for (let loop = 0; loop < maxLoops; loop++) {
      sol = computeReactionsLocal({ P, Mx, My, coords, activeMask });
      const negatives = sol.reactions.map((r, i) => ({ r, i })).filter(o => o.r.R < 0 && activeMask[o.i]);
      if (!negatives.length) break; // done
      if (negatives.length === lastNegCount) break; // no change
      negatives.forEach(o => activeMask[o.i] = false);
      lastNegCount = negatives.length;
    }
    
    // Scale positives to carry total P
    const pos = sol.reactions.filter(r => r.R > 0);
    const sumPos = pos.reduce((a, b) => a + b.R, 0);
    if (sumPos > 0) {
      const scale = P / sumPos;
      pos.forEach(r => r.R *= scale);
    }
    sol.Pmax = Math.max(...sol.reactions.map(r => r.R));
    sol.Pmin = Math.min(...sol.reactions.map(r => r.R));
    sol.iterative = true;
    return sol;
  }

  function utilisation(R, allowComp, allowTen) {
    if (R >= 0) { return allowComp > 0 ? R / allowComp : Infinity; }
    const T = Math.abs(R);
    return allowTen > 0 ? T / allowTen : Infinity;
  }

  function punchingCheck({ fcMPa, pileDia_m, capThk_m }, maxReaction_kN) {
    const d = 0.8 * capThk_m;
    const b0_m = Math.PI * (pileDia_m + d);
    const b0_mm = b0_m * 1000;
    const d_mm = d * 1000;
    const Vc_N = 0.33 * Math.sqrt(fcMPa) * b0_mm * d_mm;
    const Vc_kN = Vc_N / 1000;
    const phi = 0.75;
    const phiVc = phi * Vc_kN;
    const Vu = Math.max(0, maxReaction_kN);
    const util = phiVc > 0 ? Vu / phiVc : Infinity;
    return {
      d_m: d, b0_m, Vc_kN, phi, phiVc_kN: phiVc, Vu_kN: Vu,
      utilisation: util, OK: util <= 1.0
    };
  }

  // ------- Flexure & Shear -------
  function flexureCapacity({ Mu_kNm, b_m, d_m, fc_MPa, fy_MPa, phi }) {
    const Mu_Nmm = Mu_kNm * 1e6;
    const b_mm = b_m * 1000;
    const d_mm = d_m * 1000;
    let As_mm2 = 1000.0;
    
    for (let i = 0; i < 200; i++) {
      const a_mm = (As_mm2 * fy_MPa) / (0.85 * fc_MPa * b_mm);
      const jd_mm = d_mm - a_mm / 2.0;
      const Mn_Nmm = As_mm2 * fy_MPa * jd_mm;
      const phiMn = phi * Mn_Nmm;
      if (phiMn >= Mu_Nmm) break;
      const deficit = (Mu_Nmm - phiMn) / (fy_MPa * Math.max(jd_mm, 1.0));
      As_mm2 += Math.max(10.0, deficit);
    }
    
    const h_mm = (d_m / 0.8) * 1000;
    const As_min = 0.0018 * b_mm * h_mm;
    const As_req = Math.max(As_mm2, As_min);
    const a_mm = (As_req * fy_MPa) / (0.85 * fc_MPa * b_mm);
    const jd_mm = d_mm - a_mm / 2.0;
    const Mn_Nmm = As_req * fy_MPa * jd_mm;
    const phiMn_kNm = (phi * Mn_Nmm) / 1e6;
    return { As_req_mm2: As_req, As_min_mm2: As_min, phiMn_kNm, a_mm, jd_mm };
  }

  function oneWayShear({ Vu_kN, b_m, d_m, fc_MPa, phi, lambda_c = 1.0 }) {
    const b_mm = b_m * 1000;
    const d_mm = d_m * 1000;
    const Vc_N = 0.17 * lambda_c * Math.sqrt(fc_MPa) * b_mm * d_mm;
    const Vc_kN = Vc_N / 1000;
    const phiVc_kN = phi * Vc_kN;
    const util = phiVc_kN > 0 ? Vu_kN / phiVc_kN : Infinity;
    return { Vu_kN, Vc_kN, phiVc_kN, util, OK: util <= 1.0 };
  }

  function deriveStrengthDemands(reactions, colx, coly, d_eff) {
    let Mu_x = 0, Mu_y = 0;
    for (const r of reactions) {
      const dx = Math.abs(r.x);
      const dy = Math.abs(r.y);
      if (dy > coly / 2) Mu_x += r.R * (dy - coly / 2);
      if (dx > colx / 2) Mu_y += r.R * (dx - colx / 2);
    }
    
    const cutXp = colx / 2 + d_eff;
    const cutXm = -cutXp;
    const cutYp = coly / 2 + d_eff;
    const cutYm = -cutYp;
    let Vu_x_pos = 0, Vu_x_neg = 0, Vu_y_pos = 0, Vu_y_neg = 0;
    
    for (const r of reactions) {
      if (r.x > cutXp) Vu_y_pos += r.R;
      if (r.x < cutXm) Vu_y_neg += r.R;
      if (r.y > cutYp) Vu_x_pos += r.R;
      if (r.y < cutYm) Vu_x_neg += r.R;
    }
    
    const Vu_x = Math.max(Vu_x_pos, Vu_x_neg, 0);
    const Vu_y = Math.max(Vu_y_pos, Vu_y_neg, 0);
    return { Mu_x, Mu_y, Vu_x, Vu_y };
  }

  // ------- Multi-Case Analysis -------
  function multiCaseAnalyze(cases, coords, allowComp, allowTen, fc, d_p, t_c) {
    const tensionOk = $('#pc-allow-tension-cases').checked;
    const iterative = $('#pc-iter-tension')?.checked;
    const solutions = [];
    
    for (const lc of cases) {
      let sol;
      if (iterative) {
        sol = computeReactionsIterative({ P: lc.P, Mx: lc.Mx, My: lc.My, coords });
      } else {
        sol = computeReactionsLocal({ P: lc.P, Mx: lc.Mx, My: lc.My, coords });
        if (!tensionOk) {
          const neg = sol.reactions.filter(r => r.R < 0);
          if (neg.length) {
            let pos = sol.reactions.filter(r => r.R >= 0);
            const sumPos = pos.reduce((a, b) => a + b.R, 0);
            const scale = sumPos > 0 ? lc.P / sumPos : 1;
            for (const r of pos) r.R *= scale;
            for (const r of neg) r.R = 0;
            sol.Pmax = Math.max(...sol.reactions.map(r => r.R));
            sol.Pmin = Math.min(...sol.reactions.map(r => r.R));
          }
        }
      }
      
      const punch = punchingCheck({ fcMPa: fc, pileDia_m: d_p, capThk_m: t_c }, sol.Pmax);
      solutions.push({ lc, sol, punch });
    }
    return solutions;
  }

  function multiCaseStrength(solutions) {
    const colx = toNumber($('#pc-colx')) || 1.0;
    const coly = toNumber($('#pc-coly')) || 1.0;
    const d_eff = toNumber($('#pc-deff')) || 0.8 * toNumber($('#pc-cap-thk'));
    const fc = toNumber($('#pc-fc'));
    const fy = toNumber($('#pc-fy'));
    const phiF = toNumber($('#pc-phi-flex')) || 0.9;
    const phiV = toNumber($('#pc-phi-shear')) || 0.75;
    const b_x = toNumber($('#pc-bx'));
    const b_y = toNumber($('#pc-by'));
    
    // Pass 1: derive demands per case
    let Mu_x_max = 0, Mu_y_max = 0, Vu_x_max = 0, Vu_y_max = 0;
    for (const rec of solutions) {
      const d = deriveStrengthDemands(rec.sol.reactions, colx, coly, d_eff);
      rec.demands = d;
      Mu_x_max = Math.max(Mu_x_max, d.Mu_x);
      Mu_y_max = Math.max(Mu_y_max, d.Mu_y);
      Vu_x_max = Math.max(Vu_x_max, d.Vu_x);
      Vu_y_max = Math.max(Vu_y_max, d.Vu_y);
    }
    
    // Capacities sized to max demands
    const fx = flexureCapacity({ Mu_kNm: Mu_x_max, b_m: b_x, d_m: d_eff, fc_MPa: fc, fy_MPa: fy, phi: phiF });
    const fyres = flexureCapacity({ Mu_kNm: Mu_y_max, b_m: b_y, d_m: d_eff, fc_MPa: fc, fy_MPa: fy, phi: phiF });
    const owsX = oneWayShear({ Vu_kN: Vu_x_max, b_m: b_x, d_m: d_eff, fc_MPa: fc, phi: phiV });
    const owsY = oneWayShear({ Vu_kN: Vu_y_max, b_m: b_y, d_m: d_eff, fc_MPa: fc, phi: phiV });
    
    // Utilization per case
    for (const rec of solutions) {
      const d = rec.demands;
      rec.flexUtilX = d.Mu_x / (fx.phiMn_kNm || 1e-9);
      rec.flexUtilY = d.Mu_y / (fyres.phiMn_kNm || 1e-9);
      rec.owsUtilX = d.Vu_x / (owsX.phiVc_kN || 1e-9);
      rec.owsUtilY = d.Vu_y / (owsY.phiVc_kN || 1e-9);
    }
    
    return { solutions, fx, fyres, owsX, owsY };
  }

  // ------- Rendering Functions -------
  function renderTable({ reactions }, allowComp, allowTen) {
    const tbody = $('#pc-table tbody');
    tbody.innerHTML = '';
    for (const r of reactions) {
      const u = utilisation(r.R, allowComp, allowTen);
      const status = r.R < 0 ? 
        (allowTen > 0 ? (u <= 1 ? 'OK (tension)' : 'NG (tension)') : 'Uplift') :
        (u <= 1 ? 'OK' : 'NG');
      const tr = document.createElement('tr');
      if (r.R < 0) tr.classList.add('uplift');
      tr.innerHTML = `<td>${r.index}</td><td>${r.x.toFixed(3)}</td><td>${r.y.toFixed(3)}</td><td>${r.R.toFixed(2)}</td><td>${formatNum(u, 2)}</td><td>${status}</td>`;
      tbody.appendChild(tr);
    }
  }

  function renderSummary(sol, allowComp, allowTen) {
    const { Pmax, Pmin } = sol;
    const uMax = utilisation(Pmax, allowComp, allowTen);
    const uMin = utilisation(Pmin, allowComp, allowTen);
    $('#pc-summary').innerHTML = `<p><strong>Pmax:</strong> ${Pmax.toFixed(2)} kN (util ${formatNum(uMax, 2)}) &nbsp; <strong>Pmin:</strong> ${Pmin.toFixed(2)} kN (util ${formatNum(uMin, 2)})</p>`;
  }

  function renderPlan(sol) {
    const canvas = $('#pc-plan');
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    
    const xs = sol.reactions.map(r => r.x), ys = sol.reactions.map(r => r.y);
    const minx = Math.min(...xs), maxx = Math.max(...xs);
    const miny = Math.min(...ys), maxy = Math.max(...ys);
    const pad = 40;
    const sx = (W - 2 * pad) / ((maxx - minx) || 1);
    const sy = (H - 2 * pad) / ((maxy - miny) || 1);
    const toCanvas = (x, y) => ({ X: pad + (x - minx) * sx, Y: H - (pad + (y - miny) * sy) });
    
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ccc';
    ctx.strokeRect(pad, pad, W - 2 * pad, H - 2 * pad);
    
    const vals = sol.reactions.map(r => r.R);
    const vmin = Math.min(...vals), vmax = Math.max(...vals);
    function color(v) {
      if (v < 0) return '#e74c3c';
      const t = (v - vmin) / ((vmax - vmin) || 1);
      const rr = Math.round(255 * t), bb = Math.round(255 * (1 - t));
      return `rgb(${rr},80,${bb})`;
    }
    
    for (const r of sol.reactions) {
      const { X, Y } = toCanvas(r.x, r.y);
      ctx.beginPath();
      ctx.arc(X, Y, 6, 0, Math.PI * 2);
      ctx.fillStyle = color(r.R);
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.stroke();
      ctx.fillStyle = '#000';
      ctx.font = '12px sans-serif';
      ctx.fillText(`#${r.index}`, X + 8, Y - 8);
      ctx.fillText(`${r.R.toFixed(0)} kN`, X + 8, Y + 10);
    }
  }

  function renderPunch(p) {
    $('#pc-punch').innerHTML = `<h3>Punching Check (Preliminary)</h3><p><strong>Vu:</strong> ${p.Vu_kN.toFixed(1)} kN, <strong>ϕVc:</strong> ${p.phiVc_kN.toFixed(1)} kN &nbsp; <strong>Util:</strong> ${formatNum(p.utilisation, 2)} &nbsp; <strong>Status:</strong> ${p.OK ? 'OK' : 'NG'}</p><p><em>Assumptions:</em> d = 0.8·t_c, b₀ = π(d_p + d), ϕ = 0.75, V_c = 0.33√f'c·b₀·d (SI, N). Convert to kN.</p>`;
  }

  function renderFlexure(resX, resY) {
    const Mu_x = toNumber($('#pc-mux'));
    const Mu_y = toNumber($('#pc-muy'));
    $('#pc-flexure').innerHTML = `<h3>Flexure (Singly-Reinforced, Rectangular)</h3><table class="pc-table"><thead><tr><th>Strip</th><th>ϕM<sub>n</sub> (kN·m)</th><th>A<sub>s,req</sub> (mm²)</th><th>A<sub>s,min</sub> (mm²)</th><th>Status</th></tr></thead><tbody><tr><td>X</td><td>${resX.phiMn_kNm.toFixed(1)}</td><td>${resX.As_req_mm2.toFixed(0)}</td><td>${resX.As_min_mm2.toFixed(0)}</td><td>${resX.phiMn_kNm >= Mu_x ? 'OK' : 'NG'}</td></tr><tr><td>Y</td><td>${resY.phiMn_kNm.toFixed(1)}</td><td>${resY.As_req_mm2.toFixed(0)}</td><td>${resY.As_min_mm2.toFixed(0)}</td><td>${resY.phiMn_kNm >= Mu_y ? 'OK' : 'NG'}</td></tr></tbody></table>`;
  }

  function renderOWS(sx, sy) {
    $('#pc-ows').innerHTML = `<h3>One-Way Shear</h3><table class="pc-table"><thead><tr><th>Strip</th><th>V<sub>u</sub> (kN)</th><th>ϕV<sub>c</sub> (kN)</th><th>Util</th><th>Status</th></tr></thead><tbody><tr><td>X</td><td>${sx.Vu_kN.toFixed(1)}</td><td>${sx.phiVc_kN.toFixed(1)}</td><td>${formatNum(sx.util, 2)}</td><td>${sx.OK ? 'OK' : 'NG'}</td></tr><tr><td>Y</td><td>${sy.Vu_kN.toFixed(1)}</td><td>${sy.phiVc_kN.toFixed(1)}</td><td>${formatNum(sy.util, 2)}</td><td>${sy.OK ? 'OK' : 'NG'}</td></tr></tbody></table>`;
  }

  function renderMultiCaseTables(solutions, allowComp, allowTen) {
    const wrap = $('#pc-mc-wrapper');
    if (!solutions.length) { wrap.hidden = true; return; }
    wrap.hidden = false;
    
    const tbody = $('#pc-lc-table tbody');
    tbody.innerHTML = '';
    for (const { lc, sol, punch } of solutions) {
      const uplift = sol.Pmin < 0 ? 'Yes' : '';
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${lc.name}</td><td>${lc.P.toFixed(1)}</td><td>${lc.Mx.toFixed(1)}</td><td>${lc.My.toFixed(1)}</td><td>${sol.Pmax.toFixed(1)}</td><td>${sol.Pmin.toFixed(1)}</td><td>${formatNum(punch.utilisation, 2)}</td><td>${uplift}</td>`;
      if (sol.Pmin < 0) tr.classList.add('uplift-row');
      tbody.appendChild(tr);
    }
    
    const pileMap = new Map();
    for (const { lc, sol } of solutions) {
      for (const r of sol.reactions) {
        if (!pileMap.has(r.index)) {
          pileMap.set(r.index, {
            x: r.x, y: r.y,
            max: { val: r.R, case: lc.name },
            min: { val: r.R, case: lc.name }
          });
        } else {
          const rec = pileMap.get(r.index);
          if (r.R > rec.max.val) { rec.max.val = r.R; rec.max.case = lc.name; }
          if (r.R < rec.min.val) { rec.min.val = r.R; rec.min.case = lc.name; }
        }
      }
    }
    
    const tbody2 = $('#pc-pile-extremes tbody');
    tbody2.innerHTML = '';
    [...pileMap.entries()].sort((a, b) => a[0] - b[0]).forEach(([id, rec]) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${id}</td><td>${rec.x.toFixed(3)}</td><td>${rec.y.toFixed(3)}</td><td>${rec.max.val.toFixed(1)}</td><td>${rec.max.case}</td><td>${rec.min.val.toFixed(1)}</td><td>${rec.min.case}</td>`;
      if (rec.min.val < 0) tr.classList.add('uplift');
      tbody2.appendChild(tr);
    });
  }

  function renderMultiCaseStrength(strength) {
    if (!strength) return;
    const tbody = $('#pc-strength-cases tbody');
    tbody.innerHTML = '';
    for (const rec of strength.solutions) {
      const d = rec.demands;
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${rec.lc.name}</td><td>${formatNum(d.Mu_x, 1)}</td><td>${formatNum(d.Mu_y, 1)}</td><td>${formatNum(d.Vu_x, 1)}</td><td>${formatNum(d.Vu_y, 1)}</td><td>${formatNum(rec.flexUtilX, 2)}</td><td>${formatNum(rec.flexUtilY, 2)}</td><td>${formatNum(rec.owsUtilX, 2)}</td><td>${formatNum(rec.owsUtilY, 2)}</td>`;
      tbody.appendChild(tr);
    }
    
    const govBody = $('#pc-governing tbody');
    govBody.innerHTML = '';
    function resolvePath(obj, path) {
      return path.split('.').reduce((o, k) => (o && k in o) ? o[k] : undefined, obj);
    }
    function gov(check, path) {
      let max = -Infinity, name = '';
      for (const rec of strength.solutions) {
        const v = typeof path === 'function' ? path(rec) : resolvePath(rec, path);
        if (typeof v === 'number' && isFinite(v) && v > max) {
          max = v; name = rec.lc.name;
        }
      }
      if (max > -Infinity) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${check}</td><td>${name}</td><td>${formatNum(max, 2)}</td>`;
        govBody.appendChild(tr);
      }
    }
    gov('Flexure X', 'flexUtilX');
    gov('Flexure Y', 'flexUtilY');
    gov('One-Way Shear X', 'owsUtilX');
    gov('One-Way Shear Y', 'owsUtilY');
    gov('Punching', 'punch.utilisation');
  }

  // ------- Export Functions -------
  function exportJSON(obj) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pilecap_results.json';
    a.click();
  }

  function exportCSV(solutions) {
    let lines = ['Case,P,Mx,My,Pmax,Pmin'];
    for (const s of solutions) {
      lines.push([s.lc.name, s.lc.P, s.lc.Mx, s.lc.My, s.sol.Pmax, s.sol.Pmin].join(','));
    }
    const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pilecap_cases.csv';
    a.click();
  }

  // ------- UI Enhancement Injection -------
  function injectEnhancements() {
    const actions = $('.action-row');
    if (!$('#pc-iter-tension')) {
      const fs = document.createElement('fieldset');
      fs.className = 'advanced';
      fs.innerHTML = `<legend>Advanced Options</legend>
        <label class="inline"><input type="checkbox" id="pc-iter-tension"> Iterative Tension Redistribution</label>
        <label class="inline"><input type="checkbox" id="pc-use-provided"> Use Provided Reinforcement for Capacity</label>
        <label class="inline"><input type="checkbox" id="pc-units-toggle"> Use US Customary Units (beta)</label>
        <div class="field-group" style="margin-top:10px;">
          <button type="button" id="pc-export-json" class="calc-button secondary">Export JSON</button>
          <button type="button" id="pc-export-csv" class="calc-button secondary">Export CSV</button>
        </div>`;
      actions.parentNode.insertBefore(fs, actions);
    }
  }

  // ------- Main Analysis Functions -------
  async function runSingle() {
    let coords;
    try {
      coords = parseCoords($('#pc-coords').value);
    } catch (err) {
      $('#pc-status').textContent = err.message;
      $('#pc-status').classList.add('error');
      return;
    }

    const P = toNumber($('#pc-load-p'));
    const Mx = toNumber($('#pc-mx'));
    const My = toNumber($('#pc-my'));
    const allowComp = toNumber($('#pc-allow-comp'));
    const allowTen = toNumber($('#pc-allow-ten'));
    const fc = toNumber($('#pc-fc'));
    const d_p = toNumber($('#pc-diameter'));
    const t_c = toNumber($('#pc-cap-thk'));
    const iterative = $('#pc-iter-tension')?.checked;

    let sol;
    if (iterative) {
      sol = computeReactionsIterative({ P, Mx, My, coords });
    } else {
      sol = computeReactionsLocal({ P, Mx, My, coords });
    }

    const pc = punchingCheck({ fcMPa: fc, pileDia_m: d_p, capThk_m: t_c }, sol.Pmax);

    const fy = toNumber($('#pc-fy'));
    const phiF = toNumber($('#pc-phi-flex')) || 0.9;
    const b_x = toNumber($('#pc-bx'));
    const b_y = toNumber($('#pc-by'));
    const d_eff = toNumber($('#pc-deff')) || (0.8 * t_c);
    const Mu_x = toNumber($('#pc-mux'));
    const Mu_y = toNumber($('#pc-muy'));

    const useProvided = $('#pc-use-provided')?.checked;
    let fx, fyres;
    if (useProvided) {
      const barDia = toNumber($('#pc-bar-dia'));
      const barSp = toNumber($('#pc-bar-spacing'));
      const As_single = Math.PI * (barDia / 2) ** 2;
      const As_per_m = (1000 / barSp) * As_single;
      const As_x = As_per_m * b_x;
      const As_y = As_per_m * b_y;
      // Calculate from provided
      fx = { phiMn_kNm: 0, As_req_mm2: As_x, As_min_mm2: 0 }; // placeholder
      fyres = { phiMn_kNm: 0, As_req_mm2: As_y, As_min_mm2: 0 };
    } else {
      fx = flexureCapacity({ Mu_kNm: Mu_x, b_m: b_x, d_m: d_eff, fc_MPa: fc, fy_MPa: fy, phi: phiF });
      fyres = flexureCapacity({ Mu_kNm: Mu_y, b_m: b_y, d_m: d_eff, fc_MPa: fc, fy_MPa: fy, phi: phiF });
    }

    const phiV = toNumber($('#pc-phi-shear')) || 0.75;
    const Vu_x = toNumber($('#pc-vux'));
    const Vu_y = toNumber($('#pc-vuy'));
    const owsX = oneWayShear({ Vu_kN: Vu_x, b_m: b_x, d_m: d_eff, fc_MPa: fc, phi: phiV });
    const owsY = oneWayShear({ Vu_kN: Vu_y, b_m: b_y, d_m: d_eff, fc_MPa: fc, phi: phiV });

    $('#pc-status').textContent = 'Single case analysis complete.';
    $('#pc-status').classList.remove('error');
    $('#pc-results').hidden = false;
    renderSummary(sol, allowComp, allowTen);
    renderTable(sol, allowComp, allowTen);
    renderPlan(sol);
    renderPunch(pc);
    renderFlexure(fx, fyres);
    renderOWS(owsX, owsY);
    $('#pc-mc-wrapper').hidden = true;
    
    // Export handlers for single case
    $('#pc-export-json').onclick = () => exportJSON({ mode: 'single', sol, punch: pc, flexure: { x: fx, y: fyres }, ows: { x: owsX, y: owsY } });
    $('#pc-export-csv').onclick = () => {
      const solutions = [{ lc: { name: 'Single', P, Mx, My }, sol }];
      exportCSV(solutions);
    };
  }

  async function runEnhanced() {
    // Check which load case type is selected
    const isMultipleLoadCases = $('#pc-multiple-loads').checked;
    
    if (isMultipleLoadCases && window.parsedLoadCases && window.parsedLoadCases.length > 0) {
      await runMultipleLoadCases();
    } else {
      // Fall back to legacy multi-case or single case
      const multiText = $('#pc-loadcases').value.trim();
      if (!multiText) { 
        await runSingle(); 
        return; 
      }
      await runLegacyMultiCase();
    }
  }
  
  async function runMultipleLoadCases() {
    const loadCases = window.parsedLoadCases;
    const allowComp = toNumber($('#pc-allow-comp'));
    const allowTen = toNumber($('#pc-allow-ten'));
    const fc = toNumber($('#pc-fc'));
    const d_p = toNumber($('#pc-diameter'));
    const t_c = toNumber($('#pc-cap-thk'));

    let coords;
    try {
      coords = parseCoords($('#pc-coords').value);
    } catch (err) {
      $('#pc-status').textContent = err.message;
      $('#pc-status').classList.add('error');
      return;
    }

    // Convert parsed load cases to the format expected by the analysis functions
    const cases = loadCases.map(lc => ({
      name: lc.caseId,
      P: lc.P,
      Mx: lc.Mx,
      My: lc.My
    }));

    const solutions = multiCaseAnalyze(cases, coords, allowComp, allowTen, fc, d_p, t_c);
    if (!solutions.length) {
      $('#pc-status').textContent = 'No valid load cases.';
      return;
    }

    // Perform comprehensive design calculations
    const comprehensiveDesign = performComprehensiveDesign(solutions);
    
    const strength = multiCaseStrength(solutions);
    const first = solutions[0];

    $('#pc-results').hidden = false;
    renderSummary(first.sol, allowComp, allowTen);
    renderTable(first.sol, allowComp, allowTen);
    renderPlan(first.sol);
    renderPunch(first.punch);
    
    // Render comprehensive design results
    renderComprehensiveDesignResults(comprehensiveDesign);
    
    renderMultiCaseTables(solutions, allowComp, allowTen);
    renderMultiCaseStrength(strength);
    $('#pc-status').textContent = `Multi load case analysis complete for ${loadCases.length} cases.`;
    $('#pc-status').classList.remove('error');

    // Export handlers
    $('#pc-export-json').onclick = () => exportJSON({ 
      mode: 'comprehensive-multi', 
      solutions, 
      strength, 
      comprehensiveDesign 
    });
    $('#pc-export-csv').onclick = () => exportCSV(solutions);
  }
  
  async function runLegacyMultiCase() {
    const multiText = $('#pc-loadcases').value.trim();
    const allowComp = toNumber($('#pc-allow-comp'));
    const allowTen = toNumber($('#pc-allow-ten'));
    const fc = toNumber($('#pc-fc'));
    const d_p = toNumber($('#pc-diameter'));
    const t_c = toNumber($('#pc-cap-thk'));

    let coords;
    try {
      coords = parseCoords($('#pc-coords').value);
    } catch (err) {
      $('#pc-status').textContent = err.message;
      $('#pc-status').classList.add('error');
      return;
    }

    let cases;
    try {
      cases = parseMultiLoadCases(multiText);
    } catch (err) {
      $('#pc-status').textContent = err.message;
      $('#pc-status').classList.add('error');
      return;
    }

    const solutions = multiCaseAnalyze(cases, coords, allowComp, allowTen, fc, d_p, t_c);
    if (!solutions.length) {
      $('#pc-status').textContent = 'No valid load cases.';
      return;
    }

    const strength = multiCaseStrength(solutions);
    const first = solutions[0];

    $('#pc-results').hidden = false;
    renderSummary(first.sol, allowComp, allowTen);
    renderTable(first.sol, allowComp, allowTen);
    renderPlan(first.sol);
    renderPunch(first.punch);
    $('#pc-flexure').innerHTML = '<p><em>Flexure auto-designed across cases: see tables above (capacities sized to governing Mu).</em></p>';
    $('#pc-ows').innerHTML = '<p><em>One-way shear capacities sized to governing Vu across cases.</em></p>';
    renderMultiCaseTables(solutions, allowComp, allowTen);
    renderMultiCaseStrength(strength);
    $('#pc-status').textContent = 'Multi load case analysis complete.';
    $('#pc-status').classList.remove('error');

    // Export handlers
    $('#pc-export-json').onclick = () => exportJSON({ mode: 'multi', solutions, strength });
    $('#pc-export-csv').onclick = () => exportCSV(solutions);
  }
  
  function renderComprehensiveDesignResults(comprehensiveDesign) {
    const { results, weights, footingGeometry } = comprehensiveDesign;
    
    // Create comprehensive design results section
    let html = `
      <div class="comprehensive-design-results">
        <h3>🏗️ Comprehensive Footing Design Results</h3>
        
        <div class="design-summary">
          <h4>Footing Properties & Weights</h4>
          <table class="pc-table">
            <thead>
              <tr><th>Component</th><th>Value</th><th>Units</th></tr>
            </thead>
            <tbody>
              <tr><td>Footing Dimensions</td><td>${footingGeometry.footingLength}' × ${footingGeometry.footingWidth}' × ${footingGeometry.footingThickness}'</td><td>L × W × T</td></tr>
              <tr><td>Footing Weight</td><td>${weights.footingWeight.toFixed(1)}</td><td>kips</td></tr>
              <tr><td>Seal Weight</td><td>${weights.sealWeight.toFixed(1)}</td><td>kips</td></tr>
              <tr><td>Soil Weight</td><td>${weights.soilWeight.toFixed(1)}</td><td>kips</td></tr>
              <tr><td>Buoyancy Force</td><td>${weights.buoyancyForce.toFixed(1)}</td><td>kips</td></tr>
              <tr><td><strong>Total Net Weight</strong></td><td><strong>${weights.totalWeight.toFixed(1)}</strong></td><td><strong>kips</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <div class="design-checks">
          <h4>Design Check Summary</h4>
          <table class="pc-table">
            <thead>
              <tr>
                <th>Load Case</th>
                <th>One-Way Shear X</th>
                <th>One-Way Shear Y</th>
                <th>Punching Shear</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>`;
    
    results.forEach(result => {
      const statusClass = result.overallPass ? 'status-pass' : 'status-fail';
      const statusText = result.overallPass ? '✅ PASS' : '❌ FAIL';
      
      html += `
        <tr class="${statusClass}">
          <td>${result.loadCase.name || result.loadCase.caseId}</td>
          <td>${result.oneWayShear.utilizationX.toFixed(2)} ${result.oneWayShear.passX ? '✅' : '❌'}</td>
          <td>${result.oneWayShear.utilizationY.toFixed(2)} ${result.oneWayShear.passY ? '✅' : '❌'}</td>
          <td>${result.punchingShear.utilization.toFixed(2)} ${result.punchingShear.pass ? '✅' : '❌'}</td>
          <td><strong>${statusText}</strong></td>
        </tr>`;
    });
    
    html += `
            </tbody>
          </table>
        </div>
        
        <div class="detailed-checks">
          <h4>Detailed Design Calculations</h4>`;
    
    // Add detailed results for governing case
    const governingCase = results.reduce((max, current) => {
      const maxUtil = Math.max(max.oneWayShear.utilizationX, max.oneWayShear.utilizationY, max.punchingShear.utilization);
      const currentUtil = Math.max(current.oneWayShear.utilizationX, current.oneWayShear.utilizationY, current.punchingShear.utilization);
      return currentUtil > maxUtil ? current : max;
    });
    
    html += `
          <h5>Governing Load Case: ${governingCase.loadCase.name || governingCase.loadCase.caseId}</h5>
          
          <div class="check-details">
            <h6>One-Way Shear</h6>
            <table class="pc-table">
              <thead>
                <tr><th>Direction</th><th>Vu (kips)</th><th>φVc (kips)</th><th>Utilization</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>X-Direction</td><td>${governingCase.oneWayShear.vuX.toFixed(1)}</td><td>${governingCase.oneWayShear.phiVcX.toFixed(1)}</td><td>${governingCase.oneWayShear.utilizationX.toFixed(2)}</td><td>${governingCase.oneWayShear.passX ? '✅ PASS' : '❌ FAIL'}</td></tr>
                <tr><td>Y-Direction</td><td>${governingCase.oneWayShear.vuY.toFixed(1)}</td><td>${governingCase.oneWayShear.phiVcY.toFixed(1)}</td><td>${governingCase.oneWayShear.utilizationY.toFixed(2)}</td><td>${governingCase.oneWayShear.passY ? '✅ PASS' : '❌ FAIL'}</td></tr>
              </tbody>
            </table>
            
            <h6>Punching Shear</h6>
            <table class="pc-table">
              <thead>
                <tr><th>Parameter</th><th>Value</th><th>Units</th></tr>
              </thead>
              <tbody>
                <tr><td>Total Load (Vu)</td><td>${governingCase.punchingShear.vu.toFixed(1)}</td><td>kips</td></tr>
                <tr><td>Critical Perimeter (bo)</td><td>${governingCase.punchingShear.bo.toFixed(2)}</td><td>ft</td></tr>
                <tr><td>Effective Depth (d)</td><td>${governingCase.punchingShear.d.toFixed(2)}</td><td>ft</td></tr>
                <tr><td>Capacity (φVc)</td><td>${governingCase.punchingShear.phiVc.toFixed(1)}</td><td>kips</td></tr>
                <tr><td>Utilization</td><td>${governingCase.punchingShear.utilization.toFixed(2)}</td><td>-</td></tr>
                <tr><td><strong>Status</strong></td><td><strong>${governingCase.punchingShear.pass ? '✅ PASS' : '❌ FAIL'}</strong></td><td>-</td></tr>
              </tbody>
            </table>
            
            <h6>Flexural Reinforcement</h6>
            <table class="pc-table">
              <thead>
                <tr><th>Direction</th><th>Moment (kip-ft)</th><th>Required As (in²/ft)</th><th>Minimum As (in²/ft)</th></tr>
              </thead>
              <tbody>
                <tr><td>X-Direction</td><td>${governingCase.flexuralMoments.muX.toFixed(1)}</td><td>${governingCase.flexuralMoments.asReqX.toFixed(2)}</td><td>${governingCase.flexuralMoments.asMin.toFixed(2)}</td></tr>
                <tr><td>Y-Direction</td><td>${governingCase.flexuralMoments.muY.toFixed(1)}</td><td>${governingCase.flexuralMoments.asReqY.toFixed(2)}</td><td>${governingCase.flexuralMoments.asMin.toFixed(2)}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    
    // Insert the comprehensive design results before the existing flexure section
    const flexureSection = $('#pc-flexure');
    if (flexureSection) {
      flexureSection.innerHTML = html;
    } else {
      // If flexure section doesn't exist, append to results
      $('#pc-results').insertAdjacentHTML('beforeend', html);
    }
  }

  function loadExample() {
    // Set single load case as default
    $('#pc-single-load').checked = true;
    $('#pc-multiple-loads').checked = false;
    
    // Update load section visibility
    $('#single-load-section').hidden = false;
    $('#multiple-load-section').hidden = true;
    
    // Load single case values
    $('#pc-load-p').value = 5000;
    $('#pc-mx').value = 0;
    $('#pc-my').value = 0;
    
    // Load comprehensive design parameters
    $('#pc-footing-length').value = 20.0;
    $('#pc-footing-width').value = 16.0;
    $('#pc-footing-thickness').value = 3.0;
    $('#pc-pile-no-x').value = 3;
    $('#pc-pile-no-y').value = 2;
    $('#pc-pile-spacing-x').value = 8.0;
    $('#pc-pile-spacing-y').value = 8.0;
    $('#pc-pile-size').value = 14;
    $('#pc-pile-capacity-compression').value = 350;
    $('#pc-pile-capacity-tension').value = 100;
    $('#pc-concrete-fc').value = 4000;
    $('#pc-reinforcing-steel-fy').value = 60;
    $('#pc-concrete-fc-ksi').value = 4.0;
    
    // Clear parsed load cases
    window.parsedLoadCases = null;
    $('#pc-parsed-loads-display').hidden = true;
    $('#pc-multiple-load-data').value = '';
    
    // Set legacy values for backward compatibility
    $('#pc-allow-comp').value = 1500;
    $('#pc-allow-ten').value = 0;
    $('#pc-fc').value = 35;
    $('#pc-diameter').value = 0.4;
    $('#pc-cap-thk').value = 0.9;
    $('#pc-coords').value = '0,0\n3,0\n3,2\n0,2';
    $('#pc-loadcases').value = '';
    
    // Load example multiple load case data in the textarea
    const exampleData = `Load Case	Factor	Fx (k)	Fy (k)	Fz (k)	Mx (k-ft)	My (k-ft)
1	1.00	230	233	6764	10600	12710
2	1.00	-230	233	4876	10590	10160
3	1.00	0	143	8113	6958	1782
4	1.00	150	-200	5500	8000	9500`;
    $('#pc-multiple-load-data').value = exampleData;
    
    $('#pc-status').textContent = 'Example loaded with comprehensive design parameters.';
    $('#pc-status').classList.remove('error');
    $('#pc-status').classList.add('success');
  }

  // ------- Event Handlers -------
  document.addEventListener('DOMContentLoaded', () => {
    initializeDesignDataSystem();
    injectEnhancements();
    
    $('#pc-analyze').addEventListener('click', () => { runEnhanced(); });
    $('#pc-example').addEventListener('click', loadExample);
    $('#pc-reset').addEventListener('click', () => {
      $('#pc-results').hidden = true;
      $('#pc-status').textContent = '';
      $('#pc-status').classList.remove('error');
      $('#pc-mc-wrapper').hidden = true;
    });

    $('#pc-units-toggle')?.addEventListener('change', (e) => {
      UNIT_SYSTEM = e.target.checked ? 'US' : 'SI';
      $('#pc-status').textContent = 'Unit system: ' + UNIT_SYSTEM;
      $('#pc-status').classList.remove('error');
    });
  });
})();
</script>

<!-- Load test suite for verification -->
<script src="/assets/js/pilecap-ui-test.js"></script>
