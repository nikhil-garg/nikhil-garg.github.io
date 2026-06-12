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
  background: #fafafa;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  overflow: hidden;
}
.pub-figure svg {
  display: block;
  height: auto;
  width: 100%;
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
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="EEG to ferroelectric synapse thumbnail"><rect width="320" height="180" fill="#f8fbff"/><path d="M20 52c20-20 55-20 75 0s55 20 75 0 55-20 75 0 55 20 55 0" fill="none" stroke="#3f6f8f" stroke-width="5"/><rect x="38" y="102" width="70" height="42" rx="4" fill="#dfeef4" stroke="#355b6b"/><rect x="126" y="92" width="68" height="62" rx="4" fill="#f2e4f6" stroke="#7c5b87"/><rect x="214" y="102" width="70" height="42" rx="4" fill="#e9f3dc" stroke="#667a48"/><path d="M108 123h18M194 123h20" stroke="#555" stroke-width="4"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">EEG adaptation on ferroelectric synapses</text></svg>
</div>
<div>
<p class="pub-title">Personalized spiking neural networks with ferroelectric synapses for EEG signal processing.</p>
<p class="pub-authors">N. Garg, A. Song, N. Plessnig, N. Savoia, L. Begon-Lours.</p>
<p class="pub-venue"><em>APL Machine Learning</em>, 2026.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2601.00020"><i class="fas fa-file-alt"></i>arXiv</a> <a href="https://github.com/NEO-ETHZ/EEG-Ferro"><i class="fab fa-github"></i>code</a> <a href="/projects/#vitfox">VITFOX</a></p>
</div>
</article>

<article class="pub-card" id="analog-weight-update-ferroelectric-hafnia" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Ferroelectric pulse programming thumbnail"><rect width="320" height="180" fill="#fbfaf8"/><rect x="58" y="38" width="204" height="70" rx="7" fill="#eee2f0" stroke="#775480" stroke-width="3"/><path d="M78 78h164" stroke="#775480" stroke-width="5"/><path d="M92 132h20v-30h20v30h20v-42h20v42h20v-56h20v56h20" fill="none" stroke="#b06b3b" stroke-width="5"/><circle cx="96" cy="74" r="9" fill="#7aa66a"/><circle cx="142" cy="74" r="9" fill="#7aa66a"/><circle cx="188" cy="74" r="9" fill="#7aa66a"/><circle cx="234" cy="74" r="9" fill="#7aa66a"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">picojoule ferroelectric updates</text></svg>
</div>
<div>
<p class="pub-title">Analog Weight Update Rule in Ferroelectric Hafnia, Using picoJoule Programming Pulses.</p>
<p class="pub-authors">A. Baigol, N. Garg, M. Mazza, Y. Zhang, E. Zaccaria, W. Choi, B. J. Offrein, L. Begon-Lours.</p>
<p class="pub-venue"><em>Advanced Electronic Materials</em>, 2026.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2601.01186"><i class="fas fa-file-alt"></i>arXiv</a> <a href="/projects/#vitfox">VITFOX</a></p>
</div>
</article>

<article class="pub-card" id="energy-convergence-ferro" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Energy convergence curve thumbnail"><rect width="320" height="180" fill="#f9fbf8"/><path d="M46 132h220M46 132V36" stroke="#444" stroke-width="3"/><path d="M58 52c38 70 76 86 120 88 35 2 64-5 86-18" fill="none" stroke="#587f9a" stroke-width="5"/><path d="M60 126c40-6 73-22 103-48s55-34 98-30" fill="none" stroke="#a86b4c" stroke-width="5"/><circle cx="112" cy="111" r="7" fill="#587f9a"/><circle cx="208" cy="58" r="7" fill="#a86b4c"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">energy vs. convergence</text></svg>
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
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Voltage dependent synaptic plasticity thumbnail"><rect width="320" height="180" fill="#f8fafb"/><rect x="58" y="42" width="60" height="96" rx="5" fill="#e3eff6" stroke="#45677a" stroke-width="3"/><rect x="202" y="42" width="60" height="96" rx="5" fill="#eef0de" stroke="#697244" stroke-width="3"/><path d="M118 70h84M118 110h84" stroke="#555" stroke-width="4"/><circle cx="160" cy="70" r="12" fill="#c9895f"/><circle cx="160" cy="110" r="12" fill="#7aa66a"/><path d="M78 66c8-18 20-18 28 0M218 118c8 18 20 18 28 0" fill="none" stroke="#555" stroke-width="3"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">local learning with resistive synapses</text></svg>
</div>
<div>
<p class="pub-title">Unsupervised local learning based on voltage-dependent synaptic plasticity for resistive and ferroelectric synapses.</p>
<p class="pub-authors">N. Garg, I. Balafrej, J. H. Q. Palhares, L. Begon-Lours, D. Florini, D. F. Falcone, T. Stecconi, V. Bragaglia, B. J. Offrein, J.-M. Portal, et al.</p>
<p class="pub-venue"><em>Communications Materials</em>, 2026.</p>
<p class="pub-links"><a href="https://www.nature.com/articles/s43246-025-01033-5"><i class="fas fa-file-alt"></i>paper</a> <a href="https://github.com/nikhil-garg/VDSP-Memristors"><i class="fab fa-github"></i>code</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="cmos-lif-neuron" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="CMOS LIF neuron circuit thumbnail"><rect width="320" height="180" fill="#fafafa"/><rect x="50" y="48" width="92" height="84" rx="6" fill="#e6edf2" stroke="#4f6676" stroke-width="3"/><rect x="178" y="48" width="92" height="84" rx="6" fill="#f1e8dd" stroke="#8a694a" stroke-width="3"/><path d="M142 90h36M64 78h62M64 102h62M194 78h62M194 102h62" stroke="#444" stroke-width="4"/><path d="M78 130v-20h18v20M208 130v-28h18v28" stroke="#4f6676" stroke-width="4" fill="none"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">analog LIF neuron interface</text></svg>
</div>
<div>
<p class="pub-title">Versatile CMOS analog LIF neuron for memristor-integrated neuromorphic circuits.</p>
<p class="pub-authors">N. Garg, D. Florini, P. Dufour, E. Muhr, M. C. Faye, M. Bocquet, D. Querlioz, Y. Beilliard, D. Drouin, F. Alibart, et al.</p>
<p class="pub-venue"><em>ICONS</em>, 2024.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2406.19667"><i class="fas fa-file-alt"></i>arXiv</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="pcm-cryo-snn" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Cryogenic PCM thumbnail"><rect width="320" height="180" fill="#f7fbff"/><rect x="78" y="44" width="164" height="76" rx="7" fill="#dfeaf5" stroke="#42657f" stroke-width="3"/><path d="M98 82h124M118 58v48M148 58v48M178 58v48M208 58v48" stroke="#42657f" stroke-width="3"/><path d="M64 134c20-18 34-18 54 0s34 18 54 0 34-18 54 0 34 18 54 0" fill="none" stroke="#6e9bc3" stroke-width="5"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">PCM drift at 12 K</text></svg>
</div>
<div>
<p class="pub-title">28 nm FDSOI embedded PCM exhibiting near zero drift at 12 K for cryogenic SNNs.</p>
<p class="pub-authors">J. H. Q. Palhares, N. Garg, P.-A. Mouny, Y. Beilliard, J. Sandrini, F. Arnaud, L. Anghel, F. Alibart, D. Drouin, P. Galy.</p>
<p class="pub-venue"><em>npj Unconventional Computing</em>, 2024.</p>
<p class="pub-links"><a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="pcm-drift-compensation" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="PCM drift compensation thumbnail"><rect width="320" height="180" fill="#fbfbf8"/><path d="M48 134h222M48 134V38" stroke="#444" stroke-width="3"/><path d="M58 58c55 8 98 34 132 72" fill="none" stroke="#9a6b5b" stroke-width="5"/><path d="M58 118c48-16 93-22 136-20s65 10 82 18" fill="none" stroke="#597f68" stroke-width="5"/><rect x="214" y="48" width="42" height="42" rx="5" fill="#e7ecf2" stroke="#50677c" stroke-width="3"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">nonlinear current scaling</text></svg>
</div>
<div>
<p class="pub-title">Phase change memory drift compensation in spiking neural networks using a non-linear current scaling strategy.</p>
<p class="pub-authors">J. H. Q. Palhares, N. Garg, Y. Beilliard, L. Anghel, F. Alibart, D. Drouin, P. Galy.</p>
<p class="pub-venue"><em>Journal of Low Power Electronics and Applications</em>, 2024.</p>
<p class="pub-links"><a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="vdsp-convolutional-snn" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Sparse convolutional SNN thumbnail"><rect width="320" height="180" fill="#f9fbfa"/><g fill="#dfe9f1" stroke="#526a7a" stroke-width="2"><rect x="42" y="46" width="28" height="28"/><rect x="76" y="46" width="28" height="28"/><rect x="110" y="46" width="28" height="28"/><rect x="42" y="80" width="28" height="28"/><rect x="76" y="80" width="28" height="28"/><rect x="110" y="80" width="28" height="28"/></g><g fill="#eef0de" stroke="#657348" stroke-width="2"><circle cx="192" cy="58" r="11"/><circle cx="232" cy="74" r="11"/><circle cx="188" cy="106" r="11"/><circle cx="238" cy="120" r="11"/></g><path d="M138 76c24 0 30-14 43-18M138 94c28 0 34 14 50 12M203 62l18 8M198 110l30 8" stroke="#555" stroke-width="3"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">sparse convolutional SNNs</text></svg>
</div>
<div>
<p class="pub-title">Unsupervised and efficient learning in sparsely activated convolutional spiking neural networks enabled by voltage-dependent synaptic plasticity.</p>
<p class="pub-authors">G. Goupy, A. Juneau-Fecteau, N. Garg, I. Balafrej, F. Alibart, L. Frechette, D. Drouin, Y. Beilliard.</p>
<p class="pub-venue"><em>Neuromorphic Computing and Engineering</em>, 2023.</p>
<p class="pub-links"><a href="https://doi.org/10.1088/2634-4386/acad98"><i class="fas fa-file-alt"></i>paper</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="voltage-dependent-synaptic-plasticity" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="VDSP membrane voltage thumbnail"><rect width="320" height="180" fill="#fbfaf8"/><path d="M42 108c18 0 18-52 36-52s18 52 36 52 18-52 36-52 18 52 36 52 18-52 36-52 18 52 36 52" fill="none" stroke="#587f9a" stroke-width="5"/><path d="M56 134h210" stroke="#555" stroke-width="3"/><rect x="116" y="118" width="88" height="34" rx="4" fill="#f2e4f6" stroke="#7c5b87" stroke-width="3"/><path d="M128 135h64" stroke="#7c5b87" stroke-width="4"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">membrane-potential plasticity</text></svg>
</div>
<div>
<p class="pub-title">Voltage-dependent synaptic plasticity: Unsupervised probabilistic Hebbian plasticity rule based on neurons membrane potential.</p>
<p class="pub-authors">N. Garg, I. Balafrej, T. C. Stewart, J.-M. Portal, M. Bocquet, D. Querlioz, D. Drouin, J. Rouat, Y. Beilliard, F. Alibart.</p>
<p class="pub-venue"><em>Frontiers in Neuroscience</em>, 2022.</p>
<p class="pub-links"><a href="https://doi.org/10.3389/fnins.2022.983950"><i class="fas fa-file-alt"></i>paper</a> <a href="https://github.com/nikhil-garg/VDSP_Nengo"><i class="fab fa-github"></i>code</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>

<article class="pub-card" id="phd-thesis" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="PhD thesis hardware learning thumbnail"><rect width="320" height="180" fill="#fafafa"/><rect x="74" y="36" width="172" height="112" rx="8" fill="#e8eef2" stroke="#50677c" stroke-width="3"/><path d="M94 64h132M94 88h132M94 112h132" stroke="#50677c" stroke-width="4"/><circle cx="112" cy="64" r="6" fill="#9a6b5b"/><circle cx="158" cy="88" r="6" fill="#7aa66a"/><circle cx="204" cy="112" r="6" fill="#587f9a"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">in-memory learning thesis</text></svg>
</div>
<div>
<p class="pub-title">Neuromorphic in-memory learning with analog integrated circuits and nanoscale memristive devices.</p>
<p class="pub-authors">N. Garg.</p>
<p class="pub-venue">PhD thesis, Universite de Lille and Universite de Sherbrooke, 2024.</p>
<p class="pub-links"><a href="/projects/#unico">UNICO</a></p>
</div>
</article>

## IONOS & Bio-Signal Processing

<article class="pub-card" id="oect-array-snn" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="OECT array signal classification thumbnail"><rect width="320" height="180" fill="#f8fbfa"/><g fill="#e3f0e4" stroke="#617a5f" stroke-width="2"><rect x="52" y="46" width="34" height="28" rx="4"/><rect x="96" y="46" width="34" height="28" rx="4"/><rect x="140" y="46" width="34" height="28" rx="4"/><rect x="184" y="46" width="34" height="28" rx="4"/><rect x="228" y="46" width="34" height="28" rx="4"/></g><path d="M52 116c20-34 38-34 58 0s38 34 58 0 38-34 58 0 38 34 58 0" fill="none" stroke="#587f9a" stroke-width="5"/><path d="M72 94v46M248 94v46" stroke="#555" stroke-width="3"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">OECT reservoir classification</text></svg>
</div>
<div>
<p class="pub-title">Neuromorphic signal classification using organic electrochemical transistor array and spiking neural simulations.</p>
<p class="pub-authors">M. Ghazal, A. Kumar, N. Garg, S. Pecqueur, F. Alibart.</p>
<p class="pub-venue"><em>IEEE Sensors Journal</em>, 2024.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/JSEN.2024.3353307"><i class="fas fa-file-alt"></i>paper</a> <a href="/projects/#ionos">IONOS</a></p>
</div>
</article>

<article class="pub-card" id="pedot-structural-plasticity" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="PEDOT dendritic connections thumbnail"><rect width="320" height="180" fill="#fbfaf8"/><circle cx="84" cy="88" r="18" fill="#dfeef4" stroke="#45677a" stroke-width="3"/><circle cx="230" cy="58" r="16" fill="#eef0de" stroke="#697244" stroke-width="3"/><circle cx="230" cy="122" r="16" fill="#eef0de" stroke="#697244" stroke-width="3"/><path d="M100 86c38-18 72-42 114-30M100 92c44 8 74 22 114 30M112 88c26 0 52 0 82 0" fill="none" stroke="#7b6b53" stroke-width="5" stroke-linecap="round"/><path d="M144 75l22-18M158 96l24 18M178 86l18-10" stroke="#7b6b53" stroke-width="4" stroke-linecap="round"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">electropolymerized dendrites</text></svg>
</div>
<div>
<p class="pub-title">Structural plasticity for neuromorphic networks with electropolymerized dendritic PEDOT connections.</p>
<p class="pub-authors">K. Janzakova, I. Balafrej, A. Kumar, N. Garg, C. Scholaert, J. Rouat, D. Drouin, Y. Coffinier, S. Pecqueur, F. Alibart.</p>
<p class="pub-venue"><em>Nature Communications</em>, 2023.</p>
<p class="pub-links"><a href="https://doi.org/10.1038/s41467-023-43887-8"><i class="fas fa-file-alt"></i>paper</a> <a href="/projects/#ionos">IONOS</a></p>
</div>
</article>

<article class="pub-card" id="signals-to-spikes-emg" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="EMG signal to spikes thumbnail"><rect width="320" height="180" fill="#f8fbff"/><path d="M30 78c18-30 28 30 44 0s28-30 44 0 28 30 44 0 28-30 44 0 28 30 44 0 28-30 44 0" fill="none" stroke="#587f9a" stroke-width="5"/><g stroke="#9a6b5b" stroke-width="4"><path d="M70 116v-34"/><path d="M112 138v-44"/><path d="M152 126v-38"/><path d="M196 142v-50"/><path d="M238 120v-34"/></g><rect x="58" y="136" width="198" height="8" rx="4" fill="#d8e6ee"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">signal-to-spike EMG encoding</text></svg>
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
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="EEG valence arousal map thumbnail"><rect width="320" height="180" fill="#fbfaf8"/><circle cx="110" cy="78" r="36" fill="#e7edf2" stroke="#526a7a" stroke-width="3"/><path d="M86 82c18 18 34 18 52 0M96 68h.1M126 68h.1" stroke="#526a7a" stroke-width="6" stroke-linecap="round"/><path d="M184 132h88M228 44v88" stroke="#555" stroke-width="3"/><circle cx="206" cy="72" r="9" fill="#7aa66a"/><circle cx="252" cy="102" r="9" fill="#b06b3b"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">portable EEG affect decoding</text></svg>
</div>
<div>
<p class="pub-title">Decoding the neural signatures of valence and arousal from portable EEG headset.</p>
<p class="pub-authors">N. Garg, R. Garg, A. Anand, V. Baths.</p>
<p class="pub-venue"><em>Frontiers in Human Neuroscience</em>, 2022.</p>
<p class="pub-links"><a href="https://doi.org/10.3389/fnhum.2022.1051463"><i class="fas fa-file-alt"></i>paper</a> <a href="https://github.com/nikhil-garg/Decoding_EEG"><i class="fab fa-github"></i>code</a> <a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

<article class="pub-card" id="alzheimer-bert-speech" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Speech BERT dementia detection thumbnail"><rect width="320" height="180" fill="#f8fbfa"/><path d="M48 72c18-18 38-18 56 0s38 18 56 0 38-18 56 0 38 18 56 0" fill="none" stroke="#587f9a" stroke-width="5"/><rect x="74" y="108" width="172" height="38" rx="6" fill="#e7edf2" stroke="#526a7a" stroke-width="3"/><text x="160" y="133" text-anchor="middle" font-size="20" fill="#526a7a">BERT</text><circle cx="78" cy="60" r="14" fill="#f0e3d7" stroke="#8a694a" stroke-width="3"/><circle cx="244" cy="60" r="14" fill="#e6f0de" stroke="#697244" stroke-width="3"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">acoustic and linguistic markers</text></svg>
</div>
<div>
<p class="pub-title">Alzheimer's dementia detection using acoustic and linguistic features and pre-trained BERT.</p>
<p class="pub-authors">A. Valsaraj, I. Madala, N. Garg, V. Baths.</p>
<p class="pub-venue"><em>ISCMI</em>, 2021.</p>
<p class="pub-links"><a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

<article class="pub-card" id="wheelchair-hybrid-bci" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Hybrid BCI wheelchair thumbnail"><rect width="320" height="180" fill="#f8fbff"/><circle cx="104" cy="126" r="22" fill="#dfeaf5" stroke="#42657f" stroke-width="4"/><circle cx="204" cy="126" r="22" fill="#dfeaf5" stroke="#42657f" stroke-width="4"/><rect x="104" y="76" width="96" height="44" rx="6" fill="#eef0de" stroke="#697244" stroke-width="3"/><path d="M152 76V48M132 54h40" stroke="#555" stroke-width="4"/><path d="M52 46c18-18 34-18 52 0s34 18 52 0 34-18 52 0 34 18 52 0" fill="none" stroke="#9a6b5b" stroke-width="5"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">SSVEP and blink wheelchair control</text></svg>
</div>
<div>
<p class="pub-title">Wheelchair automation by a hybrid BCI system using SSVEP and eye blinks.</p>
<p class="pub-authors">L. Kanungo, N. Garg, A. Bhobe, S. Rajguru, V. Baths.</p>
<p class="pub-venue"><em>IEEE SMC</em>, 2021.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2106.11008"><i class="fas fa-file-alt"></i>arXiv</a> <a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

<article class="pub-card" id="motor-imagery-biometrics" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Motor imagery biometric thumbnail"><rect width="320" height="180" fill="#fbfaf8"/><path d="M80 116c-8-32 4-58 28-70 26-13 60-2 70 25 12-11 34-7 44 8 12 18 7 44-12 56" fill="none" stroke="#526a7a" stroke-width="5"/><rect x="196" y="106" width="56" height="38" rx="5" fill="#e7edf2" stroke="#526a7a" stroke-width="3"/><path d="M210 106v-16c0-20 28-20 28 0v16" fill="none" stroke="#526a7a" stroke-width="4"/><path d="M54 48c20-18 38-18 58 0s38 18 58 0" fill="none" stroke="#9a6b5b" stroke-width="5"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">motor imagery authentication</text></svg>
</div>
<div>
<p class="pub-title">Motor Imagery Based Multimodal Biometric User Authentication System Using EEG.</p>
<p class="pub-authors">A. Valsaraj, I. Madala, N. Garg, M. Patil, V. Baths.</p>
<p class="pub-venue"><em>Cyberworlds</em>, 2020.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/CW49994.2020.00050"><i class="fas fa-file-alt"></i>paper</a> <a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

<article class="pub-card" id="motor-imagery-multiclass" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Multiclass motor imagery thumbnail"><rect width="320" height="180" fill="#f8fbfa"/><circle cx="100" cy="82" r="34" fill="#e7edf2" stroke="#526a7a" stroke-width="3"/><path d="M154 56h94M154 82h94M154 108h94" stroke="#555" stroke-width="4"/><circle cx="176" cy="56" r="8" fill="#7aa66a"/><circle cx="220" cy="82" r="8" fill="#b06b3b"/><circle cx="198" cy="108" r="8" fill="#587f9a"/><path d="M82 84c14 14 24 14 38 0M90 70h.1M112 70h.1" stroke="#526a7a" stroke-width="5" stroke-linecap="round"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">multiclass motor imagery</text></svg>
</div>
<div>
<p class="pub-title">Study of motor imagery for multiclass brain system interface with a special focus in the same limb movement.</p>
<p class="pub-authors">M. Patil, N. Garg, L. Kanungo, V. Baths.</p>
<p class="pub-venue"><em>ICCI\*CC</em>, 2019.</p>
<p class="pub-links"><a href="/projects/#brain-computer-interfaces">BCI</a></p>
</div>
</article>

## Analog AI Hardware

<article class="pub-card" id="all-in-one-analog-ai-hardware" markdown="1">
<div class="pub-figure">
<svg viewBox="0 0 320 180" role="img" aria-label="Analog AI ReRAM array thumbnail"><rect width="320" height="180" fill="#fafafa"/><rect x="64" y="36" width="192" height="108" rx="8" fill="#eef0de" stroke="#697244" stroke-width="3"/><g stroke="#697244" stroke-width="3"><path d="M88 54v72M118 54v72M148 54v72M178 54v72M208 54v72M238 54v72"/><path d="M82 62h156M82 86h156M82 110h156M82 134h156"/></g><circle cx="148" cy="86" r="7" fill="#9a6b5b"/><circle cx="208" cy="110" r="7" fill="#587f9a"/><text x="160" y="168" text-anchor="middle" font-size="16" fill="#333">on-chip training and inference</text></svg>
</div>
<div>
<p class="pub-title">All-in-One Analog AI Hardware: On-Chip Training and Inference with Conductive-Metal-Oxide/HfOx ReRAM Devices.</p>
<p class="pub-authors">D. F. Falcone, V. Clerico, W. Choi, T. Stecconi, F. Horst, L. Begon-Lours, M. Galetta, A. La Porta, N. Garg, F. Alibart, et al.</p>
<p class="pub-venue"><em>Advanced Functional Materials</em>, 2025.</p>
<p class="pub-links"><a href="https://arxiv.org/abs/2502.04524"><i class="fas fa-file-alt"></i>arXiv</a> <a href="/projects/#unico">UNICO</a></p>
</div>
</article>
