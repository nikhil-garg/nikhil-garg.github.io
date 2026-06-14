---
layout: archive
title: "People"
permalink: /people/
author_profile: false
redirect_from:
  - /network/
---

Mentors and students connected to my training and supervision.

<style>
.people-section {
  margin-top: 1.35rem;
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
    <div class="site-card-grid">
      {% for person in people %}
        {% include card.html
          title=person.title
          url=person.url
          initials=person.initials
          eyebrow=person.category
          meta=person.affiliation
          card_type="Person"
        %}
      {% endfor %}
    </div>
  </section>
{% endfor %}
</section>
