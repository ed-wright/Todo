function precache(){return caches.open(CACHE).then(function(e){return e.addAll(["./index.html","./manifest.json","./robots.txt","./sw.js","css/font-awesome.min.css","css/main.css","images/todo.png","images/todo-icon.ico","images/todo-icon256.png","images/todo-logo256.png","images/todo-logo512.png","js/autosize.min.js","js/highlight.min.js","js/jquery-3.4.0.min.js","js/main.js","js/marked.min.js","js/tail.datetime.min.js","webfonts/fa-brands-400.woff","webfonts/fa-brands-400.woff2","webfonts/fa-regular-400.woff","webfonts/fa-regular-400.woff2","webfonts/fa-solid-900.woff","webfonts/fa-solid-900.woff2"])})}function fromNetwork(t,s){return new Promise(function(n,e){var o=setTimeout(e,s);fetch(t).then(function(e){clearTimeout(o),n(e)},e)})}function fromCache(n){return caches.open(CACHE).then(function(e){return e.match(n).then(function(e){return e||Promise.reject("no-match")})})}var CACHE="1.10.3";self.addEventListener("install",function(e){console.log("The service worker is being installed."),e.waitUntil(precache())}),self.addEventListener("fetch",function(e){console.log("The service worker is serving the asset."),e.respondWith(fromNetwork(e.request,400).catch(function(){return fromCache(e.request)}))});