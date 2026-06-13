---
layout: archive
title: "Teaching & Community"
permalink: /teaching/
author_profile: true
---

Curated paths for building foundations in biosignals, machine learning, electronics, and neuromorphic hardware. This page is meant to be a working syllabus: start with concepts, move to code and circuits, then use the video archive and open-source lists for depth.

<style>
.teaching-quicklinks,
.resource-grid,
.path-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 1rem 0 1.5rem;
}
.teaching-card,
.resource-card,
.path-card {
  border: 1px solid #dedede;
  border-radius: 7px;
  padding: 0.85rem 0.95rem;
}
.teaching-card h2,
.resource-card h3,
.path-card h3 {
  font-size: 1rem;
  line-height: 1.25;
  margin: 0 0 0.25rem;
}
.teaching-card p,
.resource-card p,
.path-card p {
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
.path-card {
  display: grid;
  gap: 0.6rem;
}
.path-card__meta {
  color: #666;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.76rem;
  gap: 0.3rem 0.6rem;
  text-transform: uppercase;
}
.path-card__steps {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
.path-card__steps li {
  border-top: 1px solid #ececec;
  color: #444;
  font-size: 0.84rem;
  line-height: 1.35;
  margin: 0;
  padding: 0.42rem 0 0;
}
.path-card__steps li + li {
  margin-top: 0.42rem;
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
  .resource-grid,
  .path-grid {
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
    <h2>Learning Paths</h2>
    <p>Four routes through biosignals, ML, electronics, and neuromorphic systems.</p>
    <a href="#learning-paths"><i class="fas fa-route"></i>start</a>
  </section>
  <section class="teaching-card">
    <h2>Core Readings</h2>
    <p>Papers and books that anchor the learning paths, with short notes.</p>
    <a href="#core-readings"><i class="fas fa-book-open"></i>read</a>
  </section>
  <section class="teaching-card">
    <h2>Open-source Tools</h2>
    <p>Starred repositories grouped by practical skill: data, models, silicon, and writing.</p>
    <a href="#open-source-map"><i class="fab fa-github"></i>explore</a>
  </section>
  <section class="teaching-card">
    <h2>Practice</h2>
    <p>Small project ideas, reproducible notebooks, and community resources to add next.</p>
    <a href="#practice"><i class="fas fa-tools"></i>build</a>
  </section>
</div>

<section class="reading-section" id="learning-paths">
  <h2>Learning Paths</h2>
  <div class="path-grid">
    <article class="path-card">
      <div><span class="resource-tag">Path 1</span><h3>BCI and Biosignals</h3><p>From EEG/EMG signals to features, decoding, and assistive interfaces.</p></div>
      <div class="path-card__meta"><span>Signals</span><span>ML</span><span>Evaluation</span></div>
      <ul class="path-card__steps">
        <li>Start with EEGNet and portable EEG decoding to understand baselines.</li>
        <li>Use the EEG/ECoG, fNIRS, and EMG GitHub star lists for datasets and preprocessing.</li>
        <li>Connect to BCI publications and project outputs on this site.</li>
      </ul>
    </article>
    <article class="path-card">
      <div><span class="resource-tag">Path 2</span><h3>Neuromorphic Algorithms</h3><p>Spiking neural networks, local learning rules, reservoirs, and event-driven encodings.</p></div>
      <div class="path-card__meta"><span>SNN</span><span>VDSP</span><span>Reservoirs</span></div>
      <ul class="path-card__steps">
        <li>Begin with VDSP and signal-to-spike work, then compare with SNN tool repositories.</li>
        <li>Use Neuropac videos for field-level lectures and workshop context.</li>
        <li>Follow through to device-aware learning in VITFOX and UNICO.</li>
      </ul>
    </article>
    <article class="path-card">
      <div><span class="resource-tag">Path 3</span><h3>Electronics and Open Hardware</h3><p>Analog circuits, FPGA workflows, PCB design, and open-source EDA.</p></div>
      <div class="path-card__meta"><span>CMOS</span><span>FPGA</span><span>EDA</span></div>
      <ul class="path-card__steps">
        <li>Use basic analog/CMOS references alongside ASIC, EDA, and PCB star lists.</li>
        <li>Bridge into CMOS LIF neurons and FPGA characterization workflows.</li>
        <li>Turn repo examples into small reproducible lab exercises.</li>
      </ul>
    </article>
    <article class="path-card">
      <div><span class="resource-tag">Path 4</span><h3>Devices to Systems</h3><p>RRAM, ferroelectric hafnia, OECTs, PCM, and hardware-aware simulation.</p></div>
      <div class="path-card__meta"><span>Devices</span><span>Materials</span><span>Simulation</span></div>
      <ul class="path-card__steps">
        <li>Use materials, device, characterization, and HW-aware simulation star lists.</li>
        <li>Read UNICO, IONOS, and VITFOX outputs as case studies.</li>
        <li>Map each device paper to its model, circuit interface, and learning task.</li>
      </ul>
    </article>
  </div>
</section>

<section class="reading-section" id="neuropac">
  <h2>Video Archive</h2>
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

<section class="reading-section" id="core-readings">
  <h2>Core Readings</h2>
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

<section class="reading-section" id="practice">
  <h2>Practice and Community</h2>
  <div class="resource-grid">
    <article class="resource-card">
      <span class="resource-tag">Exercises</span>
      <h3>Reproducible mini-projects</h3>
      <p>Small notebooks and lab sheets can be organized around EEG decoding, SNN simulation, FPGA interfacing, and device-aware learning.</p>
    </article>
    <article class="resource-card">
      <span class="resource-tag">Mentoring</span>
      <h3>Student project ideas</h3>
      <p>Short scoped projects can link back to publications, code repositories, and people pages.</p>
    </article>
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
