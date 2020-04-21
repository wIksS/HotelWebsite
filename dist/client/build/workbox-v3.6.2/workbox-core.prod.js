"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

self.babelHelpers = { asyncToGenerator: function asyncToGenerator(e) {
    return function () {
      var t = e.apply(this, arguments);return new Promise(function (e, r) {
        return function n(o, i) {
          try {
            var c = t[o](i),
                l = c.value;
          } catch (e) {
            return void r(e);
          }if (!c.done) return Promise.resolve(l).then(function (e) {
            n("next", e);
          }, function (e) {
            n("throw", e);
          });e(l);
        }("next");
      });
    };
  } }, undefined.workbox = undefined.workbox || {}, undefined.workbox.core = function () {
  "use strict";
  try {
    self.workbox.v["workbox:core:3.6.2"] = 1;
  } catch (e) {}var e = { debug: 0, log: 1, warn: 2, error: 3, silent: 4 };var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);var r = function () {
    return e.warn;
  }();var n = function n(e) {
    return r <= e;
  },
      o = function o(e) {
    return r = e;
  },
      i = function i() {
    return r;
  },
      c = e.error,
      l = function l(r, o, i) {
    var _console, _console2;

    var l = 0 === r.indexOf("group") ? c : e[r];if (!n(l)) return;if (!i || "groupCollapsed" === r && t) return void (_console = console)[r].apply(_console, _toConsumableArray(o));var s = ["%cworkbox", "background: " + i + "; color: white; padding: 2px 0.5em; " + "border-radius: 0.5em;"];(_console2 = console)[r].apply(_console2, s.concat(_toConsumableArray(o)));
  },
      s = function s() {
    n(c) && console.groupEnd();
  },
      u = { groupEnd: s, unprefixed: { groupEnd: s } },
      a = { debug: "#7f8c8d", log: "#2ecc71", warn: "#f39c12", error: "#c0392b", groupCollapsed: "#3498db" };var f, d;Object.keys(a).forEach(function (e) {
    return e = e, d = a[e], u[e] = function () {
      for (var _len = arguments.length, t = Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }

      return l(e, t, d);
    }, void (u.unprefixed[e] = function () {
      for (var _len2 = arguments.length, t = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        t[_key2] = arguments[_key2];
      }

      return l(e, t);
    });
  });var h = function h(e) {
    for (var _len3 = arguments.length, t = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      t[_key3 - 1] = arguments[_key3];
    }

    var r = e;return t.length > 0 && (r += " :: " + JSON.stringify(t)), r;
  };
  var p = function (_Error) {
    _inherits(p, _Error);

    function p(e, t) {
      var _this;

      _classCallCheck(this, p);

      (_this = _possibleConstructorReturn(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, h(e, t))), _this), _this.name = e, _this.details = t;return _this;
    }

    return p;
  }(Error);

  var b = (y = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _e;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 3;
            _iterator = g[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 12;
              break;
            }

            _e = _step.value;
            _context.next = 9;
            return _e();

          case 9:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 12:
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 18:
            _context.prev = 18;
            _context.prev = 19;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 21:
            _context.prev = 21;

            if (!_didIteratorError) {
              _context.next = 24;
              break;
            }

            throw _iteratorError;

          case 24:
            return _context.finish(21);

          case 25:
            return _context.finish(18);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
  })), function () {
    return y.apply(this, arguments);
  });var y;var g = new Set();
  var v = function () {
    function v(e, t) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          r = _ref.onupgradeneeded,
          _ref$onversionchange = _ref.onversionchange,
          n = _ref$onversionchange === undefined ? this.e : _ref$onversionchange;

      _classCallCheck(this, v);

      this.t = e, this.r = t, this.n = r, this.e = n, this.o = null;
    }

    _createClass(v, [{
      key: "open",
      value: function open() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (e.o) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 3;
                  return new Promise(function (t, r) {
                    var n = !1;setTimeout(function () {
                      n = !0, r(new Error("The open request was blocked and timed out"));
                    }, e.OPEN_TIMEOUT);var o = indexedDB.open(e.t, e.r);o.onerror = function (e) {
                      return r(o.error);
                    }, o.onupgradeneeded = function (t) {
                      n ? (o.transaction.abort(), t.target.result.close()) : e.n && e.n(t);
                    }, o.onsuccess = function (r) {
                      var o = r.target.result;n ? o.close() : (o.onversionchange = e.e, t(o));
                    };
                  });

                case 3:
                  e.o = _context2.sent;
                  return _context2.abrupt("return", e);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))();
      }
    }, {
      key: "get",
      value: function get(e) {
        for (var _len4 = arguments.length, t = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          t[_key4 - 1] = arguments[_key4];
        }

        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return r.i.apply(r, ["get", e, "readonly"].concat(t));

                case 2:
                  return _context3.abrupt("return", _context3.sent);

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }
    }, {
      key: "add",
      value: function add(e) {
        for (var _len5 = arguments.length, t = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          t[_key5 - 1] = arguments[_key5];
        }

        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return r.i.apply(r, ["add", e, "readwrite"].concat(t));

                case 2:
                  return _context4.abrupt("return", _context4.sent);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }
    }, {
      key: "put",
      value: function put(e) {
        for (var _len6 = arguments.length, t = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          t[_key6 - 1] = arguments[_key6];
        }

        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return r.i.apply(r, ["put", e, "readwrite"].concat(t));

                case 2:
                  return _context5.abrupt("return", _context5.sent);

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }))();
      }
    }, {
      key: "delete",
      value: function _delete(e) {
        for (var _len7 = arguments.length, t = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          t[_key7 - 1] = arguments[_key7];
        }

        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return r.i.apply(r, ["delete", e, "readwrite"].concat(t));

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))();
      }
    }, {
      key: "deleteDatabase",
      value: function deleteDatabase() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  e.close();
                  e.o = null;
                  _context7.next = 4;
                  return new Promise(function (t, r) {
                    var n = indexedDB.deleteDatabase(e.t);n.onerror = function (e) {
                      return r(e.target.error);
                    }, n.onblocked = function () {
                      return r(new Error("Deletion was blocked."));
                    }, n.onsuccess = function () {
                      return t();
                    };
                  });

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }))();
      }
    }, {
      key: "getAll",
      value: function getAll(e, t, r) {
        var n = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  if (!("getAll" in IDBObjectStore.prototype)) {
                    _context8.next = 6;
                    break;
                  }

                  _context8.next = 3;
                  return n.i("getAll", e, "readonly", t, r);

                case 3:
                  _context8.t0 = _context8.sent;
                  _context8.next = 9;
                  break;

                case 6:
                  _context8.next = 8;
                  return n.getAllMatching(e, { query: t, count: r });

                case 8:
                  _context8.t0 = _context8.sent;

                case 9:
                  return _context8.abrupt("return", _context8.t0);

                case 10:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }))();
      }
    }, {
      key: "getAllMatching",
      value: function getAllMatching(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return r.transaction([e], "readonly", function (r, n) {
                    var o = r[e],
                        i = t.index ? o.index(t.index) : o,
                        c = [],
                        l = t.query || null,
                        s = t.direction || "next";i.openCursor(l, s).onsuccess = function (e) {
                      var r = e.target.result;if (r) {
                        var _e3 = r.primaryKey,
                            _o = r.key,
                            _i = r.value;
                        c.push(t.includeKeys ? { primaryKey: _e3, key: _o, value: _i } : _i), t.count && c.length >= t.count ? n(c) : r.continue();
                      } else n(c);
                    };
                  });

                case 2:
                  return _context9.abrupt("return", _context9.sent);

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }))();
      }
    }, {
      key: "transaction",
      value: function transaction(e, t, r) {
        var n = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return n.open();

                case 2:
                  _context10.next = 4;
                  return new Promise(function (o, i) {
                    var c = n.o.transaction(e, t);c.onerror = function (e) {
                      return i(e.target.error);
                    }, c.onabort = function (e) {
                      return i(e.target.error);
                    }, c.oncomplete = function () {
                      return o();
                    };var l = {};var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                      for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _t = _step2.value;
                        l[_t] = c.objectStore(_t);
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

                    r(l, function (e) {
                      return o(e);
                    }, function () {
                      i(new Error("The transaction was manually aborted")), c.abort();
                    });
                  });

                case 4:
                  return _context10.abrupt("return", _context10.sent);

                case 5:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }))();
      }
    }, {
      key: "i",
      value: function i(e, t, r) {
        for (var _len8 = arguments.length, n = Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++) {
          n[_key8 - 3] = arguments[_key8];
        }

        var o = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return o.open();

                case 2:
                  _context11.next = 4;
                  return o.transaction([t], r, function (r, o) {
                    var _r$t;

                    (_r$t = r[t])[e].apply(_r$t, n).onsuccess = function (e) {
                      o(e.target.result);
                    };
                  });

                case 4:
                  return _context11.abrupt("return", _context11.sent);

                case 5:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }))();
      }
    }, {
      key: "e",
      value: function e(_e2) {
        this.close();
      }
    }, {
      key: "close",
      value: function close() {
        this.o && this.o.close();
      }
    }]);

    return v;
  }();

  v.prototype.OPEN_TIMEOUT = 2e3;var w = { prefix: "workbox", suffix: self.registration.scope, googleAnalytics: "googleAnalytics", precache: "precache", runtime: "runtime" },
      m = function m(e) {
    return [w.prefix, e, w.suffix].filter(function (e) {
      return e.length > 0;
    }).join("-");
  },
      q = { updateDetails: function updateDetails(e) {
      Object.keys(w).forEach(function (t) {
        void 0 !== e[t] && (w[t] = e[t]);
      });
    }, getGoogleAnalyticsName: function getGoogleAnalyticsName(e) {
      return e || m(w.googleAnalytics);
    }, getPrecacheName: function getPrecacheName(e) {
      return e || m(w.precache);
    }, getRuntimeName: function getRuntimeName(e) {
      return e || m(w.runtime);
    } };var E = "cacheDidUpdate",
      L = "cacheWillUpdate",
      x = "cachedResponseWillBeUsed",
      H = "fetchDidFail",
      N = "requestWillFetch",
      O = function O(e, t) {
    return e.filter(function (e) {
      return t in e;
    });
  };var k = function k(e) {
    var t = new URL(e, location);return t.origin === location.origin ? t.pathname : t.href;
  },
      D = function () {
    var e = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref2.cacheName,
          t = _ref2.request,
          r = _ref2.response,
          n = _ref2.event,
          _ref2$plugins = _ref2.plugins,
          o = _ref2$plugins === undefined ? [] : _ref2$plugins;

      var i, c, l, s, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _r;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (r) {
                _context12.next = 2;
                break;
              }

              throw new p("cache-put-with-no-response", { url: k(t.url) });

            case 2:
              _context12.next = 4;
              return P({ request: t, response: r, event: n, plugins: o });

            case 4:
              i = _context12.sent;

              if (i) {
                _context12.next = 7;
                break;
              }

              return _context12.abrupt("return");

            case 7:
              _context12.next = 9;
              return caches.open(e);

            case 9:
              c = _context12.sent;
              l = O(o, E);

              if (!(l.length > 0)) {
                _context12.next = 17;
                break;
              }

              _context12.next = 14;
              return R({ cacheName: e, request: t });

            case 14:
              _context12.t0 = _context12.sent;
              _context12.next = 18;
              break;

            case 17:
              _context12.t0 = null;

            case 18:
              s = _context12.t0;
              _context12.prev = 19;
              _context12.next = 22;
              return c.put(t, i);

            case 22:
              _context12.next = 31;
              break;

            case 24:
              _context12.prev = 24;
              _context12.t1 = _context12["catch"](19);
              _context12.t2 = "QuotaExceededError" === _context12.t1.name;

              if (!_context12.t2) {
                _context12.next = 30;
                break;
              }

              _context12.next = 30;
              return b();

            case 30:
              throw _context12.t1;

            case 31:
              _iteratorNormalCompletion3 = true;
              _didIteratorError3 = false;
              _iteratorError3 = undefined;
              _context12.prev = 34;
              _iterator3 = l[Symbol.iterator]();

            case 36:
              if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                _context12.next = 43;
                break;
              }

              _r = _step3.value;
              _context12.next = 40;
              return _r[E].call(_r, { cacheName: e, request: t, event: n, oldResponse: s, newResponse: i });

            case 40:
              _iteratorNormalCompletion3 = true;
              _context12.next = 36;
              break;

            case 43:
              _context12.next = 49;
              break;

            case 45:
              _context12.prev = 45;
              _context12.t3 = _context12["catch"](34);
              _didIteratorError3 = true;
              _iteratorError3 = _context12.t3;

            case 49:
              _context12.prev = 49;
              _context12.prev = 50;

              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }

            case 52:
              _context12.prev = 52;

              if (!_didIteratorError3) {
                _context12.next = 55;
                break;
              }

              throw _iteratorError3;

            case 55:
              return _context12.finish(52);

            case 56:
              return _context12.finish(49);

            case 57:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this, [[19, 24], [34, 45, 49, 57], [50,, 52, 56]]);
    }));return function () {
      return e.apply(this, arguments);
    };
  }(),
      R = (A = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(_ref3) {
    var e = _ref3.cacheName,
        t = _ref3.request,
        r = _ref3.event,
        n = _ref3.matchOptions,
        _ref3$plugins = _ref3.plugins,
        o = _ref3$plugins === undefined ? [] : _ref3$plugins;

    var i, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _c;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return caches.open(e);

          case 2:
            _context13.t0 = t;
            _context13.t1 = n;
            _context13.next = 6;
            return _context13.sent.match(_context13.t0, _context13.t1);

          case 6:
            i = _context13.sent;
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context13.prev = 10;
            _iterator4 = o[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
              _context13.next = 22;
              break;
            }

            _c = _step4.value;
            _context13.t2 = x in _c;

            if (!_context13.t2) {
              _context13.next = 19;
              break;
            }

            _context13.next = 18;
            return _c[x].call(_c, { cacheName: e, request: t, event: r, matchOptions: n, cachedResponse: i });

          case 18:
            i = _context13.sent;

          case 19:
            _iteratorNormalCompletion4 = true;
            _context13.next = 12;
            break;

          case 22:
            _context13.next = 28;
            break;

          case 24:
            _context13.prev = 24;
            _context13.t3 = _context13["catch"](10);
            _didIteratorError4 = true;
            _iteratorError4 = _context13.t3;

          case 28:
            _context13.prev = 28;
            _context13.prev = 29;

            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }

          case 31:
            _context13.prev = 31;

            if (!_didIteratorError4) {
              _context13.next = 34;
              break;
            }

            throw _iteratorError4;

          case 34:
            return _context13.finish(31);

          case 35:
            return _context13.finish(28);

          case 36:
            return _context13.abrupt("return", i);

          case 37:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this, [[10, 24, 28, 36], [29,, 31, 35]]);
  })), function (e) {
    return A.apply(this, arguments);
  });var A;var P = (W = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(_ref4) {
    var e = _ref4.request,
        t = _ref4.response,
        r = _ref4.event,
        n = _ref4.plugins;

    var o, i, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _t2;

    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            o = t, i = !1;
            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context14.prev = 4;
            _iterator5 = n[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
              _context14.next = 19;
              break;
            }

            _t2 = _step5.value;
            _context14.t0 = L in _t2;

            if (!_context14.t0) {
              _context14.next = 14;
              break;
            }

            i = !0;
            _context14.next = 13;
            return _t2[L].call(_t2, { request: e, response: o, event: r });

          case 13:
            _context14.t0 = !(o = _context14.sent);

          case 14:
            if (!_context14.t0) {
              _context14.next = 16;
              break;
            }

            return _context14.abrupt("break", 19);

          case 16:
            _iteratorNormalCompletion5 = true;
            _context14.next = 6;
            break;

          case 19:
            _context14.next = 25;
            break;

          case 21:
            _context14.prev = 21;
            _context14.t1 = _context14["catch"](4);
            _didIteratorError5 = true;
            _iteratorError5 = _context14.t1;

          case 25:
            _context14.prev = 25;
            _context14.prev = 26;

            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }

          case 28:
            _context14.prev = 28;

            if (!_didIteratorError5) {
              _context14.next = 31;
              break;
            }

            throw _iteratorError5;

          case 31:
            return _context14.finish(28);

          case 32:
            return _context14.finish(25);

          case 33:
            return _context14.abrupt("return", (i || (o = o.ok ? o : null), o || null));

          case 34:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this, [[4, 21, 25, 33], [26,, 28, 32]]);
  })), function (e) {
    return W.apply(this, arguments);
  });var W;var S = { put: D, match: R },
      _ = { fetch: function () {
      var e = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref5) {
        var e = _ref5.request,
            t = _ref5.fetchOptions,
            r = _ref5.event,
            _ref5$plugins = _ref5.plugins,
            n = _ref5$plugins === undefined ? [] : _ref5$plugins;

        var _e4, o, i, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _t3, c, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _t4;

        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(r && r.preloadResponse)) {
                  _context15.next = 6;
                  break;
                }

                _context15.next = 3;
                return r.preloadResponse;

              case 3:
                _e4 = _context15.sent;

                if (!_e4) {
                  _context15.next = 6;
                  break;
                }

                return _context15.abrupt("return", _e4);

              case 6:
                "string" == typeof e && (e = new Request(e));o = O(n, H), i = o.length > 0 ? e.clone() : null;
                _context15.prev = 8;
                _iteratorNormalCompletion6 = true;
                _didIteratorError6 = false;
                _iteratorError6 = undefined;
                _context15.prev = 12;
                _iterator6 = n[Symbol.iterator]();

              case 14:
                if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                  _context15.next = 24;
                  break;
                }

                _t3 = _step6.value;
                _context15.t0 = N in _t3;

                if (!_context15.t0) {
                  _context15.next = 21;
                  break;
                }

                _context15.next = 20;
                return _t3[N].call(_t3, { request: e.clone(), event: r });

              case 20:
                e = _context15.sent;

              case 21:
                _iteratorNormalCompletion6 = true;
                _context15.next = 14;
                break;

              case 24:
                _context15.next = 30;
                break;

              case 26:
                _context15.prev = 26;
                _context15.t1 = _context15["catch"](12);
                _didIteratorError6 = true;
                _iteratorError6 = _context15.t1;

              case 30:
                _context15.prev = 30;
                _context15.prev = 31;

                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                  _iterator6.return();
                }

              case 33:
                _context15.prev = 33;

                if (!_didIteratorError6) {
                  _context15.next = 36;
                  break;
                }

                throw _iteratorError6;

              case 36:
                return _context15.finish(33);

              case 37:
                return _context15.finish(30);

              case 38:
                _context15.next = 43;
                break;

              case 40:
                _context15.prev = 40;
                _context15.t2 = _context15["catch"](8);
                throw new p("plugin-error-request-will-fetch", { thrownError: _context15.t2 });

              case 43:
                c = e.clone();
                _context15.prev = 44;
                _context15.next = 47;
                return fetch(e, t);

              case 47:
                return _context15.abrupt("return", _context15.sent);

              case 50:
                _context15.prev = 50;
                _context15.t3 = _context15["catch"](44);
                _iteratorNormalCompletion7 = true;
                _didIteratorError7 = false;
                _iteratorError7 = undefined;
                _context15.prev = 55;
                _iterator7 = o[Symbol.iterator]();

              case 57:
                if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                  _context15.next = 64;
                  break;
                }

                _t4 = _step7.value;
                _context15.next = 61;
                return _t4[H].call(_t4, { error: _context15.t3, event: r, originalRequest: i.clone(), request: c.clone() });

              case 61:
                _iteratorNormalCompletion7 = true;
                _context15.next = 57;
                break;

              case 64:
                _context15.next = 70;
                break;

              case 66:
                _context15.prev = 66;
                _context15.t4 = _context15["catch"](55);
                _didIteratorError7 = true;
                _iteratorError7 = _context15.t4;

              case 70:
                _context15.prev = 70;
                _context15.prev = 71;

                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                  _iterator7.return();
                }

              case 73:
                _context15.prev = 73;

                if (!_didIteratorError7) {
                  _context15.next = 76;
                  break;
                }

                throw _iteratorError7;

              case 76:
                return _context15.finish(73);

              case 77:
                return _context15.finish(70);

              case 78:
                throw _context15.t3;

              case 79:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[8, 40], [12, 26, 30, 38], [31,, 33, 37], [44, 50], [55, 66, 70, 78], [71,, 73, 77]]);
      }));return function (t) {
        return e.apply(this, arguments);
      };
    }() };var j = Object.freeze({ DBWrapper: v, WorkboxError: p, assert: null, cacheNames: q, cacheWrapper: S, fetchWrapper: _, getFriendlyURL: k, logger: u });var B = new (function () {
    function _class() {
      _classCallCheck(this, _class);

      try {
        self.workbox.v = self.workbox.v || {};
      } catch (e) {}
    }

    _createClass(_class, [{
      key: "setCacheNameDetails",
      value: function setCacheNameDetails(e) {
        q.updateDetails(e);
      }
    }, {
      key: "setLogLevel",
      value: function setLogLevel(t) {
        if (t > e.silent || t < e.debug) throw new p("invalid-value", { paramName: "logLevel", validValueDescription: "Please use a value from LOG_LEVELS, i.e 'logLevel = workbox.core.LOG_LEVELS.debug'.", value: t });o(t);
      }
    }, {
      key: "cacheNames",
      get: function get() {
        return { googleAnalytics: q.getGoogleAnalyticsName(), precache: q.getPrecacheName(), runtime: q.getRuntimeName() };
      }
    }, {
      key: "logLevel",
      get: function get() {
        return i();
      }
    }]);

    return _class;
  }())();return Object.assign(B, { _private: j, LOG_LEVELS: e, registerQuotaErrorCallback: function registerQuotaErrorCallback(e) {
      g.add(e);
    } });
}();

//# sourceMappingURL=workbox-core.prod.js.map