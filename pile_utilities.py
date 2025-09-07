"""
Pile Utilities Module
====================

This module provides utilities for pile cap design calculations,
including pile coordinate generation and layout functions.
"""

def generate_pile_coordinates(pile_no_x, pile_spacing_x_ft, pile_no_y, pile_spacing_y_ft):
    """
    Generate pile coordinates for a rectangular pile layout.
    
    Parameters:
    -----------
    pile_no_x : int
        Number of piles in the x-direction
    pile_spacing_x_ft : float
        Spacing between piles in the x-direction (ft)
    pile_no_y : int
        Number of piles in the y-direction
    pile_spacing_y_ft : float
        Spacing between piles in the y-direction (ft)
    
    Returns:
    --------
    list
        List of dictionaries containing pile coordinates with keys:
        - 'No.': Pile number (1-indexed)
        - 'x (ft)': X-coordinate in feet
        - 'y (ft)': Y-coordinate in feet
    """
    pile_coordinates = []
    pile_number = 1
    
    # Calculate the total width and height of the pile group
    total_width_x = (pile_no_x - 1) * pile_spacing_x_ft
    total_width_y = (pile_no_y - 1) * pile_spacing_y_ft
    
    # Calculate starting coordinates to center the pile group around origin
    start_x = -total_width_x / 2.0
    start_y = -total_width_y / 2.0
    
    # Generate coordinates for each pile
    for j in range(pile_no_y):  # Rows (y-direction)
        for i in range(pile_no_x):  # Columns (x-direction)
            x_coord = start_x + i * pile_spacing_x_ft
            y_coord = start_y + j * pile_spacing_y_ft
            
            pile_data = {
                'No.': pile_number,
                'x (ft)': x_coord,
                'y (ft)': y_coord
            }
            
            pile_coordinates.append(pile_data)
            pile_number += 1
    
    return pile_coordinates


def display_pile_coordinates_table(pile_coordinates):
    """
    Display pile coordinates in a formatted table.
    
    Parameters:
    -----------
    pile_coordinates : list
        List of dictionaries containing pile coordinate data
    """
    print("PileNo   x(ft)    y(ft)")
    print("------------------------")
    for pile in pile_coordinates:
        print(f"{pile['No.']:<8}{pile['x (ft)']:<9.2f}{pile['y (ft)']:<9.2f}")


def calculate_pile_group_properties(pile_coordinates):
    """
    Calculate pile group geometric properties.
    
    Parameters:
    -----------
    pile_coordinates : list
        List of dictionaries containing pile coordinate data
    
    Returns:
    --------
    dict
        Dictionary containing pile group properties:
        - 'centroid_x': X-coordinate of pile group centroid
        - 'centroid_y': Y-coordinate of pile group centroid
        - 'total_piles': Total number of piles
        - 'moment_of_inertia_x': Moment of inertia about x-axis
        - 'moment_of_inertia_y': Moment of inertia about y-axis
    """
    if not pile_coordinates:
        return None
    
    total_piles = len(pile_coordinates)
    
    # Calculate centroid
    sum_x = sum(pile['x (ft)'] for pile in pile_coordinates)
    sum_y = sum(pile['y (ft)'] for pile in pile_coordinates)
    centroid_x = sum_x / total_piles
    centroid_y = sum_y / total_piles
    
    # Calculate moments of inertia about centroidal axes
    moment_of_inertia_x = sum((pile['y (ft)'] - centroid_y)**2 for pile in pile_coordinates)
    moment_of_inertia_y = sum((pile['x (ft)'] - centroid_x)**2 for pile in pile_coordinates)
    
    return {
        'centroid_x': centroid_x,
        'centroid_y': centroid_y,
        'total_piles': total_piles,
        'moment_of_inertia_x': moment_of_inertia_x,
        'moment_of_inertia_y': moment_of_inertia_y
    }


def validate_pile_layout(pile_no_x, pile_no_y, pile_spacing_x_ft, pile_spacing_y_ft, 
                        column_x_dim_ft, column_y_dim_ft):
    """
    Validate pile layout parameters for design feasibility.
    
    Parameters:
    -----------
    pile_no_x, pile_no_y : int
        Number of piles in x and y directions
    pile_spacing_x_ft, pile_spacing_y_ft : float
        Pile spacing in x and y directions (ft)
    column_x_dim_ft, column_y_dim_ft : float
        Column dimensions in x and y directions (ft)
    
    Returns:
    --------
    dict
        Dictionary containing validation results and warnings
    """
    warnings = []
    errors = []
    
    # Check minimum pile spacing (typically 3 times pile diameter minimum)
    min_spacing = 3.0  # feet (assuming typical 12" pile)
    if pile_spacing_x_ft < min_spacing:
        warnings.append(f"X-direction pile spacing ({pile_spacing_x_ft} ft) may be too small. Consider minimum {min_spacing} ft.")
    if pile_spacing_y_ft < min_spacing:
        warnings.append(f"Y-direction pile spacing ({pile_spacing_y_ft} ft) may be too small. Consider minimum {min_spacing} ft.")
    
    # Check pile group extent vs column size
    pile_group_width = (pile_no_x - 1) * pile_spacing_x_ft
    pile_group_height = (pile_no_y - 1) * pile_spacing_y_ft
    
    if pile_group_width < column_x_dim_ft * 1.5:
        warnings.append(f"Pile group width ({pile_group_width:.1f} ft) may be small relative to column width ({column_x_dim_ft} ft).")
    if pile_group_height < column_y_dim_ft * 1.5:
        warnings.append(f"Pile group height ({pile_group_height:.1f} ft) may be small relative to column height ({column_y_dim_ft} ft).")
    
    # Check for minimum number of piles
    total_piles = pile_no_x * pile_no_y
    if total_piles < 4:
        warnings.append(f"Total number of piles ({total_piles}) is very low. Consider increasing for stability.")
    
    return {
        'warnings': warnings,
        'errors': errors,
        'pile_group_width': pile_group_width,
        'pile_group_height': pile_group_height,
        'total_piles': total_piles
    }
