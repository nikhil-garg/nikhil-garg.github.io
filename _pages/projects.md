---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: false
redirect_from:
  - /portfolio/
---

<style>
.project-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  margin: 1rem 0 1.35rem;
}
.project-card {
  border: 1px solid #dedede;
  border-left: 4px solid #526a7a;
  border-radius: 6px;
  color: #333;
  display: block;
  padding: 0.8rem 0.85rem;
  text-decoration: none;
}
.project-card:hover {
  border-color: #9cb6c4;
  border-left-color: #526a7a;
  color: #111;
  text-decoration: none;
}
.project-card strong {
  display: block;
  font-size: 0.95rem;
  line-height: 1.2;
}
.project-card span {
  color: #555;
  display: block;
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.28rem;
}
</style>

<section class="project-grid" aria-label="Project overview">
  <a class="project-card" href="/projects/swims/"><strong>SWIMS</strong><span>University of Groningen · spiking wireless multimodal sensory systems</span></a>
  <a class="project-card" href="/projects/vitfox/"><strong>VITFOX</strong><span>ETH Zurich · ferroelectric synapses and device-aware learning</span></a>
  <a class="project-card" href="/projects/unico/"><strong>UNICO</strong><span>France/Canada · memristive in-memory learning and analog circuits</span></a>
  <a class="project-card" href="/projects/ionos/"><strong>IONOS</strong><span>CNRS/UdeS · iono-electronic neuromorphic interfaces</span></a>
  <a class="project-card" href="/projects/bci/"><strong>Brain-Computer Interfaces</strong><span>BITS Pilani Goa · EEG, BCI, affect decoding, assistive systems</span></a>
  <a class="project-card" href="/projects/fpga-embedded/"><strong>FPGA and Embedded Hardware</strong><span>BITS/ETH · FPGA, PCB, characterization systems</span></a>
</section>

<section id="swims" markdown="1">
## SWIMS

2026-present · University of Groningen

Stochastic spiking wireless multimodal sensory systems for adaptive, low-power neural interfaces.

[Lab page](https://www.rug.nl/research/zernike/bio-inspired-circuits-and-systems/)
</section>

<section id="vitfox" markdown="1">
## VITFOX

2025-2026 · ETH Zurich

Ferroelectric-oxide hardware and algorithms for neural-network training, energy-convergence tradeoffs, and personalized EEG processing.

[EEG-Ferro](https://github.com/NEO-ETHZ/EEG-Ferro) · [Energy-convergence-Ferro-CCMCC2026](https://github.com/nikhil-garg/Energy-convergence-Ferro-CCMCC2026)

### Outputs
- [Personalized spiking neural networks with ferroelectric synapses for EEG signal processing](/publications/#personalized-spiking-neural-networks)
- [Analog Weight Update Rule in Ferroelectric Hafnia, Using picoJoule Programming Pulses](/publications/#analog-weight-update-ferroelectric-hafnia)
- [Energy-convergence trade off for the training of neural networks on bio-inspired hardware](/publications/#energy-convergence-ferro)
</section>

<section id="unico" markdown="1">
## UNICO

2021-2024 · Université de Lille / Université de Sherbrooke

Unsupervised spiking neural networks with analog memristive devices for edge computing, covering voltage-dependent synaptic plasticity, memristive synapse modeling, simulation workflows, and mixed-signal ASIC prototypes.

[Project page](https://www.chistera.eu/projects/unico) · [VDSP_Nengo](https://github.com/nikhil-garg/VDSP_Nengo) · [VDSP-Memristors](https://github.com/nikhil-garg/VDSP-Memristors)

### Outputs
- [Neuromorphic in-memory learning with analog integrated circuits and nanoscale memristive devices](/publications/#phd-thesis)
- [Unsupervised local learning based on voltage-dependent synaptic plasticity for resistive and ferroelectric synapses](/publications/#vdsp-memristors)
- [Versatile CMOS analog LIF neuron for memristor-integrated neuromorphic circuits](/publications/#cmos-lif-neuron)
- [Unsupervised and efficient learning in sparsely activated convolutional spiking neural networks](/publications/#vdsp-convolutional-snn)
- [Voltage-dependent synaptic plasticity](/publications/#voltage-dependent-synaptic-plasticity)
- [All-in-One Analog AI Hardware](/publications/#all-in-one-analog-ai-hardware)
</section>

<section id="ionos" markdown="1">
## IONOS

2020-2024 · CNRS / Université de Sherbrooke

Iono-electronic neuromorphic interfaces for communication with living systems, including analog-to-spike conversion, EMG reservoir-computing experiments, and organic electrochemical transistor reservoir evaluation.

[Project page](https://cordis.europa.eu/project/id/773228) · [EMG_exp](https://github.com/nikhil-garg/EMG_exp)

### Outputs
- [Neuromorphic signal classification using organic electrochemical transistor array and spiking neural simulations](/publications/#oect-array-snn)
- [Structural plasticity for neuromorphic networks with electropolymerized dendritic PEDOT connections](/publications/#pedot-structural-plasticity)
- [Signals to spikes for neuromorphic regulated reservoir computing and EMG hand gesture recognition](/publications/#signals-to-spikes-emg)
</section>

<section id="bci" markdown="1">
## Brain-Computer Interfaces

2017-2021 · BITS Pilani Goa

Real-time EEG and machine-learning pipelines for assistive technology, motor imagery, biometric authentication, cognitive-state estimation, and portable-headset emotion decoding.

[Decoding_EEG](https://github.com/nikhil-garg/Decoding_EEG)

### Outputs
- [Decoding the neural signatures of valence and arousal from portable EEG headset](/publications/#portable-eeg-valence-arousal)
- [Alzheimer’s dementia detection using acoustic and linguistic features and pre-trained BERT](/publications/#alzheimer-bert-speech)
- [Wheelchair automation by a hybrid BCI system using SSVEP and eye blinks](/publications/#wheelchair-hybrid-bci)
- [Motor Imagery Based Multimodal Biometric User Authentication System Using EEG](/publications/#motor-imagery-biometrics)
- [Study of motor imagery for multiclass brain system interface](/publications/#motor-imagery-multiclass)
</section>

<section id="fpga-embedded" markdown="1">
## FPGA and Embedded Hardware

2017-2020, 2025 · BITS Pilani Goa / ETH Zurich

FPGA, PCB, and hardware-software co-design work for memory characterization, embedded acceleration, ADC/DAC interfacing, and signal-processing systems.

### Output
- FPGA-based memristor crossbar array characterization framework
</section>
