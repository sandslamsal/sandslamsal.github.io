---
layout: page
permalink: /bio/
title: bio
description: Teaching experience, professional background, and educational contributions.
nav: false
nav_order: 2
published: false
---

<!-- Inline palette overrides removed; styles now in _sass/_bio.scss -->

<!-- changed wrapper to include bio-page class -->
<div class="post bio-page">
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

... (file truncated) ...
