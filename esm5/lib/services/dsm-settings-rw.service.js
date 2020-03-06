/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dsm-settings-rw.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RuntimeConfiguration } from './runtime-configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./runtime-configuration";
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (checkCache && this._cached) {
                            return [2 /*return*/, this._cached];
                        }
                        return [4 /*yield*/, this._httpClient.get(this._runtimeConfiguration.dsmSettingsPath)
                                .pipe(tap((/**
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpClient.post(this._runtimeConfiguration.dsmSettingsPath, data)
                            .pipe(tap((/**
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DsmSettingsRWService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: RuntimeConfiguration }
    ]; };
    /** @nocollapse */ DsmSettingsRWService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DsmSettingsRWService_Factory() { return new DsmSettingsRWService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.RuntimeConfiguration)); }, token: DsmSettingsRWService, providedIn: "root" });
    return DsmSettingsRWService;
}());
export { DsmSettingsRWService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNtLXNldHRpbmdzLXJ3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmFuc2hpaWUvY3NzLWNsaWVudC1ib2x0cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kc20tc2V0dGluZ3Mtcncuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBSS9EO0lBT0ksOEJBQTZCLFdBQXVCLEVBQy9CLHFCQUEyQztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUMvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO0lBQ2hFLENBQUM7Ozs7O0lBRUssd0NBQVM7Ozs7SUFBZixVQUFnQixVQUEwQjtRQUExQiwyQkFBQSxFQUFBLGlCQUEwQjs7Ozs7O3dCQUN0QyxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUM1QixzQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFDO3lCQUN2Qjt3QkFFTSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDO2lDQUN4RSxJQUFJLENBQ0QsR0FBRzs7Ozs0QkFBQyxVQUFDLENBQW9CO2dDQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7b0NBQ3BDLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO29DQUNqQixLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7b0NBQ3RELEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2lDQUVuRTs0QkFDTCxDQUFDLEVBQUMsQ0FDTCxDQUFDLFNBQVMsRUFBRSxFQUFBOzRCQVZqQixzQkFBTyxTQVVVLEVBQUM7Ozs7S0FDckI7Ozs7O0lBRUsseUNBQVU7Ozs7SUFBaEIsVUFBaUIsSUFBdUI7Ozs7OzRCQUM3QixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQzs2QkFDL0UsSUFBSSxDQUNELEdBQUc7Ozs7d0JBQUMsVUFBQSxDQUFDOzRCQUNELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzRCQUNwQixLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7NEJBQ3pELEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUN2RSxDQUFDLEVBQUMsQ0FDTCxDQUFDLFNBQVMsRUFBRSxFQUFBOzRCQVBqQixzQkFBTyxTQU9VLEVBQUM7Ozs7S0FDckI7O2dCQXRDSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7O2dCQVZRLFVBQVU7Z0JBSVYsb0JBQW9COzs7K0JBTDdCO0NBZ0RDLEFBdkNELElBdUNDO1NBcENZLG9CQUFvQjs7Ozs7O0lBRTdCLHVDQUFtQzs7Ozs7SUFFdkIsMkNBQXdDOzs7OztJQUNoRCxxREFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJRHNtU2V0dGluZ3NNb2RlbCB9IGZyb20gJy4uL21vZGVscy9kc20tc2V0dGluZ3MubW9kZWwnO1xuaW1wb3J0IHsgUnVudGltZUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3J1bnRpbWUtY29uZmlndXJhdGlvbic7XG5cbi8qIFJlYWQgYW5kIHdyaXRlIGRzbSBzZXR0aW5ncyAqL1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEc21TZXR0aW5nc1JXU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9jYWNoZWQ6IElEc21TZXR0aW5nc01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfcnVudGltZUNvbmZpZ3VyYXRpb246IFJ1bnRpbWVDb25maWd1cmF0aW9uKSB7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVhZEFzeW5jKGNoZWNrQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChjaGVja0NhY2hlICYmIHRoaXMuX2NhY2hlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9odHRwQ2xpZW50LmdldCh0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXR0aW5nc1BhdGgpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKGE6IElEc21TZXR0aW5nc01vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhICYmIGEuc2VydmVyQXBpS2V5ICYmIGEuc2VydmVyVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWQgPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVudGltZUNvbmZpZ3VyYXRpb24uZHNtU2VydmVyVXJsID0gYS5zZXJ2ZXJVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXJ2ZXJBcGlLZXk0RFNVID0gYS5zZXJ2ZXJBcGlLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHdyaXRlQXN5bmMoZGF0YTogSURzbVNldHRpbmdzTW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQucG9zdCh0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXR0aW5nc1BhdGgsIGRhdGEpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoXyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNlcnZlclVybCA9IGRhdGEuc2VydmVyVXJsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXJ2ZXJBcGlLZXk0RFNVID0gZGF0YS5zZXJ2ZXJBcGlLZXk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudG9Qcm9taXNlKCk7XG4gICAgfVxufVxuIl19