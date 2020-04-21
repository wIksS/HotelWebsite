"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.precaching = function (e, t, n, r, s) {
  "use strict";
  try {
    self.workbox.v["workbox:precaching:3.6.2"] = 1;
  } catch (e) {}
  var i = function () {
    function i(e, t, n, r) {
      _classCallCheck(this, i);

      this.e = e, this.t = t, this.n = n;var s = new Request(t, { credentials: "same-origin" });this.r = s, this.s = r ? this.i(s) : s;
    }

    _createClass(i, [{
      key: "i",
      value: function i(e) {
        var t = e.url;var n = { credentials: "same-origin" };if ("cache" in Request.prototype) n.cache = "reload";else {
          var _e = new URL(t, location),
              _n = encodeURIComponent;_e.search += (_e.search ? "&" : "") + _n("_workbox-cache-bust") + "=" + _n(this.n), t = _e.toString();
        }return new Request(t, n);
      }
    }]);

    return i;
  }();

  var c = "revision",
      o = "url",
      l = "precached-details-models";
  var a = function () {
    function a(t) {
      _classCallCheck(this, a);

      var n = t.replace(/[^\w-]/g, "_");this.c = new e.DBWrapper(n, 2, { onupgradeneeded: this.o });
    }

    _createClass(a, [{
      key: "o",
      value: function o(e) {
        var t = e.target.result;e.oldVersion < 2 && (t.objectStoreNames.contains("workbox-precaching") && t.deleteObjectStore("workbox-precaching"), t.objectStoreNames.contains(l) && t.deleteObjectStore(l)), t.createObjectStore(l);
      }
    }, {
      key: "l",
      value: function l(e, t) {
        var n = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return n.a(t.t);

                case 2:
                  _context.t1 = _context.sent;
                  _context.t2 = t.n;
                  _context.t0 = _context.t1 === _context.t2;

                  if (!_context.t0) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 8;
                  return caches.open(e);

                case 8:
                  _context.t3 = t.r;
                  _context.next = 11;
                  return _context.sent.match(_context.t3);

                case 11:
                  _context.t0 = !!_context.sent;

                case 12:
                  return _context.abrupt("return", _context.t0);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();
      }
    }, {
      key: "u",
      value: function u() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return e.c.getAllMatching(l, { includeKeys: !0 });

                case 2:
                  return _context2.abrupt("return", _context2.sent);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))();
      }
    }, {
      key: "a",
      value: function a(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var n;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return t.c.get(l, e);

                case 2:
                  n = _context3.sent;
                  return _context3.abrupt("return", n ? n[c] : null);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }
    }, {
      key: "d",
      value: function d(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var _t$c$put;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return t.c.put(l, (_t$c$put = {}, _defineProperty(_t$c$put, c, e.n), _defineProperty(_t$c$put, o, e.r.url), _t$c$put), e.t);

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }
    }, {
      key: "h",
      value: function h(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return t.c.delete(l, e);

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }))();
      }
    }]);

    return a;
  }();

  var u = (d = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
    var t, n;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            t = e.clone();
            _context6.next = 3;
            return "body" in t ? Promise.resolve(t.body) : t.blob();

          case 3:
            n = _context6.sent;
            return _context6.abrupt("return", new Response(n, ["headers", "status", "statusText"].map(function (e) {
              return t[e];
            })));

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })), function (e) {
    return d.apply(this, arguments);
  });var d;
  var h = function () {
    function h(e) {
      _classCallCheck(this, h);

      this.p = t.cacheNames.getPrecacheName(e), this.f = new Map(), this.y = new a(this.p);
    }

    _createClass(h, [{
      key: "addToCacheList",
      value: function addToCacheList(e) {
        var _this = this;

        e.map(function (e) {
          _this.b(_this.w(e));
        });
      }
    }, {
      key: "w",
      value: function w(e) {
        switch (typeof e === "undefined" ? "undefined" : _typeof(e)) {case "string":
            return new i(e, e, e);case "object":
            return new i(e, e.url, e.revision || e.url, !!e.revision);default:
            throw new n.WorkboxError("add-to-cache-list-unexpected-type", { entry: e });}
      }
    }, {
      key: "b",
      value: function b(e) {
        var t = this.f.get(e.t);if (t) {
          if (t.n !== e.n) throw new n.WorkboxError("add-to-cache-list-conflicting-entries", { firstEntry: t.e, secondEntry: e.e });
        } else this.f.set(e.t, e);
      }
    }, {
      key: "install",
      value: function install() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$suppressWarnings = _ref.suppressWarnings,
            e = _ref$suppressWarnings === undefined ? !1 : _ref$suppressWarnings,
            t = _ref.event,
            n = _ref.plugins;

        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var e, s, i, c, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _e2;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return caches.open(r.g());

                case 2:
                  e = _context7.sent;
                  _context7.next = 5;
                  return e.keys();

                case 5:
                  s = _context7.sent;
                  _context7.next = 8;
                  return Promise.all(s.map(function (t) {
                    return e.delete(t);
                  }));

                case 8:
                  i = [], c = [];
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context7.prev = 12;
                  _iterator = r.f.values()[Symbol.iterator]();

                case 14:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context7.next = 26;
                    break;
                  }

                  _e2 = _step.value;
                  _context7.next = 18;
                  return r.y.l(r.p, _e2);

                case 18:
                  if (!_context7.sent) {
                    _context7.next = 22;
                    break;
                  }

                  c.push(_e2);
                  _context7.next = 23;
                  break;

                case 22:
                  i.push(_e2);

                case 23:
                  _iteratorNormalCompletion = true;
                  _context7.next = 14;
                  break;

                case 26:
                  _context7.next = 32;
                  break;

                case 28:
                  _context7.prev = 28;
                  _context7.t0 = _context7["catch"](12);
                  _didIteratorError = true;
                  _iteratorError = _context7.t0;

                case 32:
                  _context7.prev = 32;
                  _context7.prev = 33;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 35:
                  _context7.prev = 35;

                  if (!_didIteratorError) {
                    _context7.next = 38;
                    break;
                  }

                  throw _iteratorError;

                case 38:
                  return _context7.finish(35);

                case 39:
                  return _context7.finish(32);

                case 40:
                  _context7.next = 42;
                  return Promise.all(i.map(function (e) {
                    return r.m({ event: t, plugins: n, precacheEntry: e });
                  }));

                case 42:
                  return _context7.abrupt("return", { updatedEntries: i, notUpdatedEntries: c });

                case 43:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[12, 28, 32, 40], [33,, 35, 39]]);
        }))();
      }
    }, {
      key: "activate",
      value: function activate() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          var n, r, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _i, _r;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return caches.open(t.g());

                case 2:
                  n = _context8.sent;
                  _context8.next = 5;
                  return n.keys();

                case 5:
                  r = _context8.sent;
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context8.prev = 9;
                  _iterator2 = r[Symbol.iterator]();

                case 11:
                  if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    _context8.next = 23;
                    break;
                  }

                  _i = _step2.value;
                  _context8.next = 15;
                  return n.match(_i);

                case 15:
                  _r = _context8.sent;
                  _context8.next = 18;
                  return s.cacheWrapper.put({ cacheName: t.p, request: _i, response: _r, plugins: e.plugins });

                case 18:
                  _context8.next = 20;
                  return n.delete(_i);

                case 20:
                  _iteratorNormalCompletion2 = true;
                  _context8.next = 11;
                  break;

                case 23:
                  _context8.next = 29;
                  break;

                case 25:
                  _context8.prev = 25;
                  _context8.t0 = _context8["catch"](9);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context8.t0;

                case 29:
                  _context8.prev = 29;
                  _context8.prev = 30;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 32:
                  _context8.prev = 32;

                  if (!_didIteratorError2) {
                    _context8.next = 35;
                    break;
                  }

                  throw _iteratorError2;

                case 35:
                  return _context8.finish(32);

                case 36:
                  return _context8.finish(29);

                case 37:
                  return _context8.abrupt("return", t.R());

                case 38:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this, [[9, 25, 29, 37], [30,, 32, 36]]);
        }))();
      }
    }, {
      key: "g",
      value: function g() {
        return this.p + "-temp";
      }
    }, {
      key: "m",
      value: function m(_ref2) {
        var e = _ref2.precacheEntry,
            t = _ref2.event,
            n = _ref2.plugins;
        var i = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          var c;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return r.fetchWrapper.fetch({ request: e.s, event: t, fetchOptions: null, plugins: n });

                case 2:
                  c = _context9.sent;
                  _context9.t0 = c.redirected;

                  if (!_context9.t0) {
                    _context9.next = 8;
                    break;
                  }

                  _context9.next = 7;
                  return u(c);

                case 7:
                  c = _context9.sent;

                case 8:
                  _context9.next = 10;
                  return s.cacheWrapper.put({ cacheName: i.g(), request: e.r, response: c, event: t, plugins: n });

                case 10:
                  _context9.next = 12;
                  return i.y.d(e);

                case 12:
                  return _context9.abrupt("return", !0);

                case 13:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }))();
      }
    }, {
      key: "R",
      value: function R() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          var t, _ref3, _ref4, n, r;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  t = [];
                  e.f.forEach(function (e) {
                    var n = new URL(e.r.url, location).toString();t.push(n);
                  });_context10.next = 4;
                  return Promise.all([e._(t), e.U(t)]);

                case 4:
                  _ref3 = _context10.sent;
                  _ref4 = _slicedToArray(_ref3, 2);
                  n = _ref4[0];
                  r = _ref4[1];
                  return _context10.abrupt("return", { deletedCacheRequests: n, deletedRevisionDetails: r });

                case 9:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }))();
      }
    }, {
      key: "_",
      value: function _(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          var n, r;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return caches.has(t.p);

                case 2:
                  if (_context11.sent) {
                    _context11.next = 4;
                    break;
                  }

                  return _context11.abrupt("return", []);

                case 4:
                  _context11.next = 6;
                  return caches.open(t.p);

                case 6:
                  n = _context11.sent;
                  _context11.next = 9;
                  return n.keys();

                case 9:
                  _context11.t0 = function (t) {
                    return !e.includes(new URL(t.url, location).toString());
                  };

                  r = _context11.sent.filter(_context11.t0);
                  _context11.next = 13;
                  return Promise.all(r.map(function (e) {
                    return n.delete(e);
                  }));

                case 13:
                  return _context11.abrupt("return", r.map(function (e) {
                    return e.url;
                  }));

                case 14:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }))();
      }
    }, {
      key: "U",
      value: function U(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
          var n;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return t.y.u();

                case 2:
                  _context12.t0 = function (t) {
                    var n = new URL(t.value.url, location).toString();return !e.includes(n);
                  };

                  n = _context12.sent.filter(_context12.t0);
                  _context12.next = 6;
                  return Promise.all(n.map(function (e) {
                    return t.y.h(e.primaryKey);
                  }));

                case 6:
                  return _context12.abrupt("return", n.map(function (e) {
                    return e.value.url;
                  }));

                case 7:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }))();
      }
    }, {
      key: "getCachedUrls",
      value: function getCachedUrls() {
        return Array.from(this.f.keys()).map(function (e) {
          return new URL(e, location).href;
        });
      }
    }]);

    return h;
  }();

  var p = Object.freeze({ PrecacheController: h });var f = !1,
      y = !1,
      b = !1,
      w = [];var g = t.cacheNames.getPrecacheName(),
      v = new h(g),
      m = function m(e) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref5$ignoreUrlParame = _ref5.ignoreUrlParametersMatching,
        t = _ref5$ignoreUrlParame === undefined ? [/^utm_/] : _ref5$ignoreUrlParame,
        _ref5$directoryIndex = _ref5.directoryIndex,
        n = _ref5$directoryIndex === undefined ? "index.html" : _ref5$directoryIndex,
        _ref5$cleanUrls = _ref5.cleanUrls,
        r = _ref5$cleanUrls === undefined ? !0 : _ref5$cleanUrls,
        _ref5$urlManipulation = _ref5.urlManipulation,
        s = _ref5$urlManipulation === undefined ? null : _ref5$urlManipulation;

    var i = new URL(e, location);i.hash = "";var c = function (e, t) {
      var n = e.search.slice(1).split("&").map(function (e) {
        return e.split("=");
      }).filter(function (e) {
        return t.every(function (t) {
          return !t.test(e[0]);
        });
      }).map(function (e) {
        return e.join("=");
      }),
          r = new URL(e);return r.search = n.join("&"), r;
    }(i, t);var o = [i, c];if (n && c.pathname.endsWith("/")) {
      var _e3 = new URL(c);_e3.pathname += n, o.push(_e3);
    }if (r) {
      var _e4 = new URL(c);_e4.pathname += ".html", o.push(_e4);
    }if (s) {
      var _e5 = s({ url: i });o = o.concat(_e5);
    }var l = v.getCachedUrls();var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = o[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _e6 = _step3.value;
        if (-1 !== l.indexOf(_e6.href)) return _e6.href;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return null;
  },
      R = { precache: function precache(e) {
      v.addToCacheList(e), f || e.length <= 0 || (f = !0, self.addEventListener("install", function (e) {
        e.waitUntil(v.install({ event: e, plugins: w, suppressWarnings: b }));
      }), self.addEventListener("activate", function (e) {
        e.waitUntil(v.activate({ event: e, plugins: w }));
      }));
    }, addRoute: function addRoute(e) {
      y || (y = !0, self.addEventListener("fetch", function (t) {
        var n = m(t.request.url, e);if (!n) return;var r = caches.open(g).then(function (e) {
          return e.match(n);
        }).then(function (e) {
          return e || fetch(n);
        });t.respondWith(r);
      }));
    }, precacheAndRoute: function precacheAndRoute(e, t) {
      R.precache(e), R.addRoute(t);
    }, suppressWarnings: function suppressWarnings(e) {
      b = e;
    }, addPlugins: function addPlugins(e) {
      w = w.concat(e);
    } };return Object.assign(R, p);
}(workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-precaching.prod.js.map