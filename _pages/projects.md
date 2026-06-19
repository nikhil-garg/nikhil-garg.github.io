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
  gap: 0.8rem;
  grid-template-columns: minmax(8rem, 0.5fr) minmax(0, 1.35fr) minmax(7rem, 0.38fr) minmax(8rem, 0.5fr) minmax(8rem, 0.48fr);
  padding: 0.72rem 0;
}
.project-row--head {
  color: #666;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 0.48rem 0;
  text-transform: uppercase;
}
.project-row h2 {
  font-size: 1rem;
  line-height: 1.25;
  margin: 0;
}
.project-meta {
  color: #555;
  font-size: 0.88rem;
  line-height: 1.35;
  margin: 0;
}
.project-program,
.project-pubs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.project-chip {
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #333;
  display: inline-flex;
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.28rem 0.42rem;
  text-decoration: none;
  white-space: nowrap;
}
.project-chip:hover {
  border-color: #777;
  color: #111;
  text-decoration: none;
}
.project-label {
  color: #555;
  display: block;
  font-size: 0.9rem;
  line-height: 1.35;
}
@media (max-width: 720px) {
  .project-row--head {
    display: none;
  }
  .project-row {
    grid-template-columns: 1fr;
  }
  .project-row > div::before {
    color: #777;
    content: attr(data-label);
    display: block;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 0.12rem;
    text-transform: uppercase;
  }
}
</style>

<section class="project-list" aria-label="Project overview">
  <div class="project-row project-row--head" aria-hidden="true">
    <div>Project</div>
    <div>Full name</div>
    <div>Duration</div>
    <div>Affiliation</div>
    <div>Source</div>
  </div>
  {% for project in site.data.projects %}
    <article class="project-row">
      <div data-label="Project">
        <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
      </div>
      <div data-label="Full name">
        <p class="project-meta">{{ project.full_title }}</p>
        {% if project.publications.size > 0 %}
          <div class="project-pubs">
            <a class="project-chip" href="{{ project.url }}#related-publications">{{ project.publications.size }} paper{% unless project.publications.size == 1 %}s{% endunless %}</a>
          </div>
        {% endif %}
      </div>
      <div data-label="Duration"><span class="project-label">{{ project.duration }}</span></div>
      <div data-label="Affiliation"><span class="project-label">{{ project.affiliation }}</span></div>
      <div data-label="Source" class="project-program">
        {% if project.program %}<span class="project-chip">{{ project.program }}</span>{% endif %}
        {% if project.source.url %}<a class="project-chip" href="{{ project.source.url }}">{{ project.source.label }}</a>{% endif %}
        {% if project.publications.size > 0 %}
          <a class="project-chip" href="{{ project.url }}">details</a>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</section>
