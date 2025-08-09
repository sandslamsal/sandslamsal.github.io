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
.hoverable {
  transition: all 0.3s ease;
}

.hoverable:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.card-img-top-wrapper {
  position: relative;
  overflow: hidden;
}

.card-img-top {
  transition: all 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.stretched-link {
  color: inherit !important;
}

.stretched-link:hover {
  color: var(--global-theme-color) !important;
}

.badge {
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
}

.card-body {
  position: relative;
}

/* Gradient overlays for default thumbnails */
.card-img-top-wrapper:nth-child(4n+1) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-img-top-wrapper:nth-child(4n+2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.card-img-top-wrapper:nth-child(4n+3) {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.card-img-top-wrapper:nth-child(4n+4) {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}
</style>

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
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
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="card-item col">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>

                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}

                    <p class="post-meta">
                      {{ read_time }} min read &nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>

{% endif %}

  <!-- Blog Posts Grid -->
  <div class="container-fluid mt-4">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {% for post in postlist %}
        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        {% assign year = post.date | date: "%Y" %}
        {% assign tags = post.tags | join: "" %}
        {% assign categories = post.categories | join: "" %}
        
        <div class="col">
          <div class="card h-100 shadow-sm hoverable">
            <!-- Card Header with Thumbnail -->
            <div class="card-img-top-wrapper" style="height: 200px; overflow: hidden; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              {% if post.thumbnail %}
                <img src="{{ post.thumbnail | relative_url }}" class="card-img-top" alt="{{ post.title }}" style="width: 100%; height: 100%; object-fit: cover;">
              {% else %}
                <!-- Default gradient background with icon for posts without thumbnails -->
                <div class="d-flex align-items-center justify-content-center h-100">
                  <i class="fa-solid fa-newspaper fa-3x text-white opacity-75"></i>
                </div>
              {% endif %}
            </div>
            
            <!-- Card Body -->
            <div class="card-body d-flex flex-column">
              <div class="mb-2">
                <!-- Date Badge -->
                <span class="badge bg-primary rounded-pill">{{ post.date | date: '%B %d, %Y' }}</span>
                {% if post.external_source %}
                  <span class="badge bg-secondary rounded-pill">{{ post.external_source }}</span>
                {% endif %}
              </div>
              
              <!-- Title -->
              <h5 class="card-title mb-3">
                {% if post.redirect == blank %}
                  <a href="{{ post.url | relative_url }}" class="text-decoration-none stretched-link">{{ post.title }}</a>
                {% elsif post.redirect contains '://' %}
                  <a href="{{ post.redirect }}" target="_blank" class="text-decoration-none stretched-link">
                    {{ post.title }}
                    <i class="fa-solid fa-external-link-alt fa-sm ml-1"></i>
                  </a>
                {% else %}
                  <a href="{{ post.redirect | relative_url }}" class="text-decoration-none stretched-link">{{ post.title }}</a>
                {% endif %}
              </h5>
              
              <!-- Description -->
              <p class="card-text flex-grow-1 mb-3">{{ post.description | truncate: 120 }}</p>
              
              <!-- Footer Meta Information -->
              <div class="mt-auto">
                <!-- Read Time -->
                <div class="d-flex align-items-center text-muted small mb-2">
                  <i class="fa-solid fa-clock fa-sm me-1"></i>
                  <span>{{ read_time }} min read</span>
                </div>
                
                <!-- Tags -->
                {% if tags != "" or categories != "" %}
                  <div class="mb-2">
                    <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}" class="tag-link">
                      <i class="fa-solid fa-calendar fa-sm"></i>{{ year }}
                    </a>
                    
                    {% if tags != "" %}
                      {% for tag in post.tags limit: 3 %}
                        <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl}}" class="tag-link">
                          <i class="fa-solid fa-hashtag fa-sm"></i>{{ tag }}
                        </a>
                      {% endfor %}
                    {% endif %}
                    
                    {% if categories != "" %}
                      {% for category in post.categories limit: 2 %}
                        <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}" class="tag-link">
                          <i class="fa-solid fa-tag fa-sm"></i>{{ category }}
                        </a>
                      {% endfor %}
                    {% endif %}
                  </div>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
