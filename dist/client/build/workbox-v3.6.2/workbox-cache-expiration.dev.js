'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {};
undefined.workbox.expiration = function (exports, DBWrapper_mjs, WorkboxError_mjs, assert_mjs, logger_mjs, cacheNames_mjs, index_mjs) {
  'use strict';

  try {
    self.workbox.v['workbox:cache-expiration:3.6.2'] = 1;
  } catch (e) {} // eslint-disable-line

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

  var URL_KEY = 'url';
  var TIMESTAMP_KEY = 'timestamp';

  /**
   * Returns the timestamp model.
   *
   * @private
   */

  var CacheTimestampsModel = function () {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    function CacheTimestampsModel(cacheName) {
      var _this9 = this;

      _classCallCheck(this, CacheTimestampsModel);

      // TODO Check cacheName

      this._cacheName = cacheName;
      this._storeName = cacheName;

      this._db = new DBWrapper_mjs.DBWrapper(this._cacheName, 2, {
        onupgradeneeded: function onupgradeneeded(evt) {
          return _this9._handleUpgrade(evt);
        }
      });
    }

    /**
     * Should perform an upgrade of indexedDB.
     *
     * @param {Event} evt
     *
     * @private
     */


    _createClass(CacheTimestampsModel, [{
      key: '_handleUpgrade',
      value: function _handleUpgrade(evt) {
        var db = evt.target.result;
        if (evt.oldVersion < 2) {
          // Remove old databases.
          if (db.objectStoreNames.contains('workbox-cache-expiration')) {
            db.deleteObjectStore('workbox-cache-expiration');
          }
        }

        db.createObjectStore(this._storeName, { keyPath: URL_KEY }).createIndex(TIMESTAMP_KEY, TIMESTAMP_KEY, { unique: false });
      }

      /**
       * @param {string} url
       * @param {number} timestamp
       *
       * @private
       */

    }, {
      key: 'setTimestamp',
      value: function setTimestamp(url, timestamp) {
        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this$_db$put;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this._db.put(_this._storeName, (_this$_db$put = {}, _defineProperty(_this$_db$put, URL_KEY, new URL(url, location).href), _defineProperty(_this$_db$put, TIMESTAMP_KEY, timestamp), _this$_db$put));

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();
      }

      /**
       * Get all of the timestamps in the indexedDB.
       *
       * @return {Array<Objects>}
       *
       * @private
       */

    }, {
      key: 'getAllTimestamps',
      value: function getAllTimestamps() {
        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this2._db.getAllMatching(_this2._storeName, {
                    index: TIMESTAMP_KEY
                  });

                case 2:
                  return _context2.abrupt('return', _context2.sent);

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))();
      }

      /**
       * Returns the timestamp stored for a given URL.
       *
       * @param {string} url
       * @return {number}
       *
       * @private
       */

    }, {
      key: 'getTimestamp',
      value: function getTimestamp(url) {
        var _this3 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var timestampObject;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this3._db.get(_this3._storeName, url);

                case 2:
                  timestampObject = _context3.sent;
                  return _context3.abrupt('return', timestampObject.timestamp);

                case 4:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }

      /**
       * @param {string} url
       *
       * @private
       */

    }, {
      key: 'deleteUrl',
      value: function deleteUrl(url) {
        var _this4 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this4._db.delete(_this4._storeName, new URL(url, location).href);

                case 2:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }

      /**
       * Removes the underlying IndexedDB object store entirely.
       */

    }, {
      key: 'delete',
      value: function _delete() {
        var _this5 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _this5._db.deleteDatabase();

                case 2:
                  _this5._db = null;

                case 3:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }))();
      }
    }]);

    return CacheTimestampsModel;
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

  /**
   * The `CacheExpiration` class allows you define an expiration and / or
   * limit on the number of responses stored in a
   * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
   *
   * @memberof workbox.expiration
   */


  var CacheExpiration = function () {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     */
    function CacheExpiration(cacheName) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CacheExpiration);

      {
        assert_mjs.assert.isType(cacheName, 'string', {
          moduleName: 'workbox-cache-expiration',
          className: 'CacheExpiration',
          funcName: 'constructor',
          paramName: 'cacheName'
        });

        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError_mjs.WorkboxError('max-entries-or-age-required', {
            moduleName: 'workbox-cache-expiration',
            className: 'CacheExpiration',
            funcName: 'constructor'
          });
        }

        if (config.maxEntries) {
          assert_mjs.assert.isType(config.maxEntries, 'number', {
            moduleName: 'workbox-cache-expiration',
            className: 'CacheExpiration',
            funcName: 'constructor',
            paramName: 'config.maxEntries'
          });

          // TODO: Assert is positive
        }

        if (config.maxAgeSeconds) {
          assert_mjs.assert.isType(config.maxAgeSeconds, 'number', {
            moduleName: 'workbox-cache-expiration',
            className: 'CacheExpiration',
            funcName: 'constructor',
            paramName: 'config.maxAgeSeconds'
          });

          // TODO: Assert is positive
        }
      }

      this._isRunning = false;
      this._rerunRequested = false;
      this._maxEntries = config.maxEntries;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._cacheName = cacheName;
      this._timestampModel = new CacheTimestampsModel(cacheName);
    }

    /**
     * Expires entries for the given cache and given criteria.
     */


    _createClass(CacheExpiration, [{
      key: 'expireEntries',
      value: function expireEntries() {
        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var now, oldEntries, extraEntries, allUrls;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!_this._isRunning) {
                    _context6.next = 3;
                    break;
                  }

                  _this._rerunRequested = true;
                  return _context6.abrupt('return');

                case 3:
                  _this._isRunning = true;

                  now = Date.now();

                  // First, expire old entries, if maxAgeSeconds is set.

                  _context6.next = 7;
                  return _this._findOldEntries(now);

                case 7:
                  oldEntries = _context6.sent;
                  _context6.next = 10;
                  return _this._findExtraEntries();

                case 10:
                  extraEntries = _context6.sent;


                  // Use a Set to remove any duplicates following the concatenation, then
                  // convert back into an array.
                  allUrls = [].concat(_toConsumableArray(new Set(oldEntries.concat(extraEntries))));
                  _context6.next = 14;
                  return Promise.all([_this._deleteFromCache(allUrls), _this._deleteFromIDB(allUrls)]);

                case 14:
                  // TODO: break apart entries deleted due to expiration vs size restraints
                  if (allUrls.length > 0) {
                    logger_mjs.logger.groupCollapsed('Expired ' + allUrls.length + ' ' + ((allUrls.length === 1 ? 'entry' : 'entries') + ' and removed ') + ((allUrls.length === 1 ? 'it' : 'them') + ' from the ') + ('\'' + _this._cacheName + '\' cache.'));
                    logger_mjs.logger.log('Expired the following ' + (allUrls.length === 1 ? 'URL' : 'URLs') + ':');
                    allUrls.forEach(function (url) {
                      return logger_mjs.logger.log('    ' + url);
                    });
                    logger_mjs.logger.groupEnd();
                  } else {
                    logger_mjs.logger.debug('Cache expiration ran and found no entries to remove.');
                  }


                  _this._isRunning = false;
                  if (_this._rerunRequested) {
                    _this._rerunRequested = false;
                    _this.expireEntries();
                  }

                case 17:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))();
      }

      /**
       * Expires entries based on the maximum age.
       *
       * @param {number} expireFromTimestamp A timestamp.
       * @return {Promise<Array<string>>} A list of the URLs that were expired.
       *
       * @private
       */

    }, {
      key: '_findOldEntries',
      value: function _findOldEntries(expireFromTimestamp) {
        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var expireOlderThan, timestamps, expiredUrls;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  assert_mjs.assert.isType(expireFromTimestamp, 'number', {
                    moduleName: 'workbox-cache-expiration',
                    className: 'CacheExpiration',
                    funcName: '_findOldEntries',
                    paramName: 'expireFromTimestamp'
                  });

                  if (_this2._maxAgeSeconds) {
                    _context7.next = 3;
                    break;
                  }

                  return _context7.abrupt('return', []);

                case 3:
                  expireOlderThan = expireFromTimestamp - _this2._maxAgeSeconds * 1000;
                  _context7.next = 6;
                  return _this2._timestampModel.getAllTimestamps();

                case 6:
                  timestamps = _context7.sent;
                  expiredUrls = [];

                  timestamps.forEach(function (timestampDetails) {
                    if (timestampDetails.timestamp < expireOlderThan) {
                      expiredUrls.push(timestampDetails.url);
                    }
                  });

                  return _context7.abrupt('return', expiredUrls);

                case 10:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }))();
      }

      /**
       * @return {Promise<Array>}
       *
       * @private
       */

    }, {
      key: '_findExtraEntries',
      value: function _findExtraEntries() {
        var _this3 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          var extraUrls, timestamps, lastUsed;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  extraUrls = [];

                  if (_this3._maxEntries) {
                    _context8.next = 3;
                    break;
                  }

                  return _context8.abrupt('return', []);

                case 3:
                  _context8.next = 5;
                  return _this3._timestampModel.getAllTimestamps();

                case 5:
                  timestamps = _context8.sent;

                  while (timestamps.length > _this3._maxEntries) {
                    lastUsed = timestamps.shift();

                    extraUrls.push(lastUsed.url);
                  }

                  return _context8.abrupt('return', extraUrls);

                case 8:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }))();
      }

      /**
       * @param {Array<string>} urls Array of URLs to delete from cache.
       *
       * @private
       */

    }, {
      key: '_deleteFromCache',
      value: function _deleteFromCache(urls) {
        var _this4 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          var cache, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, url;

          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return caches.open(_this4._cacheName);

                case 2:
                  cache = _context9.sent;
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context9.prev = 6;
                  _iterator = urls[Symbol.iterator]();

                case 8:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context9.next = 15;
                    break;
                  }

                  url = _step.value;
                  _context9.next = 12;
                  return cache.delete(url);

                case 12:
                  _iteratorNormalCompletion = true;
                  _context9.next = 8;
                  break;

                case 15:
                  _context9.next = 21;
                  break;

                case 17:
                  _context9.prev = 17;
                  _context9.t0 = _context9['catch'](6);
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
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, this, [[6, 17, 21, 29], [22,, 24, 28]]);
        }))();
      }

      /**
       * @param {Array<string>} urls Array of URLs to delete from IDB
       *
       * @private
       */

    }, {
      key: '_deleteFromIDB',
      value: function _deleteFromIDB(urls) {
        var _this5 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, url;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context10.prev = 3;
                  _iterator2 = urls[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    _context10.next = 12;
                    break;
                  }

                  url = _step2.value;
                  _context10.next = 9;
                  return _this5._timestampModel.deleteUrl(url);

                case 9:
                  _iteratorNormalCompletion2 = true;
                  _context10.next = 5;
                  break;

                case 12:
                  _context10.next = 18;
                  break;

                case 14:
                  _context10.prev = 14;
                  _context10.t0 = _context10['catch'](3);
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
                case 'end':
                  return _context10.stop();
              }
            }
          }, _callee10, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        }))();
      }

      /**
       * Update the timestamp for the given URL. This ensures the when
       * removing entries based on maximum entries, most recently used
       * is accurate or when expiring, the timestamp is up-to-date.
       *
       * @param {string} url
       */

    }, {
      key: 'updateTimestamp',
      value: function updateTimestamp(url) {
        var _this6 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          var urlObject;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  assert_mjs.assert.isType(url, 'string', {
                    moduleName: 'workbox-cache-expiration',
                    className: 'CacheExpiration',
                    funcName: 'updateTimestamp',
                    paramName: 'url'
                  });
                  urlObject = new URL(url, location);

                  urlObject.hash = '';

                  _context11.next = 5;
                  return _this6._timestampModel.setTimestamp(urlObject.href, Date.now());

                case 5:
                case 'end':
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }))();
      }

      /**
       * Can be used to check if a URL has expired or not before it's used.
       *
       * This requires a look up from IndexedDB, so can be slow.
       *
       * Note: This method will not remove the cached entry, call
       * `expireEntries()` to remove indexedDB and Cache entries.
       *
       * @param {string} url
       * @return {boolean}
       */

    }, {
      key: 'isURLExpired',
      value: function isURLExpired(url) {
        var _this7 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
          var urlObject, timestamp, expireOlderThan;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  if (_this7._maxAgeSeconds) {
                    _context12.next = 2;
                    break;
                  }

                  throw new WorkboxError_mjs.WorkboxError('expired-test-without-max-age', {
                    methodName: 'isURLExpired',
                    paramName: 'maxAgeSeconds'
                  });

                case 2:
                  urlObject = new URL(url, location);

                  urlObject.hash = '';

                  _context12.next = 6;
                  return _this7._timestampModel.getTimestamp(urlObject.href);

                case 6:
                  timestamp = _context12.sent;
                  expireOlderThan = Date.now() - _this7._maxAgeSeconds * 1000;
                  return _context12.abrupt('return', timestamp < expireOlderThan);

                case 9:
                case 'end':
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }))();
      }

      /**
       * Removes the IndexedDB object store used to keep track of cache expiration
       * metadata.
       */

    }, {
      key: 'delete',
      value: function _delete() {
        var _this8 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  // Make sure we don't attempt another rerun if we're called in the middle of
                  // a cache expiration.
                  _this8._rerunRequested = false;
                  _context13.next = 3;
                  return _this8._timestampModel.delete();

                case 3:
                case 'end':
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }))();
      }
    }]);

    return CacheExpiration;
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

  /**
   * This plugin can be used in the Workbox APIs to regularly enforce a
   * limit on the age and / or the number of cached requests.
   *
   * Whenever a cached request is used or updated, this plugin will look
   * at the used Cache and remove any old or extra requests.
   *
   * When using `maxAgeSeconds`, requests may be used *once* after expiring
   * because the expiration clean up will not have occurred until *after* the
   * cached request has been used. If the request has a "Date" header, then
   * a light weight expiration check is performed and the request will not be
   * used immediately.
   *
   * When using `maxEntries`, the last request to be used will be the request
   * that is removed from the Cache.
   *
   * @memberof workbox.expiration
   */


  var Plugin = function () {
    /**
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    function Plugin() {
      var _this10 = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Plugin);

      {
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError_mjs.WorkboxError('max-entries-or-age-required', {
            moduleName: 'workbox-cache-expiration',
            className: 'Plugin',
            funcName: 'constructor'
          });
        }

        if (config.maxEntries) {
          assert_mjs.assert.isType(config.maxEntries, 'number', {
            moduleName: 'workbox-cache-expiration',
            className: 'Plugin',
            funcName: 'constructor',
            paramName: 'config.maxEntries'
          });
        }

        if (config.maxAgeSeconds) {
          assert_mjs.assert.isType(config.maxAgeSeconds, 'number', {
            moduleName: 'workbox-cache-expiration',
            className: 'Plugin',
            funcName: 'constructor',
            paramName: 'config.maxAgeSeconds'
          });
        }
      }

      this._config = config;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._cacheExpirations = new Map();

      if (config.purgeOnQuotaError) {
        index_mjs.registerQuotaErrorCallback(function () {
          return _this10.deleteCacheAndMetadata();
        });
      }
    }

    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */


    _createClass(Plugin, [{
      key: '_getCacheExpiration',
      value: function _getCacheExpiration(cacheName) {
        if (cacheName === cacheNames_mjs.cacheNames.getRuntimeName()) {
          throw new WorkboxError_mjs.WorkboxError('expire-custom-caches-only');
        }

        var cacheExpiration = this._cacheExpirations.get(cacheName);
        if (!cacheExpiration) {
          cacheExpiration = new CacheExpiration(cacheName, this._config);
          this._cacheExpirations.set(cacheName, cacheExpiration);
        }
        return cacheExpiration;
      }

      /**
       * A "lifecycle" callback that will be triggered automatically by the
       * `workbox.runtimeCaching` handlers when a `Response` is about to be returned
       * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
       * the handler. It allows the `Response` to be inspected for freshness and
       * prevents it from being used if the `Response`'s `Date` header value is
       * older than the configured `maxAgeSeconds`.
       *
       * @param {Object} options
       * @param {string} options.cacheName Name of the cache the response is in.
       * @param {Response} options.cachedResponse The `Response` object that's been
       *     read from a cache and whose freshness should be checked.
       * @return {Response} Either the `cachedResponse`, if it's
       *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
       *
       * @private
       */

    }, {
      key: 'cachedResponseWillBeUsed',
      value: function cachedResponseWillBeUsed(_ref) {
        var cacheName = _ref.cacheName,
            cachedResponse = _ref.cachedResponse;

        if (!cachedResponse) {
          return null;
        }

        var isFresh = this._isResponseDateFresh(cachedResponse);

        // Expire entries to ensure that even if the expiration date has
        // expired, it'll only be used once.
        var cacheExpiration = this._getCacheExpiration(cacheName);
        cacheExpiration.expireEntries();

        return isFresh ? cachedResponse : null;
      }

      /**
       * @param {Response} cachedResponse
       * @return {boolean}
       *
       * @private
       */

    }, {
      key: '_isResponseDateFresh',
      value: function _isResponseDateFresh(cachedResponse) {
        if (!this._maxAgeSeconds) {
          // We aren't expiring by age, so return true, it's fresh
          return true;
        }

        // Check if the 'date' header will suffice a quick expiration check.
        // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
        // discussion.
        var dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
        if (dateHeaderTimestamp === null) {
          // Unable to parse date, so assume it's fresh.
          return true;
        }

        // If we have a valid headerTime, then our response is fresh iff the
        // headerTime plus maxAgeSeconds is greater than the current time.
        var now = Date.now();
        return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1000;
      }

      /**
       * This method will extract the data header and parse it into a useful
       * value.
       *
       * @param {Response} cachedResponse
       * @return {number}
       *
       * @private
       */

    }, {
      key: '_getDateHeaderTimestamp',
      value: function _getDateHeaderTimestamp(cachedResponse) {
        if (!cachedResponse.headers.has('date')) {
          return null;
        }

        var dateHeader = cachedResponse.headers.get('date');
        var parsedDate = new Date(dateHeader);
        var headerTime = parsedDate.getTime();

        // If the Date header was invalid for some reason, parsedDate.getTime()
        // will return NaN.
        if (isNaN(headerTime)) {
          return null;
        }

        return headerTime;
      }

      /**
       * A "lifecycle" callback that will be triggered automatically by the
       * `workbox.runtimeCaching` handlers when an entry is added to a cache.
       *
       * @param {Object} options
       * @param {string} options.cacheName Name of the cache that was updated.
       * @param {string} options.request The Request for the cached entry.
       *
       * @private
       */

    }, {
      key: 'cacheDidUpdate',
      value: function cacheDidUpdate(_ref2) {
        var cacheName = _ref2.cacheName,
            request = _ref2.request;

        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
          var cacheExpiration;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  assert_mjs.assert.isType(cacheName, 'string', {
                    moduleName: 'workbox-cache-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'cacheName'
                  });
                  assert_mjs.assert.isInstance(request, Request, {
                    moduleName: 'workbox-cache-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'request'
                  });
                  cacheExpiration = _this._getCacheExpiration(cacheName);
                  _context14.next = 5;
                  return cacheExpiration.updateTimestamp(request.url);

                case 5:
                  _context14.next = 7;
                  return cacheExpiration.expireEntries();

                case 7:
                case 'end':
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }))();
      }

      /**
       * This is a helper method that performs two operations:
       *
       * - Deletes *all* the underlying Cache instances associated with this plugin
       * instance, by calling caches.delete() on you behalf.
       * - Deletes the metadata from IndexedDB used to keep track of expiration
       * details for each Cache instance.
       *
       * When using cache expiration, calling this method is preferable to calling
       * `caches.delete()` directly, since this will ensure that the IndexedDB
       * metadata is also cleanly removed and open IndexedDB instances are deleted.
       *
       * Note that if you're *not* using cache expiration for a given cache, calling
       * `caches.delete()` and passing in the cache's name should be sufficient.
       * There is no Workbox-specific method needed for cleanup in that case.
       */

    }, {
      key: 'deleteCacheAndMetadata',
      value: function deleteCacheAndMetadata() {
        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
          var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _ref3, _ref4, cacheName, cacheExpiration;

          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  // Do this one at a time instead of all at once via `Promise.all()` to
                  // reduce the chance of inconsistency if a promise rejects.
                  _iteratorNormalCompletion3 = true;
                  _didIteratorError3 = false;
                  _iteratorError3 = undefined;
                  _context15.prev = 3;
                  _iterator3 = _this2._cacheExpirations[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                    _context15.next = 17;
                    break;
                  }

                  _ref3 = _step3.value;
                  _ref4 = _slicedToArray(_ref3, 2);
                  cacheName = _ref4[0];
                  cacheExpiration = _ref4[1];
                  _context15.next = 12;
                  return caches.delete(cacheName);

                case 12:
                  _context15.next = 14;
                  return cacheExpiration.delete();

                case 14:
                  _iteratorNormalCompletion3 = true;
                  _context15.next = 5;
                  break;

                case 17:
                  _context15.next = 23;
                  break;

                case 19:
                  _context15.prev = 19;
                  _context15.t0 = _context15['catch'](3);
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

                  // Reset this._cacheExpirations to its initial state.
                  _this2._cacheExpirations = new Map();

                case 32:
                case 'end':
                  return _context15.stop();
              }
            }
          }, _callee15, this, [[3, 19, 23, 31], [24,, 26, 30]]);
        }))();
      }
    }]);

    return Plugin;
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

  exports.CacheExpiration = CacheExpiration;
  exports.Plugin = Plugin;

  return exports;
}({}, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core);

//# sourceMappingURL=workbox-cache-expiration.dev.js.map