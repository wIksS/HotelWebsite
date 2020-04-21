'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

undefined.workbox = undefined.workbox || {};
undefined.workbox.precaching = function (DBWrapper_mjs, logger_mjs, cacheNames_mjs, WorkboxError_mjs, fetchWrapper_mjs, cacheWrapper_mjs, assert_mjs, getFriendlyURL_mjs) {
  'use strict';

  try {
    self.workbox.v['workbox:precaching:3.6.2'] = 1;
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

  /**
   * Used as a consistent way of referencing a URL to precache.
   *
   * @private
   * @memberof module:workbox-precaching
   */

  var PrecacheEntry = function () {
    /**
     * This class ensures all cache list entries are consistent and
     * adds cache busting if required.
     *
     * @param {*} originalInput
     * @param {string} url
     * @param {string} revision
     * @param {boolean} shouldCacheBust
     */
    function PrecacheEntry(originalInput, url, revision, shouldCacheBust) {
      _classCallCheck(this, PrecacheEntry);

      this._originalInput = originalInput;
      this._entryId = url;
      this._revision = revision;
      var requestAsCacheKey = new Request(url, { credentials: 'same-origin' });
      this._cacheRequest = requestAsCacheKey;
      this._networkRequest = shouldCacheBust ? this._cacheBustRequest(requestAsCacheKey) : requestAsCacheKey;
    }

    /**
     * This method will either use Request.cache option OR append a cache
     * busting parameter to the URL.
     *
     * @param {Request} request The request to cache bust
     * @return {Request} A cachebusted Request
     *
     * @private
     */


    _createClass(PrecacheEntry, [{
      key: '_cacheBustRequest',
      value: function _cacheBustRequest(request) {
        var url = request.url;
        var requestOptions = {
          credentials: 'same-origin'
        };
        if ('cache' in Request.prototype) {
          // Make use of the Request cache mode where we can.
          // Reload skips the HTTP cache for outgoing requests and updates
          // the cache with the returned response.
          requestOptions.cache = 'reload';
        } else {
          var parsedURL = new URL(url, location);

          // This is done so the minifier can mangle 'global.encodeURIComponent'
          var _encodeURIComponent = encodeURIComponent;

          parsedURL.search += (parsedURL.search ? '&' : '') + _encodeURIComponent('_workbox-cache-bust') + '=' + _encodeURIComponent(this._revision);
          url = parsedURL.toString();
        }

        return new Request(url, requestOptions);
      }
    }]);

    return PrecacheEntry;
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

  // Allows minifier to mangle this name


  var REVISON_IDB_FIELD = 'revision';
  var URL_IDB_FIELD = 'url';
  var DB_STORE_NAME = 'precached-details-models';
  /**
   * This model will track the relevant information of entries that
   * are cached and their matching revision details.
   *
   * @private
   */

  var PrecachedDetailsModel = function () {
    /**
     * Construct a new model for a specific cache.
     *
     * @param {string} dbName
     * @private
     */
    function PrecachedDetailsModel(dbName) {
      _classCallCheck(this, PrecachedDetailsModel);

      // This ensures the db name contains only letters, numbers, '-', '_' and '$'
      var filteredDBName = dbName.replace(/[^\w-]/g, '_');
      this._db = new DBWrapper_mjs.DBWrapper(filteredDBName, 2, {
        onupgradeneeded: this._handleUpgrade
      });
    }

    /**
     * Should perform an upgrade of indexedDB.
     *
     * @param {Event} evt
     *
     * @private
     */


    _createClass(PrecachedDetailsModel, [{
      key: '_handleUpgrade',
      value: function _handleUpgrade(evt) {
        var db = evt.target.result;
        if (evt.oldVersion < 2) {
          // IndexedDB version 1 used both 'workbox-precaching' and
          // 'precached-details-model' before upgrading to version 2.
          // Delete them and create a new store with latest schema.
          if (db.objectStoreNames.contains('workbox-precaching')) {
            db.deleteObjectStore('workbox-precaching');
          }
          if (db.objectStoreNames.contains(DB_STORE_NAME)) {
            db.deleteObjectStore(DB_STORE_NAME);
          }
        }
        db.createObjectStore(DB_STORE_NAME);
      }

      /**
       * Check if an entry is already cached. Returns false if
       * the entry isn't cached or the revision has changed.
       *
       * @param {string} cacheName
       * @param {PrecacheEntry} precacheEntry
       * @return {boolean}
       *
       * @private
       */

    }, {
      key: '_isEntryCached',
      value: function _isEntryCached(cacheName, precacheEntry) {
        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var revisionDetails, openCache, cachedResponse;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this._getRevision(precacheEntry._entryId);

                case 2:
                  revisionDetails = _context.sent;

                  if (!(revisionDetails !== precacheEntry._revision)) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt('return', false);

                case 5:
                  _context.next = 7;
                  return caches.open(cacheName);

                case 7:
                  openCache = _context.sent;
                  _context.next = 10;
                  return openCache.match(precacheEntry._cacheRequest);

                case 10:
                  cachedResponse = _context.sent;
                  return _context.abrupt('return', !!cachedResponse);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();
      }

      /**
       * @return {Promise<Array>}
       *
       * @private
       */

    }, {
      key: '_getAllEntries',
      value: function _getAllEntries() {
        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this2._db.getAllMatching(DB_STORE_NAME, {
                    includeKeys: true
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
       * Get the current revision details.
       *
       * @param {Object} entryId
       * @return {Promise<string|null>}
       *
       * @private
       */

    }, {
      key: '_getRevision',
      value: function _getRevision(entryId) {
        var _this3 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var data;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this3._db.get(DB_STORE_NAME, entryId);

                case 2:
                  data = _context3.sent;
                  return _context3.abrupt('return', data ? data[REVISON_IDB_FIELD] : null);

                case 4:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }

      /**
       * Add an entry to the details model.
       *
       * @param {PrecacheEntry} precacheEntry
       *
       * @private
       */

    }, {
      key: '_addEntry',
      value: function _addEntry(precacheEntry) {
        var _this4 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var _this4$_db$put;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this4._db.put(DB_STORE_NAME, (_this4$_db$put = {}, _defineProperty(_this4$_db$put, REVISON_IDB_FIELD, precacheEntry._revision), _defineProperty(_this4$_db$put, URL_IDB_FIELD, precacheEntry._cacheRequest.url), _this4$_db$put), precacheEntry._entryId);

                case 2:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }

      /**
       * Delete entry from details model.
       *
       * @param {string} entryId
       *
       * @private
       */

    }, {
      key: '_deleteEntry',
      value: function _deleteEntry(entryId) {
        var _this5 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _this5._db.delete(DB_STORE_NAME, entryId);

                case 2:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }))();
      }
    }]);

    return PrecachedDetailsModel;
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
   * This method will print out a warning if a precache entry doesn't have
   * a `revision` value.
   *
   * This is common if the asset if revisioned in the url like `index.1234.css`.
   *
   * @param {Map} entriesMap
   *
   * @private
   * @memberof module:workbox-preaching
   */


  var showWarningsIfNeeded = function showWarningsIfNeeded(entriesMap) {
    var urlOnlyEntries = [];
    entriesMap.forEach(function (entry) {
      if (typeof entry === 'string' || !entry._originalInput.revision) {
        urlOnlyEntries.push(entry._originalInput);
      }
    });

    if (urlOnlyEntries.length === 0) {
      // No warnings needed.
      return;
    }

    logger_mjs.logger.groupCollapsed('Are your precached assets revisioned?');

    var urlsList = urlOnlyEntries.map(function (urlOnlyEntry) {
      return '    - ' + JSON.stringify(urlOnlyEntry);
    }).join('\n');

    logger_mjs.logger.warn('The following precache entries might not be revisioned:' + '\n\n' + urlsList + '\n\n');

    logger_mjs.logger.unprefixed.warn('You can learn more about why this might be a ' + 'problem here: https://developers.google.com/web/tools/workbox/modules/workbox-precaching');

    logger_mjs.logger.groupEnd();
  };

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
   * @param {string} groupTitle
   * @param {Array<PrecacheEntry>} entries
   *
   * @private
   */
  var _nestedGroup = function _nestedGroup(groupTitle, entries) {
    if (entries.length === 0) {
      return;
    }

    logger_mjs.logger.groupCollapsed(groupTitle);

    entries.forEach(function (entry) {
      logger_mjs.logger.log(entry._originalInput);
    });

    logger_mjs.logger.groupEnd();
  };

  /**
   * @param {Array<Object>} entriesToPrecache
   * @param {Array<Object>} alreadyPrecachedEntries
   *
   * @private
   * @memberof module:workbox-precachig
   */
  var printInstallDetails = function printInstallDetails(entriesToPrecache, alreadyPrecachedEntries) {
    // Goal is to print the message:
    //    Precaching X files.
    // Or:
    //    Precaching X files. Y files were cached and up-to-date.

    var precachedCount = entriesToPrecache.length;
    var alreadyPrecachedCount = alreadyPrecachedEntries.length;
    var printText = 'Precaching ' + precachedCount + ' file' + (precachedCount === 1 ? '' : 's') + '.';
    if (alreadyPrecachedCount > 0) {
      printText += ' ' + alreadyPrecachedCount + ' ' + ('file' + (alreadyPrecachedCount === 1 ? ' is' : 's are') + ' already cached.');
    }

    logger_mjs.logger.groupCollapsed(printText);

    _nestedGroup('View precached URLs.', entriesToPrecache);
    _nestedGroup('View URLs that were already precached.', alreadyPrecachedEntries);
    logger_mjs.logger.groupEnd();
  };

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

  var logGroup = function logGroup(groupTitle, urls) {
    logger_mjs.logger.groupCollapsed(groupTitle);

    urls.forEach(function (url) {
      logger_mjs.logger.log(url);
    });

    logger_mjs.logger.groupEnd();
  };

  /**
   * @param {Array<string>} deletedCacheRequests
   * @param {Array<string>} deletedRevisionDetails
   *
   * @private
   * @memberof module:workbox-precachig
   */
  var printCleanupDetails = function printCleanupDetails(deletedCacheRequests, deletedRevisionDetails) {
    if (deletedCacheRequests.length === 0 && deletedRevisionDetails.length === 0) {
      return;
    }

    var cacheDeleteCount = deletedCacheRequests.length;
    var revisionDeleteCount = deletedRevisionDetails.length;

    var cacheDeleteText = cacheDeleteCount + ' cached ' + ('request' + (cacheDeleteCount === 1 ? ' was' : 's were') + ' deleted');
    var revisionDeleteText = revisionDeleteCount + ' ' + ((revisionDeleteCount === 1 ? 'entry' : 'entries') + ' ') + ((revisionDeleteCount === 1 ? 'was' : 'were') + ' deleted from IndexedDB.');

    logger_mjs.logger.groupCollapsed('During precaching cleanup, ' + cacheDeleteText + ' and ' + revisionDeleteText);

    logGroup('Deleted Cache Requests', deletedCacheRequests);
    logGroup('Revision Details Deleted from DB', deletedRevisionDetails);

    logger_mjs.logger.groupEnd();
  };

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
   * @param {Response} response
   * @return {Response}
   *
   * @private
   * @memberof module:workbox-precachig
   */
  var cleanRedirect = function () {
    var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(response) {
      var clonedResponse, bodyPromise, body;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              clonedResponse = response.clone();

              // Not all browsers support the Response.body stream, so fall back
              // to reading the entire body into memory as a blob.

              bodyPromise = 'body' in clonedResponse ? Promise.resolve(clonedResponse.body) : clonedResponse.blob();
              _context6.next = 4;
              return bodyPromise;

            case 4:
              body = _context6.sent;
              return _context6.abrupt('return', new Response(body, ['headers', 'status', 'statusText'].map(function (key) {
                return clonedResponse[key];
              })));

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function cleanRedirect(_x) {
      return _ref.apply(this, arguments);
    };
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
   * Performs efficient precaching of assets.
   *
   * @memberof workbox.precaching
   */

  var PrecacheController = function () {
    /**
     * Create a new PrecacheController.
     *
     * @param {string} cacheName
     */
    function PrecacheController(cacheName) {
      _classCallCheck(this, PrecacheController);

      this._cacheName = cacheNames_mjs.cacheNames.getPrecacheName(cacheName);
      this._entriesToCacheMap = new Map();
      this._precacheDetailsModel = new PrecachedDetailsModel(this._cacheName);
    }

    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {
     * Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>
     * } entries Array of entries to
     * precache.
     */


    _createClass(PrecacheController, [{
      key: 'addToCacheList',
      value: function addToCacheList(entries) {
        var _this7 = this;

        {
          assert_mjs.assert.isArray(entries, {
            moduleName: 'workbox-precaching',
            className: 'PrecacheController',
            funcName: 'addToCacheList',
            paramName: 'entries'
          });
        }

        entries.map(function (userEntry) {
          _this7._addEntryToCacheList(_this7._parseEntry(userEntry));
        });
      }

      /**
       * This method returns a precache entry.
       *
       * @private
       * @param {string|Object} input
       * @return {PrecacheEntry}
       */

    }, {
      key: '_parseEntry',
      value: function _parseEntry(input) {
        switch (typeof input === 'undefined' ? 'undefined' : _typeof(input)) {
          case 'string':
            {
              {
                if (input.length === 0) {
                  throw new WorkboxError_mjs.WorkboxError('add-to-cache-list-unexpected-type', {
                    entry: input
                  });
                }
              }

              return new PrecacheEntry(input, input, input);
            }
          case 'object':
            {
              {
                if (!input || !input.url) {
                  throw new WorkboxError_mjs.WorkboxError('add-to-cache-list-unexpected-type', {
                    entry: input
                  });
                }
              }

              return new PrecacheEntry(input, input.url, input.revision || input.url, !!input.revision);
            }
          default:
            throw new WorkboxError_mjs.WorkboxError('add-to-cache-list-unexpected-type', {
              entry: input
            });
        }
      }

      /**
       * Adds an entry to the precache list, accounting for possible duplicates.
       *
       * @private
       * @param {PrecacheEntry} entryToAdd
       */

    }, {
      key: '_addEntryToCacheList',
      value: function _addEntryToCacheList(entryToAdd) {
        // Check if the entry is already part of the map
        var existingEntry = this._entriesToCacheMap.get(entryToAdd._entryId);
        if (!existingEntry) {
          this._entriesToCacheMap.set(entryToAdd._entryId, entryToAdd);
          return;
        }

        // Duplicates are fine, but make sure the revision information
        // is the same.
        if (existingEntry._revision !== entryToAdd._revision) {
          throw new WorkboxError_mjs.WorkboxError('add-to-cache-list-conflicting-entries', {
            firstEntry: existingEntry._originalInput,
            secondEntry: entryToAdd._originalInput
          });
        }
      }

      /**
       * Call this method from a service work install event to start
       * precaching assets.
       *
       * @param {Object} options
       * @param {boolean} [options.suppressWarnings] Suppress warning messages.
       * @param {Event} [options.event] The install event (if needed).
       * @param {Array<Object>} [options.plugins] Plugins to be used for fetching
       *     and caching during install.
       * @return {Promise<workbox.precaching.InstallResult>}
       */

    }, {
      key: 'install',
      value: function install() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$suppressWarning = _ref2.suppressWarnings,
            suppressWarnings = _ref2$suppressWarning === undefined ? false : _ref2$suppressWarning,
            event = _ref2.event,
            plugins = _ref2.plugins;

        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var tempCache, requests, entriesToPrecache, entriesAlreadyPrecached, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, precacheEntry;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (suppressWarnings !== true) {
                    showWarningsIfNeeded(_this._entriesToCacheMap);
                  }

                  if (plugins) {
                    assert_mjs.assert.isArray(plugins, {
                      moduleName: 'workbox-precaching',
                      className: 'PrecacheController',
                      funcName: 'install',
                      paramName: 'plugins'
                    });
                  }
                  _context7.next = 4;
                  return caches.open(_this._getTempCacheName());

                case 4:
                  tempCache = _context7.sent;
                  _context7.next = 7;
                  return tempCache.keys();

                case 7:
                  requests = _context7.sent;
                  _context7.next = 10;
                  return Promise.all(requests.map(function (request) {
                    return tempCache.delete(request);
                  }));

                case 10:
                  entriesToPrecache = [];
                  entriesAlreadyPrecached = [];
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context7.prev = 15;
                  _iterator = _this._entriesToCacheMap.values()[Symbol.iterator]();

                case 17:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context7.next = 29;
                    break;
                  }

                  precacheEntry = _step.value;
                  _context7.next = 21;
                  return _this._precacheDetailsModel._isEntryCached(_this._cacheName, precacheEntry);

                case 21:
                  if (!_context7.sent) {
                    _context7.next = 25;
                    break;
                  }

                  entriesAlreadyPrecached.push(precacheEntry);
                  _context7.next = 26;
                  break;

                case 25:
                  entriesToPrecache.push(precacheEntry);

                case 26:
                  _iteratorNormalCompletion = true;
                  _context7.next = 17;
                  break;

                case 29:
                  _context7.next = 35;
                  break;

                case 31:
                  _context7.prev = 31;
                  _context7.t0 = _context7['catch'](15);
                  _didIteratorError = true;
                  _iteratorError = _context7.t0;

                case 35:
                  _context7.prev = 35;
                  _context7.prev = 36;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 38:
                  _context7.prev = 38;

                  if (!_didIteratorError) {
                    _context7.next = 41;
                    break;
                  }

                  throw _iteratorError;

                case 41:
                  return _context7.finish(38);

                case 42:
                  return _context7.finish(35);

                case 43:
                  _context7.next = 45;
                  return Promise.all(entriesToPrecache.map(function (precacheEntry) {
                    return _this._cacheEntryInTemp({ event: event, plugins: plugins, precacheEntry: precacheEntry });
                  }));

                case 45:
                  printInstallDetails(entriesToPrecache, entriesAlreadyPrecached);
                  return _context7.abrupt('return', {
                    updatedEntries: entriesToPrecache,
                    notUpdatedEntries: entriesAlreadyPrecached
                  });

                case 47:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[15, 31, 35, 43], [36,, 38, 42]]);
        }))();
      }

      /**
       * Takes the current set of temporary files and moves them to the final
       * cache, deleting the temporary cache once copying is complete.
       *
       * @param {Object} options
       * @param {Array<Object>} options.plugins Plugins to be used for fetching
       * and caching during install.
       * @return {
       * Promise<workbox.precaching.CleanupResult>}
       * Resolves with an object containing details of the deleted cache requests
       * and precache revision details.
       */

    }, {
      key: 'activate',
      value: function activate() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          var tempCache, requests, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, request, response;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return caches.open(_this2._getTempCacheName());

                case 2:
                  tempCache = _context8.sent;
                  _context8.next = 5;
                  return tempCache.keys();

                case 5:
                  requests = _context8.sent;

                  // Process each request/response one at a time, deleting the temporary entry
                  // when done, to help avoid triggering quota errors.
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context8.prev = 9;
                  _iterator2 = requests[Symbol.iterator]();

                case 11:
                  if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    _context8.next = 23;
                    break;
                  }

                  request = _step2.value;
                  _context8.next = 15;
                  return tempCache.match(request);

                case 15:
                  response = _context8.sent;
                  _context8.next = 18;
                  return cacheWrapper_mjs.cacheWrapper.put({
                    cacheName: _this2._cacheName,
                    request: request,
                    response: response,
                    plugins: options.plugins
                  });

                case 18:
                  _context8.next = 20;
                  return tempCache.delete(request);

                case 20:
                  _iteratorNormalCompletion2 = true;
                  _context8.next = 11;
                  break;

                case 23:
                  _context8.next = 29;
                  break;

                case 25:
                  _context8.prev = 25;
                  _context8.t0 = _context8['catch'](9);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context8.t0;

                case 29:
                  _context8.prev = 29;
                  _context8.prev = 30;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 32:
                  _context8.prev = 32;

                  if (!_didIteratorError2) {
                    _context8.next = 35;
                    break;
                  }

                  throw _iteratorError2;

                case 35:
                  return _context8.finish(32);

                case 36:
                  return _context8.finish(29);

                case 37:
                  return _context8.abrupt('return', _this2._cleanup());

                case 38:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, this, [[9, 25, 29, 37], [30,, 32, 36]]);
        }))();
      }

      /**
       * Returns the name of the temporary cache.
       *
       * @return {string}
       *
       * @private
       */

    }, {
      key: '_getTempCacheName',
      value: function _getTempCacheName() {
        return this._cacheName + '-temp';
      }

      /**
       * Requests the entry and saves it to the cache if the response
       * is valid.
       *
       * @private
       * @param {Object} options
       * @param {BaseCacheEntry} options.precacheEntry The entry to fetch and cache.
       * @param {Event} [options.event] The install event (if passed).
       * @param {Array<Object>} [options.plugins] An array of plugins to apply to
       *     fetch and caching.
       * @return {Promise<boolean>} Returns a promise that resolves once the entry
       *     has been fetched and cached or skipped if no update is needed. The
       *     promise resolves with true if the entry was cached / updated and
       *     false if the entry is already cached and up-to-date.
       */

    }, {
      key: '_cacheEntryInTemp',
      value: function _cacheEntryInTemp(_ref3) {
        var precacheEntry = _ref3.precacheEntry,
            event = _ref3.event,
            plugins = _ref3.plugins;

        var _this3 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          var response;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return fetchWrapper_mjs.fetchWrapper.fetch({
                    request: precacheEntry._networkRequest,
                    event: event,
                    fetchOptions: null,
                    plugins: plugins
                  });

                case 2:
                  response = _context9.sent;

                  if (!response.redirected) {
                    _context9.next = 7;
                    break;
                  }

                  _context9.next = 6;
                  return cleanRedirect(response);

                case 6:
                  response = _context9.sent;

                case 7:
                  _context9.next = 9;
                  return cacheWrapper_mjs.cacheWrapper.put({
                    cacheName: _this3._getTempCacheName(),
                    request: precacheEntry._cacheRequest,
                    response: response,
                    event: event,
                    plugins: plugins
                  });

                case 9:
                  _context9.next = 11;
                  return _this3._precacheDetailsModel._addEntry(precacheEntry);

                case 11:
                  return _context9.abrupt('return', true);

                case 12:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }))();
      }

      /**
       * Compare the URLs and determines which assets are no longer required
       * in the cache.
       *
       * This should be called in the service worker activate event.
       *
       * @return {
       * Promise<workbox.precaching.CleanupResult>}
       * Resolves with an object containing details of the deleted cache requests
       * and precache revision details.
       *
       * @private
       */

    }, {
      key: '_cleanup',
      value: function _cleanup() {
        var _this4 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          var expectedCacheUrls, _ref4, _ref5, deletedCacheRequests, deletedRevisionDetails;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  expectedCacheUrls = [];

                  _this4._entriesToCacheMap.forEach(function (entry) {
                    var fullUrl = new URL(entry._cacheRequest.url, location).toString();
                    expectedCacheUrls.push(fullUrl);
                  });

                  _context10.next = 4;
                  return Promise.all([_this4._cleanupCache(expectedCacheUrls), _this4._cleanupDetailsModel(expectedCacheUrls)]);

                case 4:
                  _ref4 = _context10.sent;
                  _ref5 = _slicedToArray(_ref4, 2);
                  deletedCacheRequests = _ref5[0];
                  deletedRevisionDetails = _ref5[1];

                  printCleanupDetails(deletedCacheRequests, deletedRevisionDetails);
                  return _context10.abrupt('return', {
                    deletedCacheRequests: deletedCacheRequests,
                    deletedRevisionDetails: deletedRevisionDetails
                  });

                case 10:
                case 'end':
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }))();
      }

      /**
       * Goes through all the cache entries and removes any that are
       * outdated.
       *
       * @private
       * @param {Array<string>} expectedCacheUrls Array of URLs that are
       * expected to be cached.
       * @return {Promise<Array<string>>} Resolves to an array of URLs
       * of cached requests that were deleted.
       */

    }, {
      key: '_cleanupCache',
      value: function _cleanupCache(expectedCacheUrls) {
        var _this5 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          var cache, cachedRequests, cachedRequestsToDelete;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return caches.has(_this5._cacheName);

                case 2:
                  if (_context11.sent) {
                    _context11.next = 4;
                    break;
                  }

                  return _context11.abrupt('return', []);

                case 4:
                  _context11.next = 6;
                  return caches.open(_this5._cacheName);

                case 6:
                  cache = _context11.sent;
                  _context11.next = 9;
                  return cache.keys();

                case 9:
                  cachedRequests = _context11.sent;
                  cachedRequestsToDelete = cachedRequests.filter(function (cachedRequest) {
                    return !expectedCacheUrls.includes(new URL(cachedRequest.url, location).toString());
                  });
                  _context11.next = 13;
                  return Promise.all(cachedRequestsToDelete.map(function (cacheUrl) {
                    return cache.delete(cacheUrl);
                  }));

                case 13:
                  return _context11.abrupt('return', cachedRequestsToDelete.map(function (request) {
                    return request.url;
                  }));

                case 14:
                case 'end':
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }))();
      }

      /**
       * Goes through all entries in indexedDB and removes any that are outdated.
       *
       * @private
       * @param {Array<string>} expectedCacheUrls Array of URLs that are
       * expected to be cached.
       * @return {Promise<Array<string>>} Resolves to an array of URLs removed
       * from indexedDB.
       */

    }, {
      key: '_cleanupDetailsModel',
      value: function _cleanupDetailsModel(expectedCacheUrls) {
        var _this6 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
          var revisionedEntries, detailsToDelete;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return _this6._precacheDetailsModel._getAllEntries();

                case 2:
                  revisionedEntries = _context12.sent;
                  detailsToDelete = revisionedEntries.filter(function (entry) {
                    var fullUrl = new URL(entry.value.url, location).toString();
                    return !expectedCacheUrls.includes(fullUrl);
                  });
                  _context12.next = 6;
                  return Promise.all(detailsToDelete.map(function (entry) {
                    return _this6._precacheDetailsModel._deleteEntry(entry.primaryKey);
                  }));

                case 6:
                  return _context12.abrupt('return', detailsToDelete.map(function (entry) {
                    return entry.value.url;
                  }));

                case 7:
                case 'end':
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }))();
      }

      /**
       * Returns an array of fully qualified URL's that will be precached.
       *
       * @return {Array<string>} An array of URLs.
       */

    }, {
      key: 'getCachedUrls',
      value: function getCachedUrls() {
        return Array.from(this._entriesToCacheMap.keys()).map(function (url) {
          return new URL(url, location).href;
        });
      }
    }]);

    return PrecacheController;
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
    PrecacheController: PrecacheController
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

  {
    assert_mjs.assert.isSwEnv('workbox-precaching');
  }

  var installActivateListenersAdded = false;
  var fetchListenersAdded = false;
  var suppressWarnings = false;
  var plugins = [];

  var cacheName = cacheNames_mjs.cacheNames.getPrecacheName();
  var precacheController = new PrecacheController(cacheName);

  var _removeIgnoreUrlParams = function _removeIgnoreUrlParams(origUrlObject, ignoreUrlParametersMatching) {
    // Exclude initial '?'
    var searchString = origUrlObject.search.slice(1);

    // Split into an array of 'key=value' strings
    var keyValueStrings = searchString.split('&');
    var keyValuePairs = keyValueStrings.map(function (keyValueString) {
      // Split each 'key=value' string into a [key, value] array
      return keyValueString.split('=');
    });
    var filteredKeyValuesPairs = keyValuePairs.filter(function (keyValuePair) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        // Return true iff the key doesn't match any of the regexes.
        return !ignoredRegex.test(keyValuePair[0]);
      });
    });
    var filteredStrings = filteredKeyValuesPairs.map(function (keyValuePair) {
      // Join each [key, value] array into a 'key=value' string
      return keyValuePair.join('=');
    });

    // Join the array of 'key=value' strings into a string with '&' in
    // between each
    var urlClone = new URL(origUrlObject);
    urlClone.search = filteredStrings.join('&');
    return urlClone;
  };

  /**
   * This function will take the request URL and manipulate it based on the
   * configuration options.
   *
   * @param {string} url
   * @param {Object} options
   * @return {string|null} Returns the URL in the cache that matches the request
   * if available, other null.
   *
   * @private
   */
  var _getPrecachedUrl = function _getPrecachedUrl(url) {
    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref6$ignoreUrlParame = _ref6.ignoreUrlParametersMatching,
        ignoreUrlParametersMatching = _ref6$ignoreUrlParame === undefined ? [/^utm_/] : _ref6$ignoreUrlParame,
        _ref6$directoryIndex = _ref6.directoryIndex,
        directoryIndex = _ref6$directoryIndex === undefined ? 'index.html' : _ref6$directoryIndex,
        _ref6$cleanUrls = _ref6.cleanUrls,
        cleanUrls = _ref6$cleanUrls === undefined ? true : _ref6$cleanUrls,
        _ref6$urlManipulation = _ref6.urlManipulation,
        urlManipulation = _ref6$urlManipulation === undefined ? null : _ref6$urlManipulation;

    var urlObject = new URL(url, location);

    // Change '/some-url#123' => '/some-url'
    urlObject.hash = '';

    var urlWithoutIgnoredParams = _removeIgnoreUrlParams(urlObject, ignoreUrlParametersMatching);

    var urlsToAttempt = [
    // Test the URL that was fetched
    urlObject,
    // Test the URL without search params
    urlWithoutIgnoredParams];

    // Test the URL with a directory index
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
      var directoryUrl = new URL(urlWithoutIgnoredParams);
      directoryUrl.pathname += directoryIndex;
      urlsToAttempt.push(directoryUrl);
    }

    // Test the URL with a '.html' extension
    if (cleanUrls) {
      var cleanUrl = new URL(urlWithoutIgnoredParams);
      cleanUrl.pathname += '.html';
      urlsToAttempt.push(cleanUrl);
    }

    if (urlManipulation) {
      var additionalUrls = urlManipulation({ url: urlObject });
      urlsToAttempt = urlsToAttempt.concat(additionalUrls);
    }

    var cachedUrls = precacheController.getCachedUrls();
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = urlsToAttempt[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var possibleUrl = _step3.value;

        if (cachedUrls.indexOf(possibleUrl.href) !== -1) {
          // It's a perfect match
          {
            logger_mjs.logger.debug('Precaching found a match for ' + getFriendlyURL_mjs.getFriendlyURL(possibleUrl.toString()));
          }
          return possibleUrl.href;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return null;
  };

  var moduleExports = {};

  /**
   * Add items to the precache list, removing any duplicates and
   * store the files in the
   * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * Please note: This method **will not** serve any of the cached files for you,
   * it only precaches files. To respond to a network request you call
   * [addRoute()]{@link module:workbox-precaching.addRoute}.
   *
   * If you have a single array of files to precache, you can just call
   * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
   *
   * @param {Array<Object|string>} entries Array of entries to precache.
   *
   * @alias workbox.precaching.precache
   */
  moduleExports.precache = function (entries) {
    precacheController.addToCacheList(entries);

    if (installActivateListenersAdded || entries.length <= 0) {
      return;
    }

    installActivateListenersAdded = true;
    self.addEventListener('install', function (event) {
      event.waitUntil(precacheController.install({
        event: event,
        plugins: plugins,
        suppressWarnings: suppressWarnings
      }));
    });
    self.addEventListener('activate', function (event) {
      event.waitUntil(precacheController.activate({
        event: event,
        plugins: plugins
      }));
    });
  };

  /**
   * Add a `fetch` listener to the service worker that will
   * respond to
   * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
   * with precached assets.
   *
   * Requests for assets that aren't precached, the `FetchEvent` will not be
   * responded to, allowing the event to fall through to other `fetch` event
   * listeners.
   *
   * @param {Object} options
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreUrlParametersMatching=[/^utm_/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanUrls=true] The `cleanUrls` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox.precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URL's that should be checked for precache matches.
   *
   * @alias workbox.precaching.addRoute
   */
  moduleExports.addRoute = function (options) {
    if (fetchListenersAdded) {
      // TODO: Throw error here.
      return;
    }

    fetchListenersAdded = true;
    self.addEventListener('fetch', function (event) {
      var precachedUrl = _getPrecachedUrl(event.request.url, options);
      if (!precachedUrl) {
        {
          logger_mjs.logger.debug('Precaching found no match for ' + getFriendlyURL_mjs.getFriendlyURL(event.request.url));
        }
        return;
      }

      var responsePromise = caches.open(cacheName).then(function (cache) {
        return cache.match(precachedUrl);
      }).then(function (cachedResponse) {
        if (cachedResponse) {
          return cachedResponse;
        }

        // Fall back to the network if we don't have a cached response (perhaps
        // due to manual cache cleanup).
        {
          logger_mjs.logger.debug('The precached response for ' + (getFriendlyURL_mjs.getFriendlyURL(precachedUrl) + ' in ' + cacheName + ' was not found. ') + 'Falling back to the network instead.');
        }

        return fetch(precachedUrl);
      });

      {
        responsePromise = responsePromise.then(function (response) {
          // Workbox is going to handle the route.
          // print the routing details to the console.
          logger_mjs.logger.groupCollapsed('Precaching is responding to: ' + getFriendlyURL_mjs.getFriendlyURL(event.request.url));
          logger_mjs.logger.log('Serving the precached url: ' + precachedUrl);

          // The Request and Response objects contains a great deal of
          // information, hide it under a group in case developers want to see it.
          logger_mjs.logger.groupCollapsed('View request details here.');
          logger_mjs.logger.unprefixed.log(event.request);
          logger_mjs.logger.groupEnd();

          logger_mjs.logger.groupCollapsed('View response details here.');
          logger_mjs.logger.unprefixed.log(response);
          logger_mjs.logger.groupEnd();

          logger_mjs.logger.groupEnd();
          return response;
        });
      }
      event.respondWith(responsePromise);
    });
  };

  /**
   * This method will add entries to the precache list and add a route to
   * respond to fetch events.
   *
   * This is a convenience method that will call
   * [precache()]{@link module:workbox-precaching.precache} and
   * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
   *
   * @param {Array<Object|string>} entries Array of entries to precache.
   * @param {Object} options See
   * [addRoute() options]{@link module:workbox-precaching.addRoute}.
   *
   * @alias workbox.precaching.precacheAndRoute
   */
  moduleExports.precacheAndRoute = function (entries, options) {
    moduleExports.precache(entries);
    moduleExports.addRoute(options);
  };

  /**
   * Warnings will be logged if any of the precached assets are entered without
   * a `revision` property. This is extremely dangerous if the URL's aren't
   * revisioned. However, the warnings can be supressed with this method.
   *
   * @param {boolean} suppress
   *
   * @alias workbox.precaching.suppressWarnings
   */
  moduleExports.suppressWarnings = function (suppress) {
    suppressWarnings = suppress;
  };

  /**
   * Add plugins to precaching.
   *
   * @param {Array<Object>} newPlugins
   *
   * @alias workbox.precaching.addPlugins
   */
  moduleExports.addPlugins = function (newPlugins) {
    plugins = plugins.concat(newPlugins);
  };

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

  var finalExport = Object.assign(moduleExports, publicAPI);

  return finalExport;
}(workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-precaching.dev.js.map