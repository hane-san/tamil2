(() => {
  "use strict";

  const STORAGE_KEY = "tamil-audio-preferences-v48";
  const defaults = Object.freeze({ rate: 1, repeats: 1 });
  let preferences = loadPreferences();

  function loadPreferences() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        rate: Number(stored.rate) === 0.72 ? 0.72 : 1,
        repeats: Number(stored.repeats) === 2 ? 2 : 1
      };
    } catch (_error) {
      return { ...defaults };
    }
  }

  function savePreferences() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch (_error) {
      // Audio preferences are optional; playback still works without storage.
    }
  }

  function updateSettingsUi() {
    document.querySelectorAll("[data-audio-rate]").forEach(button => {
      const selected = Number(button.dataset.audioRate) === preferences.rate;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    document.querySelectorAll("[data-audio-repeats]").forEach(button => {
      const selected = Number(button.dataset.audioRepeats) === preferences.repeats;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  function currentRate(button) {
    return button?.textContent?.includes("ゆっくり") ? 0.72 : 1;
  }

  function currentRepeats(button) {
    return button?.textContent?.includes("2") ? 2 : 1;
  }

  function syncHiddenControl(id, desired, readCurrent) {
    const button = document.getElementById(id);
    if (!button || readCurrent(button) === desired) return;
    button.click();
  }

  function syncPlaybackEngines() {
    syncHiddenControl("audioSpeed", preferences.rate, currentRate);
    syncHiddenControl("audioRepeat", preferences.repeats, currentRepeats);
    syncHiddenControl("suppAudioSpeed", preferences.rate, currentRate);
    syncHiddenControl("suppAudioRepeat", preferences.repeats, currentRepeats);
  }

  function setPreference(key, value) {
    preferences = { ...preferences, [key]: value };
    savePreferences();
    updateSettingsUi();
    syncPlaybackEngines();
  }

  document.getElementById("settingsPanel")?.addEventListener("click", event => {
    const rateButton = event.target.closest("[data-audio-rate]");
    if (rateButton) {
      setPreference("rate", Number(rateButton.dataset.audioRate) === 0.72 ? 0.72 : 1);
      return;
    }
    const repeatButton = event.target.closest("[data-audio-repeats]");
    if (repeatButton) setPreference("repeats", Number(repeatButton.dataset.audioRepeats) === 2 ? 2 : 1);
  });

  function bindSupplementLauncher() {
    const launcher = document.getElementById("supplementHubButton");
    const app = window.TAMIL_SUPPLEMENT_APP_V46;
    if (!launcher || !app || launcher.dataset.launcherV48 === "true") return;

    launcher.dataset.launcherV48 = "true";
    launcher.hidden = false;
    launcher.disabled = false;
    launcher.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      document.getElementById("drawerClose")?.click();
      if (window.location.hash === "#supp=hub") app.syncFromHash();
      else window.location.hash = "#supp=hub";
      queueMicrotask(() => app.syncFromHash());
    }, true);
  }

  updateSettingsUi();
  queueMicrotask(syncPlaybackEngines);

  Promise.resolve(window.TAMIL_SUPPLEMENT_PREVIEW_READY).then(result => {
    if (result === false) return;
    syncPlaybackEngines();
    bindSupplementLauncher();
  });

  window.addEventListener("pageshow", () => {
    updateSettingsUi();
    syncPlaybackEngines();
  });

  window.TAMIL_UI_CONTROLS_V48 = Object.freeze({
    version: "4.8",
    getAudioPreferences: () => ({ ...preferences }),
    syncPlaybackEngines,
    bindSupplementLauncher
  });
})();
