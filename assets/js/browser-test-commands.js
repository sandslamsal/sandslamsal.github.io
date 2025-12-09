// Browser test commands for pile cap app
// Copy and paste these into the browser console at http://localhost:4000/apps/pilecap/

// Test 1: Basic functionality
console.log('=== Browser Test 1: Basic Single Load Case ===');
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
document.getElementById('pc-analyze').click();

setTimeout(() => {
  const status = document.getElementById('pc-status').textContent;
  const resultsVisible = !document.getElementById('pc-results').hidden;
  const rows = document.querySelectorAll('#pc-table tbody tr');
  console.log('Status:', status);
  console.log('Results visible:', resultsVisible);
  console.log('Number of pile reactions:', rows.length);
  
  if (resultsVisible && rows.length === 4) {
    console.log('✓ Test 1 PASSED: Basic analysis working');
    
    // Test 2: Multi-case analysis
    console.log('\n=== Browser Test 2: Multi Load Cases ===');
    document.getElementById('pc-loadcases').value = 'LC1 5000 200 150\nLC2 6000 -100 250\nLC3 4500 300 -50';
    document.getElementById('pc-analyze').click();
    
    setTimeout(() => {
      const mcTable = document.getElementById('pc-mc-table');
      const strTable = document.getElementById('pc-str-table');
      if (mcTable && !mcTable.hidden && strTable && !strTable.hidden) {
        console.log('✓ Test 2 PASSED: Multi-case analysis working');
        
        // Test 3: Export functionality
        console.log('\n=== Browser Test 3: Export Functions ===');
        const jsonBtn = document.getElementById('pc-export-json');
        const csvBtn = document.getElementById('pc-export-csv');
        if (jsonBtn && csvBtn && !jsonBtn.disabled && !csvBtn.disabled) {
          console.log('✓ Test 3 PASSED: Export buttons available');
          console.log('\n🎉 ALL BROWSER TESTS PASSED!');
        } else {
          console.log('✗ Test 3 FAILED: Export buttons not available');
        }
      } else {
        console.log('✗ Test 2 FAILED: Multi-case tables not visible');
      }
    }, 1000);
  } else {
    console.log('✗ Test 1 FAILED: Results not displayed correctly');
  }
}, 1000);
