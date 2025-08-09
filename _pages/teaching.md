---
layout: page
permalink: /tutorial/
title: tutorial
description: Video tutorials and educational content on civil and structural engineering topics.
nav: true
nav_order: 5
---

<style>
/* Advanced Tutorial Page Styling */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --tutorial-primary: #667eea;
  --tutorial-secondary: #764ba2;
  --tutorial-accent: #f093fb;
  --tutorial-success: #4facfe;
  --tutorial-warning: #ffecd2;
  --tutorial-error: #fcb69f;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-light: 0 8px 32px rgba(31, 38, 135, 0.37);
  --shadow-heavy: 0 20px 60px rgba(31, 38, 135, 0.5);
}

.tutorial-hero {
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.1) 0%, 
    rgba(118, 75, 162, 0.1) 25%,
    rgba(240, 147, 251, 0.1) 50%,
    rgba(79, 172, 254, 0.1) 75%,
    rgba(255, 236, 210, 0.1) 100%);
  border-radius: 30px;
  padding: 80px 50px;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-light);
}

.tutorial-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    var(--tutorial-primary) 0%, 
    var(--tutorial-secondary) 25%,
    var(--tutorial-accent) 50%,
    var(--tutorial-success) 75%,
    var(--tutorial-warning) 100%);
  border-radius: 30px 30px 0 0;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.tutorial-hero::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  animation: rotate 20s linear infinite;
  z-index: -1;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.tutorial-hero h1 {
  font-family: 'Inter', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, 
    var(--tutorial-primary), 
    var(--tutorial-secondary),
    var(--tutorial-accent),
    var(--tutorial-success));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 25px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  animation: textGlow 4s ease-in-out infinite alternate;
  position: relative;
  z-index: 2;
}

@keyframes textGlow {
  0% { filter: brightness(1) saturate(1); }
  100% { filter: brightness(1.2) saturate(1.3); }
}

.tutorial-hero p {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  color: var(--global-text-color-light, #6c757d);
  font-weight: 400;
  margin-bottom: 40px;
  opacity: 0.9;
  position: relative;
  z-index: 2;
}

.tutorial-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.stat-item {
  text-align: center;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 25px 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 120px;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.stat-item:hover::before {
  left: 100%;
}

.stat-item:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: var(--shadow-heavy);
  border-color: var(--tutorial-primary);
}

.stat-number {
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--tutorial-primary), var(--tutorial-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 8px;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: var(--global-text-color-light, #6c757d);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.tutorial-series {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 30px;
  padding: 50px;
  margin-bottom: 50px;
  box-shadow: var(--shadow-light);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.tutorial-series::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 30px 30px 0 0;
  transition: all 0.3s ease;
}

.tutorial-series.steel::before {
  background: linear-gradient(90deg, var(--tutorial-error), var(--tutorial-warning));
}

.tutorial-series.civil3d::before {
  background: linear-gradient(90deg, var(--tutorial-success), var(--tutorial-primary));
}

.tutorial-series::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    var(--tutorial-primary), 
    var(--tutorial-accent), 
    var(--tutorial-success), 
    var(--tutorial-warning));
  z-index: -1;
  border-radius: 32px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tutorial-series:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: var(--shadow-heavy);
}

.tutorial-series:hover::after {
  opacity: 0.1;
}

.series-header {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 25px;
}

.series-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  box-shadow: var(--shadow-light);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.series-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: rotate 4s linear infinite;
}

.series-icon.steel {
  background: linear-gradient(135deg, var(--tutorial-error), var(--tutorial-warning));
}

.series-icon.civil3d {
  background: linear-gradient(135deg, var(--tutorial-success), var(--tutorial-primary));
}

.series-icon:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: var(--shadow-heavy);
}

.series-info {
  flex: 1;
  min-width: 300px;
}

.series-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--global-text-color, #000);
  margin-bottom: 15px;
  line-height: 1.2;
}

.series-description {
  font-size: 1.1rem;
  color: var(--global-text-color-light, #6c757d);
  line-height: 1.6;
  margin-bottom: 20px;
}

.series-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.series-badge {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.series-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.series-badge:hover::before {
  left: 100%;
}

.series-badge:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.series-badge.year {
  background: linear-gradient(135deg, var(--tutorial-primary), var(--tutorial-secondary));
  color: white;
  border-color: rgba(255,255,255,0.2);
}

.series-badge.year:hover {
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.series-badge.language {
  background: linear-gradient(135deg, var(--tutorial-success), var(--tutorial-primary));
  color: white;
  border-color: rgba(255,255,255,0.2);
}

.series-badge.language:hover {
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
}

.series-badge.tool {
  background: linear-gradient(135deg, #6c757d, #495057);
  color: white;
  border-color: rgba(255,255,255,0.2);
}

.series-badge.tool:hover {
  box-shadow: 0 8px 25px rgba(108, 117, 125, 0.4);
}

.series-badge.standard {
  background: linear-gradient(135deg, var(--tutorial-accent), var(--tutorial-secondary));
  color: white;
  border-color: rgba(255,255,255,0.2);
}

.series-badge.standard:hover {
  box-shadow: 0 8px 25px rgba(240, 147, 251, 0.4);
}

.series-details {
  background: rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.05);
  border: 1px solid rgba(var(--global-theme-color-rgb, 0, 123, 255), 0.1);
  border-radius: 20px;
  padding: 25px;
  margin-top: 20px;
}

.series-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: start;
}

.content-overview {
  background: var(--global-bg-color, #fff);
  border: 1px solid var(--global-divider-color, #dee2e6);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.content-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--global-text-color, #000);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.content-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.content-list li {
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--global-text-color-light, #6c757d);
}

.content-list i {
  color: #28a745;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.video-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-light);
  position: relative;
  transform-style: preserve-3d;
}

.video-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    var(--tutorial-primary), 
    var(--tutorial-accent), 
    var(--tutorial-success), 
    var(--tutorial-warning));
  z-index: -1;
  border-radius: 27px;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.video-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.video-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: var(--shadow-heavy);
}

.video-card:hover::before {
  opacity: 0.15;
}

.video-card:hover::after {
  left: 100%;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 25px 25px 0 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 25px 25px 0 0;
  transition: all 0.3s ease;
}

.video-wrapper:hover iframe {
  transform: scale(1.02);
}

.video-info {
  padding: 25px;
  background: inherit;
  backdrop-filter: inherit;
}

.video-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--tutorial-primary), var(--tutorial-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin: 0;
  line-height: 1.4;
  transition: all 0.3s ease;
}

.video-number {
  display: none; /* Hide video number overlays completely */
}

/* Play overlay removed - YouTube videos are now directly interactive */

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid var(--glass-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: var(--tutorial-primary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.play-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.3), transparent);
  animation: rotate 3s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.play-button:hover {
  background: white;
  transform: scale(1.2) rotate(360deg);
  box-shadow: var(--shadow-heavy);
  color: var(--tutorial-accent);
}

.play-button:hover::before {
  opacity: 1;
}

.section-divider {
  margin: 60px 0;
  text-align: center;
  position: relative;
}

.section-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--global-theme-color, #007bff) 20%, 
    #28a745 50%, 
    #ffc107 80%, 
    transparent 100%);
}

.section-divider i {
  background: var(--global-bg-color, #fff);
  color: var(--global-theme-color, #007bff);
  font-size: 24px;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .tutorial-hero {
    padding: 40px 20px;
  }
  
  .tutorial-hero h1 {
    font-size: 2.5rem;
  }
  
  .tutorial-stats {
    gap: 20px;
  }
  
  .tutorial-series {
    padding: 25px 20px;
  }
  
  .series-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .series-header {
    flex-direction: column;
    text-align: center;
  }
  
  .series-info {
    min-width: auto;
  }
  
  .series-title {
    font-size: 1.5rem;
  }
  
  .series-badges {
    justify-content: center;
  }
}

/* Premium Floating Particles */
.floating-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: var(--tutorial-primary);
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s infinite linear;
}

.particle:nth-child(1) {
  width: 6px;
  height: 6px;
  left: 10%;
  animation-delay: 0s;
  background: var(--tutorial-primary);
}

.particle:nth-child(2) {
  width: 4px;
  height: 4px;
  left: 20%;
  animation-delay: 2s;
  background: var(--tutorial-accent);
}

.particle:nth-child(3) {
  width: 8px;
  height: 8px;
  left: 30%;
  animation-delay: 4s;
  background: var(--tutorial-success);
}

.particle:nth-child(4) {
  width: 5px;
  height: 5px;
  left: 40%;
  animation-delay: 6s;
  background: var(--tutorial-warning);
}

.particle:nth-child(5) {
  width: 7px;
  height: 7px;
  left: 50%;
  animation-delay: 8s;
  background: var(--tutorial-primary);
}

.particle:nth-child(6) {
  width: 4px;
  height: 4px;
  left: 60%;
  animation-delay: 10s;
  background: var(--tutorial-accent);
}

.particle:nth-child(7) {
  width: 6px;
  height: 6px;
  left: 70%;
  animation-delay: 12s;
  background: var(--tutorial-success);
}

.particle:nth-child(8) {
  width: 5px;
  height: 5px;
  left: 80%;
  animation-delay: 14s;
  background: var(--tutorial-warning);
}

.particle:nth-child(9) {
  width: 8px;
  height: 8px;
  left: 90%;
  animation-delay: 16s;
  background: var(--tutorial-primary);
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.1;
  }
  90% {
    opacity: 0.1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Advanced Scroll Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Stagger Animation Classes */
.animate-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
.delay-5 { animation-delay: 0.5s; }

/* Premium Interactive Elements */
.series-content::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, var(--tutorial-accent) 0%, transparent 70%);
  opacity: 0;
  transition: all 0.5s ease;
  pointer-events: none;
}

.tutorial-series:hover .series-content::before {
  opacity: 0.1;
  transform: scale(2);
}

/* Enhanced Video Card Effects */
.video-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.video-card:hover::after {
  left: 100%;
}

/* Advanced Series Details */
.series-details {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  border-radius: 25px;
  padding: 30px;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.series-details::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    var(--tutorial-primary) 0%, 
    var(--tutorial-accent) 50%, 
    var(--tutorial-success) 100%);
  border-radius: 25px 25px 0 0;
}

.series-details:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-heavy);
}

/* Loading Animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.loading-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Add collapsible styling */
.collapsible summary { cursor:pointer; outline:none; display:flex; flex-direction:column; }
details.collapsible, details.tutorial-series { position:relative; }
details.collapsible::before, details.tutorial-series::before { content:''; }
details[open].collapsible summary .toggle-indicator, details[open].tutorial-series summary .toggle-indicator { transform:rotate(90deg); }
.toggle-indicator { transition:transform .3s ease; display:inline-block; margin-right:8px; }
details.tutorial-series summary { list-style:none; }
details.tutorial-series summary::-webkit-details-marker, details.collapsible summary::-webkit-details-marker { display:none; }
</style>

<div class="post">
  
  <!-- Floating Particles Background -->
  <div class="floating-particles">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>
  
  <!-- Tutorial Hero Section -->
  <details class="tutorial-hero collapsible">
    <summary>
      <div style="display:flex; align-items:center; gap:12px;">
        <span class="toggle-indicator">▶</span>
        <div>
          <h1 style="margin:0;">Engineering Tutorials</h1>
          <p style="margin:4px 0 0;">Comprehensive video tutorials covering civil and structural engineering topics</p>
        </div>
      </div>
    </summary>
    <!-- Collapsible Content -->
    <div class="tutorial-stats" style="margin-top:20px;">
      <div class="stat-item">
        <span class="stat-number">2</span>
        <span class="stat-label">Series</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">13</span>
        <span class="stat-label">Videos</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">2</span>
        <span class="stat-label">Languages</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">5+</span>
        <span class="stat-label">Hours Content</span>
      </div>
    </div>
  </details>

  <!-- Steel Warehouse Design Tutorial Series (collapsible) -->
  <details class="tutorial-series steel">
    <summary class="series-header" style="list-style:none; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:14px; width:100%;">
        <span class="toggle-indicator">▶</span>
        <div class="series-icon steel">
          <i class="fa-solid fa-warehouse"></i>
        </div>
        <div class="series-info">
          <h2 class="series-title" style="margin:0;">Steel Warehouse Design</h2>
          <p class="series-description" style="margin:4px 0 0;">
            Comprehensive tutorial series covering steel warehouse design with focus on wind and earthquake load analysis
          </p>
          <div class="series-badges">
            <span class="series-badge year">
              <i class="fa-solid fa-calendar"></i>2019
            </span>
            <span class="series-badge language">
              <i class="fa-solid fa-language"></i>Nepali
            </span>
            <span class="series-badge tool">
              <i class="fa-solid fa-tools"></i>IS-875 Wind
            </span>
            <span class="series-badge standard">
              <i class="fa-solid fa-home"></i>IS-1893 Earthquake
            </span>
          </div>
        </div>
      </div>
    </summary>

    <div class="series-content">
      <div class="series-details">
        <p>
          Comprehensive steel warehouse design tutorial in Nepali (2019). Covers wind (IS-875) and earthquake (IS-1893/NBC2020) load analysis.
        </p>
      </div>
      
      <div class="content-overview">
        <h6 class="content-title">
          <i class="fa-solid fa-list-check"></i>Tutorial Content
        </h6>
        <ul class="content-list">
          <li><i class="fa-solid fa-check"></i>Wind Load Analysis</li>
          <li><i class="fa-solid fa-check"></i>Earthquake Load Design</li>
          <li><i class="fa-solid fa-check"></i>Steel Structure Design</li>
          <li><i class="fa-solid fa-check"></i>Zone Calculations</li>
          <li><i class="fa-solid fa-check"></i>Load Combinations</li>
          <li><i class="fa-solid fa-check"></i>Final Design Verification</li>
        </ul>
      </div>
    </div>

    <!-- Steel Warehouse Videos Grid -->
    <div class="videos-grid">
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 1</div>
          {% include video.liquid path="https://www.youtube.com/embed/f429LO8c3d4" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Introduction & Setup</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 2</div>
          {% include video.liquid path="https://www.youtube.com/embed/-zqz75g-xwQ" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Wind Load Analysis</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 3</div>
          {% include video.liquid path="https://www.youtube.com/embed/ky6LdLth6w8" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Earthquake Analysis</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 4</div>
          {% include video.liquid path="https://www.youtube.com/embed/n6EWvbh7fhQ" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Structural Design</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 5</div>
          {% include video.liquid path="https://www.youtube.com/embed/I21QwXekNP4" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Load Combinations</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 6</div>
          {% include video.liquid path="https://www.youtube.com/embed/gxW-FGULQPU" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Final Design</h6>
        </div>
      </div>
    </div>
    <!-- End steel series content and videos -->
  </details>

  <!-- Section Divider -->
  <div class="section-divider">
    <i class="fa-solid fa-graduation-cap"></i>
  </div>

  <!-- Civil 3D Tutorial Series (collapsible) -->
  <details class="tutorial-series civil3d">
    <summary class="series-header" style="list-style:none; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:14px; width:100%;">
        <span class="toggle-indicator">▶</span>
        <div class="series-icon civil3d">
          <i class="fa-solid fa-drafting-compass"></i>
        </div>
        <div class="series-info">
          <h2 class="series-title" style="margin:0;">Civil 3D Complete Workflow</h2>
          <p class="series-description" style="margin:4px 0 0;">
            Comprehensive tutorial series covering the complete Civil 3D workflow from data import to infrastructure design
          </p>
          <div class="series-badges">
            <span class="series-badge year">
              <i class="fa-solid fa-calendar"></i>2020
            </span>
            <span class="series-badge language">
              <i class="fa-solid fa-language"></i>English
            </span>
            <span class="series-badge tool">
              <i class="fa-solid fa-computer"></i>AutoCAD Civil 3D
            </span>
            <span class="series-badge standard">
              <i class="fa-solid fa-route"></i>Infrastructure
            </span>
          </div>
        </div>
      </div>
    </summary>

    <div class="series-content">
      <div class="series-details">
        <p>
          Complete Civil 3D workflow tutorial in English (2020). Covers data import, surface modeling, hydrological analysis, and transportation design.
        </p>
      </div>
      
      <div class="content-overview">
        <h6 class="content-title">
          <i class="fa-solid fa-list-check"></i>Tutorial Content
        </h6>
        <ul class="content-list">
          <li><i class="fa-solid fa-check"></i>Point Data Import</li>
          <li><i class="fa-solid fa-check"></i>TIN Surface Creation</li>
          <li><i class="fa-solid fa-check"></i>Surface Analysis</li>
          <li><i class="fa-solid fa-check"></i>Watershed Analysis</li>
          <li><i class="fa-solid fa-check"></i>Road Alignment</li>
          <li><i class="fa-solid fa-check"></i>Profile Views</li>
          <li><i class="fa-solid fa-check"></i>Advanced Features</li>
        </ul>
      </div>
    </div>

    <!-- Civil 3D Videos Grid -->
    <div class="videos-grid">
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 1</div>
          {% include video.liquid path="https://www.youtube.com/embed/ByGw-JD2vtA" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Point Data Import</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 2</div>
          {% include video.liquid path="https://www.youtube.com/embed/z1TaV6sbRxc" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">TIN Surface Creation</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 3</div>
          {% include video.liquid path="https://www.youtube.com/embed/lX5DQtGMi9c" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Surface Analysis</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 4</div>
          {% include video.liquid path="https://www.youtube.com/embed/6LQh1tmcK-o" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Watershed Analysis</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 5</div>
          {% include video.liquid path="https://www.youtube.com/embed/qa2RdMFhQMY" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Road Alignment</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 6</div>
          {% include video.liquid path="https://www.youtube.com/embed/bAI0VkYezsg" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Profile Views</h6>
        </div>
      </div>
      
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-number">Part 7</div>
          {% include video.liquid path="https://www.youtube.com/embed/aJ1u7BhKLKU" class="img-fluid rounded" %}
        </div>
        <div class="video-info">
          <h6 class="video-title">Advanced Features</h6>
        </div>
      </div>
    </div>
    <!-- End civil3d series content and videos -->
  </details>
</div>