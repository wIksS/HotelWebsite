"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.broadcastUpdate = function (t) {
  "use strict";
  try {
    self.workbox.v["workbox:broadcast-cache-update:3.6.2"] = 1;
  } catch (t) {}var e = function e(t, _e, s) {
    return !s.some(function (s) {
      return t.headers.has(s) && _e.headers.has(s);
    }) || s.every(function (s) {
      var a = t.headers.has(s) === _e.headers.has(s),
          n = t.headers.get(s) === _e.headers.get(s);return a && n;
    });
  };var s = { CACHE_UPDATED: "CACHE_UPDATED" };var a = function a(t, e, _a, n) {
    "BroadcastChannel" in self && t && t.postMessage({ type: s.CACHE_UPDATED, meta: n, payload: { cacheName: e, updatedUrl: _a } });
  };
  var n = function () {
    function n(t) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          e = _ref.headersToCheck,
          s = _ref.source;

      _classCallCheck(this, n);

      this.t = t, this.e = e || ["content-length", "etag", "last-modified"], this.s = s || "workbox-broadcast-cache-update";
    }

    _createClass(n, [{
      key: "a",
      value: function a() {
        return "BroadcastChannel" in self && !this.n && (this.n = new BroadcastChannel(this.t)), this.n;
      }
    }, {
      key: "notifyIfUpdated",
      value: function notifyIfUpdated(t, s, n, c) {
        e(t, s, this.e) || a(this.a(), c, n, this.s);
      }
    }]);

    return n;
  }();

  return t.BroadcastCacheUpdate = n, t.Plugin = function () {
    function _class(t, e) {
      _classCallCheck(this, _class);

      this.c = new n(t, e);
    }

    _createClass(_class, [{
      key: "cacheDidUpdate",
      value: function cacheDidUpdate(_ref2) {
        var t = _ref2.cacheName,
            e = _ref2.oldResponse,
            s = _ref2.newResponse,
            a = _ref2.request;
        e && this.c.notifyIfUpdated(e, s, a.url, t);
      }
    }]);

    return _class;
  }(), t.broadcastUpdate = a, t.messageTypes = s, t;
}({});

//# sourceMappingURL=workbox-broadcast-cache-update.prod.js.map