const CACHE_NAME = "tamil2-tn-sst-v48-preview-20260727";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles-v28.css",
  "./styles-supplements-v46.css",
  "./styles-ui-v48.css",
  "./tamil-core-v30.js",
  "./reference-v30.js",
  "./lesson01-v30.js",
  "./lesson02-v30.js",
  "./lesson03-v31.js",
  "./lesson04-v31.js",
  "./lesson05-v32.js",
  "./lesson06-v32.js",
  "./lesson07-v33.js",
  "./lesson08-v33.js",
  "./lesson09-v35.js",
  "./lesson10-v35.js",
  "./lesson11-v36.js",
  "./lesson12-v36.js",
  "./lesson13-v37.js",
  "./lesson14-v37.js",
  "./lesson15-v38.js",
  "./lesson16-v38.js",
  "./lesson17-v39.js",
  "./lesson18-v39.js",
  "./lesson19-v40.js",
  "./lesson20-v40.js",
  "./pedagogy-v34.js",
  "./clarity-v41.js",
  "./reading-v31.js",
  "./curriculum-v41.js",
  "./audio-shell-v48.js",
  "./app-v28.js",
  "./supplement-preview-loader-v48.js",
  "./supplements-v42.js",
  "./supplementA-v42.js",
  "./supplementB-v42.js",
  "./supplementC-v43.js",
  "./supplementD-v43.js",
  "./supplementE-v44.js",
  "./supplementF-v44.js",
  "./supplementG-v45.js",
  "./supplementH-v45.js",
  "./supplementH-clarity-v45.js",
  "./copy-polish-v47.js",
  "./supplement-ui-v42.js",
  "./supplement-app-v46.js",
  "./ui-controls-v48.js",
  "./app-icon.png",
  "./manifest-v41.webmanifest"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
