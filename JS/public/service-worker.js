self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('oficina-cache').then(cache => {
            return cache.addAll([
                '/',
                '/css/styles.css',
                '/js/scripts.js',
                '/icons/icon-192x192.png',
                '/icons/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});