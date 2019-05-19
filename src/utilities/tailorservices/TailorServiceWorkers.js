class TailorServiceWorkers{
   constructor(_event){
      this.event = _event;
   }  
   fetchHttp(){
      event = this.event;
      self.addEventListener('fetch', event => {
         if (event.request.method != 'GET') return;
         event.respondWith(async function() {
           const cache = await caches.open('dynamic-v1');
           const cachedResponse = await cache.match(event.request);
           if (cachedResponse) {
             event.waitUntil(cache.add(event.request));
             return cachedResponse;
           }
           return fetch(event.request);
         }());
       });
   }
}