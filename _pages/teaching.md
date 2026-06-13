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
    <p>A preserved video archive for neuromorphic computing lectures, workshops, and tutorials.</p>
    <a href="/teaching/videos/"><i class="fas fa-play-circle"></i>videos</a>
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
    <h2>Open-source Tools</h2>
    <p>GitHub stars grouped into learning paths for biosignals, SNNs, hardware, and devices.</p>
    <a href="#open-source-map"><i class="fab fa-github"></i>explore</a>
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
      <span class="resource-tag">Video archive</span>
      <h3>Neuropac videos</h3>
      <p>The Neuropac project has ended and the original website is no longer actively maintained by me. I keep a static archive here as a searchable teaching resource.</p>
      <a href="/teaching/videos/"><i class="fas fa-play-circle"></i>curated page</a>
      <a href="/files/neuropac-video-archive/index.html"><i class="fas fa-archive"></i>full archive</a>
      <a href="https://www.neuropac.info/video-category/"><i class="fas fa-external-link-alt"></i>old site</a>
    </article>
  </div>
</section>

<section class="reading-section" id="reading-lists">
  <h2>Reading Lists</h2>
</section>

<section class="reading-section" id="open-source-map">
  <h2>Open-source Learning Map</h2>
  <div class="resource-grid">
    <article class="resource-card">
      <span class="resource-tag">Biosignals</span>
      <h3>BCI, EEG, ECoG, fNIRS, and EMG</h3>
      <p>Datasets, preprocessing examples, and model repositories for hands-on biosignal decoding.</p>
      <a href="https://github.com/stars/nikhil-garg/lists/eeg-ecog"><i class="fab fa-github"></i>EEG/ECoG</a>
      <a href="https://github.com/stars/nikhil-garg/lists/fnirs"><i class="fab fa-github"></i>fNIRS</a>
      <a href="https://github.com/stars/nikhil-garg/lists/emg-transformer"><i class="fab fa-github"></i>EMG transformer</a>
    </article>
    <article class="resource-card">
      <span class="resource-tag">Neuromorphic ML</span>
      <h3>SNNs, transformers, and PyTorch</h3>
      <p>Codebases for spiking neural networks, resonate-and-fire neurons, Spikformer-style models, and modern PyTorch workflows.</p>
      <a href="https://github.com/stars/nikhil-garg/lists/snn"><i class="fab fa-github"></i>SNN</a>
      <a href="https://github.com/stars/nikhil-garg/lists/transformer"><i class="fab fa-github"></i>Transformer</a>
      <a href="https://github.com/stars/nikhil-garg/lists/pytorch"><i class="fab fa-github"></i>PyTorch</a>
    </article>
    <article class="resource-card">
      <span class="resource-tag">Hardware design</span>
      <h3>ASIC, EDA, PCB, and open silicon</h3>
      <p>OpenROAD, OpenFASOC, cocotb, Chisel, Amaranth, Bluespec, and layout/verification flows worth turning into a practical hardware track.</p>
      <a href="https://github.com/stars/nikhil-garg/lists/asic-design"><i class="fab fa-github"></i>ASIC design</a>
      <a href="https://github.com/stars/nikhil-garg/lists/eda"><i class="fab fa-github"></i>EDA</a>
      <a href="https://github.com/stars/nikhil-garg/lists/pcb"><i class="fab fa-github"></i>PCB</a>
    </article>
    <article class="resource-card">
      <span class="resource-tag">Devices</span>
      <h3>RRAM, characterization, materials, and nanotechnology</h3>
      <p>Useful starting points for device-aware ML, RRAM design files, characterization workflows, and materials/nanotechnology exploration.</p>
      <a href="https://github.com/stars/nikhil-garg/lists/chips-rram"><i class="fab fa-github"></i>RRAM chips</a>
      <a href="https://github.com/stars/nikhil-garg/lists/charac"><i class="fab fa-github"></i>characterization</a>
      <a href="https://github.com/stars/nikhil-garg/lists/materials"><i class="fab fa-github"></i>materials</a>
    </article>
    <article class="resource-card">
      <span class="resource-tag">Simulation</span>
      <h3>Hardware-aware simulation and explainability</h3>
      <p>Repos that can support tutorials on device-to-system simulation, robustness, interpretability, and model-to-hardware translation.</p>
      <a href="https://github.com/stars/nikhil-garg/lists/hw-aware-sim"><i class="fab fa-github"></i>HW-aware sim</a>
      <a href="https://github.com/stars/nikhil-garg/lists/explainable-ai"><i class="fab fa-github"></i>explainable AI</a>
      <a href="https://github.com/stars/nikhil-garg/lists/raf"><i class="fab fa-github"></i>RAF</a>
    </article>
    <article class="resource-card">
      <span class="resource-tag">Communication</span>
      <h3>Figures, writing, and documentation</h3>
      <p>Tools for publication-quality figures, diagrams, documentation, and reproducible research notes.</p>
      <a href="https://github.com/stars/nikhil-garg/lists/diagrams-documentation"><i class="fab fa-github"></i>diagrams</a>
      <a href="https://github.com/stars/nikhil-garg/lists/writing"><i class="fab fa-github"></i>writing</a>
    </article>
  </div>
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
