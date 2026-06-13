---
layout: archive
title: "People"
permalink: /people/
author_profile: true
redirect_from:
  - /network/
---

People connected to projects, publications, supervision, collaborations, and past affiliations.

<style>
.people-section {
  margin-top: 1.35rem;
}
.people-grid {
  display: grid;
  gap: 0.65rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 0.75rem;
}
.person-card {
  align-items: center;
  border: 1px solid #dedede;
  border-radius: 6px;
  display: grid;
  gap: 0.65rem;
  grid-template-columns: 58px 1fr;
  min-width: 0;
  padding: 0.65rem;
}
.person-card__avatar {
  align-items: center;
  background: #f5f7fa;
  border: 1px solid #d8dde5;
  border-radius: 6px;
  color: #526a7a;
  display: inline-flex;
  font-weight: 700;
  height: 58px;
  justify-content: center;
  overflow: hidden;
  width: 58px;
}
.person-card__avatar img {
  height: 100%;
  object-fit: cover;
  object-position: top center;
  width: 100%;
}
.person-card strong {
  display: block;
  font-size: 0.95rem;
  line-height: 1.2;
}
.person-card span {
  color: #555;
  display: block;
  font-size: 0.8rem;
  line-height: 1.28;
  margin-top: 0.12rem;
}
@media (max-width: 720px) {
  .people-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 440px) {
  .people-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<section id="people">
{% assign groups = "Mentor|Colleague|Collaborator|Student" | split: "|" %}
{% for group in groups %}
  {% if group == "Mentor" %}
    {% assign people = site.people | where: "category", group | sort: "mentor_order" %}
  {% else %}
    {% assign people = site.people | where: "category", group | sort: "people_order" %}
  {% endif %}
  <section class="people-section">
    <h2>{{ group }}{% if group != "People" %}s{% endif %}</h2>
    <div class="people-grid">
      {% for person in people %}
        <a class="person-card" href="{{ person.url }}">
          <span class="person-card__avatar">
            {% if person.image %}
              <img src="{{ person.image }}" alt="{{ person.title }}">
            {% else %}
              {{ person.initials }}
            {% endif %}
          </span>
          <span>
            <strong>{{ person.title }}</strong>
            {% if person.affiliation %}<span>{{ person.affiliation }}</span>{% endif %}
          </span>
        </a>
      {% endfor %}
    </div>
  </section>
{% endfor %}
</section>
