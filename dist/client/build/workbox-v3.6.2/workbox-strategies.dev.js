'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {};
undefined.workbox.strategies = function (logger_mjs, assert_mjs, cacheNames_mjs, cacheWrapper_mjs, fetchWrapper_mjs, getFriendlyURL_mjs) {
  'use strict';

  try {
    self.workbox.v['workbox:strategies:3.6.2'] = 1;
  } catch (e) {} // eslint-disable-line

  /*
   Copyright 2018 Google Inc. All Rights Reserved.
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

  var getFriendlyURL = function getFriendlyURL(url) {
    var urlObj = new URL(url, location);
    if (urlObj.origin === location.origin) {
      return urlObj.pathname;
    }
    return urlObj.href;
  };

  var messages = {
    strategyStart: function strategyStart(strategyName, request) {
      return 'Using ' + strategyName + ' to ' + ('respond to \'' + getFriendlyURL(request.url) + '\'');
    },
    printFinalResponse: function printFinalResponse(response) {
      if (response) {
        logger_mjs.logger.groupCollapsed('View the final response here.');
        logger_mjs.logger.unprefixed.log(response);
        logger_mjs.logger.groupEnd();
      }
    }
  };

  /*
   Copyright 2018 Google Inc. All Rights Reserved.
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
   * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
   * request strategy.
   *
   * A cache first strategy is useful for assets that have been revisioned,
   * such as URLs like `/styles/example.a8f5f1.css`, since they
   * can be cached for long periods of time.
   *
   * @memberof workbox.strategies
   */

  var CacheFirst = function () {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link workbox.core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    function CacheFirst() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CacheFirst);

      this._cacheName = cacheNames_mjs.cacheNames.getRuntimeName(options.cacheName);
      this._plugins = options.plugins || [];
      this._fetchOptions = options.fetchOptions || null;
      this._matchOptions = options.matchOptions || null;
    }

    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link workbox.routing.Router}.
     *
     * @param {Object} options
     * @param {FetchEvent} options.event The fetch event to run this strategy
     * against.
     * @return {Promise<Response>}
     */


    _createClass(CacheFirst, [{
      key: 'handle',
      value: function handle(_ref2) {
        var event = _ref2.event;

        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  assert_mjs.assert.isInstance(event, FetchEvent, {
                    moduleName: 'workbox-strategies',
                    className: 'CacheFirst',
                    funcName: 'handle',
                    paramName: 'event'
                  });
                  return _context.abrupt('return', _this.makeRequest({
                    event: event,
                    request: event.request
                  }));

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();
      }

      /**
       * This method can be used to perform a make a standalone request outside the
       * context of the [Workbox Router]{@link workbox.routing.Router}.
       *
       * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
       * for more usage information.
       *
       * @param {Object} options
       * @param {Request|string} options.request Either a
       *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
       *     object, or a string URL, corresponding to the request to be made.
       * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
             be called automatically to extend the service worker's lifetime.
       * @return {Promise<Response>}
       */

    }, {
      key: 'makeRequest',
      value: function makeRequest(_ref3) {
        var event = _ref3.event,
            request = _ref3.request;

        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var logs, response, error, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, log;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  logs = [];


                  if (typeof request === 'string') {
                    request = new Request(request);
                  }

                  assert_mjs.assert.isInstance(request, Request, {
                    moduleName: 'workbox-strategies',
                    className: 'CacheFirst',
                    funcName: 'makeRequest',
                    paramName: 'request'
                  });
                  _context2.next = 5;
                  return cacheWrapper_mjs.cacheWrapper.match({
                    cacheName: _this2._cacheName,
                    request: request,
                    event: event,
                    matchOptions: _this2._matchOptions,
                    plugins: _this2._plugins
                  });

                case 5:
                  response = _context2.sent;
                  error = void 0;

                  if (response) {
                    _context2.next = 21;
                    break;
                  }

                  logs.push('No response found in the \'' + _this2._cacheName + '\' cache. ' + 'Will respond with a network request.');
                  _context2.prev = 9;
                  _context2.next = 12;
                  return _this2._getFromNetwork(request, event);

                case 12:
                  response = _context2.sent;
                  _context2.next = 18;
                  break;

                case 15:
                  _context2.prev = 15;
                  _context2.t0 = _context2['catch'](9);

                  error = _context2.t0;

                case 18:
                  if (response) {
                    logs.push('Got response from network.');
                  } else {
                    logs.push('Unable to get a response from the network.');
                  }
                  _context2.next = 22;
                  break;

                case 21:
                  logs.push('Found a cached response in the \'' + _this2._cacheName + '\' cache.');

                case 22:
                  logger_mjs.logger.groupCollapsed(messages.strategyStart('CacheFirst', request));
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context2.prev = 26;
                  for (_iterator = logs[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    log = _step.value;

                    logger_mjs.logger.log(log);
                  }
                  _context2.next = 34;
                  break;

                case 30:
                  _context2.prev = 30;
                  _context2.t1 = _context2['catch'](26);
                  _didIteratorError = true;
                  _iteratorError = _context2.t1;

                case 34:
                  _context2.prev = 34;
                  _context2.prev = 35;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 37:
                  _context2.prev = 37;

                  if (!_didIteratorError) {
                    _context2.next = 40;
                    break;
                  }

                  throw _iteratorError;

                case 40:
                  return _context2.finish(37);

                case 41:
                  return _context2.finish(34);

                case 42:
                  messages.printFinalResponse(response);
                  logger_mjs.logger.groupEnd();

                  if (!error) {
                    _context2.next = 46;
                    break;
                  }

                  throw error;

                case 46:
                  return _context2.abrupt('return', response);

                case 47:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[9, 15], [26, 30, 34, 42], [35,, 37, 41]]);
        }))();
      }

      /**
       * Handles the network and cache part of CacheFirst.
       *
       * @param {Request} request
       * @param {FetchEvent} [event]
       * @return {Promise<Response>}
       *
       * @private
       */

    }, {
      key: '_getFromNetwork',
      value: function _getFromNetwork(request, event) {
        var _this3 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var response, responseClone, cachePutPromise;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return fetchWrapper_mjs.fetchWrapper.fetch({
                    request: request,
                    event: event,
                    fetchOptions: _this3._fetchOptions,
                    plugins: _this3._plugins
                  });

                case 2:
                  response = _context3.sent;


                  // Keep the service worker while we put the request to the cache
                  responseClone = response.clone();
                  cachePutPromise = cacheWrapper_mjs.cacheWrapper.put({
                    cacheName: _this3._cacheName,
                    request: request,
                    response: responseClone,
                    event: event,
                    plugins: _this3._plugins
                  });


                  if (event) {
                    try {
                      event.waitUntil(cachePutPromise);
                    } catch (error) {
                      {
                        logger_mjs.logger.warn('Unable to ensure service worker stays alive when ' + ('updating cache for \'' + getFriendlyURL_mjs.getFriendlyURL(event.request.url) + '\'.'));
                      }
                    }
                  }

                  return _context3.abrupt('return', response);

                case 7:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }
    }]);

    return CacheFirst;
  }();

  /*
   Copyright 2018 Google Inc. All Rights Reserved.
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
   * An implementation of a
   * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
   * request strategy.
   *
   * This class is useful if you want to take advantage of any [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
   *
   * @memberof workbox.strategies
   */


  var CacheOnly = function () {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link workbox.core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    function CacheOnly() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CacheOnly);

      this._cacheName = cacheNames_mjs.cacheNames.getRuntimeName(options.cacheName);
      this._plugins = options.plugins || [];
      this._matchOptions = options.matchOptions || null;
    }

    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link workbox.routing.Router}.
     *
     * @param {Object} options
     * @param {FetchEvent} options.event The fetch event to run this strategy
     * against.
     * @return {Promise<Response>}
     */


    _createClass(CacheOnly, [{
      key: 'handle',
      value: function handle(_ref4) {
        var event = _ref4.event;

        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  assert_mjs.assert.isInstance(event, FetchEvent, {
                    moduleName: 'workbox-strategies',
                    className: 'CacheOnly',
                    funcName: 'handle',
                    paramName: 'event'
                  });
                  return _context4.abrupt('return', _this.makeRequest({
                    event: event,
                    request: event.request
                  }));

                case 2:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }

      /**
       * This method can be used to perform a make a standalone request outside the
       * context of the [Workbox Router]{@link workbox.routing.Router}.
       *
       * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
       * for more usage information.
       *
       * @param {Object} options
       * @param {Request|string} options.request Either a
       *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
       *     object, or a string URL, corresponding to the request to be made.
       * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
       *     be called automatically to extend the service worker's lifetime.
       * @return {Promise<Response>}
       */

    }, {
      key: 'makeRequest',
      value: function makeRequest(_ref5) {
        var event = _ref5.event,
            request = _ref5.request;

        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var response;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (typeof request === 'string') {
                    request = new Request(request);
                  }

                  assert_mjs.assert.isInstance(request, Request, {
                    moduleName: 'workbox-strategies',
                    className: 'CacheOnly',
                    funcName: 'makeRequest',
                    paramName: 'request'
                  });
                  _context5.next = 4;
                  return cacheWrapper_mjs.cacheWrapper.match({
                    cacheName: _this2._cacheName,
                    request: request,
                    event: event,
                    matchOptions: _this2._matchOptions,
                    plugins: _this2._plugins
                  });

                case 4:
                  response = _context5.sent;

                  logger_mjs.logger.groupCollapsed(messages.strategyStart('CacheOnly', request));
                  if (response) {
                    logger_mjs.logger.log('Found a cached response in the \'' + _this2._cacheName + '\'' + ' cache.');
                    messages.printFinalResponse(response);
                  } else {
                    logger_mjs.logger.log('No response found in the \'' + _this2._cacheName + '\' cache.');
                  }
                  logger_mjs.logger.groupEnd();
                  return _context5.abrupt('return', response);

                case 9:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }))();
      }
    }]);

    return CacheOnly;
  }();

  /*
   Copyright 2016 Google Inc. All Rights Reserved.
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

  var cacheOkAndOpaquePlugin = {
    /**
     * Return return a response (i.e. allow caching) if the
     * response is ok (i.e. 200) or is opaque.
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: function cacheWillUpdate(_ref6) {
      var response = _ref6.response;

      if (response.ok || response.status === 0) {
        return response;
      }
      return null;
    }
  };

  /*
   Copyright 2018 Google Inc. All Rights Reserved.
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
   * An implementation of a
   * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
   * request strategy.
   *
   * By default, this strategy will cache responses with a 200 status code as
   * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
   * Opaque responses are are cross-origin requests where the response doesn't
   * support [CORS]{@link https://enable-cors.org/}.
   *
   * @memberof workbox.strategies
   */

  var NetworkFirst = function () {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link workbox.core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} options.networkTimeoutSeconds If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    function NetworkFirst() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, NetworkFirst);

      this._cacheName = cacheNames_mjs.cacheNames.getRuntimeName(options.cacheName);

      if (options.plugins) {
        var isUsingCacheWillUpdate = options.plugins.some(function (plugin) {
          return !!plugin.cacheWillUpdate;
        });
        this._plugins = isUsingCacheWillUpdate ? options.plugins : [cacheOkAndOpaquePlugin].concat(_toConsumableArray(options.plugins));
      } else {
        // No plugins passed in, use the default plugin.
        this._plugins = [cacheOkAndOpaquePlugin];
      }

      this._networkTimeoutSeconds = options.networkTimeoutSeconds;
      {
        if (this._networkTimeoutSeconds) {
          assert_mjs.assert.isType(this._networkTimeoutSeconds, 'number', {
            moduleName: 'workbox-strategies',
            className: 'NetworkFirst',
            funcName: 'constructor',
            paramName: 'networkTimeoutSeconds'
          });
        }
      }

      this._fetchOptions = options.fetchOptions || null;
      this._matchOptions = options.matchOptions || null;
    }

    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link workbox.routing.Router}.
     *
     * @param {Object} options
     * @param {FetchEvent} options.event The fetch event to run this strategy
     * against.
     * @return {Promise<Response>}
     */


    _createClass(NetworkFirst, [{
      key: 'handle',
      value: function handle(_ref7) {
        var event = _ref7.event;

        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  assert_mjs.assert.isInstance(event, FetchEvent, {
                    moduleName: 'workbox-strategies',
                    className: 'NetworkFirst',
                    funcName: 'handle',
                    paramName: 'event'
                  });
                  return _context6.abrupt('return', _this.makeRequest({
                    event: event,
                    request: event.request
                  }));

                case 2:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))();
      }

      /**
       * This method can be used to perform a make a standalone request outside the
       * context of the [Workbox Router]{@link workbox.routing.Router}.
       *
       * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
       * for more usage information.
       *
       * @param {Object} options
       * @param {Request|string} options.request Either a
       *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
       *     object, or a string URL, corresponding to the request to be made.
       * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
       *     be called automatically to extend the service worker's lifetime.
       * @return {Promise<Response>}
       */

    }, {
      key: 'makeRequest',
      value: function makeRequest(_ref8) {
        var event = _ref8.event,
            request = _ref8.request;

        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var logs, promises, timeoutId, _this2$_getTimeoutPro, id, promise, networkPromise, response, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, log;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  logs = [];


                  if (typeof request === 'string') {
                    request = new Request(request);
                  }

                  assert_mjs.assert.isInstance(request, Request, {
                    moduleName: 'workbox-strategies',
                    className: 'NetworkFirst',
                    funcName: 'handle',
                    paramName: 'makeRequest'
                  });
                  promises = [];
                  timeoutId = void 0;


                  if (_this2._networkTimeoutSeconds) {
                    _this2$_getTimeoutPro = _this2._getTimeoutPromise({ request: request, event: event, logs: logs }), id = _this2$_getTimeoutPro.id, promise = _this2$_getTimeoutPro.promise;

                    timeoutId = id;
                    promises.push(promise);
                  }

                  networkPromise = _this2._getNetworkPromise({ timeoutId: timeoutId, request: request, event: event, logs: logs });

                  promises.push(networkPromise);

                  // Promise.race() will resolve as soon as the first promise resolves.
                  _context7.next = 10;
                  return Promise.race(promises);

                case 10:
                  response = _context7.sent;

                  if (response) {
                    _context7.next = 15;
                    break;
                  }

                  _context7.next = 14;
                  return networkPromise;

                case 14:
                  response = _context7.sent;

                case 15:
                  logger_mjs.logger.groupCollapsed(messages.strategyStart('NetworkFirst', request));
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context7.prev = 19;
                  for (_iterator2 = logs[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    log = _step2.value;

                    logger_mjs.logger.log(log);
                  }
                  _context7.next = 27;
                  break;

                case 23:
                  _context7.prev = 23;
                  _context7.t0 = _context7['catch'](19);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context7.t0;

                case 27:
                  _context7.prev = 27;
                  _context7.prev = 28;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 30:
                  _context7.prev = 30;

                  if (!_didIteratorError2) {
                    _context7.next = 33;
                    break;
                  }

                  throw _iteratorError2;

                case 33:
                  return _context7.finish(30);

                case 34:
                  return _context7.finish(27);

                case 35:
                  messages.printFinalResponse(response);
                  logger_mjs.logger.groupEnd();
                  return _context7.abrupt('return', response);

                case 38:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[19, 23, 27, 35], [28,, 30, 34]]);
        }))();
      }

      /**
       * @param {Object} options
       * @param {Request} options.request
       * @param {Array} options.logs A reference to the logs array
       * @param {Event} [options.event]
       * @return {Promise<Response>}
       *
       * @private
       */

    }, {
      key: '_getTimeoutPromise',
      value: function _getTimeoutPromise(_ref9) {
        var _this5 = this;

        var request = _ref9.request,
            logs = _ref9.logs,
            event = _ref9.event;

        var _this3 = this;

        var timeoutId = void 0;
        var timeoutPromise = new Promise(function (resolve) {
          var onNetworkTimeout = function () {
            var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      logs.push('Timing out the network response at ' + (_this3._networkTimeoutSeconds + ' seconds.'));
                      _context8.t0 = resolve;
                      _context8.next = 4;
                      return _this3._respondFromCache({ request: request, event: event });

                    case 4:
                      _context8.t1 = _context8.sent;
                      (0, _context8.t0)(_context8.t1);

                    case 6:
                    case 'end':
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            return function onNetworkTimeout() {
              return _ref.apply(this, arguments);
            };
          }();

          timeoutId = setTimeout(onNetworkTimeout, _this5._networkTimeoutSeconds * 1000);
        });

        return {
          promise: timeoutPromise,
          id: timeoutId
        };
      }

      /**
       * @param {Object} options
       * @param {number|undefined} options.timeoutId
       * @param {Request} options.request
       * @param {Array} options.logs A reference to the logs Array.
       * @param {Event} [options.event]
       * @return {Promise<Response>}
       *
       * @private
       */

    }, {
      key: '_getNetworkPromise',
      value: function _getNetworkPromise(_ref10) {
        var timeoutId = _ref10.timeoutId,
            request = _ref10.request,
            logs = _ref10.logs,
            event = _ref10.event;

        var _this4 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          var error, response, responseClone, cachePut;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  error = void 0;
                  response = void 0;
                  _context9.prev = 2;
                  _context9.next = 5;
                  return fetchWrapper_mjs.fetchWrapper.fetch({
                    request: request,
                    event: event,
                    fetchOptions: _this4._fetchOptions,
                    plugins: _this4._plugins
                  });

                case 5:
                  response = _context9.sent;
                  _context9.next = 11;
                  break;

                case 8:
                  _context9.prev = 8;
                  _context9.t0 = _context9['catch'](2);

                  error = _context9.t0;

                case 11:

                  if (timeoutId) {
                    clearTimeout(timeoutId);
                  }

                  if (response) {
                    logs.push('Got response from network.');
                  } else {
                    logs.push('Unable to get a response from the network. Will respond ' + 'with a cached response.');
                  }

                  if (!(error || !response)) {
                    _context9.next = 20;
                    break;
                  }

                  _context9.next = 16;
                  return _this4._respondFromCache({ request: request, event: event });

                case 16:
                  response = _context9.sent;

                  if (response) {
                    logs.push('Found a cached response in the \'' + _this4._cacheName + '\'' + ' cache.');
                  } else {
                    logs.push('No response found in the \'' + _this4._cacheName + '\' cache.');
                  }
                  _context9.next = 23;
                  break;

                case 20:
                  // Keep the service worker alive while we put the request in the cache
                  responseClone = response.clone();
                  cachePut = cacheWrapper_mjs.cacheWrapper.put({
                    cacheName: _this4._cacheName,
                    request: request,
                    response: responseClone,
                    event: event,
                    plugins: _this4._plugins
                  });


                  if (event) {
                    try {
                      // The event has been responded to so we can keep the SW alive to
                      // respond to the request
                      event.waitUntil(cachePut);
                    } catch (err) {
                      {
                        logger_mjs.logger.warn('Unable to ensure service worker stays alive when ' + ('updating cache for \'' + getFriendlyURL_mjs.getFriendlyURL(event.request.url) + '\'.'));
                      }
                    }
                  }

                case 23:
                  return _context9.abrupt('return', response);

                case 24:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, this, [[2, 8]]);
        }))();
      }

      /**
       * Used if the network timeouts or fails to make the request.
       *
       * @param {Object} options
       * @param {Request} request The request to match in the cache
       * @param {Event} [options.event]
       * @return {Promise<Object>}
       *
       * @private
       */

    }, {
      key: '_respondFromCache',
      value: function _respondFromCache(_ref11) {
        var event = _ref11.event,
            request = _ref11.request;

        return cacheWrapper_mjs.cacheWrapper.match({
          cacheName: this._cacheName,
          request: request,
          event: event,
          matchOptions: this._matchOptions,
          plugins: this._plugins
        });
      }
    }]);

    return NetworkFirst;
  }();

  /*
   Copyright 2018 Google Inc. All Rights Reserved.
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
   * An implementation of a
   * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
   * request strategy.
   *
   * This class is useful if you want to take advantage of any [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
   *
   * @memberof workbox.strategies
   */


  var NetworkOnly = function () {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link workbox.core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     */
    function NetworkOnly() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, NetworkOnly);

      this._cacheName = cacheNames_mjs.cacheNames.getRuntimeName(options.cacheName);
      this._plugins = options.plugins || [];
      this._fetchOptions = options.fetchOptions || null;
    }

    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link workbox.routing.Router}.
     *
     * @param {Object} options
     * @param {FetchEvent} options.event The fetch event to run this strategy
     * against.
     * @return {Promise<Response>}
     */


    _createClass(NetworkOnly, [{
      key: 'handle',
      value: function handle(_ref12) {
        var event = _ref12.event;

        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  assert_mjs.assert.isInstance(event, FetchEvent, {
                    moduleName: 'workbox-strategies',
                    className: 'NetworkOnly',
                    funcName: 'handle',
                    paramName: 'event'
                  });
                  return _context10.abrupt('return', _this.makeRequest({
                    event: event,
                    request: event.request
                  }));

                case 2:
                case 'end':
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }))();
      }

      /**
       * This method can be used to perform a make a standalone request outside the
       * context of the [Workbox Router]{@link workbox.routing.Router}.
       *
       * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
       * for more usage information.
       *
       * @param {Object} options
       * @param {Request|string} options.request Either a
       *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
       *     object, or a string URL, corresponding to the request to be made.
       * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
       *     be called automatically to extend the service worker's lifetime.
       * @return {Promise<Response>}
       */

    }, {
      key: 'makeRequest',
      value: function makeRequest(_ref13) {
        var event = _ref13.event,
            request = _ref13.request;

        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          var error, response;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  if (typeof request === 'string') {
                    request = new Request(request);
                  }

                  assert_mjs.assert.isInstance(request, Request, {
                    moduleName: 'workbox-strategies',
                    className: 'NetworkOnly',
                    funcName: 'handle',
                    paramName: 'request'
                  });
                  error = void 0;
                  response = void 0;
                  _context11.prev = 4;
                  _context11.next = 7;
                  return fetchWrapper_mjs.fetchWrapper.fetch({
                    request: request,
                    event: event,
                    fetchOptions: _this2._fetchOptions,
                    plugins: _this2._plugins
                  });

                case 7:
                  response = _context11.sent;
                  _context11.next = 13;
                  break;

                case 10:
                  _context11.prev = 10;
                  _context11.t0 = _context11['catch'](4);

                  error = _context11.t0;

                case 13:
                  logger_mjs.logger.groupCollapsed(messages.strategyStart('NetworkOnly', request));
                  if (response) {
                    logger_mjs.logger.log('Got response from network.');
                  } else {
                    logger_mjs.logger.log('Unable to get a response from the network.');
                  }
                  messages.printFinalResponse(response);
                  logger_mjs.logger.groupEnd();

                  if (!error) {
                    _context11.next = 19;
                    break;
                  }

                  throw error;

                case 19:
                  return _context11.abrupt('return', response);

                case 20:
                case 'end':
                  return _context11.stop();
              }
            }
          }, _callee11, this, [[4, 10]]);
        }))();
      }
    }]);

    return NetworkOnly;
  }();

  /*
   Copyright 2018 Google Inc. All Rights Reserved.
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
   * An implementation of a
   * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
   * request strategy.
   *
   * Resources are requested from both the cache and the network in parallel.
   * The strategy will respond with the cached version if available, otherwise
   * wait for the network response. The cache is updated with the network response
   * with each successful request.
   *
   * By default, this strategy will cache responses with a 200 status code as
   * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
   * Opaque responses are are cross-origin requests where the response doesn't
   * support [CORS]{@link https://enable-cors.org/}.
   *
   * @memberof workbox.strategies
   */


  var StaleWhileRevalidate = function () {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link workbox.core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    function StaleWhileRevalidate() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, StaleWhileRevalidate);

      this._cacheName = cacheNames_mjs.cacheNames.getRuntimeName(options.cacheName);
      this._plugins = options.plugins || [];

      if (options.plugins) {
        var isUsingCacheWillUpdate = options.plugins.some(function (plugin) {
          return !!plugin.cacheWillUpdate;
        });
        this._plugins = isUsingCacheWillUpdate ? options.plugins : [cacheOkAndOpaquePlugin].concat(_toConsumableArray(options.plugins));
      } else {
        // No plugins passed in, use the default plugin.
        this._plugins = [cacheOkAndOpaquePlugin];
      }

      this._fetchOptions = options.fetchOptions || null;
      this._matchOptions = options.matchOptions || null;
    }

    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link workbox.routing.Router}.
     *
     * @param {Object} options
     * @param {FetchEvent} options.event The fetch event to run this strategy
     * against.
     * @return {Promise<Response>}
     */


    _createClass(StaleWhileRevalidate, [{
      key: 'handle',
      value: function handle(_ref14) {
        var event = _ref14.event;

        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  assert_mjs.assert.isInstance(event, FetchEvent, {
                    moduleName: 'workbox-strategies',
                    className: 'StaleWhileRevalidate',
                    funcName: 'handle',
                    paramName: 'event'
                  });
                  return _context12.abrupt('return', _this.makeRequest({
                    event: event,
                    request: event.request
                  }));

                case 2:
                case 'end':
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }))();
      }

      /**
       * This method can be used to perform a make a standalone request outside the
       * context of the [Workbox Router]{@link workbox.routing.Router}.
       *
       * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
       * for more usage information.
       *
       * @param {Object} options
       * @param {Request|string} options.request Either a
       *     [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request}
       *     object, or a string URL, corresponding to the request to be made.
       * @param {FetchEvent} [options.event] If provided, `event.waitUntil()` will
       *     be called automatically to extend the service worker's lifetime.
       * @return {Promise<Response>}
       */

    }, {
      key: 'makeRequest',
      value: function makeRequest(_ref15) {
        var event = _ref15.event,
            request = _ref15.request;

        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
          var logs, fetchAndCachePromise, response, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, log;

          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  logs = [];


                  if (typeof request === 'string') {
                    request = new Request(request);
                  }

                  assert_mjs.assert.isInstance(request, Request, {
                    moduleName: 'workbox-strategies',
                    className: 'StaleWhileRevalidate',
                    funcName: 'handle',
                    paramName: 'request'
                  });
                  fetchAndCachePromise = _this2._getFromNetwork({ request: request, event: event });
                  _context13.next = 6;
                  return cacheWrapper_mjs.cacheWrapper.match({
                    cacheName: _this2._cacheName,
                    request: request,
                    event: event,
                    matchOptions: _this2._matchOptions,
                    plugins: _this2._plugins
                  });

                case 6:
                  response = _context13.sent;

                  if (!response) {
                    _context13.next = 12;
                    break;
                  }

                  logs.push('Found a cached response in the \'' + _this2._cacheName + '\'' + ' cache. Will update with the network response in the background.');


                  if (event) {
                    try {
                      event.waitUntil(fetchAndCachePromise);
                    } catch (error) {
                      {
                        logger_mjs.logger.warn('Unable to ensure service worker stays alive when ' + ('updating cache for \'' + getFriendlyURL_mjs.getFriendlyURL(event.request.url) + '\'.'));
                      }
                    }
                  }
                  _context13.next = 16;
                  break;

                case 12:
                  logs.push('No response found in the \'' + _this2._cacheName + '\' cache. ' + 'Will wait for the network response.');
                  _context13.next = 15;
                  return fetchAndCachePromise;

                case 15:
                  response = _context13.sent;

                case 16:
                  logger_mjs.logger.groupCollapsed(messages.strategyStart('StaleWhileRevalidate', request));
                  _iteratorNormalCompletion3 = true;
                  _didIteratorError3 = false;
                  _iteratorError3 = undefined;
                  _context13.prev = 20;
                  for (_iterator3 = logs[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    log = _step3.value;

                    logger_mjs.logger.log(log);
                  }
                  _context13.next = 28;
                  break;

                case 24:
                  _context13.prev = 24;
                  _context13.t0 = _context13['catch'](20);
                  _didIteratorError3 = true;
                  _iteratorError3 = _context13.t0;

                case 28:
                  _context13.prev = 28;
                  _context13.prev = 29;

                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }

                case 31:
                  _context13.prev = 31;

                  if (!_didIteratorError3) {
                    _context13.next = 34;
                    break;
                  }

                  throw _iteratorError3;

                case 34:
                  return _context13.finish(31);

                case 35:
                  return _context13.finish(28);

                case 36:
                  messages.printFinalResponse(response);
                  logger_mjs.logger.groupEnd();
                  return _context13.abrupt('return', response);

                case 39:
                case 'end':
                  return _context13.stop();
              }
            }
          }, _callee13, this, [[20, 24, 28, 36], [29,, 31, 35]]);
        }))();
      }

      /**
       * @param {Object} options
       * @param {Request} options.request
       * @param {Event} [options.event]
       * @return {Promise<Response>}
       *
       * @private
       */

    }, {
      key: '_getFromNetwork',
      value: function _getFromNetwork(_ref16) {
        var request = _ref16.request,
            event = _ref16.event;

        var _this3 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
          var response, cachePutPromise;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return fetchWrapper_mjs.fetchWrapper.fetch({
                    request: request,
                    event: event,
                    fetchOptions: _this3._fetchOptions,
                    plugins: _this3._plugins
                  });

                case 2:
                  response = _context14.sent;
                  cachePutPromise = cacheWrapper_mjs.cacheWrapper.put({
                    cacheName: _this3._cacheName,
                    request: request,
                    response: response.clone(),
                    event: event,
                    plugins: _this3._plugins
                  });


                  if (event) {
                    try {
                      event.waitUntil(cachePutPromise);
                    } catch (error) {
                      {
                        logger_mjs.logger.warn('Unable to ensure service worker stays alive when ' + ('updating cache for \'' + getFriendlyURL_mjs.getFriendlyURL(event.request.url) + '\'.'));
                      }
                    }
                  }

                  return _context14.abrupt('return', response);

                case 6:
                case 'end':
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }))();
      }
    }]);

    return StaleWhileRevalidate;
  }();

  /*
    Copyright 2017 Google Inc.
      Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
          https://www.apache.org/licenses/LICENSE-2.0
      Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
  */

  var publicAPI = /*#__PURE__*/Object.freeze({
    CacheFirst: CacheFirst,
    CacheOnly: CacheOnly,
    NetworkFirst: NetworkFirst,
    NetworkOnly: NetworkOnly,
    StaleWhileRevalidate: StaleWhileRevalidate
  });

  /*
   Copyright 2016 Google Inc. All Rights Reserved.
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
   * @function workbox.strategies.cacheFirst
   * @param {Object} options See the {@link workbox.strategies.CacheFirst}
   * constructor for more info.
   */

  /**
   * @function workbox.strategies.cacheOnly
   * @param {Object} options See the {@link workbox.strategies.CacheOnly}
   * constructor for more info.
   */

  /**
   * @function workbox.strategies.networkFirst
   * @param {Object} options See the {@link workbox.strategies.NetworkFirst}
   * constructor for more info.
   */

  /**
   * @function workbox.strategies.networkOnly
   * @param {Object} options See the {@link workbox.strategies.NetworkOnly}
   * constructor for more info.
   */

  /**
   * @function workbox.strategies.staleWhileRevalidate
   * @param {Object} options See the
   * {@link workbox.strategies.StaleWhileRevalidate} constructor for more info.
   */

  var mapping = {
    cacheFirst: CacheFirst,
    cacheOnly: CacheOnly,
    networkFirst: NetworkFirst,
    networkOnly: NetworkOnly,
    staleWhileRevalidate: StaleWhileRevalidate
  };

  var defaultExport = {};
  Object.keys(mapping).forEach(function (keyName) {
    defaultExport[keyName] = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var StrategyClass = mapping[keyName];
      return new StrategyClass(Object.assign(options));
    };
  });

  /*
    Copyright 2017 Google Inc.
      Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
          https://www.apache.org/licenses/LICENSE-2.0
      Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
  */

  var finalExport = Object.assign(defaultExport, publicAPI);

  return finalExport;
}(workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-strategies.dev.js.map