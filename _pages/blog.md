---
layout: page
permalink: /blog/
title: blog
description: 
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
    before: 1
    after: 3
---

<style>
/* Blog Page Custom Styles */
:root {
  --blog-primary: #007bff;
  --blog-accent: #28a745;
  --blog-success: #17a2b8;
  --blog-warning: #ffc107;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-light: 0 8px 32px rgba(0, 0, 0, 0.1);
  --shadow-heavy: 0 16px 64px rgba(0, 0, 0, 0.15);
}

/* Custom Page Title */
.blog-page-title {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px 0;
}

.blog-page-title h1 {
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--global-text-color);
  margin-bottom: 0;
  background: linear-gradient(135deg, var(--global-theme-color), var(--global-text-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Blog Container */
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Blog Post Cards - Vertical Style */
.blog-post-card {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-light);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
}

.blog-post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    var(--blog-primary), 
    var(--blog-accent), 
    var(--blog-success), 
    var(--blog-warning));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.blog-post-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-heavy);
}

.blog-post-card:hover::before {
  opacity: 0.03;
}

/* Thumbnail Styling */
.post-thumbnail {
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--blog-primary), var(--blog-accent));
}

.post-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-post-card:hover .post-thumbnail img {
  transform: scale(1.05);
}

/* Post Content */
.post-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: var(--global-text-color-light);
}

.post-date {
  display: flex;
  align-items: center;
  gap: 8px;
}

.post-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.post-tag {
  background: var(--global-bg-color);
  color: var(--global-text-color);
  border: 1px solid var(--global-divider-color);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.2s ease;
}

.post-tag:hover {
  transform: translateY(-2px);
  background: var(--global-theme-color);
  color: var(--global-bg-color);
  border-color: var(--global-theme-color);
  text-decoration: none;
}

.post-title {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 1.3;
}

.post-title a {
  color: var(--global-text-color);
  text-decoration: none;
  transition: background 0.3s ease;
}

.post-title a:hover {
  background: linear-gradient(135deg, var(--blog-primary), var(--blog-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-summary {
  color: var(--global-text-color-light);
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--blog-primary);
  text-decoration: none;
  font-weight: 400;
  transition: all 0.3s ease;
}

.read-more:hover {
  color: var(--blog-accent);
  transform: translateX(5px);
  text-decoration: none;
}

/* Pagination Styling */
.pagination {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.pagination a, .pagination span {
  padding: 12px 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border-radius: 15px;
  color: var(--global-text-color);
  text-decoration: none;
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.pagination a:hover {
  background: linear-gradient(135deg, var(--blog-primary), var(--blog-accent));
  color: white;
  transform: translateY(-3px);
}

.pagination .current {
  background: linear-gradient(135deg, var(--blog-primary), var(--blog-accent));
  color: white;
}

/* Tag/Category Filter */
.tag-category-list {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 15px;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 15px;
}

.tag-category-list ul {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.tag-category-list li {
  list-style: none;
}

.tag-category-list a {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  border: 1px solid var(--global-divider-color);
  text-decoration: none;
  border-radius: 18px;
  font-weight: 400;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tag-category-list a:hover {
  transform: translateY(-2px);
  background: var(--global-theme-color);
  color: var(--global-bg-color);
  border-color: var(--global-theme-color);
  text-decoration: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-container {
    padding: 0 15px;
  }
  
  .blog-post-card {
    padding: 20px;
    flex-direction: column;
    text-align: center;
  }
  
  .post-thumbnail {
    width: 100%;
    height: 200px;
  }
  
  .post-title {
    font-size: 1.5rem;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .tag-category-list ul {
    flex-direction: column;
    gap: 10px;
  }
  
  .pagination {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .pagination a, .pagination span {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
}
</style>

<div class="post">

{% if site.display_tags.size > 0 or site.display_categories.size > 0 %}
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
      {% if site.display_tags.size > 0 and site.display_categories.size > 0 %}
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

<div class="blog-container">
  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  {% for post in postlist %}
    <article class="blog-post-card">
      {% if post.thumbnail %}
        <div class="post-thumbnail">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
        </div>
      {% endif %}
      
      <div class="post-content">
        <div class="post-meta">
          <div class="post-date">
            <i class="fa-solid fa-calendar-days"></i>
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
          </div>
          {% if post.tags.size > 0 %}
            <div class="post-tags">
              {% for tag in post.tags limit:3 %}
                <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="post-tag">{{ tag }}</a>
              {% endfor %}
            </div>
          {% endif %}
        </div>
        
        <h2 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        
        {% if post.description %}
          <p class="post-summary">{{ post.description | truncate: 200 }}</p>
        {% else %}
          <p class="post-summary">{{ post.content | strip_html | truncate: 200 }}</p>
        {% endif %}
        
        <a href="{{ post.url | relative_url }}" class="read-more">
          Read More <i class="fa-solid fa-arrow-right fa-sm"></i>
        </a>
      </div>
    </article>
  {% endfor %}
</div>

<!-- Pagination -->
{% if page.pagination.enabled and paginator.total_pages > 1 %}
  <nav class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path | relative_url }}">&laquo; Previous</a>
    {% endif %}

    {% for page_num in (1..paginator.total_pages) %}
      {% if page_num == paginator.page %}
        <span class="current">{{ page_num }}</span>
      {% elsif page_num == 1 %}
        <a href="{{ '/blog/' | relative_url }}">{{ page_num }}</a>
      {% else %}
        <a href="{{ site.paginate_path | relative_url | replace: ':num', page_num }}">{{ page_num }}</a>
      {% endif %}
    {% endfor %}

    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path | relative_url }}">Next &raquo;</a>
    {% endif %}
  </nav>
{% endif %}

</div>
