---
layout: page
permalink: /bio/
title: bio
description: Teaching experience, professional background, and educational contributions.
nav: true
nav_order: 2
---

<div class="post">
  <!-- Professional Experience Section -->
  <div class="container mt-4">
    <h2 class="mb-4">
      <i class="fa-solid fa-briefcase me-3"></i>Professional Experience
    </h2>
    
    <!-- True Horizontal Timeline -->
    <div class="horizontal-timeline mb-5">
      <div class="timeline-track">
        
        <!-- Timeline Item 1 - Current Position -->
        <div class="timeline-item">
          <div class="timeline-marker current">
            <i class="fa-solid fa-building"></i>
          </div>
          <div class="timeline-content">
            <div class="timeline-period">Present</div>
            <h5 class="timeline-title">AtkinsRéalis</h5>
            <h6 class="timeline-role">Engineer II</h6>
            <p class="timeline-description">Structural Engineer - Federal Bridge Infrastructure. Designing federal bridge infrastructure in compliance with AASHTO LRFD standards.</p>
            <span class="timeline-badge current">Current</span>
          </div>
        </div>

        <!-- Timeline Item 2 - Research Position -->
        <div class="timeline-item">
          <div class="timeline-marker current">
            <i class="fa-solid fa-flask"></i>
          </div>
          <div class="timeline-content">
            <div class="timeline-period">2023 - Present</div>
            <h5 class="timeline-title">University of Miami - CASE Lab</h5>
            <h6 class="timeline-role">Researcher</h6>
            <p class="timeline-description">Coastal and Structural Engineering. Advanced research in morphological investigation and physical testing. Key contributor to DARPA-funded REEFENSE project.</p>
            <span class="timeline-badge current">Current</span>
          </div>
        </div>

        <!-- Timeline Item 3 - Tensile Structure -->
        <div class="timeline-item">
          <div class="timeline-marker">
            <i class="fa-solid fa-building-columns"></i>
          </div>
          <div class="timeline-content">
            <div class="timeline-period">2017 - 2022</div>
            <h5 class="timeline-title">Tensile Structure, Kathmandu</h5>
            <h6 class="timeline-role">Structural Engineer</h6>
            <p class="timeline-description">Project Management & Structural Design. Led procurement and contract management for major infrastructure projects, securing over $600,000 in contracts.</p>
            <span class="timeline-badge completed">5 Years</span>
          </div>
        </div>
        
      </div>
    </div>

    <style>
      .horizontal-timeline {
        padding: 20px 0;
        position: relative;
        overflow-x: auto;
        overflow-y: visible;
      }
      
      .timeline-track {
        display: flex;
        align-items: flex-start;
        gap: 80px;
        min-width: fit-content;
        padding: 20px 40px;
        position: relative;
      }
      
      /* Horizontal connecting line */
      .timeline-track::before {
        content: '';
        position: absolute;
        top: 50px;
        left: 90px;
        right: 90px;
        height: 3px;
        background: linear-gradient(90deg, 
          var(--global-theme-color, #007bff) 0%, 
          var(--global-theme-color, #007bff) 50%, 
          rgba(var(--global-text-color-rgb, 33, 37, 41), 0.3) 100%);
        border-radius: 2px;
        z-index: 1;
      }
      
      .timeline-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 280px;
        max-width: 320px;
        position: relative;
        z-index: 2;
      }
      
      .timeline-marker {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: var(--global-bg-color, #fff);
        border: 4px solid var(--global-theme-color, #007bff);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        position: relative;
        z-index: 3;
      }
      
      .timeline-marker.current {
        background: var(--global-theme-color, #007bff);
        border-color: var(--global-theme-color, #007bff);
        box-shadow: 0 6px 20px rgba(0,123,255,0.3);
      }
      
      .timeline-marker i {
        font-size: 28px;
        color: var(--global-theme-color, #007bff);
      }
      
      .timeline-marker.current i {
        color: var(--global-bg-color, #fff);
      }
      
      .timeline-content {
        text-align: center;
        background: var(--global-bg-color, #fff);
        border: 1px solid var(--global-divider-color, #dee2e6);
        border-radius: 16px;
        padding: 24px 20px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        transition: all 0.3s ease;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      .timeline-content:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      }
      
      .timeline-period {
        font-size: 12px;
        font-weight: 600;
        color: var(--global-theme-color, #007bff);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 12px;
      }
      
      .timeline-title {
        font-size: 16px;
        font-weight: 700;
        color: var(--global-text-color, #000);
        margin-bottom: 8px;
        line-height: 1.3;
      }
      
      .timeline-role {
        font-size: 14px;
        font-weight: 600;
        color: var(--global-theme-color, #007bff);
        margin-bottom: 12px;
      }
      
      .timeline-description {
        font-size: 13px;
        color: var(--global-text-color-light, #6c757d);
        line-height: 1.4;
        margin-bottom: 16px;
        flex-grow: 1;
      }
      
      .timeline-badge {
        display: inline-block;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .timeline-badge.current {
        background: var(--global-theme-color, #007bff);
        color: var(--global-bg-color, #fff);
      }
      
      .timeline-badge.completed {
        background: var(--global-text-color-light, #6c757d);
        color: var(--global-bg-color, #fff);
      }
      
      /* Dark theme specific adjustments */
      @media (prefers-color-scheme: dark) {
        .timeline-marker {
          border-color: var(--global-theme-color);
        }
        
        .timeline-content {
          background: var(--global-card-bg-color);
          border-color: var(--global-divider-color);
        }
        
        .timeline-title {
          color: var(--global-text-color);
        }
        
        .timeline-description {
          color: var(--global-text-color-light);
        }
      }
      
      /* Mobile responsiveness */
      @media (max-width: 768px) {
        .timeline-track {
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        
        .timeline-track::before {
          display: none;
        }
        
        .timeline-item {
          min-width: 100%;
          max-width: 100%;
        }
        
        .timeline-content {
          height: auto;
          min-height: 200px;
        }
      }
      
      /* Tablet responsiveness */
      @media (max-width: 1024px) and (min-width: 769px) {
        .timeline-track {
          gap: 40px;
          padding: 20px 10px;
        }
        
        .timeline-item {
          min-width: 240px;
          max-width: 260px;
        }
      }
    </style>

    <!-- Teaching Experience Section -->
    <h2 class="mb-4">
      <i class="fa-solid fa-chalkboard-teacher me-3"></i>Teaching Experience
    </h2>
    
    <div class="teaching-grid mb-5">
      <!-- University of Miami -->
      <div class="teaching-card">
        <div class="teaching-header">
          <div class="university-badge">
            <i class="fa-solid fa-university"></i>
          </div>
          <div class="university-info">
            <h5 class="university-name">University of Miami</h5>
            <p class="university-location">Coral Gables, FL</p>
          </div>
        </div>
        
        <div class="courses-container">
          <div class="course-item">
            <div class="course-header">
              <h6 class="course-title">CAE 313: Structural System II</h6>
              <span class="semester-badge spring">Spring 2024</span>
            </div>
            <p class="course-role">Teaching Assistant</p>
            <div class="course-details">
              <i class="fa-solid fa-users me-2"></i>Advanced structural analysis concepts
            </div>
          </div>
          
          <div class="course-item">
            <div class="course-header">
              <h6 class="course-title">CAE 310: Structural Analysis</h6>
              <span class="semester-badge fall">Fall 2023</span>
            </div>
            <p class="course-role">Teaching Assistant</p>
            <div class="course-details">
              <i class="fa-solid fa-calculator me-2"></i>Fundamental structural analysis methods
            </div>
          </div>
        </div>
      </div>

      <!-- Texas Tech University -->
      <div class="teaching-card">
        <div class="teaching-header">
          <div class="university-badge ttu">
            <i class="fa-solid fa-university"></i>
          </div>
          <div class="university-info">
            <h5 class="university-name">Texas Tech University</h5>
            <p class="university-location">Lubbock, TX</p>
          </div>
        </div>
        
        <div class="courses-container">
          <div class="course-item">
            <div class="course-header">
              <h6 class="course-title">CE 2301: Statics</h6>
              <span class="semester-badge spring">Spring 2022</span>
            </div>
            <p class="course-role">Teaching Assistant</p>
            <div class="course-details">
              <i class="fa-solid fa-balance-scale me-2"></i>Static equilibrium and force analysis
            </div>
          </div>
          
          <div class="course-item">
            <div class="course-header">
              <h6 class="course-title">CE 2101: Construction Materials Lab</h6>
              <span class="semester-badge spring">Spring 2022</span>
            </div>
            <p class="course-role">Teaching Assistant</p>
            <div class="course-details">
              <i class="fa-solid fa-flask me-2"></i>Hands-on materials testing and analysis
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>
      .teaching-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        gap: 30px;
        margin-bottom: 50px;
      }
      
      .teaching-card {
        background: var(--global-bg-color, #fff);
        border: 1px solid var(--global-divider-color, #dee2e6);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
      }
      
      .teaching-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--global-theme-color, #007bff), #28a745);
        border-radius: 20px 20px 0 0;
      }
      
      .teaching-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      }
      
      .teaching-header {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--global-divider-color, #eee);
      }
      
      .university-badge {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, var(--global-theme-color, #007bff), #0056b3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        box-shadow: 0 4px 15px rgba(0,123,255,0.3);
      }
      
      .university-badge.ttu {
        background: linear-gradient(135deg, #dc3545, #c82333);
        box-shadow: 0 4px 15px rgba(220,53,69,0.3);
      }
      
      .university-badge i {
        color: white;
        font-size: 24px;
      }
      
      .university-info {
        flex: 1;
      }
      
      .university-name {
        font-size: 18px;
        font-weight: 700;
        color: var(--global-text-color, #000);
        margin-bottom: 5px;
      }
      
      .university-location {
        color: var(--global-text-color-light, #6c757d);
        font-size: 14px;
        margin: 0;
      }
      
      .courses-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .course-item {
        background: rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.05);
        padding: 20px;
        border-radius: 15px;
        border-left: 4px solid var(--global-theme-color, #007bff);
        transition: all 0.3s ease;
      }
      
      .course-item:hover {
        background: rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.1);
        transform: translateX(5px);
      }
      
      .course-header {
        display: flex;
        justify-content: between;
        align-items: flex-start;
        margin-bottom: 8px;
        flex-wrap: wrap;
        gap: 10px;
      }
      
      .course-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--global-text-color, #000);
        margin: 0;
        flex: 1;
        min-width: 200px;
      }
      
      .semester-badge {
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .semester-badge.spring {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
      }
      
      .semester-badge.fall {
        background: linear-gradient(135deg, #fd7e14, #e55b13);
        color: white;
      }
      
      .course-role {
        font-size: 14px;
        font-weight: 500;
        color: var(--global-theme-color, #007bff);
        margin-bottom: 10px;
      }
      
      .course-details {
        font-size: 13px;
        color: var(--global-text-color-light, #6c757d);
        display: flex;
        align-items: center;
      }
      
      .course-details i {
        color: var(--global-theme-color, #007bff);
      }
      
      /* Mobile responsiveness */
      @media (max-width: 768px) {
        .teaching-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }
        
        .teaching-card {
          padding: 20px;
        }
        
        .course-header {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .course-title {
          min-width: auto;
        }
      }
    </style>

    <!-- Education Section -->
    <h2 class="mb-4">
      <i class="fa-solid fa-graduation-cap me-3"></i>Education
    </h2>
    
    <div class="education-timeline mb-5">
      <div class="education-track">
        
        <!-- PhD Degree -->
        <div class="education-item current">
          <div class="education-year">2025</div>
          <div class="education-marker">
            <div class="marker-ring">
              <i class="fa-solid fa-crown"></i>
            </div>
          </div>
          <div class="education-content">
            <div class="degree-card phd">
              <div class="degree-header">
                <div class="degree-icon">
                  <i class="fa-solid fa-trophy"></i>
                </div>
                <div class="degree-info">
                  <h5 class="degree-title">Doctor of Philosophy</h5>
                  <h6 class="degree-field">Civil Engineering</h6>
                </div>
                <div class="degree-status">
                  <span class="status-badge current">Completed</span>
                </div>
              </div>
              <div class="degree-details">
                <p class="university">
                  <i class="fa-solid fa-university me-2"></i>University of Miami
                </p>
                <p class="location">
                  <i class="fa-solid fa-map-marker-alt me-2"></i>Coral Gables, FL
                </p>
                <p class="specialization">
                  <i class="fa-solid fa-microscope me-2"></i>Structural Engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Masters Degree -->
        <div class="education-item">
          <div class="education-year">2022</div>
          <div class="education-marker">
            <div class="marker-ring">
              <i class="fa-solid fa-medal"></i>
            </div>
          </div>
          <div class="education-content">
            <div class="degree-card masters">
              <div class="degree-header">
                <div class="degree-icon">
                  <i class="fa-solid fa-medal"></i>
                </div>
                <div class="degree-info">
                  <h5 class="degree-title">Master of Science</h5>
                  <h6 class="degree-field">Civil Engineering</h6>
                </div>
                <div class="degree-status">
                  <span class="status-badge completed">Completed</span>
                </div>
              </div>
              <div class="degree-details">
                <p class="university">
                  <i class="fa-solid fa-university me-2"></i>Texas Tech University
                </p>
                <p class="location">
                  <i class="fa-solid fa-map-marker-alt me-2"></i>Lubbock, TX
                </p>
                <p class="specialization">
                  <i class="fa-solid fa-tools me-2"></i>Structural Engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bachelor's Degree -->
        <div class="education-item">
          <div class="education-year">2017</div>
          <div class="education-marker">
            <div class="marker-ring">
              <i class="fa-solid fa-certificate"></i>
            </div>
          </div>
          <div class="education-content">
            <div class="degree-card bachelors">
              <div class="degree-header">
                <div class="degree-icon">
                  <i class="fa-solid fa-certificate"></i>
                </div>
                <div class="degree-info">
                  <h5 class="degree-title">Bachelor of Engineering</h5>
                  <h6 class="degree-field">Civil Engineering</h6>
                </div>
                <div class="degree-status">
                  <span class="status-badge foundation">Foundation</span>
                </div>
              </div>
              <div class="degree-details">
                <p class="university">
                  <i class="fa-solid fa-university me-2"></i>Tribhuvan University
                </p>
                <p class="location">
                  <i class="fa-solid fa-map-marker-alt me-2"></i>Kathmandu, Nepal
                </p>
                <p class="specialization">
                  <i class="fa-solid fa-hammer me-2"></i>Civil & Structural Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <style>
      .education-timeline {
        position: relative;
        padding: 40px 0;
      }
      
      .education-track {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 50px;
      }
      
      /* Vertical connecting line */
      .education-track::before {
        content: '';
        position: absolute;
        left: 50px;
        top: 80px;
        bottom: 80px;
        width: 4px;
        background: linear-gradient(180deg, 
          #ffd700 0%, 
          var(--global-theme-color, #007bff) 50%, 
          #28a745 100%);
        border-radius: 2px;
        z-index: 1;
      }
      
      .education-item {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 2;
      }
      
      .education-year {
        width: 80px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        color: var(--global-theme-color, #007bff);
        background: var(--global-bg-color, #fff);
        border: 2px solid var(--global-theme-color, #007bff);
        border-radius: 25px;
        padding: 8px 4px;
        box-shadow: 0 4px 12px rgba(0,123,255,0.2);
      }
      
      .education-marker {
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
      }
      
      .marker-ring {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--global-bg-color, #fff);
        border: 4px solid var(--global-theme-color, #007bff);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 6px 20px rgba(0,123,255,0.3);
        transition: all 0.3s ease;
      }
      
      .education-item.current .marker-ring {
        background: linear-gradient(135deg, #ffd700, #ffed4e);
        border-color: #ffd700;
        box-shadow: 0 8px 25px rgba(255,215,0,0.4);
      }
      
      .marker-ring i {
        font-size: 24px;
        color: var(--global-theme-color, #007bff);
      }
      
      .education-item.current .marker-ring i {
        color: #b8860b;
      }
      
      .education-content {
        flex: 1;
      }
      
      .degree-card {
        background: var(--global-bg-color, #fff);
        border: 1px solid var(--global-divider-color, #dee2e6);
        border-radius: 20px;
        padding: 25px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
      }
      
      .degree-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        border-radius: 20px 20px 0 0;
      }
      
      .degree-card.phd::before {
        background: linear-gradient(90deg, #ffd700, #ffed4e);
      }
      
      .degree-card.masters::before {
        background: linear-gradient(90deg, var(--global-theme-color, #007bff), #0056b3);
      }
      
      .degree-card.bachelors::before {
        background: linear-gradient(90deg, #28a745, #20c997);
      }
      
      .degree-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      }
      
      .degree-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }
      
      .degree-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        font-size: 20px;
      }
      
      .phd .degree-icon {
        background: linear-gradient(135deg, #ffd700, #ffed4e);
        color: #b8860b;
      }
      
      .masters .degree-icon {
        background: linear-gradient(135deg, var(--global-theme-color, #007bff), #0056b3);
        color: white;
      }
      
      .bachelors .degree-icon {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
      }
      
      .degree-info {
        flex: 1;
      }
      
      .degree-title {
        font-size: 18px;
        font-weight: 700;
        color: var(--global-text-color, #000);
        margin-bottom: 5px;
      }
      
      .degree-field {
        font-size: 14px;
        font-weight: 500;
        color: var(--global-text-color-light, #6c757d);
        margin: 0;
      }
      
      .degree-status {
        text-align: right;
      }
      
      .status-badge {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .status-badge.current {
        background: linear-gradient(135deg, #ffd700, #ffed4e);
        color: #b8860b;
      }
      
      .status-badge.completed {
        background: linear-gradient(135deg, var(--global-theme-color, #007bff), #0056b3);
        color: white;
      }
      
      .status-badge.foundation {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
      }
      
      .degree-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-top: 15px;
      }
      
      .degree-details p {
        margin: 0;
        font-size: 14px;
        color: var(--global-text-color-light, #6c757d);
        display: flex;
        align-items: center;
      }
      
      .degree-details i {
        color: var(--global-theme-color, #007bff);
      }
      
      /* Mobile responsiveness */
      @media (max-width: 768px) {
        .education-track::before {
          left: 40px;
        }
        
        .education-year {
          width: 60px;
          font-size: 14px;
          padding: 6px 2px;
        }
        
        .marker-ring {
          width: 50px;
          height: 50px;
        }
        
        .marker-ring i {
          font-size: 20px;
        }
        
        .degree-card {
          padding: 20px;
        }
        
        .degree-header {
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        
        .degree-status {
          text-align: left;
          margin-top: 10px;
        }
        
        .degree-details {
          grid-template-columns: 1fr;
          gap: 10px;
        }
      }
    </style>

    <!-- Professional Certifications Section -->
    <h2 class="mb-4">
      <i class="fa-solid fa-award me-3"></i>Professional Certifications
    </h2>
    
    <div class="certifications-showcase mb-5">
      
      <!-- PE License -->
      <div class="certification-card elite">
        <div class="cert-ribbon">
          <span>ELITE</span>
        </div>
        <div class="cert-content">
          <div class="cert-badge">
            <div class="cert-icon">
              <i class="fa-solid fa-medal"></i>
            </div>
            <div class="cert-glow"></div>
          </div>
          <div class="cert-info">
            <h5 class="cert-title">Professional Engineer</h5>
            <h6 class="cert-specialty">Civil: Structural</h6>
            <p class="cert-authority">NCEES Professional Engineering Exam</p>
            <div class="cert-details">
              <span class="cert-year">2025</span>
              <a href="https://account.ncees.org/rn/1731100-1208618-1d3ac24" 
                 target="_blank" 
                 class="cert-verify">
                <i class="fa-solid fa-external-link-alt me-1"></i>Verify
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- EI Certification -->
      <div class="certification-card professional">
        <div class="cert-ribbon">
          <span>PROFESSIONAL</span>
        </div>
        <div class="cert-content">
          <div class="cert-badge">
            <div class="cert-icon">
              <i class="fa-solid fa-stamp"></i>
            </div>
            <div class="cert-glow"></div>
          </div>
          <div class="cert-info">
            <h5 class="cert-title">Engineer Intern</h5>
            <h6 class="cert-specialty">Civil Engineering</h6>
            <p class="cert-authority">Florida Board of Professional Engineers</p>
            <div class="cert-details">
              <span class="cert-year">Licensed</span>
              <span class="cert-status active">Active</span>
            </div>
          </div>
        </div>
      </div>

      <!-- OpenFOAM Certification -->
      <div class="certification-card technical">
        <div class="cert-ribbon">
          <span>TECHNICAL</span>
        </div>
        <div class="cert-content">
          <div class="cert-badge">
            <div class="cert-icon">
              <i class="fa-solid fa-wind"></i>
            </div>
            <div class="cert-glow"></div>
          </div>
          <div class="cert-info">
            <h5 class="cert-title">Certified OpenFOAM CFD</h5>
            <h6 class="cert-specialty">Computational Fluid Dynamics</h6>
            <p class="cert-authority">Advanced CFD Modeler - England, UK</p>
            <div class="cert-details">
              <span class="cert-year">Certified</span>
              <span class="cert-status specialized">Specialized</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    <style>
      .certifications-showcase {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        margin-bottom: 50px;
      }
      
      .certification-card {
        background: var(--global-bg-color, #fff);
        border-radius: 25px;
        padding: 30px;
        position: relative;
        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        transition: all 0.4s ease;
        overflow: hidden;
        border: 2px solid transparent;
      }
      
      .certification-card::before {
        content: '';
        position: absolute;
        inset: 0;
        padding: 2px;
        background: linear-gradient(135deg, var(--cert-primary), var(--cert-secondary));
        border-radius: 25px;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: destination-out;
      }
      
      .certification-card.elite {
        --cert-primary: #ffd700;
        --cert-secondary: #ff6b35;
      }
      
      .certification-card.professional {
        --cert-primary: #007bff;
        --cert-secondary: #6610f2;
      }
      
      .certification-card.technical {
        --cert-primary: #20c997;
        --cert-secondary: #007bff;
      }
      
      .certification-card:hover {
        transform: translateY(-15px) scale(1.02);
        box-shadow: 0 25px 60px rgba(0,0,0,0.2);
      }
      
      .cert-ribbon {
        position: absolute;
        top: 20px;
        right: -10px;
        background: linear-gradient(135deg, var(--cert-primary), var(--cert-secondary));
        color: white;
        padding: 8px 20px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 1px;
        transform: rotate(45deg);
        transform-origin: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      }
      
      .cert-content {
        display: flex;
        align-items: flex-start;
        gap: 25px;
      }
      
      .cert-badge {
        position: relative;
        flex-shrink: 0;
      }
      
      .cert-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--cert-primary), var(--cert-secondary));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: white;
        box-shadow: 0 8px 25px rgba(var(--cert-primary-rgb, 255,215,0), 0.4);
        position: relative;
        z-index: 2;
      }
      
      .cert-glow {
        position: absolute;
        inset: -10px;
        background: radial-gradient(circle, var(--cert-primary) 0%, transparent 70%);
        border-radius: 50%;
        opacity: 0.3;
        animation: glow 2s ease-in-out infinite alternate;
      }
      
      @keyframes glow {
        from { opacity: 0.2; transform: scale(0.9); }
        to { opacity: 0.4; transform: scale(1.1); }
      }
      
      .cert-info {
        flex: 1;
        min-width: 0;
      }
      
      .cert-title {
        font-size: 20px;
        font-weight: 700;
        color: var(--global-text-color, #000);
        margin-bottom: 8px;
        line-height: 1.2;
      }
      
      .cert-specialty {
        font-size: 16px;
        font-weight: 600;
        background: linear-gradient(135deg, var(--cert-primary), var(--cert-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 12px;
      }
      
      .cert-authority {
        font-size: 14px;
        color: var(--global-text-color-light, #6c757d);
        margin-bottom: 15px;
        line-height: 1.4;
      }
      
      .cert-details {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
      }
      
      .cert-year {
        font-size: 14px;
        font-weight: 600;
        color: var(--global-text-color, #000);
        background: rgba(var(--cert-primary-rgb, 255,215,0), 0.1);
        padding: 6px 12px;
        border-radius: 20px;
        border: 1px solid var(--cert-primary);
      }
      
      .cert-verify {
        font-size: 12px;
        font-weight: 600;
        color: var(--cert-primary);
        text-decoration: none;
        padding: 6px 12px;
        border: 1px solid var(--cert-primary);
        border-radius: 20px;
        transition: all 0.3s ease;
      }
      
      .cert-verify:hover {
        background: var(--cert-primary);
        color: white;
        transform: translateY(-2px);
      }
      
      .cert-status {
        font-size: 12px;
        font-weight: 600;
        padding: 6px 12px;
        border-radius: 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .cert-status.active {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
      }
      
      .cert-status.specialized {
        background: linear-gradient(135deg, #17a2b8, #007bff);
        color: white;
      }
      
      /* Mobile responsiveness */
      @media (max-width: 768px) {
        .certifications-showcase {
          grid-template-columns: 1fr;
          gap: 20px;
        }
        
        .certification-card {
          padding: 25px 20px;
        }
        
        .cert-content {
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }
        
        .cert-icon {
          width: 70px;
          height: 70px;
          font-size: 28px;
        }
        
        .cert-details {
          justify-content: center;
        }
      }
    </style>

    <!-- Professional Involvements Section -->
    <h2 class="mb-4">
      <i class="fa-solid fa-handshake me-3"></i>Professional Involvements
    </h2>
    
    <div class="involvements-timeline mb-5">
      <div class="timeline-container">
        
        <!-- Current Involvements -->
        <div class="involvement-group current">
          <div class="group-header">
            <h4 class="group-title">Current Activities</h4>
            <div class="group-line"></div>
          </div>
          
          <div class="involvement-card active">
            <div class="involvement-marker">
              <i class="fa-solid fa-users"></i>
            </div>
            <div class="involvement-content">
              <div class="involvement-header">
                <h5 class="involvement-title">GSA Senate, University of Miami</h5>
                <span class="involvement-period current">2023 – 2024</span>
              </div>
              <p class="involvement-description">Graduate Student Association leadership role representing students in university governance and academic affairs.</p>
              <div class="involvement-tags">
                <span class="tag leadership">Leadership</span>
                <span class="tag governance">Governance</span>
              </div>
            </div>
          </div>

          <div class="involvement-card active">
            <div class="involvement-marker">
              <i class="fa-solid fa-hammer"></i>
            </div>
            <div class="involvement-content">
              <div class="involvement-header">
                <h5 class="involvement-title">American Society of Civil Engineers (ASCE)</h5>
                <span class="involvement-period ongoing">2018 – Present</span>
              </div>
              <p class="involvement-description">Active member focused on professional development, networking, and advancing the civil engineering profession.</p>
              <div class="involvement-tags">
                <span class="tag professional">Professional</span>
                <span class="tag networking">Networking</span>
                <span class="tag development">Development</span>
              </div>
            </div>
          </div>

          <div class="involvement-card active">
            <div class="involvement-marker">
              <i class="fa-solid fa-flag"></i>
            </div>
            <div class="involvement-content">
              <div class="involvement-header">
                <h5 class="involvement-title">Nepal Engineers' Association</h5>
                <span class="involvement-period ongoing">2018 – Present</span>
              </div>
              <p class="involvement-description">Professional engineering association membership maintaining connections with engineering community in Nepal.</p>
              <div class="involvement-tags">
                <span class="tag international">International</span>
                <span class="tag community">Community</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activities -->
        <div class="involvement-group recent">
          <div class="group-header">
            <h4 class="group-title">Recent Activities</h4>
            <div class="group-line"></div>
          </div>
          
          <div class="involvement-card">
            <div class="involvement-marker">
              <i class="fa-solid fa-water"></i>
            </div>
            <div class="involvement-content">
              <div class="involvement-header">
                <h5 class="involvement-title">World Ocean Day X-REEFS Volunteer</h5>
                <span class="involvement-period completed">2023</span>
              </div>
              <p class="involvement-description">Showcased research at Frost Science Museum, Miami, educating the public about coral reef restoration and coastal protection.</p>
              <div class="involvement-tags">
                <span class="tag research">Research</span>
                <span class="tag outreach">Outreach</span>
                <span class="tag marine">Marine Science</span>
              </div>
            </div>
          </div>

          <div class="involvement-card">
            <div class="involvement-marker">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="involvement-content">
              <div class="involvement-header">
                <h5 class="involvement-title">TTU ASCE Students Society</h5>
                <span class="involvement-period completed">2021 – 2022</span>
              </div>
              <p class="involvement-description">Active member during Masters studies at Texas Tech University, participating in professional development events.</p>
              <div class="involvement-tags">
                <span class="tag student">Student</span>
                <span class="tag academic">Academic</span>
              </div>
            </div>
          </div>

          <div class="involvement-card">
            <div class="involvement-marker">
              <i class="fa-solid fa-pen"></i>
            </div>
            <div class="involvement-content">
              <div class="involvement-header">
                <h5 class="involvement-title">National College of Engineering</h5>
                <span class="involvement-period completed">2015 – 2017</span>
              </div>
              <p class="involvement-description">Secretary, Civil Engineering Student's Society - Leadership role during undergraduate studies organizing events and managing student affairs.</p>
              <div class="involvement-tags">
                <span class="tag leadership">Leadership</span>
                <span class="tag student">Student</span>
                <span class="tag organization">Organization</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <style>
      .involvements-timeline {
        padding: 20px 0;
      }
      
      .timeline-container {
        display: flex;
        flex-direction: column;
        gap: 50px;
      }
      
      .involvement-group {
        position: relative;
      }
      
      .group-header {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        gap: 20px;
      }
      
      .group-title {
        font-size: 22px;
        font-weight: 700;
        color: var(--global-text-color, #000);
        margin: 0;
        white-space: nowrap;
      }
      
      .group-line {
        flex: 1;
        height: 3px;
        background: linear-gradient(90deg, 
          var(--global-theme-color, #007bff), 
          rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.3));
        border-radius: 2px;
      }
      
      .involvement-group.current .group-title {
        color: var(--global-theme-color, #007bff);
      }
      
      .involvement-group.recent .group-title {
        color: var(--global-text-color-light, #6c757d);
      }
      
      .involvement-card {
        display: flex;
        align-items: flex-start;
        background: var(--global-bg-color, #fff);
        border: 1px solid var(--global-divider-color, #dee2e6);
        border-radius: 20px;
        padding: 25px;
        margin-bottom: 20px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .involvement-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: var(--involvement-color, var(--global-theme-color, #007bff));
        border-radius: 0 2px 2px 0;
      }
      
      .involvement-card.active {
        --involvement-color: var(--global-theme-color, #007bff);
        border-color: rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.3);
      }
      
      .involvement-group.recent .involvement-card {
        --involvement-color: var(--global-text-color-light, #6c757d);
      }
      
      .involvement-card:hover {
        transform: translateX(10px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.12);
      }
      
      .involvement-marker {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, 
          var(--involvement-color, var(--global-theme-color, #007bff)), 
          rgba(var(--involvement-color, var(--global-theme-color, #007bff)), 0.8));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        flex-shrink: 0;
        box-shadow: 0 4px 15px rgba(var(--involvement-color, var(--global-theme-color, #007bff)), 0.3);
      }
      
      .involvement-marker i {
        color: white;
        font-size: 20px;
      }
      
      .involvement-content {
        flex: 1;
        min-width: 0;
      }
      
      .involvement-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 12px;
        gap: 15px;
        flex-wrap: wrap;
      }
      
      .involvement-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--global-text-color, #000);
        margin: 0;
        flex: 1;
        min-width: 200px;
      }
      
      .involvement-period {
        font-size: 12px;
        font-weight: 600;
        padding: 6px 12px;
        border-radius: 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        white-space: nowrap;
      }
      
      .involvement-period.current {
        background: linear-gradient(135deg, var(--global-theme-color, #007bff), #0056b3);
        color: white;
      }
      
      .involvement-period.ongoing {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
      }
      
      .involvement-period.completed {
        background: var(--global-text-color-light, #6c757d);
        color: white;
      }
      
      .involvement-description {
        font-size: 14px;
        color: var(--global-text-color-light, #6c757d);
        line-height: 1.5;
        margin-bottom: 15px;
      }
      
      .involvement-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      
      .tag {
        font-size: 11px;
        font-weight: 500;
        padding: 4px 10px;
        border-radius: 15px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: 1px solid;
      }
      
      .tag.leadership {
        background: rgba(255, 193, 7, 0.1);
        color: #856404;
        border-color: #ffc107;
      }
      
      .tag.professional {
        background: rgba(0, 123, 255, 0.1);
        color: #004085;
        border-color: #007bff;
      }
      
      .tag.research {
        background: rgba(111, 66, 193, 0.1);
        color: #4a148c;
        border-color: #6f42c1;
      }
      
      .tag.community {
        background: rgba(40, 167, 69, 0.1);
        color: #155724;
        border-color: #28a745;
      }
      
      .tag.student {
        background: rgba(253, 126, 20, 0.1);
        color: #8b2635;
        border-color: #fd7e14;
      }
      
      .tag.governance, .tag.networking, .tag.development, 
      .tag.international, .tag.outreach, .tag.marine, 
      .tag.academic, .tag.organization {
        background: rgba(108, 117, 125, 0.1);
        color: #495057;
        border-color: #6c757d;
      }
      
      /* Mobile responsiveness */
      @media (max-width: 768px) {
        .involvement-card {
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px;
        }
        
        .involvement-marker {
          margin-right: 0;
          margin-bottom: 15px;
        }
        
        .involvement-header {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .involvement-title {
          min-width: auto;
          text-align: center;
        }
        
        .involvement-tags {
          justify-content: center;
        }
        
        .group-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
        
        .group-line {
          width: 100%;
          height: 2px;
        }
      }
    </style>

    <!-- Conference Presentations Section -->
    <h2 class="mb-4">
      <i class="fa-solid fa-presentation-screen me-3"></i>Conference Presentations
    </h2>
    
    <div class="publications-showcase mb-5">
      
      <!-- Featured Publications -->
      <div class="featured-publications mb-4">
        <h4 class="featured-title">
          <i class="fa-solid fa-star me-2"></i>Featured Presentations
        </h4>
        
        <div class="publication-card featured">
          <div class="pub-header">
            <div class="pub-icon">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div class="pub-meta">
              <span class="pub-year">2024</span>
              <span class="pub-type conference">Conference</span>
            </div>
          </div>
          <div class="pub-content">
            <h6 class="pub-title">A sustainable and efficient structural solution for hybrid coral reefs</h6>
            <p class="pub-authors">
              <strong>S. Lamsal</strong>, G. Aguilar, P. Tan, G. Clark, B. Haus, and L. Rhode-Barbarigos
            </p>
            <p class="pub-venue">
              <i class="fa-solid fa-map-marker-alt me-2"></i>ASCE Earth & Space 2024 Conference
            </p>
          </div>
        </div>

        <div class="publication-card featured">
          <div class="pub-header">
            <div class="pub-icon">
              <i class="fa-solid fa-water"></i>
            </div>
            <div class="pub-meta">
              <span class="pub-year">2024</span>
              <span class="pub-type ocean">Ocean Sciences</span>
            </div>
          </div>
          <div class="pub-content">
            <h6 class="pub-title">Quantifying wave energy dissipation in perforated breakwater structures</h6>
            <p class="pub-authors">
              <strong>S. Lamsal</strong>, G. Aguilar, P. Tan, K. Simi, G. Clark, B. Haus, and L. Rhode-Barbarigos
            </p>
            <p class="pub-venue">
              <i class="fa-solid fa-water me-2"></i>2024 Ocean Sciences Meeting
            </p>
          </div>
        </div>
      </div>

      <!-- All Publications -->
      <div class="all-publications">
        <h4 class="publications-title">
          <i class="fa-solid fa-list me-2"></i>All Presentations (9 Total)
        </h4>
        
        <div class="publications-grid">
          
          <div class="publication-item">
            <div class="pub-indicator collaborative"></div>
            <div class="pub-details">
              <p class="pub-citation">
                G. Aguilar, <strong>S. Lamsal</strong>, P. Tan, A. Uriarte, B. Haus, and L. Rhode-Barbarigos, 
                "Investigating hurricane-induced wind and wave loads through scaled physical testing", 
                <em>ASCE Earth & Space 2024 Conference</em>, 2024.
              </p>
              <div class="pub-badges">
                <span class="badge collaborative">Collaborative</span>
                <span class="badge year">2024</span>
              </div>
            </div>
          </div>

          <div class="publication-item">
            <div class="pub-indicator collaborative"></div>
            <div class="pub-details">
              <p class="pub-citation">
                B. K. Norris, B. Reguero, C. G. Lasserre, <strong>S. Lamsal</strong> et al., 
                "Reefense: Design considerations in developing low-crested structures with reef restoration for coastal defense", 
                <em>2024 Ocean Sciences Meeting</em>, 2024.
              </p>
              <div class="pub-badges">
                <span class="badge collaborative">Collaborative</span>
                <span class="badge year">2024</span>
              </div>
            </div>
          </div>

          <div class="publication-item">
            <div class="pub-indicator collaborative"></div>
            <div class="pub-details">
              <p class="pub-citation">
                G. Clark, <strong>S. Lamsal</strong>, B. Haus, and L. Rhode-Barbarigos, 
                "Wave energy dissipation from adult red mangroves based on mangrove forest density", 
                <em>AGU Fall Meeting</em>, Poster OS53B-0787, San Francisco, CA, December 2024.
              </p>
              <div class="pub-badges">
                <span class="badge poster">Poster</span>
                <span class="badge year">2024</span>
              </div>
            </div>
          </div>

          <div class="publication-item">
            <div class="pub-indicator lead"></div>
            <div class="pub-details">
              <p class="pub-citation">
                <strong>S. Lamsal</strong>, B. Haus, L. Rhode-Barbarigos, 
                "Study of wave energy attenuation in perforated submerged breakwater structures by disrupting wave dynamics", 
                <em>University of Miami Research Symposium</em>, 2025.
              </p>
              <div class="pub-badges">
                <span class="badge lead">Lead Author</span>
                <span class="badge year">2025</span>
              </div>
            </div>
          </div>

          <div class="publication-item">
            <div class="pub-indicator collaborative"></div>
            <div class="pub-details">
              <p class="pub-citation">
                G. Aguilar, <strong>S. Lamsal</strong>, B. Haus, L. Rhode-Barbarigos, 
                "Experimental quantification of hurricane-induced loads on a residential building model", 
                <em>University of Miami Research Symposium</em>, 2025.
              </p>
              <div class="pub-badges">
                <span class="badge collaborative">Collaborative</span>
                <span class="badge year">2025</span>
              </div>
            </div>
          </div>

          <div class="publication-item">
            <div class="pub-indicator collaborative"></div>
            <div class="pub-details">
              <p class="pub-citation">
                C. Deveaux, <strong>S. Lamsal</strong>, R. Araujo, B. Haus, L. Rhode-Barbarigos, 
                "Harnessing the power of mangroves: Evaluating wave attenuation and community-driven restoration", 
                <em>University of Miami Research Symposium</em>, 2025.
              </p>
              <div class="pub-badges">
                <span class="badge collaborative">Collaborative</span>
                <span class="badge year">2025</span>
              </div>
            </div>
          </div>

          <div class="publication-item">
            <div class="pub-indicator lead"></div>
            <div class="pub-details">
              <p class="pub-citation">
                <strong>S. Lamsal</strong>, et al., 
                "Evaluating the Energy Dissipation Performance of Submerged Breakwater Structure with Various Geometric Configurations", 
                <em>CSi3 Annual Research Symposium</em>, 2025.
              </p>
              <div class="pub-badges">
                <span class="badge lead">Lead Author</span>
                <span class="badge year">2025</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <style>
      .publications-showcase {
        padding: 20px 0;
      }
      
      .featured-publications {
        margin-bottom: 50px;
      }
      
      .featured-title, .publications-title {
        font-size: 20px;
        font-weight: 600;
        color: var(--global-text-color, #000);
        margin-bottom: 25px;
        display: flex;
        align-items: center;
      }
      
      .featured-title i, .publications-title i {
        color: var(--global-theme-color, #007bff);
      }
      
      .publication-card {
        background: var(--global-bg-color, #fff);
        border: 1px solid var(--global-divider-color, #dee2e6);
        border-radius: 20px;
        padding: 25px;
        margin-bottom: 20px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .publication-card.featured {
        border: 2px solid var(--global-theme-color, #007bff);
        background: linear-gradient(135deg, 
          rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.03), 
          rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.01));
      }
      
      .publication-card.featured::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--global-theme-color, #007bff), #28a745);
        border-radius: 20px 20px 0 0;
      }
      
      .publication-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 45px rgba(0,0,0,0.15);
      }
      
      .pub-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
      
      .pub-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--global-theme-color, #007bff), #0056b3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
      }
      
      .pub-meta {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .pub-year {
        font-size: 14px;
        font-weight: 600;
        color: var(--global-theme-color, #007bff);
        background: rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.1);
        padding: 6px 12px;
        border-radius: 20px;
      }
      
      .pub-type {
        font-size: 12px;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 15px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .pub-type.conference {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
      }
      
      .pub-type.ocean {
        background: linear-gradient(135deg, #17a2b8, #007bff);
        color: white;
      }
      
      .pub-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--global-text-color, #000);
        margin-bottom: 12px;
        line-height: 1.4;
      }
      
      .pub-authors {
        font-size: 14px;
        color: var(--global-text-color-light, #6c757d);
        margin-bottom: 10px;
        line-height: 1.4;
      }
      
      .pub-authors strong {
        color: var(--global-theme-color, #007bff);
        font-weight: 600;
      }
      
      .pub-venue {
        font-size: 14px;
        font-style: italic;
        color: var(--global-text-color, #000);
        display: flex;
        align-items: center;
      }
      
      .pub-venue i {
        color: var(--global-theme-color, #007bff);
      }
      
      .publications-grid {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .publication-item {
        display: flex;
        align-items: flex-start;
        background: var(--global-bg-color, #fff);
        border: 1px solid var(--global-divider-color, #dee2e6);
        border-radius: 15px;
        padding: 20px;
        transition: all 0.3s ease;
        position: relative;
      }
      
      .publication-item:hover {
        transform: translateX(10px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
      }
      
      .pub-indicator {
        width: 6px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 15px 0 0 15px;
      }
      
      .pub-indicator.lead {
        background: linear-gradient(180deg, #ffd700, #ffed4e);
      }
      
      .pub-indicator.collaborative {
        background: linear-gradient(180deg, var(--global-theme-color, #007bff), #0056b3);
      }
      
      .pub-details {
        flex: 1;
        padding-left: 15px;
      }
      
      .pub-citation {
        font-size: 14px;
        color: var(--global-text-color, #000);
        line-height: 1.5;
        margin-bottom: 12px;
      }
      
      .pub-citation strong {
        color: var(--global-theme-color, #007bff);
        font-weight: 600;
      }
      
      .pub-citation em {
        color: var(--global-text-color-light, #6c757d);
        font-style: italic;
      }
      
      .pub-badges {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      
      .badge {
        font-size: 10px;
        font-weight: 600;
        padding: 4px 8px;
        border-radius: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .badge.lead {
        background: linear-gradient(135deg, #ffd700, #ffed4e);
        color: #b8860b;
      }
      
      .badge.collaborative {
        background: linear-gradient(135deg, var(--global-theme-color, #007bff), #0056b3);
        color: white;
      }
      
      .badge.poster {
        background: linear-gradient(135deg, #6f42c1, #563d7c);
        color: white;
      }
      
      .badge.year {
        background: var(--global-text-color-light, #6c757d);
        color: white;
      }
      
      /* Mobile responsiveness */
      @media (max-width: 768px) {
        .pub-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }
        
        .pub-meta {
          align-self: stretch;
          justify-content: space-between;
        }
        
        .publication-item {
          padding: 15px;
        }
        
        .pub-details {
          padding-left: 10px;
        }
        
        .pub-citation {
          font-size: 13px;
        }
      }
    </style>
  </div>
</div>
