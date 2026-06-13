---
layout: archive
title: "People"
permalink: /people/
author_profile: true
redirect_from:
  - /network/
---

Mentors and students connected to my training and supervision.

<style>
.people-section {
  margin-top: 1.35rem;
}
.people-list {
  border-top: 1px solid #dedede;
  margin: 0.65rem 0 1.2rem;
}
.people-list p {
  border-bottom: 1px solid #ececec;
  line-height: 1.35;
  margin: 0;
  padding: 0.48rem 0;
}
.people-list a {
  font-weight: 700;
}
.people-list span {
  color: #555;
  font-size: 0.8rem;
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
    <div class="people-list">
      {% for person in people %}
        <p><a href="{{ person.url }}">{{ person.title }}</a>{% if person.affiliation %}<span> · {{ person.affiliation }}</span>{% endif %}</p>
      {% endfor %}
    </div>
  </section>
{% endfor %}
</section>
