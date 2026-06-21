const CACHE_NAME = 'focusbuddy-v1';
const CORE_ASSETS = ['/', '/index.html', '/manifest.json'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE_ASSETS)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {e.waitUntil(self.clients.claim());});
self.addEventListener('fetch', (e) => {
  if(e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {try{const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));}catch(err){}return resp;})).catch(()=>caches.match('/index.html')));
});