
(function(){
  function initDirectorySearch(){
    const directorySearch = document.querySelector('[data-directory-search]');
    if(!directorySearch || directorySearch.dataset.ready) return;
    directorySearch.dataset.ready = '1';
    const items = Array.from(document.querySelectorAll('[data-directory-item]'));
    const count = document.querySelector('[data-directory-count]');
    function filterDirectory(){
      const q = directorySearch.value.trim().toLowerCase();
      let visible = 0;
      items.forEach(item => {
        const ok = !q || (item.dataset.directoryText || item.textContent || '').toLowerCase().includes(q);
        item.hidden = !ok;
        if(ok) visible++;
      });
      if(count) count.textContent = visible + ' shown';
    }
    directorySearch.addEventListener('input', filterDirectory);
    filterDirectory();
  }
  const input = document.querySelector('[data-video-search]');
  if(input){
    const cards = Array.from(document.querySelectorAll('.video-card'));
    const count = document.querySelector('[data-result-count]');
    const grid = cards[0] ? cards[0].closest('.grid') : null;
    const pageSize = 20;
    let currentPage = 1;
    let pager;

    function videoText(card){
      return [
        card.dataset.title,
        card.dataset.speaker,
        card.dataset.year,
        card.dataset.event,
        card.dataset.topics
      ].filter(Boolean).join(' ').toLowerCase();
    }

    function ensurePager(){
      if(pager || !grid) return pager;
      pager = document.createElement('nav');
      pager.className = 'video-pagination';
      pager.setAttribute('aria-label', 'Video pages');
      grid.after(pager);
      return pager;
    }

    function pageItems(totalPages){
      if(totalPages <= 7) return Array.from({length: totalPages}, (_, i) => i + 1);
      const keep = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
      if(currentPage <= 4) [2, 3, 4, 5].forEach(n => keep.add(n));
      if(currentPage >= totalPages - 3) [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1].forEach(n => keep.add(n));
      const pages = Array.from(keep).filter(n => n >= 1 && n <= totalPages).sort((a, b) => a - b);
      return pages.flatMap((n, i) => i && n - pages[i - 1] > 1 ? ['gap', n] : [n]);
    }

    function goToPage(page){
      currentPage = page;
      run(false);
      if(grid){
        grid.scrollIntoView({
          block: 'start',
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      }
    }

    function button(label, page, disabled, isPage){
      const el = document.createElement('button');
      el.type = 'button';
      el.textContent = label;
      el.disabled = disabled;
      if(isPage && page === currentPage){
        el.className = 'active';
        el.setAttribute('aria-current', 'page');
      }
      if(!disabled) el.addEventListener('click', () => goToPage(page));
      return el;
    }

    function renderPager(totalPages){
      const el = ensurePager();
      if(!el) return;
      el.replaceChildren();
      el.hidden = totalPages <= 1;
      if(totalPages <= 1) return;
      el.append(button('Prev', Math.max(1, currentPage - 1), currentPage === 1, false));
      pageItems(totalPages).forEach(item => {
        if(item === 'gap'){
          const gap = document.createElement('span');
          gap.className = 'video-pagination__gap';
          gap.textContent = '...';
          el.append(gap);
        } else {
          el.append(button(String(item), item, false, true));
        }
      });
      el.append(button('Next', Math.min(totalPages, currentPage + 1), currentPage === totalPages, false));
    }

    function updateCount(total, first, last){
      if(!count) return;
      if(total === 0){
        count.textContent = '0 videos';
      } else if(total <= pageSize){
        count.textContent = total + (total === 1 ? ' video' : ' videos');
      } else {
        count.textContent = first + '-' + last + ' of ' + total + ' videos';
      }
    }

    function run(resetPage){
      if(resetPage) currentPage = 1;
      const q = input.value.trim().toLowerCase();
      const matches = cards.filter(card => !q || videoText(card).includes(q));
      const totalPages = Math.max(1, Math.ceil(matches.length / pageSize));
      currentPage = Math.min(currentPage, totalPages);
      const start = (currentPage - 1) * pageSize;
      const pageCards = new Set(matches.slice(start, start + pageSize));
      cards.forEach(card => {
        card.hidden = !pageCards.has(card);
      });
      updateCount(matches.length, start + 1, Math.min(start + pageSize, matches.length));
      renderPager(totalPages);
    }

    input.addEventListener('input', () => run(true));
    const params = new URLSearchParams(window.location.search);
    if(params.get('q')) input.value = params.get('q');
    run(false);
  }
  const homeSearch = document.querySelector('[data-home-search]');
  if(homeSearch){
    homeSearch.addEventListener('keydown', function(e){
      if(e.key === 'Enter' && homeSearch.value.trim()){
        window.location.href = 'videos/index.html?q=' + encodeURIComponent(homeSearch.value.trim());
      }
    });
  }
  initDirectorySearch();
  document.addEventListener('DOMContentLoaded', initDirectorySearch);
})();
