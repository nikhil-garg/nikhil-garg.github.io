---
permalink: /
title: "Nikhil Garg"
excerpt: "Postdoctoral researcher in neuromorphic computing and biosignal processing."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<style>
.page__title {
  display: none;
}
.home-profile {
  display: grid;
  gap: 2rem;
  grid-template-columns: 220px minmax(0, 1fr);
  margin: 1rem 0 2rem;
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
.home-inline-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.75rem;
  margin-top: 0.8rem;
}
.home-links a,
.home-inline-links a {
  color: #333;
  font-size: 0.9rem;
}
.home-main {
  max-width: 760px;
}
.home-summary {
  border-top: 1px solid #dedede;
}
.home-row {
  border-bottom: 1px solid #ededed;
  display: grid;
  gap: 1rem;
  grid-template-columns: 8rem minmax(0, 1fr);
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
@media (max-width: 720px) {
  .home-profile,
  .home-row {
    grid-template-columns: 1fr;
  }
  .home-portrait {
    max-width: 160px;
  }
  .home-grid {
    grid-template-columns: 1fr;
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
    <dl class="home-summary">
      <div class="home-row">
        <dt>Research</dt>
        <dd>Neuromorphic electronics, biosignals, adaptive hardware, and emerging synaptic devices.</dd>
      </div>
      <div class="home-row">
        <dt>Pages</dt>
        <dd class="home-inline-links">
          <a href="/publications/">Publications</a>
          <a href="/projects/">Projects</a>
          <a href="/teaching/">Teaching</a>
          <a href="/teaching/videos/">Videos</a>
          <a href="/cv/">CV</a>
        </dd>
      </div>
      <div class="home-row">
        <dt>Recent papers</dt>
        <dd>
          <ul class="home-list">
            <li><a href="https://doi.org/10.1063/5.0319912">Personalized spiking neural networks with ferroelectric synapses for EEG signal processing</a></li>
            <li><a href="https://doi.org/10.1002/aelm.202500823">Analog Weight Update Rule in Ferroelectric Hafnia, Using picoJoule Programming Pulses</a></li>
            <li><a href="https://doi.org/10.1038/s43246-025-01033-5">Unsupervised local learning based on voltage-dependent synaptic plasticity</a></li>
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
