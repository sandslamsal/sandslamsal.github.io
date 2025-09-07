---
layout: page
permalink: /apps/
title: apps
description: Engineering calculation web apps and tools.
nav: true
nav_order: 6
---

<style>
/* Modern Apps Landing Page Styling */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --apps-primary: #667eea;
  --apps-secondary: #764ba2;
  --apps-accent: #f093fb;
  --apps-success: #4facfe;
  --apps-warning: #ffecd2;
  --apps-error: #fcb69f;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-light: 0 8px 32px rgba(31, 38, 135, 0.37);
  --shadow-heavy: 0 20px 60px rgba(31, 38, 135, 0.5);
}

.apps-hero {
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.1) 0%, 
    rgba(118, 75, 162, 0.1) 25%,
    rgba(240, 147, 251, 0.1) 50%,
    rgba(79, 172, 254, 0.1) 75%,
    rgba(255, 236, 210, 0.1) 100%);
  border-radius: 30px;
  padding: 60px 40px;
  margin-bottom: 50px;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-light);
}

.apps-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    var(--apps-primary) 0%, 
    var(--apps-secondary) 25%,
    var(--apps-accent) 50%,
    var(--apps-success) 75%,
    var(--apps-warning) 100%);
  border-radius: 30px 30px 0 0;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.apps-hero h1 {
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, 
    var(--apps-primary), 
    var(--apps-secondary),
    var(--apps-accent),
    var(--apps-success));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.apps-hero p {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: var(--global-text-color-light, #6c757d);
  font-weight: 400;
  margin-bottom: 30px;
  opacity: 0.9;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.app-card-link {
  text-decoration: none;
  color: inherit;
}

.app-card-link:hover {
  text-decoration: none;
  color: inherit;
}

.app-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 25px;
  padding: 30px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-light);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.app-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    var(--apps-primary), 
    var(--apps-accent), 
    var(--apps-success), 
    var(--apps-warning));
  z-index: -1;
  border-radius: 27px;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.app-card::after {
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

.app-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: var(--shadow-heavy);
  text-decoration: none;
  color: inherit;
}

.app-card:hover::before {
  opacity: 0.1;
}

.app-card:hover::after {
  left: 100%;
}

.app-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: white;
  margin-bottom: 20px;
  box-shadow: var(--shadow-light);
  transition: all 0.4s ease;
}

.app-icon.wave {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.app-icon.structural {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.app-icon.hydro {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.app-card:hover .app-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: var(--shadow-heavy);
}

.app-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--global-text-color, #000);
  margin-bottom: 15px;
  line-height: 1.2;
}

.app-description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--global-text-color-light, #6c757d);
  line-height: 1.6;
  margin-bottom: 20px;
}

.app-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.app-badge {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.app-badge.ready {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
}

.app-badge.in-development {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
}

.app-badge.coming-soon {
  background: linear-gradient(135deg, #ffecd2, #fcb69f);
  color: #8B4513;
}

.app-badge.python {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.app-badge.interactive {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
}

.app-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4facfe;
  animation: pulse 2s infinite;
}

.status-indicator.coming-soon {
  background: #fcb69f;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .apps-hero {
    padding: 40px 20px;
  }
  
  .apps-hero h1 {
    font-size: 2.5rem;
  }
  
  .apps-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .app-card {
    padding: 25px;
  }
}
</style>

<div class="post">
  <!-- Apps Grid -->
  <div class="apps-grid">
    
    <!-- Wave App -->
    <a href="https://sandeshlamsal.com/WaveApp/" target="_blank" class="app-card">
      <div class="app-icon wave">
        <i class="fa-solid fa-water"></i>
      </div>
      <h3 class="app-title">Wave</h3>
      <p class="app-description">
        Advanced wave analysis calculator for coastal and marine engineering. Perform wavelength calculations, wave reflection analysis, and zero-crossing wave statistics.
      </p>
      <div class="app-badges">
        <span class="app-badge ready">Ready</span>
        <span class="app-badge python">Python</span>
        <span class="app-badge interactive">Interactive</span>
      </div>
      <div class="app-status">
        <span class="status-indicator"></span>
        <span>Available</span>
      </div>
    </a>

    <!-- Pile Cap App (External Link) -->
    <a href="https://sandeshlamsal.com/PileCapApp/" target="_blank" class="app-card">
      <div class="app-icon structural">
        <i class="fa-solid fa-building"></i>
      </div>
      <h3 class="app-title">PileCap</h3>
      <p class="app-description">
        Comprehensive pile cap design tool for foundation analysis. Rigid-assumption load distribution to each pile, reinforcement design, and code compliance checking.
      </p>
      <div class="app-badges">
        <span class="app-badge ready">Ready</span>
        <span class="app-badge python">Python</span>
        <span class="app-badge interactive">Interactive</span>
      </div>
      <div class="app-status">
        <span class="status-indicator"></span>
        <span>Available (Beta)</span>
      </div>
    </a>

    <!-- Column Design App -->
    <a href="https://sandeshlamsal.com/ColumnApp/" target="_blank" class="app-card-link">
      <div class="app-card">
        <div class="app-icon hydro">
          <i class="fa-solid fa-columns"></i>
        </div>
        <h3 class="app-title">Column</h3>
        <p class="app-description">
          Advanced column design calculations for reinforced concrete columns. Load analysis, slenderness checks, and capacity design.
        </p>
        <div class="app-badges">
          <span class="app-badge in-development">In Development</span>
          <span class="app-badge python">Python</span>
          <span class="app-badge interactive">Interactive</span>
        </div>
        <div class="app-status">
          <span class="status-indicator coming-soon"></span>
          <span>Coming Soon</span>
        </div>
      </div>
    </a>

  </div>
</div>
