---
layout: archive
title: "People"
permalink: /people/
author_profile: false
redirect_from:
  - /network/
---

<style>
.people-section {
  margin-top: 1.35rem;
}
.people-list {
  border-top: 1px solid #dedede;
  list-style: none;
  margin: 0.65rem 0 1.5rem;
  padding: 0;
}
.people-list li {
  border-bottom: 1px solid #ededed;
  display: grid;
  gap: 0.35rem;
  grid-template-columns: minmax(10rem, 1fr) minmax(9rem, 0.7fr);
  padding: 0.5rem 0;
}
.people-list a {
  font-weight: 700;
}
.people-affiliation {
  color: #555;
  font-size: 0.9rem;
}
@media (max-width: 640px) {
  .people-list li {
    grid-template-columns: 1fr;
  }
}
</style>

<section id="people">
{% assign groups = "Mentor|Student" | split: "|" %}
{% for group in groups %}
  {% if group == "Mentor" %}
    {% assign people = site.people | where: "category", group | sort: "mentor_order" %}
  {% else %}
    {% assign people = site.people | where: "category", group | sort: "people_order" %}
  {% endif %}
  <section class="people-section" id="{% if group == "Student" %}supervised-students{% else %}{{ group | downcase }}s{% endif %}">
    <h2>{% if group == "Student" %}Supervised Students{% else %}{{ group }}s{% endif %}</h2>
    <ul class="people-list">
      {% for person in people %}
        {% assign affiliation_parts = person.affiliation | split: " · " %}
        <li>
          <a href="{{ person.url }}">{{ person.title }}</a>
          {% if affiliation_parts[0] %}<span class="people-affiliation">{{ affiliation_parts[0] }}</span>{% endif %}
        </li>
      {% endfor %}
    </ul>
  </section>
{% endfor %}
</section>
