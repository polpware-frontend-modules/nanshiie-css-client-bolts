/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dsm-utilities.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RuntimeConfiguration } from './runtime-configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./runtime-configuration";
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpClient.get(serverUrl + '/' + this._configuration.discoverDSMEndpoint)
                            .pipe(tap((/**
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSP, {
                            headers: new HttpHeaders().set('X-Api-Key', apiKey)
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSU, {
                            headers: new HttpHeaders().set('X-Api-Key', apiKey)
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSM, {
                            headers: new HttpHeaders().set('X-Api-Key', apiKey)
                        }).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DsmUtilitiesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DsmUtilitiesService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: RuntimeConfiguration }
    ]; };
    /** @nocollapse */ DsmUtilitiesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DsmUtilitiesService_Factory() { return new DsmUtilitiesService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.RuntimeConfiguration)); }, token: DsmUtilitiesService, providedIn: "root" });
    return DsmUtilitiesService;
}());
export { DsmUtilitiesService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNtLXV0aWxpdGllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHNtLXV0aWxpdGllcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFL0Q7SUFLSSw2QkFBNkIsV0FBdUIsRUFDL0IsY0FBb0M7UUFENUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQXNCO0lBQUksQ0FBQzs7Ozs7SUFFeEQsK0NBQWlCOzs7O0lBQXZCLFVBQXdCLFNBQWlCOzs7Ozs0QkFDOUIscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDOzZCQUN2RixJQUFJLENBQ0QsR0FBRzs7Ozt3QkFBQyxVQUFDLENBQU07NEJBQ1AsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUMzRSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQzNFLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDL0UsQ0FBQyxFQUFDLENBQ0w7NkJBQ0EsU0FBUyxFQUFFLEVBQUE7NEJBUmhCLHNCQUFPLFNBUVMsRUFBQzs7OztLQUNwQjs7Ozs7O0lBRUssOENBQWdCOzs7OztJQUF0QixVQUF1QixTQUFpQixFQUFFLE1BQWM7Ozs7NEJBRTdDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRTs0QkFDekYsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7eUJBQ3RELENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs0QkFGZCxzQkFBTyxTQUVPLEVBQUM7Ozs7S0FDbEI7Ozs7OztJQUVLLDhDQUFnQjs7Ozs7SUFBdEIsVUFBdUIsU0FBaUIsRUFBRSxNQUFjOzs7OzRCQUU3QyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUU7NEJBQ3pGLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO3lCQUN0RCxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7NEJBRmQsc0JBQU8sU0FFTyxFQUFDOzs7O0tBQ2xCOzs7Ozs7SUFFSyw4Q0FBZ0I7Ozs7O0lBQXRCLFVBQXVCLFNBQWlCLEVBQUUsTUFBYzs7Ozs0QkFFN0MscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFOzRCQUN6RixPQUFPLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQzt5QkFDdEQsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzRCQUZkLHNCQUFPLFNBRU8sRUFBQzs7OztLQUNsQjs7Z0JBdkNKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0JBUFEsVUFBVTtnQkFHVixvQkFBb0I7Ozs4QkFKN0I7Q0ErQ0MsQUF6Q0QsSUF5Q0M7U0F0Q1ksbUJBQW1COzs7Ozs7SUFFaEIsMENBQXdDOzs7OztJQUNoRCw2Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUnVudGltZUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3J1bnRpbWUtY29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRHNtVXRpbGl0aWVzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWd1cmF0aW9uOiBSdW50aW1lQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgICBhc3luYyBkaXNjb3ZlckVuZHBvaW50cyhzZXJ2ZXJVcmw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5nZXQoc2VydmVyVXJsICsgJy8nICsgdGhpcy5fY29uZmlndXJhdGlvbi5kaXNjb3ZlckRTTUVuZHBvaW50KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKChhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYS5waW5nRnJvbURTVSAmJiAodGhpcy5fY29uZmlndXJhdGlvbi5waW5nRFNNRW5kcG9pbnQ0RFNVID0gYS5waW5nRnJvbURTVSk7XG4gICAgICAgICAgICAgICAgICAgIGEucGluZ0Zyb21EU1AgJiYgKHRoaXMuX2NvbmZpZ3VyYXRpb24ucGluZ0RTTUVuZHBvaW50NERTUCA9IGEucGluZ0Zyb21EU1ApO1xuICAgICAgICAgICAgICAgICAgICBhLnBpbmdGcm9tRFNNICYmICh0aGlzLl9jb25maWd1cmF0aW9uLnBpbmdEU01FbmRwb2ludDREU00gPSBhLnBpbmdGcm9tRFNNKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHBpbmdGcm9tRFNQQXN5bmMoc2VydmVyVXJsOiBzdHJpbmcsIGFwaUtleTogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHNlcnZlclVybCArICcvJyArIHRoaXMuX2NvbmZpZ3VyYXRpb24ucGluZ0RTTUVuZHBvaW50NERTUCwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdYLUFwaS1LZXknLCBhcGlLZXkpXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHBpbmdGcm9tRFNVQXN5bmMoc2VydmVyVXJsOiBzdHJpbmcsIGFwaUtleTogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHNlcnZlclVybCArICcvJyArIHRoaXMuX2NvbmZpZ3VyYXRpb24ucGluZ0RTTUVuZHBvaW50NERTVSwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdYLUFwaS1LZXknLCBhcGlLZXkpXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHBpbmdGcm9tRFNNQXN5bmMoc2VydmVyVXJsOiBzdHJpbmcsIGFwaUtleTogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHNlcnZlclVybCArICcvJyArIHRoaXMuX2NvbmZpZ3VyYXRpb24ucGluZ0RTTUVuZHBvaW50NERTTSwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdYLUFwaS1LZXknLCBhcGlLZXkpXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cblxufVxuIl19