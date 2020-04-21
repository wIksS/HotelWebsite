"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.cacheableResponse = function (t) {
  "use strict";
  try {
    self.workbox.v["workbox:cacheable-response:3.6.2"] = 1;
  } catch (t) {}
  var s = function () {
    function s() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, s);

      this.t = t.statuses, this.s = t.headers;
    }

    _createClass(s, [{
      key: "isResponseCacheable",
      value: function isResponseCacheable(t) {
        var _this = this;

        var s = !0;return this.t && (s = this.t.includes(t.status)), this.s && s && (s = Object.keys(this.s).some(function (s) {
          return t.headers.get(s) === _this.s[s];
        })), s;
      }
    }]);

    return s;
  }();

  return t.CacheableResponse = s, t.Plugin = function () {
    function _class(t) {
      _classCallCheck(this, _class);

      this.e = new s(t);
    }

    _createClass(_class, [{
      key: "cacheWillUpdate",
      value: function cacheWillUpdate(_ref) {
        var t = _ref.response;
        return this.e.isResponseCacheable(t) ? t : null;
      }
    }]);

    return _class;
  }(), t;
}({});

//# sourceMappingURL=workbox-cacheable-response.prod.js.map