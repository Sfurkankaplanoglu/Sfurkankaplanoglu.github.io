'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2eedf49234da1cffbe2ee121d76a5ea5",
"index.html": "5ed869217d744556641d82a926a230a7",
"/": "5ed869217d744556641d82a926a230a7",
"main.dart.js": "832614ec382f703bda51dfb4f0e3c062",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f904e40da28c6cb8a1d5be75d210004",
".git/config": "fb24fcd0d6d8a60abbb78a75489ecca4",
".git/objects/59/5e24096720fdd570bcf732bc9445e7caf595c5": "32b05f054528b503c00222ed8345b819",
".git/objects/68/ae2b32e10f9ff9c7d0f3dd0bf4bbff4af7966e": "12c5e8404be08814256666062ab2298a",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/04/6a69e0cc1abe3fea8a0716dc19044196c30204": "c9cf576292bad8de9b2552d46523cae5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/67/72b66381120dc02dd21094a267b5e6fff4f5f9": "d611118efdc4f885a79de233011216b9",
".git/objects/93/fd448ded287a05e3b3c3208f0c00276a9893b8": "c1c04368fbddf24ca5786f3e09152e26",
".git/objects/94/cec89e472525e016ca84a93ae48de3613609ea": "589eb92fe20f9de302903f988da4c620",
".git/objects/33/63fd073ba44988bed6598d0c6886189eb4f27d": "bae5c9ab6b0a16ead7875f99c106142f",
".git/objects/9c/c96e9113ba58d8957bbb4442dbad6d8aeccf2c": "370b5817dcaab5eae6dda1a124f4ccb0",
".git/objects/a4/236ec173798a7af990bc24acc5dad5961a7f94": "b13621bc610d2ebee2307f7349905a2b",
".git/objects/d9/b525456f586b5eb90e19888a7c4ff0f252c5f6": "1befd15d7b0bfe27b818ea9046b64b8c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/6eb0855283a784aaf7e833509b2600c998eae5": "997104f9fd7d620b6108f186bcdc3509",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/de9cc40101d04bb1b3707b208c592d6e141cb8": "88a4eb85bd63e6d535fa684a2b19fc4f",
".git/objects/f3/421bc365328e52ce921409492d688f663fe4e9": "73c86cd9517446e0b9b127b89e640528",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c8/8125d9c0941fe88f93fc84c218ccf765062b3f": "c1f6d10eb23a0b5469e3cc638e2997f8",
".git/objects/c6/cdc9517b5d31c4a9474742a2d333bf67e078ec": "1ca6a3487fe99dca7faa7aff899cc9e1",
".git/objects/27/63546b9ac5b37c515df2f0082437ac5d9872af": "41c7ee39b5cb7c819fcfa51a2e76de91",
".git/objects/29/9f7712fc9b0eb562888e70b868c38e503b5a9b": "33032e3bd34c82b7289bba83ce65d0f4",
".git/objects/1a/23d77cb724c0625b9322b1af0daee208c58d20": "2d35b815971e93ec0b6131c1c5ad5aa5",
".git/objects/17/5eea61c8355e38948ef46a7fd7e48b1b071f71": "0def558b0e29a79bb5de166bae89a66f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/43/2b3bb42dc1c9c19755b82161c070848ac15585": "aa8565bcd73d6920d1923b4dd912424c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/28d72071c41e9038133437412d66766536b306": "04cfa6ce8523d85da3128d07b41d4dd5",
".git/objects/38/1d709312d5e324591ab483185e4937d72d7ff6": "58d26c73dcb5861a76f9111da0037662",
".git/objects/62/32aecd43d2a1d6c50d2ed8d52d93caff9ffb50": "460d99ffba682cadf19087696f762a9c",
".git/objects/5b/151707f267c140221a3c6717f5bced167ad74b": "18fac94258d89716f47aee77181de9b8",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/f3e30ca89bf00e75d5f81df039c1b8e3c0722f": "7b63ed57639af3993b68272d22c619e4",
".git/objects/99/59c3cfb2022351a9055d481a412646274405b8": "a197328f7183091c8db80359e3dbd6c5",
".git/objects/55/4ed30dd6ed95b82171793d2f7d9fc33ffd8e0d": "785e1248f47dedab6a51eab3072809da",
".git/objects/0f/5af7463034c07da488c8b1d6c894c59298d83a": "9ca293a23f800ac2e4339a971db588aa",
".git/objects/90/c9b770248a65039ce19ce9c36df74aaf0d2875": "beee6e8806c24d5bf692fc636b3f67be",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/0daf18b2f25a091f7929ab6f8517b63995c0cf": "f82893f4e150ae1c1e45710e296f1736",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7b5eeda4d83f0a5d19fa355e91c63ae2eb7dd2": "9e002a2d6b1f27d07aec9963e9c26d77",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/ddbff077262cb990d8e988bb77372d6d665c8a": "ea433c30ab2133bb9fb8288b27b27500",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/c505131841a1c6c0ba5f9e17ddaceafad822b9": "3a2c7c953ce74f03cdbbd5aa6831182b",
".git/objects/ff/378e794cbff91fa0a259639a6f0b20fc003026": "cc4fc8e7a6650922323cb88a69526ee2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/c808fcfd8d3f3dadb0cff16c76f94c16f3b475": "049a7ef4d276ebe5d929dd2f43c8f258",
".git/objects/41/18c4c4724422520ee45b5c3acb440818840909": "da76aa20267412e196a84aa901fb509b",
".git/objects/41/2b91e473b1b0d0aad4ade3563f4f10c79a7a04": "609cf5cb9f46f81745c56577e2e02ec2",
".git/objects/8d/3e668e8d66367fe01591b6e9def781f834f459": "9758a72241195be1e7b758b8634e0bc1",
".git/objects/8d/15190912be0ecb1c8c2a69a3cbb4962e71585d": "fea44df2592cdc94f68d547eb2d3352b",
".git/objects/1d/91c6984723b708660f02435ded53f71b86422c": "3e1c8e0d852417c05e2fa23eb8af99f7",
".git/objects/82/8501865a3cf41012a916bd687a40ccf2e8de12": "07900c84e46f1d5cd8b0c35a7f08372b",
".git/objects/13/e8d75480a9b451ac6920cf4b8d3032ce6f4667": "98af921dfd07aab586184e88a47a1621",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c9e46f776db824d9349a4960217911b2",
".git/logs/refs/heads/main": "c9e46f776db824d9349a4960217911b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4c2bdaf907084754780b9e98ffba8acb",
".git/index": "fea8e35f3f0b193b1932f14a5c3d8e7e",
".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/settingsbig.png": "5a41fdb338301a37c3a09e90f090a085",
"assets/images/dumbells.png": "eece6a93bc4c2424ecb4cc0c395f9ada",
"assets/images/userbig.png": "17bac6f11d03196c07a633ae3d47ccc3",
"assets/images/settings.png": "d05b74cb5bc8cbd70a083c2cc034192c",
"assets/images/build.png": "7dcee2a59817127f13bd08eb7c11d0ba",
"assets/images/user.png": "499a95064bd827229dadd8036425f1cf",
"assets/images/weatherbig.png": "7e64317d432d63710768a7134442336d",
"assets/images/background.png": "2709c4555753a7f7238039c4204a8ddf",
"assets/images/graphbig.png": "884485c12ee66ee1413b0655f273e5d9",
"assets/images/savebutton.png": "8ff933398a6d3db59ddb9fe90fd9dda0",
"assets/images/logo.png": "b6fad43d67df2e53b095bbf42305c4d8",
"assets/images/helppic.png": "09d82a4993ba8494d11a8de093f43023",
"assets/images/foreground.png": "793764a0f07b5ba189625e17d79b082d",
"assets/images/workout.png": "054acc8691fb70c7e76cf5c66936ae90",
"assets/images/addmove.png": "95898a1bb72a3520dde16c980b0dc889",
"assets/images/savesbig.png": "d11d694e81658e97dc94c2582f87eec6",
"assets/images/addbutton.png": "e5cbbf3827e0ba50ef4cf3efdaa65c6f",
"assets/AssetManifest.json": "908b4264f6beceab05d7e23f84c361d3",
"assets/NOTICES": "6fb851453e79f216fa6d4292e97d314e",
"assets/FontManifest.json": "8b9258fc6d44f13c2f145a11fbedc3bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "c39d5278454d6a2ac44ef892e150dab2",
"assets/fonts/mrsmonster.ttf": "4edb802217367e88823a9aca10b75ff9",
"assets/fonts/CupertinoIcons-Regular.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MRockwell-Italic.otf": "dc5b135d2f3c946d7c19dfc263717d9e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
