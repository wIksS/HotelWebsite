'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable */
// This is extracted from the Babel runtime (original source: https://github.com/babel/babel/blob/9e0f5235b1ca5167c368a576ad7c5af62d20b0e3/packages/babel-helpers/src/helpers.js#L240).
// As part of the Rollup bundling process, it's injected once into workbox-core
// and reused throughout all of the other modules, avoiding code duplication.
// See https://github.com/GoogleChrome/workbox/pull/1048#issuecomment-344698046
// for further background.
self.babelHelpers = {
  asyncToGenerator: function asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step('next', value);
            }, function (err) {
              step('throw', err);
            });
          }
        }

        return step('next');
      });
    };
  }
};

undefined.workbox = undefined.workbox || {};
undefined.workbox.core = function () {
  'use strict';

  try {
    self.workbox.v['workbox:core:3.6.2'] = 1;
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
   * The available log levels in Workbox: debug, log, warn, error and silent.
   *
   * @property {int} debug Prints all logs from Workbox. Useful for debugging.
   * @property {int} log Prints console log, warn, error and groups. Default for
   * debug builds.
   * @property {int} warn Prints console warn, error and groups. Default for
   * non-debug builds.
   * @property {int} error Print console error and groups.
   * @property {int} silent Force no logging from Workbox.
   *
   * @alias workbox.core.LOG_LEVELS
   */

  var LOG_LEVELS = {
    debug: 0,
    log: 1,
    warn: 2,
    error: 3,
    silent: 4
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

  // Safari doesn't print all console.groupCollapsed() arguments.
  // Related bug: https://bugs.webkit.org/show_bug.cgi?id=182754
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  var GREY = '#7f8c8d';
  var GREEN = '#2ecc71';
  var YELLOW = '#f39c12';
  var RED = '#c0392b';
  var BLUE = '#3498db';

  var getDefaultLogLevel = function getDefaultLogLevel() {
    return LOG_LEVELS.log;
  };

  var logLevel = getDefaultLogLevel();
  var shouldPrint = function shouldPrint(minLevel) {
    return logLevel <= minLevel;
  };
  var setLoggerLevel = function setLoggerLevel(newLogLevel) {
    return logLevel = newLogLevel;
  };
  var getLoggerLevel = function getLoggerLevel() {
    return logLevel;
  };

  // We always want groups to be logged unless logLevel is silent.
  var groupLevel = LOG_LEVELS.error;

  var _print = function _print(keyName, logArgs, levelColor) {
    var _console2;

    var logLevel = keyName.indexOf('group') === 0 ? groupLevel : LOG_LEVELS[keyName];
    if (!shouldPrint(logLevel)) {
      return;
    }

    if (!levelColor || keyName === 'groupCollapsed' && isSafari) {
      var _console;

      (_console = console)[keyName].apply(_console, _toConsumableArray(logArgs));
      return;
    }

    var logPrefix = ['%cworkbox', 'background: ' + levelColor + '; color: white; padding: 2px 0.5em; ' + 'border-radius: 0.5em;'];
    (_console2 = console)[keyName].apply(_console2, logPrefix.concat(_toConsumableArray(logArgs)));
  };

  var groupEnd = function groupEnd() {
    if (shouldPrint(groupLevel)) {
      console.groupEnd();
    }
  };

  var defaultExport = {
    groupEnd: groupEnd,
    unprefixed: {
      groupEnd: groupEnd
    }
  };

  var setupLogs = function setupLogs(keyName, color) {
    defaultExport[keyName] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _print(keyName, args, color);
    };
    defaultExport.unprefixed[keyName] = function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _print(keyName, args);
    };
  };

  var levelToColor = {
    debug: GREY,
    log: GREEN,
    warn: YELLOW,
    error: RED,
    groupCollapsed: BLUE
  };
  Object.keys(levelToColor).forEach(function (keyName) {
    return setupLogs(keyName, levelToColor[keyName]);
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

  var messages = {
    'invalid-value': function invalidValue(_ref4) {
      var paramName = _ref4.paramName,
          validValueDescription = _ref4.validValueDescription,
          value = _ref4.value;

      if (!paramName || !validValueDescription) {
        throw new Error('Unexpected input to \'invalid-value\' error.');
      }
      return 'The \'' + paramName + '\' parameter was given a value with an ' + ('unexpected value. ' + validValueDescription + ' Received a value of ') + (JSON.stringify(value) + '.');
    },

    'not-in-sw': function notInSw(_ref5) {
      var moduleName = _ref5.moduleName;

      if (!moduleName) {
        throw new Error('Unexpected input to \'not-in-sw\' error.');
      }
      return 'The \'' + moduleName + '\' must be used in a service worker.';
    },

    'not-an-array': function notAnArray(_ref6) {
      var moduleName = _ref6.moduleName,
          className = _ref6.className,
          funcName = _ref6.funcName,
          paramName = _ref6.paramName;

      if (!moduleName || !className || !funcName || !paramName) {
        throw new Error('Unexpected input to \'not-an-array\' error.');
      }
      return 'The parameter \'' + paramName + '\' passed into ' + ('\'' + moduleName + '.' + className + '.' + funcName + '()\' must be an array.');
    },

    'incorrect-type': function incorrectType(_ref7) {
      var expectedType = _ref7.expectedType,
          paramName = _ref7.paramName,
          moduleName = _ref7.moduleName,
          className = _ref7.className,
          funcName = _ref7.funcName;

      if (!expectedType || !paramName || !moduleName || !funcName) {
        throw new Error('Unexpected input to \'incorrect-type\' error.');
      }
      return 'The parameter \'' + paramName + '\' passed into ' + ('\'' + moduleName + '.' + (className ? className + '.' : '')) + (funcName + '()\' must be of type ' + expectedType + '.');
    },

    'incorrect-class': function incorrectClass(_ref8) {
      var expectedClass = _ref8.expectedClass,
          paramName = _ref8.paramName,
          moduleName = _ref8.moduleName,
          className = _ref8.className,
          funcName = _ref8.funcName,
          isReturnValueProblem = _ref8.isReturnValueProblem;

      if (!expectedClass || !moduleName || !funcName) {
        throw new Error('Unexpected input to \'incorrect-class\' error.');
      }

      if (isReturnValueProblem) {
        return 'The return value from ' + ('\'' + moduleName + '.' + (className ? className + '.' : '') + funcName + '()\' ') + ('must be an instance of class ' + expectedClass.name + '.');
      }

      return 'The parameter \'' + paramName + '\' passed into ' + ('\'' + moduleName + '.' + (className ? className + '.' : '') + funcName + '()\' ') + ('must be an instance of class ' + expectedClass.name + '.');
    },

    'missing-a-method': function missingAMethod(_ref9) {
      var expectedMethod = _ref9.expectedMethod,
          paramName = _ref9.paramName,
          moduleName = _ref9.moduleName,
          className = _ref9.className,
          funcName = _ref9.funcName;

      if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
        throw new Error('Unexpected input to \'missing-a-method\' error.');
      }
      return moduleName + '.' + className + '.' + funcName + '() expected the ' + ('\'' + paramName + '\' parameter to expose a \'' + expectedMethod + '\' method.');
    },

    'add-to-cache-list-unexpected-type': function addToCacheListUnexpectedType(_ref10) {
      var entry = _ref10.entry;

      return 'An unexpected entry was passed to ' + '\'workbox-precaching.PrecacheController.addToCacheList()\' The entry ' + ('\'' + JSON.stringify(entry) + '\' isn\'t supported. You must supply an array of ') + 'strings with one or more characters, objects with a url property or ' + 'Request objects.';
    },

    'add-to-cache-list-conflicting-entries': function addToCacheListConflictingEntries(_ref11) {
      var firstEntry = _ref11.firstEntry,
          secondEntry = _ref11.secondEntry;

      if (!firstEntry || !secondEntry) {
        throw new Error('Unexpected input to ' + '\'add-to-cache-list-duplicate-entries\' error.');
      }

      return 'Two of the entries passed to ' + '\'workbox-precaching.PrecacheController.addToCacheList()\' had matching ' + 'URLs but different revision details. This means workbox-precaching ' + 'is unable to determine cache the asset correctly. Please remove one ' + 'of the entries.';
    },

    'plugin-error-request-will-fetch': function pluginErrorRequestWillFetch(_ref12) {
      var thrownError = _ref12.thrownError;

      if (!thrownError) {
        throw new Error('Unexpected input to ' + '\'plugin-error-request-will-fetch\', error.');
      }

      return 'An error was thrown by a plugins \'requestWillFetch()\' method. ' + ('The thrown error message was: \'' + thrownError.message + '\'.');
    },

    'invalid-cache-name': function invalidCacheName(_ref13) {
      var cacheNameId = _ref13.cacheNameId,
          value = _ref13.value;

      if (!cacheNameId) {
        throw new Error('Expected a \'cacheNameId\' for error \'invalid-cache-name\'');
      }

      return 'You must provide a name containing at least one character for ' + ('setCacheDeatils({' + cacheNameId + ': \'...\'}). Received a value of ') + ('\'' + JSON.stringify(value) + '\'');
    },

    'unregister-route-but-not-found-with-method': function unregisterRouteButNotFoundWithMethod(_ref14) {
      var method = _ref14.method;

      if (!method) {
        throw new Error('Unexpected input to ' + '\'unregister-route-but-not-found-with-method\' error.');
      }

      return 'The route you\'re trying to unregister was not  previously ' + ('registered for the method type \'' + method + '\'.');
    },

    'unregister-route-route-not-registered': function unregisterRouteRouteNotRegistered() {
      return 'The route you\'re trying to unregister was not previously ' + 'registered.';
    },

    'queue-replay-failed': function queueReplayFailed(_ref15) {
      var name = _ref15.name,
          count = _ref15.count;

      return count + ' requests failed, while trying to replay Queue: ' + name + '.';
    },

    'duplicate-queue-name': function duplicateQueueName(_ref16) {
      var name = _ref16.name;

      return 'The Queue name \'' + name + '\' is already being used. ' + 'All instances of backgroundSync.Queue must be given unique names.';
    },

    'expired-test-without-max-age': function expiredTestWithoutMaxAge(_ref17) {
      var methodName = _ref17.methodName,
          paramName = _ref17.paramName;

      return 'The \'' + methodName + '()\' method can only be used when the ' + ('\'' + paramName + '\' is used in the constructor.');
    },

    'unsupported-route-type': function unsupportedRouteType(_ref18) {
      var moduleName = _ref18.moduleName,
          className = _ref18.className,
          funcName = _ref18.funcName,
          paramName = _ref18.paramName;

      return 'The supplied \'' + paramName + '\' parameter was an unsupported type. ' + ('Please check the docs for ' + moduleName + '.' + className + '.' + funcName + ' for ') + 'valid input types.';
    },

    'not-array-of-class': function notArrayOfClass(_ref19) {
      var value = _ref19.value,
          expectedClass = _ref19.expectedClass,
          moduleName = _ref19.moduleName,
          className = _ref19.className,
          funcName = _ref19.funcName,
          paramName = _ref19.paramName;

      return 'The supplied \'' + paramName + '\' parameter must be an array of ' + ('\'' + expectedClass + '\' objects. Received \'' + JSON.stringify(value) + ',\'. ') + ('Please check the call to ' + moduleName + '.' + className + '.' + funcName + '() ') + 'to fix the issue.';
    },

    'max-entries-or-age-required': function maxEntriesOrAgeRequired(_ref20) {
      var moduleName = _ref20.moduleName,
          className = _ref20.className,
          funcName = _ref20.funcName;

      return 'You must define either config.maxEntries or config.maxAgeSeconds' + ('in ' + moduleName + '.' + className + '.' + funcName);
    },

    'statuses-or-headers-required': function statusesOrHeadersRequired(_ref21) {
      var moduleName = _ref21.moduleName,
          className = _ref21.className,
          funcName = _ref21.funcName;

      return 'You must define either config.statuses or config.headers' + ('in ' + moduleName + '.' + className + '.' + funcName);
    },

    'invalid-string': function invalidString(_ref22) {
      var moduleName = _ref22.moduleName,
          className = _ref22.className,
          funcName = _ref22.funcName,
          paramName = _ref22.paramName;

      if (!paramName || !moduleName || !className || !funcName) {
        throw new Error('Unexpected input to \'invalid-string\' error.');
      }
      return 'When using strings, the \'' + paramName + '\' parameter must start with ' + '\'http\' (for cross-origin matches) or \'/\' (for same-origin matches). ' + ('Please see the docs for ' + moduleName + '.' + className + '.' + funcName + '() for ') + 'more info.';
    },
    'channel-name-required': function channelNameRequired() {
      return 'You must provide a channelName to construct a ' + 'BroadcastCacheUpdate instance.';
    },
    'invalid-responses-are-same-args': function invalidResponsesAreSameArgs() {
      return 'The arguments passed into responsesAreSame() appear to be ' + 'invalid. Please ensure valid Responses are used.';
    },
    'expire-custom-caches-only': function expireCustomCachesOnly() {
      return 'You must provide a \'cacheName\' property when using the ' + 'expiration plugin with a runtime caching strategy.';
    },
    'unit-must-be-bytes': function unitMustBeBytes(_ref23) {
      var normalizedRangeHeader = _ref23.normalizedRangeHeader;

      if (!normalizedRangeHeader) {
        throw new Error('Unexpected input to \'unit-must-be-bytes\' error.');
      }
      return 'The \'unit\' portion of the Range header must be set to \'bytes\'. ' + ('The Range header provided was "' + normalizedRangeHeader + '"');
    },
    'single-range-only': function singleRangeOnly(_ref24) {
      var normalizedRangeHeader = _ref24.normalizedRangeHeader;

      if (!normalizedRangeHeader) {
        throw new Error('Unexpected input to \'single-range-only\' error.');
      }
      return 'Multiple ranges are not supported. Please use a  single start ' + 'value, and optional end value. The Range header provided was ' + ('"' + normalizedRangeHeader + '"');
    },
    'invalid-range-values': function invalidRangeValues(_ref25) {
      var normalizedRangeHeader = _ref25.normalizedRangeHeader;

      if (!normalizedRangeHeader) {
        throw new Error('Unexpected input to \'invalid-range-values\' error.');
      }
      return 'The Range header is missing both start and end values. At least ' + 'one of those values is needed. The Range header provided was ' + ('"' + normalizedRangeHeader + '"');
    },
    'no-range-header': function noRangeHeader() {
      return 'No Range header was found in the Request provided.';
    },
    'range-not-satisfiable': function rangeNotSatisfiable(_ref26) {
      var size = _ref26.size,
          start = _ref26.start,
          end = _ref26.end;

      return 'The start (' + start + ') and end (' + end + ') values in the Range are ' + ('not satisfiable by the cached response, which is ' + size + ' bytes.');
    },
    'attempt-to-cache-non-get-request': function attemptToCacheNonGetRequest(_ref27) {
      var url = _ref27.url,
          method = _ref27.method;

      return 'Unable to cache \'' + url + '\' because it is a \'' + method + '\' request and ' + 'only \'GET\' requests can be cached.';
    },
    'cache-put-with-no-response': function cachePutWithNoResponse(_ref28) {
      var url = _ref28.url;

      return 'There was an attempt to cache \'' + url + '\' but the response was not ' + 'defined.';
    }
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

  var generatorFunction = function generatorFunction(code) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    var message = messages[code];
    if (!message) {
      throw new Error('Unable to find message for code \'' + code + '\'.');
    }

    return message.apply(undefined, args);
  };

  var exportedValue = generatorFunction;

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
   * Workbox errors should be thrown with this class.
   * This allows use to ensure the type easily in tests,
   * helps developers identify errors from workbox
   * easily and allows use to optimise error
   * messages correctly.
   *
   * @private
   */

  var WorkboxError = function (_Error) {
    _inherits(WorkboxError, _Error);

    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    function WorkboxError(errorCode, details) {
      _classCallCheck(this, WorkboxError);

      var message = exportedValue(errorCode, details);

      var _this11 = _possibleConstructorReturn(this, (WorkboxError.__proto__ || Object.getPrototypeOf(WorkboxError)).call(this, message));

      _this11.name = errorCode;
      _this11.details = details;
      return _this11;
    }

    return WorkboxError;
  }(Error);

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
   * This method returns true if the current context is a service worker.
   */


  var isSwEnv = function isSwEnv(moduleName) {
    if (!('ServiceWorkerGlobalScope' in self)) {
      throw new WorkboxError('not-in-sw', { moduleName: moduleName });
    }
  };

  /*
   * This method throws if the supplied value is not an array.
   * The destructed values are required to produce a meaningful error for users.
   * The destructed and restructured object is so it's clear what is
   * needed.
   */
  var isArray = function isArray(value, _ref29) {
    var moduleName = _ref29.moduleName,
        className = _ref29.className,
        funcName = _ref29.funcName,
        paramName = _ref29.paramName;

    if (!Array.isArray(value)) {
      throw new WorkboxError('not-an-array', {
        moduleName: moduleName,
        className: className,
        funcName: funcName,
        paramName: paramName
      });
    }
  };

  var hasMethod = function hasMethod(object, expectedMethod, _ref30) {
    var moduleName = _ref30.moduleName,
        className = _ref30.className,
        funcName = _ref30.funcName,
        paramName = _ref30.paramName;

    var type = _typeof(object[expectedMethod]);
    if (type !== 'function') {
      throw new WorkboxError('missing-a-method', { paramName: paramName, expectedMethod: expectedMethod,
        moduleName: moduleName, className: className, funcName: funcName });
    }
  };

  var isType = function isType(object, expectedType, _ref31) {
    var moduleName = _ref31.moduleName,
        className = _ref31.className,
        funcName = _ref31.funcName,
        paramName = _ref31.paramName;

    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== expectedType) {
      throw new WorkboxError('incorrect-type', { paramName: paramName, expectedType: expectedType,
        moduleName: moduleName, className: className, funcName: funcName });
    }
  };

  var isInstance = function isInstance(object, expectedClass, _ref32) {
    var moduleName = _ref32.moduleName,
        className = _ref32.className,
        funcName = _ref32.funcName,
        paramName = _ref32.paramName,
        isReturnValueProblem = _ref32.isReturnValueProblem;

    if (!(object instanceof expectedClass)) {
      throw new WorkboxError('incorrect-class', { paramName: paramName, expectedClass: expectedClass,
        moduleName: moduleName, className: className, funcName: funcName, isReturnValueProblem: isReturnValueProblem });
    }
  };

  var isOneOf = function isOneOf(value, validValues, _ref33) {
    var paramName = _ref33.paramName;

    if (!validValues.includes(value)) {
      throw new WorkboxError('invalid-value', {
        paramName: paramName,
        value: value,
        validValueDescription: 'Valid values are ' + JSON.stringify(validValues) + '.'
      });
    }
  };

  var isArrayOfClass = function isArrayOfClass(value, expectedClass, _ref34) {
    var moduleName = _ref34.moduleName,
        className = _ref34.className,
        funcName = _ref34.funcName,
        paramName = _ref34.paramName;

    var error = new WorkboxError('not-array-of-class', {
      value: value, expectedClass: expectedClass,
      moduleName: moduleName, className: className, funcName: funcName, paramName: paramName
    });
    if (!Array.isArray(value)) {
      throw error;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (!(item instanceof expectedClass)) {
          throw error;
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
  };

  var finalAssertExports = {
    hasMethod: hasMethod,
    isArray: isArray,
    isInstance: isInstance,
    isOneOf: isOneOf,
    isSwEnv: isSwEnv,
    isType: isType,
    isArrayOfClass: isArrayOfClass
  };

  /**
   * Runs all of the callback functions, one at a time sequentially, in the order
   * in which they were registered.
   *
   * @memberof workbox.core
   * @private
   */
  var executeQuotaErrorCallbacks = function () {
    var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, callback;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              defaultExport.log('About to run ' + callbacks.size + ' callbacks to clean up caches.');
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 4;
              _iterator2 = callbacks[Symbol.iterator]();

            case 6:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                _context.next = 14;
                break;
              }

              callback = _step2.value;
              _context.next = 10;
              return callback();

            case 10:
              defaultExport.log(callback, 'is complete.');

            case 11:
              _iteratorNormalCompletion2 = true;
              _context.next = 6;
              break;

            case 14:
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](4);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t0;

            case 20:
              _context.prev = 20;
              _context.prev = 21;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 23:
              _context.prev = 23;

              if (!_didIteratorError2) {
                _context.next = 26;
                break;
              }

              throw _iteratorError2;

            case 26:
              return _context.finish(23);

            case 27:
              return _context.finish(20);

            case 28:
              defaultExport.log('Finished running callbacks.');

            case 29:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[4, 16, 20, 28], [21,, 23, 27]]);
    }));

    return function executeQuotaErrorCallbacks() {
      return _ref.apply(this, arguments);
    };
  }();

  var callbacks = new Set();

  /**
   * Adds a function to the set of callbacks that will be executed when there's
   * a quota error.
   *
   * @param {Function} callback
   * @memberof workbox.core
   */
  function registerQuotaErrorCallback(callback) {
    {
      finalAssertExports.isType(callback, 'function', {
        moduleName: 'workbox-core',
        funcName: 'register',
        paramName: 'callback'
      });
    }

    callbacks.add(callback);

    {
      defaultExport.log('Registered a callback to respond to quota errors.', callback);
    }
  }

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
   * A class that wraps common IndexedDB functionality in a promise-based API.
   * It exposes all the underlying power and functionality of IndexedDB, but
   * wraps the most commonly used features in a way that's much simpler to use.
   *
   * @private
   */

  var DBWrapper = function () {
    /**
     * @param {string} name
     * @param {number} version
     * @param {Object=} [callback]
     * @param {function(this:DBWrapper, Event)} [callbacks.onupgradeneeded]
     * @param {function(this:DBWrapper, Event)} [callbacks.onversionchange]
     *     Defaults to DBWrapper.prototype._onversionchange when not specified.
     */
    function DBWrapper(name, version) {
      var _ref35 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          onupgradeneeded = _ref35.onupgradeneeded,
          _ref35$onversionchang = _ref35.onversionchange,
          onversionchange = _ref35$onversionchang === undefined ? this._onversionchange : _ref35$onversionchang;

      _classCallCheck(this, DBWrapper);

      this._name = name;
      this._version = version;
      this._onupgradeneeded = onupgradeneeded;
      this._onversionchange = onversionchange;

      // If this is null, it means the database isn't open.
      this._db = null;
    }

    /**
     * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
     * callback, and added an onversionchange callback to the database.
     *
     * @return {IDBDatabase}
     *
     * @private
     */


    _createClass(DBWrapper, [{
      key: 'open',
      value: function open() {
        var _this = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!_this._db) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt('return');

                case 2:
                  _context2.next = 4;
                  return new Promise(function (resolve, reject) {
                    // This flag is flipped to true if the timeout callback runs prior
                    // to the request failing or succeeding. Note: we use a timeout instead
                    // of an onblocked handler since there are cases where onblocked will
                    // never never run. A timeout better handles all possible scenarios:
                    // https://github.com/w3c/IndexedDB/issues/223
                    var openRequestTimedOut = false;
                    setTimeout(function () {
                      openRequestTimedOut = true;
                      reject(new Error('The open request was blocked and timed out'));
                    }, _this.OPEN_TIMEOUT);

                    var openRequest = indexedDB.open(_this._name, _this._version);
                    openRequest.onerror = function (evt) {
                      return reject(openRequest.error);
                    };
                    openRequest.onupgradeneeded = function (evt) {
                      if (openRequestTimedOut) {
                        openRequest.transaction.abort();
                        evt.target.result.close();
                      } else if (_this._onupgradeneeded) {
                        _this._onupgradeneeded(evt);
                      }
                    };
                    openRequest.onsuccess = function (evt) {
                      var db = evt.target.result;
                      if (openRequestTimedOut) {
                        db.close();
                      } else {
                        db.onversionchange = _this._onversionchange;
                        resolve(db);
                      }
                    };
                  });

                case 4:
                  _this._db = _context2.sent;
                  return _context2.abrupt('return', _this);

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))();
      }

      /**
       * Delegates to the native `get()` method for the object store.
       *
       * @param {string} storeName The name of the object store to put the value.
       * @param {...*} args The values passed to the delegated method.
       * @return {*} The key of the entry.
       *
       * @private
       */

    }, {
      key: 'get',
      value: function get(storeName) {
        for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        var _this2 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this2._call.apply(_this2, ['get', storeName, 'readonly'].concat(args));

                case 2:
                  return _context3.abrupt('return', _context3.sent);

                case 3:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))();
      }

      /**
       * Delegates to the native `add()` method for the object store.
       *
       * @param {string} storeName The name of the object store to put the value.
       * @param {...*} args The values passed to the delegated method.
       * @return {*} The key of the entry.
       *
       * @private
       */

    }, {
      key: 'add',
      value: function add(storeName) {
        for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          args[_key5 - 1] = arguments[_key5];
        }

        var _this3 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this3._call.apply(_this3, ['add', storeName, 'readwrite'].concat(args));

                case 2:
                  return _context4.abrupt('return', _context4.sent);

                case 3:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }

      /**
       * Delegates to the native `put()` method for the object store.
       *
       * @param {string} storeName The name of the object store to put the value.
       * @param {...*} args The values passed to the delegated method.
       * @return {*} The key of the entry.
       *
       * @private
       */

    }, {
      key: 'put',
      value: function put(storeName) {
        for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }

        var _this4 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _this4._call.apply(_this4, ['put', storeName, 'readwrite'].concat(args));

                case 2:
                  return _context5.abrupt('return', _context5.sent);

                case 3:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }))();
      }

      /**
       * Delegates to the native `delete()` method for the object store.
       *
       * @param {string} storeName
       * @param {...*} args The values passed to the delegated method.
       *
       * @private
       */

    }, {
      key: 'delete',
      value: function _delete(storeName) {
        for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          args[_key7 - 1] = arguments[_key7];
        }

        var _this5 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _this5._call.apply(_this5, ['delete', storeName, 'readwrite'].concat(args));

                case 2:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))();
      }

      /**
       * Deletes the underlying database, ensuring that any open connections are
       * closed first.
       *
       * @private
       */

    }, {
      key: 'deleteDatabase',
      value: function deleteDatabase() {
        var _this6 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _this6.close();
                  _this6._db = null;
                  _context7.next = 4;
                  return new Promise(function (resolve, reject) {
                    var request = indexedDB.deleteDatabase(_this6._name);
                    request.onerror = function (evt) {
                      return reject(evt.target.error);
                    };
                    request.onblocked = function () {
                      return reject(new Error('Deletion was blocked.'));
                    };
                    request.onsuccess = function () {
                      return resolve();
                    };
                  });

                case 4:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }))();
      }

      /**
       * Delegates to the native `getAll()` or polyfills it via the `find()`
       * method in older browsers.
       *
       * @param {string} storeName
       * @param {*} query
       * @param {number} count
       * @return {Array}
       *
       * @private
       */

    }, {
      key: 'getAll',
      value: function getAll(storeName, query, count) {
        var _this7 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  if (!('getAll' in IDBObjectStore.prototype)) {
                    _context8.next = 6;
                    break;
                  }

                  _context8.next = 3;
                  return _this7._call('getAll', storeName, 'readonly', query, count);

                case 3:
                  return _context8.abrupt('return', _context8.sent);

                case 6:
                  _context8.next = 8;
                  return _this7.getAllMatching(storeName, { query: query, count: count });

                case 8:
                  return _context8.abrupt('return', _context8.sent);

                case 9:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }))();
      }

      /**
       * Supports flexible lookup in an object store by specifying an index,
       * query, direction, and count. This method returns an array of objects
       * with the signature .
       *
       * @param {string} storeName
       * @param {Object} [opts]
       * @param {IDBCursorDirection} [opts.direction]
       * @param {*} [opts.query]
       * @param {string} [opts.index] The index to use (if specified).
       * @param {number} [opts.count] The max number of results to return.
       * @param {boolean} [opts.includeKeys] When true, the structure of the
       *     returned objects is changed from an array of values to an array of
       *     objects in the form {key, primaryKey, value}.
       * @return {Array}
       *
       * @private
       */

    }, {
      key: 'getAllMatching',
      value: function getAllMatching(storeName) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _this8 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return _this8.transaction([storeName], 'readonly', function (stores, done) {
                    var store = stores[storeName];
                    var target = opts.index ? store.index(opts.index) : store;
                    var results = [];

                    // Passing `undefined` arguments to Edge's `openCursor(...)` causes
                    // 'DOMException: DataError'
                    // Details in issue: https://github.com/GoogleChrome/workbox/issues/1509
                    var query = opts.query || null;
                    var direction = opts.direction || 'next';
                    target.openCursor(query, direction).onsuccess = function (evt) {
                      var cursor = evt.target.result;
                      if (cursor) {
                        var primaryKey = cursor.primaryKey,
                            key = cursor.key,
                            value = cursor.value;

                        results.push(opts.includeKeys ? { primaryKey: primaryKey, key: key, value: value } : value);
                        if (opts.count && results.length >= opts.count) {
                          done(results);
                        } else {
                          cursor.continue();
                        }
                      } else {
                        done(results);
                      }
                    };
                  });

                case 2:
                  return _context9.abrupt('return', _context9.sent);

                case 3:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }))();
      }

      /**
       * Accepts a list of stores, a transaction type, and a callback and
       * performs a transaction. A promise is returned that resolves to whatever
       * value the callback chooses. The callback holds all the transaction logic
       * and is invoked with three arguments:
       *   1. An object mapping object store names to IDBObjectStore values.
       *   2. A `done` function, that's used to resolve the promise when
       *      when the transaction is done.
       *   3. An `abort` function that can be called to abort the transaction
       *      at any time.
       *
       * @param {Array<string>} storeNames An array of object store names
       *     involved in the transaction.
       * @param {string} type Can be `readonly` or `readwrite`.
       * @param {function(Object, function(), function(*)):?IDBRequest} callback
       * @return {*} The result of the transaction ran by the callback.
       *
       * @private
       */

    }, {
      key: 'transaction',
      value: function transaction(storeNames, type, callback) {
        var _this9 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          var result;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return _this9.open();

                case 2:
                  _context10.next = 4;
                  return new Promise(function (resolve, reject) {
                    var txn = _this9._db.transaction(storeNames, type);
                    var done = function done(value) {
                      return resolve(value);
                    };
                    var abort = function abort() {
                      reject(new Error('The transaction was manually aborted'));
                      txn.abort();
                    };
                    txn.onerror = function (evt) {
                      return reject(evt.target.error);
                    };
                    txn.onabort = function (evt) {
                      return reject(evt.target.error);
                    };
                    txn.oncomplete = function () {
                      return resolve();
                    };

                    var stores = {};
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                      for (var _iterator3 = storeNames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var storeName = _step3.value;

                        stores[storeName] = txn.objectStore(storeName);
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

                    callback(stores, done, abort);
                  });

                case 4:
                  result = _context10.sent;
                  return _context10.abrupt('return', result);

                case 6:
                case 'end':
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }))();
      }

      /**
       * Delegates async to a native IDBObjectStore method.
       *
       * @param {string} method The method name.
       * @param {string} storeName The object store name.
       * @param {string} type Can be `readonly` or `readwrite`.
       * @param {...*} args The list of args to pass to the native method.
       * @return {*} The result of the transaction.
       *
       * @private
       */

    }, {
      key: '_call',
      value: function _call(method, storeName, type) {
        for (var _len8 = arguments.length, args = Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++) {
          args[_key8 - 3] = arguments[_key8];
        }

        var _this10 = this;

        return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          var callback;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return _this10.open();

                case 2:
                  callback = function callback(stores, done) {
                    var _stores$storeName;

                    (_stores$storeName = stores[storeName])[method].apply(_stores$storeName, args).onsuccess = function (evt) {
                      done(evt.target.result);
                    };
                  };

                  _context11.next = 5;
                  return _this10.transaction([storeName], type, callback);

                case 5:
                  return _context11.abrupt('return', _context11.sent);

                case 6:
                case 'end':
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }))();
      }

      /**
       * The default onversionchange handler, which closes the database so other
       * connections can open without being blocked.
       *
       * @param {Event} evt
       *
       * @private
       */

    }, {
      key: '_onversionchange',
      value: function _onversionchange(evt) {
        this.close();
      }

      /**
       * Closes the connection opened by `DBWrapper.open()`. Generally this method
       * doesn't need to be called since:
       *   1. It's usually better to keep a connection open since opening
       *      a new connection is somewhat slow.
       *   2. Connections are automatically closed when the reference is
       *      garbage collected.
       * The primary use case for needing to close a connection is when another
       * reference (typically in another tab) needs to upgrade it and would be
       * blocked by the current, open connection.
       *
       * @private
       */

    }, {
      key: 'close',
      value: function close() {
        if (this._db) this._db.close();
      }
    }]);

    return DBWrapper;
  }();

  // Exposed to let users modify the default timeout on a per-instance
  // or global basis.


  DBWrapper.prototype.OPEN_TIMEOUT = 2000;

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

  var _cacheNameDetails = {
    prefix: 'workbox',
    suffix: self.registration.scope,
    googleAnalytics: 'googleAnalytics',
    precache: 'precache',
    runtime: 'runtime'
  };

  var _createCacheName = function _createCacheName(cacheName) {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter(function (value) {
      return value.length > 0;
    }).join('-');
  };

  var cacheNames = {
    updateDetails: function updateDetails(details) {
      Object.keys(_cacheNameDetails).forEach(function (key) {
        if (typeof details[key] !== 'undefined') {
          _cacheNameDetails[key] = details[key];
        }
      });
    },
    getGoogleAnalyticsName: function getGoogleAnalyticsName(userCacheName) {
      return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: function getPrecacheName(userCacheName) {
      return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getRuntimeName: function getRuntimeName(userCacheName) {
      return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    }
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

  var pluginEvents = {
    CACHE_DID_UPDATE: 'cacheDidUpdate',
    CACHE_WILL_UPDATE: 'cacheWillUpdate',
    CACHED_RESPONSE_WILL_BE_USED: 'cachedResponseWillBeUsed',
    FETCH_DID_FAIL: 'fetchDidFail',
    REQUEST_WILL_FETCH: 'requestWillFetch'
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

  var pluginUtils = {
    filter: function filter(plugins, callbackname) {
      return plugins.filter(function (plugin) {
        return callbackname in plugin;
      });
    }
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

  var getFriendlyURL = function getFriendlyURL(url) {
    var urlObj = new URL(url, location);
    if (urlObj.origin === location.origin) {
      return urlObj.pathname;
    }
    return urlObj.href;
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
   * Wrapper around cache.put().
   *
   * Will call `cacheDidUpdate` on plugins if the cache was updated.
   *
   * @param {Object} options
   * @param {string} options.cacheName
   * @param {Request} options.request
   * @param {Response} options.response
   * @param {Event} [options.event]
   * @param {Array<Object>} [options.plugins=[]]
   *
   * @private
   * @memberof module:workbox-core
   */
  var putWrapper = function () {
    var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
      var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          cacheName = _ref36.cacheName,
          request = _ref36.request,
          response = _ref36.response,
          event = _ref36.event,
          _ref36$plugins = _ref36.plugins,
          plugins = _ref36$plugins === undefined ? [] : _ref36$plugins;

      var responseToCache, cache, updatePlugins, oldResponse, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, plugin;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (response) {
                _context12.next = 3;
                break;
              }

              defaultExport.error('Cannot cache non-existent response for ' + ('\'' + getFriendlyURL(request.url) + '\'.'));
              throw new WorkboxError('cache-put-with-no-response', {
                url: getFriendlyURL(request.url)
              });

            case 3:
              _context12.next = 5;
              return _isResponseSafeToCache({ request: request, response: response, event: event, plugins: plugins });

            case 5:
              responseToCache = _context12.sent;

              if (responseToCache) {
                _context12.next = 9;
                break;
              }

              defaultExport.debug('Response \'' + getFriendlyURL(request.url) + '\' will not be ' + 'cached.', responseToCache);
              return _context12.abrupt('return');

            case 9:
              if (!(responseToCache.method && responseToCache.method !== 'GET')) {
                _context12.next = 11;
                break;
              }

              throw new WorkboxError('attempt-to-cache-non-get-request', {
                url: getFriendlyURL(request.url),
                method: responseToCache.method
              });

            case 11:
              _context12.next = 13;
              return caches.open(cacheName);

            case 13:
              cache = _context12.sent;
              updatePlugins = pluginUtils.filter(plugins, pluginEvents.CACHE_DID_UPDATE);

              if (!(updatePlugins.length > 0)) {
                _context12.next = 21;
                break;
              }

              _context12.next = 18;
              return matchWrapper({ cacheName: cacheName, request: request });

            case 18:
              _context12.t0 = _context12.sent;
              _context12.next = 22;
              break;

            case 21:
              _context12.t0 = null;

            case 22:
              oldResponse = _context12.t0;

              defaultExport.debug('Updating the \'' + cacheName + '\' cache with a new Response for ' + (getFriendlyURL(request.url) + '.'));
              _context12.prev = 24;
              _context12.next = 27;
              return cache.put(request, responseToCache);

            case 27:
              _context12.next = 35;
              break;

            case 29:
              _context12.prev = 29;
              _context12.t1 = _context12['catch'](24);

              if (!(_context12.t1.name === 'QuotaExceededError')) {
                _context12.next = 34;
                break;
              }

              _context12.next = 34;
              return executeQuotaErrorCallbacks();

            case 34:
              throw _context12.t1;

            case 35:
              _iteratorNormalCompletion4 = true;
              _didIteratorError4 = false;
              _iteratorError4 = undefined;
              _context12.prev = 38;
              _iterator4 = updatePlugins[Symbol.iterator]();

            case 40:
              if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                _context12.next = 47;
                break;
              }

              plugin = _step4.value;
              _context12.next = 44;
              return plugin[pluginEvents.CACHE_DID_UPDATE].call(plugin, {
                cacheName: cacheName,
                request: request,
                event: event,
                oldResponse: oldResponse,
                newResponse: responseToCache
              });

            case 44:
              _iteratorNormalCompletion4 = true;
              _context12.next = 40;
              break;

            case 47:
              _context12.next = 53;
              break;

            case 49:
              _context12.prev = 49;
              _context12.t2 = _context12['catch'](38);
              _didIteratorError4 = true;
              _iteratorError4 = _context12.t2;

            case 53:
              _context12.prev = 53;
              _context12.prev = 54;

              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }

            case 56:
              _context12.prev = 56;

              if (!_didIteratorError4) {
                _context12.next = 59;
                break;
              }

              throw _iteratorError4;

            case 59:
              return _context12.finish(56);

            case 60:
              return _context12.finish(53);

            case 61:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, this, [[24, 29], [38, 49, 53, 61], [54,, 56, 60]]);
    }));

    return function putWrapper() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * This is a wrapper around cache.match().
   *
   * @param {Object} options
   * @param {string} options.cacheName Name of the cache to match against.
   * @param {Request} options.request The Request that will be used to look up
   *.    cache entries.
   * @param {Event} [options.event] The event that propted the action.
   * @param {Object} [options.matchOptions] Options passed to cache.match().
   * @param {Array<Object>} [options.plugins=[]] Array of plugins.
   * @return {Response} A cached response if available.
   *
   * @private
   * @memberof module:workbox-core
   */
  var matchWrapper = function () {
    var _ref2 = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(_ref37) {
      var cacheName = _ref37.cacheName,
          request = _ref37.request,
          event = _ref37.event,
          matchOptions = _ref37.matchOptions,
          _ref37$plugins = _ref37.plugins,
          plugins = _ref37$plugins === undefined ? [] : _ref37$plugins;

      var cache, cachedResponse, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, plugin;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return caches.open(cacheName);

            case 2:
              cache = _context13.sent;
              _context13.next = 5;
              return cache.match(request, matchOptions);

            case 5:
              cachedResponse = _context13.sent;

              if (cachedResponse) {
                defaultExport.debug('Found a cached response in \'' + cacheName + '\'.');
              } else {
                defaultExport.debug('No cached response found in \'' + cacheName + '\'.');
              }
              _iteratorNormalCompletion5 = true;
              _didIteratorError5 = false;
              _iteratorError5 = undefined;
              _context13.prev = 10;
              _iterator5 = plugins[Symbol.iterator]();

            case 12:
              if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                _context13.next = 22;
                break;
              }

              plugin = _step5.value;

              if (!(pluginEvents.CACHED_RESPONSE_WILL_BE_USED in plugin)) {
                _context13.next = 19;
                break;
              }

              _context13.next = 17;
              return plugin[pluginEvents.CACHED_RESPONSE_WILL_BE_USED].call(plugin, {
                cacheName: cacheName,
                request: request,
                event: event,
                matchOptions: matchOptions,
                cachedResponse: cachedResponse
              });

            case 17:
              cachedResponse = _context13.sent;

              if (cachedResponse) {
                finalAssertExports.isInstance(cachedResponse, Response, {
                  moduleName: 'Plugin',
                  funcName: pluginEvents.CACHED_RESPONSE_WILL_BE_USED,
                  isReturnValueProblem: true
                });
              }

            case 19:
              _iteratorNormalCompletion5 = true;
              _context13.next = 12;
              break;

            case 22:
              _context13.next = 28;
              break;

            case 24:
              _context13.prev = 24;
              _context13.t0 = _context13['catch'](10);
              _didIteratorError5 = true;
              _iteratorError5 = _context13.t0;

            case 28:
              _context13.prev = 28;
              _context13.prev = 29;

              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }

            case 31:
              _context13.prev = 31;

              if (!_didIteratorError5) {
                _context13.next = 34;
                break;
              }

              throw _iteratorError5;

            case 34:
              return _context13.finish(31);

            case 35:
              return _context13.finish(28);

            case 36:
              return _context13.abrupt('return', cachedResponse);

            case 37:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, this, [[10, 24, 28, 36], [29,, 31, 35]]);
    }));

    return function matchWrapper(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * response.ok) to determine if the Response is safe and valid to cache.
   *
   * @param {Object} options
   * @param {Request} options.request
   * @param {Response} options.response
   * @param {Event} [options.event]
   * @param {Array<Object>} [options.plugins=[]]
   * @return {Promise<Response>}
   *
   * @private
   * @memberof module:workbox-core
   */
  var _isResponseSafeToCache = function () {
    var _ref3 = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(_ref38) {
      var request = _ref38.request,
          response = _ref38.response,
          event = _ref38.event,
          plugins = _ref38.plugins;

      var responseToCache, pluginsUsed, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, plugin;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              responseToCache = response;
              pluginsUsed = false;
              _iteratorNormalCompletion6 = true;
              _didIteratorError6 = false;
              _iteratorError6 = undefined;
              _context14.prev = 5;
              _iterator6 = plugins[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                _context14.next = 20;
                break;
              }

              plugin = _step6.value;

              if (!(pluginEvents.CACHE_WILL_UPDATE in plugin)) {
                _context14.next = 17;
                break;
              }

              pluginsUsed = true;
              _context14.next = 13;
              return plugin[pluginEvents.CACHE_WILL_UPDATE].call(plugin, {
                request: request,
                response: responseToCache,
                event: event
              });

            case 13:
              responseToCache = _context14.sent;

              if (responseToCache) {
                finalAssertExports.isInstance(responseToCache, Response, {
                  moduleName: 'Plugin',
                  funcName: pluginEvents.CACHE_WILL_UPDATE,
                  isReturnValueProblem: true
                });
              }

              if (responseToCache) {
                _context14.next = 17;
                break;
              }

              return _context14.abrupt('break', 20);

            case 17:
              _iteratorNormalCompletion6 = true;
              _context14.next = 7;
              break;

            case 20:
              _context14.next = 26;
              break;

            case 22:
              _context14.prev = 22;
              _context14.t0 = _context14['catch'](5);
              _didIteratorError6 = true;
              _iteratorError6 = _context14.t0;

            case 26:
              _context14.prev = 26;
              _context14.prev = 27;

              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }

            case 29:
              _context14.prev = 29;

              if (!_didIteratorError6) {
                _context14.next = 32;
                break;
              }

              throw _iteratorError6;

            case 32:
              return _context14.finish(29);

            case 33:
              return _context14.finish(26);

            case 34:

              if (!pluginsUsed) {
                {
                  if (!responseToCache.ok) {
                    if (responseToCache.status === 0) {
                      defaultExport.warn('The response for \'' + request.url + '\' is an opaque ' + 'response. The caching strategy that you\'re using will not ' + 'cache opaque responses by default.');
                    } else {
                      defaultExport.debug('The response for \'' + request.url + '\' returned ' + ('a status code of \'' + response.status + '\' and won\'t be cached as a ') + 'result.');
                    }
                  }
                }
                responseToCache = responseToCache.ok ? responseToCache : null;
              }

              return _context14.abrupt('return', responseToCache ? responseToCache : null);

            case 36:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, this, [[5, 22, 26, 34], [27,, 29, 33]]);
    }));

    return function _isResponseSafeToCache(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var cacheWrapper = {
    put: putWrapper,
    match: matchWrapper
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
   * Wrapper around the fetch API.
   *
   * Will call requestWillFetch on available plugins.
   *
   * @param {Object} options
   * @param {Request|string} options.request
   * @param {Object} [options.fetchOptions]
   * @param {Event} [options.event]
   * @param {Array<Object>} [options.plugins=[]]
   * @return {Promise<Response>}
   *
   * @private
   * @memberof module:workbox-core
   */
  var wrappedFetch = function () {
    var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref39) {
      var request = _ref39.request,
          fetchOptions = _ref39.fetchOptions,
          event = _ref39.event,
          _ref39$plugins = _ref39.plugins,
          plugins = _ref39$plugins === undefined ? [] : _ref39$plugins;

      var possiblePreloadResponse, failedFetchPlugins, originalRequest, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, plugin, pluginFilteredRequest, fetchResponse, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _plugin;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              if (!(event && event.preloadResponse)) {
                _context15.next = 7;
                break;
              }

              _context15.next = 3;
              return event.preloadResponse;

            case 3:
              possiblePreloadResponse = _context15.sent;

              if (!possiblePreloadResponse) {
                _context15.next = 7;
                break;
              }

              defaultExport.log('Using a preloaded navigation response for ' + ('\'' + getFriendlyURL(request.url) + '\''));
              return _context15.abrupt('return', possiblePreloadResponse);

            case 7:

              if (typeof request === 'string') {
                request = new Request(request);
              }

              finalAssertExports.isInstance(request, Request, {
                paramName: request,
                expectedClass: 'Request',
                moduleName: 'workbox-core',
                className: 'fetchWrapper',
                funcName: 'wrappedFetch'
              });
              failedFetchPlugins = pluginUtils.filter(plugins, pluginEvents.FETCH_DID_FAIL);

              // If there is a fetchDidFail plugin, we need to save a clone of the
              // original request before it's either modified by a requestWillFetch
              // plugin or before the original request's body is consumed via fetch().

              originalRequest = failedFetchPlugins.length > 0 ? request.clone() : null;
              _context15.prev = 11;
              _iteratorNormalCompletion7 = true;
              _didIteratorError7 = false;
              _iteratorError7 = undefined;
              _context15.prev = 15;
              _iterator7 = plugins[Symbol.iterator]();

            case 17:
              if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                _context15.next = 27;
                break;
              }

              plugin = _step7.value;

              if (!(pluginEvents.REQUEST_WILL_FETCH in plugin)) {
                _context15.next = 24;
                break;
              }

              _context15.next = 22;
              return plugin[pluginEvents.REQUEST_WILL_FETCH].call(plugin, {
                request: request.clone(),
                event: event
              });

            case 22:
              request = _context15.sent;

              if (request) {
                finalAssertExports.isInstance(request, Request, {
                  moduleName: 'Plugin',
                  funcName: pluginEvents.CACHED_RESPONSE_WILL_BE_USED,
                  isReturnValueProblem: true
                });
              }

            case 24:
              _iteratorNormalCompletion7 = true;
              _context15.next = 17;
              break;

            case 27:
              _context15.next = 33;
              break;

            case 29:
              _context15.prev = 29;
              _context15.t0 = _context15['catch'](15);
              _didIteratorError7 = true;
              _iteratorError7 = _context15.t0;

            case 33:
              _context15.prev = 33;
              _context15.prev = 34;

              if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
              }

            case 36:
              _context15.prev = 36;

              if (!_didIteratorError7) {
                _context15.next = 39;
                break;
              }

              throw _iteratorError7;

            case 39:
              return _context15.finish(36);

            case 40:
              return _context15.finish(33);

            case 41:
              _context15.next = 46;
              break;

            case 43:
              _context15.prev = 43;
              _context15.t1 = _context15['catch'](11);
              throw new WorkboxError('plugin-error-request-will-fetch', {
                thrownError: _context15.t1
              });

            case 46:

              // The request can be altered by plugins with `requestWillFetch` making
              // the original request (Most likely from a `fetch` event) to be different
              // to the Request we make. Pass both to `fetchDidFail` to aid debugging.
              pluginFilteredRequest = request.clone();
              _context15.prev = 47;
              _context15.next = 50;
              return fetch(request, fetchOptions);

            case 50:
              fetchResponse = _context15.sent;

              defaultExport.debug('Network request for ' + ('\'' + getFriendlyURL(request.url) + '\' returned a response with ') + ('status \'' + fetchResponse.status + '\'.'));
              return _context15.abrupt('return', fetchResponse);

            case 55:
              _context15.prev = 55;
              _context15.t2 = _context15['catch'](47);

              defaultExport.error('Network request for ' + ('\'' + getFriendlyURL(request.url) + '\' threw an error.'), _context15.t2);
              _iteratorNormalCompletion8 = true;
              _didIteratorError8 = false;
              _iteratorError8 = undefined;
              _context15.prev = 61;
              _iterator8 = failedFetchPlugins[Symbol.iterator]();

            case 63:
              if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                _context15.next = 70;
                break;
              }

              _plugin = _step8.value;
              _context15.next = 67;
              return _plugin[pluginEvents.FETCH_DID_FAIL].call(_plugin, {
                error: _context15.t2,
                event: event,
                originalRequest: originalRequest.clone(),
                request: pluginFilteredRequest.clone()
              });

            case 67:
              _iteratorNormalCompletion8 = true;
              _context15.next = 63;
              break;

            case 70:
              _context15.next = 76;
              break;

            case 72:
              _context15.prev = 72;
              _context15.t3 = _context15['catch'](61);
              _didIteratorError8 = true;
              _iteratorError8 = _context15.t3;

            case 76:
              _context15.prev = 76;
              _context15.prev = 77;

              if (!_iteratorNormalCompletion8 && _iterator8.return) {
                _iterator8.return();
              }

            case 79:
              _context15.prev = 79;

              if (!_didIteratorError8) {
                _context15.next = 82;
                break;
              }

              throw _iteratorError8;

            case 82:
              return _context15.finish(79);

            case 83:
              return _context15.finish(76);

            case 84:
              throw _context15.t2;

            case 85:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, this, [[11, 43], [15, 29, 33, 41], [34,, 36, 40], [47, 55], [61, 72, 76, 84], [77,, 79, 83]]);
    }));

    return function wrappedFetch(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var fetchWrapper = {
    fetch: wrappedFetch
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

  var _private = /*#__PURE__*/Object.freeze({
    DBWrapper: DBWrapper,
    WorkboxError: WorkboxError,
    assert: finalAssertExports,
    cacheNames: cacheNames,
    cacheWrapper: cacheWrapper,
    fetchWrapper: fetchWrapper,
    getFriendlyURL: getFriendlyURL,
    logger: defaultExport
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

  /**
   * Logs a warning to the user recommending changing
   * to max-age=0 or no-cache.
   *
   * @param {string} cacheControlHeader
   *
   * @private
   */
  function showWarning(cacheControlHeader) {
    var docsUrl = 'https://developers.google.com/web/tools/workbox/guides/service-worker-checklist#cache-control_of_your_service_worker_file';
    defaultExport.warn('You are setting a \'cache-control\' header of ' + ('\'' + cacheControlHeader + '\' on your service worker file. This should be ') + 'set to \'max-age=0\' or \'no-cache\' to ensure the latest service worker ' + ('is served to your users. Learn more here: ' + docsUrl));
  }

  /**
   * Checks for cache-control header on SW file and
   * warns the developer if it exists with a value
   * other than max-age=0 or no-cache.
   *
   * @return {Promise}
   * @private
   */
  function checkSWFileCacheHeaders() {
    // This is wrapped as an iife to allow async/await while making
    //  rollup exclude it in builds.
    return babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
      var swFile, response, cacheControlHeader, maxAgeResult;
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.prev = 0;
              swFile = self.location.href;
              _context16.next = 4;
              return fetch(swFile);

            case 4:
              response = _context16.sent;

              if (response.ok) {
                _context16.next = 7;
                break;
              }

              return _context16.abrupt('return');

            case 7:
              if (response.headers.has('cache-control')) {
                _context16.next = 9;
                break;
              }

              return _context16.abrupt('return');

            case 9:
              cacheControlHeader = response.headers.get('cache-control');
              maxAgeResult = /max-age\s*=\s*(\d*)/g.exec(cacheControlHeader);

              if (!maxAgeResult) {
                _context16.next = 14;
                break;
              }

              if (!(parseInt(maxAgeResult[1], 10) === 0)) {
                _context16.next = 14;
                break;
              }

              return _context16.abrupt('return');

            case 14:
              if (!(cacheControlHeader.indexOf('no-cache') !== -1)) {
                _context16.next = 16;
                break;
              }

              return _context16.abrupt('return');

            case 16:
              if (!(cacheControlHeader.indexOf('no-store') !== -1)) {
                _context16.next = 18;
                break;
              }

              return _context16.abrupt('return');

            case 18:

              showWarning(cacheControlHeader);
              _context16.next = 23;
              break;

            case 21:
              _context16.prev = 21;
              _context16.t0 = _context16['catch'](0);

            case 23:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, this, [[0, 21]]);
    })
    // NOOP
    )();
  }

  var finalCheckSWFileCacheHeaders = checkSWFileCacheHeaders;

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
   * This class is never exposed publicly. Inidividual methods are exposed
   * using jsdoc alias commands.
   *
   * @memberof workbox.core
   * @private
   */

  var WorkboxCore = function () {
    /**
     * You should not instantiate this object directly.
     *
     * @private
     */
    function WorkboxCore() {
      _classCallCheck(this, WorkboxCore);

      // Give our version strings something to hang off of.
      try {
        self.workbox.v = self.workbox.v || {};
      } catch (err) {}
      // NOOP


      // A WorkboxCore instance must be exported before we can use the logger.
      // This is so it can get the current log level.
      {
        var padding = '   ';
        defaultExport.groupCollapsed('Welcome to Workbox!');
        defaultExport.unprefixed.log('You are currently using a development build. ' + 'By default this will switch to prod builds when not on localhost. ' + 'You can force this with workbox.setConfig({debug: true|false}).');
        defaultExport.unprefixed.log('\uD83D\uDCD6 Read the guides and documentation\n' + (padding + 'https://developers.google.com/web/tools/workbox/'));
        defaultExport.unprefixed.log('\u2753 Use the [workbox] tag on Stack Overflow to ask questions\n' + (padding + 'https://stackoverflow.com/questions/ask?tags=workbox'));
        defaultExport.unprefixed.log('\uD83D\uDC1B Found a bug? Report it on GitHub\n' + (padding + 'https://github.com/GoogleChrome/workbox/issues/new'));
        defaultExport.groupEnd();

        if (typeof finalCheckSWFileCacheHeaders === 'function') {
          finalCheckSWFileCacheHeaders();
        }
      }
    }

    /**
     * Get the current cache names used by Workbox.
     *
     * `cacheNames.precache` is used for precached assets,
     * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
     * store `analytics.js`,
     * and `cacheNames.runtime` is used for everything else.
     *
     * @return {Object} An object with `precache` and `runtime` cache names.
     *
     * @alias workbox.core.cacheNames
     */


    _createClass(WorkboxCore, [{
      key: 'setCacheNameDetails',


      /**
       * You can alter the default cache names used by the Workbox modules by
       * changing the cache name details.
       *
       * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
       *
       * @param {Object} details
       * @param {Object} details.prefix The string to add to the beginning of
       * the precache and runtime cache names.
       * @param {Object} details.suffix The string to add to the end of
       * the precache and runtime cache names.
       * @param {Object} details.precache The cache name to use for precache
       * caching.
       * @param {Object} details.runtime The cache name to use for runtime caching.
       * @param {Object} details.googleAnalytics The cache name to use for
       * `workbox-google-analytics` caching.
       *
       * @alias workbox.core.setCacheNameDetails
       */
      value: function setCacheNameDetails(details) {
        {
          Object.keys(details).forEach(function (key) {
            finalAssertExports.isType(details[key], 'string', {
              moduleName: 'workbox-core',
              className: 'WorkboxCore',
              funcName: 'setCacheNameDetails',
              paramName: 'details.' + key
            });
          });

          if ('precache' in details && details.precache.length === 0) {
            throw new WorkboxError('invalid-cache-name', {
              cacheNameId: 'precache',
              value: details.precache
            });
          }

          if ('runtime' in details && details.runtime.length === 0) {
            throw new WorkboxError('invalid-cache-name', {
              cacheNameId: 'runtime',
              value: details.runtime
            });
          }

          if ('googleAnalytics' in details && details.googleAnalytics.length === 0) {
            throw new WorkboxError('invalid-cache-name', {
              cacheNameId: 'googleAnalytics',
              value: details.googleAnalytics
            });
          }
        }

        cacheNames.updateDetails(details);
      }

      /**
       * Get the current log level.
       *
       * @return {number}.
       *
       * @alias workbox.core.logLevel
       */

    }, {
      key: 'setLogLevel',


      /**
       * Set the current log level passing in one of the values from
       * [LOG_LEVELS]{@link module:workbox-core.LOG_LEVELS}.
       *
       * @param {number} newLevel The new log level to use.
       *
       * @alias workbox.core.setLogLevel
       */
      value: function setLogLevel(newLevel) {
        {
          finalAssertExports.isType(newLevel, 'number', {
            moduleName: 'workbox-core',
            className: 'WorkboxCore',
            funcName: 'logLevel [setter]',
            paramName: 'logLevel'
          });
        }

        if (newLevel > LOG_LEVELS.silent || newLevel < LOG_LEVELS.debug) {
          throw new WorkboxError('invalid-value', {
            paramName: 'logLevel',
            validValueDescription: 'Please use a value from LOG_LEVELS, i.e ' + '\'logLevel = workbox.core.LOG_LEVELS.debug\'.',
            value: newLevel
          });
        }

        setLoggerLevel(newLevel);
      }
    }, {
      key: 'cacheNames',
      get: function get() {
        return {
          googleAnalytics: cacheNames.getGoogleAnalyticsName(),
          precache: cacheNames.getPrecacheName(),
          runtime: cacheNames.getRuntimeName()
        };
      }
    }, {
      key: 'logLevel',
      get: function get() {
        return getLoggerLevel();
      }
    }]);

    return WorkboxCore;
  }();

  var defaultExport$1 = new WorkboxCore();

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

  var finalExports = Object.assign(defaultExport$1, {
    _private: _private,
    LOG_LEVELS: LOG_LEVELS,
    registerQuotaErrorCallback: registerQuotaErrorCallback
  });

  return finalExports;
}();

//# sourceMappingURL=workbox-core.dev.js.map