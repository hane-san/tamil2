(() => {
  "use strict";

  function ensureShell(id, label) {
    let shell = document.getElementById(id);
    if (!shell) {
      shell = document.createElement("section");
      shell.id = id;
      document.body.appendChild(shell);
    }

    shell.classList.add(id === "audioDock" ? "audio-dock" : "supplement-audio-dock");

    const ids = id === "audioDock"
      ? {
          tamil: "audioTamil",
          japanese: "audioJapanese",
          prev: "audioPrev",
          play: "audioPlay",
          next: "audioNext",
          stop: "audioStop",
          speed: "audioSpeed",
          repeat: "audioRepeat",
          close: "audioClose"
        }
      : {
          tamil: "suppAudioTamil",
          japanese: "suppAudioJapanese",
          prev: "suppAudioPrev",
          play: "suppAudioPlay",
          next: "suppAudioNext",
          stop: "suppAudioStop",
          speed: "suppAudioSpeed",
          repeat: "suppAudioRepeat",
          close: "suppAudioClose"
        };

    if (!document.getElementById(ids.tamil)) {
      shell.innerHTML = `
        <div class="now-playing">
          <span class="audio-label">${label}</span>
          <strong id="${ids.tamil}" lang="ta">—</strong>
          <small id="${ids.japanese}">カードを押すと再生します</small>
        </div>
        <div class="audio-controls">
          <button id="${ids.prev}" type="button" tabindex="-1" aria-hidden="true">‹</button>
          <button id="${ids.play}" type="button" tabindex="-1" aria-hidden="true">▶</button>
          <button id="${ids.next}" type="button" tabindex="-1" aria-hidden="true">›</button>
          <button id="${ids.stop}" type="button" tabindex="-1" aria-hidden="true">■</button>
          <button id="${ids.speed}" type="button" tabindex="-1" aria-hidden="true">1.0×</button>
          <button id="${ids.repeat}" type="button" tabindex="-1" aria-hidden="true">×1</button>
          <button id="${ids.close}" type="button" tabindex="-1" aria-hidden="true">×</button>
        </div>`;
    }

    const keepHidden = () => {
      if (!shell.hidden) shell.hidden = true;
      if (shell.classList.contains("open")) shell.classList.remove("open");
      if (shell.getAttribute("aria-hidden") !== "true") shell.setAttribute("aria-hidden", "true");
    };
    keepHidden();
    new MutationObserver(keepHidden).observe(shell, { attributes: true, attributeFilter: ["hidden", "class", "aria-hidden"] });
    return shell;
  }

  ensureShell("audioDock", "AUDIO");
  ensureShell("supplementAudioDock", "SUPPLEMENT AUDIO");

  window.TAMIL_AUDIO_SHELL_V48 = Object.freeze({ version: "4.8" });
})();
