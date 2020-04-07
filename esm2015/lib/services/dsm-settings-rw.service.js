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
export class DsmSettingsRWService {
    /**
     * @param {?} _httpClient
     * @param {?} _runtimeConfiguration
     */
    constructor(_httpClient, _runtimeConfiguration) {
        this._httpClient = _httpClient;
        this._runtimeConfiguration = _runtimeConfiguration;
    }
    /**
     * @param {?=} checkCache
     * @return {?}
     */
    readAsync(checkCache = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (checkCache && this._cached) {
                return this._cached;
            }
            return yield this._httpClient.get(this._runtimeConfiguration.dsmSettingsPath)
                .pipe(tap((/**
             * @param {?} a
             * @return {?}
             */
            (a) => {
                if (a && a.serverApiKey && a.serverUrl) {
                    this._cached = a;
                    this._runtimeConfiguration.dsmServerUrl = a.serverUrl;
                    this._runtimeConfiguration.dsmServerApiKey4DSU = a.serverApiKey;
                }
            }))).toPromise();
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    writeAsync(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this._httpClient.post(this._runtimeConfiguration.dsmSettingsPath, data)
                .pipe(tap((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                this._cached = data;
                this._runtimeConfiguration.dsmServerUrl = data.serverUrl;
                this._runtimeConfiguration.dsmServerApiKey4DSU = data.serverApiKey;
            }))).toPromise();
        });
    }
}
DsmSettingsRWService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DsmSettingsRWService.ctorParameters = () => [
    { type: HttpClient },
    { type: RuntimeConfiguration }
];
/** @nocollapse */ DsmSettingsRWService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DsmSettingsRWService_Factory() { return new DsmSettingsRWService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.RuntimeConfiguration)); }, token: DsmSettingsRWService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNtLXNldHRpbmdzLXJ3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmFuc2hpaWUvY3NzLWNsaWVudC1ib2x0cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kc20tc2V0dGluZ3Mtcncuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBTy9ELE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBSTdCLFlBQTZCLFdBQXVCLEVBQy9CLHFCQUEyQztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUMvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO0lBQ2hFLENBQUM7Ozs7O0lBRUssU0FBUyxDQUFDLGFBQXNCLElBQUk7O1lBQ3RDLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2QjtZQUVELE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDO2lCQUN4RSxJQUFJLENBQ0QsR0FBRzs7OztZQUFDLENBQUMsQ0FBb0IsRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7b0JBQ3RELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2lCQUVuRTtZQUNMLENBQUMsRUFBQyxDQUNMLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBOzs7OztJQUVLLFVBQVUsQ0FBQyxJQUF1Qjs7WUFDcEMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO2lCQUMvRSxJQUFJLENBQ0QsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZFLENBQUMsRUFBQyxDQUNMLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBOzs7WUF0Q0osVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBVlEsVUFBVTtZQUlWLG9CQUFvQjs7Ozs7Ozs7SUFTekIsdUNBQW1DOzs7OztJQUV2QiwyQ0FBd0M7Ozs7O0lBQ2hELHFEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElEc21TZXR0aW5nc01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2RzbS1zZXR0aW5ncy5tb2RlbCc7XG5pbXBvcnQgeyBSdW50aW1lQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vcnVudGltZS1jb25maWd1cmF0aW9uJztcblxuLyogUmVhZCBhbmQgd3JpdGUgZHNtIHNldHRpbmdzICovXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERzbVNldHRpbmdzUldTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2NhY2hlZDogSURzbVNldHRpbmdzTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ydW50aW1lQ29uZmlndXJhdGlvbjogUnVudGltZUNvbmZpZ3VyYXRpb24pIHtcbiAgICB9XG5cbiAgICBhc3luYyByZWFkQXN5bmMoY2hlY2tDYWNoZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKGNoZWNrQ2FjaGUgJiYgdGhpcy5fY2FjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNldHRpbmdzUGF0aClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoYTogSURzbVNldHRpbmdzTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgYS5zZXJ2ZXJBcGlLZXkgJiYgYS5zZXJ2ZXJVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZCA9IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXJ2ZXJVcmwgPSBhLnNlcnZlclVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNlcnZlckFwaUtleTREU1UgPSBhLnNlcnZlckFwaUtleTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgd3JpdGVBc3luYyhkYXRhOiBJRHNtU2V0dGluZ3NNb2RlbCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5wb3N0KHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNldHRpbmdzUGF0aCwgZGF0YSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcChfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVudGltZUNvbmZpZ3VyYXRpb24uZHNtU2VydmVyVXJsID0gZGF0YS5zZXJ2ZXJVcmw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNlcnZlckFwaUtleTREU1UgPSBkYXRhLnNlcnZlckFwaUtleTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50b1Byb21pc2UoKTtcbiAgICB9XG59XG4iXX0=