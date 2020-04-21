"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.expiration = function (e, t, r, n, i) {
  "use strict";
  try {
    self.workbox.v["workbox:cache-expiration:3.6.2"] = 1;
  } catch (e) {}var s = "url",
      a = "timestamp";
  var l = function () {
    function l(e) {
      var _this = this;

      _classCallCheck(this, l);

      this.e = e, this.t = e, this.r = new t.DBWrapper(this.e, 2, { onupgradeneeded: function onupgradeneeded(e) {
          return _this.n(e);
        } });
    }

    _createClass(l, [{
      key: "n",
      value: function n(e) {
        var t = e.target.result;e.oldVersion < 2 && t.objectStoreNames.contains("workbox-cache-expiration") && t.deleteObjectStore("workbox-cache-expiration"), t.createObjectStore(this.t, { keyPath: s }).createIndex(a, a, { unique: !1 });
      }
    }, {
      key: "setTimestamp",
      value: function setTimestamp(e, t) {
        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _r$r$put;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return r.r.put(r.t, (_r$r$put = {}, _defineProperty(_r$r$put, s, new URL(e, location).href), _defineProperty(_r$r$put, a, t), _r$r$put));

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();
      }
    }, {
      key: "getAllTimestamps",
      value: function getAllTimestamps() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return e.r.getAllMatching(e.t, { index: a });

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
      key: "getTimestamp",
      value: function getTimestamp(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return t.r.get(t.t, e);

                case 2:
                  return _context3.abrupt("return", _context3.sent.timestamp);

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }
    }, {
      key: "deleteUrl",
      value: function deleteUrl(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return t.r.delete(t.t, new URL(e, location).href);

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }
    }, {
      key: "delete",
      value: function _delete() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return e.r.deleteDatabase();

                case 2:
                  e.r = null;

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }))();
      }
    }]);

    return l;
  }();

  var o = function () {
    function o(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, o);

      this.i = !1, this.s = !1, this.a = t.maxEntries, this.l = t.maxAgeSeconds, this.e = e, this.o = new l(e);
    }

    _createClass(o, [{
      key: "expireEntries",
      value: function expireEntries() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var t, r, n, i;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!e.i) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return", void (e.s = !0));

                case 2:
                  e.i = !0;t = Date.now();
                  _context6.next = 6;
                  return e.c(t);

                case 6:
                  r = _context6.sent;
                  _context6.next = 9;
                  return e.u();

                case 9:
                  n = _context6.sent;
                  i = [].concat(_toConsumableArray(new Set(r.concat(n))));
                  _context6.next = 13;
                  return Promise.all([e.h(i), e.d(i)]);

                case 13:
                  e.i = !1;
                  e.s && (e.s = !1, e.expireEntries());

                case 15:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))();
      }
    }, {
      key: "c",
      value: function c(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var r, n;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (t.l) {
                    _context7.next = 2;
                    break;
                  }

                  return _context7.abrupt("return", []);

                case 2:
                  r = e - 1e3 * t.l, n = [];
                  _context7.next = 5;
                  return t.o.getAllTimestamps();

                case 5:
                  _context7.t0 = function (e) {
                    e.timestamp < r && n.push(e.url);
                  };

                  _context7.sent.forEach(_context7.t0);

                  return _context7.abrupt("return", n);

                case 8:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }))();
      }
    }, {
      key: "u",
      value: function u() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          var t, r, _e;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  t = [];

                  if (e.a) {
                    _context8.next = 3;
                    break;
                  }

                  return _context8.abrupt("return", []);

                case 3:
                  _context8.next = 5;
                  return e.o.getAllTimestamps();

                case 5:
                  r = _context8.sent;
                  for (; r.length > e.a;) {
                    _e = r.shift();
                    t.push(_e.url);
                  }return _context8.abrupt("return", t);

                case 8:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }))();
      }
    }, {
      key: "h",
      value: function h(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          var r, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _t;

          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return caches.open(t.e);

                case 2:
                  r = _context9.sent;
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context9.prev = 6;
                  _iterator = e[Symbol.iterator]();

                case 8:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context9.next = 15;
                    break;
                  }

                  _t = _step.value;
                  _context9.next = 12;
                  return r.delete(_t);

                case 12:
                  _iteratorNormalCompletion = true;
                  _context9.next = 8;
                  break;

                case 15:
                  _context9.next = 21;
                  break;

                case 17:
                  _context9.prev = 17;
                  _context9.t0 = _context9["catch"](6);
                  _didIteratorError = true;
                  _iteratorError = _context9.t0;

                case 21:
                  _context9.prev = 21;
                  _context9.prev = 22;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 24:
                  _context9.prev = 24;

                  if (!_didIteratorError) {
                    _context9.next = 27;
                    break;
                  }

                  throw _iteratorError;

                case 27:
                  return _context9.finish(24);

                case 28:
                  return _context9.finish(21);

                case 29:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this, [[6, 17, 21, 29], [22,, 24, 28]]);
        }))();
      }
    }, {
      key: "d",
      value: function d(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _r;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context10.prev = 3;
                  _iterator2 = e[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    _context10.next = 12;
                    break;
                  }

                  _r = _step2.value;
                  _context10.next = 9;
                  return t.o.deleteUrl(_r);

                case 9:
                  _iteratorNormalCompletion2 = true;
                  _context10.next = 5;
                  break;

                case 12:
                  _context10.next = 18;
                  break;

                case 14:
                  _context10.prev = 14;
                  _context10.t0 = _context10["catch"](3);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context10.t0;

                case 18:
                  _context10.prev = 18;
                  _context10.prev = 19;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 21:
                  _context10.prev = 21;

                  if (!_didIteratorError2) {
                    _context10.next = 24;
                    break;
                  }

                  throw _iteratorError2;

                case 24:
                  return _context10.finish(21);

                case 25:
                  return _context10.finish(18);

                case 26:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        }))();
      }
    }, {
      key: "updateTimestamp",
      value: function updateTimestamp(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          var r;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  r = new URL(e, location);
                  r.hash = "";
                  _context11.next = 4;
                  return t.o.setTimestamp(r.href, Date.now());

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }))();
      }
    }, {
      key: "isURLExpired",
      value: function isURLExpired(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
          var n;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  if (t.l) {
                    _context12.next = 2;
                    break;
                  }

                  throw new r.WorkboxError("expired-test-without-max-age", { methodName: "isURLExpired", paramName: "maxAgeSeconds" });

                case 2:
                  n = new URL(e, location);
                  n.hash = "";
                  _context12.next = 6;
                  return t.o.getTimestamp(n.href);

                case 6:
                  _context12.t0 = _context12.sent;
                  _context12.t1 = Date.now() - 1e3 * t.l;
                  return _context12.abrupt("return", _context12.t0 < _context12.t1);

                case 9:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }))();
      }
    }, {
      key: "delete",
      value: function _delete() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  e.s = !1;
                  _context13.next = 3;
                  return e.o.delete();

                case 3:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }))();
      }
    }]);

    return o;
  }();

  return e.CacheExpiration = o, e.Plugin = function () {
    function _class() {
      var _this2 = this;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _class);

      this.p = e, this.l = e.maxAgeSeconds, this.b = new Map(), e.purgeOnQuotaError && i.registerQuotaErrorCallback(function () {
        return _this2.deleteCacheAndMetadata();
      });
    }

    _createClass(_class, [{
      key: "f",
      value: function f(e) {
        if (e === n.cacheNames.getRuntimeName()) throw new r.WorkboxError("expire-custom-caches-only");var t = this.b.get(e);return t || (t = new o(e, this.p), this.b.set(e, t)), t;
      }
    }, {
      key: "cachedResponseWillBeUsed",
      value: function cachedResponseWillBeUsed(_ref) {
        var e = _ref.cacheName,
            t = _ref.cachedResponse;
        if (!t) return null;var r = this.m(t);return this.f(e).expireEntries(), r ? t : null;
      }
    }, {
      key: "m",
      value: function m(e) {
        if (!this.l) return !0;var t = this.y(e);return null === t || t >= Date.now() - 1e3 * this.l;
      }
    }, {
      key: "y",
      value: function y(e) {
        if (!e.headers.has("date")) return null;var t = e.headers.get("date"),
            r = new Date(t).getTime();return isNaN(r) ? null : r;
      }
    }, {
      key: "cacheDidUpdate",
      value: function cacheDidUpdate(_ref2) {
        var e = _ref2.cacheName,
            t = _ref2.request;
        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
          var n;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  n = r.f(e);
                  _context14.next = 3;
                  return n.updateTimestamp(t.url);

                case 3:
                  _context14.next = 5;
                  return n.expireEntries();

                case 5:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }))();
      }
    }, {
      key: "deleteCacheAndMetadata",
      value: function deleteCacheAndMetadata() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
          var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _ref3, _ref4, t, _r2;

          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _iteratorNormalCompletion3 = true;
                  _didIteratorError3 = false;
                  _iteratorError3 = undefined;
                  _context15.prev = 3;
                  _iterator3 = e.b[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                    _context15.next = 17;
                    break;
                  }

                  _ref3 = _step3.value;
                  _ref4 = _slicedToArray(_ref3, 2);
                  t = _ref4[0];
                  _r2 = _ref4[1];
                  _context15.next = 12;
                  return caches.delete(t);

                case 12:
                  _context15.next = 14;
                  return _r2.delete();

                case 14:
                  _iteratorNormalCompletion3 = true;
                  _context15.next = 5;
                  break;

                case 17:
                  _context15.next = 23;
                  break;

                case 19:
                  _context15.prev = 19;
                  _context15.t0 = _context15["catch"](3);
                  _didIteratorError3 = true;
                  _iteratorError3 = _context15.t0;

                case 23:
                  _context15.prev = 23;
                  _context15.prev = 24;

                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }

                case 26:
                  _context15.prev = 26;

                  if (!_didIteratorError3) {
                    _context15.next = 29;
                    break;
                  }

                  throw _iteratorError3;

                case 29:
                  return _context15.finish(26);

                case 30:
                  return _context15.finish(23);

                case 31:
                  e.b = new Map();
                case 32:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this, [[3, 19, 23, 31], [24,, 26, 30]]);
        }))();
      }
    }]);

    return _class;
  }(), e;
}({}, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core);

//# sourceMappingURL=workbox-cache-expiration.prod.js.map