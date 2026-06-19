---
layout: archive
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.cv-timeline {
  border-top: 1px solid #dedede;
  margin: 0.8rem 0 1.75rem;
}
.cv-item {
  border-bottom: 1px solid #ececec;
  display: grid;
  gap: 1.1rem;
  grid-template-columns: 9.5rem minmax(0, 1fr);
  padding: 0.72rem 0;
}
.cv-date {
  color: #666;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  margin: 0.12rem 0 0;
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
  margin: 0.16rem 0 0;
}
.cv-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0.4rem 0 0;
}
.cv-links a,
.cv-supervision-grid .cv-ref {
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #333;
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.28rem 0.42rem;
  text-decoration: none;
  white-space: nowrap;
}
.cv-links a:hover,
.cv-supervision-grid .cv-ref:hover {
  border-color: #777;
  color: #111;
  text-decoration: none;
}
.cv-affiliation-list,
.cv-simple-list,
.cv-education-list,
.cv-supervision-grid {
  border-top: 1px solid #dedede;
  margin: 0.8rem 0 1.4rem;
}
.cv-simple-list p {
  border-bottom: 1px solid #ececec;
  font-size: 0.92rem;
  margin: 0;
  padding: 0.54rem 0;
}
.cv-simple-list strong {
  color: #444;
  display: inline-block;
  min-width: 9rem;
}
.cv-simple-list em {
  color: #666;
  display: block;
  font-size: 0.85rem;
  font-style: normal;
  margin-top: 0.12rem;
}
.cv-affiliation-row {
  align-items: start;
  border-bottom: 1px solid #ececec;
  display: grid;
  gap: 1rem;
  grid-template-columns: 9.5rem minmax(0, 1fr);
  padding: 0.62rem 0;
}
.cv-affiliation-period {
  color: #666;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}
.cv-affiliation-name {
  color: #333;
  font-size: 0.92rem;
  line-height: 1.35;
  margin: 0;
}
.cv-affiliation-logos {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem;
  margin-top: 0.38rem;
}
.cv-affiliation-logo {
  align-items: center;
  border: 1px solid #dedede;
  border-radius: 4px;
  display: inline-flex;
  height: 2.05rem;
  justify-content: center;
  padding: 0.2rem 0.36rem;
  text-decoration: none;
}
.cv-affiliation-logo:hover {
  border-color: #777;
}
.cv-affiliation-logo img {
  display: block;
  max-height: 1.55rem;
  max-width: 5.4rem;
  object-fit: contain;
}
.cv-education-row,
.cv-supervision-row {
  border-bottom: 1px solid #ececec;
  display: grid;
  font-size: 0.9rem;
  gap: 1rem;
  line-height: 1.35;
  padding: 0.56rem 0;
}
.cv-education-row {
  grid-template-columns: minmax(4.5rem, 0.22fr) minmax(0, 1.1fr) minmax(12rem, 0.7fr) minmax(5rem, 0.25fr);
}
.cv-supervision-row {
  grid-template-columns: minmax(9rem, 0.8fr) minmax(0, 1.7fr) minmax(5.2rem, 0.35fr) minmax(10rem, 0.75fr) minmax(7rem, 0.5fr);
}
.cv-grid-head {
  color: #666;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 0.42rem 0;
  text-transform: uppercase;
}
.cv-degree,
.cv-student {
  font-weight: 700;
}
.cv-institution,
.cv-year,
.cv-affiliation {
  color: #555;
}
.cv-education-detail {
  color: #666;
  display: block;
  font-size: 0.82rem;
  margin-top: 0.12rem;
}
.cv-ref-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.28rem;
}
.cv-muted {
  color: #777;
}
.cv-empty {
  display: none;
}
@media (max-width: 720px) {
  .cv-affiliation-row,
  .cv-item {
    grid-template-columns: 1fr;
  }
  .cv-affiliation-row {
    gap: 0.25rem;
  }
  .cv-grid-head {
    display: none;
  }
  .cv-education-row,
  .cv-supervision-row {
    gap: 0.16rem;
    grid-template-columns: 1fr;
    padding: 0.62rem 0;
  }
  .cv-education-row > div::before,
  .cv-supervision-row > div::before {
    color: #777;
    content: attr(data-label);
    display: block;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
}
</style>

## Research Appointments

<div class="cv-timeline">
<article class="cv-item" markdown="1">
<div>
<p class="cv-date">February 2026 - present</p>
</div>
<div>
<p class="cv-title">Postdoctoral Researcher</p>
<p class="cv-place"><a href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/">Bio-Inspired Circuits and Systems group</a>, University of Groningen, Netherlands</p>
<p class="cv-note">Zernike Institute for Advanced Materials / CogniGron. ERC SWIMS: stochastic spiking wireless multimodal sensory system.</p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">February 2025 - February 2026</p>
</div>
<div>
<p class="cv-title">Postdoctoral Researcher</p>
<p class="cv-place"><a href="https://neo.ethz.ch/">Neuromorphic Electronics with Oxides group</a>, ETH Zurich, Switzerland</p>
<p class="cv-note">Integrated Systems Laboratory, ITET. CHIPS-JU ViTFOX and SNSF ROSUBIO work on ferroelectric oxides for bio-inspired computing.</p>
<p class="cv-links"><a href="/publications/#personalized-spiking-neural-networks">Publications</a></p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">September 2022 - December 2024</p>
</div>
<div>
<p class="cv-title">Doctoral Researcher</p>
<p class="cv-place">LN2-CNRS / Université de Sherbrooke, Canada</p>
<p class="cv-note">Neuromorphic in-memory learning with analog circuits and nanoscale memristive devices.</p>
<p class="cv-links"><a href="/publications/#vdsp-memristors">Publications</a></p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">February 2023 - October 2024</p>
</div>
<div>
<p class="cv-title">Research Professional</p>
<p class="cv-place">3IT.AI / Université de Sherbrooke, Canada</p>
<p class="cv-note">Applied neuromorphic and AI workflows during the PhD.</p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">October 2021 - September 2022</p>
</div>
<div>
<p class="cv-title">Doctoral Researcher</p>
<p class="cv-place">IEMN-CNRS / University of Lille, France</p>
<p class="cv-note">Neuromorphic circuits, SNNs, and hardware-compatible learning rules.</p>
<p class="cv-links"><a href="/publications/#vdsp-memristors">Publications</a></p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">May 2020 - August 2020</p>
</div>
<div>
<p class="cv-title">Master’s Thesis / Graduate Research</p>
<p class="cv-place">3IT, Université de Sherbrooke, Canada</p>
<p class="cv-note">Neuromorphic reservoir computing and signal-to-spike encoding.</p>
<p class="cv-links"><a href="/publications/#signals-to-spikes-emg">Publications</a></p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">September 2017 - March 2020</p>
</div>
<div>
<p class="cv-title">Undergraduate Student Researcher</p>
<p class="cv-place">Cognitive Neuroscience Lab, BITS Pilani Goa, India</p>
<p class="cv-note">EEG-based BCI, assistive interfaces, biometrics, and cognitive-state estimation.</p>
<p class="cv-links"><a href="/publications/#portable-eeg-valence-arousal">Publications</a></p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">December 2017 - January 2020</p>
</div>
<div>
<p class="cv-title">Undergraduate Student Researcher</p>
<p class="cv-place">Reconfigurable Computing Lab, BITS Pilani Goa, India</p>
<p class="cv-note">FPGA acceleration, reflectometry-data analysis, and hardware-software co-design.</p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">May 2019 - July 2019</p>
</div>
<div>
<p class="cv-title">Research Intern</p>
<p class="cv-place">Neuromorphic and NVM Research Group, IIT Delhi, India</p>
<p class="cv-note">FPGA-controlled characterization hardware for non-volatile memory devices.</p>
</div>
</article>

<article class="cv-item" markdown="1">
<div>
<p class="cv-date">May 2018 - July 2018</p>
</div>
<div>
<p class="cv-title">Industrial Trainee, R&D</p>
<p class="cv-place">Maruti Suzuki India Limited, Gurgaon, India</p>
<p class="cv-note">Electronic-system development and testing for wireless charging integration.</p>
</div>
</article>
</div>

<section id="places-labs">
  <h2>Affiliations</h2>
  <div class="cv-affiliation-list">
  <div class="cv-affiliation-row">
    <div class="cv-affiliation-period">2026-present</div>
    <div>
      <p class="cv-affiliation-name">University of Groningen; Bio-Inspired Circuits and Systems</p>
      <div class="cv-affiliation-logos">
        <a class="cv-affiliation-logo" href="https://www.rug.nl/" aria-label="University of Groningen"><img src="/images/logos/university-of-groningen-logo.png" alt="University of Groningen"></a>
        <a class="cv-affiliation-logo" href="https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/" aria-label="Bio-Inspired Circuits and Systems"><img src="/images/logos/bics-logo.png" alt="Bio-Inspired Circuits and Systems"></a>
      </div>
    </div>
  </div>
  <div class="cv-affiliation-row">
    <div class="cv-affiliation-period">2025-2026</div>
    <div>
      <p class="cv-affiliation-name">ETH Zurich; Neuromorphic Electronics with Oxides</p>
      <div class="cv-affiliation-logos">
        <a class="cv-affiliation-logo" href="https://ethz.ch/en.html" aria-label="ETH Zurich"><img src="/images/logos/eth-logo.png" alt="ETH Zurich"></a>
        <a class="cv-affiliation-logo" href="https://neo.ethz.ch/" aria-label="Neuromorphic Electronics with Oxides"><img src="/images/logos/neo-ethz-logo.svg" alt="Neuromorphic Electronics with Oxides"></a>
      </div>
    </div>
  </div>
  <div class="cv-affiliation-row">
    <div class="cv-affiliation-period">2021-2024</div>
    <div>
      <p class="cv-affiliation-name">IEMN-CNRS; LN2-CNRS; Université de Sherbrooke</p>
      <div class="cv-affiliation-logos">
        <a class="cv-affiliation-logo" href="https://www.iemn.fr/" aria-label="IEMN"><img src="/images/logos/iemn-logo.png" alt="IEMN"></a>
        <a class="cv-affiliation-logo" href="https://www.usherbrooke.ca/ln2/" aria-label="LN2"><img src="/images/logos/ln2-logo.png" alt="LN2"></a>
        <a class="cv-affiliation-logo" href="https://www.usherbrooke.ca/" aria-label="Université de Sherbrooke"><img src="/images/logos/udes-logo.png" alt="Université de Sherbrooke"></a>
        <a class="cv-affiliation-logo" href="https://www.cnrs.fr/en" aria-label="CNRS"><img src="/images/logos/cnrs-logo.jpg" alt="CNRS"></a>
      </div>
    </div>
  </div>
  <div class="cv-affiliation-row">
    <div class="cv-affiliation-period">2017-2020</div>
    <div>
      <p class="cv-affiliation-name">BITS Pilani Goa; Cognitive Neuroscience Lab; Reconfigurable Computing Lab</p>
      <div class="cv-affiliation-logos">
        <a class="cv-affiliation-logo" href="https://www.bits-pilani.ac.in/goa/" aria-label="BITS Pilani Goa"><img src="/images/logos/bits-logo.png" alt="BITS Pilani Goa"></a>
        <a class="cv-affiliation-logo" href="https://www.bits-pilani.ac.in/goa/" aria-label="Cognitive Neuroscience Lab"><img src="/images/logos/cns-bits-goa.jpg" alt="Cognitive Neuroscience Lab"></a>
        <a class="cv-affiliation-logo" href="https://www.bits-pilani.ac.in/goa/" aria-label="Reconfigurable Computing Lab"><img src="/images/logos/rcl-bits-goa.jpg" alt="Reconfigurable Computing Lab"></a>
      </div>
    </div>
  </div>
  </div>
</section>


## Education

<div class="cv-education-list">
  <div class="cv-education-row cv-grid-head" aria-hidden="true">
    <div>Degree</div>
    <div>Field</div>
    <div>Institution</div>
    <div>Years</div>
  </div>
  <div class="cv-education-row">
    <div class="cv-degree" data-label="Degree">PhD</div>
    <div data-label="Field">Electronics, Microelectronics, Nanotechnology and Microwaves / Electrical Engineering <span class="cv-education-detail">Related coursework: micro and nano fabrication</span></div>
    <div class="cv-institution" data-label="Institution">University of Lille and Université de Sherbrooke</div>
    <div class="cv-year" data-label="Years">2021-2024</div>
  </div>
  <div class="cv-education-row">
    <div class="cv-degree" data-label="Degree">MSc</div>
    <div data-label="Field">Biological Sciences <span class="cv-education-detail">Thesis at 3IT on neuromorphic reservoir computing for neurophysiological signal processing</span></div>
    <div class="cv-institution" data-label="Institution">BITS Pilani Goa</div>
    <div class="cv-year" data-label="Years">2016-2021</div>
  </div>
  <div class="cv-education-row">
    <div class="cv-degree" data-label="Degree">BE</div>
    <div data-label="Field">Electrical and Electronics Engineering</div>
    <div class="cv-institution" data-label="Institution">BITS Pilani Goa</div>
    <div class="cv-year" data-label="Years">2016-2021</div>
  </div>
</div>

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

<div class="cv-supervision-grid">
  <div class="cv-supervision-row cv-grid-head" aria-hidden="true">
    <div>Student</div>
    <div>Project</div>
    <div>Year</div>
    <div>Affiliation</div>
    <div>Papers</div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Eric Sebastian Hallen</div>
    <div data-label="Project">SWIMS</div>
    <div class="cv-year" data-label="Year">2026</div>
    <div class="cv-affiliation" data-label="Affiliation">University of Groningen</div>
    <div class="cv-empty" data-label="Papers"></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Eelco</div>
    <div data-label="Project">SWIMS</div>
    <div class="cv-year" data-label="Year">2026</div>
    <div class="cv-affiliation" data-label="Affiliation">University of Groningen</div>
    <div class="cv-empty" data-label="Papers"></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Matteo Mazza</div>
    <div data-label="Project">Analog weight update in ferroelectric hafnia</div>
    <div class="cv-year" data-label="Year">2025-2026</div>
    <div class="cv-affiliation" data-label="Affiliation">ETH Zurich</div>
    <div data-label="Papers"><span class="cv-ref-list"><a class="cv-ref" href="/publications/#analog-weight-update-ferroelectric-hafnia">AEM 2026</a></span></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Anxiong Song</div>
    <div data-label="Project">Personalized spiking neural networks with ferroelectric synapses for EEG</div>
    <div class="cv-year" data-label="Year">2025</div>
    <div class="cv-affiliation" data-label="Affiliation">ETH Zurich</div>
    <div data-label="Papers"><span class="cv-ref-list"><a class="cv-ref" href="/publications/#personalized-spiking-neural-networks">APL ML 2026</a></span></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Niklas Plessnig</div>
    <div data-label="Project">Personalized spiking neural networks with ferroelectric synapses for EEG</div>
    <div class="cv-year" data-label="Year">2025</div>
    <div class="cv-affiliation" data-label="Affiliation">ETH Zurich</div>
    <div data-label="Papers"><span class="cv-ref-list"><a class="cv-ref" href="/publications/#personalized-spiking-neural-networks">APL ML 2026</a></span></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Marc Rautmann</div>
    <div data-label="Project">Digital integrated-circuit work for bio-inspired spiking neurons</div>
    <div class="cv-year" data-label="Year">2025</div>
    <div class="cv-affiliation" data-label="Affiliation">ETH Zurich</div>
    <div class="cv-empty" data-label="Papers"></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Lara Prelij</div>
    <div data-label="Project">Analog integrated-circuit work for bio-inspired spiking neurons</div>
    <div class="cv-year" data-label="Year">2025</div>
    <div class="cv-affiliation" data-label="Affiliation">ETH Zurich</div>
    <div class="cv-empty" data-label="Papers"></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Sohil Khan</div>
    <div data-label="Project">Physics-based memristive device modeling</div>
    <div class="cv-year" data-label="Year">2025</div>
    <div class="cv-affiliation" data-label="Affiliation">ETH Zurich</div>
    <div class="cv-empty" data-label="Papers"></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Jeff Ren</div>
    <div data-label="Project">FPGA-based memristor crossbar characterization</div>
    <div class="cv-year" data-label="Year">2025</div>
    <div class="cv-affiliation" data-label="Affiliation">ETH Zurich</div>
    <div class="cv-empty" data-label="Papers"></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Guillaume Goupy</div>
    <div data-label="Project">Voltage-dependent synaptic plasticity for convolutional spiking neural networks</div>
    <div class="cv-year" data-label="Year">2021-2022</div>
    <div class="cv-affiliation" data-label="Affiliation">Université de Sherbrooke</div>
    <div data-label="Papers"><span class="cv-ref-list"><a class="cv-ref" href="/publications/#vdsp-convolutional-snn">NCE 2023</a></span></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Rohit Garg</div>
    <div data-label="Project">Valence and arousal decoding from portable EEG</div>
    <div class="cv-year" data-label="Year">2020-2021</div>
    <div class="cv-affiliation" data-label="Affiliation">BITS Pilani Goa</div>
    <div data-label="Papers"><span class="cv-ref-list"><a class="cv-ref" href="/publications/#portable-eeg-valence-arousal">Frontiers 2022</a></span></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Akshay Valsaraj</div>
    <div data-label="Project">Dementia detection from speech; motor-imagery biometrics</div>
    <div class="cv-year" data-label="Year">2019-2020</div>
    <div class="cv-affiliation" data-label="Affiliation">BITS Pilani Goa</div>
    <div data-label="Papers"><span class="cv-ref-list"><a class="cv-ref" href="/publications/#alzheimer-bert-speech">ISCMI 2021</a><a class="cv-ref" href="/publications/#motor-imagery-biometrics">CW 2020</a></span></div>
  </div>
  <div class="cv-supervision-row">
    <div class="cv-student" data-label="Student">Ithihas Madala</div>
    <div data-label="Project">Dementia detection from speech; motor-imagery biometrics</div>
    <div class="cv-year" data-label="Year">2019-2020</div>
    <div class="cv-affiliation" data-label="Affiliation">BITS Pilani Goa</div>
    <div data-label="Papers"><span class="cv-ref-list"><a class="cv-ref" href="/publications/#alzheimer-bert-speech">ISCMI 2021</a><a class="cv-ref" href="/publications/#motor-imagery-biometrics">CW 2020</a></span></div>
  </div>
</div>

## Teaching, Service, and Outreach

* **Video Editor**, [NeuroPAC](https://www.neuropac.info/video-category/), January 2022 - December 2024.
* **Course Instructor**, Center for Technical Education, BITS Pilani Goa, August 2018 - December 2018: introductory machine learning course.

## Certifications

* Qiskit Global Summer School
* An Introduction to Consumer Neuroscience and Neuromarketing
* Intermediate Python for Data Science
* Writing in the Sciences
* Nanotechnology: A Maker’s Course
