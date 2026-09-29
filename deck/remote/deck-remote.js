// Deck-side remote client. Loaded by index.html only when the URL has ?remote=<token>.
(function () {
  const token = new URLSearchParams(location.search).get('remote');
  if (!token) return;
  const q = encodeURIComponent(token);

  function titleOf(slide) {
    const h = slide && slide.querySelector('h1, h2, h3, h4');
    return h ? h.textContent.trim() : '';
  }

  // Next slide in presentation order (ignores fragments), or null at the end.
  function nextSlide() {
    const all = Reveal.getSlides();
    const i = all.indexOf(Reveal.getCurrentSlide());
    return i > -1 && i < all.length - 1 ? all[i + 1] : null;
  }

  function postState() {
    const idx = Reveal.getIndices();
    const all = Reveal.getSlides();
    const state = {
      h: idx.h, v: idx.v, f: idx.f ?? -1,
      index: all.indexOf(Reveal.getCurrentSlide()) + 1,
      total: all.length,
      title: titleOf(Reveal.getCurrentSlide()),
      nextTitle: titleOf(nextSlide()),
      notesHtml: Reveal.getSlideNotes() || '',
    };
    fetch(`/state?t=${q}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    }).catch(() => {});
  }

  const actions = {
    next: () => Reveal.next(),
    prev: () => Reveal.prev(),
    first: () => Reveal.slide(0, 0),
    last: () => { const s = Reveal.getSlides(); Reveal.slide(s.length - 1, 0); },
  };

  const es = new EventSource(`/events?t=${q}&role=deck`);
  es.addEventListener('cmd', (e) => {
    const fn = actions[JSON.parse(e.data).action];
    if (fn) fn();
  });
  es.addEventListener('open', postState);

  ['ready', 'slidechanged', 'fragmentshown', 'fragmenthidden'].forEach((ev) => Reveal.on(ev, postState));
  if (Reveal.isReady()) postState();
})();
