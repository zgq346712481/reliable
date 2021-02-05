/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ffd20a98375a40dfb3e6e7f17abac4b"
  },
  {
    "url": "assets/6d308bd9gw1f5scrp1p4rj20rs0gatbj.jpg",
    "revision": "07afc72da8ac1181b6920160b3a96bdc"
  },
  {
    "url": "assets/6d308bd9gy1ft3id6gbmej21kw12r7hb.jpg",
    "revision": "3fdb04471053ab25c3888ad719467d86"
  },
  {
    "url": "assets/6d308bd9gy1ft3id6n0ajj21kw12rduv.jpg",
    "revision": "e5aaea0c2b2c78fec78667e3df099c47"
  },
  {
    "url": "assets/6d308bd9gy1ft3jq4frzjj21kw10nqek.jpg",
    "revision": "6834311eddb0d96d03d4a2612f6ae274"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw0q7o0j21kw10ndql.jpg",
    "revision": "58d0cc5063e8062d62b1651b022507a3"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw2iloqj21kw10nguj.jpg",
    "revision": "74a561fda505379a2769de4fd9613b13"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw318grj21kw10nwp4.jpg",
    "revision": "bcc159c8defbab71a6047f7ca0c1aca6"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw32rz0j21kw10ntma.jpg",
    "revision": "1b8c1dd33f878075a158022758d6a3e9"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbd9e3j21kw0xx45p.jpg",
    "revision": "4b90d01913b7aeb5c2b40a443d9f79e2"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbgjesj21kw0xx7ee.jpg",
    "revision": "4f1d3b8471ec50cd33cbc4d365dfdc41"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbnft5j21kw0xxaq1.jpg",
    "revision": "3c5f59d7e124ab24fbcef30ba8ace5a8"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcab4vj21kw0xxwn0.jpg",
    "revision": "44becb0bcd7d43cee1cc25abf5cb43fb"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcmte5j21kw0xxdm6.jpg",
    "revision": "189a9e9588f3c121f1143a0ad97abb8d"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcraoij21kw0xxjyt.jpg",
    "revision": "c091600cd661f7806c31089a26d0ad14"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqd3c7fj21kw0xxqcj.jpg",
    "revision": "565812823763a1cbd0fe2407bb0f1860"
  },
  {
    "url": "assets/6d308bd9gy1ftc27nq3rsj21kw12j7if.jpg",
    "revision": "0e20484b8320666f904b03a67f858e77"
  },
  {
    "url": "assets/6d308bd9gy1ftc27pr7xuj21kw128gzp.jpg",
    "revision": "404ac0e1447ce512a02d0776d7c3aad8"
  },
  {
    "url": "assets/6d308bd9gy1ftc27q3vd3j21kw128tpk.jpg",
    "revision": "f07ced9d44ea5ea522aa91392813e0a0"
  },
  {
    "url": "assets/6d308bd9gy1ftc4y26xzaj21kw10g12f.jpg",
    "revision": "5d0537381e0d4614ceb567fd35256af8"
  },
  {
    "url": "assets/6d308bd9gy1ftc4y31cf5j21kw10g7kz.jpg",
    "revision": "319af1966faaa505bc1f5e44bdad08a0"
  },
  {
    "url": "assets/6d308bd9ly1ft2p8qmlazj21kw15ztol.jpg",
    "revision": "8a1859dace500cd8441019656b2c7241"
  },
  {
    "url": "assets/6d308bd9ly1ft2panw2oqj21kw15znaj.jpg",
    "revision": "60e48d83189fd329efdcb6ddd063215f"
  },
  {
    "url": "assets/6d308bd9ly1ft2peam690j21kw15ztl8.jpg",
    "revision": "5215aa921b1006e27ca7643df55c303a"
  },
  {
    "url": "assets/6d308bd9ly1ft2plz2djxj21kw16pk5j.jpg",
    "revision": "f3a438a5a26467bfe8a341a43c514b2d"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmld7dj21kw148wn3.jpg",
    "revision": "c8769a2266005cb26249a5e4d22210ab"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmlnkij21kw148dph.jpg",
    "revision": "6ce79fa00f7114d5c2925984ed69bda5"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmlz1hj21kw148tl3.jpg",
    "revision": "654c912c49c2c5db001e76db71c61d79"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmmewxj21kw14849j.jpg",
    "revision": "f84f9567389f573ed407d54316abe61c"
  },
  {
    "url": "assets/6d308bd9ly1fz3wii2wqsj21bh0u0qij.jpg",
    "revision": "f15b81f664a11c17813cf8839b68776a"
  },
  {
    "url": "assets/css/0.styles.e9fc6220.css",
    "revision": "ab43cb71c485d84ad8641760ac80b263"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.04479f1e.js",
    "revision": "b7514c06027bc21d7c7f42caf1748d22"
  },
  {
    "url": "assets/js/11.1a972a6b.js",
    "revision": "086cc45042e387b89b80b6f89ab57656"
  },
  {
    "url": "assets/js/12.46fcfbe2.js",
    "revision": "7d5323ef9ce5270baadd1070c38e787a"
  },
  {
    "url": "assets/js/13.ae03fa24.js",
    "revision": "0548cf5c1ad8d9ab1223da410af4c022"
  },
  {
    "url": "assets/js/14.29464e0b.js",
    "revision": "abe4b92400bf659ecdaf65b1f9374808"
  },
  {
    "url": "assets/js/15.f5b647b6.js",
    "revision": "7b9a2aea077c215e964acdd84749b2bc"
  },
  {
    "url": "assets/js/16.134be686.js",
    "revision": "19df509145366e797447d92c6e05beb0"
  },
  {
    "url": "assets/js/17.a3b43981.js",
    "revision": "44cd1c4abec6557135a045c5d14fea00"
  },
  {
    "url": "assets/js/18.cfbc4132.js",
    "revision": "33a506c75383da753e81bd1919d32dbe"
  },
  {
    "url": "assets/js/19.021742d5.js",
    "revision": "87dac1806bf4a62b39c7f40fb3a843f7"
  },
  {
    "url": "assets/js/2.ce63d877.js",
    "revision": "244e6962e64373cb6bee8467a9ffaca9"
  },
  {
    "url": "assets/js/20.7f993791.js",
    "revision": "483f9a453d2a711ed2af049f79db745d"
  },
  {
    "url": "assets/js/21.6cfa2fb0.js",
    "revision": "5c919220d1eab3ff53aa675d9579f661"
  },
  {
    "url": "assets/js/22.4eea2a4a.js",
    "revision": "00b968dccad0893cd7640d6e1e8caf05"
  },
  {
    "url": "assets/js/23.f2541ce6.js",
    "revision": "30250cf808b672ab6e6f9ff2e7584c13"
  },
  {
    "url": "assets/js/3.1f48d985.js",
    "revision": "177395e87f6d2b4d2897d9946b3c69cb"
  },
  {
    "url": "assets/js/4.5cb5ac52.js",
    "revision": "888270200d78292011b55113a6c54f5d"
  },
  {
    "url": "assets/js/5.bc2070c2.js",
    "revision": "3197e80d00a04605d68d71245e4daff0"
  },
  {
    "url": "assets/js/6.b02c834b.js",
    "revision": "51939dbfa10f79fe63cb6fb5f2b70cfb"
  },
  {
    "url": "assets/js/7.bac94935.js",
    "revision": "bae766ce694b6a3e257b23b947845f72"
  },
  {
    "url": "assets/js/8.16cdf814.js",
    "revision": "409a847b32790abb736a40941676fa85"
  },
  {
    "url": "assets/js/9.a322394d.js",
    "revision": "ce50fb6906899216a6393698b2730a40"
  },
  {
    "url": "assets/js/app.1820d234.js",
    "revision": "d50f6c5fc6c46bac73ce6f51b7cefaef"
  },
  {
    "url": "guide/index.html",
    "revision": "54f5d50f4aa7b52ac78a2060956b21aa"
  },
  {
    "url": "guide/integrate-with-gitlab-ci.html",
    "revision": "899a51bc818df620145cf2f67fcc845d"
  },
  {
    "url": "guide/integrate-with-jenkins.html",
    "revision": "41005519c8965b5ceafbea1600514a21"
  },
  {
    "url": "guide/jenkins-android.html",
    "revision": "57080306e8c40e0db757910382de2db1"
  },
  {
    "url": "guide/jenkins-ios.html",
    "revision": "a92889e35b71e209210007bcda229cfe"
  },
  {
    "url": "guide/jenkins-web.html",
    "revision": "b370ce04bc4c464eb35d06e3ce945d75"
  },
  {
    "url": "guide/presentations.html",
    "revision": "651553942219139de4a4c3d6e20a8134"
  },
  {
    "url": "guide/reliable-cli.html",
    "revision": "3d080b11616399151eff168f0365a65a"
  },
  {
    "url": "guide/reliable-web-deploy.html",
    "revision": "14923c47ef4cec11f0fff3efdc04a2ed"
  },
  {
    "url": "index.html",
    "revision": "05a8c37d51ce67a5d28022c5a0cc577a"
  },
  {
    "url": "logo/reliable.svg",
    "revision": "b34e8a8f81b1ba112b58e859061f289c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5aff70f1f83e99530fd89579565a9879"
  },
  {
    "url": "zh/guide/integrate-with-gitlab-ci.html",
    "revision": "be1b96837335eddb992801519f83f322"
  },
  {
    "url": "zh/guide/integrate-with-jenkins.html",
    "revision": "ee5ea449a91508191dc778ac1ae9004f"
  },
  {
    "url": "zh/guide/jenkins-android.html",
    "revision": "b49c8071f77ea63063982b48ae2bdf52"
  },
  {
    "url": "zh/guide/jenkins-ios.html",
    "revision": "1531464016dfe196d154e8404546826e"
  },
  {
    "url": "zh/guide/jenkins-web.html",
    "revision": "7ea9f5dbce75fa9f380e7b40f91e3fdf"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "ac3d6d6b71e5995ef1bdac69df10c237"
  },
  {
    "url": "zh/guide/reliable-cli.html",
    "revision": "c3eec7a2ad196e253eae8454140a3257"
  },
  {
    "url": "zh/guide/reliable-web-deploy.html",
    "revision": "65e6445d473c9a83f1e20e71365e0253"
  },
  {
    "url": "zh/index.html",
    "revision": "60e2f90380d71dad1b2b4c1f70cfc6e6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
