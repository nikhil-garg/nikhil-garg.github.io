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
.institution-period {
  border-top: 1px solid #dedede;
  margin-top: 1.2rem;
  padding-top: 0.9rem;
}
.institution-period h3 {
  font-size: 1rem;
  margin: 0;
}
.institution-period p {
  color: #555;
  font-size: 0.84rem;
  line-height: 1.4;
  margin: 0.2rem 0 0.45rem;
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
.institution-media--initials {
  color: #526a7a;
  font-size: 1rem;
  font-weight: 700;
}
.institution-place {
  align-items: center;
  display: flex;
  gap: 0.45rem;
  margin-top: 0.45rem;
}
.institution-place img {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  height: 42px;
  object-fit: cover;
  width: 62px;
}
.institution-place span {
  margin-top: 0;
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
{% assign groups = "Mentor|Colleague|Collaborator|Student" | split: "|" %}
{% for group in groups %}
  {% if group == "Mentor" %}
    {% assign people = site.people | where: "category", group | sort: "mentor_order" %}
  {% else %}
    {% assign people = site.people | where: "category", group | sort: "network_order" %}
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

  <section class="institution-period">
    <h3>2026-present · Netherlands</h3>
    <p>Current postdoctoral context and neuromorphic circuit research environment.</p>
    <div class="institution-grid">
    <a class="institution-card" href="https://www.rug.nl/">
      <span class="institution-media"><img src="/images/logos/university-of-groningen-logo.png" alt="University of Groningen"></span>
      <span><strong>University of Groningen</strong><span>SWIMS · current postdoctoral affiliation</span><span class="institution-links">SWIMS</span></span>
    </a>
    <a class="institution-card" href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/">
      <span class="institution-media"><img src="/images/logos/bics-logo.png" alt="BICS"></span>
      <span><strong>Bio-Inspired Circuits and Systems</strong><span>Mixed-signal and neuromorphic circuits group</span><span class="institution-links">SWIMS</span></span>
    </a>
    </div>
  </section>

  <section class="institution-period">
    <h3>2024-2026 · Switzerland</h3>
    <p>Postdoctoral VITFOX work on ferroelectric synapses, device-aware learning, and FPGA-assisted characterization.</p>
    <div class="institution-grid">
    <a class="institution-card" href="https://ethz.ch/en.html">
      <span class="institution-media"><img src="/images/logos/eth-logo.png" alt="ETH Zurich"></span>
      <span><strong>ETH Zurich</strong><span>VITFOX and FPGA supervision period</span><span class="institution-links">VITFOX · FPGA</span></span>
    </a>
    <a class="institution-card" href="https://neo.ethz.ch/">
      <span class="institution-media"><img src="/images/logos/neo-ethz-logo.svg" alt="NEO ETH Zurich"></span>
      <span><strong>Neuromorphic Electronics with Oxides</strong><span>Ferroelectric and oxide neuromorphic hardware</span><span class="institution-links">VITFOX</span></span>
    </a>
    <a class="institution-card" href="https://www.zurich.ibm.com/">
      <span class="institution-media institution-media--initials">IBM</span>
      <span><strong>IBM Research Zurich</strong><span>VITFOX coauthor network around ferroelectric and analog hardware publications</span><span class="institution-links">VITFOX</span></span>
    </a>
    </div>
  </section>

  <section class="institution-period">
    <h3>2020-2024 · France and Canada</h3>
    <p>PhD and collaborative UNICO/IONOS ecosystem across IEMN, LN2, IM2NP, C2N, CNRS, and CHIST-ERA.</p>
    <div class="institution-grid">
    <a class="institution-card" href="https://www.iemn.fr/">
      <span class="institution-media"><img src="/images/logos/iemn-logo.png" alt="IEMN"></span>
      <span><strong>IEMN</strong><span>UNICO and IONOS lab context in Lille</span><span class="institution-links">UNICO · IONOS</span><span class="institution-place"><img src="/images/places/iemn-building.jpg" alt="IEMN building"><span>Villeneuve-d'Ascq, France</span></span></span>
    </a>
    <a class="institution-card" href="https://www.usherbrooke.ca/ln2/">
      <span class="institution-media"><img src="/images/logos/ln2-logo.png" alt="LN2"></span>
      <span><strong>LN2</strong><span>Laboratoire Nanotechnologies Nanosystemes, Sherbrooke</span><span class="institution-links">UNICO · IONOS</span><span class="institution-place"><img src="/images/places/ln2-building.png" alt="LN2 building"><span>Sherbrooke, Canada</span></span></span>
    </a>
    <a class="institution-card" href="https://www.cnrs.fr/en">
      <span class="institution-media"><img src="/images/logos/cnrs-logo.jpg" alt="CNRS"></span>
      <span><strong>CNRS</strong><span>French national research network and project/funding ecosystem</span><span class="institution-links">UNICO · IONOS</span></span>
    </a>
    <a class="institution-card" href="https://www.im2np.fr/">
      <span class="institution-media"><img src="/images/logos/im2np-logo.png" alt="IM2NP"></span>
      <span><strong>IM2NP</strong><span>Aix-Marseille memristive devices and UNICO collaborations</span><span class="institution-links">UNICO</span></span>
    </a>
    <a class="institution-card" href="https://www.c2n.universite-paris-saclay.fr/">
      <span class="institution-media"><img src="/images/logos/c2n-logo.png" alt="C2N"></span>
      <span><strong>C2N</strong><span>Paris-Saclay neuromorphic and memristive hardware collaboration network</span><span class="institution-links">UNICO</span></span>
    </a>
    <a class="institution-card" href="https://www.chistera.eu/">
      <span class="institution-media"><img src="/images/logos/chist-era-logo.jpg" alt="CHIST-ERA"></span>
      <span><strong>CHIST-ERA</strong><span>European funding network connected to UNICO-style collaborative projects</span><span class="institution-links">Funding</span></span>
    </a>
    </div>
  </section>

  <section class="institution-period">
    <h3>2017-2020 · India</h3>
    <p>Undergraduate BCI, embedded hardware, FPGA, and early publication network at BITS Pilani Goa.</p>
    <div class="institution-grid">
    <a class="institution-card" href="https://www.bits-pilani.ac.in/goa/">
      <span class="institution-media"><img src="/images/logos/bits-logo.png" alt="BITS Pilani"></span>
      <span><strong>BITS Pilani Goa</strong><span>Undergraduate BCI and FPGA research</span><span class="institution-links">BCI · FPGA</span></span>
    </a>
    <a class="institution-card" href="https://www.bits-pilani.ac.in/goa/">
      <span class="institution-media"><img src="/images/logos/cns-bits-goa.jpg" alt="Cognitive Neuroscience Lab"></span>
      <span><strong>Cognitive Neuroscience Lab</strong><span>EEG, BCI, affect decoding, motor imagery, and assistive interface work</span><span class="institution-links">BCI</span></span>
    </a>
    <a class="institution-card" href="https://www.bits-pilani.ac.in/goa/">
      <span class="institution-media"><img src="/images/logos/rcl-bits-goa.jpg" alt="Reconfigurable Computing Lab"></span>
      <span><strong>Reconfigurable Computing Lab</strong><span>FPGA, PCB, ADC/DAC interfacing, and embedded hardware-software co-design</span><span class="institution-links">FPGA</span></span>
    </a>
    </div>
  </section>
</section>
