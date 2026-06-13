---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.cv-timeline {
  border-left: 1px solid #d9d9d9;
  margin: 1rem 0 1.75rem;
  padding-left: 1rem;
}
.cv-item {
  border: 1px solid #dedede;
  border-radius: 6px;
  margin: 0 0 0.9rem;
  padding: 0.85rem 0.95rem;
  position: relative;
}
.cv-item::before {
  background: #526a7a;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #526a7a;
  content: "";
  height: 0.5rem;
  left: -1.28rem;
  position: absolute;
  top: 1rem;
  width: 0.5rem;
}
.cv-date {
  color: #555;
  font-size: 0.82rem;
  font-weight: 700;
  margin: 0 0 0.2rem;
}
.cv-title {
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
}
.cv-place,
.cv-note {
  color: #444;
  font-size: 0.92rem;
  margin: 0.25rem 0 0;
}
.cv-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0.55rem 0 0;
}
.cv-links a {
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #333;
  font-size: 0.8rem;
  line-height: 1;
  padding: 0.36rem 0.48rem;
  text-decoration: none;
}
.cv-links a:hover {
  border-color: #777;
  color: #111;
  text-decoration: none;
}
.cv-compact-list {
  border-top: 1px solid #dedede;
  margin: 0.8rem 0 1.4rem;
}
.cv-compact-list p {
  border-bottom: 1px solid #ececec;
  font-size: 0.92rem;
  margin: 0;
  padding: 0.52rem 0;
}
.cv-compact-list strong {
  color: #444;
  display: inline-block;
  min-width: 9rem;
}
.cv-institution-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 0.85rem;
}
.cv-institution-period {
  border-top: 1px solid #dedede;
  margin-top: 1.2rem;
  padding-top: 0.9rem;
}
.cv-institution-period h3 {
  font-size: 1rem;
  margin: 0;
}
.cv-institution-period p {
  color: #555;
  font-size: 0.84rem;
  line-height: 1.4;
  margin: 0.2rem 0 0.45rem;
}
.cv-institution-card {
  border: 1px solid #dedede;
  border-radius: 7px;
  display: grid;
  gap: 0.7rem;
  grid-template-columns: 92px 1fr;
  min-width: 0;
  padding: 0.75rem;
}
.cv-institution-media {
  align-items: center;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  display: flex;
  height: 70px;
  justify-content: center;
  overflow: hidden;
  padding: 0.35rem;
}
.cv-institution-media img {
  display: block;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
.cv-institution-media--initials {
  color: #526a7a;
  font-size: 1rem;
  font-weight: 700;
}
.cv-institution-place {
  align-items: center;
  display: flex;
  gap: 0.45rem;
  margin-top: 0.45rem;
}
.cv-institution-place img {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  height: 42px;
  object-fit: cover;
  width: 62px;
}
.cv-institution-place span {
  margin-top: 0;
}
.cv-institution-card strong {
  display: block;
  line-height: 1.2;
}
.cv-institution-card span {
  color: #555;
  display: block;
  font-size: 0.8rem;
  line-height: 1.32;
  margin-top: 0.18rem;
}
.cv-institution-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.28rem 0.55rem;
  margin-top: 0.38rem;
}
.cv-institution-links a {
  font-size: 0.78rem;
  white-space: nowrap;
}
.cv-institution-grid {
  margin-bottom: 1rem;
}
@media (max-width: 720px) {
  .cv-institution-grid {
    grid-template-columns: 1fr;
  }
}
</style>

## Research Appointments

<div class="cv-timeline">
<article class="cv-item" markdown="1">
<p class="cv-date">February 2026 - present</p>
<p class="cv-title">Postdoctoral Researcher</p>
<p class="cv-place"><a href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/">Bio-Inspired Circuits and Systems group</a>, University of Groningen, Netherlands</p>
<p class="cv-note">ERC SWIMS: stochastic spiking wireless multimodal sensory systems.</p>
<p class="cv-links"><a href="/projects/#swims">SWIMS</a></p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">February 2025 - February 2026</p>
<p class="cv-title">Postdoctoral Researcher</p>
<p class="cv-place"><a href="https://neo.ethz.ch/">Neuromorphic Electronics with Oxides group</a>, ETH Zurich, Switzerland</p>
<p class="cv-note">Ferroelectric-oxide devices and bio-inspired computing.</p>
<p class="cv-links"><a href="/projects/#vitfox">VITFOX</a> <a href="/publications/#vitfox--ferroelectric-learning">Publications</a></p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">January 2025</p>
<p class="cv-title">Career Break</p>
<p class="cv-place">India</p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">September 2022 - December 2024</p>
<p class="cv-title">Doctoral Researcher</p>
<p class="cv-place">LN2-CNRS / Universite de Sherbrooke, Canada</p>
<p class="cv-note">Neuromorphic in-memory learning with analog circuits and nanoscale memristive devices.</p>
<p class="cv-links"><a href="/projects/#unico">UNICO</a> <a href="/projects/#ionos">IONOS</a> <a href="/publications/#unico--in-memory-learning">Publications</a></p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">February 2023 - October 2024</p>
<p class="cv-title">Research Professional</p>
<p class="cv-place">3IT.AI / Universite de Sherbrooke, Canada</p>
<p class="cv-note">Applied neuromorphic and AI workflows during the PhD.</p>
<p class="cv-links"><a href="/projects/#unico">UNICO</a> <a href="/projects/#ionos">IONOS</a></p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">October 2021 - September 2022</p>
<p class="cv-title">Doctoral Researcher</p>
<p class="cv-place">IEMN-CNRS / University of Lille, France</p>
<p class="cv-note">Neuromorphic circuits, SNNs, and hardware-compatible learning rules.</p>
<p class="cv-links"><a href="/projects/#unico">UNICO</a> <a href="/publications/#unico--in-memory-learning">Publications</a></p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">May 2020 - August 2020</p>
<p class="cv-title">Master's Thesis / Graduate Research</p>
<p class="cv-place">3IT, Universite de Sherbrooke, Canada</p>
<p class="cv-note">Neuromorphic reservoir computing and signal-to-spike encoding.</p>
<p class="cv-links"><a href="/projects/#ionos">IONOS</a> <a href="/publications/#ionos--bio-signal-processing">Publications</a></p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">September 2017 - March 2020</p>
<p class="cv-title">Undergraduate Student Researcher</p>
<p class="cv-place">Cognitive Neuroscience Lab, BITS Pilani Goa, India</p>
<p class="cv-note">EEG-based BCI, assistive interfaces, biometrics, and cognitive-state estimation.</p>
<p class="cv-links"><a href="/projects/#brain-computer-interfaces">BCI</a> <a href="/publications/#bci--eeg">Publications</a></p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">December 2017 - January 2020</p>
<p class="cv-title">Undergraduate Student Researcher</p>
<p class="cv-place">Reconfigurable Computing Lab, BITS Pilani Goa, India</p>
<p class="cv-note">FPGA acceleration, reflectometry-data analysis, and hardware-software co-design.</p>
<p class="cv-links"><a href="/projects/#fpga-and-embedded-hardware">FPGA and embedded hardware</a></p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">May 2019 - July 2019</p>
<p class="cv-title">Research Intern</p>
<p class="cv-place">Neuromorphic and NVM Research Group, IIT Delhi, India</p>
<p class="cv-note">FPGA-controlled characterization hardware for non-volatile memory devices.</p>
</article>

<article class="cv-item" markdown="1">
<p class="cv-date">May 2018 - July 2018</p>
<p class="cv-title">Industrial Trainee, R&D</p>
<p class="cv-place">Maruti Suzuki India Limited, Gurgaon, India</p>
<p class="cv-note">Electronic-system development and testing for wireless charging integration.</p>
</article>
</div>

<section id="places-labs-funding">
  <h2>Places, Labs, and Funding Context</h2>

  <section class="cv-institution-period">
    <h3>2026-present · Netherlands</h3>
    <p>Current postdoctoral context and neuromorphic circuit research environment.</p>
    <div class="cv-institution-grid">
    <a class="cv-institution-card" href="https://www.rug.nl/">
      <span class="cv-institution-media"><img src="/images/logos/university-of-groningen-logo.png" alt="University of Groningen"></span>
      <span><strong>University of Groningen</strong><span>SWIMS · current postdoctoral affiliation</span><span class="cv-institution-links">SWIMS</span></span>
    </a>
    <a class="cv-institution-card" href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/">
      <span class="cv-institution-media"><img src="/images/logos/bics-logo.png" alt="BICS"></span>
      <span><strong>Bio-Inspired Circuits and Systems</strong><span>Mixed-signal and neuromorphic circuits group</span><span class="cv-institution-links">SWIMS</span></span>
    </a>
    </div>
  </section>

  <section class="cv-institution-period">
    <h3>2024-2026 · Switzerland</h3>
    <p>Postdoctoral VITFOX work on ferroelectric synapses, device-aware learning, and FPGA-assisted characterization.</p>
    <div class="cv-institution-grid">
    <a class="cv-institution-card" href="https://ethz.ch/en.html">
      <span class="cv-institution-media"><img src="/images/logos/eth-logo.png" alt="ETH Zurich"></span>
      <span><strong>ETH Zurich</strong><span>VITFOX and FPGA supervision period</span><span class="cv-institution-links">VITFOX · FPGA</span></span>
    </a>
    <a class="cv-institution-card" href="https://neo.ethz.ch/">
      <span class="cv-institution-media"><img src="/images/logos/neo-ethz-logo.svg" alt="NEO ETH Zurich"></span>
      <span><strong>Neuromorphic Electronics with Oxides</strong><span>Ferroelectric and oxide neuromorphic hardware</span><span class="cv-institution-links">VITFOX</span></span>
    </a>
    <a class="cv-institution-card" href="https://www.zurich.ibm.com/">
      <span class="cv-institution-media cv-institution-media--initials">IBM</span>
      <span><strong>IBM Research Zurich</strong><span>VITFOX coauthor network around ferroelectric and analog hardware publications</span><span class="cv-institution-links">VITFOX</span></span>
    </a>
    </div>
  </section>

  <section class="cv-institution-period">
    <h3>2020-2024 · France and Canada</h3>
    <p>PhD and collaborative UNICO/IONOS ecosystem across IEMN, LN2, IM2NP, C2N, CNRS, and CHIST-ERA.</p>
    <div class="cv-institution-grid">
    <a class="cv-institution-card" href="https://www.iemn.fr/">
      <span class="cv-institution-media"><img src="/images/logos/iemn-logo.png" alt="IEMN"></span>
      <span><strong>IEMN</strong><span>UNICO and IONOS lab context in Lille</span><span class="cv-institution-links">UNICO · IONOS</span><span class="cv-institution-place"><img src="/images/places/iemn-building.jpg" alt="IEMN building"><span>Villeneuve-d'Ascq, France</span></span></span>
    </a>
    <a class="cv-institution-card" href="https://www.usherbrooke.ca/ln2/">
      <span class="cv-institution-media"><img src="/images/logos/ln2-logo.png" alt="LN2"></span>
      <span><strong>LN2</strong><span>Laboratoire Nanotechnologies Nanosystemes, Sherbrooke</span><span class="cv-institution-links">UNICO · IONOS</span><span class="cv-institution-place"><img src="/images/places/ln2-building.png" alt="LN2 building"><span>Sherbrooke, Canada</span></span></span>
    </a>
    <a class="cv-institution-card" href="https://www.cnrs.fr/en">
      <span class="cv-institution-media"><img src="/images/logos/cnrs-logo.jpg" alt="CNRS"></span>
      <span><strong>CNRS</strong><span>French national research network and project/funding ecosystem</span><span class="cv-institution-links">UNICO · IONOS</span></span>
    </a>
    <a class="cv-institution-card" href="https://www.im2np.fr/">
      <span class="cv-institution-media"><img src="/images/logos/im2np-logo.png" alt="IM2NP"></span>
      <span><strong>IM2NP</strong><span>Aix-Marseille memristive devices and UNICO collaborations</span><span class="cv-institution-links">UNICO</span></span>
    </a>
    <a class="cv-institution-card" href="https://www.c2n.universite-paris-saclay.fr/">
      <span class="cv-institution-media"><img src="/images/logos/c2n-logo.png" alt="C2N"></span>
      <span><strong>C2N</strong><span>Paris-Saclay neuromorphic and memristive hardware collaboration network</span><span class="cv-institution-links">UNICO</span></span>
    </a>
    <a class="cv-institution-card" href="https://www.chistera.eu/">
      <span class="cv-institution-media"><img src="/images/logos/chist-era-logo.jpg" alt="CHIST-ERA"></span>
      <span><strong>CHIST-ERA</strong><span>European funding network connected to UNICO-style collaborative projects</span><span class="cv-institution-links">Funding</span></span>
    </a>
    </div>
  </section>

  <section class="cv-institution-period">
    <h3>2017-2020 · India</h3>
    <p>Undergraduate BCI, embedded hardware, FPGA, and early publication network at BITS Pilani Goa.</p>
    <div class="cv-institution-grid">
    <a class="cv-institution-card" href="https://www.bits-pilani.ac.in/goa/">
      <span class="cv-institution-media"><img src="/images/logos/bits-logo.png" alt="BITS Pilani"></span>
      <span><strong>BITS Pilani Goa</strong><span>Undergraduate BCI and FPGA research</span><span class="cv-institution-links">BCI · FPGA</span></span>
    </a>
    <a class="cv-institution-card" href="https://www.bits-pilani.ac.in/goa/">
      <span class="cv-institution-media"><img src="/images/logos/cns-bits-goa.jpg" alt="Cognitive Neuroscience Lab"></span>
      <span><strong>Cognitive Neuroscience Lab</strong><span>EEG, BCI, affect decoding, motor imagery, and assistive interface work</span><span class="cv-institution-links">BCI</span></span>
    </a>
    <a class="cv-institution-card" href="https://www.bits-pilani.ac.in/goa/">
      <span class="cv-institution-media"><img src="/images/logos/rcl-bits-goa.jpg" alt="Reconfigurable Computing Lab"></span>
      <span><strong>Reconfigurable Computing Lab</strong><span>FPGA, PCB, ADC/DAC interfacing, and embedded hardware-software co-design</span><span class="cv-institution-links">FPGA</span></span>
    </a>
    </div>
  </section>
</section>


## Education

**PhD, Electronics, Microelectronics, Nanotechnology and Microwaves / Electrical Engineering**  
University of Lille and Universite de Sherbrooke  
October 2021 - December 2024

**MSc, Biological Sciences**  
Birla Institute of Technology and Science Pilani, Goa  
2016 - 2021  
Thesis research at 3IT, Universite de Sherbrooke: neuromorphic reservoir computing for neurophysiological signal processing.

**BE, Electrical and Electronics Engineering**  
Birla Institute of Technology and Science Pilani, Goa  
2016 - 2021

## Research Interests

* Signal processing and machine learning for brain-computer interfaces and bio-signal processing
* Neuromorphic engineering and spiking neural networks for edge computing and low-power systems
* Hardware-software co-design for embedded and intelligent systems
* Mixed-signal IC design with emerging technologies

## Skills

* **Programming:** Python, MATLAB, Verilog, SPICE, C/C++
* **EDA and hardware tools:** Xilinx Vivado, Cadence Virtuoso, Altium Designer
* **Machine learning frameworks:** PyTorch, TensorFlow, Nengo
* **Hardware design:** FPGA, ASIC, PCB design, ADC/DAC interfaces, SPI, I2C
* **IC experience:** analog and mixed-signal neuromorphic circuits in 130 nm with 3D-integrated emerging non-volatile memory devices

## Student Supervision

Student and collaborator pages are maintained in the [People](/people/); the CV keeps only the supervision timeline.

<div class="cv-compact-list" markdown="1">
<p><strong>Apr-Jul 2026</strong> <a href="/people/eric-sebastian-hallen/">Eric Sebastian Hallen</a>, <a href="/people/eelco/">Eelco</a> · University of Groningen</p>
<p><strong>Oct 2025-Jul 2026</strong> <a href="/people/matteo-mazza/">Matteo Mazza</a> · ETH Zurich</p>
<p><strong>Aug-Dec 2025</strong> <a href="/people/anxiong-song/">Anxiong Song</a>, <a href="/people/niklas-plessnig/">Niklas Plessnig</a> · ETH Zurich</p>
<p><strong>May-Aug 2025</strong> <a href="/people/marc-rautmann/">Marc Rautmann</a>, <a href="/people/lara-prelij/">Lara Prelij</a>, <a href="/people/sohil-khan/">Sohil Khan</a> · ETH Zurich</p>
<p><strong>Feb-Jun 2025</strong> <a href="/people/jeff-ren/">Jeff Ren</a> · ETH Zurich</p>
<p><strong>2021-2022</strong> <a href="/people/guillaume-goupy/">Guillaume Goupy</a> · Universite de Sherbrooke · <a href="/publications/#vdsp-convolutional-snn">publication</a></p>
<p><strong>2020-2021</strong> <a href="/people/rohit-garg/">Rohit Garg</a> · BITS Pilani Goa · <a href="/publications/#portable-eeg-valence-arousal">publication</a></p>
<p><strong>2019-2020</strong> <a href="/people/akshay-valsaraj/">Akshay Valsaraj</a>, <a href="/people/ishaan-madala/">Ithihas Madala</a> · BITS Pilani Goa · <a href="/publications/#bci--eeg">publications</a></p>
</div>

## Teaching, Service, and Outreach

* **Video Editor**, [NeuroPAC](https://www.neuropac.info/video-category/), January 2022 - December 2024.
* **Course Instructor**, Center for Technical Education, BITS Pilani Goa, August 2018 - December 2018: introductory machine learning course.

## Certifications

* Qiskit Global Summer School
* An Introduction to Consumer Neuroscience and Neuromarketing
* Intermediate Python for Data Science
* Writing in the Sciences
* Nanotechnology: A Maker's Course
