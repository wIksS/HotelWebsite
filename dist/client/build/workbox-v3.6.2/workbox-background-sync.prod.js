"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.backgroundSync = function (e, t) {
  "use strict";
  try {
    self.workbox.v["workbox:background-sync:3.6.2"] = 1;
  } catch (e) {}var r = ["method", "referrer", "referrerPolicy", "mode", "credentials", "cache", "redirect", "integrity", "keepalive"];
  var s = function () {
    _createClass(s, null, [{
      key: "fromRequest",
      value: function fromRequest(e) {
        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var t, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref, _ref2, _r, _s, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _s2;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  t = { headers: {} };
                  _context.t0 = "GET" !== e.method;

                  if (!_context.t0) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return e.clone().blob();

                case 5:
                  t.body = _context.sent;

                case 6:
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 9;
                  for (_iterator = e.headers.entries()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _ref = _step.value;
                    _ref2 = _slicedToArray(_ref, 2);
                    _r = _ref2[0];
                    _s = _ref2[1];
                    t.headers[_r] = _s;
                  }_context.next = 17;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t1 = _context["catch"](9);
                  _didIteratorError = true;
                  _iteratorError = _context.t1;

                case 17:
                  _context.prev = 17;
                  _context.prev = 18;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 20:
                  _context.prev = 20;

                  if (!_didIteratorError) {
                    _context.next = 23;
                    break;
                  }

                  throw _iteratorError;

                case 23:
                  return _context.finish(20);

                case 24:
                  return _context.finish(17);

                case 25:
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context.prev = 28;
                  for (_iterator2 = r[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    _s2 = _step2.value;
                    void 0 !== e[_s2] && (t[_s2] = e[_s2]);
                  }_context.next = 36;
                  break;

                case 32:
                  _context.prev = 32;
                  _context.t2 = _context["catch"](28);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context.t2;

                case 36:
                  _context.prev = 36;
                  _context.prev = 37;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 39:
                  _context.prev = 39;

                  if (!_didIteratorError2) {
                    _context.next = 42;
                    break;
                  }

                  throw _iteratorError2;

                case 42:
                  return _context.finish(39);

                case 43:
                  return _context.finish(36);

                case 44:
                  return _context.abrupt("return", new s({ url: e.url, requestInit: t }));

                case 45:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[9, 13, 17, 25], [18,, 20, 24], [28, 32, 36, 44], [37,, 39, 43]]);
        }))();
      }
    }]);

    function s(_ref3) {
      var e = _ref3.url,
          t = _ref3.requestInit,
          _ref3$timestamp = _ref3.timestamp,
          r = _ref3$timestamp === undefined ? Date.now() : _ref3$timestamp;

      _classCallCheck(this, s);

      this.url = e, this.requestInit = t, this.e = r;
    }

    _createClass(s, [{
      key: "toObject",
      value: function toObject() {
        return { url: this.url, timestamp: this.timestamp, requestInit: this.requestInit };
      }
    }, {
      key: "toRequest",
      value: function toRequest() {
        return new Request(this.url, this.requestInit);
      }
    }, {
      key: "clone",
      value: function clone() {
        var e = Object.assign({}, this.requestInit);return e.headers = Object.assign({}, this.requestInit.headers), this.requestInit.body && (e.body = this.requestInit.body.slice()), new s({ url: this.url, timestamp: this.timestamp, requestInit: e });
      }
    }, {
      key: "timestamp",
      get: function get() {
        return this.e;
      }
    }]);

    return s;
  }();

  var i = "workbox-background-sync",
      n = "requests",
      u = "queueName",
      _c = "workbox-background-sync",
      o = 10080;
  var l = function () {
    function l(t) {
      _classCallCheck(this, l);

      this.t = t, this.r = new e.DBWrapper(i, 1, { onupgradeneeded: function onupgradeneeded(e) {
          return e.target.result.createObjectStore(n, { autoIncrement: !0 }).createIndex(u, u, { unique: !1 });
        } });
    }

    _createClass(l, [{
      key: "addEntry",
      value: function addEntry(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return t.r.add(n, { queueName: t.t.name, storableRequest: e.toObject() });

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))();
      }
    }, {
      key: "getAndRemoveOldestEntry",
      value: function getAndRemoveOldestEntry() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _ref4, _ref5, t;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return e.r.getAllMatching(n, { index: u, query: IDBKeyRange.only(e.t.name), count: 1, includeKeys: !0 });

                case 2:
                  _ref4 = _context3.sent;
                  _ref5 = _slicedToArray(_ref4, 1);
                  t = _ref5[0];

                  if (!t) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.next = 8;
                  return e.r.delete(n, t.primaryKey);

                case 8:
                  return _context3.abrupt("return", new s(t.value.storableRequest));

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }
    }]);

    return l;
  }();

  var a = new Set();
  var h = function () {
    function h(e) {
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$callbacks = _ref6.callbacks,
          r = _ref6$callbacks === undefined ? {} : _ref6$callbacks,
          _ref6$maxRetentionTim = _ref6.maxRetentionTime,
          s = _ref6$maxRetentionTim === undefined ? o : _ref6$maxRetentionTim;

      _classCallCheck(this, h);

      if (a.has(e)) throw new t.WorkboxError("duplicate-queue-name", { name: e });a.add(e), this.s = e, this.i = r, this.n = s, this.u = new l(this), this.c();
    }

    _createClass(h, [{
      key: "addRequest",
      value: function addRequest(e) {
        var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var r;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return s.fromRequest(e.clone());

                case 2:
                  r = _context4.sent;
                  _context4.next = 5;
                  return t.o("requestWillEnqueue", r);

                case 5:
                  _context4.next = 7;
                  return t.u.addEntry(r);

                case 7:
                  _context4.next = 9;
                  return t.l();

                case 9:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }
    }, {
      key: "replayRequests",
      value: function replayRequests() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var r, s, i, n, _t, _u, c;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  r = Date.now(), s = [], i = [];
                  n = void 0;

                case 2:
                  _context5.next = 4;
                  return e.u.getAndRemoveOldestEntry();

                case 4:
                  if (!(n = _context5.sent)) {
                    _context5.next = 23;
                    break;
                  }

                  _t = n.clone(), _u = 60 * e.n * 1e3;

                  if (!(r - n.timestamp > _u)) {
                    _context5.next = 8;
                    break;
                  }

                  return _context5.abrupt("continue", 21);

                case 8:
                  _context5.next = 10;
                  return e.o("requestWillReplay", n);

                case 10:
                  c = { request: n.toRequest() };
                  _context5.prev = 11;
                  _context5.next = 14;
                  return fetch(c.request.clone());

                case 14:
                  c.response = _context5.sent;
                  _context5.next = 20;
                  break;

                case 17:
                  _context5.prev = 17;
                  _context5.t0 = _context5["catch"](11);
                  c.error = _context5.t0, i.push(_t);

                case 20:
                  s.push(c);

                case 21:
                  _context5.next = 2;
                  break;

                case 23:
                  _context5.next = 25;
                  return e.o("queueDidReplay", s);

                case 25:
                  if (!i.length) {
                    _context5.next = 29;
                    break;
                  }

                  _context5.next = 28;
                  return Promise.all(i.map(function (t) {
                    return e.u.addEntry(t);
                  }));

                case 28:
                  throw new t.WorkboxError("queue-replay-failed", { name: e.s, count: i.length });

                case 29:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[11, 17]]);
        }))();
      }
    }, {
      key: "o",
      value: function o(e) {
        for (var _len = arguments.length, t = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }

        var r = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.t0 = "function" == typeof r.i[e];

                  if (!_context6.t0) {
                    _context6.next = 4;
                    break;
                  }

                  _context6.next = 4;
                  return r.i[e].apply(null, t);

                case 4:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))();
      }
    }, {
      key: "c",
      value: function c() {
        var _this = this;

        "sync" in registration ? self.addEventListener("sync", function (e) {
          e.tag === _c + ":" + _this.s && e.waitUntil(_this.replayRequests());
        }) : this.replayRequests();
      }
    }, {
      key: "l",
      value: function l() {
        var e = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!("sync" in registration)) {
                    _context7.next = 8;
                    break;
                  }

                  _context7.prev = 1;
                  _context7.next = 4;
                  return registration.sync.register(_c + ":" + e.s);

                case 4:
                  _context7.next = 8;
                  break;

                case 6:
                  _context7.prev = 6;
                  _context7.t0 = _context7["catch"](1);

                case 8:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[1, 6]]);
        }))();
      }
    }, {
      key: "name",
      get: function get() {
        return this.s;
      }
    }], [{
      key: "a",
      get: function get() {
        return a;
      }
    }]);

    return h;
  }();

  return Object.freeze({ Queue: h, Plugin: function () {
      function Plugin() {
        _classCallCheck(this, Plugin);

        for (var _len2 = arguments.length, e = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        this.t = new (Function.prototype.bind.apply(h, [null].concat(e)))(), this.fetchDidFail = this.fetchDidFail.bind(this);
      }

      _createClass(Plugin, [{
        key: "fetchDidFail",
        value: function fetchDidFail(_ref7) {
          var e = _ref7.request;
          var t = this;return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return t.t.addRequest(e);

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }))();
        }
      }]);

      return Plugin;
    }() });
}(workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-background-sync.prod.js.map