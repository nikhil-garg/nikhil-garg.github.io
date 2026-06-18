---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

Articles are also listed on [Google Scholar]({{site.author.googlescholar}}).

<style>
.pub-card {
  border-top: 1px solid #d9d9d9;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(128px, 180px) 1fr;
  margin: 1.15rem 0 1.65rem;
  padding-top: 1.15rem;
  transition: border-color 160ms ease, transform 160ms ease;
}
.pub-card:hover {
  border-top-color: #526a7a;
  transform: translateY(-1px);
}
.pub-figure {
  align-self: start;
  background: #f7f8fb;
  border: 1px solid #d7dbe2;
  border-radius: 6px;
  color: #333;
  overflow: hidden;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}
.pub-card:hover .pub-figure {
  border-color: #b8c8d2;
  box-shadow: 0 8px 22px rgba(17, 24, 39, 0.06);
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
.pub-image {
  aspect-ratio: 16 / 10;
  background: #fff;
  display: block;
  object-fit: contain;
  padding: 0.35rem;
  width: 100%;
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

## 2026

<article class="pub-card" id="personalized-spiking-neural-networks" markdown="1">
<div class="pub-figure pub-figure--vitfox">
<img class="pub-image" src="/images/publications/garg-2026-apl-ml-feature.png" alt="Personalized spiking neural networks with EEG and ferroelectric synapses">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1063/5.0319912">Personalized spiking neural networks with ferroelectric synapses for EEG signal processing.</a></p>
<p class="pub-authors"><strong>N. Garg</strong>, A. Song, N. Plessnig, N. Savoia, L. Bégon-Lours.</p>
<p class="pub-venue"><em>APL Machine Learning</em>, 2026.</p>
<p class="pub-links"><a href="https://doi.org/10.1063/5.0319912"><i class="fas fa-link"></i>DOI</a> <a href="https://arxiv.org/abs/2601.00020"><i class="fas fa-file-alt"></i>arXiv</a> <a href="https://github.com/NEO-ETHZ/EEG-Ferro"><i class="fab fa-github"></i>code</a></p>
</div>
</article>


<article class="pub-card" id="analog-weight-update-ferroelectric-hafnia" markdown="1">
<div class="pub-figure pub-figure--vitfox">
<img class="pub-image" src="/images/publications/baigol-2026-aem-feature.png" alt="Analog ferroelectric hafnia weight update feature figure">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1002/aelm.202500823">Analog Weight Update Rule in Ferroelectric Hafnia, Using picoJoule Programming Pulses.</a></p>
<p class="pub-authors">A. Baigol, <strong>N. Garg</strong>, M. Mazza, Y. Zhang, E. Zaccaria, W. Choi, B. J. Offrein, L. Bégon-Lours.</p>
<p class="pub-venue"><em>Advanced Electronic Materials</em>, 2026.</p>
<p class="pub-links"><a href="https://doi.org/10.1002/aelm.202500823"><i class="fas fa-link"></i>DOI</a> <a href="https://arxiv.org/abs/2601.01186"><i class="fas fa-file-alt"></i>arXiv</a></p>
</div>
</article>

<article class="pub-card" id="vdsp-memristors" markdown="1">
<div class="pub-figure pub-figure--unico">
<div class="pub-thumb" aria-label="local plasticity in synapses thumbnail">
<i class="fas fa-project-diagram"></i>
<span class="pub-thumb__topic">local plasticity in synapses</span>
</div>
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1038/s43246-025-01033-5">Unsupervised local learning based on voltage-dependent synaptic plasticity for resistive and ferroelectric synapses.</a></p>
<p class="pub-authors"><strong>N. Garg</strong>, I. Balafrej, J. H. Q. Palhares, L. Bégon-Lours, D. Florini, D. F. Falcone, T. Stecconi, V. Bragaglia, B. J. Offrein, J.-M. Portal, D. Querlioz, Y. Beilliard, D. Drouin, F. Alibart.</p>
<p class="pub-venue"><em>Communications Materials</em>, 2026.</p>
<p class="pub-links"><a href="https://doi.org/10.1038/s43246-025-01033-5"><i class="fas fa-link"></i>DOI</a> <a href="https://www.nature.com/articles/s43246-025-01033-5"><i class="fas fa-file-alt"></i>paper</a> <a href="https://github.com/nikhil-garg/VDSP-Memristors"><i class="fab fa-github"></i>code</a></p>
</div>
</article>

## 2025

<article class="pub-card" id="energy-convergence-ferro" markdown="1">
<div class="pub-figure pub-figure--vitfox">
<img class="pub-image" src="/images/publications/garg-2026-energy-convergence-feature.png" alt="Mixed-precision in-memory training schematic for energy-convergence tradeoff">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1109/ccmcc67628.2025.11380809">Energy-convergence trade off for the training of neural networks on bio-inspired hardware.</a></p>
<p class="pub-authors"><strong>N. Garg</strong>, P. U. Vicandi, Y. Zhang, A. Baigol, D. F. Falcone, S. R. Mamidala, B. J. Offrein, L. Bégon-Lours.</p>
<p class="pub-venue"><em>CCMCC</em>, 2025.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/ccmcc67628.2025.11380809"><i class="fas fa-link"></i>DOI</a> <a href="https://arxiv.org/abs/2509.18121"><i class="fas fa-file-alt"></i>arXiv</a> <a href="https://github.com/nikhil-garg/Energy-convergence-Ferro-CCMCC2026"><i class="fab fa-github"></i>code</a></p>
</div>
</article>

<article class="pub-card" id="all-in-one-analog-ai-hardware" markdown="1">
<div class="pub-figure pub-figure--unico">
<img class="pub-image" src="/images/publications/falcone-2025-all-in-one-analog-ai-feature.png" alt="BEOL-integrated analog ReRAM array and 1T1R unit cell">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1002/adfm.202504688">All-in-One Analog AI Hardware: On-Chip Training and Inference with Conductive-Metal-Oxide/HfOx ReRAM Devices.</a></p>
<p class="pub-authors">D. F. Falcone, V. Clerico, W. Choi, T. Stecconi, F. Horst, L. Bégon-Lours, M. Galetta, A. La Porta, <strong>N. Garg</strong>, F. Alibart, et al.</p>
<p class="pub-venue"><em>Advanced Functional Materials</em>, 2025.</p>
<p class="pub-links"><a href="https://doi.org/10.1002/adfm.202504688"><i class="fas fa-link"></i>DOI</a> <a href="https://arxiv.org/abs/2502.04524"><i class="fas fa-file-alt"></i>arXiv</a></p>
</div>
</article>

## 2024

<article class="pub-card" id="cmos-lif-neuron" markdown="1">
<div class="pub-figure pub-figure--unico">
<img class="pub-image" src="/images/publications/garg-2024-icons-cmos-lif-feature.jpg" alt="CMOS analog LIF neuron feature figure">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1109/icons62911.2024.00034">Versatile CMOS analog LIF neuron for memristor-integrated neuromorphic circuits.</a></p>
<p class="pub-authors"><strong>N. Garg</strong>, D. Florini, P. Dufour, E. Muhr, M. C. Faye, M. Bocquet, D. Querlioz, Y. Beilliard, D. Drouin, F. Alibart, J.-M. Portal.</p>
<p class="pub-venue"><em>ICONS</em>, 2024.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/icons62911.2024.00034"><i class="fas fa-link"></i>DOI</a> <a href="https://arxiv.org/abs/2406.19667"><i class="fas fa-file-alt"></i>arXiv</a> <a href="/blog/cmos-lif-neuron/"><i class="fas fa-link"></i>overview</a></p>
</div>
</article>

<article class="pub-card" id="pcm-cryo-snn" markdown="1">
<div class="pub-figure pub-figure--unico">
<img class="pub-image" src="/images/publications/joao-2024-pcm-cryo-snn-feature.jpg" alt="Embedded PCM device and cryogenic probe-station setup">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1038/s44335-024-00008-y">28 nm FDSOI embedded PCM exhibiting near zero drift at 12 K for cryogenic SNNs.</a></p>
<p class="pub-authors">J. H. Q. Palhares, <strong>N. Garg</strong>, P.-A. Mouny, Y. Beilliard, J. Sandrini, F. Arnaud, L. Anghel, F. Alibart, D. Drouin, P. Galy.</p>
<p class="pub-venue"><em>npj Unconventional Computing</em>, 2024.</p>
<p class="pub-links"><a href="https://doi.org/10.1038/s44335-024-00008-y"><i class="fas fa-link"></i>DOI</a></p>
</div>
</article>

<article class="pub-card" id="pcm-drift-compensation" markdown="1">
<div class="pub-figure pub-figure--unico">
<img class="pub-image" src="/images/publications/joao-2024-pcm-drift-compensation-feature.png" alt="Phase-change memory drift mitigation feature graphic">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.3390/jlpea14040050">Phase change memory drift compensation in spiking neural networks using a non-linear current scaling strategy.</a></p>
<p class="pub-authors">J. H. Q. Palhares, <strong>N. Garg</strong>, Y. Beilliard, L. Anghel, F. Alibart, D. Drouin, P. Galy.</p>
<p class="pub-venue"><em>Journal of Low Power Electronics and Applications</em>, 2024.</p>
<p class="pub-links"><a href="https://doi.org/10.3390/jlpea14040050"><i class="fas fa-link"></i>DOI</a></p>
</div>
</article>

<article class="pub-card" id="phd-thesis" markdown="1">
<div class="pub-figure pub-figure--unico">
<img class="pub-image" src="/images/publications/garg-2024-thesis-feature.jpg" alt="Neuromorphic chip micrograph with analog blocks and synaptic array">
</div>
<div>
<p class="pub-title">Neuromorphic in-memory learning with analog integrated circuits and nanoscale memristive devices.</p>
<p class="pub-authors"><strong>N. Garg</strong>.</p>
<p class="pub-venue">PhD thesis, Université de Lille and Université de Sherbrooke, 2024.</p>
</div>
</article>

<article class="pub-card" id="oect-array-snn" markdown="1">
<div class="pub-figure pub-figure--ionos">
<img class="pub-image" src="/images/publications/ghazal-2024-oect-array-snn-feature.jpg" alt="OECT array signals-to-spikes gesture classification workflow">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1109/JSEN.2024.3353307">Neuromorphic signal classification using organic electrochemical transistor array and spiking neural simulations.</a></p>
<p class="pub-authors">M. Ghazal, A. Kumar, <strong>N. Garg</strong>, S. Pecqueur, F. Alibart.</p>
<p class="pub-venue"><em>IEEE Sensors Journal</em>, 2024.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/JSEN.2024.3353307"><i class="fas fa-link"></i>DOI</a></p>
</div>
</article>

## 2023

<article class="pub-card" id="vdsp-convolutional-snn" markdown="1">
<div class="pub-figure pub-figure--unico">
<img class="pub-image" src="/images/publications/goupy-2023-vdsp-convolutional-snn-feature.jpg" alt="Sparse convolutional spiking neural network with VDSP neuron model">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1088/2634-4386/acad98">Unsupervised and efficient learning in sparsely activated convolutional spiking neural networks enabled by voltage-dependent synaptic plasticity.</a></p>
<p class="pub-authors">G. Goupy, A. Juneau-Fecteau, <strong>N. Garg</strong>, I. Balafrej, F. Alibart, L. Fréchette, D. Drouin, Y. Beilliard.</p>
<p class="pub-venue"><em>Neuromorphic Computing and Engineering</em>, 2023.</p>
<p class="pub-links"><a href="https://doi.org/10.1088/2634-4386/acad98"><i class="fas fa-link"></i>DOI</a></p>
</div>
</article>

<article class="pub-card" id="pedot-structural-plasticity" markdown="1">
<div class="pub-figure pub-figure--ionos">
<img class="pub-image" src="/images/publications/janzakova-2023-pedot-structural-plasticity-feature.jpg" alt="PEDOT dendritic structural plasticity connecting neuromorphic network nodes">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1038/s41467-023-43887-8">Structural plasticity for neuromorphic networks with electropolymerized dendritic PEDOT connections.</a></p>
<p class="pub-authors">K. Janzakova, I. Balafrej, A. Kumar, <strong>N. Garg</strong>, C. Scholaert, J. Rouat, D. Drouin, Y. Coffinier, S. Pecqueur, F. Alibart.</p>
<p class="pub-venue"><em>Nature Communications</em>, 2023.</p>
<p class="pub-links"><a href="https://doi.org/10.1038/s41467-023-43887-8"><i class="fas fa-link"></i>DOI</a></p>
</div>
</article>

## 2022

<article class="pub-card" id="voltage-dependent-synaptic-plasticity" markdown="1">
<div class="pub-figure pub-figure--unico">
<img class="pub-image" src="/images/publications/garg-2022-vdsp-feature.jpg" alt="Voltage-dependent synaptic plasticity feature figure">
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.3389/fnins.2022.983950">Voltage-dependent synaptic plasticity: Unsupervised probabilistic Hebbian plasticity rule based on neurons membrane potential.</a></p>
<p class="pub-authors"><strong>N. Garg</strong>, I. Balafrej, T. C. Stewart, J.-M. Portal, M. Bocquet, D. Querlioz, D. Drouin, J. Rouat, Y. Beilliard, F. Alibart.</p>
<p class="pub-venue"><em>Frontiers in Neuroscience</em>, 2022.</p>
<p class="pub-links"><a href="https://doi.org/10.3389/fnins.2022.983950"><i class="fas fa-link"></i>DOI</a> <a href="https://github.com/nikhil-garg/VDSP_Nengo"><i class="fab fa-github"></i>code</a></p>
</div>
</article>

<article class="pub-card" id="portable-eeg-valence-arousal" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="portable EEG affect decoding thumbnail">
<i class="fas fa-brain"></i>
<span class="pub-thumb__topic">portable EEG affect decoding</span>
</div>
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.3389/fnhum.2022.1051463">Decoding the neural signatures of valence and arousal from portable EEG headset.</a></p>
<p class="pub-authors"><strong>N. Garg</strong>, R. Garg, A. Anand, V. Baths.</p>
<p class="pub-venue"><em>Frontiers in Human Neuroscience</em>, 2022.</p>
<p class="pub-links"><a href="https://doi.org/10.3389/fnhum.2022.1051463"><i class="fas fa-link"></i>DOI</a> <a href="https://github.com/nikhil-garg/Decoding_EEG"><i class="fab fa-github"></i>code</a></p>
</div>
</article>

## 2021

<article class="pub-card" id="signals-to-spikes-emg" markdown="1">
<div class="pub-figure pub-figure--ionos">
<div class="pub-thumb" aria-label="signal-to-spike EMG encoding thumbnail">
<i class="fas fa-bolt"></i>
<span class="pub-thumb__topic">signal-to-spike EMG encoding</span>
</div>
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1145/3477145.3477267">Signals to spikes for neuromorphic regulated reservoir computing and EMG hand gesture recognition.</a></p>
<p class="pub-authors"><strong>N. Garg</strong>, I. Balafrej, Y. Beilliard, D. Drouin, F. Alibart, J. Rouat.</p>
<p class="pub-venue"><em>ICONS</em>, 2021.</p>
<p class="pub-links"><a href="https://doi.org/10.1145/3477145.3477267"><i class="fas fa-link"></i>DOI</a> <a href="https://arxiv.org/abs/2106.11169"><i class="fas fa-file-alt"></i>arXiv</a> <a href="https://github.com/nikhil-garg/EMG_exp"><i class="fab fa-github"></i>code</a></p>
</div>
</article>

<article class="pub-card" id="alzheimer-bert-speech" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="speech markers + BERT thumbnail">
<i class="fas fa-chart-line"></i>
<span class="pub-thumb__topic">speech markers + BERT</span>
</div>
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1109/iscmi53840.2021.9654804">Alzheimer’s dementia detection using acoustic and linguistic features and pre-trained BERT.</a></p>
<p class="pub-authors">A. Valsaraj, I. Madala, <strong>N. Garg</strong>, V. Baths.</p>
<p class="pub-venue"><em>ISCMI</em>, 2021.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/iscmi53840.2021.9654804"><i class="fas fa-link"></i>DOI</a></p>
</div>
</article>

<article class="pub-card" id="wheelchair-hybrid-bci" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="SSVEP + blink control thumbnail">
<i class="fas fa-wheelchair"></i>
<span class="pub-thumb__topic">SSVEP + blink control</span>
</div>
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1109/smc52423.2021.9659266">Wheelchair automation by a hybrid BCI system using SSVEP and eye blinks.</a></p>
<p class="pub-authors">L. Kanungo, <strong>N. Garg</strong>, A. Bhobe, S. Rajguru, V. Baths.</p>
<p class="pub-venue"><em>IEEE SMC</em>, 2021.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/smc52423.2021.9659266"><i class="fas fa-link"></i>DOI</a> <a href="https://arxiv.org/abs/2106.11008"><i class="fas fa-file-alt"></i>arXiv</a></p>
</div>
</article>

## 2020

<article class="pub-card" id="motor-imagery-biometrics" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="motor imagery authentication thumbnail">
<i class="fas fa-user-lock"></i>
<span class="pub-thumb__topic">motor imagery authentication</span>
</div>
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1109/CW49994.2020.00050">Motor Imagery Based Multimodal Biometric User Authentication System Using EEG.</a></p>
<p class="pub-authors">A. Valsaraj, I. Madala, <strong>N. Garg</strong>, M. Patil, V. Baths.</p>
<p class="pub-venue"><em>Cyberworlds</em>, 2020.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/CW49994.2020.00050"><i class="fas fa-link"></i>DOI</a></p>
</div>
</article>

## 2019

<article class="pub-card" id="motor-imagery-multiclass" markdown="1">
<div class="pub-figure pub-figure--bci">
<div class="pub-thumb" aria-label="multiclass motor imagery thumbnail">
<i class="fas fa-project-diagram"></i>
<span class="pub-thumb__topic">multiclass motor imagery</span>
</div>
</div>
<div>
<p class="pub-title"><a href="https://doi.org/10.1109/iccicc46617.2019.9146105">Study of motor imagery for multiclass brain system interface with a special focus in the same limb movement.</a></p>
<p class="pub-authors">M. Patil, <strong>N. Garg</strong>, L. Kanungo, V. Baths.</p>
<p class="pub-venue"><em>ICCI\*CC</em>, 2019.</p>
<p class="pub-links"><a href="https://doi.org/10.1109/iccicc46617.2019.9146105"><i class="fas fa-link"></i>DOI</a></p>
</div>
</article>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {% for pub in site.data.publications %}
    {
      "@type": "ScholarlyArticle",
      "name": {{ pub.title | jsonify }},
      "url": {{ site.url | append: pub.url | jsonify }},
      {% if pub.doi %}"identifier": {{ pub.doi | prepend: "https://doi.org/" | jsonify }},{% endif %}
      {% if pub.year %}"datePublished": {{ pub.year | jsonify }},{% endif %}
      "isPartOf": {
        "@type": "Periodical",
        "name": {{ pub.venue | jsonify }}
      },
      "author": [
        {% for author in pub.authors %}
        {
          "@type": "Person",
          "name": {{ author | jsonify }}
        }{% unless forloop.last %},{% endunless %}
        {% endfor %}
      ],
      "keywords": [
        {% for topic in pub.topics %}
        {{ topic.name | jsonify }}{% unless forloop.last %},{% endunless %}
        {% endfor %}
      ]
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
</script>
