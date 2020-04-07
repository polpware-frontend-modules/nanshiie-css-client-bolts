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
export class DsmUtilitiesService {
    /**
     * @param {?} _httpClient
     * @param {?} _configuration
     */
    constructor(_httpClient, _configuration) {
        this._httpClient = _httpClient;
        this._configuration = _configuration;
    }
    /**
     * @param {?} serverUrl
     * @return {?}
     */
    discoverEndpoints(serverUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this._httpClient.get(serverUrl + '/' + this._configuration.discoverDSMEndpoint)
                .pipe(tap((/**
             * @param {?} a
             * @return {?}
             */
            (a) => {
                a.pingFromDSU && (this._configuration.pingDSMEndpoint4DSU = a.pingFromDSU);
                a.pingFromDSP && (this._configuration.pingDSMEndpoint4DSP = a.pingFromDSP);
                a.pingFromDSM && (this._configuration.pingDSMEndpoint4DSM = a.pingFromDSM);
            })))
                .toPromise();
        });
    }
    /**
     * @param {?} serverUrl
     * @param {?} apiKey
     * @return {?}
     */
    pingFromDSPAsync(serverUrl, apiKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSP, {
                headers: new HttpHeaders().set('X-Api-Key', apiKey)
            }).toPromise();
        });
    }
    /**
     * @param {?} serverUrl
     * @param {?} apiKey
     * @return {?}
     */
    pingFromDSUAsync(serverUrl, apiKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSU, {
                headers: new HttpHeaders().set('X-Api-Key', apiKey)
            }).toPromise();
        });
    }
    /**
     * @param {?} serverUrl
     * @param {?} apiKey
     * @return {?}
     */
    pingFromDSMAsync(serverUrl, apiKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this._httpClient.get(serverUrl + '/' + this._configuration.pingDSMEndpoint4DSM, {
                headers: new HttpHeaders().set('X-Api-Key', apiKey)
            }).toPromise();
        });
    }
}
DsmUtilitiesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DsmUtilitiesService.ctorParameters = () => [
    { type: HttpClient },
    { type: RuntimeConfiguration }
];
/** @nocollapse */ DsmUtilitiesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DsmUtilitiesService_Factory() { return new DsmUtilitiesService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.RuntimeConfiguration)); }, token: DsmUtilitiesService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNtLXV0aWxpdGllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHNtLXV0aWxpdGllcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFLL0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFFNUIsWUFBNkIsV0FBdUIsRUFDL0IsY0FBb0M7UUFENUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQXNCO0lBQUksQ0FBQzs7Ozs7SUFFeEQsaUJBQWlCLENBQUMsU0FBaUI7O1lBQ3JDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7aUJBQ3ZGLElBQUksQ0FDRCxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtnQkFDWCxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNFLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0UsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9FLENBQUMsRUFBQyxDQUNMO2lCQUNBLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7S0FBQTs7Ozs7O0lBRUssZ0JBQWdCLENBQUMsU0FBaUIsRUFBRSxNQUFjOztZQUVwRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFO2dCQUN6RixPQUFPLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQzthQUN0RCxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUFBOzs7Ozs7SUFFSyxnQkFBZ0IsQ0FBQyxTQUFpQixFQUFFLE1BQWM7O1lBRXBELE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3pGLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO2FBQ3RELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0tBQUE7Ozs7OztJQUVLLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsTUFBYzs7WUFFcEQsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDekYsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7YUFDdEQsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7S0FBQTs7O1lBdkNKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7OztZQVBRLFVBQVU7WUFHVixvQkFBb0I7Ozs7Ozs7O0lBT2IsMENBQXdDOzs7OztJQUNoRCw2Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUnVudGltZUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3J1bnRpbWUtY29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRHNtVXRpbGl0aWVzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWd1cmF0aW9uOiBSdW50aW1lQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgICBhc3luYyBkaXNjb3ZlckVuZHBvaW50cyhzZXJ2ZXJVcmw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5nZXQoc2VydmVyVXJsICsgJy8nICsgdGhpcy5fY29uZmlndXJhdGlvbi5kaXNjb3ZlckRTTUVuZHBvaW50KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKChhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYS5waW5nRnJvbURTVSAmJiAodGhpcy5fY29uZmlndXJhdGlvbi5waW5nRFNNRW5kcG9pbnQ0RFNVID0gYS5waW5nRnJvbURTVSk7XG4gICAgICAgICAgICAgICAgICAgIGEucGluZ0Zyb21EU1AgJiYgKHRoaXMuX2NvbmZpZ3VyYXRpb24ucGluZ0RTTUVuZHBvaW50NERTUCA9IGEucGluZ0Zyb21EU1ApO1xuICAgICAgICAgICAgICAgICAgICBhLnBpbmdGcm9tRFNNICYmICh0aGlzLl9jb25maWd1cmF0aW9uLnBpbmdEU01FbmRwb2ludDREU00gPSBhLnBpbmdGcm9tRFNNKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHBpbmdGcm9tRFNQQXN5bmMoc2VydmVyVXJsOiBzdHJpbmcsIGFwaUtleTogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHNlcnZlclVybCArICcvJyArIHRoaXMuX2NvbmZpZ3VyYXRpb24ucGluZ0RTTUVuZHBvaW50NERTUCwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdYLUFwaS1LZXknLCBhcGlLZXkpXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHBpbmdGcm9tRFNVQXN5bmMoc2VydmVyVXJsOiBzdHJpbmcsIGFwaUtleTogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHNlcnZlclVybCArICcvJyArIHRoaXMuX2NvbmZpZ3VyYXRpb24ucGluZ0RTTUVuZHBvaW50NERTVSwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdYLUFwaS1LZXknLCBhcGlLZXkpXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHBpbmdGcm9tRFNNQXN5bmMoc2VydmVyVXJsOiBzdHJpbmcsIGFwaUtleTogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHNlcnZlclVybCArICcvJyArIHRoaXMuX2NvbmZpZ3VyYXRpb24ucGluZ0RTTUVuZHBvaW50NERTTSwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdYLUFwaS1LZXknLCBhcGlLZXkpXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cblxufVxuIl19