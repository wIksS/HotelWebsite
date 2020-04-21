"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.strategies = function (e, t, s) {
  "use strict";
  try {
    self.workbox.v["workbox:strategies:3.6.2"] = 1;
  } catch (e) {}
  var r = function () {
    function r() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, r);

      this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], this.s = t.fetchOptions || null, this.r = t.matchOptions || null;
    }

    _createClass(r, [{
      key: "handle",
      value: function handle(_ref) {
        var e = _ref.event;
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", t.makeRequest({ event: e, request: e.request }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();
      }
    }, {
      key: "makeRequest",
      value: function makeRequest(_ref2) {
        var e = _ref2.event,
            s = _ref2.request;
        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var n, i;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  "string" == typeof s && (s = new Request(s));n = void 0;
                  _context2.next = 4;
                  return t.cacheWrapper.match({ cacheName: r.e, request: s, event: e, matchOptions: r.r, plugins: r.t });

                case 4:
                  i = _context2.sent;

                  if (i) {
                    _context2.next = 15;
                    break;
                  }

                  _context2.prev = 6;
                  _context2.next = 9;
                  return r.n(s, e);

                case 9:
                  i = _context2.sent;
                  _context2.next = 15;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2["catch"](6);
                  n = _context2.t0;

                case 15:
                  if (!n) {
                    _context2.next = 17;
                    break;
                  }

                  throw n;

                case 17:
                  return _context2.abrupt("return", i);

                case 18:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[6, 12]]);
        }))();
      }
    }, {
      key: "n",
      value: function n(e, r) {
        var n = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var i, u, l;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return s.fetchWrapper.fetch({ request: e, event: r, fetchOptions: n.s, plugins: n.t });

                case 2:
                  i = _context3.sent;
                  u = i.clone();
                  l = t.cacheWrapper.put({ cacheName: n.e, request: e, response: u, event: r, plugins: n.t });
                  if (r) try {
                    r.waitUntil(l);
                  } catch (e) {}return _context3.abrupt("return", i);

                case 7:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }
    }]);

    return r;
  }();

  var n = function () {
    function n() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, n);

      this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], this.r = t.matchOptions || null;
    }

    _createClass(n, [{
      key: "handle",
      value: function handle(_ref3) {
        var e = _ref3.event;
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", t.makeRequest({ event: e, request: e.request }));

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }
    }, {
      key: "makeRequest",
      value: function makeRequest(_ref4) {
        var e = _ref4.event,
            s = _ref4.request;
        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  "string" == typeof s && (s = new Request(s));
                  _context5.next = 3;
                  return t.cacheWrapper.match({ cacheName: r.e, request: s, event: e, matchOptions: r.r, plugins: r.t });

                case 3:
                  return _context5.abrupt("return", _context5.sent);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }))();
      }
    }]);

    return n;
  }();

  var i = { cacheWillUpdate: function cacheWillUpdate(_ref5) {
      var e = _ref5.response;
      return e.ok || 0 === e.status ? e : null;
    } };
  var u = function () {
    function u() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, u);

      if (this.e = e.cacheNames.getRuntimeName(t.cacheName), t.plugins) {
        var _e = t.plugins.some(function (e) {
          return !!e.cacheWillUpdate;
        });this.t = _e ? t.plugins : [i].concat(_toConsumableArray(t.plugins));
      } else this.t = [i];this.i = t.networkTimeoutSeconds, this.s = t.fetchOptions || null, this.r = t.matchOptions || null;
    }

    _createClass(u, [{
      key: "handle",
      value: function handle(_ref6) {
        var e = _ref6.event;
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  return _context6.abrupt("return", t.makeRequest({ event: e, request: e.request }));

                case 1:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))();
      }
    }, {
      key: "makeRequest",
      value: function makeRequest(_ref7) {
        var e = _ref7.event,
            t = _ref7.request;
        var s = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var r, n, i, _s$u, _u, _l, u, l;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  r = [];
                  "string" == typeof t && (t = new Request(t));n = [];
                  i = void 0;
                  if (s.i) {
                    _s$u = s.u({ request: t, event: e, logs: r }), _u = _s$u.id, _l = _s$u.promise;
                    i = _u, n.push(_l);
                  }u = s.l({ timeoutId: i, request: t, event: e, logs: r });
                  n.push(u);_context7.next = 9;
                  return Promise.race(n);

                case 9:
                  l = _context7.sent;
                  _context7.t0 = l;

                  if (_context7.t0) {
                    _context7.next = 15;
                    break;
                  }

                  _context7.next = 14;
                  return u;

                case 14:
                  l = _context7.sent;

                case 15:
                  return _context7.abrupt("return", l);

                case 16:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }))();
      }
    }, {
      key: "u",
      value: function u(_ref8) {
        var _this = this;

        var e = _ref8.request,
            t = _ref8.logs,
            s = _ref8.event;
        var r = this;var n = void 0;var i;return { promise: new Promise(function (t) {
            var u = (i = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.t0 = t;
                      _context8.next = 3;
                      return r.c({ request: e, event: s });

                    case 3:
                      _context8.t1 = _context8.sent;
                      (0, _context8.t0)(_context8.t1);

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            })), function () {
              return i.apply(this, arguments);
            });n = setTimeout(u, 1e3 * _this.i);
          }), id: n };
      }
    }, {
      key: "l",
      value: function l(_ref9) {
        var e = _ref9.timeoutId,
            r = _ref9.request,
            n = _ref9.logs,
            i = _ref9.event;
        var u = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          var n, l, _e2, _s;

          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  n = void 0, l = void 0;
                  _context9.prev = 1;
                  _context9.next = 4;
                  return s.fetchWrapper.fetch({ request: r, event: i, fetchOptions: u.s, plugins: u.t });

                case 4:
                  l = _context9.sent;
                  _context9.next = 10;
                  break;

                case 7:
                  _context9.prev = 7;
                  _context9.t0 = _context9["catch"](1);
                  n = _context9.t0;

                case 10:
                  if (!(e && clearTimeout(e), n || !l)) {
                    _context9.next = 16;
                    break;
                  }

                  _context9.next = 13;
                  return u.c({ request: r, event: i });

                case 13:
                  l = _context9.sent;
                  _context9.next = 18;
                  break;

                case 16:
                  _e2 = l.clone(), _s = t.cacheWrapper.put({ cacheName: u.e, request: r, response: _e2, event: i, plugins: u.t });
                  if (i) try {
                    i.waitUntil(_s);
                  } catch (e) {}

                case 18:
                  return _context9.abrupt("return", l);

                case 19:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this, [[1, 7]]);
        }))();
      }
    }, {
      key: "c",
      value: function c(_ref10) {
        var e = _ref10.event,
            s = _ref10.request;
        return t.cacheWrapper.match({ cacheName: this.e, request: s, event: e, matchOptions: this.r, plugins: this.t });
      }
    }]);

    return u;
  }();

  var l = function () {
    function l() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, l);

      this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], this.s = t.fetchOptions || null;
    }

    _createClass(l, [{
      key: "handle",
      value: function handle(_ref11) {
        var e = _ref11.event;
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  return _context10.abrupt("return", t.makeRequest({ event: e, request: e.request }));

                case 1:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }))();
      }
    }, {
      key: "makeRequest",
      value: function makeRequest(_ref12) {
        var e = _ref12.event,
            t = _ref12.request;
        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          var n, i;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  n = void 0, i = void 0;
                  "string" == typeof t && (t = new Request(t));_context11.prev = 2;
                  _context11.next = 5;
                  return s.fetchWrapper.fetch({ request: t, event: e, fetchOptions: r.s, plugins: r.t });

                case 5:
                  i = _context11.sent;
                  _context11.next = 11;
                  break;

                case 8:
                  _context11.prev = 8;
                  _context11.t0 = _context11["catch"](2);
                  n = _context11.t0;

                case 11:
                  if (!n) {
                    _context11.next = 13;
                    break;
                  }

                  throw n;

                case 13:
                  return _context11.abrupt("return", i);

                case 14:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this, [[2, 8]]);
        }))();
      }
    }]);

    return l;
  }();

  var c = function () {
    function c() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, c);

      if (this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], t.plugins) {
        var _e3 = t.plugins.some(function (e) {
          return !!e.cacheWillUpdate;
        });this.t = _e3 ? t.plugins : [i].concat(_toConsumableArray(t.plugins));
      } else this.t = [i];this.s = t.fetchOptions || null, this.r = t.matchOptions || null;
    }

    _createClass(c, [{
      key: "handle",
      value: function handle(_ref13) {
        var e = _ref13.event;
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  return _context12.abrupt("return", t.makeRequest({ event: e, request: e.request }));

                case 1:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }))();
      }
    }, {
      key: "makeRequest",
      value: function makeRequest(_ref14) {
        var e = _ref14.event,
            s = _ref14.request;
        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
          var n, i;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  "string" == typeof s && (s = new Request(s));n = r.n({ request: s, event: e });
                  _context13.next = 4;
                  return t.cacheWrapper.match({ cacheName: r.e, request: s, event: e, matchOptions: r.r, plugins: r.t });

                case 4:
                  i = _context13.sent;

                  if (!i) {
                    _context13.next = 9;
                    break;
                  }

                  if (e) try {
                    e.waitUntil(n);
                  } catch (e) {}_context13.next = 12;
                  break;

                case 9:
                  _context13.next = 11;
                  return n;

                case 11:
                  i = _context13.sent;

                case 12:
                  return _context13.abrupt("return", i);

                case 13:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }))();
      }
    }, {
      key: "n",
      value: function n(_ref15) {
        var e = _ref15.request,
            r = _ref15.event;
        var n = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
          var i, u;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return s.fetchWrapper.fetch({ request: e, event: r, fetchOptions: n.s, plugins: n.t });

                case 2:
                  i = _context14.sent;
                  u = t.cacheWrapper.put({ cacheName: n.e, request: e, response: i.clone(), event: r, plugins: n.t });
                  if (r) try {
                    r.waitUntil(u);
                  } catch (e) {}return _context14.abrupt("return", i);

                case 6:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }))();
      }
    }]);

    return c;
  }();

  var o = Object.freeze({ CacheFirst: r, CacheOnly: n, NetworkFirst: u, NetworkOnly: l, StaleWhileRevalidate: c });var a = { cacheFirst: r, cacheOnly: n, networkFirst: u, networkOnly: l, staleWhileRevalidate: c },
      h = {};return Object.keys(a).forEach(function (e) {
    h[e] = function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new (0, a[e])(Object.assign(t));
    };
  }), Object.assign(h, o);
}(workbox.core._private, workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-strategies.prod.js.map