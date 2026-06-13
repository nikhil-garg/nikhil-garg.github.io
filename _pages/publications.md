---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar]({{site.author.googlescholar}}). Project links point to the related research themes on this site.

<style>
.pub-card {
  border-top: 1px solid #d9d9d9;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(128px, 180px) 1fr;
  margin: 1.15rem 0 1.65rem;
  padding-top: 1.15rem;
}
.pub-figure {
  align-self: start;
  background: #f7f8fb;
  border: 1px solid #d7dbe2;
  border-radius: 6px;
  color: #333;
  overflow: hidden;
}
.pub-thumb {
  align-items: flex-start;
  aspect-ratio: 16 / 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 112px;
  padding: 0.85rem;
  position: relative;
}
.pub-thumb::after {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  content: "";
  height: 4.4rem;
  position: absolute;
  right: -1.4rem;
  top: -1.4rem;
  width: 4.4rem;
}
.pub-thumb i {
  color: #526a7a;
  font-size: 1.55rem;
}
.pub-thumb__project {
  color: #555;
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
}
.pub-thumb__topic {
  display: block;
  font-size: 0.86rem;
  font-weight: 700;
  line-height: 1.2;
  max-width: 11rem;
}
.pub-figure--vitfox {
  background: #f6f7fb;
  border-color: #cdd5e5;
}
.pub-figure--unico {
  background: #f8f7f2;
  border-color: #d9d0bf;
}
.pub-figure--ionos {
  background: #f5f9f7;
  border-color: #cbdccf;
}
.pub-figure--bci {
  background: #f7f8fb;
  border-color: #cbd5df;
}
.pub-figure--vitfox .pub-thumb i {
  color: #5d6f9f;
}
.pub-figure--unico .pub-thumb i {
  color: #7a6849;
}
.pub-figure--ionos .pub-thumb i {
  color: #597f68;
}
.pub-figure--bci .pub-thumb i {
  color: #526a7a;
}
.pub-title {
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 0.25rem;
}
.pub-authors,
.pub-venue {
  color: #444;
  font-size: 0.92rem;
  margin: 0.15rem 0;
}
.pub-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.7rem;
  margin-top: 0.5rem;
}
.pub-links a {
  white-space: nowrap;
}
.pub-links i {
  color: #555;
  margin-right: 0.22rem;
}
@media (max-width: 640px) {
  .pub-card {
    grid-template-columns: 1fr;
  }
  .pub-figure {
    max-width: 280px;
  }
}
</style>

## VITFOX & Ferroelectric Learning

<article class="pub-card" id="personalized-spiking-neural-networks" markdown="1">
<div class="pub-figure pub-figure--vitfox">
<div class="pub-thumb" aria-label="EEG + ferroelectric synapses thumbnail">
<i class="fas fa-brain"></i>
<span class="pub-thumb__project">VITFOX</span>
<span class="pub-thumb__topic">EEG + ferroelectric synapses</span>
</div>
</div>
<div>
<p class="pub-title">Personalized spiking neural networks with ferroelectric synapses for EEG signal processing.</p>
<p class="pub-authors">N. Garg, A. Song, N. Plessnig, N. Savoia, L. Begon-Lours.</p>
<p class="pub-venue"><em>APL Machine Learning</em>, 2026.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2601.00020"><i class="fas fa-file-alt"></i>arXiv</a> <a href="https://github.com/NEO-ETHZ/EEG-Ferro"><i class="fab fa-github"></i>code</a> <a href="/projects/#vitfox">VITFOX</a></p>
</div>
</article>

<article class="pub-card" id="analog-weight-update-ferroelectric-hafnia" markdown="1">
<div class="pub-figure pub-figure--vitfox">
<div class="pub-thumb" aria-label="picojoule hafnia updates thumbnail">
<i class="fas fa-bolt"></i>
<span class="pub-thumb__project">VITFOX</span>
<span class="pub-thumb__topic">picojoule hafnia updates</span>
</div>
</div>
<div>
<p class="pub-title">Analog Weight Update Rule in Ferroelectric Hafnia, Using picoJoule Programming Pulses.</p>
<p class="pub-authors">A. Baigol, N. Garg, M. Mazza, Y. Zhang, E. Zaccaria, W. Choi, B. J. Offrein, L. Begon-Lours.</p>
<p class="pub-venue"><em>Advanced Electronic Materials</em>, 2026.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2601.01186"><i class="fas fa-file-alt"></i>arXiv</a> <a href="/projects/#vitfox">VITFOX</a></p>
</div>
</article>

<article class="pub-card" id="energy-convergence-ferro" markdown="1">
<div class="pub-figure pub-figure--vitfox">
<div class="pub-thumb" aria-label="energy convergence tradeoff thumbnail">
<i class="fas fa-chart-line"></i>
<span class="pub-thumb__project">VITFOX</span>
<span class="pub-thumb__topic">energy convergence tradeoff</span>
</div>
</div>
<div>
<p class="pub-title">Energy-convergence trade off for the training of neural networks on bio-inspired hardware.</p>
<p class="pub-authors">N. Garg, P. U. Vicandi, Y. Zhang, A. Baigol, D. F. Falcone, S. R. Mamidala, B. J. Offrein, L. Begon-Lours.</p>
<p class="pub-venue"><em>CCMCC</em>, 2025.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2509.18121"><i class="fas fa-file-alt"></i>arXiv</a> <a href="https://github.com/nikhil-garg/Energy-convergence-Ferro-CCMCC2026"><i class="fab fa-github"></i>code</a> <a href="/projects/#vitfox">VITFOX</a></p>
</div>
</article>

## UNICO & In-Memory Learning

<article class="pub-card" id="vdsp-memristors" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="local plasticity in synapses thumbnail">
<i class="fas fa-project-diagram"></i>
<span class="pub-thumb__project">UNICO</span>
<span class="pub-thumb__topic">local plasticity in synapses</span>
</div>
</div>
<div>
<p class="pub-title">Unsupervised local learning based on voltage-dependent synaptic plasticity for resistive and ferroelectric synapses.</p>
<p class="pub-authors">N. Garg, I. Balafrej, J. H. Q. Palhares, L. Begon-Lours, D. Florini, D. F. Falcone, T. Stecconi, V. Bragaglia, B. J. Offrein, J.-M. Portal, et al.</p>
<p class="pub-venue"><em>Communications Materials</em>, 2026.</p>
<p class="pub-links"><a href="https://www.nature.com/articles/s43246-025-01033-5"><i class="fas fa-file-alt"></i>paper</a> <a href="https://github.com/nikhil-garg/VDSP-Memristors"><i class="fab fa-github"></i>code</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="cmos-lif-neuron" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="CMOS LIF neuron interface thumbnail">
<i class="fas fa-microchip"></i>
<span class="pub-thumb__project">UNICO</span>
<span class="pub-thumb__topic">CMOS LIF neuron interface</span>
</div>
</div>
<div>
<p class="pub-title"><a href="/publications/cmos-lif-neuron/">Versatile CMOS analog LIF neuron for memristor-integrated neuromorphic circuits.</a></p>
<p class="pub-authors">N. Garg, D. Florini, P. Dufour, E. Muhr, M. C. Faye, M. Bocquet, D. Querlioz, Y. Beilliard, D. Drouin, F. Alibart, et al.</p>
<p class="pub-venue"><em>ICONS</em>, 2024.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2406.19667"><i class="fas fa-file-alt"></i>arXiv</a> <a href="https://www.linkedin.com/posts/nikhil-garg-bits_neuromorphic-analog-ai-activity-7273994918837071872-jdDP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAB_PrxUBC3G1jJscK5o4lv4kztQxXb9ErrI"><i class="fab fa-linkedin"></i>post</a> <a href="/publications/cmos-lif-neuron/">details</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="pcm-cryo-snn" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="cryogenic PCM SNNs thumbnail">
<i class="fas fa-atom"></i>
<span class="pub-thumb__project">UNICO</span>
<span class="pub-thumb__topic">cryogenic PCM SNNs</span>
</div>
</div>
<div>
<p class="pub-title">28 nm FDSOI embedded PCM exhibiting near zero drift at 12 K for cryogenic SNNs.</p>
<p class="pub-authors">J. H. Q. Palhares, N. Garg, P.-A. Mouny, Y. Beilliard, J. Sandrini, F. Arnaud, L. Anghel, F. Alibart, D. Drouin, P. Galy.</p>
<p class="pub-venue"><em>npj Unconventional Computing</em>, 2024.</p>
<p class="pub-links"><a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="pcm-drift-compensation" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="PCM drift compensation thumbnail">
<i class="fas fa-chart-area"></i>
<span class="pub-thumb__project">UNICO</span>
<span class="pub-thumb__topic">PCM drift compensation</span>
</div>
</div>
<div>
<p class="pub-title">Phase change memory drift compensation in spiking neural networks using a non-linear current scaling strategy.</p>
<p class="pub-authors">J. H. Q. Palhares, N. Garg, Y. Beilliard, L. Anghel, F. Alibart, D. Drouin, P. Galy.</p>
<p class="pub-venue"><em>Journal of Low Power Electronics and Applications</em>, 2024.</p>
<p class="pub-links"><a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="vdsp-convolutional-snn" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="sparse convolutional SNNs thumbnail">
<i class="fas fa-project-diagram"></i>
<span class="pub-thumb__project">UNICO</span>
<span class="pub-thumb__topic">sparse convolutional SNNs</span>
</div>
</div>
<div>
<p class="pub-title">Unsupervised and efficient learning in sparsely activated convolutional spiking neural networks enabled by voltage-dependent synaptic plasticity.</p>
<p class="pub-authors">G. Goupy, A. Juneau-Fecteau, N. Garg, I. Balafrej, F. Alibart, L. Frechette, D. Drouin, Y. Beilliard.</p>
<p class="pub-venue"><em>Neuromorphic Computing and Engineering</em>, 2023.</p>
<p class="pub-links"><a href="https://doi.org/10.1088/2634-4386/acad98"><i class="fas fa-file-alt"></i>paper</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="voltage-dependent-synaptic-plasticity" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="membrane-voltage plasticity thumbnail">
<i class="fas fa-bolt"></i>
<span class="pub-thumb__project">UNICO</span>
<span class="pub-thumb__topic">membrane-voltage plasticity</span>
</div>
</div>
<div>
<p class="pub-title">Voltage-dependent synaptic plasticity: Unsupervised probabilistic Hebbian plasticity rule based on neurons membrane potential.</p>
<p class="pub-authors">N. Garg, I. Balafrej, T. C. Stewart, J.-M. Portal, M. Bocquet, D. Querlioz, D. Drouin, J. Rouat, Y. Beilliard, F. Alibart.</p>
<p class="pub-venue"><em>Frontiers in Neuroscience</em>, 2022.</p>
<p class="pub-links"><a href="https://doi.org/10.3389/fnins.2022.983950"><i class="fas fa-file-alt"></i>paper</a> <a href="https://github.com/nikhil-garg/VDSP_Nengo"><i class="fab fa-github"></i>code</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="phd-thesis" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="in-memory learning thesis thumbnail">
<i class="fas fa-book"></i>
<span class="pub-thumb__project">Thesis</span>
<span class="pub-thumb__topic">in-memory learning thesis</span>
</div>
</div>
<div>
<p class="pub-title">Neuromorphic in-memory learning with analog integrated circuits and nanoscale memristive devices.</p>
<p class="pub-authors">N. Garg.</p>
<p class="pub-venue">PhD thesis, Universite de Lille and Universite de Sherbrooke, 2024.</p>
<p class="pub-links"><a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="all-in-one-analog-ai-hardware" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="on-chip training + inference thumbnail">
<i class="fas fa-microchip"></i>
<span class="pub-thumb__project">UNICO</span>
<span class="pub-thumb__topic">on-chip training + inference</span>
</div>
</div>
<div>
<p class="pub-title">All-in-One Analog AI Hardware: On-Chip Training and Inference with Conductive-Metal-Oxide/HfOx ReRAM Devices.</p>
<p class="pub-authors">D. F. Falcone, V. Clerico, W. Choi, T. Stecconi, F. Horst, L. Begon-Lours, M. Galetta, A. La Porta, N. Garg, F. Alibart, et al.</p>
<p class="pub-venue"><em>Advanced Functional Materials</em>, 2025.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2502.04524"><i class="fas fa-file-alt"></i>arXiv</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

## IONOS & Bio-Signal Processing

<article class="pub-card" id="oect-array-snn" markdown="1">
<div class="pub-figure pub-figure--ionos">
<div class="pub-thumb" aria-label="OECT reservoir classification thumbnail">
<i class="fas fa-flask"></i>
<span class="pub-thumb__project">IONOS</span>
<span class="pub-thumb__topic">OECT reservoir classification</span>
</div>
</div>
<div>
<p class="pub-title">Neuromorphic signal classification using organic electrochemical transistor array and spiking neural simulations.</p>
<p class="pub-authors">M. Ghazal, A. Kumar, N. Garg, S. Pecqueur, F. Alibart.</p>
<p class="pub-venue"><em>IEEE Sensors Journal</em>, 2024.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/JSEN.2024.3353307"><i class="fas fa-file-alt"></i>paper</a> <a href="/projects/#ionos">IONOS</a></p>
</div>
</article>

<article class="pub-card" id="pedot-structural-plasticity" markdown="1">
<div class="pub-figure pub-figure--ionos">
<div class="pub-thumb" aria-label="PEDOT structural plasticity thumbnail">
<i class="fas fa-project-diagram"></i>
<span class="pub-thumb__project">IONOS</span>
<span class="pub-thumb__topic">PEDOT structural plasticity</span>
</div>
</div>
<div>
<p class="pub-title">Structural plasticity for neuromorphic networks with electropolymerized dendritic PEDOT connections.</p>
<p class="pub-authors">K. Janzakova, I. Balafrej, A. Kumar, N. Garg, C. Scholaert, J. Rouat, D. Drouin, Y. Coffinier, S. Pecqueur, F. Alibart.</p>
<p class="pub-venue"><em>Nature Communications</em>, 2023.</p>
<p class="pub-links"><a href="https://doi.org/10.1038/s41467-023-43887-8"><i class="fas fa-file-alt"></i>paper</a> <a href="/projects/#ionos">IONOS</a></p>
</div>
</article>

<article class="pub-card" id="signals-to-spikes-emg" markdown="1">
<div class="pub-figure pub-figure--ionos">
<div class="pub-thumb" aria-label="signal-to-spike EMG encoding thumbnail">
<i class="fas fa-bolt"></i>
<span class="pub-thumb__project">IONOS</span>
<span class="pub-thumb__topic">signal-to-spike EMG encoding</span>
</div>
</div>
<div>
<p class="pub-title">Signals to spikes for neuromorphic regulated reservoir computing and EMG hand gesture recognition.</p>
<p class="pub-authors">N. Garg, I. Balafrej, Y. Beilliard, D. Drouin, F. Alibart, J. Rouat.</p>
<p class="pub-venue"><em>ICONS</em>, 2021.</p>
<p class="pub-links"><a href="https://doi.org/10.1145/3477145.3477267"><i class="fas fa-file-alt"></i>paper</a> <a href="https://arxiv.org/abs/2106.11169"><i class="fas fa-file-alt"></i>arXiv</a> <a href="https://github.com/nikhil-garg/EMG_exp"><i class="fab fa-github"></i>code</a> <a href="/projects/#ionos">IONOS</a></p>
</div>
</article>

## BCI & EEG

<article class="pub-card" id="portable-eeg-valence-arousal" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="portable EEG affect decoding thumbnail">
<i class="fas fa-brain"></i>
<span class="pub-thumb__project">BCI</span>
<span class="pub-thumb__topic">portable EEG affect decoding</span>
</div>
</div>
<div>
<p class="pub-title">Decoding the neural signatures of valence and arousal from portable EEG headset.</p>
<p class="pub-authors">N. Garg, R. Garg, A. Anand, V. Baths.</p>
<p class="pub-venue"><em>Frontiers in Human Neuroscience</em>, 2022.</p>
<p class="pub-links"><a href="https://doi.org/10.3389/fnhum.2022.1051463"><i class="fas fa-file-alt"></i>paper</a> <a href="https://github.com/nikhil-garg/Decoding_EEG"><i class="fab fa-github"></i>code</a> <a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

<article class="pub-card" id="alzheimer-bert-speech" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="speech markers + BERT thumbnail">
<i class="fas fa-chart-line"></i>
<span class="pub-thumb__project">BCI</span>
<span class="pub-thumb__topic">speech markers + BERT</span>
</div>
</div>
<div>
<p class="pub-title">Alzheimer's dementia detection using acoustic and linguistic features and pre-trained BERT.</p>
<p class="pub-authors">A. Valsaraj, I. Madala, N. Garg, V. Baths.</p>
<p class="pub-venue"><em>ISCMI</em>, 2021.</p>
<p class="pub-links"><a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

<article class="pub-card" id="wheelchair-hybrid-bci" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="SSVEP + blink control thumbnail">
<i class="fas fa-wheelchair"></i>
<span class="pub-thumb__project">BCI</span>
<span class="pub-thumb__topic">SSVEP + blink control</span>
</div>
</div>
<div>
<p class="pub-title">Wheelchair automation by a hybrid BCI system using SSVEP and eye blinks.</p>
<p class="pub-authors">L. Kanungo, N. Garg, A. Bhobe, S. Rajguru, V. Baths.</p>
<p class="pub-venue"><em>IEEE SMC</em>, 2021.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2106.11008"><i class="fas fa-file-alt"></i>arXiv</a> <a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

<article class="pub-card" id="motor-imagery-biometrics" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="motor imagery authentication thumbnail">
<i class="fas fa-user-lock"></i>
<span class="pub-thumb__project">BCI</span>
<span class="pub-thumb__topic">motor imagery authentication</span>
</div>
</div>
<div>
<p class="pub-title">Motor Imagery Based Multimodal Biometric User Authentication System Using EEG.</p>
<p class="pub-authors">A. Valsaraj, I. Madala, N. Garg, M. Patil, V. Baths.</p>
<p class="pub-venue"><em>Cyberworlds</em>, 2020.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/CW49994.2020.00050"><i class="fas fa-file-alt"></i>paper</a> <a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

<article class="pub-card" id="motor-imagery-multiclass" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="multiclass motor imagery thumbnail">
<i class="fas fa-project-diagram"></i>
<span class="pub-thumb__project">BCI</span>
<span class="pub-thumb__topic">multiclass motor imagery</span>
</div>
</div>
<div>
<p class="pub-title">Study of motor imagery for multiclass brain system interface with a special focus in the same limb movement.</p>
<p class="pub-authors">M. Patil, N. Garg, L. Kanungo, V. Baths.</p>
<p class="pub-venue"><em>ICCI\*CC</em>, 2019.</p>
<p class="pub-links"><a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>
