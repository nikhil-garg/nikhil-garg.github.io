---
layout: archive
title: "Videos"
permalink: /teaching/videos/
author_profile: false
redirect_from:
  - /teaching/videos.html
---

<style>
.video-hero {
  border-bottom: 1px solid #dedede;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  margin: 0 0 1.2rem;
  padding: 0 0 1rem;
}
.video-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}
.video-actions a,
.topic-link {
  align-items: center;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  color: #333;
  display: inline-flex;
  font-size: 0.8rem;
  gap: 0.3rem;
  padding: 0.36rem 0.55rem;
  text-decoration: none;
}
.video-actions a:hover,
.topic-link:hover {
  border-color: #777;
  color: #111;
  text-decoration: none;
}
.video-section {
  border-top: 1px solid #dedede;
  margin-top: 1.25rem;
  padding-top: 1rem;
}
.video-section h2 {
  font-size: 1.16rem;
  margin-bottom: 0.7rem;
}
.video-feature-grid {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.video-card {
  border: 1px solid #dedede;
  border-radius: 7px;
  overflow: hidden;
}
.video-card img {
  aspect-ratio: 16 / 9;
  background: #eceff1;
  display: block;
  object-fit: cover;
  width: 100%;
}
.video-card__media {
  display: block;
}
.video-card-body {
  padding: 0.8rem 0.9rem 0.9rem;
}
.video-card h3 {
  font-size: 0.98rem;
  line-height: 1.25;
  margin: 0 0 0.35rem;
}
.video-card p {
  color: #555;
  font-size: 0.84rem;
  line-height: 1.38;
  margin: 0 0 0.5rem;
}
.video-label {
  color: #666;
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
a.video-label {
  text-decoration: none;
}
a.video-label:hover {
  color: #333;
  text-decoration: underline;
}
.topic-list {
  display: grid;
  gap: 0.45rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0.35rem 0 0;
}
.topic-link {
  justify-content: space-between;
}
@media (max-width: 900px) {
  .video-feature-grid,
  .topic-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 720px) {
  .video-hero,
  .video-feature-grid,
  .topic-list {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="video-hero">
  <div>
    <div class="video-actions">
      <a href="/files/neuropac-video-archive/videos/index.html">All videos</a>
      <a href="/files/neuropac-video-archive/topics/index.html">Topics</a>
      <a href="/files/neuropac-video-archive/events/index.html">Events</a>
      <a href="/files/neuropac-video-archive/speakers/index.html">Speakers</a>
      <a href="https://www.neuropac.info/video-category/">NeuroPAC source</a>
    </div>
  </div>
</section>

<section class="video-section">
  <h2>Featured Videos</h2>
  <div class="video-feature-grid">
    <article class="video-card" data-featured-video-card>
      <a class="video-card__media" href="/files/neuropac-video-archive/videos/neuromorphic-principles-for-self-attention-emre-neftci-6836.html"><img loading="lazy" src="https://www.neuropac.info/wp-content/uploads/2025/11/attention.png" alt=""></a>
      <div class="video-card-body">
        <a class="video-label" href="/files/neuropac-video-archive/topics/algorithms-learning-neuromorphic-algorithms.html">Algorithms</a>
        <h3><a href="/files/neuropac-video-archive/videos/neuromorphic-principles-for-self-attention-emre-neftci-6836.html">Neuromorphic principles for self-attention</a></h3>
        <p>Emre Neftci, Telluride 2025.</p>
      </div>
    </article>
    <article class="video-card" data-featured-video-card>
      <a class="video-card__media" href="/files/neuropac-video-archive/videos/event-based-vision-for-egomotion-estimation-elisabetta-chicca-6984.html"><img loading="lazy" src="https://i.ytimg.com/vi/CGYT6g80Ku8/maxresdefault.jpg" alt=""></a>
      <div class="video-card-body">
        <a class="video-label" href="/files/neuropac-video-archive/topics/sensing-event-based-vision.html">Sensing</a>
        <h3><a href="/files/neuropac-video-archive/videos/event-based-vision-for-egomotion-estimation-elisabetta-chicca-6984.html">Event-Based Vision for Egomotion Estimation</a></h3>
        <p>Elisabetta Chicca, SNUFA 2025.</p>
      </div>
    </article>
    <article class="video-card" data-featured-video-card>
      <a class="video-card__media" href="/files/neuropac-video-archive/videos/ferroelectric-memristors-for-beol-integration-laura-begon-lours-ieee-isaf-2023-3949.html"><img loading="lazy" src="https://img.youtube.com/vi/I2cI_HZdxRU/mqdefault.jpg" alt=""></a>
      <div class="video-card-body">
        <a class="video-label" href="/files/neuropac-video-archive/topics/materials-devices-emerging-devices.html">Devices</a>
        <h3><a href="/files/neuropac-video-archive/videos/ferroelectric-memristors-for-beol-integration-laura-begon-lours-ieee-isaf-2023-3949.html">Ferroelectric memristors for BEOL integration</a></h3>
        <p>Laura Bégon-Lours, IEEE ISAF 2023.</p>
      </div>
    </article>
  </div>
</section>

<script>
(function(){
  const pool = [
    {
      label: 'Algorithms',
      topic: '/files/neuropac-video-archive/topics/algorithms-learning-neuromorphic-algorithms.html',
      title: 'Neuromorphic principles for self-attention',
      meta: 'Emre Neftci, Telluride 2025.',
      url: '/files/neuropac-video-archive/videos/neuromorphic-principles-for-self-attention-emre-neftci-6836.html',
      image: 'https://www.neuropac.info/wp-content/uploads/2025/11/attention.png'
    },
    {
      label: 'Sensing',
      topic: '/files/neuropac-video-archive/topics/sensing-event-based-vision.html',
      title: 'Event-Based Vision for Egomotion Estimation',
      meta: 'Elisabetta Chicca, SNUFA 2025.',
      url: '/files/neuropac-video-archive/videos/event-based-vision-for-egomotion-estimation-elisabetta-chicca-6984.html',
      image: 'https://i.ytimg.com/vi/CGYT6g80Ku8/maxresdefault.jpg'
    },
    {
      label: 'Devices',
      topic: '/files/neuropac-video-archive/topics/materials-devices-emerging-devices.html',
      title: 'Ferroelectric memristors for BEOL integration',
      meta: 'Laura Bégon-Lours, IEEE ISAF 2023.',
      url: '/files/neuropac-video-archive/videos/ferroelectric-memristors-for-beol-integration-laura-begon-lours-ieee-isaf-2023-3949.html',
      image: 'https://img.youtube.com/vi/I2cI_HZdxRU/mqdefault.jpg'
    },
    {
      label: 'Tools',
      topic: '/files/neuropac-video-archive/topics/neuromorphic-hardware-software-tools.html',
      title: 'Neuromorphic LLMs',
      meta: 'Jason Eshraghian, TILOS Seminar.',
      url: '/files/neuropac-video-archive/videos/neuromorphic-llms-tilos-seminar-jason-eshraghian-7364.html',
      image: 'https://i.ytimg.com/vi/Y5V_3B4wKCI/mqdefault.jpg'
    },
    {
      label: 'Foundations',
      topic: '/files/neuropac-video-archive/topics/foundations-theory-generic-introductions.html',
      title: '35 Years of Neuromorphic Systems Engineering',
      meta: 'André van Schaik, 2025.',
      url: '/files/neuropac-video-archive/videos/35-years-of-neuromorphic-systems-engineering-professor-andre-van-schaik-inaugura-6595.html',
      image: 'https://i.ytimg.com/vi/bITFEBlZYIc/mqdefault.jpg'
    },
    {
      label: 'Hardware',
      topic: '/files/neuropac-video-archive/topics/neuromorphic-hardware-platforms-architectures.html',
      title: 'Full-stack Co-Design for Neuromorphic Systems',
      meta: 'Rajit Manohar, NICE 2023.',
      url: '/files/neuropac-video-archive/videos/full-stack-co-design-for-neuromorphic-systems-rajit-manohar-yale-university-6391.html',
      image: 'https://i.ytimg.com/vi/S6chVH114M8/mqdefault.jpg'
    }
  ];
  const cards = Array.from(document.querySelectorAll('[data-featured-video-card]'));
  if (!cards.length) return;
  const picks = pool.slice().sort(() => Math.random() - 0.5).slice(0, cards.length);
  cards.forEach((card, index) => {
    const item = picks[index];
    card.innerHTML = '<a class="video-card__media" href="' + item.url + '"><img loading="lazy" src="' + item.image + '" alt=""></a>' +
      '<div class="video-card-body"><a class="video-label" href="' + item.topic + '">' + item.label + '</a>' +
      '<h3><a href="' + item.url + '">' + item.title + '</a></h3><p>' + item.meta + '</p></div>';
  });
})();
</script>

<section class="video-section">
  <h2>Topics</h2>
  <div class="topic-list">
    <a class="topic-link" href="/files/neuropac-video-archive/topics/algorithms-learning-learning-approaches.html"><span>Learning approaches</span><strong>74</strong></a>
    <a class="topic-link" href="/files/neuropac-video-archive/topics/sensing-event-based-vision.html"><span>Event-based vision</span><strong>65</strong></a>
    <a class="topic-link" href="/files/neuropac-video-archive/topics/algorithms-learning-neuromorphic-algorithms.html"><span>Neuromorphic algorithms</span><strong>58</strong></a>
    <a class="topic-link" href="/files/neuropac-video-archive/topics/neuromorphic-hardware-platforms-architectures.html"><span>Platforms and architectures</span><strong>47</strong></a>
    <a class="topic-link" href="/files/neuropac-video-archive/topics/neuromorphic-hardware-software-tools.html"><span>Software tools</span><strong>47</strong></a>
    <a class="topic-link" href="/files/neuropac-video-archive/topics/materials-devices-emerging-devices.html"><span>Emerging devices</span><strong>46</strong></a>
    <a class="topic-link" href="/files/neuropac-video-archive/topics/foundations-theory-generic-introductions.html"><span>Introductions</span><strong>46</strong></a>
    <a class="topic-link" href="/files/neuropac-video-archive/topics/neuromorphic-hardware-circuit-chip-design.html"><span>Circuit design</span><strong>41</strong></a>
  </div>
</section>
