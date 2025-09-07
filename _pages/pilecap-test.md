---
layout: page
title: Pile Cap Test Report
description: Automated test results for pile cap design calculations
nav: false
---

<div id="test-report">
  <h2>Pile Cap Calculation Verification</h2>
  <p>This page automatically runs comprehensive tests on the pile cap design calculations.</p>
  
  <div id="test-status" style="padding: 10px; margin: 10px 0; border-radius: 4px; background: #f0f0f0;">
    Running tests...
  </div>
  
  <div id="test-results"></div>
  
  <button onclick="runManualTest()" style="margin: 10px 0; padding: 8px 16px;">Run Manual Test</button>
</div>

<script src="/assets/js/pilecap-core.js"></script>
<script>
// Automated test runner for pile cap calculations
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(runAutomatedTests, 500);
});

function runAutomatedTests() {
  const statusEl = document.getElementById('test-status');
  const resultsEl = document.getElementById('test-results');
  
  statusEl.innerHTML = 'Running automated tests...';
  statusEl.style.background = '#fff3cd';
  
  const results = [];
  
  try {
    // Test 1: Core module availability
    if (typeof PileCapCore !== 'undefined') {
      results.push({name: 'Core Module Load', status: 'PASS', details: 'PileCapCore module loaded successfully'});
    } else {
      results.push({name: 'Core Module Load', status: 'FAIL', details: 'PileCapCore module not found'});
    }
    
    // Test 2: Basic reaction calculation
    if (PileCapCore.computeReactionsRigid) {
      const coords = [{x:0,y:0}, {x:2,y:0}, {x:2,2}, {x:0,y:2}];
      const result = PileCapCore.computeReactionsRigid({P:4000, Mx:0, My:0, coords});
      const expectedReaction = 1000; // 4000/4
      const tolerance = 0.01;
      const accurate = result.reactions.every(r => Math.abs(r.R - expectedReaction) < tolerance);
      
      results.push({
        name: 'Basic Reaction Calculation', 
        status: accurate ? 'PASS' : 'FAIL',
        details: accurate ? 'All reactions = 1000 kN as expected' : `Reactions: ${result.reactions.map(r=>r.R.toFixed(1)).join(', ')}`
      });
    } else {
      results.push({name: 'Basic Reaction Calculation', status: 'FAIL', details: 'computeReactionsRigid function not available'});
    }
    
    // Test 3: Flexure calculation
    if (PileCapCore.flexureCapacity) {
      const flex = PileCapCore.flexureCapacity({Mu_kNm:500, b_m:1, d_m:0.7, fc_MPa:30, fy_MPa:420, phi:0.9});
      const hasCapacity = flex.phiMn_kNm > 500;
      
      results.push({
        name: 'Flexure Capacity',
        status: hasCapacity ? 'PASS' : 'FAIL', 
        details: `φMn = ${flex.phiMn_kNm.toFixed(1)} kN⋅m, As,req = ${flex.As_req_mm2.toFixed(0)} mm²`
      });
    } else {
      results.push({name: 'Flexure Capacity', status: 'FAIL', details: 'flexureCapacity function not available'});
    }
    
    // Test 4: Iterative tension elimination
    if (PileCapCore.computeReactionsIterative) {
      const coords = [{x:0,y:0}, {x:3,y:0}, {x:3,y:2}, {x:0,y:2}];
      const result = PileCapCore.computeReactionsIterative({P:2000, Mx:2500, My:0, coords, allowTension:50});
      const hasTensionElimination = result.reactions.some(r => r.R <= 0.01);
      
      results.push({
        name: 'Iterative Tension Elimination',
        status: hasTensionElimination ? 'PASS' : 'FAIL',
        details: `Min reaction: ${Math.min(...result.reactions.map(r=>r.R)).toFixed(1)} kN`
      });
    } else {
      results.push({name: 'Iterative Tension Elimination', status: 'FAIL', details: 'computeReactionsIterative function not available'});
    }
    
    // Generate report
    let html = '<h3>Test Results</h3>';
    let passCount = 0;
    
    results.forEach(test => {
      const icon = test.status === 'PASS' ? '✅' : '❌';
      const bgColor = test.status === 'PASS' ? '#d4edda' : '#f8d7da';
      
      html += `
        <div style="margin: 10px 0; padding: 10px; border-radius: 4px; background: ${bgColor};">
          <strong>${icon} ${test.name}</strong>: ${test.status}<br>
          <small>${test.details}</small>
        </div>
      `;
      
      if (test.status === 'PASS') passCount++;
    });
    
    const overallStatus = passCount === results.length ? 'PASS' : 'FAIL';
    const overallColor = overallStatus === 'PASS' ? '#d1ecf1' : '#f8d7da';
    
    html = `
      <div style="padding: 15px; margin: 15px 0; border-radius: 6px; background: ${overallColor};">
        <h3>${overallStatus === 'PASS' ? '🎉' : '⚠️'} Overall: ${overallStatus}</h3>
        <p>${passCount}/${results.length} tests passed</p>
      </div>
    ` + html;
    
    resultsEl.innerHTML = html;
    
    statusEl.innerHTML = `Tests completed: ${overallStatus}`;
    statusEl.style.background = overallColor;
    
  } catch (error) {
    resultsEl.innerHTML = `<div style="color: red; padding: 10px;">Error running tests: ${error.message}</div>`;
    statusEl.innerHTML = 'Test execution failed';
    statusEl.style.background = '#f8d7da';
  }
}

function runManualTest() {
  window.location.href = '/apps/pilecap/';
}
</script>
