---
permalink: /
title: "Nikhil Garg"
excerpt: "Postdoctoral researcher in neuromorphic computing and biosignal processing."
author_profile: false
hide_title: true
redirect_from:
  - /about/
  - /about.html
---

<style>
.home-profile {
  display: grid;
  gap: 2.1rem;
  grid-template-columns: 220px minmax(0, 1fr);
  margin: 0.8rem 0 2rem;
}
.home-side {
  align-self: start;
}
.home-portrait {
  margin: 0 0 0.85rem;
}
.home-portrait img {
  aspect-ratio: 1;
  border-radius: 6px;
  display: block;
  object-fit: cover;
  width: 100%;
}
.home-name {
  font-size: 1.65rem;
  line-height: 1.15;
  margin: 0 0 0.2rem;
}
.home-role,
.home-location {
  color: #555;
  font-size: 0.92rem;
  line-height: 1.35;
  margin: 0.18rem 0;
}
.home-links,
.home-actions,
.home-inline-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.75rem;
}
.home-links {
  margin-top: 0.8rem;
}
.home-links a {
  color: #333;
  font-size: 0.9rem;
}
.home-main {
  max-width: 820px;
}
.home-lede {
  color: #222;
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0 0 1rem;
  max-width: 760px;
}
.home-actions {
  margin: 0 0 1.2rem;
}
.home-actions a {
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #333;
  display: inline-flex;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.46rem 0.6rem;
  text-decoration: none;
}
.home-actions a:hover {
  border-color: #777;
  color: #111;
  text-decoration: none;
}
.home-summary {
  border-top: 1px solid #dedede;
}
.home-row {
  border-bottom: 1px solid #ededed;
  display: grid;
  gap: 1rem;
  grid-template-columns: 8.5rem minmax(0, 1fr);
  padding: 0.72rem 0;
}
.home-row dt {
  color: #555;
  font-weight: 700;
}
.home-row dd {
  margin: 0;
}
.home-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.home-list li + li {
  margin-top: 0.45rem;
}
.home-inline-links a {
  color: #333;
  font-size: 0.92rem;
}
@media (max-width: 720px) {
  .home-profile,
  .home-row {
    grid-template-columns: 1fr;
  }
  .home-portrait {
    max-width: 160px;
  }
}
</style>

<section class="home-profile">
  <aside class="home-side">
    <figure class="home-portrait">
      <img src="/images/profile-2026-mountain.jpg" alt="Nikhil Garg">
    </figure>
    <h1 class="home-name">Nikhil Garg</h1>
    <p class="home-role">Postdoctoral researcher</p>
    <p class="home-location">CogniGron, University of Groningen</p>
    <div class="home-links">
      <a href="{{ site.author.googlescholar }}">Scholar</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a>
      <a href="{{ site.author.orcid }}">ORCID</a>
      <a href="mailto:{{ site.author.email }}">Email</a>
    </div>
  </aside>

  <main class="home-main">
    <p class="home-lede">I work on neuromorphic electronics for adaptive, energy-efficient neural interfaces: biosignal front ends, spiking neural networks, and emerging synaptic devices such as ferroelectric and memristive memories.</p>
    <nav class="home-actions" aria-label="Primary links">
      <a href="/publications/">Publications</a>
      <a href="/projects/">Projects</a>
      <a href="/files/neuropac-video-archive/">Videos</a>
      <a href="/cv/">CV</a>
    </nav>

    <dl class="home-summary">
      <div class="home-row">
        <dt>Current</dt>
        <dd>Postdoctoral work on stochastic spiking wireless multimodal sensory systems at CogniGron.</dd>
      </div>
      <div class="home-row">
        <dt>Work</dt>
        <dd>
          <ul class="home-list">
            <li><a href="/publications/personalized-spiking-neural-networks/">Personalized spiking neural networks with ferroelectric synapses for EEG</a></li>
            <li><a href="/publications/vdsp-memristors/">Voltage-dependent synaptic plasticity for memristive synapses</a></li>
            <li><a href="/publications/cmos-lif-neuron/">CMOS analog LIF neuron for memristor-integrated circuits</a></li>
          </ul>
        </dd>
      </div>
      <div class="home-row">
        <dt>Projects</dt>
        <dd class="home-inline-links">
          <a href="/projects/swims/">SWIMS</a>
          <a href="/projects/vitfox/">VITFOX</a>
          <a href="/projects/unico/">UNICO</a>
          <a href="/projects/ionos/">IONOS</a>
          <a href="/projects/bci/">BCI</a>
        </dd>
      </div>
    </dl>
  </main>
</section>
