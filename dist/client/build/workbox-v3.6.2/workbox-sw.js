"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var workbox = function () {
  "use strict";
  try {
    self.workbox.v["workbox:sw:3.6.2"] = 1;
  } catch (t) {}var t = "https://storage.googleapis.com/workbox-cdn/releases/3.6.2",
      e = { backgroundSync: "background-sync", broadcastUpdate: "broadcast-cache-update", cacheableResponse: "cacheable-response", core: "core", expiration: "cache-expiration", googleAnalytics: "google-analytics", navigationPreload: "navigation-preload", precaching: "precaching", rangeRequests: "range-requests", routing: "routing", strategies: "strategies", streams: "streams" };return new (function () {
    function _class() {
      _classCallCheck(this, _class);

      return this.v = {}, this.t = { debug: "localhost" === self.location.hostname, modulePathPrefix: null, modulePathCb: null }, this.e = this.t.debug ? "dev" : "prod", this.s = !1, new Proxy(this, {
        get: function get(t, s) {
          if (t[s]) return t[s];var o = e[s];return o && t.loadModule("workbox-" + o), t[s];
        }
      });
    }

    _createClass(_class, [{
      key: "setConfig",
      value: function setConfig() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (this.s) throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.t, t), this.e = this.t.debug ? "dev" : "prod";
      }
    }, {
      key: "skipWaiting",
      value: function skipWaiting() {
        self.addEventListener("install", function () {
          return self.skipWaiting();
        });
      }
    }, {
      key: "clientsClaim",
      value: function clientsClaim() {
        self.addEventListener("activate", function () {
          return self.clients.claim();
        });
      }
    }, {
      key: "loadModule",
      value: function loadModule(t) {
        var e = this.o(t);try {
          importScripts(e), this.s = !0;
        } catch (s) {
          throw console.error("Unable to import module '" + t + "' from '" + e + "'."), s;
        }
      }
    }, {
      key: "o",
      value: function o(e) {
        if (this.t.modulePathCb) return this.t.modulePathCb(e, this.t.debug);var s = [t];var o = e + "." + this.e + ".js",
            r = this.t.modulePathPrefix;return r && "" === (s = r.split("/"))[s.length - 1] && s.splice(s.length - 1, 1), s.push(o), s.join("/");
      }
    }]);

    return _class;
  }())();
}();

//# sourceMappingURL=workbox-sw.js.map