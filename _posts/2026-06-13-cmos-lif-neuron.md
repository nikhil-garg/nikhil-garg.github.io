---
title: "CMOS analog LIF neuron for memristor-integrated neuromorphic circuits"
date: 2026-06-13
categories:
  - blog
publication_url: "/publications/cmos-lif-neuron/"
linkedin_url: "https://www.linkedin.com/posts/nikhil-garg-bits_neuromorphic-analog-ai-activity-7273994918837071872-jdDP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAB_PrxUBC3G1jJscK5o4lv4kztQxXb9ErrI"
excerpt: "A short note on the CMOS analog LIF neuron work and how it connects memristive devices with practical neuromorphic circuits."
---

<style>
.research-post {
  border: 1px solid #dedede;
  border-radius: 7px;
  padding: 1rem;
}
.research-post__author {
  align-items: center;
  display: flex;
  gap: 0.65rem;
  margin-bottom: 0.85rem;
}
.research-post__author img {
  border-radius: 50%;
  height: 48px;
  object-fit: cover;
  width: 48px;
}
.research-post__meta {
  color: #555;
  font-size: 0.82rem;
  line-height: 1.25;
}
.research-post__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.75rem;
  margin-top: 1rem;
}
.research-post__links a i {
  color: #555;
  margin-right: 0.22rem;
}
</style>

<article class="research-post" markdown="1">
<div class="research-post__author">
  <img src="/images/{{ site.author.avatar }}" alt="{{ site.author.name }}">
  <div>
    <strong>{{ site.author.name }}</strong>
    <div class="research-post__meta">{{ page.date | date: "%B %-d, %Y" }}</div>
  </div>
</div>

The CMOS analog LIF neuron work focuses on a practical interface between compact analog neuron circuits and memristor-integrated neuromorphic systems.

The larger motivation is simple: if learning and inference are going to move closer to memory devices, the surrounding neuron and interface circuits need to be versatile enough to support experiments across device behavior, circuit constraints, and spiking-network dynamics.

The design target is a compact circuit block that supports spiking dynamics while staying compatible with memristive synapse experiments.

<div class="research-post__links">
  <a href="/publications/cmos-lif-neuron/"><i class="fas fa-file-alt"></i>publication page</a>
  <a href="{{ page.linkedin_url }}"><i class="fab fa-linkedin"></i>LinkedIn post</a>
</div>
</article>
