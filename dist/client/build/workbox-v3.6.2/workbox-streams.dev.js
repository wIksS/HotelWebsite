'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

undefined.workbox = undefined.workbox || {};
undefined.workbox.streams = function (exports, logger_mjs, assert_mjs) {
  'use strict';

  try {
    self.workbox.v['workbox:streams:3.6.2'] = 1;
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

  /**
   * Takes either a Response, a ReadableStream, or a
   * [BodyInit](https://fetch.spec.whatwg.org/#bodyinit) and returns the
   * ReadableStreamReader object associated with it.
   *
   * @param {workbox.streams.StreamSource} source
   * @return {ReadableStreamReader}
   * @private
   */
  function _getReaderFromSource(source) {
    if (source.body && source.body.getReader) {
      return source.body.getReader();
    }

    if (source.getReader) {
      return source.getReader();
    }

    // TODO: This should be possible to do by constructing a ReadableStream, but
    // I can't get it to work. As a hack, construct a new Response, and use the
    // reader associated with its body.
    return new Response(source).body.getReader();
  }

  /**
   * Takes multiple source Promises, each of which could resolve to a Response, a
   * ReadableStream, or a [BodyInit](https://fetch.spec.whatwg.org/#bodyinit).
   *
   * Returns an object exposing a ReadableStream with each individual stream's
   * data returned in sequence, along with a Promise which signals when the
   * stream is finished (useful for passing to a FetchEvent's waitUntil()).
   *
   * @param {Array<Promise<workbox.streams.StreamSource>>} sourcePromises
   * @return {Object<{done: Promise, stream: ReadableStream}>}
   *
   * @memberof workbox.streams
   */
  function concatenate(sourcePromises) {
    {
      assert_mjs.assert.isArray(sourcePromises, {
        moduleName: 'workbox-streams',
        funcName: 'concatenate',
        paramName: 'sourcePromises'
      });
    }

    var readerPromises = sourcePromises.map(function (sourcePromise) {
      return Promise.resolve(sourcePromise).then(function (source) {
        return _getReaderFromSource(source);
      });
    });

    var fullyStreamedResolve = void 0;
    var fullyStreamedReject = void 0;
    var done = new Promise(function (resolve, reject) {
      fullyStreamedResolve = resolve;
      fullyStreamedReject = reject;
    });

    var i = 0;
    var logMessages = [];
    var stream = new ReadableStream({
      pull: function pull(controller) {
        var _this = this;

        return readerPromises[i].then(function (reader) {
          return reader.read();
        }).then(function (result) {
          if (result.done) {
            {
              logMessages.push(['Reached the end of source:', sourcePromises[i]]);
            }

            i++;
            if (i >= readerPromises.length) {
              // Log all the messages in the group at once in a single group.
              {
                logger_mjs.logger.groupCollapsed('Concatenating ' + readerPromises.length + ' sources.');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = logMessages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var message = _step.value;

                    if (Array.isArray(message)) {
                      var _logger_mjs$logger;

                      (_logger_mjs$logger = logger_mjs.logger).log.apply(_logger_mjs$logger, _toConsumableArray(message));
                    } else {
                      logger_mjs.logger.log(message);
                    }
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }

                logger_mjs.logger.log('Finished reading all sources.');
                logger_mjs.logger.groupEnd();
              }

              controller.close();
              fullyStreamedResolve();
              return;
            }

            return _this.pull(controller);
          } else {
            controller.enqueue(result.value);
          }
        }).catch(function (error) {
          {
            logger_mjs.logger.error('An error occurred:', error);
          }
          fullyStreamedReject(error);
          throw error;
        });
      },
      cancel: function cancel() {
        {
          logger_mjs.logger.warn('The ReadableStream was cancelled.');
        }

        fullyStreamedResolve();
      }
    });

    return { done: done, stream: stream };
  }

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
   * This is a utility method that determines whether the current browser supports
   * the features required to create streamed responses. Currently, it checks if
   * [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
   * is available.
   *
   * @param {HeadersInit} [headersInit] If there's no `Content-Type` specified,
   * `'text/html'` will be used by default.
   * @return {boolean} `true`, if the current browser meets the requirements for
   * streaming responses, and `false` otherwise.
   *
   * @memberof workbox.streams
   */
  function createHeaders() {
    var headersInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // See https://github.com/GoogleChrome/workbox/issues/1461
    var headers = new Headers(headersInit);
    if (!headers.has('content-type')) {
      headers.set('content-type', 'text/html');
    }
    return headers;
  }

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
   * Takes multiple source Promises, each of which could resolve to a Response, a
   * ReadableStream, or a [BodyInit](https://fetch.spec.whatwg.org/#bodyinit),
   * along with a
   * [HeadersInit](https://fetch.spec.whatwg.org/#typedefdef-headersinit).
   *
   * Returns an object exposing a Response whose body consists of each individual
   * stream's data returned in sequence, along with a Promise which signals when
   * the stream is finished (useful for passing to a FetchEvent's waitUntil()).
   *
   * @param {Array<Promise<workbox.streams.StreamSource>>} sourcePromises
   * @param {HeadersInit} [headersInit] If there's no `Content-Type` specified,
   * `'text/html'` will be used by default.
   * @return {Object<{done: Promise, response: Response}>}
   *
   * @memberof workbox.streams
   */
  function concatenateToResponse(sourcePromises, headersInit) {
    var _concatenate = concatenate(sourcePromises),
        done = _concatenate.done,
        stream = _concatenate.stream;

    var headers = createHeaders(headersInit);
    var response = new Response(stream, { headers: headers });

    return { done: done, response: response };
  }

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

  var cachedIsSupported = undefined;

  /**
   * This is a utility method that determines whether the current browser supports
   * the features required to create streamed responses. Currently, it checks if
   * [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
   * can be created.
   *
   * @return {boolean} `true`, if the current browser meets the requirements for
   * streaming responses, and `false` otherwise.
   *
   * @memberof workbox.streams
   */
  function isSupported() {
    if (cachedIsSupported === undefined) {
      // See https://github.com/GoogleChrome/workbox/issues/1473
      try {
        new ReadableStream({
          start: function start() {}
        });
        cachedIsSupported = true;
      } catch (error) {
        cachedIsSupported = false;
      }
    }

    return cachedIsSupported;
  }

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
   * A shortcut to create a strategy that could be dropped-in to Workbox's router.
   *
   * On browsers that do not support constructing new `ReadableStream`s, this
   * strategy will automatically wait for all the `sourceFunctions` to complete,
   * and create a final response that concatenates their values together.
   *
   * @param {
   *   Array<function(workbox.routing.Route~handlerCallback)>} sourceFunctions
   * Each function should return a {@link workbox.streams.StreamSource} (or a
   * Promise which resolves to one).
   * @param {HeadersInit} [headersInit] If there's no `Content-Type` specified,
   * `'text/html'` will be used by default.
   * @return {workbox.routing.Route~handlerCallback}
   *
   * @memberof workbox.streams
   */
  function strategy(sourceFunctions, headersInit) {
    return function () {
      var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var event = _ref3.event,
            url = _ref3.url,
            params = _ref3.params;

        var _concatenateToRespons, done, response, parts, headers;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!isSupported()) {
                  _context2.next = 4;
                  break;
                }

                _concatenateToRespons = concatenateToResponse(sourceFunctions.map(function (sourceFunction) {
                  return sourceFunction({ event: event, url: url, params: params });
                }), headersInit), done = _concatenateToRespons.done, response = _concatenateToRespons.response;

                event.waitUntil(done);
                return _context2.abrupt('return', response);

              case 4:
                logger_mjs.logger.log('The current browser doesn\'t support creating response ' + 'streams. Falling back to non-streaming response instead.');
                _context2.next = 7;
                return Promise.all(sourceFunctions.map(function (sourceFunction) {
                  return sourceFunction({ event: event, url: url, params: params });
                }).map(function () {
                  var _ref2 = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(responsePromise) {
                    var response;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return responsePromise;

                          case 2:
                            response = _context.sent;

                            if (!(response instanceof Response)) {
                              _context.next = 5;
                              break;
                            }

                            return _context.abrupt('return', response.blob());

                          case 5:
                            return _context.abrupt('return', response);

                          case 6:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 7:
                parts = _context2.sent;
                headers = createHeaders(headersInit);
                // Constructing a new Response from a Blob source is well-supported.
                // So is constructing a new Blob from multiple source Blobs or strings.

                return _context2.abrupt('return', new Response(new Blob(parts), { headers: headers }));

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  /*
    Copyright 2018 Google Inc.
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

  /*
    Copyright 2018 Google Inc.
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

  exports.concatenate = concatenate;
  exports.concatenateToResponse = concatenateToResponse;
  exports.isSupported = isSupported;
  exports.strategy = strategy;

  return exports;
}({}, workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-streams.dev.js.map