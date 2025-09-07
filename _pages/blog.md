---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<style>
/* Advanced Blog Page Styling - Vertical Layout */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --blog-primary: #667eea;
  --blog-secondary: #764ba2;
  --blog-accent: #f093fb;
  --blog-success: #4facfe;
  --blog-warning: #ffecd2;
  --blog-error: #fcb69f;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-light: 0 8px 32px rgba(31, 38, 135, 0.37);
  --shadow-heavy: 0 20px 60px rgba(31, 38, 135, 0.5);
}

/* Dark theme adaptations */
html[data-theme="dark"] {
  --glass-bg: rgba(0, 0, 0, 0.1);
  --glass-border: rgba(255, 255, 255, 0.1);
}

.blog-hero {
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.1) 0%, 
    rgba(118, 75, 162, 0.1) 25%,
    rgba(240, 147, 251, 0.1) 50%,
    rgba(79, 172, 254, 0.1) 75%,
    rgba(255, 236, 210, 0.1) 100%);
  border-radius: 30px;
  padding: 60px 40px;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
}

.blog-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    var(--blog-primary) 0%, 
    var(--blog-accent) 50%, 
    var(--blog-success) 100%);
  opacity: 0.05;
  z-index: -1;
}

.blog-hero h1 {
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--blog-primary), var(--blog-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.blog-hero h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  color: var(--global-text-color-light, #6c757d);
  font-weight: 400;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* Vertical Blog Container */
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Blog Post Card - Vertical Layout */
.blog-post-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 25px;
  margin-bottom: 30px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-light);
  position: relative;
}

.blog-post-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    var(--blog-primary), 
    var(--blog-accent), 
    var(--blog-success), 
    var(--blog-warning));
  z-index: -1;
  border-radius: 27px;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.blog-post-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: var(--shadow-heavy);
}

.blog-post-card:hover::before {
  opacity: 0.1;
}

/* Blog Post Layout - Horizontal within card */
.blog-post-content {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 200px;
}

/* Thumbnail Section */
.blog-post-thumbnail {
  width: 300px;
  min-width: 300px;
  position: relative;
  overflow: hidden;
}

.blog-post-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-post-card:hover .blog-post-thumbnail img {
  transform: scale(1.05);
}

/* Default gradient thumbnails */
.blog-post-thumbnail.default-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--blog-primary) 0%, var(--blog-secondary) 100%);
  color: white;
}

.blog-post-thumbnail.default-thumb:nth-child(4n+1) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.blog-post-thumbnail.default-thumb:nth-child(4n+2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.blog-post-thumbnail.default-thumb:nth-child(4n+3) {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.blog-post-thumbnail.default-thumb:nth-child(4n+4) {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.blog-post-thumbnail.default-thumb i {
  font-size: 3rem;
  opacity: 0.8;
}

/* Content Section */
.blog-post-info {
  flex: 1;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.blog-post-header {
  margin-bottom: 15px;
}

.blog-post-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.3;
}

.blog-post-title a {
  color: var(--global-text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-post-title a:hover {
  color: var(--blog-primary);
}

.blog-post-description {
  color: var(--global-text-color-light, #6c757d);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

/* Blog Post Meta */
.blog-post-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.blog-post-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.blog-badge {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, var(--blog-primary), var(--blog-accent));
  color: white;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.blog-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  color: white;
  text-decoration: none;
}

.blog-badge.date {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.blog-badge.external {
  background: linear-gradient(135deg, #ffecd2, #fcb69f);
  color: #8B4513;
}

.blog-badge.tag {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.blog-badge.category {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
}

.blog-read-time {
  display: flex;
  align-items: center;
  color: var(--global-text-color-light, #6c757d);
  font-size: 0.85rem;
  gap: 5px;
}

/* Featured Posts Section */
.featured-posts {
  margin-bottom: 50px;
}

.featured-posts .blog-post-card {
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.05) 0%, 
    rgba(240, 147, 251, 0.05) 100%);
  border-color: var(--blog-primary);
}

.featured-pin {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--blog-primary);
  color: white;
  padding: 5px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 2;
}

/* Tag Category List */
.tag-category-list {
  margin-bottom: 40px;
  text-align: center;
}

.tag-category-list ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag-category-list li {
  margin: 0;
}

.tag-category-list a {
  color: var(--blog-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 15px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
}

.tag-category-list a:hover {
  background: var(--blog-primary);
  color: white;
  transform: translateY(-2px);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .blog-hero {
    padding: 40px 20px;
  }
  
  .blog-hero h1 {
    font-size: 2.2rem;
  }
  
  .blog-hero h2 {
    font-size: 1.1rem;
  }
  
  .blog-post-content {
    flex-direction: column;
  }
  
  .blog-post-thumbnail {
    width: 100%;
    height: 200px;
  }
  
  .blog-post-info {
    padding: 20px;
  }
  
  .blog-post-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 576px) {
  .blog-container {
    padding: 0 10px;
  }
  
  .blog-post-card {
    margin-bottom: 20px;
  }
  
  .blog-post-info {
    padding: 15px;
  }
}

/* Dark theme fixes for badges and tags */
html[data-theme="dark"] .blog-badge {
  color: white;
}

html[data-theme="dark"] .blog-badge.external {
  color: #8B4513;
}

html[data-theme="dark"] .tag-category-list a {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: #e9ecef;
}

html[data-theme="dark"] .tag-category-list a:hover {
  background: var(--blog-primary);
  color: white;
}
</style>
  font-size: 0.75rem;
}

/* Dark theme fixes for badges and tags */
html[data-theme="dark"] .badge.bg-light {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #e9ecef !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

html[data-theme="dark"] .badge.bg-light:hover {
  background-color: var(--global-theme-color) !important;
  color: white !important;
  border-color: var(--global-theme-color) !important;
}
<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="blog-hero">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
{% endif %}

{% if site.display_tags or site.display_categories %}
  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in site.display_categories %}
        <li>
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<div class="featured-posts">
  <h3 class="text-center mb-4">Featured Posts</h3>
  <div class="blog-container">
    {% for post in featured_posts %}
      <article class="blog-post-card">
        <div class="featured-pin">
          <i class="fa-solid fa-thumbtack fa-xs"></i> Featured
        </div>
        
        <div class="blog-post-content">
          <!-- Thumbnail Section -->
          <div class="blog-post-thumbnail{% unless post.thumbnail %} default-thumb{% endunless %}">
            {% if post.thumbnail %}
              <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
            {% else %}
              <i class="fa-solid fa-star"></i>
            {% endif %}
          </div>
          
          <!-- Content Section -->
          <div class="blog-post-info">
            <div class="blog-post-header">
              <h2 class="blog-post-title">
                {% if post.redirect == blank %}
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                {% elsif post.redirect contains '://' %}
                  <a href="{{ post.redirect }}" target="_blank">
                    {{ post.title }}
                    <i class="fa-solid fa-external-link-alt fa-sm ml-1"></i>
                  </a>
                {% else %}
                  <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                {% endif %}
              </h2>
              
              <p class="blog-post-description">{{ post.description }}</p>
            </div>
            
            <div class="blog-post-meta">
              <div class="blog-post-badges">
                <span class="blog-badge date">{{ post.date | date: '%B %d, %Y' }}</span>
                {% if post.external_source %}
                  <span class="blog-badge external">{{ post.external_source }}</span>
                {% endif %}
                
                {% assign year = post.date | date: "%Y" %}
                <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}" class="blog-badge">
                  <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                </a>
              </div>
              
              <div class="blog-read-time">
                {% if post.external_source == blank %}
                  {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                {% else %}
                  {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                {% endif %}
                <i class="fa-solid fa-clock fa-sm"></i>
                <span>{{ read_time }} min read</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
<hr>
{% endif %}

  <!-- Main Blog Posts - Vertical Layout -->
  <div class="blog-container">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}
      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}
      {% assign year = post.date | date: "%Y" %}
      {% assign tags = post.tags | join: "" %}
      {% assign categories = post.categories | join: "" %}
      
      <article class="blog-post-card">
        <div class="blog-post-content">
          <!-- Thumbnail Section -->
          <div class="blog-post-thumbnail{% unless post.thumbnail %} default-thumb{% endunless %}">
            {% if post.thumbnail %}
              <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
            {% else %}
              <i class="fa-solid fa-newspaper"></i>
            {% endif %}
          </div>
          
          <!-- Content Section -->
          <div class="blog-post-info">
            <div class="blog-post-header">
              <h2 class="blog-post-title">
                {% if post.redirect == blank %}
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                {% elsif post.redirect contains '://' %}
                  <a href="{{ post.redirect }}" target="_blank">
                    {{ post.title }}
                    <i class="fa-solid fa-external-link-alt fa-sm ml-1"></i>
                  </a>
                {% else %}
                  <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                {% endif %}
              </h2>
              
              <p class="blog-post-description">{{ post.description | truncate: 150 }}</p>
            </div>
            
            <div class="blog-post-meta">
              <div class="blog-post-badges">
                <span class="blog-badge date">{{ post.date | date: '%B %d, %Y' }}</span>
                {% if post.external_source %}
                  <span class="blog-badge external">{{ post.external_source }}</span>
                {% endif %}
                
                <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}" class="blog-badge">
                  <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                </a>
                
                {% if tags != "" %}
                  {% for tag in post.tags limit: 2 %}
                    <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl}}" class="blog-badge tag">
                      <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
                    </a>
                  {% endfor %}
                {% endif %}
                
                {% if categories != "" %}
                  {% for category in post.categories limit: 1 %}
                    <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}" class="blog-badge category">
                      <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
                    </a>
                  {% endfor %}
                {% endif %}
              </div>
              
              <div class="blog-read-time">
                <i class="fa-solid fa-clock fa-sm"></i>
                <span>{{ read_time }} min read</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
