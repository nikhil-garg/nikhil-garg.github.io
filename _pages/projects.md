---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: false
redirect_from:
  - /portfolio/
---

<style>
.project-list {
  border-top: 1px solid #dedede;
  margin: 0.8rem 0 1.5rem;
}
.project-row {
  border-bottom: 1px solid #ededed;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(9rem, 0.55fr) minmax(0, 1fr);
  padding: 0.78rem 0;
}
.project-row h2 {
  font-size: 1rem;
  line-height: 1.25;
  margin: 0 0 0.18rem;
}
.project-meta {
  color: #555;
  font-size: 0.88rem;
  line-height: 1.35;
  margin: 0;
}
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.8rem;
}
.project-links a {
  font-size: 0.9rem;
}
@media (max-width: 720px) {
  .project-row {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="project-list" aria-label="Project overview">
  {% for project in site.data.projects %}
    <article class="project-row">
      <div>
        <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
        <p class="project-meta">{{ project.meta }}</p>
      </div>
      <div class="project-links">
        {% if project.publications.size > 0 %}
          {% for publication in project.publications limit: 3 %}
            <a href="{{ publication.url }}">{{ publication.title }}</a>
          {% endfor %}
        {% endif %}
      </div>
    </article>
  {% endfor %}
</section>
