(() => {
  'use strict';

  const lessons = window.TAMIL_LESSONS || [];
  const app = document.getElementById('app');
  if (!app || !lessons.length) return;

  const variantMap = new Map();
  let scheduled = false;

  function collect(value){
    if (!value || typeof value !== 'object') return;
    if (typeof value.tamil === 'string') {
      const key = value.tts || value.tamil;
      if (value.written || value.chennai) {
        const current = variantMap.get(key) || {};
        if (value.written && value.written !== value.tamil) current.written = value.written;
        if (value.chennai && value.chennai !== value.tamil) current.chennai = value.chennai;
        variantMap.set(key, current);
      }
    }
    Object.values(value).forEach(child => {
      if (Array.isArray(child)) child.forEach(collect);
      else if (child && typeof child === 'object') collect(child);
    });
  }
  lessons.forEach(collect);

  const escapeHTML = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const kana = text => window.TAMIL_KANA?.tamilToKana?.(text) || '';

  function variantHTML(variants){
    const rows = [];
    if (variants.chennai) {
      rows.push(`<div class="variant-row chennai-variant"><span class="variant-label">チェンナイの耳</span><span class="variant-copy"><b lang="ta">${escapeHTML(variants.chennai)}</b><small>${escapeHTML(kana(variants.chennai))}</small></span></div>`);
    }
    if (variants.written) {
      rows.push(`<div class="variant-row written-variant"><span class="variant-label">書記形</span><span class="variant-copy"><b lang="ta">${escapeHTML(variants.written)}</b><small>文章・字幕で見かける形</small></span></div>`);
    }
    return rows.length ? `<div class="variant-list">${rows.join('')}</div>` : '';
  }

  function patch(){
    scheduled = false;
    const activeIndex = Math.max(0, [...document.querySelectorAll('.lesson-tab')].findIndex(tab => tab.classList.contains('active')));
    const lesson = lessons[activeIndex];
    const head = app.querySelector('.lesson-head');
    if (head && !head.querySelector('.register-note')) {
      const note = document.createElement('p');
      note.className = 'register-note';
      note.textContent = lesson?.register || '標準口語を主表示｜チェンナイ・書記形は補助';
      head.appendChild(note);
    }

    app.querySelectorAll('.katakana').forEach(katakana => {
      const roman = katakana.parentElement?.querySelector(':scope > .roman');
      if (roman && roman.previousElementSibling !== katakana) roman.parentElement.insertBefore(katakana, roman);
    });
    app.querySelectorAll('.roman').forEach(roman => roman.classList.add('structure-roman'));

    app.querySelectorAll('.js-speak').forEach(button => {
      const host = button.parentElement;
      if (!host || host.querySelector(':scope > .variant-list')) return;
      const variants = variantMap.get(button.dataset.tts || '');
      if (!variants) return;
      host.insertAdjacentHTML('beforeend', variantHTML(variants));
    });
  }

  function schedulePatch(){
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(patch);
  }

  new MutationObserver(schedulePatch).observe(app, {childList:true, subtree:true});
  schedulePatch();
})();
