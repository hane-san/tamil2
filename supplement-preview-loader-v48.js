(() => {
  "use strict";

  const files = [
    "supplements-v42.js",
    "supplementA-v42.js",
    "supplementB-v42.js",
    "supplementC-v43.js",
    "supplementD-v43.js",
    "supplementE-v44.js",
    "supplementF-v44.js",
    "supplementG-v45.js",
    "supplementH-v45.js",
    "supplementH-clarity-v45.js",
    "copy-polish-v47.js",
    "supplement-ui-v42.js",
    "supplement-app-v46.js"
  ];

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `${src}?v=48`;
      script.async = false;
      script.dataset.supplementPreview = "true";
      script.addEventListener("load", resolve, { once: true });
      script.addEventListener("error", () => reject(new Error(`補講プレビューを読み込めませんでした: ${src}`)), { once: true });
      document.body.appendChild(script);
    });
  }

  window.TAMIL_SUPPLEMENT_PREVIEW_READY = files.reduce(
    (promise, file) => promise.then(() => loadScript(file)),
    Promise.resolve()
  ).catch(error => {
    console.error(error);
    const launcher = document.getElementById("supplementHubButton");
    if (launcher) {
      launcher.hidden = false;
      launcher.disabled = true;
      launcher.textContent = "補講プレビューを読み込めませんでした";
    }
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = "本課は利用できます。補講プレビューの読み込みだけに失敗しました";
      toast.classList.add("show");
    }
    return false;
  });
})();
