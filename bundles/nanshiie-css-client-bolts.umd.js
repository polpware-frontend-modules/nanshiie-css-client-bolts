(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common/http'), require('rxjs/operators'), require('@polpware/ngx-appkit-contracts-alpha'), require('@fortawesome/free-solid-svg-icons'), require('@angular/common'), require('@fortawesome/angular-fontawesome')) :
    typeof define === 'function' && define.amd ? define('@nanshiie/css-client-bolts', ['exports', '@angular/core', '@angular/forms', '@angular/common/http', 'rxjs/operators', '@polpware/ngx-appkit-contracts-alpha', '@fortawesome/free-solid-svg-icons', '@angular/common', '@fortawesome/angular-fontawesome'], factory) :
    (global = global || self, factory((global.nanshiie = global.nanshiie || {}, global.nanshiie['css-client-bolts'] = {}), global.ng.core, global.ng.forms, global.ng.common.http, global.rxjs.operators, global.ngxAppkitContractsAlpha, global.freeSolidSvgIcons, global.ng.common, global.angularFontawesome));
}(this, (function (exports, core, forms, http, operators, ngxAppkitContractsAlpha, freeSolidSvgIcons, common, angularFontawesome) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/dsm-settings.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IDsmSettingsModel() { }
    if (false) {
        /** @type {?} */
        IDsmSettingsModel.prototype.serverUrl;
        /** @type {?} */
        IDsmSettingsModel.prototype.serverApiKey;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/dsu-spec.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IDsuSpecModel() { }
    if (false) {
        /** @type {?} */
        IDsuSpecModel.prototype.id;
        /** @type {?} */
        IDsuSpecModel.prototype.deviceUniqueId;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.ipV4;
        /** @type {?} */
        IDsuSpecModel.prototype.host;
        /** @type {?} */
        IDsuSpecModel.prototype.protocol;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.prettyProtocol;
        /** @type {?} */
        IDsuSpecModel.prototype.port;
        /** @type {?} */
        IDsuSpecModel.prototype.deviceName;
        /** @type {?} */
        IDsuSpecModel.prototype.deviceArch;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.prettyDeviceArch;
        /** @type {?} */
        IDsuSpecModel.prototype.capacity;
        /** @type {?} */
        IDsuSpecModel.prototype.threshold;
        /** @type {?} */
        IDsuSpecModel.prototype.apiKey;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.rank;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.status;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.prettyStatus;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.usage;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.discoverEndpoint;
        /** @type {?|undefined} */
        IDsuSpecModel.prototype.ipAddresses;
    }
    /**
     * @record
     */
    function IDsuSpecUpdatedModel() { }
    if (false) {
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.ipV4;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.host;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.protocol;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.port;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.deviceName;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.deviceArch;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.capacity;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.threshold;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.apiKey;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.status;
        /** @type {?|undefined} */
        IDsuSpecUpdatedModel.prototype.discoverEndpoint;
    }
    /**
     * @param {?} oldSpec
     * @param {?} newSpec
     * @return {?}
     */
    function calculateDsuSpecChanges(oldSpec, newSpec) {
        /** @type {?} */
        var fields = [
            'ipV4',
            'host',
            'protocol',
            'port',
            'deviceName',
            'deviceArch',
            'capacity',
            'threshold',
            'apiKey',
            'status',
            'discoverEndpoint'
        ];
        /** @type {?} */
        var ret = {};
        fields.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (newSpec[f] !== oldSpec[f]) {
                ret[f] = newSpec[f];
            }
        }));
        return ret;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/runtime-configuration.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // We on purpose use get/set to retrieve values and
    // store values onto corresponding private properties,
    // as these properties may change at run time. We need to
    // lazily decide the values of these properties. 
    var RuntimeConfiguration = /** @class */ (function () {
        function RuntimeConfiguration() {
        }
        Object.defineProperty(RuntimeConfiguration.prototype, "dsmSettingsPath", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsmSettingsPath;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsmSettingsPath = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "dsuLookupPath", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsuLookupPath;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsuLookupPath = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "dsuRegistarPath", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsuRegistarPath;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsuRegistarPath = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "dsuUpdatePath", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsuUpdatePath;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsuUpdatePath = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "dsuUndoRegisterPath", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsuUndoRegisterPath;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsuUndoRegisterPath = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "dsmServerUrl", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsmServerUrl;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsmServerUrl = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "dsmServerApiKey4DSU", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsmServerApiKey4DSU;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsmServerApiKey4DSU = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "dsmServerApiKey4DSP", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsmServerApiKey4DSP;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsmServerApiKey4DSP = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "dsmServerApiKey4DSM", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dsmServerApiKey4DSM;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dsmServerApiKey4DSM = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "discoverDSMEndpoint", {
            get: /**
             * @return {?}
             */
            function () {
                return 'api/discover';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "pingDSMEndpoint4DSU", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pingDSMFromDSU;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._pingDSMFromDSU = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "pingDSMEndpoint4DSP", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pingDSMFromDSP;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._pingDSMFromDSP = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "pingDSMEndpoint4DSM", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pingDSMFromDSM;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._pingDSMFromDSM = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RuntimeConfiguration.prototype, "hostReservedDiskSettingPath", {
            get: /**
             * @return {?}
             */
            function () {
                return this._hostReservedDiskSettingPath;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._hostReservedDiskSettingPath = value;
            },
            enumerable: true,
            configurable: true
        });
        RuntimeConfiguration.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ RuntimeConfiguration.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function RuntimeConfiguration_Factory() { return new RuntimeConfiguration(); }, token: RuntimeConfiguration, providedIn: "root" });
        return RuntimeConfiguration;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsmSettingsPath;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsuLookupPath;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsuRegistarPath;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsuUpdatePath;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsuUndoRegisterPath;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsmServerUrl;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsmServerApiKey4DSU;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsmServerApiKey4DSP;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._dsmServerApiKey4DSM;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._pingDSMFromDSU;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._pingDSMFromDSP;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._pingDSMFromDSM;
        /**
         * @type {?}
         * @private
         */
        RuntimeConfiguration.prototype._hostReservedDiskSettingPath;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/dsm-settings-rw.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* Read and write dsm settings */
    var DsmSettingsRWService = /** @class */ (function () {
        function DsmSettingsRWService(_httpClient, _runtimeConfiguration) {
            this._httpClient = _httpClient;
            this._runtimeConfiguration = _runtimeConfiguration;
        }
        /**
         * @param {?=} checkCache
         * @return {?}
         */
        DsmSettingsRWService.prototype.readAsync = /**
         * @param {?=} checkCache
         * @return {?}
         */
        function (checkCache) {
            if (checkCache === void 0) { checkCache = true; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (checkCache && this._cached) {
                                return [2 /*return*/, this._cached];
                            }
                            return [4 /*yield*/, this._httpClient.get(this._runtimeConfiguration.dsmSettingsPath)
                                    .pipe(operators.tap((/**
                                 * @param {?} a
                                 * @return {?}
                                 */
                                function (a) {
                                    if (a && a.serverApiKey && a.serverUrl) {
                                        _this._cached = a;
                                        _this._runtimeConfiguration.dsmServerUrl = a.serverUrl;
                                        _this._runtimeConfiguration.dsmServerApiKey4DSU = a.serverApiKey;
                                    }
                                }))).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} data
         * @return {?}
         */
        DsmSettingsRWService.prototype.writeAsync = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._httpClient.post(this._runtimeConfiguration.dsmSettingsPath, data)
                                .pipe(operators.tap((/**
                             * @param {?} _
                             * @return {?}
                             */
                            function (_) {
                                _this._cached = data;
                                _this._runtimeConfiguration.dsmServerUrl = data.serverUrl;
                                _this._runtimeConfiguration.dsmServerApiKey4DSU = data.serverApiKey;
                            }))).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DsmSettingsRWService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        DsmSettingsRWService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: RuntimeConfiguration }
        ]; };
        /** @nocollapse */ DsmSettingsRWService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DsmSettingsRWService_Factory() { return new DsmSettingsRWService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(RuntimeConfiguration)); }, token: DsmSettingsRWService, providedIn: "root" });
        return DsmSettingsRWService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DsmSettingsRWService.prototype._cached;
        /**
         * @type {?}
         * @private
         */
        DsmSettingsRWService.prototype._httpClient;
        /**
         * @type {?}
         * @private
         */
        DsmSettingsRWService.prototype._runtimeConfiguration;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/dsm-utilities.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DsmUtilitiesService = /** @class */ (function () {
        function DsmUtilitiesService(_httpClient, _configuration) {
            this._httpClient = _httpClient;
            this._configuration = _configuration;
        }
        /**
         * @param {?} serverUrl
         * @return {?}
         */
        DsmUtilitiesService.prototype.discoverEndpoints = /**
         * @param {?} serverUrl
         * @return {?}
         */
        function (serverUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._httpClient.get(serverUrl + '/' + this._configuration.discoverDSMEndpoint)
                                .pipe(operators.tap((/**
                             * @param {?} a
                             * @return {?}
                             */
                            function (a) {
                                a.pingFromDSU && (_this._configuration.pingDSMEndpoint4DSU = a.pingFromDSU);
                                a.pingFromDSP && (_this._configuration.pingDSMEndpoint4DSP = a.pingFromDSP);
                                a.pingFromDSM && (_this._configuration.pingDSMEndpoint4DSM = a.pingFromDSM);
                            })))
                                .toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} serverUrl
         * @param {?} apiKey
         * @return {?}
         */
        DsmUtilitiesService.prototype.pingFromDSPAsync = /**
         * @param {?} serverUrl
         * @param {?} apiKey
         * @return {?}
         */
        function (serverUrl, apiKey) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSP, {
                                headers: new http.HttpHeaders().set('X-Api-Key', apiKey)
                            }).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} serverUrl
         * @param {?} apiKey
         * @return {?}
         */
        DsmUtilitiesService.prototype.pingFromDSUAsync = /**
         * @param {?} serverUrl
         * @param {?} apiKey
         * @return {?}
         */
        function (serverUrl, apiKey) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSU, {
                                headers: new http.HttpHeaders().set('X-Api-Key', apiKey)
                            }).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} serverUrl
         * @param {?} apiKey
         * @return {?}
         */
        DsmUtilitiesService.prototype.pingFromDSMAsync = /**
         * @param {?} serverUrl
         * @param {?} apiKey
         * @return {?}
         */
        function (serverUrl, apiKey) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSM, {
                                headers: new http.HttpHeaders().set('X-Api-Key', apiKey)
                            }).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DsmUtilitiesService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DsmUtilitiesService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: RuntimeConfiguration }
        ]; };
        /** @nocollapse */ DsmUtilitiesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DsmUtilitiesService_Factory() { return new DsmUtilitiesService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(RuntimeConfiguration)); }, token: DsmUtilitiesService, providedIn: "root" });
        return DsmUtilitiesService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DsmUtilitiesService.prototype._httpClient;
        /**
         * @type {?}
         * @private
         */
        DsmUtilitiesService.prototype._configuration;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dsm-settings/dsm-settings-form.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IStepProgress() { }
    if (false) {
        /** @type {?} */
        IStepProgress.prototype.action;
        /** @type {?} */
        IStepProgress.prototype.status;
    }
    var DsmSettingsFormComponent = /** @class */ (function () {
        function DsmSettingsFormComponent(_rwService, _utilitiesService, alertServiceProvider, translateServiceProvicer, formBuilder) {
            this._rwService = _rwService;
            this._utilitiesService = _utilitiesService;
            this.steps = [];
            this._alertService = alertServiceProvider.get();
            this.translator = translateServiceProvicer.get();
            this.form = formBuilder.group({
                serverUrl: new forms.FormControl('', { validators: [forms.Validators.required] }),
                serverApiKey: new forms.FormControl('', { validators: [forms.Validators.required] })
            });
        }
        Object.defineProperty(DsmSettingsFormComponent.prototype, "serverUrl", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('serverUrl'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsmSettingsFormComponent.prototype, "serverApiKey", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('serverApiKey'); },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DsmSettingsFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._rwService.readAsync()
                .then((/**
             * @param {?} a
             * @return {?}
             */
            function (a) {
                if (a.serverUrl && a.serverApiKey) {
                    _this.form.setValue(a);
                    // Disable it
                    _this.form.disable();
                }
            }));
        };
        /**
         * @param {?} flag
         * @param {?} evt
         * @return {?}
         */
        DsmSettingsFormComponent.prototype.enable = /**
         * @param {?} flag
         * @param {?} evt
         * @return {?}
         */
        function (flag, evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (flag) {
                this.form.enable();
            }
            else {
                this.form.disable();
                this.alertMessage = '';
                this.alertType = '';
                this.steps = [];
            }
        };
        /**
         * @return {?}
         */
        DsmSettingsFormComponent.prototype.preSubmit = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var newServerUrl, newServerApiKey, a, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // Assuming that the values to be submitted are new and valid.
                            // todo: Progress
                            this.passCheck = false;
                            this.steps = [];
                            this.alertType = 'alert-info';
                            this.alertMessage = "Verifying DSM Information";
                            newServerUrl = this.serverUrl.value;
                            newServerApiKey = this.serverApiKey.value;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            this.steps.push({ action: 'Connecting to DSM ...', status: '' });
                            return [4 /*yield*/, this._utilitiesService.discoverEndpoints(newServerUrl)];
                        case 2:
                            a = _b.sent();
                            this.steps[this.steps.length - 1].status = 'Ok';
                            this.steps.push({ action: 'Validating API Key ...', status: '' });
                            return [4 /*yield*/, this._utilitiesService.pingFromDSUAsync(newServerUrl, newServerApiKey)];
                        case 3:
                            _b.sent();
                            this.steps[this.steps.length - 1].status = 'Ok';
                            this.passCheck = true;
                            this.alertType = 'alert-success';
                            return [3 /*break*/, 5];
                        case 4:
                            _a = _b.sent();
                            this.steps[this.steps.length - 1].status = 'Error';
                            this.alertType = 'alert-danger';
                            this.alertMessage = 'Fail to verify DSM information!';
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        DsmSettingsFormComponent.prototype.submit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Assuming that the values to be submitted are new and valid.
            // todo: Progress
            this.alertType = 'alert-info';
            this.alertMessage = "Submitting ...";
            this._rwService.writeAsync(this.form.value)
                .then((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                // notify message                
                _this.alertType = 'alert-success';
                _this.alertMessage = "Just updated successfully.";
                _this.form.disable();
                _this._alertService.showMessage('DSM Settings Updated', 'You just updated DSM Settings!', ngxAppkitContractsAlpha.MessageSeverity.success);
            }), (/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.alertType = 'alert-danger';
                _this.alertMessage = 'Something went wrong!';
            }));
        };
        DsmSettingsFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'css-dsm-settings-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"serverUrl\">DSM Server URL</label>\n        <input formControlName=\"serverUrl\" required \n            type=\"text\" class=\"form-control\" id=\"serverUrl\" aria-describedby=\"serverUrlHelper\">\n        <small id=\"serverUrlHelper\" class=\"form-text text-muted\">\n            A DSM URL like <strong>https://dsm.cloudbodyguard.com</strong>\n        </small>\n        <div *ngIf=\"serverUrl.invalid && (serverUrl.dirty || serverUrl.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"serverUrl.errors.required\">\n                Server URL is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"form-group\">\n        <label for=\"serverApiKey\">DSM Server API Key</label>\n        <input formControlName=\"serverApiKey\" required\n               type=\"text\" class=\"form-control\" id=\"serverApiKey\" aria-describedby=\"serverApiKeyHelper\">\n        <small id=\"serverApiKeyHelper\" class=\"form-text text-muted\">\n            Please consult with DSM administrator for this value.\n        </small>\n        <div *ngIf=\"serverApiKey.invalid && (serverApiKey.dirty || serverApiKey.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"serverApiKey.errors.required\">\n                Server API Key is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"alert\" [ngClass]=\"alertType\">\n        <h6>{{alertMessage}}</h6>\n        <ol>\n            <li *ngFor=\"let m of steps\">\n                <span>{{m.action}}</span>\n                <strong class=\"ml-2\">{{m.status}}</strong>\n            </li>\n        </ol>\n    </div>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"button\" class=\"btn btn-warning px-4\" [disabled]=\"form.invalid || passCheck\" (click)=\"preSubmit()\">Verify</button>            \n            <button type=\"submit\" class=\"ml-2 btn btn-primary px-4\" [disabled]=\"form.invalid || !passCheck\">Submit</button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DsmSettingsFormComponent.ctorParameters = function () { return [
            { type: DsmSettingsRWService },
            { type: DsmUtilitiesService },
            { type: ngxAppkitContractsAlpha.AlertServiceAbstractProvider },
            { type: ngxAppkitContractsAlpha.TranslationServiceAbstractProvider },
            { type: forms.FormBuilder }
        ]; };
        return DsmSettingsFormComponent;
    }());
    if (false) {
        /** @type {?} */
        DsmSettingsFormComponent.prototype.form;
        /** @type {?} */
        DsmSettingsFormComponent.prototype.alertMessage;
        /** @type {?} */
        DsmSettingsFormComponent.prototype.alertType;
        /** @type {?} */
        DsmSettingsFormComponent.prototype.passCheck;
        /** @type {?} */
        DsmSettingsFormComponent.prototype.steps;
        /**
         * @type {?}
         * @private
         */
        DsmSettingsFormComponent.prototype._alertService;
        /** @type {?} */
        DsmSettingsFormComponent.prototype.translator;
        /**
         * @type {?}
         * @private
         */
        DsmSettingsFormComponent.prototype._rwService;
        /**
         * @type {?}
         * @private
         */
        DsmSettingsFormComponent.prototype._utilitiesService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/dsu-registar.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DsuRegistarService = /** @class */ (function () {
        function DsuRegistarService(_httpClient, _runtimeConfiguration) {
            this._httpClient = _httpClient;
            this._runtimeConfiguration = _runtimeConfiguration;
        }
        /**
         * @param {?} deviceUniqueId
         * @return {?}
         */
        DsuRegistarService.prototype.getByUniqueIdAsync = /**
         * @param {?} deviceUniqueId
         * @return {?}
         */
        function (deviceUniqueId) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = this._runtimeConfiguration.dsmServerUrl +
                                this._runtimeConfiguration.dsuLookupPath + '/' +
                                deviceUniqueId;
                            return [4 /*yield*/, this._httpClient.get(url)
                                    .toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} data
         * @return {?}
         */
        DsuRegistarService.prototype.registerAsync = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = this._runtimeConfiguration.dsmServerUrl +
                                this._runtimeConfiguration.dsuRegistarPath;
                            return [4 /*yield*/, this._httpClient.post(url, data, {
                                    headers: new http.HttpHeaders({
                                        'Content-Type': 'application/json'
                                    })
                                }).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} deviceUniqueId
         * @param {?} data
         * @return {?}
         */
        DsuRegistarService.prototype.updateByUniqueIdAsync = /**
         * @param {?} deviceUniqueId
         * @param {?} data
         * @return {?}
         */
        function (deviceUniqueId, data) {
            return __awaiter(this, void 0, void 0, function () {
                var patchData, url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            patchData = Object.keys(data).map((/**
                             * @param {?} k
                             * @return {?}
                             */
                            function (k) {
                                return {
                                    'op': 'add',
                                    'path': '/' + k,
                                    'value': data[k]
                                };
                            }));
                            url = this._runtimeConfiguration.dsmServerUrl +
                                this._runtimeConfiguration.dsuUpdatePath + '/' +
                                deviceUniqueId;
                            return [4 /*yield*/, this._httpClient.patch(url, patchData, {
                                    headers: new http.HttpHeaders({
                                        'Content-Type': 'application/json'
                                    })
                                }).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} entityId
         * @return {?}
         */
        DsuRegistarService.prototype.undoRegisterByEntityIdAsync = /**
         * @param {?} entityId
         * @return {?}
         */
        function (entityId) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = this._runtimeConfiguration.dsmServerUrl +
                                this._runtimeConfiguration.dsuUndoRegisterPath + '/' + entityId;
                            return [4 /*yield*/, this._httpClient.delete(url)
                                    .toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DsuRegistarService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DsuRegistarService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: RuntimeConfiguration }
        ]; };
        /** @nocollapse */ DsuRegistarService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DsuRegistarService_Factory() { return new DsuRegistarService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(RuntimeConfiguration)); }, token: DsuRegistarService, providedIn: "root" });
        return DsuRegistarService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DsuRegistarService.prototype._httpClient;
        /**
         * @type {?}
         * @private
         */
        DsuRegistarService.prototype._runtimeConfiguration;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dsu-register/dsu-register-form.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DsuRegisterFormComponent = /** @class */ (function () {
        function DsuRegisterFormComponent(_dsuRegistar, alertServiceProvider, translateServiceProvicer, formBuilder) {
            this._dsuRegistar = _dsuRegistar;
            this.faSpinner = freeSolidSvgIcons.faSpinner;
            this.ipAddresses = [];
            this.deviceArchOptions = [
                { value: 0, text: 'Unknown' },
                { value: 10, text: 'Windows' },
                { value: 20, text: 'Mac' },
                { value: 30, text: 'Linux' },
                { value: 40, text: ' Unix' }
            ];
            this.statusOptions = [
                { value: 0, text: 'Init' },
                { value: 10, text: 'Ready' },
                { value: 20, text: 'Offline' },
                { value: 30, text: 'Failure' },
                { value: 100, text: 'Unknown' }
            ];
            this.protocolOptions = [
                { value: 0, text: 'HTTP' },
                { value: 10, text: 'HTTPS' },
                { value: 20, text: 'FTP' }
            ];
            this._alertService = alertServiceProvider.get();
            this.translator = translateServiceProvicer.get();
            this.form = formBuilder.group({
                deviceUniqueId: new forms.FormControl({ value: '', disabled: true }, { validators: [forms.Validators.required] }),
                ipV4: new forms.FormControl(''),
                host: new forms.FormControl('', { validators: [forms.Validators.required] }),
                protocol: new forms.FormControl({ value: -1, disabled: true }, { validators: [forms.Validators.required] }),
                port: new forms.FormControl({ value: 0, disabled: true }, { validators: [forms.Validators.required] }),
                deviceName: new forms.FormControl('', { validators: [forms.Validators.required] }),
                deviceArch: new forms.FormControl({ value: -1, disabled: true }, { validators: [forms.Validators.required] }),
                capacity: new forms.FormControl(0, { validators: [forms.Validators.required] }),
                threshold: new forms.FormControl(0, { validators: [forms.Validators.required] }),
                apiKey: new forms.FormControl({ value: '', disabled: true }, { validators: [forms.Validators.required] }),
                status: new forms.FormControl(-1, { validators: [forms.Validators.required] }),
                discoverEndpoint: new forms.FormControl('')
            });
        }
        Object.defineProperty(DsuRegisterFormComponent.prototype, "deviceUniqueId", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('deviceUniqueId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "ipV4", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('ipV4'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "host", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('host'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "protocol", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('protocol'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "port", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('port'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "deviceName", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('deviceName'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "deviceArch", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('deviceArch'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "capacity", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('capacity'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "threshold", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('threshold'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "apiKey", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('apiKey'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "status", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('status'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DsuRegisterFormComponent.prototype, "discoverEndpoint", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('discoverEndpoint'); },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DsuRegisterFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInputChanged();
        };
        /**
         * @return {?}
         */
        DsuRegisterFormComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.onInputChanged();
        };
        /**
         * @private
         * @return {?}
         */
        DsuRegisterFormComponent.prototype.onInputChanged = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            // init data ready
            if (this.initData && this.initData.deviceUniqueId) {
                this._dsuRegistar.getByUniqueIdAsync(this.initData.deviceUniqueId)
                    .then((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) {
                    console.log(a);
                    if (a) {
                        /** @type {?} */
                        var v = Object.assign({}, _this.initData, a);
                        _this.ipAddresses = v.ipAddresses;
                        delete v.ipAddresses;
                        delete v.prettyDeviceArch;
                        delete v.prettyProtocol;
                        delete v.prettyStatus;
                        delete v.rank;
                        delete v.usage;
                        _this._entityId = v.id;
                        delete v.id;
                        _this.form.setValue(v);
                        _this.enable(false, null);
                    }
                    else {
                        /** @type {?} */
                        var v = Object.assign({
                            ipV4: '',
                            host: '',
                            deviceName: '',
                            threshold: 0,
                            status: -1,
                            discoverEndpoint: ''
                        }, _this.initData);
                        _this.ipAddresses = v.ipAddresses;
                        delete v.ipAddresses;
                        _this.form.setValue(v);
                        _this.enable(true, null);
                    }
                    _this._prevFormValue = Object.assign({}, _this.form.value);
                }));
            }
            else {
                this._prevFormValue = Object.assign({}, this.form.value);
                this.enable(false, null);
            }
        };
        /**
         * @param {?} flag
         * @param {?} evt
         * @return {?}
         */
        DsuRegisterFormComponent.prototype.enable = /**
         * @param {?} flag
         * @param {?} evt
         * @return {?}
         */
        function (flag, evt) {
            evt && evt.preventDefault();
            evt && evt.stopPropagation();
            if (flag) {
                this.form.enable();
            }
            else {
                this.form.disable();
            }
        };
        /**
         * @return {?}
         */
        DsuRegisterFormComponent.prototype.submit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var currentFormValue = this.form.value;
            if (JSON.stringify(this._prevFormValue) !== JSON.stringify(currentFormValue)) {
                if (this._entityId) {
                    /** @type {?} */
                    var changes = calculateDsuSpecChanges(this._prevFormValue, currentFormValue);
                    if (Object.keys(changes).length > 0) {
                        this.update(changes);
                    }
                }
                else {
                    this.create();
                }
            }
        };
        /**
         * @return {?}
         */
        DsuRegisterFormComponent.prototype.create = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var v;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.alertType = 'alert-info';
                            this.alertMessage = "Submitting ...";
                            v = Object.assign({}, this.form.value, {
                                deviceUniqueId: this.deviceUniqueId.value,
                                protocol: this.protocol.value,
                                port: this.port.value,
                                deviceArch: this.deviceArch.value,
                                apiKey: this.apiKey.value
                            });
                            this.showSubmitProgress = true;
                            return [4 /*yield*/, this._dsuRegistar.registerAsync(v)
                                    .then((/**
                                 * @param {?} id
                                 * @return {?}
                                 */
                                function (id) {
                                    _this._entityId = id;
                                    // Stop progress
                                    _this.showSubmitProgress = false;
                                    // notify message                
                                    _this.alertType = 'alert-success';
                                    _this.alertMessage = "Just registered successfully.";
                                    _this.form.disable();
                                    // TODO: should have some id returned.
                                    _this._prevFormValue = Object.assign({}, _this.form.value);
                                    _this._alertService.showMessage('DSU registar', 'You just registered your device!', ngxAppkitContractsAlpha.MessageSeverity.success);
                                }), (/**
                                 * @param {?} _
                                 * @return {?}
                                 */
                                function (_) {
                                    // Stop progress                
                                    _this.showSubmitProgress = false;
                                    _this.alertType = 'alert-danger';
                                    _this.alertMessage = 'Something went wrong!';
                                }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DsuRegisterFormComponent.prototype.update = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.alertType = 'alert-info';
                            this.alertMessage = "Submitting ...";
                            // Progress
                            this.showSubmitProgress = true;
                            return [4 /*yield*/, this._dsuRegistar.updateByUniqueIdAsync(this.deviceUniqueId.value, changes)
                                    .then((/**
                                 * @param {?} _
                                 * @return {?}
                                 */
                                function (_) {
                                    // Stop progress
                                    _this.showSubmitProgress = false;
                                    // notify message                
                                    _this.alertType = 'alert-success';
                                    _this.alertMessage = "Just updated successfully.";
                                    _this.form.disable();
                                    _this._prevFormValue = Object.assign({}, _this.form.value);
                                    _this._alertService.showMessage('DSU registar', 'You just updated your device!', ngxAppkitContractsAlpha.MessageSeverity.success);
                                }), (/**
                                 * @param {?} _
                                 * @return {?}
                                 */
                                function (_) {
                                    // Stop progress
                                    _this.showSubmitProgress = false;
                                    _this.alertType = 'alert-danger';
                                    _this.alertMessage = 'Something went wrong!';
                                }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DsuRegisterFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'css-dsu-register-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"deviceUniqueId\">Unique Device ID</label>\n        <input formControlName=\"deviceUniqueId\" required \n               type=\"text\" class=\"form-control\" id=\"deviceUniqueId\" aria-describedby=\"deviceUniqueIdHelper\">\n        <small id=\"deviceUniqueIdHelper\" class=\"form-text text-muted\">\n            System generated unique ID (cannot be updated) for this device\n        </small>\n    </div>\n    <!-- host -->\n    <div class=\"form-group\">\n        <label for=\"host\">Host</label>\n        <select formControlName=\"host\" required\n                class=\"form-control\" id=\"host\" aria-describedby=\"hostHelper\">\n            <option value=\"\" disabled>Choose the right IP address</option>                                    \n            <option *ngFor=\"let ip of ipAddresses\" [ngValue]=\"ip\">\n                {{ ip }}\n            </option>\n        </select>\n        <small id=\"hostHelper\" class=\"form-text text-muted\">\n            The host address of this device used to access the service on it,\n            such examples as 'http://192.168.1.0' or 'https://mystorage.com'\n        </small>\n        <div *ngIf=\"host.invalid && (host.dirty || host.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"host.errors.required\">\n                Host address is required\n            </div>\n        </div>        \n    </div>\n    <!-- ipV4 -->   \n    <div class=\"form-group\">\n        <label for=\"ipV4\">IP Address</label>\n        <input formControlName=\"ipV4\" \n               type=\"text\" class=\"form-control\" id=\"ipV4\" aria-describedby=\"ipV4Helper\">\n        <small id=\"ipV4Helper\" class=\"form-text text-muted\">\n            The IP address of the device\n        </small>\n        <div *ngIf=\"ipV4.invalid && (ipV4.dirty || ipV4.touched)\"\n             class=\"alert alert-danger\">\n        </div>        \n    </div>\n    <!-- protocol -->\n    <div class=\"form-group\">\n        <label for=\"protocol\">Protocol</label>\n        <select formControlName=\"protocol\" required\n                class=\"form-control\" id=\"protocol\" aria-describedby=\"protocolHelper\">\n            <option value=\"-1\" disabled>Choose the right protocol</option>                        \n            <option *ngFor=\"let o of protocolOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"protocolHelper\" class=\"form-text text-muted\">\n            The protocol of the service on this device, such examples as HTTP, HTTPS, ftp\n        </small>\n        <div *ngIf=\"protocol.invalid && (protocol.dirty || protocol.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"protocol.errors.required\">\n                Protocol is required.\n            </div>\n        </div>        \n    </div>\n    <!-- port -->\n    <div class=\"form-group\">\n        <label for=\"port\">Port number</label>\n        <input formControlName=\"port\" required\n               type=\"text\" class=\"form-control\" id=\"port\" aria-describedby=\"portHelper\">\n        <small id=\"portHelper\" class=\"form-text text-muted\">\n            The port number of the service on this device\n        </small>\n        <div *ngIf=\"port.invalid && (port.dirty || port.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"port.errors.required\">\n                Port number is required\n            </div>\n        </div>        \n    </div>\n    <!-- deviceName -->\n    <div class=\"form-group\">\n        <label for=\"deviceName\">Device Name</label>\n        <input formControlName=\"deviceName\" required\n               type=\"text\" class=\"form-control\" id=\"deviceName\" aria-describedby=\"deviceNameHelper\">\n        <small id=\"deviceNameHelper\" class=\"form-text text-muted\">\n            The descriptive name of this device, not required to be unique\n        </small>\n        <div *ngIf=\"deviceName.invalid && (deviceName.dirty || deviceName.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"deviceName.errors.required\">\n                Device name is required.\n            </div>\n        </div>        \n    </div>\n    <!-- deviceArch -->\n    <div class=\"form-group\">\n        <label for=\"deviceArch\">Device Operating System</label>\n        <select formControlName=\"deviceArch\" required\n                class=\"form-control\" id=\"deviceArch\" aria-describedby=\"deviceArchHelper\">\n            <option value=\"-1\" disabled>Choose the right operating system</option>            \n            <option *ngFor=\"let o of deviceArchOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"deviceArchHelper\" class=\"form-text text-muted\">\n            The operating system of this device, such examples as Linux, Windows, and so on\n        </small>\n        <div *ngIf=\"deviceArch.invalid && (deviceArch.dirty || deviceArch.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"deviceArch.errors.required\">\n                Device operating system is required.\n            </div>\n        </div>        \n    </div>\n    <!-- capacity -->\n    <div class=\"form-group\">\n        <label for=\"capacity\">Storage Capacity</label>\n        <input formControlName=\"capacity\" required\n               type=\"text\" class=\"form-control\" id=\"capacity\" aria-describedby=\"capacityHelper\">\n        <small id=\"capacityHelper\" class=\"form-text text-muted\">\n            The allowed storage capacity, in Gigabit, on this device\n        </small>\n        <div *ngIf=\"capacity.invalid && (capacity.dirty || capacity.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"capacity.errors.required\">\n                Storage capacity is required.\n            </div>\n        </div>        \n    </div>\n    <!-- threshold -->\n    <div class=\"form-group\">\n        <label for=\"threshold\">Storage Threshold</label>\n        <input formControlName=\"threshold\" required\n               type=\"text\" class=\"form-control\" id=\"threshold\" aria-describedby=\"thresholdHelper\">\n        <small id=\"thresholdHelper\" class=\"form-text text-muted\">\n            The threshold for the usage of the storage space on this device\n        </small>\n        <div *ngIf=\"threshold.invalid && (threshold.dirty || threshold.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"threshold.errors.required\">\n                Storage threshold is required.\n            </div>\n        </div>        \n    </div>\n    <!-- apiKey -->\n    <div class=\"form-group\">\n        <label for=\"apiKey\">API Key</label>\n        <input formControlName=\"apiKey\" required\n               type=\"text\" class=\"form-control\" id=\"apiKey\" aria-describedby=\"apiKeyHelper\">\n        <small id=\"apiKeyHelper\" class=\"form-text text-muted\">\n            The authorized API Key of this device, used to access the service on it\n        </small>\n        <div *ngIf=\"apiKey.invalid && (apiKey.dirty || apiKey.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"apiKey.errors.required\">\n                API Key is required.\n            </div>\n        </div>        \n    </div>\n    <!-- status -->\n    <div class=\"form-group\">\n        <label for=\"status\">Status</label>\n        <select formControlName=\"status\" required\n                class=\"form-control\" id=\"status\" aria-describedby=\"statusHelper\">\n            <option value=\"-1\" disabled>Choose the right status</option>\n            <option *ngFor=\"let o of statusOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"statusHelper\" class=\"form-text text-muted\">\n            The storage status of this device\n        </small>\n        <div *ngIf=\"status.invalid && (status.dirty || status.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"status.errors.required\">\n                Storage status is required.\n            </div>\n        </div>        \n    </div>\n    <!-- discoverEndpoint -->\n    <div class=\"form-group\">\n        <label for=\"discoverEndpoint\">Discover Endpoint</label>\n        <input formControlName=\"discoverEndpoint\" \n               type=\"text\" class=\"form-control\" id=\"discoverEndpoint\" aria-describedby=\"discoverEndpointHelper\">\n        <small id=\"discoverEndpointHelper\" class=\"form-text text-muted\">\n            The discover endpoint for the service on this device\n        </small>\n        <div *ngIf=\"discoverEndpoint.invalid && (discoverEndpoint.dirty || discoverEndpoint.touched)\"\n             class=\"alert alert-danger\">\n\n        </div>        \n    </div>\n    \n    <p class=\"alert\" [ngClass]=\"alertType\">\n        {{alertMessage}}\n    </p>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"submit\" class=\"btn btn-primary px-4\" [disabled]=\"form.invalid\">\n                <fa-icon class=\"fa-spin mr-2\" [icon]=\"faSpinner\" *ngIf=\"showSubmitProgress\"></fa-icon>\n                Submit\n            </button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n\n\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DsuRegisterFormComponent.ctorParameters = function () { return [
            { type: DsuRegistarService },
            { type: ngxAppkitContractsAlpha.AlertServiceAbstractProvider },
            { type: ngxAppkitContractsAlpha.TranslationServiceAbstractProvider },
            { type: forms.FormBuilder }
        ]; };
        DsuRegisterFormComponent.propDecorators = {
            initData: [{ type: core.Input }]
        };
        return DsuRegisterFormComponent;
    }());
    if (false) {
        /** @type {?} */
        DsuRegisterFormComponent.prototype.initData;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.faSpinner;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.form;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.alertMessage;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.alertType;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.ipAddresses;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.deviceArchOptions;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.statusOptions;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.protocolOptions;
        /**
         * @type {?}
         * @private
         */
        DsuRegisterFormComponent.prototype._alertService;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.translator;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.anyFormChange;
        /** @type {?} */
        DsuRegisterFormComponent.prototype.showSubmitProgress;
        /**
         * @type {?}
         * @private
         */
        DsuRegisterFormComponent.prototype._prevFormValue;
        /**
         * @type {?}
         * @private
         */
        DsuRegisterFormComponent.prototype._entityId;
        /**
         * @type {?}
         * @private
         */
        DsuRegisterFormComponent.prototype._dsuRegistar;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/host-reserved-disk-rw.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IHostReservedDiskModel() { }
    if (false) {
        /** @type {?} */
        IHostReservedDiskModel.prototype.storageRootFullPath;
        /** @type {?|undefined} */
        IHostReservedDiskModel.prototype.tempDirName;
        /** @type {?|undefined} */
        IHostReservedDiskModel.prototype.stagedDirName;
        /** @type {?|undefined} */
        IHostReservedDiskModel.prototype.commitedDirName;
        /** @type {?|undefined} */
        IHostReservedDiskModel.prototype.availableDrivers;
    }
    var HostReservedDiskRWService = /** @class */ (function () {
        function HostReservedDiskRWService(_httpClient, _runtimeConfiguration) {
            this._httpClient = _httpClient;
            this._runtimeConfiguration = _runtimeConfiguration;
        }
        /**
         * @param {?=} checkCache
         * @return {?}
         */
        HostReservedDiskRWService.prototype.readAsync = /**
         * @param {?=} checkCache
         * @return {?}
         */
        function (checkCache) {
            if (checkCache === void 0) { checkCache = true; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (checkCache && this._cached) {
                                return [2 /*return*/, this._cached];
                            }
                            return [4 /*yield*/, this._httpClient.get(this._runtimeConfiguration.hostReservedDiskSettingPath)
                                    .pipe(operators.tap((/**
                                 * @param {?} a
                                 * @return {?}
                                 */
                                function (a) {
                                    _this._cached = a;
                                }))).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} data
         * @return {?}
         */
        HostReservedDiskRWService.prototype.writeAsync = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._httpClient.post(this._runtimeConfiguration.hostReservedDiskSettingPath, data)
                                .pipe(operators.tap((/**
                             * @param {?} _
                             * @return {?}
                             */
                            function (_) {
                                _this._cached.storageRootFullPath = data.storageRootFullPath;
                            }))).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        HostReservedDiskRWService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HostReservedDiskRWService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: RuntimeConfiguration }
        ]; };
        /** @nocollapse */ HostReservedDiskRWService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HostReservedDiskRWService_Factory() { return new HostReservedDiskRWService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(RuntimeConfiguration)); }, token: HostReservedDiskRWService, providedIn: "root" });
        return HostReservedDiskRWService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HostReservedDiskRWService.prototype._cached;
        /**
         * @type {?}
         * @private
         */
        HostReservedDiskRWService.prototype._httpClient;
        /**
         * @type {?}
         * @private
         */
        HostReservedDiskRWService.prototype._runtimeConfiguration;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/host-reserved-disk-form/host-reserved-disk-form.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HostReservedDiskFormComponent = /** @class */ (function () {
        function HostReservedDiskFormComponent(_diskService, alertServiceProvider, translateServiceProvicer, formBuilder) {
            this._diskService = _diskService;
            this._alertService = alertServiceProvider.get();
            this.translator = translateServiceProvicer.get();
            this.form = formBuilder.group({
                storageRootFullPath: new forms.FormControl('', { validators: [forms.Validators.required] })
            });
        }
        Object.defineProperty(HostReservedDiskFormComponent.prototype, "storageRootFullPath", {
            get: /**
             * @return {?}
             */
            function () { return this.form.get('storageRootFullPath'); },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        HostReservedDiskFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._diskService.readAsync()
                .then((/**
             * @param {?} a
             * @return {?}
             */
            function (a) {
                _this.deviceInfo = a;
                _this.storageRootFullPath.setValue(a.storageRootFullPath);
                _this.enable(false, null);
            }));
        };
        /**
         * @param {?} flag
         * @param {?} evt
         * @return {?}
         */
        HostReservedDiskFormComponent.prototype.enable = /**
         * @param {?} flag
         * @param {?} evt
         * @return {?}
         */
        function (flag, evt) {
            evt && evt.preventDefault();
            evt && evt.stopPropagation();
            if (flag) {
                this.form.enable();
            }
            else {
                this.form.disable();
                this.alertMessage = '';
                this.alertType = '';
            }
        };
        /**
         * @return {?}
         */
        HostReservedDiskFormComponent.prototype.submit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Assuming that the values to be submitted are new and valid.
            // todo: Progress
            this.alertType = 'alert-info';
            this.alertMessage = "Submitting ...";
            this._diskService.writeAsync(this.form.value)
                .then((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                // notify message                
                _this.alertType = 'alert-success';
                _this.alertMessage = "Just updated successfully.";
                _this.form.disable();
                _this._alertService.showMessage('Storage Space Root', 'You just updated the full path of the storage space root!', ngxAppkitContractsAlpha.MessageSeverity.success);
            }), (/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.alertType = 'alert-danger';
                _this.alertMessage = 'Something went wrong!';
            }));
        };
        HostReservedDiskFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'host-reserved-disk-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"storageRootFullPath\">Storage Space Root Full Path</label>\n        <input formControlName=\"storageRootFullPath\" required \n               type=\"text\" class=\"form-control\" id=\"storageRootFullPath\" aria-describedby=\"storageRootFullPathHelper\">\n        <small id=\"storageRootFullPathHelper\" class=\"form-text text-muted\">\n            Please specify the full path of the directory where files are stored on the hosting device.\n            Please make sure that the path exists.\n        </small>\n        <div *ngIf=\"storageRootFullPath.invalid && (storageRootFullPath.dirty || storageRootFullPath.touched)\"\n             class=\"alert alert-danger\">\n            <div *ngIf=\"storageRootFullPath.errors.required\">\n                Full path is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"alert\" [ngClass]=\"alertType\">\n        <h6>{{alertMessage}}</h6>\n    </div>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"submit\" class=\"ml-2 btn btn-primary px-4\" [disabled]=\"form.invalid\">Submit</button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        HostReservedDiskFormComponent.ctorParameters = function () { return [
            { type: HostReservedDiskRWService },
            { type: ngxAppkitContractsAlpha.AlertServiceAbstractProvider },
            { type: ngxAppkitContractsAlpha.TranslationServiceAbstractProvider },
            { type: forms.FormBuilder }
        ]; };
        return HostReservedDiskFormComponent;
    }());
    if (false) {
        /** @type {?} */
        HostReservedDiskFormComponent.prototype.form;
        /** @type {?} */
        HostReservedDiskFormComponent.prototype.alertMessage;
        /** @type {?} */
        HostReservedDiskFormComponent.prototype.alertType;
        /**
         * @type {?}
         * @private
         */
        HostReservedDiskFormComponent.prototype._alertService;
        /** @type {?} */
        HostReservedDiskFormComponent.prototype.translator;
        /** @type {?} */
        HostReservedDiskFormComponent.prototype.deviceInfo;
        /**
         * @type {?}
         * @private
         */
        HostReservedDiskFormComponent.prototype._diskService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/css-client-bolts.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CssClientBoltsModule = /** @class */ (function () {
        function CssClientBoltsModule() {
        }
        CssClientBoltsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            DsmSettingsFormComponent,
                            DsuRegisterFormComponent,
                            HostReservedDiskFormComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            angularFontawesome.FontAwesomeModule
                        ],
                        exports: [
                            DsmSettingsFormComponent,
                            DsuRegisterFormComponent,
                            HostReservedDiskFormComponent
                        ]
                    },] }
        ];
        return CssClientBoltsModule;
    }());

    exports.CssClientBoltsModule = CssClientBoltsModule;
    exports.DsmSettingsFormComponent = DsmSettingsFormComponent;
    exports.DsmSettingsRWService = DsmSettingsRWService;
    exports.DsmUtilitiesService = DsmUtilitiesService;
    exports.DsuRegistarService = DsuRegistarService;
    exports.DsuRegisterFormComponent = DsuRegisterFormComponent;
    exports.HostReservedDiskFormComponent = HostReservedDiskFormComponent;
    exports.HostReservedDiskRWService = HostReservedDiskRWService;
    exports.RuntimeConfiguration = RuntimeConfiguration;
    exports.calculateDsuSpecChanges = calculateDsuSpecChanges;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nanshiie-css-client-bolts.umd.js.map
