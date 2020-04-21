"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.googleAnalytics = function (e, n, t, o, r, c, s) {
  "use strict";
  try {
    self.workbox.v["workbox:google-analytics:3.6.2"] = 1;
  } catch (e) {}var l = /^\/(\w+\/)?collect/,
      i = (a = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (n, t) {
              var o = new FileReader();o.onloadend = function () {
                return n(o.result);
              }, o.onerror = function () {
                return t(o.error);
              }, o.readAsText(e);
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })), function (e) {
    return a.apply(this, arguments);
  });var a;var w = function w(e) {
    return u = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(n) {
      var t, o, r, c, _e, s, l, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _n, _o;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              t = void 0, o = n.url, r = n.requestInit, c = n.timestamp;

              if (!(o = new URL(o), r.body)) {
                _context2.next = 13;
                break;
              }

              if (!(r.body instanceof Blob)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 5;
              return i(r.body);

            case 5:
              _context2.t0 = _context2.sent;
              _context2.next = 9;
              break;

            case 8:
              _context2.t0 = r.body;

            case 9:
              _e = _context2.t0;
              t = new URLSearchParams(_e);_context2.next = 14;
              break;

            case 13:
              t = o.searchParams;

            case 14:
              s = c - (Number(t.get("qt")) || 0), l = Date.now() - s;

              if (!(t.set("qt", l), e.parameterOverrides)) {
                _context2.next = 35;
                break;
              }

              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 19;
              for (_iterator = Object.keys(e.parameterOverrides)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _n = _step.value;
                _o = e.parameterOverrides[_n];
                t.set(_n, _o);
              }_context2.next = 27;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t1 = _context2["catch"](19);
              _didIteratorError = true;
              _iteratorError = _context2.t1;

            case 27:
              _context2.prev = 27;
              _context2.prev = 28;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 30:
              _context2.prev = 30;

              if (!_didIteratorError) {
                _context2.next = 33;
                break;
              }

              throw _iteratorError;

            case 33:
              return _context2.finish(30);

            case 34:
              return _context2.finish(27);

            case 35:
              "function" == typeof e.hitFilter && e.hitFilter.call(null, t), r.body = t.toString(), r.method = "POST", r.mode = "cors", r.credentials = "omit", r.headers = { "Content-Type": "text/plain" }, n.url = "" + o.origin + o.pathname;
            case 36:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[19, 23, 27, 35], [28,, 30, 34]]);
    })), function (e) {
      return u.apply(this, arguments);
    };
  };var u;return e.initialize = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var i = t.cacheNames.getGoogleAnalyticsName(e.cacheName),
        a = new n.Plugin("workbox-google-analytics", { maxRetentionTime: 2880, callbacks: { requestWillReplay: w(e) } }),
        u = [function (e) {
      var n = new c.NetworkFirst({ cacheName: e });return new o.Route(function (_ref) {
        var e = _ref.url;
        return "www.google-analytics.com" === e.hostname && "/analytics.js" === e.pathname;
      }, n, "GET");
    }(i), function (e) {
      var n = new c.NetworkFirst({ cacheName: e });return new o.Route(function (_ref2) {
        var e = _ref2.url;
        return "www.googletagmanager.com" === e.hostname && "/gtag/js" === e.pathname;
      }, n, "GET");
    }(i)].concat(_toConsumableArray(function (e) {
      var n = function n(_ref3) {
        var e = _ref3.url;
        return "www.google-analytics.com" === e.hostname && l.test(e.pathname);
      },
          t = new s.NetworkOnly({ plugins: [e] });return [new o.Route(n, t, "GET"), new o.Route(n, t, "POST")];
    }(a))),
        f = new r.Router();var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = u[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _e2 = _step2.value;
        f.registerRoute(_e2);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    self.addEventListener("fetch", function (e) {
      var n = f.handleRequest(e);n && e.respondWith(n);
    });
  }, e;
}({}, workbox.backgroundSync, workbox.core._private, workbox.routing, workbox.routing, workbox.strategies, workbox.strategies);

//# sourceMappingURL=workbox-google-analytics.prod.js.map