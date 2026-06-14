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
      eyebrow=project.funding
      meta=project.meta
      description=project.summary
      status=project.status
      tags=project.topics
      cluster_id=project.cluster
      card_type="CreativeWork"
    %}
  {% endfor %}
</section>
