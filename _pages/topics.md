---
layout: archive
title: "Topics"
permalink: /topics/
author_profile: true
---

Browse research topics across publications, people, and video resources.

<style>
.topic-tools {
  border-bottom: 1px solid #dedede;
  border-top: 1px solid #dedede;
  margin: 1rem 0 1.35rem;
  padding: 0.75rem 0;
}
.topic-search {
  border: 1px solid #cfd7dc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.9rem;
  margin-bottom: 0.7rem;
  padding: 0.48rem 0.58rem;
  width: 100%;
}
.topic-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  max-height: 9rem;
  overflow: auto;
  padding-right: 0.25rem;
}
.topic-chip,
.topic-mini-chip {
  background: #f6f7f8;
  border: 1px solid #d6dadd;
  border-radius: 4px;
  color: #333;
  display: inline-flex;
  line-height: 1;
  text-decoration: none;
}
.topic-chip {
  font-size: 0.78rem;
  padding: 0.34rem 0.48rem;
}
.topic-chip.is-active {
  background: #eaf2f5;
  border-color: #9cb6c4;
  color: #111;
  font-weight: 700;
}
.topic-count {
  color: #666;
  margin-left: 0.22rem;
}
.topic-panel {
  border-top: 1px solid #dedede;
  margin-top: 1.2rem;
  padding-top: 1rem;
}
.topic-panel[hidden] {
  display: none;
}
.topic-panel h2 {
  margin-bottom: 0.25rem;
}
.topic-summary {
  color: #555;
  font-size: 0.88rem;
  margin: 0 0 0.8rem;
}
.topic-grid {
  display: grid;
  gap: 0.8rem;
  grid-template-columns: minmax(0, 1.6fr) minmax(220px, 0.9fr);
}
.topic-card {
  border: 1px solid #dedede;
  border-radius: 6px;
  display: block;
  margin-bottom: 0.62rem;
  padding: 0.7rem;
  text-decoration: none;
}
.topic-card strong {
  display: block;
  line-height: 1.25;
}
.topic-card span {
  color: #555;
  display: block;
  font-size: 0.82rem;
  line-height: 1.35;
  margin-top: 0.2rem;
}
.topic-card__meta {
  color: #666;
  font-size: 0.78rem;
  margin-top: 0.35rem;
}
.topic-side {
  display: grid;
  gap: 0.8rem;
  align-content: start;
}
.topic-side h3 {
  font-size: 0.96rem;
  margin: 0 0 0.45rem;
}
.topic-people {
  display: grid;
  gap: 0.45rem;
}
.topic-person {
  display: block;
  line-height: 1.28;
  text-decoration: none;
}
.topic-person strong {
  color: #333;
  display: block;
  font-size: 0.86rem;
  line-height: 1.15;
}
.topic-person span {
  color: #666;
  display: block;
  font-size: 0.75rem;
  line-height: 1.25;
}
.topic-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.topic-mini-chip {
  font-size: 0.76rem;
  padding: 0.33rem 0.45rem;
}
.topic-empty {
  color: #666;
  font-size: 0.84rem;
}
.topic-index {
  display: grid;
  gap: 0.55rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 1rem;
}
.topic-index[hidden] {
  display: none;
}
.topic-index-card {
  border: 1px solid #dedede;
  border-radius: 6px;
  color: #333;
  display: block;
  padding: 0.68rem 0.75rem;
  text-decoration: none;
}
.topic-index-card:hover {
  border-color: #9cb6c4;
  color: #111;
  text-decoration: none;
}
.topic-index-card strong {
  display: block;
  font-size: 0.88rem;
  line-height: 1.2;
}
.topic-index-card span {
  color: #666;
  display: block;
  font-size: 0.75rem;
  margin-top: 0.2rem;
}
.topic-tools.is-focused .topic-cloud {
  display: none;
}
.topic-tools.is-focused {
  border-bottom: 0;
  margin-bottom: 0.5rem;
  padding-bottom: 0.25rem;
}
.topic-reset {
  display: none;
  font-size: 0.84rem;
}
.topic-tools.is-focused .topic-reset {
  display: inline-block;
}
@media (max-width: 760px) {
  .topic-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="topic-tools">
  <input class="topic-search" type="search" placeholder="Filter topics, papers, people, or videos" data-topic-filter>
  <a class="topic-reset" href="/topics/">Browse all topics</a>
  <nav class="topic-cloud" aria-label="Topic keywords">
    {% for topic in site.data.research_topics %}
      <a class="topic-chip" href="/topics/?q={{ topic.slug }}" data-topic-link="{{ topic.slug }}">{{ topic.title }} <span class="topic-count">{{ topic.publications | size }}</span></a>
    {% endfor %}
  </nav>
</div>

<div data-topic-status class="topic-summary"></div>

<section class="topic-index" data-topic-index aria-label="Topic directory">
{% for topic in site.data.research_topics %}
  <a class="topic-index-card" href="/topics/?q={{ topic.slug }}" data-topic-index-card data-topic-slug="{{ topic.slug }}" data-topic-text="{{ topic.title | downcase | escape }} {% for pub in topic.publications %}{{ pub.title | downcase | escape }} {{ pub.authors | downcase | escape }} {% endfor %}{% for person in topic.people %}{{ person.title | downcase | escape }} {{ person.affiliation | downcase | escape }} {% endfor %}">
    <strong>{{ topic.title }}</strong>
    <span>{{ topic.publications | size }} paper{% unless topic.publications.size == 1 %}s{% endunless %}{% if topic.videos.size > 0 %} · {{ topic.videos | size }} video route{% unless topic.videos.size == 1 %}s{% endunless %}{% endif %}</span>
  </a>
{% endfor %}
</section>

<section class="topic-list">
{% for topic in site.data.research_topics %}
  <article class="topic-panel" id="{{ topic.slug }}" data-topic-panel data-topic-slug="{{ topic.slug }}" data-topic-text="{{ topic.title | downcase | escape }} {% for pub in topic.publications %}{{ pub.title | downcase | escape }} {{ pub.authors | downcase | escape }} {% endfor %}{% for person in topic.people %}{{ person.title | downcase | escape }} {{ person.affiliation | downcase | escape }} {% endfor %}" hidden>
    <h2>{{ topic.title }}</h2>
    <p class="topic-summary">{{ topic.publications | size }} paper{% unless topic.publications.size == 1 %}s{% endunless %}, {{ topic.people | size }} linked people, and {{ topic.videos | size }} video route{% unless topic.videos.size == 1 %}s{% endunless %}.</p>
    <div class="topic-grid">
      <div>
        {% for pub in topic.publications %}
          <a class="topic-card" href="{{ pub.url }}">
            <strong>{{ pub.title }}</strong>
            <span>{{ pub.authors }}</span>
            <span class="topic-card__meta">{{ pub.venue }}{% if pub.project %} · {{ pub.project }}{% endif %}</span>
          </a>
        {% endfor %}
      </div>
      <aside class="topic-side">
        {% if topic.people.size > 0 %}
        <div>
          <h3>People</h3>
          <div class="topic-people">
            {% for person in topic.people limit: 10 %}
              <a class="topic-person" href="{{ person.url }}">
                <strong>{{ person.title }}</strong>
                {% if person.affiliation %}<span>{{ person.affiliation }}</span>{% endif %}
              </a>
            {% endfor %}
          </div>
        </div>
        {% endif %}
        {% if topic.videos.size > 0 %}
        <div>
          <h3>Videos</h3>
          <div class="topic-links">
            {% for video in topic.videos %}
              <a class="topic-mini-chip" href="{{ video.url }}">{{ video.label }}</a>
            {% endfor %}
          </div>
        </div>
        {% endif %}
      </aside>
    </div>
  </article>
{% endfor %}
</section>

<script>
(function(){
  const params = new URLSearchParams(window.location.search);
  const selected = (params.get('q') || window.location.hash.replace('#', '') || '').toLowerCase();
  const panels = Array.from(document.querySelectorAll('[data-topic-panel]'));
  const links = Array.from(document.querySelectorAll('[data-topic-link]'));
  const index = document.querySelector('[data-topic-index]');
  const indexCards = Array.from(document.querySelectorAll('[data-topic-index-card]'));
  const input = document.querySelector('[data-topic-filter]');
  const status = document.querySelector('[data-topic-status]');
  const tools = document.querySelector('.topic-tools');

  function showTopic(slug) {
    let matches = panels;
    if (slug) {
      matches = panels.filter(panel => panel.dataset.topicSlug === slug);
      if (matches.length) {
        panels.forEach(panel => panel.hidden = panel.dataset.topicSlug !== slug);
        links.forEach(link => link.classList.toggle('is-active', link.dataset.topicLink === slug));
        if (index) index.hidden = true;
        if (tools) tools.classList.add('is-focused');
        if (input) input.placeholder = 'Search within topics';
        status.textContent = 'Showing selected topic.';
        return;
      }
    }
    panels.forEach(panel => panel.hidden = true);
    links.forEach(link => link.classList.remove('is-active'));
    indexCards.forEach(card => card.hidden = false);
    if (index) index.hidden = false;
    if (tools) tools.classList.remove('is-focused');
    status.textContent = 'Choose a topic to open its papers, people, and videos.';
  }

  function filterTopics() {
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    if (index) index.hidden = Boolean(q);
    panels.forEach(panel => {
      const ok = !q || panel.dataset.topicText.includes(q) || panel.dataset.topicSlug.includes(q);
      panel.hidden = !q || !ok;
      if (ok) visible += 1;
    });
    indexCards.forEach(card => {
      const ok = !q || card.dataset.topicText.includes(q) || card.dataset.topicSlug.includes(q);
      card.hidden = !ok;
    });
    links.forEach(link => {
      const ok = !q || link.textContent.toLowerCase().includes(q) || link.dataset.topicLink.includes(q);
      link.hidden = !ok;
      link.classList.remove('is-active');
    });
    if (tools) tools.classList.toggle('is-focused', false);
    status.textContent = q ? visible + ' matching topics.' : 'Showing all topics.';
  }

  showTopic(selected);
  if (input) {
    input.addEventListener('input', filterTopics);
  }
})();
</script>
