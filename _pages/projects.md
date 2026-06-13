---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /portfolio/
---

Selected research and engineering projects across neuromorphic hardware, brain-computer interfaces, embedded systems, and bio-signal processing. Related papers are grouped on the [publications page](/publications/).

<nav class="project-nav" aria-label="Project sections">
  <a href="#swims">SWIMS</a>
  <a href="#vitfox">VITFOX</a>
  <a href="#unico">UNICO</a>
  <a href="#ionos">IONOS</a>
  <a href="#brain-computer-interfaces">BCI</a>
  <a href="#fpga-and-embedded-hardware">FPGA</a>
</nav>

<style>
.project-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1rem 0 1.35rem;
}
.project-nav a {
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #333;
  font-size: 0.82rem;
  line-height: 1;
  padding: 0.42rem 0.55rem;
  text-decoration: none;
}
.project-nav a:hover {
  border-color: #777;
  color: #111;
  text-decoration: none;
}
.project-card {
  background: #fff;
  border: 1px solid #dedede;
  border-left: 4px solid #526a7a;
  border-radius: 6px;
  margin: 1.75rem 0 2.25rem;
  padding: 1.05rem 1.15rem 1.15rem;
}
.project-card h2 {
  font-size: 1.22rem;
  margin-bottom: 0.25rem;
}
.project-meta {
  color: #555;
  font-size: 0.9rem;
  margin: 0 0 0.75rem;
}
.project-summary {
  color: #333;
  font-size: 0.98rem;
  line-height: 1.48;
  margin: 0.8rem 0;
}
.project-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.5rem 0 0.85rem;
}
.project-logo {
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  color: #333;
  display: inline-flex;
  align-items: center;
  gap: 0.28rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
  padding: 0.35rem 0.45rem;
  text-decoration: none;
  text-transform: uppercase;
}
.project-logo:hover {
  border-color: #777;
  color: #111;
  text-decoration: none;
}
.project-logo--funding {
  background: #f7f8fb;
  border-color: #bfc8d8;
}
.project-logo--lab {
  background: #f9f7f2;
  border-color: #d8cdbb;
}
.project-detail {
  margin: 0.25rem 0;
}
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.75rem 0;
}
.project-links a {
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #333;
  display: inline-flex;
  font-size: 0.82rem;
  line-height: 1;
  padding: 0.42rem 0.55rem;
  text-decoration: none;
}
.project-links a:hover {
  border-color: #777;
  color: #111;
  text-decoration: none;
}
.project-outputs {
  border-top: 1px solid #e6e6e6;
  color: #333;
  font-size: 0.82rem;
  margin: 0.95rem 0 0;
  padding-top: 0.8rem;
  text-transform: uppercase;
}
.project-output-list {
  display: grid;
  gap: 0.38rem;
  grid-template-columns: 1fr;
  list-style: none;
  margin-left: 0;
  margin-top: 0.45rem;
  padding-left: 0;
}
.project-output-list li {
  margin-bottom: 0;
}
.project-output-list a {
  color: #333;
  display: inline-block;
  line-height: 1.35;
}
@media (max-width: 640px) {
  .project-card {
    padding: 0.9rem;
  }
}
</style>

<section class="project-card" id="swims" markdown="1">

## SWIMS

<p class="project-meta">2026-present · Postdoctoral Researcher · University of Groningen</p>
<div class="project-logos">
  <a class="project-logo" href="https://www.rug.nl/" title="University of Groningen">UG</a>
  <a class="project-logo" href="https://www.rug.nl/research/fse/cognitive-systems-and-materials/" title="Groningen Cognitive Systems and Materials Center">CogniGron</a>
  <a class="project-logo project-logo--lab" href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/" title="Bio-Inspired Circuits and Systems group">BICS</a>
  <a class="project-logo project-logo--funding" href="https://erc.europa.eu/" title="European Research Council">ERC</a>
  <a class="project-logo project-logo--funding" href="https://cordis.europa.eu/" title="European Commission CORDIS project database">EU</a>
</div>

<p class="project-summary">Current work on stochastic spiking wireless multimodal sensory systems for adaptive, low-power neural interfaces.</p>

<p class="project-detail"><strong>Lab:</strong> <a href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/">Bio-Inspired Circuits and Systems group</a>, Zernike Institute for Advanced Materials / CogniGron.</p>
<p class="project-detail"><strong>Funding:</strong> ERC project SWIMS.</p>
<p class="project-detail"><strong>Focus:</strong> event-based sensing, spiking neural networks, wireless multimodal neural interfaces, mixed-signal neuromorphic circuits.</p>

<p class="project-links"><a href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/">Lab page</a> <a href="/cv/">CV</a></p>

</section>

<section class="project-card" id="vitfox" markdown="1">

## VITFOX

<p class="project-meta">2025-2026 · Postdoctoral Researcher · ETH Zurich</p>
<div class="project-logos">
  <a class="project-logo" href="https://ethz.ch/en.html" title="ETH Zurich">ETH</a>
  <a class="project-logo project-logo--lab" href="https://neo.ethz.ch/" title="Neuromorphic Electronics with Oxides group">NEO</a>
  <a class="project-logo project-logo--lab" href="https://iis.ee.ethz.ch/" title="Integrated Systems Laboratory, ETH Zurich">ISL</a>
  <a class="project-logo project-logo--funding" href="https://www.chips-ju.europa.eu/" title="Chips Joint Undertaking">CHIPS-JU</a>
  <a class="project-logo project-logo--funding" href="https://www.snf.ch/en" title="Swiss National Science Foundation">SNSF</a>
  <a class="project-logo project-logo--funding" href="https://www.chips-ju.europa.eu/" title="ViTFOX project">VITFOX</a>
</div>

<p class="project-summary">Ferroelectric-oxide hardware and algorithms for neural-network training, including energy-convergence tradeoffs and personalized EEG processing on emerging synaptic devices.</p>

<p class="project-detail"><strong>Lab:</strong> Neuromorphic Electronics with Oxides group, Integrated Systems Laboratory, ETH Zurich.</p>
<p class="project-detail"><strong>Funding/program:</strong> VITFOX ferroelectric-oxide neuromorphic hardware research.</p>
<p class="project-detail"><strong>Focus:</strong> ferroelectric synapses, device-aware learning, personalized spiking neural networks, energy-convergence analysis.</p>

<p class="project-links"><a href="https://github.com/NEO-ETHZ/EEG-Ferro">EEG-Ferro</a> <a href="https://github.com/nikhil-garg/Energy-convergence-Ferro-CCMCC2026">Energy-convergence-Ferro-CCMCC2026</a></p>

<p class="project-outputs"><strong>Outputs</strong></p>
<ul class="project-output-list">
  <li><a href="/publications/#personalized-spiking-neural-networks">Personalized spiking neural networks with ferroelectric synapses for EEG signal processing</a></li>
  <li><a href="/publications/#analog-weight-update-ferroelectric-hafnia">Analog Weight Update Rule in Ferroelectric Hafnia, Using picoJoule Programming Pulses</a></li>
  <li><a href="/publications/#energy-convergence-ferro">Energy-convergence trade off for the training of neural networks on bio-inspired hardware</a></li>
</ul>

</section>

<section class="project-card" id="unico" markdown="1">

## UNICO

<p class="project-meta">2021-2024 · PhD Candidate · Universite de Lille / Universite de Sherbrooke</p>
<div class="project-logos">
  <a class="project-logo project-logo--funding" href="https://www.chistera.eu/projects/unico" title="CHIST-ERA UNICO project">CHIST-ERA</a>
  <a class="project-logo" href="https://www.cnrs.fr/en" title="French National Centre for Scientific Research">CNRS</a>
  <a class="project-logo" href="https://www.univ-lille.fr/" title="Universite de Lille">U. Lille</a>
  <a class="project-logo" href="https://www.usherbrooke.ca/" title="Universite de Sherbrooke">UdeS</a>
  <a class="project-logo project-logo--lab" href="https://www.iemn.fr/" title="Institute of Electronics, Microelectronics and Nanotechnology">IEMN</a>
  <a class="project-logo project-logo--lab" href="https://www.usherbrooke.ca/ln2/" title="Laboratoire Nanotechnologies Nanosystemes">LN2</a>
  <a class="project-logo project-logo--funding" href="https://anr.fr/" title="French National Research Agency">ANR</a>
  <a class="project-logo project-logo--funding" href="https://www.nserc-crsng.gc.ca/" title="Natural Sciences and Engineering Research Council of Canada">NSERC</a>
</div>

<p class="project-summary">Unsupervised spiking neural networks with analog memristive devices for edge computing. The work covered voltage-dependent synaptic plasticity, memristive synapse modeling, simulation workflows, and mixed-signal ASIC prototypes for local learning.</p>

<p class="project-detail"><strong>Labs:</strong> IEMN-CNRS, France; LN2-CNRS, Canada.</p>
<p class="project-detail"><strong>Funding:</strong> CHIST-ERA Call 2018 ACAI, December 2019-December 2022, funding support 878,415.90 EUR.</p>
<p class="project-detail"><strong>Role:</strong> PhD research on learning rules, simulation, analog circuit interfaces, and memristor-integrated neuromorphic systems.</p>

<p class="project-links"><a href="https://www.chistera.eu/projects/unico">Project page</a> <a href="https://github.com/nikhil-garg/VDSP_Nengo">VDSP_Nengo</a> <a href="https://github.com/nikhil-garg/VDSP-Memristors">VDSP-Memristors</a> <a href="/talks/#2024">Talks</a></p>

<p class="project-outputs"><strong>UNICO outputs</strong></p>
<ul class="project-output-list">
  <li><a href="/publications/#phd-thesis">Neuromorphic in-memory learning with analog integrated circuits and nanoscale memristive devices</a></li>
  <li><a href="/publications/#vdsp-memristors">Unsupervised local learning based on voltage-dependent synaptic plasticity for resistive and ferroelectric synapses</a></li>
  <li><a href="/publications/#cmos-lif-neuron">Versatile CMOS analog LIF neuron for memristor-integrated neuromorphic circuits</a></li>
  <li><a href="/publications/#vdsp-convolutional-snn">Unsupervised and efficient learning in sparsely activated convolutional spiking neural networks</a></li>
  <li><a href="/publications/#voltage-dependent-synaptic-plasticity">Voltage-dependent synaptic plasticity: Unsupervised probabilistic Hebbian plasticity rule based on neurons membrane potential</a></li>
  <li><a href="/publications/#all-in-one-analog-ai-hardware">All-in-One Analog AI Hardware: On-Chip Training and Inference with Conductive-Metal-Oxide/HfOx ReRAM Devices</a></li>
</ul>

</section>

<section class="project-card" id="ionos" markdown="1">

## IONOS

<p class="project-meta">2020-2024 · Master's thesis and PhD-related research · CNRS / Universite de Sherbrooke</p>
<div class="project-logos">
  <a class="project-logo project-logo--funding" href="https://erc.europa.eu/" title="European Research Council">ERC</a>
  <a class="project-logo project-logo--funding" href="https://cordis.europa.eu/project/id/773228" title="Horizon 2020 ERC Consolidator Grant 773228">H2020</a>
  <a class="project-logo" href="https://www.cnrs.fr/en" title="French National Centre for Scientific Research">CNRS</a>
  <a class="project-logo" href="https://www.usherbrooke.ca/" title="Universite de Sherbrooke">UdeS</a>
  <a class="project-logo project-logo--lab" href="https://www.usherbrooke.ca/3it/en/" title="Interdisciplinary Institute for Technological Innovation">3IT</a>
  <a class="project-logo project-logo--lab" href="https://www.iemn.fr/" title="Institute of Electronics, Microelectronics and Nanotechnology">IEMN</a>
  <a class="project-logo project-logo--lab" href="https://www.usherbrooke.ca/ln2/" title="Laboratoire Nanotechnologies Nanosystemes">LN2</a>
</div>

<p class="project-summary">Iono-electronic neuromorphic interfaces for communication with living systems. My related work focused on analog-to-spike conversion workflows, EMG reservoir-computing experiments, and organic electrochemical transistor reservoir evaluation.</p>

<p class="project-detail"><strong>Coordinator:</strong> CNRS, France.</p>
<p class="project-detail"><strong>Funding:</strong> H2020 ERC Consolidator Grant, grant agreement 773228, November 2018-October 2024.</p>
<p class="project-detail"><strong>Role:</strong> Master's thesis and follow-on neuromorphic bio-signal processing work.</p>

<p class="project-links"><a href="https://cordis.europa.eu/project/id/773228">Project page</a> <a href="https://doi.org/10.3030/773228">DOI</a> <a href="https://github.com/nikhil-garg/EMG_exp">EMG_exp</a> <a href="/talks/#2021">Talks</a></p>

<p class="project-outputs"><strong>Outputs</strong></p>
<ul class="project-output-list">
  <li><a href="/publications/#oect-array-snn">Neuromorphic signal classification using organic electrochemical transistor array and spiking neural simulations</a></li>
  <li><a href="/publications/#pedot-structural-plasticity">Structural plasticity for neuromorphic networks with electropolymerized dendritic PEDOT connections</a></li>
  <li><a href="/publications/#signals-to-spikes-emg">Signals to spikes for neuromorphic regulated reservoir computing and EMG hand gesture recognition</a></li>
</ul>

</section>

<section class="project-card" id="brain-computer-interfaces" markdown="1">

## Brain-Computer Interfaces

<p class="project-meta">2017-2021 · Undergraduate Student Researcher · BITS Pilani Goa</p>
<div class="project-logos">
  <a class="project-logo" href="https://www.bits-pilani.ac.in/goa/" title="BITS Pilani, Goa Campus">BITS Goa</a>
  <a class="project-logo project-logo--lab" href="https://www.bits-pilani.ac.in/goa/" title="Cognitive Neuroscience Lab, BITS Pilani Goa">CNL</a>
  <a class="project-logo project-logo--funding" href="/projects/#brain-computer-interfaces" title="Brain-computer interface research">BCI</a>
</div>

<p class="project-summary">Real-time EEG and machine-learning pipelines for assistive technology, motor imagery, biometric authentication, cognitive-state estimation, and portable-headset emotion decoding.</p>

<p class="project-detail"><strong>Lab:</strong> Cognitive Neuroscience Lab, BITS Pilani Goa.</p>
<p class="project-detail"><strong>Role:</strong> undergraduate research on EEG acquisition, feature extraction, machine learning, and assistive BCI prototypes.</p>

<p class="project-links"><a href="https://github.com/nikhil-garg/Decoding_EEG">Decoding_EEG</a> <a href="/talks/#2021">Talks</a></p>

<p class="project-outputs"><strong>Outputs</strong></p>
<ul class="project-output-list">
  <li><a href="/publications/#portable-eeg-valence-arousal">Decoding the neural signatures of valence and arousal from portable EEG headset</a></li>
  <li><a href="/publications/#alzheimer-bert-speech">Alzheimer's dementia detection using acoustic and linguistic features and pre-trained BERT</a></li>
  <li><a href="/publications/#wheelchair-hybrid-bci">Wheelchair automation by a hybrid BCI system using SSVEP and eye blinks</a></li>
  <li><a href="/publications/#motor-imagery-biometrics">Motor Imagery Based Multimodal Biometric User Authentication System Using EEG</a></li>
  <li><a href="/publications/#motor-imagery-multiclass">Study of motor imagery for multiclass brain system interface with a special focus in the same limb movement</a></li>
</ul>

</section>

<section class="project-card" id="fpga-and-embedded-hardware" markdown="1">

## FPGA and Embedded Hardware

<p class="project-meta">2017-2020, 2025 · Undergraduate research and postdoctoral supervision · BITS Pilani Goa / ETH Zurich</p>
<div class="project-logos">
  <a class="project-logo" href="https://www.bits-pilani.ac.in/goa/" title="BITS Pilani, Goa Campus">BITS Goa</a>
  <a class="project-logo project-logo--lab" href="https://www.bits-pilani.ac.in/goa/" title="Reconfigurable Computing Lab, BITS Pilani Goa">RCL</a>
  <a class="project-logo" href="https://ethz.ch/en.html" title="ETH Zurich">ETH</a>
  <a class="project-logo project-logo--lab" href="https://neo.ethz.ch/" title="Neuromorphic Electronics with Oxides group">NEO</a>
  <a class="project-logo project-logo--funding" href="/projects/#fpga-and-embedded-hardware" title="FPGA and embedded hardware work">FPGA</a>
</div>

<p class="project-summary">FPGA, PCB, and hardware-software co-design work for memory characterization, embedded acceleration, ADC/DAC interfacing, and signal-processing systems.</p>

<p class="project-detail"><strong>Labs:</strong> Reconfigurable Computing Lab, BITS Pilani Goa; Neuromorphic Electronics with Oxides group, ETH Zurich.</p>
<p class="project-detail"><strong>Roles:</strong> undergraduate researcher; later supervisor for FPGA-based memristor crossbar characterization work.</p>

<p class="project-links"><a href="/cv/#student-supervision">Student supervision</a></p>

<p class="project-outputs"><strong>Outputs</strong></p>
<ul class="project-output-list">
  <li><a href="/cv/#student-supervision">FPGA-based memristor crossbar array characterization framework</a></li>
</ul>

</section>
