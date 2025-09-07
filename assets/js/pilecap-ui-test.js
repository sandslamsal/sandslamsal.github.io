// Pile Cap UI and Integration Test Suite
// Run this in the browser console on the pile cap page

function runComprehensiveTests() {
  console.log('=== Pile Cap Comprehensive Test Suite ===');
  console.log('Testing both calculations and UI functionality');
  
  const tests = [];
  
  // Test 1: Basic Single Load Case
  tests.push({
    name: 'Basic Single Load Case',
    setup: () => {
      document.getElementById('pc-load-p').value = '5000';
      document.getElementById('pc-mx').value = '200';
      document.getElementById('pc-my').value = '150';
      document.getElementById('pc-coords').value = '0,0\n3,0\n3,2\n0,2';
      document.getElementById('pc-allow-comp').value = '1500';
      document.getElementById('pc-allow-ten').value = '100';
      document.getElementById('pc-fc').value = '35';
      document.getElementById('pc-diameter').value = '0.4';
      document.getElementById('pc-cap-thk').value = '0.9';
      document.getElementById('pc-loadcases').value = '';
    },
    validate: () => {
      const status = document.getElementById('pc-status').textContent;
      const resultsVisible = !document.getElementById('pc-results').hidden;
      const rows = document.querySelectorAll('#pc-table tbody tr');
      return {
        pass: resultsVisible && rows.length === 4 && status.includes('Analysis complete'),
        details: `Status: ${status}, Piles: ${rows.length}, Results visible: ${resultsVisible}`
      };
    }
  });

  // Test 2: Multi Load Case
  tests.push({
    name: 'Multi Load Case Analysis',
    setup: () => {
      document.getElementById('pc-loadcases').value = 'LC1 5000 200 150\nLC2 6000 -100 250\nLC3 4500 300 -50';
    },
    validate: () => {
      const mcTable = document.getElementById('pc-mc-table');
      const strTable = document.getElementById('pc-str-table');
      const govTable = document.getElementById('pc-gov-table');
      return {
        pass: mcTable && !mcTable.hidden && strTable && !strTable.hidden && govTable && !govTable.hidden,
        details: `Multi-case tables visible: ${mcTable && !mcTable.hidden}, ${strTable && !strTable.hidden}, ${govTable && !govTable.hidden}`
      };
    }
  });

  // Test 3: Iterative Analysis
  tests.push({
    name: 'Iterative Tension Redistribution',
    setup: () => {
      // Load case that will cause tension
      document.getElementById('pc-load-p').value = '3000';
      document.getElementById('pc-mx').value = '3000';
      document.getElementById('pc-my').value = '0';
      document.getElementById('pc-loadcases').value = '';
      document.getElementById('pc-iter-enabled').checked = true;
    },
    validate: () => {
      const rows = document.querySelectorAll('#pc-table tbody tr');
      let tensionEliminated = false;
      for (let row of rows) {
        const reaction = parseFloat(row.cells[3].textContent);
        if (reaction <= 0.001) tensionEliminated = true; // Should have zero/near-zero reactions
      }
      return {
        pass: tensionEliminated,
        details: `Tension redistribution working: ${tensionEliminated}`
      };
    }
  });

  // Test 4: Export Functionality
  tests.push({
    name: 'Export Functions',
    setup: () => {
      // Use previous successful analysis
    },
    validate: () => {
      const jsonBtn = document.getElementById('pc-export-json');
      const csvBtn = document.getElementById('pc-export-csv');
      return {
        pass: jsonBtn && csvBtn && !jsonBtn.disabled && !csvBtn.disabled,
        details: `Export buttons available: JSON=${jsonBtn && !jsonBtn.disabled}, CSV=${csvBtn && !csvBtn.disabled}`
      };
    }
  });

  // Test 5: Input Validation
  tests.push({
    name: 'Input Validation',
    setup: () => {
      document.getElementById('pc-load-p').value = 'invalid';
      document.getElementById('pc-coords').value = 'bad,data\ninvalid';
    },
    validate: () => {
      const status = document.getElementById('pc-status').textContent;
      return {
        pass: status.includes('Error') || status.includes('Invalid'),
        details: `Error handling: ${status}`
      };
    }
  });

  // Run tests sequentially
  let currentTest = 0;
  
  function runNextTest() {
    if (currentTest >= tests.length) {
      console.log('\n=== TEST SUMMARY ===');
      tests.forEach(test => {
        const icon = test.result?.pass ? '✓' : '✗';
        console.log(`${icon} ${test.name}: ${test.result?.pass ? 'PASS' : 'FAIL'}`);
        if (test.result?.details) console.log(`   ${test.result.details}`);
      });
      
      const passCount = tests.filter(t => t.result?.pass).length;
      console.log(`\nResults: ${passCount}/${tests.length} tests passed`);
      
      if (passCount === tests.length) {
        console.log('🎉 All tests PASSED! Pile cap app is working correctly.');
      } else {
        console.log('⚠️  Some tests failed. Check details above.');
      }
      return;
    }

    const test = tests[currentTest];
    console.log(`\n${currentTest + 1}. Running: ${test.name}`);
    
    test.setup();
    
    // Trigger analysis
    document.getElementById('pc-analyze').click();
    
    // Wait for analysis to complete
    setTimeout(() => {
      test.result = test.validate();
      console.log(`   Result: ${test.result.pass ? 'PASS' : 'FAIL'} - ${test.result.details}`);
      currentTest++;
      runNextTest();
    }, 1000);
  }

  // Start testing
  runNextTest();
}

// Mathematical verification helper
function verifyCalculations() {
  console.log('\n=== Mathematical Verification ===');
  
  // Test rigid pile cap formulas
  const coords = [{x:0,y:0}, {x:3,y:0}, {x:3,y:2}, {x:0,y:2}];
  const P = 5000, Mx = 0, My = 0;
  
  // Set up known case
  document.getElementById('pc-load-p').value = P;
  document.getElementById('pc-mx').value = Mx;
  document.getElementById('pc-my').value = My;
  document.getElementById('pc-coords').value = coords.map(c => `${c.x},${c.y}`).join('\n');
  document.getElementById('pc-loadcases').value = '';
  
  document.getElementById('pc-analyze').click();
  
  setTimeout(() => {
    const rows = document.querySelectorAll('#pc-table tbody tr');
    const reactions = Array.from(rows).map(row => parseFloat(row.cells[3].textContent));
    const expected = P / coords.length;
    
    console.log('Expected reaction per pile:', expected, 'kN');
    console.log('Calculated reactions:', reactions, 'kN');
    
    const tolerance = 0.001;
    const accurate = reactions.every(r => Math.abs(r - expected) < tolerance);
    
    console.log('Mathematical accuracy:', accurate ? 'PASS' : 'FAIL');
    
    if (accurate) {
      console.log('✓ Rigid pile cap equations verified');
    } else {
      console.log('✗ Mathematical error detected');
    }
  }, 500);
}

// Quick smoke test
function quickTest() {
  console.log('Running quick smoke test...');
  
  // Basic inputs
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
  
  document.getElementById('pc-analyze').click();
  
  setTimeout(() => {
    const status = document.getElementById('pc-status').textContent;
    const resultsVisible = !document.getElementById('pc-results').hidden;
    
    if (resultsVisible && status.includes('complete')) {
      console.log('✓ Quick test PASSED - App is functional');
    } else {
      console.log('✗ Quick test FAILED - Status:', status);
    }
  }, 500);
}

// Export this for console use
window.pileCapTests = {
  comprehensive: runComprehensiveTests,
  mathematical: verifyCalculations,
  quick: quickTest
};

console.log('Pile cap test suite loaded. Run:');
console.log('• pileCapTests.quick() - for basic functionality check');
console.log('• pileCapTests.mathematical() - for calculation verification');
console.log('• pileCapTests.comprehensive() - for full test suite');
