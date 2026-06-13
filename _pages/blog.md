---
layout: archive
title: "Blog"
permalink: /blog/
author_profile: true
redirect_from:
  - /news/
---

Brief research notes, publication overviews, and project updates. These posts are meant to be reusable source material for publication, project, and people pages.

<style>
.blog-feed {
  display: grid;
  gap: 1rem;
  margin-top: 1.25rem;
}
.blog-card {
  border: 1px solid #dedede;
  border-radius: 7px;
  padding: 0.95rem 1rem;
}
.blog-card__author {
  align-items: center;
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
}
.blog-card__avatar {
  border-radius: 50%;
  height: 44px;
  object-fit: cover;
  width: 44px;
}
.blog-card__byline {
  color: #555;
  font-size: 0.78rem;
  line-height: 1.25;
}
.blog-card h2 {
  font-size: 1.1rem;
  line-height: 1.28;
  margin: 0.2rem 0 0.35rem;
}
.blog-card p {
  margin-bottom: 0.55rem;
}
.blog-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.7rem;
  margin-top: 0.55rem;
}
.blog-card__links a {
  white-space: nowrap;
}
.blog-card__links i {
  color: #555;
  margin-right: 0.22rem;
}
</style>

<div class="blog-feed">
{% for post in site.posts %}
  <article class="blog-card">
    <div class="blog-card__author">
      <img class="blog-card__avatar" src="/images/{{ site.author.avatar }}" alt="{{ site.author.name }}">
      <div>
        <strong>{{ site.author.name }}</strong>
        <div class="blog-card__byline">{{ post.date | date: "%B %-d, %Y" }}{% if post.project %} · {{ post.project }}{% endif %}</div>
      </div>
    </div>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    {% if post.excerpt %}{{ post.excerpt | markdownify }}{% endif %}
    <div class="blog-card__links">
      <a href="{{ post.url }}"><i class="fas fa-link"></i>post</a>
      {% if post.publication_url %}<a href="{{ post.publication_url }}"><i class="fas fa-file-alt"></i>publication</a>{% endif %}
      {% if post.project_url %}<a href="{{ post.project_url }}"><i class="fas fa-project-diagram"></i>project</a>{% endif %}
      {% if post.linkedin_url %}<a href="{{ post.linkedin_url }}"><i class="fab fa-linkedin"></i>LinkedIn</a>{% endif %}
    </div>
  </article>
{% endfor %}
</div>
