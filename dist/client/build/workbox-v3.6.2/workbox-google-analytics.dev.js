'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

undefined.workbox = undefined.workbox || {};
undefined.workbox.googleAnalytics = function (exports, Plugin_mjs, cacheNames_mjs, Route_mjs, Router_mjs, NetworkFirst_mjs, NetworkOnly_mjs) {
  'use strict';

  try {
    self.workbox.v['workbox:google-analytics:3.6.2'] = 1;
  } catch (e) {} // eslint-disable-line

  /*
   Copyright 2017 Google Inc. All Rights Reserved.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
  */

  var QUEUE_NAME = 'workbox-google-analytics';
  var MAX_RETENTION_TIME = 60 * 48; // Two days in minutes
  var GOOGLE_ANALYTICS_HOST = 'www.google-analytics.com';
  var GTM_HOST = 'www.googletagmanager.com';
  var ANALYTICS_JS_PATH = '/analytics.js';
  var GTAG_JS_PATH = '/gtag/js';

  // This RegExp matches all known Measurement Protocol single-hit collect
  // endpoints. Most of the time the default path (/collect) is used, but
  // occasionally an experimental endpoint is used when testing new features,
  // (e.g. /r/collect or /j/collect)
  var COLLECT_PATHS_REGEX = /^\/(\w+\/)?collect/;

  /*
   Copyright 2017 Google Inc. All Rights Reserved.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
  */

  /**
   * Promisifies the FileReader API to await a text response from a Blob.
   *
   * @param {Blob} blob
   * @return {Promise<string>}
   *
   * @private
   */
  var getTextFromBlob = function () {
    var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(blob) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onloadend = function () {
                  return resolve(reader.result);
                };
                reader.onerror = function () {
                  return reject(reader.error);
                };
                reader.readAsText(blob);
              });

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function getTextFromBlob(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Creates the requestWillDequeue callback to be used with the background
   * sync queue plugin. The callback takes the failed request and adds the
   * `qt` param based on the current time, as well as applies any other
   * user-defined hit modifications.
   *
   * @param {Object} config See workbox.googleAnalytics.initialize.
   * @return {Function} The requestWillDequeu callback function.
   *
   * @private
   */
  var createRequestWillReplayCallback = function createRequestWillReplayCallback(config) {
    return function () {
      var _ref2 = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(storableRequest) {
        var url, requestInit, timestamp, params, payload, originalHitTime, queueTime, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, param, value;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = storableRequest.url, requestInit = storableRequest.requestInit, timestamp = storableRequest.timestamp;

                url = new URL(url);

                // Measurement protocol requests can set their payload parameters in either
                // the URL query string (for GET requests) or the POST body.
                params = void 0;

                if (!requestInit.body) {
                  _context2.next = 15;
                  break;
                }

                if (!(requestInit.body instanceof Blob)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 7;
                return getTextFromBlob(requestInit.body);

              case 7:
                _context2.t0 = _context2.sent;
                _context2.next = 11;
                break;

              case 10:
                _context2.t0 = requestInit.body;

              case 11:
                payload = _context2.t0;


                params = new URLSearchParams(payload);
                _context2.next = 16;
                break;

              case 15:
                params = url.searchParams;

              case 16:

                // Calculate the qt param, accounting for the fact that an existing
                // qt param may be present and should be updated rather than replaced.
                originalHitTime = timestamp - (Number(params.get('qt')) || 0);
                queueTime = Date.now() - originalHitTime;

                // Set the qt param prior to applying the hitFilter or parameterOverrides.

                params.set('qt', queueTime);

                if (!config.parameterOverrides) {
                  _context2.next = 39;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 23;

                for (_iterator = Object.keys(config.parameterOverrides)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  param = _step.value;
                  value = config.parameterOverrides[param];

                  params.set(param, value);
                }
                _context2.next = 31;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t1 = _context2['catch'](23);
                _didIteratorError = true;
                _iteratorError = _context2.t1;

              case 31:
                _context2.prev = 31;
                _context2.prev = 32;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 34:
                _context2.prev = 34;

                if (!_didIteratorError) {
                  _context2.next = 37;
                  break;
                }

                throw _iteratorError;

              case 37:
                return _context2.finish(34);

              case 38:
                return _context2.finish(31);

              case 39:

                if (typeof config.hitFilter === 'function') {
                  config.hitFilter.call(null, params);
                }

                requestInit.body = params.toString();
                requestInit.method = 'POST';
                requestInit.mode = 'cors';
                requestInit.credentials = 'omit';
                requestInit.headers = { 'Content-Type': 'text/plain' };

                // Ignore URL search params as they're now in the post body.
                storableRequest.url = '' + url.origin + url.pathname;

              case 46:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[23, 27, 31, 39], [32,, 34, 38]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  };

  /**
   * Creates GET and POST routes to catch failed Measurement Protocol hits.
   *
   * @param {Plugin} queuePlugin
   * @return {Array<Route>} The created routes.
   *
   * @private
   */
  var createCollectRoutes = function createCollectRoutes(queuePlugin) {
    var match = function match(_ref3) {
      var url = _ref3.url;
      return url.hostname === GOOGLE_ANALYTICS_HOST && COLLECT_PATHS_REGEX.test(url.pathname);
    };

    var handler = new NetworkOnly_mjs.NetworkOnly({
      plugins: [queuePlugin]
    });

    return [new Route_mjs.Route(match, handler, 'GET'), new Route_mjs.Route(match, handler, 'POST')];
  };

  /**
   * Creates a route with a network first strategy for the analytics.js script.
   *
   * @param {string} cacheName
   * @return {Route} The created route.
   *
   * @private
   */
  var createAnalyticsJsRoute = function createAnalyticsJsRoute(cacheName) {
    var match = function match(_ref4) {
      var url = _ref4.url;
      return url.hostname === GOOGLE_ANALYTICS_HOST && url.pathname === ANALYTICS_JS_PATH;
    };
    var handler = new NetworkFirst_mjs.NetworkFirst({ cacheName: cacheName });

    return new Route_mjs.Route(match, handler, 'GET');
  };

  /**
   * Creates a route with a network first strategy for the gtag.js script.
   *
   * @param {string} cacheName
   * @return {Route} The created route.
   *
   * @private
   */
  var createGtagJsRoute = function createGtagJsRoute(cacheName) {
    var match = function match(_ref5) {
      var url = _ref5.url;
      return url.hostname === GTM_HOST && url.pathname === GTAG_JS_PATH;
    };
    var handler = new NetworkFirst_mjs.NetworkFirst({ cacheName: cacheName });

    return new Route_mjs.Route(match, handler, 'GET');
  };

  /**
   * @param {Object=} [options]
   * @param {Object} [options.cacheName] The cache name to store and retrieve
   *     analytics.js. Defaults to the cache names provided by `workbox-core`.
   * @param {Object} [options.parameterOverrides]
   *     [Measurement Protocol parameters](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters),
   *     expressed as key/value pairs, to be added to replayed Google Analytics
   *     requests. This can be used to, e.g., set a custom dimension indicating
   *     that the request was replayed.
   * @param {Function} [options.hitFilter] A function that allows you to modify
   *     the hit parameters prior to replaying
   *     the hit. The function is invoked with the original hit's URLSearchParams
   *     object as its only argument.
   *
   * @memberof workbox.googleAnalytics
   */
  var initialize = function initialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var cacheName = cacheNames_mjs.cacheNames.getGoogleAnalyticsName(options.cacheName);

    var queuePlugin = new Plugin_mjs.Plugin(QUEUE_NAME, {
      maxRetentionTime: MAX_RETENTION_TIME,
      callbacks: {
        requestWillReplay: createRequestWillReplayCallback(options)
      }
    });

    var routes = [createAnalyticsJsRoute(cacheName), createGtagJsRoute(cacheName)].concat(_toConsumableArray(createCollectRoutes(queuePlugin)));

    var router = new Router_mjs.Router();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = routes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var route = _step2.value;

        router.registerRoute(route);
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

    self.addEventListener('fetch', function (evt) {
      var responsePromise = router.handleRequest(evt);
      if (responsePromise) {
        evt.respondWith(responsePromise);
      }
    });
  };

  /*
   Copyright 2017 Google Inc. All Rights Reserved.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
  */

  exports.initialize = initialize;

  return exports;
}({}, workbox.backgroundSync, workbox.core._private, workbox.routing, workbox.routing, workbox.strategies, workbox.strategies);

//# sourceMappingURL=workbox-google-analytics.dev.js.map