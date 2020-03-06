/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dsu-registar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RuntimeConfiguration } from './runtime-configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./runtime-configuration";
export class DsuRegistarService {
    /**
     * @param {?} _httpClient
     * @param {?} _runtimeConfiguration
     */
    constructor(_httpClient, _runtimeConfiguration) {
        this._httpClient = _httpClient;
        this._runtimeConfiguration = _runtimeConfiguration;
    }
    /**
     * @param {?} deviceUniqueId
     * @return {?}
     */
    getByUniqueIdAsync(deviceUniqueId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const url = this._runtimeConfiguration.dsmServerUrl +
                this._runtimeConfiguration.dsuLookupPath + '/' +
                deviceUniqueId;
            return yield this._httpClient.get(url)
                .toPromise();
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    registerAsync(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const url = this._runtimeConfiguration.dsmServerUrl +
                this._runtimeConfiguration.dsuRegistarPath;
            return yield this._httpClient.post(url, data, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).toPromise();
        });
    }
    /**
     * @param {?} deviceUniqueId
     * @param {?} data
     * @return {?}
     */
    updateByUniqueIdAsync(deviceUniqueId, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const patchData = Object.keys(data).map((/**
             * @param {?} k
             * @return {?}
             */
            k => {
                return {
                    'op': 'add',
                    'path': '/' + k,
                    'value': data[k]
                };
            }));
            /** @type {?} */
            const url = this._runtimeConfiguration.dsmServerUrl +
                this._runtimeConfiguration.dsuUpdatePath + '/' +
                deviceUniqueId;
            return yield this._httpClient.patch(url, patchData, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).toPromise();
        });
    }
    /**
     * @param {?} entityId
     * @return {?}
     */
    undoRegisterByEntityIdAsync(entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const url = this._runtimeConfiguration.dsmServerUrl +
                this._runtimeConfiguration.dsuUndoRegisterPath + '/' + entityId;
            return yield this._httpClient.delete(url)
                .toPromise();
        });
    }
}
DsuRegistarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DsuRegistarService.ctorParameters = () => [
    { type: HttpClient },
    { type: RuntimeConfiguration }
];
/** @nocollapse */ DsuRegistarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DsuRegistarService_Factory() { return new DsuRegistarService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.RuntimeConfiguration)); }, token: DsuRegistarService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHN1LXJlZ2lzdGFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmFuc2hpaWUvY3NzLWNsaWVudC1ib2x0cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kc3UtcmVnaXN0YXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFNL0QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFM0IsWUFBNkIsV0FBdUIsRUFDL0IscUJBQTJDO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQy9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7SUFDaEUsQ0FBQzs7Ozs7SUFFSyxrQkFBa0IsQ0FBQyxjQUFzQjs7O2tCQUNyQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVk7Z0JBQy9DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsR0FBRztnQkFDOUMsY0FBYztZQUNsQixPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWdCLEdBQUcsQ0FBQztpQkFDaEQsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUFBOzs7OztJQUVLLGFBQWEsQ0FBQyxJQUFtQjs7O2tCQUM3QixHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVk7Z0JBQy9DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlO1lBQzlDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFFO2dCQUNsRCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7b0JBQ3JCLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDLENBQUM7YUFDTCxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUFBOzs7Ozs7SUFFSyxxQkFBcUIsQ0FBQyxjQUFzQixFQUFFLElBQTBCOzs7a0JBRXBFLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDeEMsT0FBTztvQkFDSCxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ25CLENBQUM7WUFDTixDQUFDLEVBQUM7O2tCQUVJLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWTtnQkFDL0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxHQUFHO2dCQUM5QyxjQUFjO1lBQ2xCLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUNoRCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7b0JBQ3JCLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDLENBQUM7YUFDTCxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUFBOzs7OztJQUVLLDJCQUEyQixDQUFDLFFBQWdCOzs7a0JBQ3hDLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWTtnQkFDL0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixHQUFHLEdBQUcsR0FBRyxRQUFRO1lBQ25FLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ3BDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7S0FBQTs7O1lBcERKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7OztZQVBRLFVBQVU7WUFFVixvQkFBb0I7Ozs7Ozs7O0lBUWIseUNBQXdDOzs7OztJQUNoRCxtREFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgUnVudGltZUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3J1bnRpbWUtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBJRHN1U3BlY01vZGVsLCBJRHN1U3BlY1VwZGF0ZWRNb2RlbCB9IGZyb20gJy4uL21vZGVscy9kc3Utc3BlYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRHN1UmVnaXN0YXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3J1bnRpbWVDb25maWd1cmF0aW9uOiBSdW50aW1lQ29uZmlndXJhdGlvbikge1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJ5VW5pcXVlSWRBc3luYyhkZXZpY2VVbmlxdWVJZDogc3RyaW5nKTogUHJvbWlzZTxJRHN1U3BlY01vZGVsPiB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNlcnZlclVybCArXG4gICAgICAgICAgICB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc3VMb29rdXBQYXRoICsgJy8nICtcbiAgICAgICAgICAgIGRldmljZVVuaXF1ZUlkO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5nZXQ8SURzdVNwZWNNb2RlbD4odXJsKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlZ2lzdGVyQXN5bmMoZGF0YTogSURzdVNwZWNNb2RlbCkge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXJ2ZXJVcmwgK1xuICAgICAgICAgICAgdGhpcy5fcnVudGltZUNvbmZpZ3VyYXRpb24uZHN1UmVnaXN0YXJQYXRoO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5wb3N0PHN0cmluZz4odXJsLCBkYXRhLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZUJ5VW5pcXVlSWRBc3luYyhkZXZpY2VVbmlxdWVJZDogc3RyaW5nLCBkYXRhOiBJRHN1U3BlY1VwZGF0ZWRNb2RlbCkge1xuXG4gICAgICAgIGNvbnN0IHBhdGNoRGF0YSA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcChrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ29wJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJ3BhdGgnOiAnLycgKyBrLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGRhdGFba11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNlcnZlclVybCArXG4gICAgICAgICAgICB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc3VVcGRhdGVQYXRoICsgJy8nICtcbiAgICAgICAgICAgIGRldmljZVVuaXF1ZUlkO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5wYXRjaCh1cmwsIHBhdGNoRGF0YSwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBhc3luYyB1bmRvUmVnaXN0ZXJCeUVudGl0eUlkQXN5bmMoZW50aXR5SWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXJ2ZXJVcmwgK1xuICAgICAgICAgICAgdGhpcy5fcnVudGltZUNvbmZpZ3VyYXRpb24uZHN1VW5kb1JlZ2lzdGVyUGF0aCArICcvJyArIGVudGl0eUlkO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5kZWxldGUodXJsKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuXG59XG4iXX0=