"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f686ded2fce54740462431fa208300b6"],["/static/css/main.dd672e44.css","ff3109260c46cacf6da10f9e0bf44ecd"],["/static/js/main.9c500e70.js","156eca76453109a9e0d84910d7921478"],["/static/media/Christian.2a8a2033.jpg","2a8a20337783953e7e1007ac664d1652"],["/static/media/Fredrik.739b1f65.jpg","739b1f6552a21f09aeab777ae643098b"],["/static/media/JanGeorg.96217e1b.jpg","96217e1ba83ecd50bc497582416a85cc"],["/static/media/Juletapas.c4f59018.png","c4f59018a56ab7326f641846fd7ef114"],["/static/media/arrested2.1371833c.gif","1371833c4261d644dc71dfc083b8e687"],["/static/media/bilde.a8e05def.png","a8e05def873af3a2258349a9529b3f96"],["/static/media/bobler.fea4197f.jpg","fea4197fc30e4e68a1a3827ee067fe56"],["/static/media/bounty-stenger.743adfbb.jpg","743adfbb2ca36abbe61662d75491e37a"],["/static/media/fredrik_giphy.baa1b555.gif","baa1b555e5c312ea6917c4187a91a44f"],["/static/media/julekaker.de0a227c.jpg","de0a227c786b5c35c7f388d62d66e4f8"],["/static/media/julesushi.51f6a7b8.jpeg","51f6a7b859fdff803fd9cd3df79cf80b"],["/static/media/mage.c8063c2c.gif","c8063c2cd194134147da575fbb85f080"],["/static/media/risnisse.436fcd29.jpg","436fcd29eabd12bda2160d21d0bf6e39"],["/static/media/somann.0478b0ca.png","0478b0caac92fd6f031ce6f28f64b3f4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});