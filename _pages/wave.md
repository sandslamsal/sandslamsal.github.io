---
layout: page
permalink: /apps/wave/
title: Wave - Wave Analysis Calculator
description: Advanced wave analysis calculator for coastal and marine engineering calculations.
nav: false
---

<!-- TEST MARKER FOR JEKYLL REGENERATION -->

<style>
/* Wave App Styling */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --wave-primary: #667eea;
  --wave-secondary: #764ba2;
  --wave-accent: #4facfe;
  --wave-success: #00f2fe;
  --wave-warning: #ffecd2;
  --wave-error: #fcb69f;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-light: 0 8px 32px rgba(31, 38, 135, 0.37);
  --shadow-heavy: 0 20px 60px rgba(31, 38, 135, 0.5);
}

.calculator-section {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 25px;
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: var(--shadow-light);
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--global-text-color, #000);
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--wave-primary), var(--wave-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}

.calc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

.input-label {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--global-text-color, #000);
  margin-bottom: 8px;
  display: block;
}

.calc-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--glass-border);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
}

.calc-input:focus {
  outline: none;
  border-color: var(--wave-primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.calc-button {
  background: linear-gradient(135deg, var(--wave-primary), var(--wave-accent));
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 15px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-light);
}

.calc-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-heavy);
}

.calc-button:active {
  transform: translateY(0);
}

.calc-button.secondary {
  background: linear-gradient(135deg, #6c757d, #495057);
}

.calc-button.secondary:hover {
  background: linear-gradient(135deg, #5a6268, #3d4142);
  transform: translateY(-2px);
}

.method-explanation {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(79, 172, 254, 0.05));
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
}

.method-explanation h3 {
  color: var(--wave-primary);
  font-size: 1.3rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.method-explanation .formula {
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 8px;
  padding: 10px;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
}

.input-requirements {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.05), rgba(0, 242, 254, 0.05));
  border: 1px solid rgba(79, 172, 254, 0.1);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
}

.input-requirements h3 {
  color: var(--wave-accent);
  font-size: 1.3rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-requirements ul {
  padding-left: 20px;
}

.input-requirements li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.plot-controls {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--glass-border);
}

.plot-container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 30px;
  margin: 30px auto;
  border: 1px solid var(--glass-border);
  max-width: 1200px;
  width: 95%;
  text-align: center;
  box-shadow: var(--shadow-light);
  display: block;
}

/* Plot wrapper classes for centered layout */
.plot-wrapper {
  width: 100%;              /* full width of parent container */
  display: flex;            /* center its child horizontally */
  justify-content: center;
  margin: 30px 0;           /* vertical spacing */
}

/* Limit chart width so centering is visible and responsive */
.plot-card {
  max-width: 1200px;        /* full width for better visibility */
  width: 95%;               /* responsive with some padding */
  margin: 0 auto;           /* fallback centering */
}

.plot-container canvas {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
}

.chart-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 400px;
  margin: 20px auto;
  padding: 0;
  display: block;
}

.chart-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--global-text-color, #000);
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
}

.plot-controls {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--glass-border);
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.chart-info {
  font-size: 0.9rem;
  color: var(--global-text-color-light, #6c757d);
  margin-top: 10px;
  font-style: italic;
  text-align: center;
}

.additional-results {
  margin-top: 15px;
  font-size: 14px;
  color: var(--global-text-color-light, #6c757d);
}

.result-display {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1));
  border: 2px solid rgba(79, 172, 254, 0.2);
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  font-family: 'Inter', sans-serif;
}

.result-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--wave-primary);
  margin-bottom: 5px;
}

.result-unit {
  font-size: 14px;
  color: var(--global-text-color-light, #6c757d);
  font-weight: 500;
}

.back-button {
  background: linear-gradient(135deg, #6c757d, #495057);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 15px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
  text-decoration: none;
  color: white;
}

/* Generic full-width controls bar */
.full-width-controls {
  width:100%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  gap:20px;
  flex-wrap:nowrap;
  margin-top:25px;
}
.full-width-controls .calc-button {
  flex:1 1 0;
  max-width:300px;
}
.section-action-bar {
  display:flex;
  justify-content:space-between;
  gap:20px;
  flex-wrap:nowrap;
  margin-top:10px;
}
.section-action-bar .calc-button { flex:1 1 0; max-width:300px; }
@media (max-width:768px){
  .full-width-controls { flex-wrap:wrap; justify-content:center; }
  .full-width-controls .calc-button { flex:1 1 45%; max-width:none; }
  .section-action-bar { flex-wrap:wrap; }
  .section-action-bar .calc-button { flex:1 1 45%; }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .calculator-section {
    padding: 25px 20px;
  }
  
  .calc-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

<div class="post">
  <!-- Back Button -->
  <a href="/apps/" class="back-button">
    <i class="fa-solid fa-arrow-left"></i>
    Back to Apps
  </a>

  <!-- Wavelength Calculator -->
  <div class="calculator-section">
    <h2 class="section-title">
      <div class="section-icon">
        <i class="fa-solid fa-calculator"></i>
      </div>
      Wavelength Calculator
    </h2>
    
    <!-- Method Explanation -->
    <div class="method-explanation">
      <h3><i class="fa-solid fa-info-circle"></i> Method & Theory</h3>
      <p><strong>Purpose:</strong> Calculate the wavelength of water waves using the linear wave dispersion relation.</p>
      
      <p><strong>Theory:</strong> The wavelength L is related to wave period T and water depth h through the dispersion relation:</p>
      <div class="formula">ω² = gk tanh(kh)</div>
      <p>Where: ω = 2π/T (angular frequency), k = 2π/L (wave number), g = 9.81 m/s² (gravity)</p>
      
      <p><strong>Solution Method:</strong> Newton-Raphson iterative method with convergence tolerance of 1×10⁻¹⁰</p>
    </div>

    <!-- Input Requirements -->
    <div class="input-requirements">
      <h3><i class="fa-solid fa-list-check"></i> Input Requirements</h3>
      <ul>
        <li><strong>Water Depth (h):</strong> Positive value in meters (0.1 to 1000m typical range)</li>
        <li><strong>Wave Period (T):</strong> Positive value in seconds (1 to 25s typical range)</li>
      </ul>
    </div>
    
    <div class="calc-grid">
      <div>
        <div class="input-group">
          <label class="input-label" for="water-depth">Water Depth (h) [meters]</label>
          <input type="number" id="water-depth" class="calc-input" placeholder="Enter depth in meters" step="0.01" value="10">
        </div>
        
        <div class="input-group">
          <label class="input-label" for="wave-period">Wave Period (T) [seconds]</label>
          <input type="number" id="wave-period" class="calc-input" placeholder="Enter period in seconds" step="0.01" value="8">
        </div>
        
        <div class="button-group">
          <button onclick="loadWavelengthExample()" class="calc-button secondary">
            <i class="fa-solid fa-database"></i> Load Example
          </button>
          <button onclick="calculateWavelength()" class="calc-button">
            <i class="fa-solid fa-play"></i> Calculate Wavelength
          </button>
        </div>
      </div>
      
      <div>
        <div class="result-display" id="wavelength-result" style="display: none;">
          <div class="result-value" id="wavelength-value">--</div>
          <div class="result-unit">Wavelength (L) in meters</div>
          <div class="additional-results" id="wavelength-details"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Wave Statistics Calculator -->
  <div class="calculator-section">
    <h2 class="section-title">
      <div class="section-icon">
        <i class="fa-solid fa-chart-line"></i>
      </div>
      Wave Statistics Calculator
    </h2>
    
    <!-- Method Explanation -->
    <div class="method-explanation">
      <h3><i class="fa-solid fa-info-circle"></i> Method & Theory</h3>
      <p><strong>Purpose:</strong> Analyze wave elevation time series using zero-crossing method to extract comprehensive wave statistics.</p>
      
      <p><strong>Theory:</strong> Zero-crossing analysis identifies individual waves by detecting upward zero-crossings (trough-to-crest transitions). Each wave is characterized by:</p>
      <ul>
        <li>Wave Height (H): Maximum elevation - Minimum elevation within one wave period</li>
        <li>Wave Period (T): Time between consecutive upward zero-crossings</li>
      </ul>
      
      <p><strong>Statistical Parameters Calculated:</strong></p>
      <ul>
        <li><strong>Hs:</strong> Significant wave height (average of highest 1/3 waves)</li>
        <li><strong>Hmean:</strong> Mean wave height (average of all waves)</li>
        <li><strong>Tmean:</strong> Mean wave period (average of all wave periods)</li>
        <li><strong>H1/10:</strong> Average of highest 1/10 waves</li>
      </ul>
      
      <p><strong>Applications:</strong> Wave climate analysis, coastal design, marine operations planning</p>
    </div>

    <!-- Input Requirements -->
    <div class="input-requirements">
      <h3><i class="fa-solid fa-list-check"></i> Input Requirements</h3>
      <ul>
        <li><strong>Wave Data:</strong> Time series of wave elevation (CSV format, one value per line or comma-separated)</li>
        <li><strong>Sampling Frequency:</strong> Data collection rate in Hz (typical: 1-10 Hz)</li>
        <li><strong>Minimum Data:</strong> At least 10 data points (recommended: >500 for reliable statistics)</li>

      </ul>
    </div>
    
    <div class="calc-grid">
      <div>
        <div class="input-group">
          <label class="input-label" for="sampling-frequency">Sampling Frequency [Hz]</label>
          <input type="number" id="sampling-frequency" class="calc-input" placeholder="Enter frequency in Hz" step="0.01" value="2">
        </div>
        <div class="input-group">
          <label class="input-label" for="wave-data">Wave Elevation Data [meters]</label>
          <textarea id="wave-data" class="calc-input" rows="8" placeholder="Enter wave elevation data, one value per line or comma-separated"></textarea>
          <!-- Action bar directly under data textarea -->
          <div class="section-action-bar">
            <button onclick="loadWaveStatsExample()" class="calc-button secondary"><i class="fa-solid fa-database"></i> Load Example Data</button>
            <button onclick="calculateWaveStats()" class="calc-button"><i class="fa-solid fa-chart-bar"></i> Analyze Wave Data</button>
          </div>
        </div>
        <!-- Removed original button-group -->
      </div>
      <div>
        <div class="result-display" id="wave-stats-result" style="display: none;">
          <div style="margin-bottom: 15px;">
            <div class="result-value" id="hs-value">--</div>
            <div class="result-unit">Significant Wave Height (Hs) in meters</div>
          </div>
          <div style="margin-bottom: 15px;">
            <div class="result-value" id="hmean-value">--</div>
            <div class="result-unit">Mean Wave Height (Hmean) in meters</div>
          </div>
          <div style="margin-bottom: 15px;">
            <div class="result-value" id="tmean-value">--</div>
            <div class="result-unit">Mean Wave Period (Tmean) in seconds</div>
          </div>
          <div style="margin-bottom: 15px;">
            <div class="result-value" id="h10-value">--</div>
            <div class="result-unit">H1/10 (Average of highest 10%) in meters</div>
          </div>
          <div>
            <div class="result-value" id="wave-count-value">--</div>
            <div class="result-unit">Number of Waves Analyzed</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Full-width wave stats plot controls moved outside grid to match reflection layout -->
    <div id="wave-stats-plot-controls" class="plot-controls full-width-controls" style="display:none;">
      <button onclick="plotWaveTimeSeries()" class="calc-button secondary"><i class="fa-solid fa-chart-line"></i> Plot Time Series</button>
      <button onclick="plotWaveHeights()" class="calc-button secondary"><i class="fa-solid fa-chart-bar"></i> Plot Wave Heights</button>
      <button onclick="resetWaveZoom()" class="calc-button secondary"><i class="fa-solid fa-expand"></i> Reset Zoom</button>
    </div>
    
    <!-- Plot Area - Outside grid, below buttons, spans full width -->
    <div class="plot-wrapper">
      <div class="plot-card">
        <div class="plot-container" id="wave-plot-container" style="display: none;">
          <div class="chart-title" id="wave-chart-title">Wave Analysis Plot</div>
          <div class="chart-container">
            <canvas id="wave-plot"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Three-Gauge Array Analysis -->
  <div class="calculator-section">
    <h2 class="section-title">
      <div class="section-icon">
        <i class="fa-solid fa-water"></i>
      </div>
      Wave Reflection Analysis (Three-Gauge Method)
    </h2>
    
    <!-- Method Explanation -->
    <div class="method-explanation">
      <h3><i class="fa-solid fa-info-circle"></i> Method & Theory</h3>
      <p><strong>Purpose:</strong> Separate incident and reflected waves using three-gauge array measurements to determine reflection coefficients.</p>
      
      <p><strong>Theory:</strong> In coastal engineering, waves approaching a structure create both incident and reflected components. The total wave field at any location is:</p>
      <div class="formula">η(x,t) = A_i cos(kx - ωt) + A_r cos(kx + ωt + φ)</div>
      <p>Where: η = surface elevation, A_i = incident amplitude, A_r = reflected amplitude, k = wave number, ω = frequency</p>
      
      <p><strong>Solution Method:</strong></p>
      <ul>
        <li>1. FFT analysis of time series from three gauges</li>
        <li>2. Frequency domain separation using least squares</li>
        <li>3. Calculate wavelength for each frequency component</li>
        <li>4. Solve matrix system for incident/reflected amplitudes</li>
      </ul>
      
      <p><strong>Key Parameters:</strong></p>
      <ul>
        <li><strong>Hi:</strong> Incident wave height (2 × incident amplitude)</li>
        <li><strong>Hr:</strong> Reflected wave height (2 × reflected amplitude)</li>
        <li><strong>Kr:</strong> Reflection coefficient (Hr/Hi)</li>
      </ul>
      
      <p><strong>Applications:</strong> Breakwater design, coastal structure optimization, wave energy analysis</p>
    </div>

    <!-- Input Requirements -->
    <div class="input-requirements">
      <h3><i class="fa-solid fa-list-check"></i> Input Requirements</h3>
      <ul>
        <li><strong>Gauge Positions:</strong> Three gauge positions along wave propagation direction (e.g., 0, 0.3, 0.9 m)</li>
        <li><strong>Water Depth:</strong> Constant depth at gauge locations in meters</li>
        <li><strong>Time Step:</strong> Data sampling interval in seconds (typically 0.01-0.1 s)</li>
        <li><strong>Three-Gauge Data:</strong> Synchronized time series from all gauges (CSV format: gauge1,gauge2,gauge3)</li>
        <li><strong>Data Quality:</strong> Sufficient length for frequency analysis (recommended: >1000 points)</li>
        <li><strong>Gauge Spacing:</strong> Should capture wavelength variations (typical: L/8 to L/4 spacing)</li>
      </ul>
    </div>
    
    <div class="calc-grid">
      <div>
        <div class="input-group">
          <label class="input-label" for="gauge-positions">Gauge Positions [meters]</label>
          <input type="text" id="gauge-positions" class="calc-input" placeholder="e.g., 0, 0.3, 0.9" value="0, 0.3, 0.9">
        </div>
        <div class="input-group">
          <label class="input-label" for="reflection-depth">Water Depth [meters]</label>
          <input type="number" id="reflection-depth" class="calc-input" placeholder="Enter depth in meters" step="0.01" value="2.0">
        </div>
        <div class="input-group">
          <label class="input-label" for="time-step">Time Step [seconds]</label>
          <input type="number" id="time-step" class="calc-input" placeholder="Enter time step" step="0.001" value="0.05">
        </div>
        <div class="input-group">
          <label class="input-label" for="gauge-data">Three-Gauge Data [gauge1,gauge2,gauge3]</label>
          <textarea id="gauge-data" class="calc-input" rows="8" placeholder="Enter data for three gauges: gauge1,gauge2,gauge3 (one row per time step)"></textarea>
          <!-- Reflection action bar directly under data textarea -->
          <div class="section-action-bar">
            <button onclick="loadReflectionExample()" class="calc-button secondary"><i class="fa-solid fa-database"></i> Load Example Data</button>
            <button onclick="calculateReflection()" class="calc-button"><i class="fa-solid fa-water"></i> Analyze Reflection</button>
          </div>
        </div>
        <!-- Removed old in-grid buttons -->
      </div>
      <div>
        <div class="result-display" id="reflection-result" style="display: none;">
          <div style="margin-bottom: 15px;">
            <div class="result-value" id="hi-value">--</div>
            <div class="result-unit">Incident Wave Height (Hi) in meters</div>
          </div>
          <div style="margin-bottom: 15px;">
            <div class="result-value" id="hr-value">--</div>
            <div class="result-unit">Reflected Wave Height (Hr) in meters</div>
          </div>
          <div style="margin-bottom: 15px;">
            <div class="result-value" id="kr-value">--</div>
            <div class="result-unit">Reflection Coefficient (Kr = Hr/Hi)</div>
          </div>
          <div>
            <div class="result-value" id="freq-count-value">--</div>
            <div class="result-unit">Valid Frequencies Analyzed</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Full-width reflection plot controls -->
    <div id="reflection-plot-controls" class="plot-controls full-width-controls" style="display:none;">
      <button onclick="plotGaugeData()" class="calc-button secondary"><i class="fa-solid fa-chart-line"></i> Plot Gauge Data</button>
      <button onclick="plotFrequencySpectrum()" class="calc-button secondary"><i class="fa-solid fa-wave-square"></i> Plot Spectrum</button>
      <button onclick="resetReflectionZoom()" class="calc-button secondary"><i class="fa-solid fa-expand"></i> Reset Zoom</button>
    </div>
    
    <!-- Plot Area - Outside grid, below buttons, spans full width -->
    <div class="plot-wrapper">
      <div class="plot-card">
        <div class="plot-container" id="reflection-plot-container" style="display: none;">
          <div class="chart-title" id="reflection-chart-title">Three-Gauge Analysis Plot</div>
          <div class="chart-container">
            <canvas id="reflection-plot"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Chart.js Axis Label Test -->
  <!-- Removed test chart block to restore functionality -->
  <!-- End Chart.js Axis Label Test -->
</div>

<!-- Scripts moved to external assets/js/wave-app.js to satisfy linter and ensure axis titles render -->
