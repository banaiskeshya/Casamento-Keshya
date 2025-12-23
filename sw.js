const CACHE = "casamento-keshya-v1";
const ASSETS = [
  "/Casamento-Keshya/",
  "/Casamento-Keshya/index.html",
  "/Casamento-Keshya/manifest.webmanifest",
  "/Casamento-Keshya/icon-192.png",
  "/Casamento-Keshya/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
