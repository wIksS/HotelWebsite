"use strict";

undefined.workbox = undefined.workbox || {}, undefined.workbox.streams = function (e) {
  "use strict";
  try {
    self.workbox.v["workbox:streams:3.6.2"] = 1;
  } catch (e) {}function n(e) {
    var n = e.map(function (e) {
      return Promise.resolve(e).then(function (e) {
        return (e = e).body && e.body.getReader ? e.body.getReader() : e.getReader ? e.getReader() : new Response(e).body.getReader();
      });
    });var t;var r = void 0,
        s = void 0;var o = 0;return { done: new Promise(function (e, n) {
        r = e, s = n;
      }), stream: new ReadableStream({
        pull: function pull(e) {
          var _this = this;

          return n[o].then(function (e) {
            return e.read();
          }).then(function (t) {
            if (t.done) return ++o >= n.length ? (e.close(), void r()) : _this.pull(e);e.enqueue(t.value);
          }).catch(function (e) {
            throw s(e), e;
          });
        },
        cancel: function cancel() {
          r();
        }
      }) };
  }function t() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var n = new Headers(e);return n.has("content-type") || n.set("content-type", "text/html"), n;
  }function r(e, r) {
    var _n = n(e),
        s = _n.done,
        o = _n.stream,
        u = t(r);

    return { done: s, response: new Response(o, { headers: u }) };
  }var s = void 0;function o() {
    if (void 0 === s) try {
      new ReadableStream({
        start: function start() {}
      }), s = !0;
    } catch (e) {
      s = !1;
    }return s;
  }return e.concatenate = n, e.concatenateToResponse = r, e.isSupported = o, e.strategy = function (e, n) {
    return s = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
      var s = _ref.event,
          u = _ref.url,
          i = _ref.params;

      var _r, _t, _o, c, a, l;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!o()) {
                _context2.next = 3;
                break;
              }

              _r = r(e.map(function (e) {
                return e({ event: s, url: u, params: i });
              }), n), _t = _r.done, _o = _r.response;
              return _context2.abrupt("return", (s.waitUntil(_t), _o));

            case 3:
              _context2.next = 5;
              return Promise.all(e.map(function (e) {
                return e({ event: s, url: u, params: i });
              }).map((a = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var n;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return e;

                      case 2:
                        n = _context.sent;
                        return _context.abrupt("return", n instanceof Response ? n.blob() : n);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              })), function (e) {
                return a.apply(this, arguments);
              })));

            case 5:
              c = _context2.sent;
              l = t(n);
              return _context2.abrupt("return", new Response(new Blob(c), { headers: l }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })), function (e) {
      return s.apply(this, arguments);
    };var s;
  }, e;
}({});

//# sourceMappingURL=workbox-streams.prod.js.map