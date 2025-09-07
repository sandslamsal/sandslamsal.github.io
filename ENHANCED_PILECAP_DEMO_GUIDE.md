# Enhanced Pile Cap Application - Demo Guide

## Quick Start Demo

### Access the Application
1. Open your browser to: `http://localhost:4000/apps/pilecap/`
2. You should see the enhanced interface with comprehensive design data input

### Demo 1: Single Load Case with Auto-Generated Piles

1. **Load Example Data**:
   - Click "Load Example" button to populate all fields
   - Notice the comprehensive project information and design parameters

2. **Generate Pile Coordinates**:
   - Click "🎯 Generate Pile Coordinates" 
   - View the generated pile layout table
   - See both US (ft) and SI (m) units

3. **Validate Layout**:
   - Click "✅ Validate Layout"
   - Review any warnings or recommendations

4. **Run Analysis**:
   - Ensure "Single Load Case" is selected
   - Click "Analyze"
   - View the comprehensive design results

### Demo 2: Multiple Load Cases with Excel-Style Input

1. **Switch to Multiple Load Cases**:
   - Select "Multiple Load Cases" radio button
   - Notice the interface switches to show the Excel-style input area

2. **Paste Excel Data**:
   - The example data is already loaded in the textarea
   - Click "📋 Parse Load Data"
   - View the parsed and validated load cases table

3. **Run Multi-Case Analysis**:
   - Click "Analyze"
   - View enhanced results including:
     - Load case summary table
     - Max/min forces per pile with governing cases
     - Comprehensive design check summary
     - Detailed calculations for governing case

### Demo 3: Testing Excel-Style Data Format

Try pasting this data into the multiple load cases textarea:

```
Load Case	Factor	Fx (k)	Fy (k)	Fz (k)	Mx (k-ft)	My (k-ft)
DL	1.00	0	0	4500	0	0
LL	1.00	0	0	2500	5000	3000
WL	1.00	500	300	1000	8000	12000
EQ	1.00	800	600	1500	15000	10000
```

### Key Features to Test

#### ✅ Load Case Selection
- Switch between single and multiple load cases
- Notice dynamic UI changes

#### ✅ Pile Coordinate Generation  
- Try different pile counts (2x2, 3x2, 4x3)
- Adjust pile spacing
- Watch footing dimensions auto-update

#### ✅ Excel-Style Data Parsing
- Test tab-separated values
- Test comma-separated values
- Test space-separated values
- Try invalid data to see error handling

#### ✅ Comprehensive Design Results
- Review weight calculations
- Check one-way shear analysis
- Examine punching shear checks
- View flexural reinforcement requirements

#### ✅ Max/Min Force Analysis
- Identify which pile experiences maximum force
- See which load case governs for each pile
- Review color-coded pass/fail status

### Expected Results

**For Single Load Case (P=5000k, Mx=0, My=0)**:
- All piles should have equal reactions (~833k each for 6 piles)
- Design checks should pass for the example geometry
- No uplift forces expected

**For Multiple Load Cases**:
- Varying pile forces across different cases
- Some cases may show higher utilizations
- Max/min table shows force ranges per pile
- Governing cases identified for each extreme

### Troubleshooting

**If the application doesn't load**:
- Check that Jekyll server is running
- Ensure no JavaScript errors in browser console
- Verify all CSS files are loading properly

**If calculations seem wrong**:
- Check input units (app expects US customary units)
- Verify pile coordinates are reasonable
- Ensure load case data is properly formatted

**If Excel parsing fails**:
- Check for header rows in data
- Ensure 7 columns: Case, Factor, Fx, Fy, Fz, Mx, My
- Try simpler delimiter (tab or comma)

### Advanced Features to Explore

1. **Export Functionality**:
   - Click "Export JSON" for complete results
   - Click "Export CSV" for load case data

2. **Layout Validation**:
   - Try very small pile spacing to trigger warnings
   - Test pile layout vs. column size ratios

3. **Design Parameter Sensitivity**:
   - Adjust footing thickness and see capacity changes
   - Modify concrete strength and observe effects
   - Change pile capacities and see utilizations

---

**The enhanced pile cap application is now ready for professional use with comprehensive design capabilities!**
