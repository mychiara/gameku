const CACHE_NAME = "dunia-anak-cache-v1";

const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./index.css",
  "./manifest.json",
  "./js/core.js",
  "./js/alphabet_db.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        return response;
      }

      // Otherwise fetch from network and cache it dynamically
      return fetch(event.request)
        .then((fetchResponse) => {
          // Check for a valid response
          if (
            !fetchResponse ||
            fetchResponse.status !== 200 ||
            fetchResponse.type !== "basic"
          ) {
            return fetchResponse;
          }

          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            if (
              event.request.method === "GET" &&
              !event.request.url.startsWith("chrome-extension")
            ) {
              cache.put(event.request, responseToCache);
            }
          });

          return fetchResponse;
        })
        .catch(() => {
          // You can return a fallback offline page here if needed
          console.log(
            "Offline mode - resource not found in cache",
            event.request.url,
          );
        });
    }),
  );
});
