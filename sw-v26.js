const CACHE_NAME = "tamil2-spoken-tamil-v26-r2-20260722";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles-v26.css",
  "./curriculum-v25.js",
  "./travel-v25.js",
  "./grammar-v26.js",
  "./app-v26.js",
  "./app-icon.png",
  "./manifest-v26.webmanifest"
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
