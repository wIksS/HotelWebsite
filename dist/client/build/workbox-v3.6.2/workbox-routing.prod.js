"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.routing = function (t, e) {
  "use strict";
  try {
    self.workbox.v["workbox:routing:3.6.2"] = 1;
  } catch (t) {}var r = "GET";var s = function s(t) {
    return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : { handle: t };
  };
  var n = function n(t, e, _n) {
    _classCallCheck(this, n);

    this.handler = s(e), this.match = t, this.method = _n || r;
  };

  var o = function (_n2) {
    _inherits(o, _n2);

    function o(t, e, r) {
      _classCallCheck(this, o);

      return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, function (_ref) {
        var e = _ref.url;
        var r = t.exec(e.href);return r ? e.origin !== location.origin && 0 !== r.index ? null : r.slice(1) : null;
      }, e, r));
    }

    return o;
  }(n);

  var i = function () {
    function i() {
      _classCallCheck(this, i);

      this.t = new Map();
    }

    _createClass(i, [{
      key: "handleRequest",
      value: function handleRequest(t) {
        var _this2 = this;

        var e = new URL(t.request.url);if (!e.protocol.startsWith("http")) return;var r = null,
            s = null,
            n = null;var o = this.e(t, e);if (s = o.handler, n = o.params, r = o.route, !s && this.r && (s = this.r), !s) return;var i = void 0;try {
          i = s.handle({ url: e, event: t, params: n });
        } catch (t) {
          i = Promise.reject(t);
        }return i && this.s && (i = i.catch(function (r) {
          return _this2.s.handle({ url: e, event: t, err: r });
        })), i;
      }
    }, {
      key: "e",
      value: function e(t, _e) {
        var r = this.t.get(t.request.method) || [];var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _s = _step.value;
            var _r = _s.match({ url: _e, event: t });if (_r) return Array.isArray(_r) && 0 === _r.length ? _r = void 0 : (_r.constructor === Object && 0 === Object.keys(_r).length || !0 === _r) && (_r = void 0), { route: _s, params: _r, handler: _s.handler };
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return { handler: void 0, params: void 0 };
      }
    }, {
      key: "setDefaultHandler",
      value: function setDefaultHandler(t) {
        this.r = s(t);
      }
    }, {
      key: "setCatchHandler",
      value: function setCatchHandler(t) {
        this.s = s(t);
      }
    }, {
      key: "registerRoute",
      value: function registerRoute(t) {
        this.t.has(t.method) || this.t.set(t.method, []), this.t.get(t.method).push(t);
      }
    }, {
      key: "unregisterRoute",
      value: function unregisterRoute(e) {
        if (!this.t.has(e.method)) throw new t.WorkboxError("unregister-route-but-not-found-with-method", { method: e.method });var r = this.t.get(e.method).indexOf(e);if (!(r > -1)) throw new t.WorkboxError("unregister-route-route-not-registered");this.t.get(e.method).splice(r, 1);
      }
    }]);

    return i;
  }();

  var u = function (_n3) {
    _inherits(u, _n3);

    function u(t) {
      var _this3;

      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$whitelist = _ref2.whitelist,
          e = _ref2$whitelist === undefined ? [/./] : _ref2$whitelist,
          _ref2$blacklist = _ref2.blacklist,
          r = _ref2$blacklist === undefined ? [] : _ref2$blacklist;

      _classCallCheck(this, u);

      (_this3 = _possibleConstructorReturn(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, function () {
        var _this4;

        return (_this4 = _this3).n.apply(_this4, arguments);
      }, t)), _this3), _this3.o = e, _this3.i = r;return _this3;
    }

    _createClass(u, [{
      key: "n",
      value: function n(_ref3) {
        var t = _ref3.event,
            e = _ref3.url;
        if ("navigate" !== t.request.mode) return !1;var r = e.pathname + e.search;return !this.i.some(function (t) {
          return t.test(r);
        }) && !!this.o.some(function (t) {
          return t.test(r);
        });
      }
    }]);

    return u;
  }(n);

  var a = Object.freeze({ RegExpRoute: o, Route: n, Router: i, NavigationRoute: u });var c = new (function (_i) {
    _inherits(_class, _i);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "registerRoute",
      value: function registerRoute(e, r) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
        var i = void 0;if ("string" == typeof e) {
          var _t = new URL(e, location);i = new n(function (_ref4) {
            var e = _ref4.url;
            return e.href === _t.href;
          }, r, s);
        } else if (e instanceof RegExp) i = new o(e, r, s);else if ("function" == typeof e) i = new n(e, r, s);else {
          if (!(e instanceof n)) throw new t.WorkboxError("unsupported-route-type", { moduleName: "workbox-routing", className: "DefaultRouter", funcName: "registerRoute", paramName: "capture" });i = e;
        }return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "registerRoute", this).call(this, i), i;
      }
    }, {
      key: "registerNavigationRoute",
      value: function registerNavigationRoute(t) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var s = e.cacheNames.getPrecacheName(r.cacheName),
            n = new u(function () {
          return caches.match(t, { cacheName: s }).then(function (e) {
            if (e) return e;throw new Error("The cache " + s + " did not have an entry for " + (t + "."));
          }).catch(function (e) {
            return fetch(t);
          });
        }, { whitelist: r.whitelist, blacklist: r.blacklist });return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "registerRoute", this).call(this, n), n;
      }
    }]);

    return _class;
  }(i))();return self.addEventListener("fetch", function (t) {
    var e = c.handleRequest(t);e && t.respondWith(e);
  }), Object.assign(c, a);
}(workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-routing.prod.js.map