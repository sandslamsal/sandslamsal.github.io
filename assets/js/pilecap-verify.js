// Pile Cap Calculation Verification
// Simple Node.js script to verify core mathematical functions
// Usage: node pilecap-verify.js

// Load the core module (if available in Node.js context)
const fs = require('fs');
const path = require('path');

// Mock global object for browser compatibility
if (typeof global === 'undefined') global = {};
global.window = {};

// Read and evaluate the core module
const corePath = path.join(__dirname, 'pilecap-core.js');
let Core;

if (fs.existsSync(corePath)) {
  try {
    // Try requiring as module first
    Core = require('./pilecap-core.js');
  } catch (e) {
    // Fallback to eval
    const coreCode = fs.readFileSync(corePath, 'utf8');
    eval(coreCode);
    Core = global.PileCapCore;
  }
} else {
  console.error('Core module not found:', corePath);
  Core = {};
}

function testBasicReactions() {
  console.log('=== Testing Basic Reaction Calculations ===');
  
  // Test 1: 4 piles, axial load only
  const coords = [
    {x: 0, y: 0},
    {x: 3, y: 0}, 
    {x: 3, y: 2},
    {x: 0, y: 2}
  ];
  
  const P = 5000; // kN
  const Mx = 0;   // kN⋅m
  const My = 0;   // kN⋅m
  
  console.log('\nTest 1: Axial load only');
  console.log('P =', P, 'kN, Mx = My = 0');
  console.log('4 piles at:', coords.map(c => `(${c.x},${c.y})`).join(', '));
  
  if (Core.computeReactionsRigid) {
    const result = Core.computeReactionsRigid({P, Mx, My, coords});
    
    console.log('Reactions:');
    result.reactions.forEach(r => {
      console.log(`  Pile ${r.index}: ${r.R.toFixed(2)} kN at (${r.x}, ${r.y})`);
    });
    
    console.log(`Pmax: ${result.Pmax.toFixed(2)} kN`);
    console.log(`Pmin: ${result.Pmin.toFixed(2)} kN`);
    
    // Verify equilibrium
    const sumR = result.reactions.reduce((sum, r) => sum + r.R, 0);
    console.log(`Sum of reactions: ${sumR.toFixed(2)} kN`);
    console.log(`Equilibrium error: ${Math.abs(sumR - P).toFixed(6)} kN`);
    
    // For axial load only, all reactions should be equal to P/4
    const expectedR = P / 4;
    const allEqual = result.reactions.every(r => Math.abs(r.R - expectedR) < 0.001);
    console.log(`All reactions equal (${expectedR} kN): ${allEqual ? 'PASS' : 'FAIL'}`);
  } else {
    console.log('Core.computeReactionsRigid not available');
  }
  
  // Test 2: With moment
  console.log('\nTest 2: With moment Mx = 2000 kN⋅m');
  const Mx2 = 2000;
  
  if (Core.computeReactionsRigid) {
    const result2 = Core.computeReactionsRigid({P, Mx: Mx2, My, coords});
    
    console.log('Reactions with moment:');
    result2.reactions.forEach(r => {
      console.log(`  Pile ${r.index}: ${r.R.toFixed(2)} kN at (${r.x}, ${r.y})`);
    });
    
    // Verify moment equilibrium
    const cx = result2.cx;
    const cy = result2.cy;
    let momentSum = 0;
    result2.reactions.forEach(r => {
      momentSum += r.R * (r.y - cy);
    });
    console.log(`Applied Mx: ${Mx2} kN⋅m`);
    console.log(`Calculated moment: ${momentSum.toFixed(2)} kN⋅m`);
    console.log(`Moment equilibrium error: ${Math.abs(momentSum - Mx2).toFixed(6)} kN⋅m`);
  }
}

function testFlexureCalculations() {
  console.log('\n=== Testing Flexure Calculations ===');
  
  if (Core.flexureCapacity) {
    const params = {
      Mu_kNm: 800,
      b_m: 1.0,
      d_m: 0.72,
      fc_MPa: 35,
      fy_MPa: 420,
      phi: 0.9
    };
    
    console.log('Input parameters:');
    console.log(`  Mu = ${params.Mu_kNm} kN⋅m`);
    console.log(`  b = ${params.b_m} m`);
    console.log(`  d = ${params.d_m} m`);
    console.log(`  f'c = ${params.fc_MPa} MPa`);
    console.log(`  fy = ${params.fy_MPa} MPa`);
    console.log(`  φ = ${params.phi}`);
    
    const result = Core.flexureCapacity(params);
    
    console.log('Results:');
    console.log(`  φMn = ${result.phiMn_kNm.toFixed(2)} kN⋅m`);
    console.log(`  As,req = ${result.As_req_mm2.toFixed(0)} mm²`);
    console.log(`  As,min = ${result.As_min_mm2.toFixed(0)} mm²`);
    
    const adequate = result.phiMn_kNm >= params.Mu_kNm;
    console.log(`  Capacity adequate: ${adequate ? 'YES' : 'NO'}`);
  } else {
    console.log('Core.flexureCapacity not available');
  }
}

function testOneWayShear() {
  console.log('\n=== Testing One-Way Shear ===');
  
  if (Core.oneWayShear) {
    const params = {
      Vu_kN: 250,
      b_m: 1.0,
      d_m: 0.72,
      fc_MPa: 35,
      phi: 0.75
    };
    
    console.log('Input parameters:');
    console.log(`  Vu = ${params.Vu_kN} kN`);
    console.log(`  b = ${params.b_m} m`);
    console.log(`  d = ${params.d_m} m`);
    console.log(`  f'c = ${params.fc_MPa} MPa`);
    console.log(`  φ = ${params.phi}`);
    
    const result = Core.oneWayShear(params);
    
    console.log('Results:');
    console.log(`  φVc = ${result.phiVc_kN.toFixed(2)} kN`);
    console.log(`  Utilization = ${result.util.toFixed(3)}`);
    console.log(`  Adequate: ${result.OK ? 'YES' : 'NO'}`);
  } else {
    console.log('Core.oneWayShear not available');
  }
}

function testIterativeRedistribution() {
  console.log('\n=== Testing Iterative Tension Redistribution ===');
  
  // Set up a case that will have tension in some piles
  const coords = [
    {x: 0, y: 0},
    {x: 4, y: 0},
    {x: 4, y: 2},
    {x: 0, y: 2}
  ];
  
  const P = 3000;  // Lower load
  const Mx = 3000; // Large moment to cause tension
  const My = 0;
  
  console.log('Load case causing tension:');
  console.log(`P = ${P} kN, Mx = ${Mx} kN⋅m, My = ${My} kN⋅m`);
  
  if (Core.computeReactionsRigid && Core.computeReactionsIterative) {
    // Regular analysis
    const regular = Core.computeReactionsRigid({P, Mx, My, coords});
    console.log('\nRegular analysis (allowing tension):');
    regular.reactions.forEach(r => {
      const status = r.R < 0 ? '(TENSION)' : '';
      console.log(`  Pile ${r.index}: ${r.R.toFixed(2)} kN ${status}`);
    });
    
    // Iterative analysis
    const iterative = Core.computeReactionsIterative({P, Mx, My, coords});
    console.log('\nIterative analysis (tension eliminated):');
    iterative.reactions.forEach(r => {
      const status = r.R < 0 ? '(TENSION)' : r.R === 0 ? '(INACTIVE)' : '';
      console.log(`  Pile ${r.index}: ${r.R.toFixed(2)} kN ${status}`);
    });
    
    // Check that no negative reactions remain
    const hasNegative = iterative.reactions.some(r => r.R < -0.001);
    console.log(`\nTension eliminated: ${!hasNegative ? 'YES' : 'NO'}`);
    
    // Check equilibrium
    const sumIterative = iterative.reactions.reduce((sum, r) => sum + r.R, 0);
    console.log(`Force equilibrium: ${Math.abs(sumIterative - P) < 0.01 ? 'YES' : 'NO'}`);
  } else {
    console.log('Iterative functions not available');
  }
}

// Main execution
console.log('Pile Cap Core Calculation Verification\n');

try {
  testBasicReactions();
  testFlexureCalculations();
  testOneWayShear();
  testIterativeRedistribution();
  
  console.log('\n=== Verification Complete ===');
  console.log('Check results above for any FAIL indicators.');
  
} catch (error) {
  console.error('Error during verification:', error.message);
  console.log('This script requires the core module to be properly loaded.');
}
