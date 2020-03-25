/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/host-reserved-disk-rw.service.ts
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
/**
 * @record
 */
export function IHostReservedDiskModel() { }
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (checkCache && this._cached) {
                            return [2 /*return*/, this._cached];
                        }
                        return [4 /*yield*/, this._httpClient.get(this._runtimeConfiguration.hostReservedDiskSettingPath)
                                .pipe(tap((/**
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpClient.post(this._runtimeConfiguration.hostReservedDiskSettingPath, data)
                            .pipe(tap((/**
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HostReservedDiskRWService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: RuntimeConfiguration }
    ]; };
    /** @nocollapse */ HostReservedDiskRWService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HostReservedDiskRWService_Factory() { return new HostReservedDiskRWService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.RuntimeConfiguration)); }, token: HostReservedDiskRWService, providedIn: "root" });
    return HostReservedDiskRWService;
}());
export { HostReservedDiskRWService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1yZXNlcnZlZC1kaXNrLXJ3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmFuc2hpaWUvY3NzLWNsaWVudC1ib2x0cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ob3N0LXJlc2VydmVkLWRpc2stcncuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUFFL0QsNENBVUM7OztJQVRHLHFEQUE0Qjs7SUFDNUIsNkNBQXFCOztJQUNyQiwrQ0FBdUI7O0lBQ3ZCLGlEQUF5Qjs7SUFDekIsa0RBSUU7O0FBR047SUFPSSxtQ0FBNkIsV0FBdUIsRUFDL0IscUJBQTJDO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQy9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7SUFBSSxDQUFDOzs7OztJQUUvRCw2Q0FBUzs7OztJQUFmLFVBQWdCLFVBQTBCO1FBQTFCLDJCQUFBLEVBQUEsaUJBQTBCOzs7Ozs7d0JBRXRDLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQzVCLHNCQUFPLElBQUksQ0FBQyxPQUFPLEVBQUM7eUJBQ3ZCO3dCQUVNLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsQ0FBQztpQ0FDcEYsSUFBSSxDQUNELEdBQUc7Ozs7NEJBQUMsVUFBQyxDQUF5QjtnQ0FDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7NEJBQ3JCLENBQUMsRUFBQyxDQUNMLENBQUMsU0FBUyxFQUFFLEVBQUE7NEJBTGpCLHNCQUFPLFNBS1UsRUFBQzs7OztLQUNyQjs7Ozs7SUFFSyw4Q0FBVTs7OztJQUFoQixVQUFpQixJQUE0Qjs7Ozs7NEJBQ2xDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUM7NkJBQzNGLElBQUksQ0FDRCxHQUFHOzs7O3dCQUFDLFVBQUEsQ0FBQzs0QkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDaEUsQ0FBQyxFQUFDLENBQ0wsQ0FBQyxTQUFTLEVBQUUsRUFBQTs0QkFMakIsc0JBQU8sU0FLVSxFQUFDOzs7O0tBQ3JCOztnQkEvQkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnQkFuQlEsVUFBVTtnQkFHVixvQkFBb0I7OztvQ0FKN0I7Q0FtREMsQUFqQ0QsSUFpQ0M7U0E5QlkseUJBQXlCOzs7Ozs7SUFFbEMsNENBQXdDOzs7OztJQUU1QixnREFBd0M7Ozs7O0lBQ2hELDBEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJ1bnRpbWVDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9ydW50aW1lLWNvbmZpZ3VyYXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElIb3N0UmVzZXJ2ZWREaXNrTW9kZWwge1xuICAgIHN0b3JhZ2VSb290RnVsbFBhdGg6IHN0cmluZztcbiAgICB0ZW1wRGlyTmFtZT86IHN0cmluZztcbiAgICBzdGFnZWREaXJOYW1lPzogc3RyaW5nO1xuICAgIGNvbW1pdGVkRGlyTmFtZT86IHN0cmluZztcbiAgICBhdmFpbGFibGVEcml2ZXJzPzogW3tcbiAgICAgICAgcm9vdERpcmVjdG9yeTogc3RyaW5nO1xuICAgICAgICB0b3RhbFNwYWNlOiBudW1iZXI7XG4gICAgICAgIGZyZWVTcGFjZTogbnVtYmVyO1xuICAgIH1dXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSG9zdFJlc2VydmVkRGlza1JXU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9jYWNoZWQ6IElIb3N0UmVzZXJ2ZWREaXNrTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ydW50aW1lQ29uZmlndXJhdGlvbjogUnVudGltZUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gICAgYXN5bmMgcmVhZEFzeW5jKGNoZWNrQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKSB7XG5cbiAgICAgICAgaWYgKGNoZWNrQ2FjaGUgJiYgdGhpcy5fY2FjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmhvc3RSZXNlcnZlZERpc2tTZXR0aW5nUGF0aClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoYTogSUhvc3RSZXNlcnZlZERpc2tNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWQgPSBhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHdyaXRlQXN5bmMoZGF0YTogSUhvc3RSZXNlcnZlZERpc2tNb2RlbCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faHR0cENsaWVudC5wb3N0KHRoaXMuX3J1bnRpbWVDb25maWd1cmF0aW9uLmhvc3RSZXNlcnZlZERpc2tTZXR0aW5nUGF0aCwgZGF0YSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcChfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkLnN0b3JhZ2VSb290RnVsbFBhdGggPSBkYXRhLnN0b3JhZ2VSb290RnVsbFBhdGg7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudG9Qcm9taXNlKCk7XG4gICAgfVxuXG59XG4iXX0=