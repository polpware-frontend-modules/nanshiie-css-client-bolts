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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._runtimeConfiguration.dsmServerUrl +
                            this._runtimeConfiguration.dsuRegistarPath;
                        return [4 /*yield*/, this._httpClient.post(url, data, {
                                headers: new HttpHeaders({
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var patchData, url;
            return tslib_1.__generator(this, function (_a) {
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
                                headers: new HttpHeaders({
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DsuRegistarService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: RuntimeConfiguration }
    ]; };
    /** @nocollapse */ DsuRegistarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DsuRegistarService_Factory() { return new DsuRegistarService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.RuntimeConfiguration)); }, token: DsuRegistarService, providedIn: "root" });
    return DsuRegistarService;
}());
export { DsuRegistarService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHN1LXJlZ2lzdGFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmFuc2hpaWUvY3NzLWNsaWVudC1ib2x0cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kc3UtcmVnaXN0YXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFHL0Q7SUFLSSw0QkFBNkIsV0FBdUIsRUFDL0IscUJBQTJDO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQy9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7SUFDaEUsQ0FBQzs7Ozs7SUFFSywrQ0FBa0I7Ozs7SUFBeEIsVUFBeUIsY0FBc0I7Ozs7Ozt3QkFDckMsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZOzRCQUMvQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEdBQUc7NEJBQzlDLGNBQWM7d0JBQ1gscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWdCLEdBQUcsQ0FBQztpQ0FDaEQsU0FBUyxFQUFFLEVBQUE7NEJBRGhCLHNCQUFPLFNBQ1MsRUFBQzs7OztLQUNwQjs7Ozs7SUFFSywwQ0FBYTs7OztJQUFuQixVQUFvQixJQUFtQjs7Ozs7O3dCQUM3QixHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVk7NEJBQy9DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlO3dCQUN2QyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFFO2dDQUNsRCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7b0NBQ3JCLGNBQWMsRUFBRSxrQkFBa0I7aUNBQ3JDLENBQUM7NkJBQ0wsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzRCQUpkLHNCQUFPLFNBSU8sRUFBQzs7OztLQUNsQjs7Ozs7O0lBRUssa0RBQXFCOzs7OztJQUEzQixVQUE0QixjQUFzQixFQUFFLElBQTBCOzs7Ozs7d0JBRXBFLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUc7Ozs7d0JBQUMsVUFBQSxDQUFDOzRCQUNyQyxPQUFPO2dDQUNILElBQUksRUFBRSxLQUFLO2dDQUNYLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztnQ0FDZixPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs2QkFDbkIsQ0FBQzt3QkFDTixDQUFDLEVBQUM7d0JBRUksR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZOzRCQUMvQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEdBQUc7NEJBQzlDLGNBQWM7d0JBQ1gscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtnQ0FDaEQsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO29DQUNyQixjQUFjLEVBQUUsa0JBQWtCO2lDQUNyQyxDQUFDOzZCQUNMLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs0QkFKZCxzQkFBTyxTQUlPLEVBQUM7Ozs7S0FDbEI7Ozs7O0lBRUssd0RBQTJCOzs7O0lBQWpDLFVBQWtDLFFBQWdCOzs7Ozs7d0JBQ3hDLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWTs0QkFDL0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixHQUFHLEdBQUcsR0FBRyxRQUFRO3dCQUM1RCxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUNBQ3BDLFNBQVMsRUFBRSxFQUFBOzRCQURoQixzQkFBTyxTQUNTLEVBQUM7Ozs7S0FDcEI7O2dCQXBESixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7O2dCQVBRLFVBQVU7Z0JBRVYsb0JBQW9COzs7NkJBSDdCO0NBNkRDLEFBdkRELElBdURDO1NBcERZLGtCQUFrQjs7Ozs7O0lBRWYseUNBQXdDOzs7OztJQUNoRCxtREFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgUnVudGltZUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3J1bnRpbWUtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBJRHN1U3BlY01vZGVsLCBJRHN1U3BlY1VwZGF0ZWRNb2RlbCB9IGZyb20gJy4uL21vZGVscy9kc3Utc3BlYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRHN1UmVnaXN0YXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3J1bnRpbWVDb25maWd1cmF0aW9uOiBSdW50aW1lQ29uZmlndXJhdGlvbikge1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJ5VW5pcXVlSWRBc3luYyhkZXZpY2VVbmlxdWVJZDogc3RyaW5nKTogUHJvbWlzZTxJRHN1U3BlY01vZGVsPiB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNlcnZlclVybCArXG4gICAgICAgICAgICB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc3VMb29rdXBQYXRoICsgJy8nICtcbiAgICAgICAgICAgIGRldmljZVVuaXF1ZUlkO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5nZXQ8SURzdVNwZWNNb2RlbD4odXJsKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlZ2lzdGVyQXN5bmMoZGF0YTogSURzdVNwZWNNb2RlbCkge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXJ2ZXJVcmwgK1xuICAgICAgICAgICAgdGhpcy5fcnVudGltZUNvbmZpZ3VyYXRpb24uZHN1UmVnaXN0YXJQYXRoO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5wb3N0PHN0cmluZz4odXJsLCBkYXRhLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZUJ5VW5pcXVlSWRBc3luYyhkZXZpY2VVbmlxdWVJZDogc3RyaW5nLCBkYXRhOiBJRHN1U3BlY1VwZGF0ZWRNb2RlbCkge1xuXG4gICAgICAgIGNvbnN0IHBhdGNoRGF0YSA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcChrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ29wJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJ3BhdGgnOiAnLycgKyBrLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGRhdGFba11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmRzbVNlcnZlclVybCArXG4gICAgICAgICAgICB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc3VVcGRhdGVQYXRoICsgJy8nICtcbiAgICAgICAgICAgIGRldmljZVVuaXF1ZUlkO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5wYXRjaCh1cmwsIHBhdGNoRGF0YSwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBhc3luYyB1bmRvUmVnaXN0ZXJCeUVudGl0eUlkQXN5bmMoZW50aXR5SWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9ydW50aW1lQ29uZmlndXJhdGlvbi5kc21TZXJ2ZXJVcmwgK1xuICAgICAgICAgICAgdGhpcy5fcnVudGltZUNvbmZpZ3VyYXRpb24uZHN1VW5kb1JlZ2lzdGVyUGF0aCArICcvJyArIGVudGl0eUlkO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5kZWxldGUodXJsKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuXG59XG4iXX0=