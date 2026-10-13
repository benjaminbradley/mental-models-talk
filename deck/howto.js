// "How to view these slides" pop-up for the published site (not shown when presenting locally;
// window.DECK_IS_LOCAL is set in index.html). Opens on a visitor's first load; H or the corner
// button reopens it. See README § How-to pop-up.
(function () {
  const preview = new URLSearchParams(location.search).has('howto'); // ?howto: show it locally too
  if (window.DECK_IS_LOCAL && !preview) return;
  const KEY = 'deck-howto-seen';

  const overlay = document.createElement('div');
  overlay.className = 'howto';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'howto-title');
  overlay.innerHTML = `
    <div class="howto-card">
      <h2 id="howto-title">How to view these slides</h2>
      <dl>
        <dt><kbd>&rarr;</kbd> <kbd>&larr;</kbd> <kbd>Space</kbd></dt>
        <dd>Next / back. Or use the arrows at the bottom right; on a phone, swipe
          (turn it sideways for bigger slides).
          Many slides build step by step, so keep going.</dd>
        <dt><kbd>Esc</kbd> or <kbd>O</kbd></dt>
        <dd>Overview of every slide. The <b>section buttons</b> along the top jump to each part
          of the talk; click a slide (or press <kbd>Enter</kbd>) to open it.</dd>
        <dt><kbd>S</kbd></dt>
        <dd>Speaker notes: the narration behind each slide, in a separate window
          (allow pop-ups if nothing opens).</dd>
        <dt><kbd>F</kbd></dt>
        <dd>Full screen.</dd>
        <dt><kbd>H</kbd></dt>
        <dd>Show this help again.</dd>
      </dl>
      <div class="howto-actions">
        <button type="button" class="howto-start">Start the slides</button>
        <button type="button" class="howto-overview">Show the overview</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const corner = document.createElement('button');
  corner.type = 'button';
  corner.className = 'howto-open';
  corner.textContent = 'How to navigate';
  corner.setAttribute('aria-label', 'How to navigate these slides');
  document.body.appendChild(corner);

  function open() {
    overlay.classList.add('show');
    Reveal.configure({ keyboard: false });
    overlay.querySelector('.howto-start').focus();
  }
  function close(thenOverview) {
    overlay.classList.remove('show');
    Reveal.configure({ keyboard: true });
    try { localStorage.setItem(KEY, '1'); } catch (e) { /* storage unavailable: show again next time */ }
    corner.blur();
    if (thenOverview && !Reveal.isOverview()) Reveal.toggleOverview(true);
  }

  overlay.querySelector('.howto-start').addEventListener('click', () => close(false));
  overlay.querySelector('.howto-overview').addEventListener('click', () => close(true));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(false); });
  corner.addEventListener('click', open);
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (overlay.classList.contains('show')) {
      if (e.key === 'Escape') { e.preventDefault(); close(false); }
    } else if (e.key === 'h' || e.key === 'H') {
      e.preventDefault(); open();
    }
  });

  let seen = false;
  try { seen = localStorage.getItem(KEY) === '1'; } catch (e) { /* treat as first visit */ }
  if (!seen || preview) open();
})();
