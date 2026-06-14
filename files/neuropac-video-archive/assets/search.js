
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
    function run(){
      const q = input.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const text = (card.dataset.title + ' ' + card.dataset.speaker + ' ' + card.dataset.year + ' ' + card.dataset.event + ' ' + card.dataset.topics).toLowerCase();
        const ok = !q || text.includes(q);
        card.style.display = ok ? '' : 'none';
        if(ok) visible++;
      });
      if(count) count.textContent = visible + ' videos';
    }
    input.addEventListener('input', run); run();
  }
  const homeSearch = document.querySelector('[data-home-search]');
  if(homeSearch){
    homeSearch.addEventListener('keydown', function(e){
      if(e.key === 'Enter' && homeSearch.value.trim()){
        window.location.href = 'videos/index.html?q=' + encodeURIComponent(homeSearch.value.trim());
      }
    });
  }
  const params = new URLSearchParams(window.location.search);
  if(input && params.get('q')){
    input.value = params.get('q');
    input.dispatchEvent(new Event('input'));
  }
  initDirectorySearch();
  document.addEventListener('DOMContentLoaded', initDirectorySearch);
})();
