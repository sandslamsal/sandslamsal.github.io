/**
 * Pile Utilities for Web Application
 * ==================================
 * 
 * JavaScript implementation of pile coordinate generation and utilities
 * for integration with the pile cap web application.
 */

/**
 * Generate pile coordinates for a rectangular pile layout
 * @param {number} pileNoX - Number of piles in the x-direction
 * @param {number} pileSpacingXFt - Spacing between piles in the x-direction (ft)
 * @param {number} pileNoY - Number of piles in the y-direction
 * @param {number} pileSpacingYFt - Spacing between piles in the y-direction (ft)
 * @returns {Array} Array of objects containing pile coordinates
 */
function generatePileCoordinates(pileNoX, pileSpacingXFt, pileNoY, pileSpacingYFt) {
    const pileCoordinates = [];
    let pileNumber = 1;
    
    // Calculate the total width and height of the pile group
    const totalWidthX = (pileNoX - 1) * pileSpacingXFt;
    const totalWidthY = (pileNoY - 1) * pileSpacingYFt;
    
    // Calculate starting coordinates to center the pile group around origin
    const startX = -totalWidthX / 2.0;
    const startY = -totalWidthY / 2.0;
    
    // Generate coordinates for each pile
    for (let j = 0; j < pileNoY; j++) {  // Rows (y-direction)
        for (let i = 0; i < pileNoX; i++) {  // Columns (x-direction)
            const xCoord = startX + i * pileSpacingXFt;
            const yCoord = startY + j * pileSpacingYFt;
            
            const pileData = {
                no: pileNumber,
                x: xCoord,
                y: yCoord
            };
            
            pileCoordinates.push(pileData);
            pileNumber++;
        }
    }
    
    return pileCoordinates;
}

/**
 * Calculate pile group geometric properties
 * @param {Array} pileCoordinates - Array of pile coordinate objects
 * @returns {Object} Object containing pile group properties
 */
function calculatePileGroupProperties(pileCoordinates) {
    if (!pileCoordinates || pileCoordinates.length === 0) {
        return null;
    }
    
    const totalPiles = pileCoordinates.length;
    
    // Calculate centroid
    const sumX = pileCoordinates.reduce((sum, pile) => sum + pile.x, 0);
    const sumY = pileCoordinates.reduce((sum, pile) => sum + pile.y, 0);
    const centroidX = sumX / totalPiles;
    const centroidY = sumY / totalPiles;
    
    // Calculate moments of inertia about centroidal axes
    const momentOfInertiaX = pileCoordinates.reduce((sum, pile) => 
        sum + Math.pow(pile.y - centroidY, 2), 0);
    const momentOfInertiaY = pileCoordinates.reduce((sum, pile) => 
        sum + Math.pow(pile.x - centroidX, 2), 0);
    
    return {
        centroidX: centroidX,
        centroidY: centroidY,
        totalPiles: totalPiles,
        momentOfInertiaX: momentOfInertiaX,
        momentOfInertiaY: momentOfInertiaY
    };
}

/**
 * Validate pile layout parameters
 * @param {number} pileNoX - Number of piles in x-direction
 * @param {number} pileNoY - Number of piles in y-direction
 * @param {number} pileSpacingXFt - Pile spacing in x-direction (ft)
 * @param {number} pileSpacingYFt - Pile spacing in y-direction (ft)
 * @param {number} columnXDimFt - Column width (ft)
 * @param {number} columnYDimFt - Column height (ft)
 * @returns {Object} Validation results object
 */
function validatePileLayout(pileNoX, pileNoY, pileSpacingXFt, pileSpacingYFt, 
                           columnXDimFt, columnYDimFt) {
    const warnings = [];
    const errors = [];
    
    // Check minimum pile spacing (typically 3 times pile diameter minimum)
    const minSpacing = 3.0; // feet (assuming typical 12" pile)
    if (pileSpacingXFt < minSpacing) {
        warnings.push(`X-direction pile spacing (${pileSpacingXFt} ft) may be too small. Consider minimum ${minSpacing} ft.`);
    }
    if (pileSpacingYFt < minSpacing) {
        warnings.push(`Y-direction pile spacing (${pileSpacingYFt} ft) may be too small. Consider minimum ${minSpacing} ft.`);
    }
    
    // Check pile group extent vs column size
    const pileGroupWidth = (pileNoX - 1) * pileSpacingXFt;
    const pileGroupHeight = (pileNoY - 1) * pileSpacingYFt;
    
    if (pileGroupWidth < columnXDimFt * 1.5) {
        warnings.push(`Pile group width (${pileGroupWidth.toFixed(1)} ft) may be small relative to column width (${columnXDimFt} ft).`);
    }
    if (pileGroupHeight < columnYDimFt * 1.5) {
        warnings.push(`Pile group height (${pileGroupHeight.toFixed(1)} ft) may be small relative to column height (${columnYDimFt} ft).`);
    }
    
    // Check for minimum number of piles
    const totalPiles = pileNoX * pileNoY;
    if (totalPiles < 4) {
        warnings.push(`Total number of piles (${totalPiles}) is very low. Consider increasing for stability.`);
    }
    
    return {
        warnings: warnings,
        errors: errors,
        pileGroupWidth: pileGroupWidth,
        pileGroupHeight: pileGroupHeight,
        totalPiles: totalPiles
    };
}

/**
 * Create HTML table for displaying pile coordinates
 * @param {Array} pileCoordinates - Array of pile coordinate objects
 * @returns {string} HTML table string
 */
function createPileCoordinatesTable(pileCoordinates) {
    if (!pileCoordinates || pileCoordinates.length === 0) {
        return '<p>No pile coordinates to display.</p>';
    }
    
    let html = `
        <table class="pile-coordinates-table">
            <thead>
                <tr>
                    <th>Pile No.</th>
                    <th>X (ft)</th>
                    <th>Y (ft)</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    pileCoordinates.forEach(pile => {
        html += `
            <tr>
                <td>${pile.no}</td>
                <td>${pile.x.toFixed(2)}</td>
                <td>${pile.y.toFixed(2)}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    return html;
}

/**
 * Update pile coordinates display in the web interface
 * @param {string} containerId - ID of the container element
 * @param {Array} pileCoordinates - Array of pile coordinate objects
 */
function updatePileCoordinatesDisplay(containerId, pileCoordinates) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
    }
    
    const tableHTML = createPileCoordinatesTable(pileCoordinates);
    container.innerHTML = tableHTML;
}

/**
 * Generate and display pile coordinates based on input parameters
 * @param {Object} params - Object containing pile layout parameters
 */
function generateAndDisplayPileCoordinates(params) {
    const {
        pileNoX,
        pileSpacingXFt,
        pileNoY,
        pileSpacingYFt,
        containerId
    } = params;
    
    // Generate coordinates
    const coordinates = generatePileCoordinates(pileNoX, pileSpacingXFt, pileNoY, pileSpacingYFt);
    
    // Calculate properties
    const properties = calculatePileGroupProperties(coordinates);
    
    // Update display
    updatePileCoordinatesDisplay(containerId, coordinates);
    
    // Return data for further use
    return {
        coordinates: coordinates,
        properties: properties
    };
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generatePileCoordinates,
        calculatePileGroupProperties,
        validatePileLayout,
        createPileCoordinatesTable,
        updatePileCoordinatesDisplay,
        generateAndDisplayPileCoordinates
    };
}
