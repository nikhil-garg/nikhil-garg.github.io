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
.home-hero {
  border-bottom: 1px solid #dedede;
  display: grid;
  gap: 1.35rem;
  grid-template-columns: minmax(0, 1fr) 190px;
  align-items: center;
  margin-bottom: 1.4rem;
  padding-bottom: 1.25rem;
}
.home-kicker {
  color: #526a7a;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0;
  margin: 0 0 0.35rem;
  text-transform: uppercase;
}
.home-hero h1 {
  font-size: clamp(1.9rem, 4vw, 3rem);
  line-height: 1.1;
  margin: 0 0 0.75rem;
}
.home-lead {
  color: #333;
  font-size: 1.02rem;
  line-height: 1.55;
  max-width: 760px;
}
.home-portrait {
  margin: 0;
}
.home-portrait img {
  aspect-ratio: 1;
  border-radius: 6px;
  display: block;
  object-fit: cover;
  width: 100%;
}
.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 0;
}
.home-actions a,
.home-chip {
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  color: #333;
  display: inline-flex;
  align-items: center;
  gap: 0.36rem;
  line-height: 1;
  text-decoration: none;
}
.home-actions a {
  font-size: 0.88rem;
  padding: 0.5rem 0.62rem;
}
.home-actions a:hover,
.home-chip:hover {
  border-color: #526a7a;
  color: #111;
  text-decoration: none;
}
.home-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.home-note {
  border-top: 1px solid #dedede;
  color: #444;
  font-size: 0.94rem;
  line-height: 1.5;
  margin-top: 1.2rem;
  padding-top: 1rem;
}
@media (max-width: 720px) {
  .home-hero {
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

<section class="home-hero">
  <div>
    <p class="home-kicker">Neuromorphic electronics · biosignals · adaptive hardware</p>
    <h1>Nikhil Garg</h1>
    <p class="home-lead">I am a postdoctoral researcher at CogniGron, University of Groningen, working on brain-inspired electronics for adaptive, energy-efficient neural interfaces. My work connects biosignal front ends, spiking neural networks, and emerging synaptic devices such as ferroelectric and memristive memories.</p>
    <div class="home-actions">
      <a href="/publications/"><i class="fas fa-file-alt"></i>Publications</a>
      <a href="/projects/"><i class="fas fa-project-diagram"></i>Projects</a>
      <a href="/topics/"><i class="fas fa-tags"></i>Topics</a>
      <a href="/teaching/videos/"><i class="fas fa-play-circle"></i>Videos</a>
      <a href="/cv/"><i class="fas fa-id-card"></i>CV</a>
    </div>
  </div>
  <figure class="home-portrait">
    <img src="/images/profile-2026-mountain.jpg" alt="Nikhil Garg">
  </figure>
</section>

<section class="home-grid site-card-grid" aria-label="Research routes">
  {% for cluster in site.data.topic_clusters.clusters %}
    {% assign cluster_url = "/topics/#cluster-" | append: cluster.id %}
    {% include card.html
      title=cluster.blurb
      url=cluster_url
      eyebrow=cluster.label
      cluster_id=cluster.id
      card_type="CreativeWork"
    %}
  {% endfor %}
</section>

<p class="home-note">For a compact record, start with <a href="/cv/">CV</a>. For collaborators and supervised students, use <a href="/people/">People</a>. For talks and teaching material, use <a href="/talks/">Talks</a> and <a href="/teaching/">Teaching</a>.</p>
