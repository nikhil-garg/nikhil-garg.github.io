---
layout: archive
title: "Network"
permalink: /network/
author_profile: true
redirect_from:
  - /people/
---

People, labs, institutions, and funding networks connected to projects, publications, and past affiliations.

<nav class="network-tabs" aria-label="Network sections">
  <a href="#people">People</a>
  <a href="#institutions">Institutions</a>
</nav>

<style>
.network-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1rem 0 1.35rem;
}
.network-tabs a {
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #333;
  font-size: 0.82rem;
  line-height: 1;
  padding: 0.42rem 0.55rem;
  text-decoration: none;
}
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
.institution-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 0.85rem;
}
.institution-card {
  border: 1px solid #dedede;
  border-radius: 7px;
  display: grid;
  gap: 0.7rem;
  grid-template-columns: 92px 1fr;
  min-width: 0;
  padding: 0.75rem;
}
.institution-media {
  align-items: center;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  display: flex;
  height: 70px;
  justify-content: center;
  overflow: hidden;
  padding: 0.35rem;
}
.institution-media img {
  display: block;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
.institution-media--photo {
  padding: 0;
}
.institution-media--photo img {
  height: 100%;
  max-height: none;
  max-width: none;
  object-fit: cover;
  width: 100%;
}
.institution-card strong {
  display: block;
  line-height: 1.2;
}
.institution-card span {
  color: #555;
  display: block;
  font-size: 0.8rem;
  line-height: 1.32;
  margin-top: 0.18rem;
}
.institution-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.28rem 0.55rem;
  margin-top: 0.38rem;
}
.institution-links a {
  font-size: 0.78rem;
  white-space: nowrap;
}
@media (max-width: 720px) {
  .people-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .institution-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 440px) {
  .people-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<section id="people">
{% assign groups = "Mentor|Colleague|Student|Collaborator" | split: "|" %}
{% for group in groups %}
  {% if group == "Mentor" %}
    {% assign people = site.people | where: "category", group | sort: "mentor_order" %}
  {% else %}
    {% assign people = site.people | where: "category", group | sort: "title" %}
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

<section class="people-section" id="institutions">
  <h2>Institutions</h2>
  <div class="institution-grid">
    <a class="institution-card" href="https://www.rug.nl/">
      <span class="institution-media"><img src="/images/logos/university-of-groningen-logo.png" alt="University of Groningen"></span>
      <span><strong>University of Groningen</strong><span>SWIMS · current postdoctoral affiliation</span><span class="institution-links">SWIMS</span></span>
    </a>
    <a class="institution-card" href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/">
      <span class="institution-media"><img src="/images/logos/bics-logo.png" alt="BICS"></span>
      <span><strong>Bio-Inspired Circuits and Systems</strong><span>Mixed-signal and neuromorphic circuits group</span><span class="institution-links">SWIMS</span></span>
    </a>
    <a class="institution-card" href="https://ethz.ch/en.html">
      <span class="institution-media"><img src="/images/logos/eth-logo.png" alt="ETH Zurich"></span>
      <span><strong>ETH Zurich</strong><span>VITFOX and FPGA supervision period</span><span class="institution-links">VITFOX · FPGA</span></span>
    </a>
    <a class="institution-card" href="https://neo.ethz.ch/">
      <span class="institution-media"><img src="/images/logos/neo-ethz-logo.svg" alt="NEO ETH Zurich"></span>
      <span><strong>Neuromorphic Electronics with Oxides</strong><span>Ferroelectric and oxide neuromorphic hardware</span><span class="institution-links">VITFOX</span></span>
    </a>
    <a class="institution-card" href="https://www.iemn.fr/">
      <span class="institution-media"><img src="/images/logos/iemn-logo.png" alt="IEMN"></span>
      <span><strong>IEMN</strong><span>UNICO and IONOS lab context</span><span class="institution-links">UNICO · IONOS</span></span>
    </a>
    <a class="institution-card" href="https://www.iemn.fr/">
      <span class="institution-media institution-media--photo"><img src="/images/places/iemn-building.jpg" alt="IEMN building"></span>
      <span><strong>IEMN Building</strong><span>Placed here as context instead of inside project cards.</span></span>
    </a>
    <a class="institution-card" href="https://www.usherbrooke.ca/ln2/">
      <span class="institution-media"><img src="/images/logos/ln2-logo.png" alt="LN2"></span>
      <span><strong>LN2</strong><span>Nanotechnologies and nanosystems lab</span><span class="institution-links">UNICO · IONOS</span></span>
    </a>
    <a class="institution-card" href="https://www.usherbrooke.ca/ln2/">
      <span class="institution-media institution-media--photo"><img src="/images/places/ln2-building.png" alt="LN2 building"></span>
      <span><strong>LN2 Building</strong><span>Compact place card for the Sherbrooke lab.</span></span>
    </a>
    <a class="institution-card" href="https://www.cnrs.fr/en">
      <span class="institution-media"><img src="/images/logos/cnrs-logo.jpg" alt="CNRS"></span>
      <span><strong>CNRS</strong><span>French national research network</span><span class="institution-links">UNICO · IONOS</span></span>
    </a>
    <a class="institution-card" href="https://www.bits-pilani.ac.in/goa/">
      <span class="institution-media"><img src="/images/logos/bits-logo.png" alt="BITS Pilani"></span>
      <span><strong>BITS Pilani Goa</strong><span>Undergraduate BCI and FPGA research</span><span class="institution-links">BCI · FPGA</span></span>
    </a>
  </div>
</section>
