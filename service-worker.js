
const VERSION = 'v3';

self.addEventListener('install', event => {
  console.log(`Service Worker ${VERSION} instalado`);
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log(`Service Worker ${VERSION} ativado`);
});
