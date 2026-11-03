// Domates offline service worker
const VERSION = 'domates-v6';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './icon-badge.png', './supabase.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Google Fonts: serve from cache, refresh in background
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(VERSION + '-fonts').then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }

  if (url.origin !== location.origin) return;

  // Page: network first (to pick up updates), cache when offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }

  // Other files: cache first
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r; })));
});

// Notification taps and buttons: bring the app forward and pass the command (pause, start, skip, reset)
self.addEventListener('notificationclick', e => {
  // iOS shows no buttons, so a tap carries the main action in data.tap
  const cmd = e.action || (e.notification.data && e.notification.data.tap) || '';
  e.notification.close();
  e.waitUntil((async () => {
    const all = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    const c = all.find(w => new URL(w.url).pathname.startsWith(new URL(self.registration.scope).pathname)) || all[0];
    if (c) {
      if (cmd) c.postMessage({ domates: cmd });
      try { await c.focus(); } catch (err) {}
    } else {
      await clients.openWindow('./' + (cmd ? '?cmd=' + cmd : ''));
    }
  })());
});
