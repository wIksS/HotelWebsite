"use strict";

undefined.workbox = undefined.workbox || {}, undefined.workbox.navigationPreload = function (t) {
  "use strict";
  try {
    self.workbox.v["workbox:navigation-preload:3.6.2"] = 1;
  } catch (t) {}function e() {
    return Boolean(self.registration && self.registration.navigationPreload);
  }return t.disable = function () {
    e() && self.addEventListener("activate", function (t) {
      t.waitUntil(self.registration.navigationPreload.disable().then(function () {}));
    });
  }, t.enable = function (t) {
    e() && self.addEventListener("activate", function (e) {
      e.waitUntil(self.registration.navigationPreload.enable().then(function () {
        t && self.registration.navigationPreload.setHeaderValue(t);
      }));
    });
  }, t.isSupported = e, t;
}({});

//# sourceMappingURL=workbox-navigation-preload.prod.js.map