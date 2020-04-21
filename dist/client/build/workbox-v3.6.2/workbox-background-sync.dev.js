'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {};
undefined.workbox.backgroundSync = function (DBWrapper_mjs, WorkboxError_mjs, logger_mjs, assert_mjs, getFriendlyURL_mjs) {
  'use strict';

  try {
    self.workbox.v['workbox:background-sync:3.6.2'] = 1;
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

  var serializableProperties = ['method', 'referrer', 'referrerPolicy', 'mode', 'credentials', 'cache', 'redirect', 'integrity', 'keepalive'];

  /**
   * A class to make it easier to serialize and de-serialize requests so they
   * can be stored in IndexedDB.
   *
   * @private
   */

  var StorableRequest = function () {
    _createClass(StorableRequest, null, [{
      key: 'fromRequest',

      /**
       * Converts a Request object to a plain object that can be structured
       * cloned or JSON-stringified.
       *
       * @param {Request} request
       * @return {Promise<StorableRequest>}
       *
       * @private
       */
      value: function fromRequest(request) {
        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var requestInit, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref, _ref2, key, value, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, prop;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  requestInit = { headers: {} };

                  // Set the body if present.

                  if (!(request.method !== 'GET')) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return request.clone().blob();

                case 4:
                  requestInit.body = _context.sent;

                case 5:

                  // Convert the headers from an iterable to an object.
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 8;
                  for (_iterator = request.headers.entries()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _ref = _step.value;
                    _ref2 = _slicedToArray(_ref, 2);
                    key = _ref2[0];
                    value = _ref2[1];

                    requestInit.headers[key] = value;
                  }

                  // Add all other serializable request properties
                  _context.next = 16;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](8);
                  _didIteratorError = true;
                  _iteratorError = _context.t0;

                case 16:
                  _context.prev = 16;
                  _context.prev = 17;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 19:
                  _context.prev = 19;

                  if (!_didIteratorError) {
                    _context.next = 22;
                    break;
                  }

                  throw _iteratorError;

                case 22:
                  return _context.finish(19);

                case 23:
                  return _context.finish(16);

                case 24:
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context.prev = 27;
                  for (_iterator2 = serializableProperties[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    prop = _step2.value;

                    if (request[prop] !== undefined) {
                      requestInit[prop] = request[prop];
                    }
                  }

                  _context.next = 35;
                  break;

                case 31:
                  _context.prev = 31;
                  _context.t1 = _context['catch'](27);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context.t1;

                case 35:
                  _context.prev = 35;
                  _context.prev = 36;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 38:
                  _context.prev = 38;

                  if (!_didIteratorError2) {
                    _context.next = 41;
                    break;
                  }

                  throw _iteratorError2;

                case 41:
                  return _context.finish(38);

                case 42:
                  return _context.finish(35);

                case 43:
                  return _context.abrupt('return', new StorableRequest({ url: request.url, requestInit: requestInit }));

                case 44:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 12, 16, 24], [17,, 19, 23], [27, 31, 35, 43], [36,, 38, 42]]);
        }))();
      }

      /**
       * Accepts a URL and RequestInit dictionary that can be used to create a
       * new Request object. A timestamp is also generated so consumers can
       * reference when the object was created.
       *
       * @param {Object} param1
       * @param {string} param1.url
       * @param {Object} param1.requestInit
       *     See: https://fetch.spec.whatwg.org/#requestinit
       * @param {number} param1.timestamp The time the request was created,
       *     defaulting to the current time if not specified.
       *
       * @private
       */

    }]);

    function StorableRequest(_ref3) {
      var url = _ref3.url,
          requestInit = _ref3.requestInit,
          _ref3$timestamp = _ref3.timestamp,
          timestamp = _ref3$timestamp === undefined ? Date.now() : _ref3$timestamp;

      _classCallCheck(this, StorableRequest);

      this.url = url;
      this.requestInit = requestInit;

      // "Private"
      this._timestamp = timestamp;
    }

    /**
     * Gets the private _timestamp property.
     *
     * @return {number}
     *
     * @private
     */


    _createClass(StorableRequest, [{
      key: 'toObject',


      /**
       * Coverts this instance to a plain Object.
       *
       * @return {Object}
       *
       * @private
       */
      value: function toObject() {
        return {
          url: this.url,
          timestamp: this.timestamp,
          requestInit: this.requestInit
        };
      }

      /**
       * Converts this instance to a Request.
       *
       * @return {Request}
       *
       * @private
       */

    }, {
      key: 'toRequest',
      value: function toRequest() {
        return new Request(this.url, this.requestInit);
      }

      /**
       * Creates and returns a deep clone of the instance.
       *
       * @return {StorableRequest}
       *
       * @private
       */

    }, {
      key: 'clone',
      value: function clone() {
        var requestInit = Object.assign({}, this.requestInit);
        requestInit.headers = Object.assign({}, this.requestInit.headers);
        if (this.requestInit.body) {
          requestInit.body = this.requestInit.body.slice();
        }

        return new StorableRequest({
          url: this.url,
          timestamp: this.timestamp,
          requestInit: requestInit
        });
      }
    }, {
      key: 'timestamp',
      get: function get() {
        return this._timestamp;
      }
    }]);

    return StorableRequest;
  }();

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

  var DB_NAME = 'workbox-background-sync';
  var OBJECT_STORE_NAME = 'requests';
  var INDEXED_PROP = 'queueName';
  var TAG_PREFIX = 'workbox-background-sync';
  var MAX_RETENTION_TIME = 60 * 24 * 7; // 7 days in minutes

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
   * A class to manage storing requests from a Queue in IndexedbDB,
   * indexed by their queue name for easier access.
   *
   * @private
   */

  var QueueStore = function () {
    /**
     * Associates this instance with a Queue instance, so entries added can be
     * identified by their queue name.
     *
     * @param {Queue} queue
     *
     * @private
     */
    function QueueStore(queue) {
      _classCallCheck(this, QueueStore);

      this._queue = queue;
      this._db = new DBWrapper_mjs.DBWrapper(DB_NAME, 1, {
        onupgradeneeded: function onupgradeneeded(evt) {
          return evt.target.result.createObjectStore(OBJECT_STORE_NAME, { autoIncrement: true }).createIndex(INDEXED_PROP, INDEXED_PROP, { unique: false });
        }
      });
    }

    /**
     * Takes a StorableRequest instance, converts it to an object and adds it
     * as an entry in the object store.
     *
     * @param {StorableRequest} storableRequest
     *
     * @private
     */


    _createClass(QueueStore, [{
      key: 'addEntry',
      value: function addEntry(storableRequest) {
        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this._db.add(OBJECT_STORE_NAME, {
                    queueName: _this._queue.name,
                    storableRequest: storableRequest.toObject()
                  });

                case 2:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))();
      }

      /**
       * Gets the oldest entry in the object store, removes it, and returns the
       * value as a StorableRequest instance. If no entry exists, it returns
       * undefined.
       *
       * @return {StorableRequest|undefined}
       *
       * @private
       */

    }, {
      key: 'getAndRemoveOldestEntry',
      value: function getAndRemoveOldestEntry() {
        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _ref4, _ref5, entry;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this2._db.getAllMatching(OBJECT_STORE_NAME, {
                    index: INDEXED_PROP,
                    query: IDBKeyRange.only(_this2._queue.name),
                    count: 1,
                    includeKeys: true
                  });

                case 2:
                  _ref4 = _context3.sent;
                  _ref5 = _slicedToArray(_ref4, 1);
                  entry = _ref5[0];

                  if (!entry) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.next = 8;
                  return _this2._db.delete(OBJECT_STORE_NAME, entry.primaryKey);

                case 8:
                  return _context3.abrupt('return', new StorableRequest(entry.value.storableRequest));

                case 9:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }
    }]);

    return QueueStore;
  }();

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

  var queueNames = new Set();

  /**
   * A class to manage storing failed requests in IndexedDB and retrying them
   * later. All parts of the storing and replaying process are observable via
   * callbacks.
   *
   * @memberof workbox.backgroundSync
   */

  var Queue = function () {
    /**
     * Creates an instance of Queue with the given options
     *
     * @param {string} name The unique name for this queue. This name must be
     *     unique as it's used to register sync events and store requests
     *     in IndexedDB specific to this instance. An error will be thrown if
     *     a duplicate name is detected.
     * @param {Object} [options]
     * @param {Object} [options.callbacks] Callbacks to observe the lifecycle of
     *     queued requests. Use these to respond to or modify the requests
     *     during the replay process.
     * @param {function(StorableRequest):undefined}
     *     [options.callbacks.requestWillEnqueue]
     *     Invoked immediately before the request is stored to IndexedDB. Use
     *     this callback to modify request data at store time.
     * @param {function(StorableRequest):undefined}
     *     [options.callbacks.requestWillReplay]
     *     Invoked immediately before the request is re-fetched. Use this
     *     callback to modify request data at fetch time.
     * @param {function(Array<StorableRequest>):undefined}
     *     [options.callbacks.queueDidReplay]
     *     Invoked after all requests in the queue have successfully replayed.
     * @param {number} [options.maxRetentionTime = 7 days] The amount of time (in
     *     minutes) a request may be retried. After this amount of time has
     *     passed, the request will be deleted from the queue.
     */
    function Queue(name) {
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$callbacks = _ref6.callbacks,
          callbacks = _ref6$callbacks === undefined ? {} : _ref6$callbacks,
          _ref6$maxRetentionTim = _ref6.maxRetentionTime,
          maxRetentionTime = _ref6$maxRetentionTim === undefined ? MAX_RETENTION_TIME : _ref6$maxRetentionTim;

      _classCallCheck(this, Queue);

      // Ensure the store name is not already being used
      if (queueNames.has(name)) {
        throw new WorkboxError_mjs.WorkboxError('duplicate-queue-name', { name: name });
      } else {
        queueNames.add(name);
      }

      this._name = name;
      this._callbacks = callbacks;
      this._maxRetentionTime = maxRetentionTime;
      this._queueStore = new QueueStore(this);

      this._addSyncListener();
    }

    /**
     * @return {string}
     */


    _createClass(Queue, [{
      key: 'addRequest',


      /**
       * Stores the passed request into IndexedDB. The database used is
       * `workbox-background-sync` and the object store name is the same as
       * the name this instance was created with (to guarantee it's unique).
       *
       * @param {Request} request The request object to store.
       */
      value: function addRequest(request) {
        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var storableRequest;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  assert_mjs.assert.isInstance(request, Request, {
                    moduleName: 'workbox-background-sync',
                    className: 'Queue',
                    funcName: 'addRequest',
                    paramName: 'request'
                  });
                  _context4.next = 3;
                  return StorableRequest.fromRequest(request.clone());

                case 3:
                  storableRequest = _context4.sent;
                  _context4.next = 6;
                  return _this._runCallback('requestWillEnqueue', storableRequest);

                case 6:
                  _context4.next = 8;
                  return _this._queueStore.addEntry(storableRequest);

                case 8:
                  _context4.next = 10;
                  return _this._registerSync();

                case 10:
                  logger_mjs.logger.log('Request for \'' + getFriendlyURL_mjs.getFriendlyURL(storableRequest.url) + '\' has been\n          added to background sync queue \'' + _this._name + '\'.');

                case 11:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }

      /**
       * Retrieves all stored requests in IndexedDB and retries them. If the
       * queue contained requests that were successfully replayed, the
       * `queueDidReplay` callback is invoked (which implies the queue is
       * now empty). If any of the requests fail, a new sync registration is
       * created to retry again later.
       */

    }, {
      key: 'replayRequests',
      value: function replayRequests() {
        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var now, replayedRequests, failedRequests, storableRequest, storableRequestClone, maxRetentionTimeInMs, replay;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  now = Date.now();
                  replayedRequests = [];
                  failedRequests = [];
                  storableRequest = void 0;

                case 4:
                  _context5.next = 6;
                  return _this2._queueStore.getAndRemoveOldestEntry();

                case 6:
                  if (!(storableRequest = _context5.sent)) {
                    _context5.next = 29;
                    break;
                  }

                  // Make a copy so the unmodified request can be stored
                  // in the event of a replay failure.
                  storableRequestClone = storableRequest.clone();

                  // Ignore requests older than maxRetentionTime.

                  maxRetentionTimeInMs = _this2._maxRetentionTime * 60 * 1000;

                  if (!(now - storableRequest.timestamp > maxRetentionTimeInMs)) {
                    _context5.next = 11;
                    break;
                  }

                  return _context5.abrupt('continue', 4);

                case 11:
                  _context5.next = 13;
                  return _this2._runCallback('requestWillReplay', storableRequest);

                case 13:
                  replay = { request: storableRequest.toRequest() };
                  _context5.prev = 14;
                  _context5.next = 17;
                  return fetch(replay.request.clone());

                case 17:
                  replay.response = _context5.sent;

                  logger_mjs.logger.log('Request for \'' + getFriendlyURL_mjs.getFriendlyURL(storableRequest.url) + '\'\n             has been replayed');
                  _context5.next = 26;
                  break;

                case 21:
                  _context5.prev = 21;
                  _context5.t0 = _context5['catch'](14);

                  logger_mjs.logger.log('Request for \'' + getFriendlyURL_mjs.getFriendlyURL(storableRequest.url) + '\'\n             failed to replay');

                  replay.error = _context5.t0;
                  failedRequests.push(storableRequestClone);

                case 26:

                  replayedRequests.push(replay);
                  _context5.next = 4;
                  break;

                case 29:
                  _context5.next = 31;
                  return _this2._runCallback('queueDidReplay', replayedRequests);

                case 31:
                  if (!failedRequests.length) {
                    _context5.next = 35;
                    break;
                  }

                  _context5.next = 34;
                  return Promise.all(failedRequests.map(function (storableRequest) {
                    return _this2._queueStore.addEntry(storableRequest);
                  }));

                case 34:
                  throw new WorkboxError_mjs.WorkboxError('queue-replay-failed', { name: _this2._name, count: failedRequests.length });

                case 35:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[14, 21]]);
        }))();
      }

      /**
       * Runs the passed callback if it exists.
       *
       * @private
       * @param {string} name The name of the callback on this._callbacks.
       * @param {...*} args The arguments to invoke the callback with.
       */

    }, {
      key: '_runCallback',
      value: function _runCallback(name) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _this3 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(typeof _this3._callbacks[name] === 'function')) {
                    _context6.next = 3;
                    break;
                  }

                  _context6.next = 3;
                  return _this3._callbacks[name].apply(null, args);

                case 3:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))();
      }

      /**
       * In sync-supporting browsers, this adds a listener for the sync event.
       * In non-sync-supporting browsers, this will retry the queue on service
       * worker startup.
       *
       * @private
       */

    }, {
      key: '_addSyncListener',
      value: function _addSyncListener() {
        var _this5 = this;

        if ('sync' in registration) {
          self.addEventListener('sync', function (event) {
            if (event.tag === TAG_PREFIX + ':' + _this5._name) {
              {
                logger_mjs.logger.log('Background sync for tag \'' + event.tag + '\'\n                has been received, starting replay now');
              }
              event.waitUntil(_this5.replayRequests());
            }
          });
        } else {
          {
            logger_mjs.logger.log('Background sync replaying without background sync event');
          }
          // If the browser doesn't support background sync, retry
          // every time the service worker starts up as a fallback.
          this.replayRequests();
        }
      }

      /**
       * Registers a sync event with a tag unique to this instance.
       *
       * @private
       */

    }, {
      key: '_registerSync',
      value: function _registerSync() {
        var _this4 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!('sync' in registration)) {
                    _context7.next = 9;
                    break;
                  }

                  _context7.prev = 1;
                  _context7.next = 4;
                  return registration.sync.register(TAG_PREFIX + ':' + _this4._name);

                case 4:
                  _context7.next = 9;
                  break;

                case 6:
                  _context7.prev = 6;
                  _context7.t0 = _context7['catch'](1);

                  logger_mjs.logger.warn('Unable to register sync event for \'' + _this4._name + '\'.', _context7.t0);

                case 9:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[1, 6]]);
        }))();
      }

      /**
       * Returns the set of queue names. This is primarily used to reset the list
       * of queue names in tests.
       *
       * @return {Set}
       *
       * @private
       */

    }, {
      key: 'name',
      get: function get() {
        return this._name;
      }
    }], [{
      key: '_queueNames',
      get: function get() {
        return queueNames;
      }
    }]);

    return Queue;
  }();

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
   * A class implementing the `fetchDidFail` lifecycle callback. This makes it
   * easier to add failed requests to a background sync Queue.
   *
   * @memberof workbox.backgroundSync
   */


  var Plugin = function () {
    /**
     * @param {...*} queueArgs Args to forward to the composed Queue instance.
     *    See the [Queue]{@link workbox.backgroundSync.Queue} documentation for
     *    parameter details.
     */
    function Plugin() {
      _classCallCheck(this, Plugin);

      for (var _len2 = arguments.length, queueArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        queueArgs[_key2] = arguments[_key2];
      }

      this._queue = new (Function.prototype.bind.apply(Queue, [null].concat(queueArgs)))();
      this.fetchDidFail = this.fetchDidFail.bind(this);
    }

    /**
     * @param {Object} options
     * @param {Request} options.request
     * @private
     */


    _createClass(Plugin, [{
      key: 'fetchDidFail',
      value: function fetchDidFail(_ref7) {
        var request = _ref7.request;

        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return _this._queue.addRequest(request);

                case 2:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }))();
      }
    }]);

    return Plugin;
  }();

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

  var publicAPI = /*#__PURE__*/Object.freeze({
    Queue: Queue,
    Plugin: Plugin
  });

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

  return publicAPI;
}(workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-background-sync.dev.js.map