"use strict";var precacheConfig=[["/react-spotify/326dfa6c84225dfca443693e985fdaab.png","326dfa6c84225dfca443693e985fdaab"],["/react-spotify/404.html","52a1032cfa00f81a83457eaff541c70d"],["/react-spotify/assets/images/favicon.png","326dfa6c84225dfca443693e985fdaab"],["/react-spotify/assets/images/not-found.png","1c1b3f6afd5a9e2a317ff84d8c22cd93"],["/react-spotify/assets/images/pause.svg","ec0f9d7f6c1c1a9f259a466a55eda8a2"],["/react-spotify/assets/images/play.svg","be337cf7cbb584aa29196be4e24c75e8"],["/react-spotify/assets/images/spotify-icon.png","fb53bbf9ab3ca88a613116a72528da85"],["/react-spotify/assets/images/spotify-icon.svg","2419b13eaa044e8e6da441ce19727b54"],["/react-spotify/assets/images/spotify-pwa.png","b85250cb8b3096609d307a7913701e68"],["/react-spotify/bundle.js","618fa4f9d326b6c4a070d980f462c149"],["/react-spotify/favicon.png","326dfa6c84225dfca443693e985fdaab"],["/react-spotify/fb53bbf9ab3ca88a613116a72528da85.png","fb53bbf9ab3ca88a613116a72528da85"],["/react-spotify/index.html","52a1032cfa00f81a83457eaff541c70d"],["/react-spotify/manifest.json","7417b2db40361e4daab1bc912f8d38c5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("undefined/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});