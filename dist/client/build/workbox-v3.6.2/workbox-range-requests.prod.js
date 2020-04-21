"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {}, undefined.workbox.rangeRequests = function (e, n) {
  "use strict";
  try {
    self.workbox.v["workbox:range-requests:3.6.2"] = 1;
  } catch (e) {}var t = (r = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t) {
    var _r, s, a, i, l, o, u;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _r = e.headers.get("range");

            if (_r) {
              _context.next = 4;
              break;
            }

            throw new n.WorkboxError("no-range-header");

          case 4:
            s = function (e) {
              var t = e.trim().toLowerCase();if (!t.startsWith("bytes=")) throw new n.WorkboxError("unit-must-be-bytes", { normalizedRangeHeader: t });if (t.includes(",")) throw new n.WorkboxError("single-range-only", { normalizedRangeHeader: t });var r = /(\d*)-(\d*)/.exec(t);if (null === r || !r[1] && !r[2]) throw new n.WorkboxError("invalid-range-values", { normalizedRangeHeader: t });return { start: "" === r[1] ? null : Number(r[1]), end: "" === r[2] ? null : Number(r[2]) };
            }(_r);

            _context.next = 7;
            return t.blob();

          case 7:
            a = _context.sent;

            i = function (e, t, r) {
              var s = e.size;if (r > s || t < 0) throw new n.WorkboxError("range-not-satisfiable", { size: s, end: r, start: t });var a = void 0,
                  i = void 0;return null === t ? (a = s - r, i = s) : null === r ? (a = t, i = s) : (a = t, i = r + 1), { start: a, end: i };
            }(a, s.start, s.end);

            l = a.slice(i.start, i.end);
            o = l.size;
            u = new Response(l, { status: 206, statusText: "Partial Content", headers: t.headers });
            return _context.abrupt("return", (u.headers.set("Content-Length", o), u.headers.set("Content-Range", "bytes " + i.start + "-" + (i.end - 1) + "/" + a.size), u));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", new Response("", { status: 416, statusText: "Range Not Satisfiable" }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 15]]);
  })), function (e, n) {
    return r.apply(this, arguments);
  });var r;return e.createPartialResponse = t, e.Plugin = function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "cachedResponseWillBeUsed",
      value: function cachedResponseWillBeUsed(_ref) {
        var e = _ref.request,
            n = _ref.cachedResponse;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(n && e.headers.has("range"))) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 3;
                  return t(e, n);

                case 3:
                  _context2.t0 = _context2.sent;
                  _context2.next = 7;
                  break;

                case 6:
                  _context2.t0 = n;

                case 7:
                  return _context2.abrupt("return", _context2.t0);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))();
      }
    }]);

    return _class;
  }(), e;
}({}, workbox.core._private);

//# sourceMappingURL=workbox-range-requests.prod.js.map