"""
Test script for pile_utilities.py module
=========================================

This script tests the pile coordinate generation and related functions.
"""

import sys
import os

# Add the current directory to Python path to import pile_utilities
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pile_utilities import (
    generate_pile_coordinates,
    display_pile_coordinates_table,
    calculate_pile_group_properties,
    validate_pile_layout
)

def test_pile_utilities():
    """Test the pile utilities functions with sample data."""
    
    print("=== PILE UTILITIES TEST ===\n")
    
    # Test parameters (matching the example in the original code)
    pile_no_x = 3
    pile_spacing_x_ft = 8.0
    pile_no_y = 2
    pile_spacing_y_ft = 8.0
    
    print(f"Test Configuration:")
    print(f"  Piles in X-direction: {pile_no_x}")
    print(f"  X-spacing: {pile_spacing_x_ft} ft")
    print(f"  Piles in Y-direction: {pile_no_y}")
    print(f"  Y-spacing: {pile_spacing_y_ft} ft")
    print()
    
    # Test 1: Generate pile coordinates
    print("1. Testing pile coordinate generation:")
    pile_coordinates = generate_pile_coordinates(pile_no_x, pile_spacing_x_ft, pile_no_y, pile_spacing_y_ft)
    
    print(f"Generated {len(pile_coordinates)} pile coordinates:")
    display_pile_coordinates_table(pile_coordinates)
    print()
    
    # Test 2: Calculate pile group properties
    print("2. Testing pile group properties calculation:")
    properties = calculate_pile_group_properties(pile_coordinates)
    
    print(f"Pile Group Properties:")
    print(f"  Total piles: {properties['total_piles']}")
    print(f"  Centroid X: {properties['centroid_x']:.3f} ft")
    print(f"  Centroid Y: {properties['centroid_y']:.3f} ft")
    print(f"  Moment of Inertia X: {properties['moment_of_inertia_x']:.3f} ft²")
    print(f"  Moment of Inertia Y: {properties['moment_of_inertia_y']:.3f} ft²")
    print()
    
    # Test 3: Validate pile layout
    print("3. Testing pile layout validation:")
    column_x_dim_ft = 2.0
    column_y_dim_ft = 2.0
    
    validation = validate_pile_layout(
        pile_no_x, pile_no_y, pile_spacing_x_ft, pile_spacing_y_ft,
        column_x_dim_ft, column_y_dim_ft
    )
    
    print(f"Layout Validation Results:")
    print(f"  Pile group width: {validation['pile_group_width']:.1f} ft")
    print(f"  Pile group height: {validation['pile_group_height']:.1f} ft")
    print(f"  Total piles: {validation['total_piles']}")
    
    if validation['warnings']:
        print("  Warnings:")
        for warning in validation['warnings']:
            print(f"    - {warning}")
    else:
        print("  No warnings found.")
    
    if validation['errors']:
        print("  Errors:")
        for error in validation['errors']:
            print(f"    - {error}")
    else:
        print("  No errors found.")
    
    print("\n=== TEST COMPLETED SUCCESSFULLY ===")

if __name__ == "__main__":
    test_pile_utilities()
