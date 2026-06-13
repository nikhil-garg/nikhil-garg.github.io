---
layout: archive
title: "Neuropac Video Archive"
permalink: /teaching/videos/
author_profile: true
---

<style>
.video-hero {
  border: 1px solid #dedede;
  border-radius: 7px;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1.45fr) minmax(14rem, 0.55fr);
  margin: 0.5rem 0 1.25rem;
  padding: 1rem;
}
.video-hero h1 {
  font-size: 1.55rem;
  margin: 0 0 0.35rem;
}
.video-hero p {
  color: #555;
  font-size: 0.92rem;
  line-height: 1.45;
  margin-bottom: 0.6rem;
}
.video-actions,
.video-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}
.video-actions a,
.video-card-actions a,
.topic-pill {
  align-items: center;
  border: 1px solid #d8d8d8;
  border-radius: 999px;
  display: inline-flex;
  font-size: 0.78rem;
  gap: 0.3rem;
  padding: 0.32rem 0.55rem;
}
.video-stats {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.video-stat {
  border: 1px solid #e2e2e2;
  border-radius: 7px;
  padding: 0.65rem;
}
.video-stat strong {
  display: block;
  font-size: 1.25rem;
}
.video-stat span {
  color: #555;
  font-size: 0.76rem;
  text-transform: uppercase;
}
.video-section {
  border-top: 1px solid #dedede;
  margin-top: 1.25rem;
  padding-top: 1rem;
}
.video-section h2 {
  font-size: 1.18rem;
}
.video-grid,
.browse-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0.75rem 0 1rem;
}
.browse-card,
.video-card {
  border: 1px solid #dedede;
  border-radius: 7px;
  padding: 0.85rem 0.95rem;
}
.browse-card h3,
.video-card h3 {
  font-size: 0.98rem;
  line-height: 1.28;
  margin: 0 0 0.3rem;
}
.browse-card p,
.video-card p {
  color: #555;
  font-size: 0.84rem;
  line-height: 1.38;
  margin: 0 0 0.45rem;
}
.video-meta {
  color: #666;
  display: block;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
.topic-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.42rem;
  margin: 0.8rem 0 1rem;
}
@media (max-width: 760px) {
  .video-hero,
  .video-grid,
  .browse-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="video-hero">
  <div>
    <h1>Neuropac Videos</h1>
    <p>A preserved, browsable video archive for neuromorphic computing, event-based sensing, emerging devices, edge AI, learning algorithms, and community workshops. The original Neuropac project is over, so this page is the maintained entry point from my site.</p>
    <div class="video-actions">
      <a href="/files/neuropac-video-archive/index.html"><i class="fas fa-archive"></i>open full archive</a>
      <a href="/files/neuropac-video-archive/videos/index.html"><i class="fas fa-play-circle"></i>all videos</a>
      <a href="https://www.neuropac.info/video-category/"><i class="fas fa-external-link-alt"></i>old Neuropac site</a>
    </div>
  </div>
  <div class="video-stats" aria-label="Neuropac archive statistics">
    <div class="video-stat"><strong>614</strong><span>videos</span></div>
    <div class="video-stat"><strong>18</strong><span>topics</span></div>
    <div class="video-stat"><strong>26</strong><span>events</span></div>
    <div class="video-stat"><strong>431</strong><span>speakers</span></div>
  </div>
</section>

<section class="video-section">
  <h2>Browse</h2>
  <div class="browse-grid">
    <article class="browse-card">
      <span class="video-meta">Archive index</span>
      <h3>All videos</h3>
      <p>Search and scan the complete exported archive.</p>
      <a href="/files/neuropac-video-archive/videos/index.html"><i class="fas fa-play-circle"></i>browse videos</a>
    </article>
    <article class="browse-card">
      <span class="video-meta">Learning map</span>
      <h3>Topics</h3>
      <p>Use topics as a starting point for reading lists, lectures, and self-study paths.</p>
      <a href="/files/neuropac-video-archive/topics/index.html"><i class="fas fa-tags"></i>browse topics</a>
    </article>
    <article class="browse-card">
      <span class="video-meta">Community</span>
      <h3>Conferences and workshops</h3>
      <p>NICE, Telluride, SNUFA, CVPR event-based vision workshops, TinyML, ISSCC, and more.</p>
      <a href="/files/neuropac-video-archive/events/index.html"><i class="fas fa-calendar-alt"></i>browse events</a>
    </article>
    <article class="browse-card">
      <span class="video-meta">People</span>
      <h3>Speakers and years</h3>
      <p>Find talks by speaker, year, or long-running workshop series.</p>
      <a href="/files/neuropac-video-archive/speakers/index.html"><i class="fas fa-user-friends"></i>speakers</a>
      <a href="/files/neuropac-video-archive/years/index.html"><i class="fas fa-clock"></i>years</a>
    </article>
  </div>
</section>

<section class="video-section">
  <h2>Topic Map</h2>
  <div class="topic-cloud">
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/algorithms-learning-learning-approaches.html">Learning approaches <strong>74</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/sensing-event-based-vision.html">Event-based vision <strong>65</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/algorithms-learning-neuromorphic-algorithms.html">Neuromorphic algorithms <strong>58</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/neuromorphic-hardware-platforms-architectures.html">Platforms <strong>47</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/neuromorphic-hardware-software-tools.html">Software tools <strong>47</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/materials-devices-emerging-devices.html">Emerging devices <strong>46</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/foundations-theory-generic-introductions.html">Introductions <strong>46</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/neuromorphic-hardware-circuit-chip-design.html">Circuit design <strong>41</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/applications-biomedical-bci.html">Biomedical and BCI <strong>27</strong></a>
    <a class="topic-pill" href="/files/neuropac-video-archive/topics/applications-mobile-edge.html">Mobile and edge <strong>25</strong></a>
  </div>
</section>

<section class="video-section">
  <h2>Selected Starting Points</h2>
  <div class="video-grid">
    <article class="video-card">
      <span class="video-meta">Materials and devices</span>
      <h3>Ferroelectric memristors for BEOL integration</h3>
      <p>Laura Begon-Lours, IEEE ISAF 2023. A useful bridge into ferroelectric devices and back-end integration.</p>
      <div class="video-card-actions"><a href="/files/neuropac-video-archive/videos/ferroelectric-memristors-for-beol-integration-laura-begon-lours-ieee-isaf-2023-3949.html"><i class="fas fa-play-circle"></i>watch</a></div>
    </article>
    <article class="video-card">
      <span class="video-meta">Sensing</span>
      <h3>Event-Based Vision for Egomotion Estimation</h3>
      <p>Elisabetta Chicca, SNUFA 2025. A compact entry point into event cameras and neuromorphic perception.</p>
      <div class="video-card-actions"><a href="/files/neuropac-video-archive/videos/event-based-vision-for-egomotion-estimation-elisabetta-chicca-6984.html"><i class="fas fa-play-circle"></i>watch</a></div>
    </article>
    <article class="video-card">
      <span class="video-meta">Algorithms</span>
      <h3>Neuromorphic principles for self-attention</h3>
      <p>Emre Neftci, Telluride 2025. Connects modern attention mechanisms with event-driven computation.</p>
      <div class="video-card-actions"><a href="/files/neuropac-video-archive/videos/neuromorphic-principles-for-self-attention-emre-neftci-6836.html"><i class="fas fa-play-circle"></i>watch</a></div>
    </article>
    <article class="video-card">
      <span class="video-meta">Tools</span>
      <h3>Tutorial on NeuroSim</h3>
      <p>Shimeng Yu, IEEE CASS. A practical route into device-aware and circuit-aware neural hardware simulation.</p>
      <div class="video-card-actions"><a href="/files/neuropac-video-archive/videos/tutorial-on-neurosim-ieee-cass-dl-4311.html"><i class="fas fa-play-circle"></i>watch</a></div>
    </article>
    <article class="video-card">
      <span class="video-meta">Foundations</span>
      <h3>Roadmap on Neuromorphic Computing and Engineering</h3>
      <p>Broad framing for the field, useful as an overview before diving into devices, circuits, and algorithms.</p>
      <div class="video-card-actions"><a href="/files/neuropac-video-archive/videos/roadmap-on-neuromorphic-computing-and-engineering-2476.html"><i class="fas fa-play-circle"></i>watch</a></div>
    </article>
    <article class="video-card">
      <span class="video-meta">Hardware platforms</span>
      <h3>Realizing the Promise of Spiking Neuromorphic Hardware</h3>
      <p>Mike Davies, CVPR workshop. A hardware-centered introduction to why spiking systems matter.</p>
      <div class="video-card-actions"><a href="/files/neuropac-video-archive/videos/realizing-the-promise-of-spiking-neuromorphic-hardware-mike-davies-2019-2408.html"><i class="fas fa-play-circle"></i>watch</a></div>
    </article>
  </div>
</section>
