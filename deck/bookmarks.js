// Section bookmarks: slides marked <!-- .slide: data-bookmark="Name" --> in their station file.
// Shown as a row of buttons while the overview (Esc / O) is open, and on the phone remote.
(function () {
  function list() {
    return Reveal.getSlides()
      .filter((s) => s.dataset.bookmark)
      .map((s) => { const i = Reveal.getIndices(s); return { name: s.dataset.bookmark, h: i.h, v: i.v || 0 }; });
  }
  window.deckBookmarks = list;
  // The phone remote jumps straight into the slide (it leaves the overview).
  window.deckGoto = (h, v) => { if (Reveal.isOverview()) Reveal.toggleOverview(false); Reveal.slide(h, v || 0); };

  const bar = document.createElement('nav');
  bar.className = 'bookmark-bar';
  bar.setAttribute('aria-label', 'Sections');
  document.body.appendChild(bar);

  function render() {
    const cur = Reveal.getIndices().h;
    const marks = list();
    // the current section: the last bookmark at or before the current slide
    let active = -1;
    marks.forEach((m, i) => { if (m.h <= cur) active = i; });
    bar.innerHTML = '';
    marks.forEach((m, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = m.name;
      if (i === active) b.className = 'active';
      // In the overview, a bookmark only moves the selection; Enter (or a click on the slide) opens it.
      b.addEventListener('click', () => { b.blur(); Reveal.slide(m.h, m.v); });
      bar.appendChild(b);
    });
  }

  Reveal.on('overviewshown', () => { render(); bar.classList.add('show'); });
  Reveal.on('overviewhidden', () => bar.classList.remove('show'));
  Reveal.on('slidechanged', () => { if (Reveal.isOverview()) render(); });
})();
