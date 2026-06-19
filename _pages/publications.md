---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

Articles are also listed on [Google Scholar]({{ site.author.googlescholar }}).

<style>
.pub-list {
  border-top: 1px solid #dedede;
  margin: 0.8rem 0 1.5rem;
}
.pub-year {
  color: #333;
  font-size: 1.05rem;
  margin: 1.15rem 0 0.3rem;
}
.pub-card {
  border-bottom: 1px solid #ececec;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(104px, 150px) minmax(0, 1fr);
  padding: 0.82rem 0;
}
.pub-figure {
  align-self: start;
  background: #f8f9fb;
  border: 1px solid #d8dde5;
  border-radius: 6px;
  overflow: hidden;
}
.pub-image {
  aspect-ratio: 16 / 10;
  display: block;
  object-fit: contain;
  padding: 0.32rem;
  width: 100%;
}
.pub-thumb {
  align-items: flex-start;
  aspect-ratio: 16 / 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 86px;
  padding: 0.7rem;
}
.pub-thumb__project {
  color: #526a7a;
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}
.pub-thumb__topic {
  color: #333;
  display: block;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.22;
}
.pub-title {
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 0.25rem;
}
.pub-authors,
.pub-venue {
  color: #444;
  font-size: 0.92rem;
  margin: 0.15rem 0;
}
.pub-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.7rem;
  margin-top: 0.48rem;
}
.pub-links a {
  color: #333;
  font-size: 0.84rem;
  white-space: nowrap;
}
.pub-links i {
  color: #555;
  margin-right: 0.22rem;
}
@media (max-width: 640px) {
  .pub-card {
    grid-template-columns: 1fr;
  }
  .pub-figure {
    max-width: 240px;
  }
}
</style>

<section class="pub-list" aria-label="Publications">
{% assign current_year = "" %}
{% for pub in site.data.publications %}
  {% assign detail = site.data.publication_details | where: "id", pub.id | first %}
  {% assign first_topic = pub.topics | first %}
  {% if pub.year != current_year %}
    <h2 class="pub-year">{{ pub.year }}</h2>
    {% assign current_year = pub.year %}
  {% endif %}
  <article class="pub-card" id="{{ pub.id }}">
    <div class="pub-figure">
      {% if detail.image %}
        <img class="pub-image" src="{{ detail.image }}" alt="{{ detail.image_alt | default: pub.title }}">
      {% else %}
        <div class="pub-thumb">
          <span class="pub-thumb__project">{{ detail.project | default: pub.venue }}</span>
          <span class="pub-thumb__topic">{{ first_topic.name | default: pub.venue }}</span>
        </div>
      {% endif %}
    </div>
    <div>
      <p class="pub-title"><a href="{{ pub.url }}">{{ pub.title }}.</a></p>
      <p class="pub-authors">
        {% for author in pub.authors %}
          {% if author == "N. Garg" %}<strong>{{ author }}</strong>{% else %}{{ author }}{% endif %}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
      <p class="pub-venue"><em>{{ pub.venue }}</em>, {{ pub.year }}.</p>
      <p class="pub-links">
        {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}"><i class="fas fa-link"></i>DOI</a>{% endif %}
        {% if detail.links %}
          {% for item in detail.links %}
            <a href="{{ item.url }}"><i class="{{ item.icon | default: 'fas fa-file-alt' }}"></i>{{ item.label }}</a>
          {% endfor %}
        {% endif %}
      </p>
    </div>
  </article>
{% endfor %}
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {% for pub in site.data.publications %}
    {
      "@type": "ScholarlyArticle",
      "name": {{ pub.title | jsonify }},
      "url": {{ site.url | append: pub.url | jsonify }},
      {% if pub.doi %}"identifier": {{ pub.doi | prepend: "https://doi.org/" | jsonify }},{% endif %}
      {% if pub.year %}"datePublished": {{ pub.year | jsonify }},{% endif %}
      "isPartOf": {
        "@type": "Periodical",
        "name": {{ pub.venue | jsonify }}
      },
      "author": [
        {% for author in pub.authors %}
        {
          "@type": "Person",
          "name": {{ author | jsonify }}
        }{% unless forloop.last %},{% endunless %}
        {% endfor %}
      ],
      "keywords": [
        {% for topic in pub.topics %}
        {{ topic.name | jsonify }}{% unless forloop.last %},{% endunless %}
        {% endfor %}
      ]
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
</script>
