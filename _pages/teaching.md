---
layout: archive
title: "Teaching & Community"
permalink: /teaching/
author_profile: true
---

Reading lists, teaching notes, community links, and foundation-building resources across BCI, machine learning, electronics, and neuromorphic engineering.

<style>
.teaching-quicklinks,
.resource-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 1rem 0 1.5rem;
}
.teaching-card,
.resource-card {
  border: 1px solid #dedede;
  border-radius: 7px;
  padding: 0.85rem 0.95rem;
}
.teaching-card h2,
.resource-card h3 {
  font-size: 1rem;
  line-height: 1.25;
  margin: 0 0 0.25rem;
}
.teaching-card p,
.resource-card p {
  color: #555;
  font-size: 0.86rem;
  line-height: 1.38;
  margin-bottom: 0.45rem;
}
.resource-logo {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  display: block;
  margin-bottom: 0.65rem;
  max-height: 5rem;
  object-fit: contain;
  padding: 0.45rem;
  width: 100%;
}
.teaching-card a,
.resource-card a {
  display: inline-flex;
  gap: 0.3rem;
}
.reading-section {
  border-top: 1px solid #dedede;
  margin-top: 1.25rem;
  padding-top: 1rem;
}
.reading-section h2 {
  font-size: 1.18rem;
}
.reading-list {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
.reading-list li {
  margin: 0.62rem 0;
}
.reading-list strong {
  display: block;
  line-height: 1.28;
}
.reading-list span {
  color: #555;
  display: block;
  font-size: 0.86rem;
  line-height: 1.35;
}
.resource-tag {
  color: #555;
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
}
@media (max-width: 720px) {
  .teaching-quicklinks,
  .resource-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="teaching-quicklinks">
  <section class="teaching-card">
    <h2>Neuropac</h2>
    <p>A home for teaching notes, practical tutorials, and neurotechnology resources.</p>
    <a href="#neuropac"><i class="fas fa-link"></i>add link</a>
  </section>
  <section class="teaching-card">
    <h2>Reading Lists</h2>
    <p>Foundational papers and books grouped by topic, with short notes on why each matters.</p>
    <a href="#reading-lists"><i class="fas fa-book-open"></i>browse</a>
  </section>
  <section class="teaching-card">
    <h2>Teaching Material</h2>
    <p>Slides, lab notes, tutorials, notebooks, and workshop material can live here.</p>
    <a href="#teaching-material"><i class="fas fa-chalkboard-teacher"></i>organize</a>
  </section>
  <section class="teaching-card">
    <h2>Community</h2>
    <p>Useful groups, labs, datasets, competitions, and public tools for newcomers.</p>
    <a href="#community"><i class="fas fa-users"></i>collect</a>
  </section>
</div>

<section class="reading-section" id="neuropac">
  <h2>Neuropac</h2>
  <div class="resource-grid">
    <article class="resource-card">
      <img class="resource-logo" src="/images/logos/neuropac-logo.jpg" alt="Neuropac">
      <span class="resource-tag">Website</span>
      <h3>Neuropac</h3>
      <p>Add the public Neuropac URL here once finalized.</p>
      <a href="/teaching/"><i class="fas fa-link"></i>placeholder</a>
    </article>
  </div>
</section>

<section class="reading-section" id="reading-lists">
  <h2>Reading Lists</h2>
</section>

<section class="reading-section" id="bci">
  <h2>BCI & Biosignals</h2>
  <ul class="reading-list">
    <li><strong><a href="https://arxiv.org/abs/1611.08024">EEGNet: A Compact Convolutional Network for EEG-based Brain-Computer Interfaces</a></strong><span>Compact neural-network baseline for EEG decoding and a good bridge between classical BCI features and deep learning.</span></li>
    <li><strong><a href="https://arxiv.org/abs/1905.04149">A Survey on Deep Learning-based Non-Invasive Brain Signals</a></strong><span>Broad survey for non-invasive BCI, useful for mapping signal types, models, and open challenges.</span></li>
    <li><strong><a href="https://doi.org/10.3389/fnhum.2022.1051463">Decoding valence and arousal from portable EEG</a></strong><span>Example of practical EEG affect decoding with portable sensing.</span></li>
    <li><strong><a href="https://arxiv.org/abs/2106.11008">Wheelchair automation by a hybrid BCI system</a></strong><span>Hybrid SSVEP and blink-control BCI system with end-to-end hardware control.</span></li>
  </ul>
</section>

<section class="reading-section" id="machine-learning">
  <h2>Machine Learning Foundations</h2>
  <ul class="reading-list">
    <li><strong><a href="https://www.deeplearningbook.org/">Deep Learning</a></strong><span>Good reference for optimization, representation learning, regularization, and neural-network basics.</span></li>
    <li><strong><a href="https://www.gaussianprocess.org/gpml/">Gaussian Processes for Machine Learning</a></strong><span>Useful for uncertainty, kernels, Bayesian thinking, and small-data modeling.</span></li>
    <li><strong><a href="https://www.cs.cmu.edu/~tom/mlbook.html">Machine Learning, Tom Mitchell</a></strong><span>Classic introduction to core supervised and unsupervised learning ideas.</span></li>
  </ul>
</section>

<section class="reading-section" id="electronics">
  <h2>Electronics Engineering</h2>
  <ul class="reading-list">
    <li><strong>The Art of Electronics</strong><span>Practical analog and mixed-signal electronics reference.</span></li>
    <li><strong>CMOS Analog Circuit Design</strong><span>Foundation for transistor-level analog design, biasing, amplifiers, and circuit intuition.</span></li>
    <li><strong>FPGA and embedded hardware notes</strong><span>Place for board bring-up notes, ADC/DAC interfacing, memory-characterization workflows, and hardware-software co-design resources.</span></li>
  </ul>
</section>

<section class="reading-section" id="neuromorphic">
  <h2>Neuromorphic & Emerging Devices</h2>
  <ul class="reading-list">
    <li><strong><a href="/publications/#voltage-dependent-synaptic-plasticity">Voltage-dependent synaptic plasticity</a></strong><span>Local learning rule based on neuron membrane potential.</span></li>
    <li><strong><a href="/publications/cmos-lif-neuron/">Versatile CMOS analog LIF neuron</a></strong><span>Analog neuron interface for memristor-integrated neuromorphic circuits.</span></li>
    <li><strong><a href="/projects/#vitfox">VITFOX reading list</a></strong><span>Ferroelectric synapses, device-aware learning, and energy-convergence tradeoffs.</span></li>
    <li><strong><a href="/projects/#unico">UNICO reading list</a></strong><span>Memristive devices, in-memory learning, and mixed-signal neuromorphic systems.</span></li>
  </ul>
</section>

<section class="reading-section" id="teaching-material">
  <h2>Teaching Material</h2>
  <div class="resource-grid">
    <article class="resource-card">
      <span class="resource-tag">Future</span>
      <h3>Slides and tutorials</h3>
      <p>Workshop slides, notebooks, lab sheets, and short explainers can be added here.</p>
    </article>
    <article class="resource-card">
      <span class="resource-tag">Future</span>
      <h3>Student project ideas</h3>
      <p>Small BCI, ML, FPGA, biosignal, and neuromorphic hardware exercises.</p>
    </article>
  </div>
</section>

<section class="reading-section" id="community">
  <h2>Community</h2>
  <div class="resource-grid">
    <article class="resource-card">
      <span class="resource-tag">Datasets</span>
      <h3>BCI and biosignal datasets</h3>
      <p>Links to public EEG, EMG, and neural-interface datasets can be collected here.</p>
    </article>
    <article class="resource-card">
      <span class="resource-tag">Groups</span>
      <h3>Labs and research communities</h3>
      <p>Useful labs, conferences, workshops, and open-source communities for newcomers.</p>
    </article>
  </div>
</section>
