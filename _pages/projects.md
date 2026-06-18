---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: false
redirect_from:
  - /portfolio/
---

<section class="site-card-grid" aria-label="Project overview">
  {% for project in site.data.projects %}
    {% include card.html
      title=project.title
      url=project.url
      meta=project.meta
      cluster_id=project.cluster
      card_type="CreativeWork"
    %}
  {% endfor %}
</section>
