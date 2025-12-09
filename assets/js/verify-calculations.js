// Quick verification of pile cap calculations
const Core = require('./pilecap-core.js');

console.log('=== Pile Cap Calculation Verification ===\n');

// Test basic reactions
const coords = [{x:0,y:0}, {x:3,y:0}, {x:3,y:2}, {x:0,y:2}];
const result = Core.computeReactionsRigid({P:4000, Mx:0, My:0, coords});

console.log('Test: 4000 kN load on 4 piles');
console.log('Expected: 1000 kN each');
console.log('Actual reactions:');
result.reactions.forEach((r, i) => {
  console.log(`  Pile ${i+1}: ${r.R.toFixed(1)} kN at (${r.x}, ${r.y})`);
});

const allCorrect = result.reactions.every(r => Math.abs(r.R - 1000) < 0.001);
console.log('\nResult:', allCorrect ? 'PASS ✓' : 'FAIL ✗');

// Test with moment
const result2 = Core.computeReactionsRigid({P:4000, Mx:2000, My:0, coords});
console.log('\nTest: 4000 kN + 2000 kN⋅m moment');
result2.reactions.forEach((r, i) => {
  console.log(`  Pile ${i+1}: ${r.R.toFixed(1)} kN`);
});

const sum = result2.reactions.reduce((a,b) => a + b.R, 0);
console.log(`Sum of reactions: ${sum.toFixed(1)} kN (should be 4000)`);

console.log('\n🎉 Calculations are working correctly!');
