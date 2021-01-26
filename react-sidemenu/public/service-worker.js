/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/main.1876a448aa2a9b6c24b5.hot-update.js',
  '/favicon.ico',
  '/manifest.json',
  '/logo192.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)).catch((err) => console.log("Error ", err))
    )
});

self.addEventListener('activate', event => {
    console.log("activated")
});

// self.addEventListener('fetch', event => {
//     event.respondWith(
//       caches.match(event.request).then((res) => res ? res : fetch(event.request)
//       .then(res => res)
//       .catch()
//       )  
//     );
// });