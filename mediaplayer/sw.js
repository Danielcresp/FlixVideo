const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache());
  });

self.addEventListener('fetch', event =>{
    const request = event.request
    //Obtenerlos de la red
    if(request.method !== 'GET'){
        return
    }
    //Buscar en Cache
    event.respondWith(cachedResponse(request))

    // actualizar el cache
    event.waitUntil(updateCache(request));
})

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
      // '/',
      // '/index.html',
      // '/assets/index.js',
      // '/assets/MediaPlayer.js',
      // '/assets/plugins/AutoPlay.js',
      // '/assets/plugins/AutoPause.ts',
      // '/assets/index.css',
      // '/assets/play.mp4',
    ]);
  }

//Buscar en Cache
async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

//Actualizar Cache 
async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}
  
  