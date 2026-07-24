const CACHE_NAME = "tamil2-spoken-tamil-v28-part0-audio-20260723";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles-v28.css",
  "./curriculum-v28.js",
  "./travel-v28.js",
  "./grammar-v28.js",
  "./reference-v28.js",
  "./transcription-v28.js",
  "./app-v28.js",
  "./app-icon.png",
  "./manifest-v28.webmanifest"
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
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
