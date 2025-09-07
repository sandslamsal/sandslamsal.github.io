---
layout: page
title: Pile Cap Debug
description: Debug pile cap functionality
nav: false
---

<h2>Pile Cap Debug Test</h2>

<div id="debug-output" style="background: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 4px;">
  Loading debug information...
</div>

<button onclick="testPileCapCore()" style="padding: 10px 20px; margin: 5px;">Test Core Module</button>
<button onclick="testFormElements()" style="padding: 10px 20px; margin: 5px;">Test Form Elements</button>
<button onclick="testFullAnalysis()" style="padding: 10px 20px; margin: 5px;">Test Full Analysis</button>

<script src="/assets/js/pilecap-core.js"></script>
<script>
function debugLog(message, type = 'info') {
  const output = document.getElementById('debug-output');
  const timestamp = new Date().toLocaleTimeString();
  const color = type === 'error' ? 'red' : type === 'success' ? 'green' : 'blue';
  output.innerHTML += `<div style="color: ${color};">[${timestamp}] ${message}</div>`;
}

function testPileCapCore() {
  debugLog('Testing PileCapCore module...', 'info');
  
  if (typeof PileCapCore === 'undefined') {
    debugLog('ERROR: PileCapCore not found!', 'error');
    return;
  }
  
  debugLog('PileCapCore loaded successfully', 'success');
  debugLog('Available functions: ' + Object.keys(PileCapCore).join(', '), 'info');
  
  try {
    const coords = [{x:0,y:0}, {x:2,y:0}, {x:2,y:2}, {x:0,y:2}];
    const result = PileCapCore.computeReactionsRigid({P:4000, Mx:0, My:0, coords});
    debugLog('Test calculation: 4000 kN → ' + result.reactions.map(r => r.R.toFixed(1)).join(', ') + ' kN', 'success');
  } catch (error) {
    debugLog('Calculation error: ' + error.message, 'error');
  }
}

function testFormElements() {
  debugLog('Testing form elements...', 'info');
  
  const elements = [
    'pc-load-p', 'pc-mx', 'pc-my', 'pc-coords', 
    'pc-allow-comp', 'pc-allow-ten', 'pc-fc',
    'pc-diameter', 'pc-cap-thk', 'pc-analyze'
  ];
  
  for (const id of elements) {
    const element = document.getElementById(id);
    if (element) {
      debugLog(`✓ Found element: ${id}`, 'success');
    } else {
      debugLog(`✗ Missing element: ${id}`, 'error');
    }
  }
}

function testFullAnalysis() {
  debugLog('Testing full analysis workflow...', 'info');
  
  // Check if we're on the pile cap page
  const analyzeBtn = document.getElementById('pc-analyze');
  if (!analyzeBtn) {
    debugLog('Not on pile cap page - navigate to /apps/pilecap/ first', 'error');
    return;
  }
  
  try {
    // Set test values
    document.getElementById('pc-load-p').value = '1000';
    document.getElementById('pc-mx').value = '0';
    document.getElementById('pc-my').value = '0';
    document.getElementById('pc-coords').value = '0,0\n2,0\n2,2\n0,2';
    document.getElementById('pc-allow-comp').value = '500';
    document.getElementById('pc-allow-ten').value = '50';
    document.getElementById('pc-fc').value = '25';
    document.getElementById('pc-diameter').value = '0.5';
    document.getElementById('pc-cap-thk').value = '0.8';
    document.getElementById('pc-loadcases').value = '';
    
    debugLog('Test values set, clicking analyze button...', 'info');
    
    // Click analyze
    analyzeBtn.click();
    
    // Check results after delay
    setTimeout(() => {
      const status = document.getElementById('pc-status');
      const results = document.getElementById('pc-results');
      
      if (status) {
        debugLog('Status: ' + status.textContent, 'info');
      }
      
      if (results && !results.hidden) {
        debugLog('Results displayed successfully!', 'success');
      } else {
        debugLog('Results not displayed', 'error');
      }
    }, 1000);
    
  } catch (error) {
    debugLog('Analysis test error: ' + error.message, 'error');
  }
}

// Auto-run basic tests
document.addEventListener('DOMContentLoaded', () => {
  debugLog('Page loaded, running initial tests...', 'info');
  testPileCapCore();
});
</script>
