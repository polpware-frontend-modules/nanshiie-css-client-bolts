/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/host-reserved-disk-form/host-reserved-disk-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MessageSeverity, AlertServiceAbstractProvider, TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { HostReservedDiskRWService } from '../../services/host-reserved-disk-rw.service';
var HostReservedDiskFormComponent = /** @class */ (function () {
    function HostReservedDiskFormComponent(_diskService, alertServiceProvider, translateServiceProvicer, formBuilder) {
        this._diskService = _diskService;
        this._alertService = alertServiceProvider.get();
        this.translator = translateServiceProvicer.get();
        this.form = formBuilder.group({
            storageRootFullPath: new FormControl('', { validators: [Validators.required] })
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
            _this._alertService.showMessage('Storage Space Root', 'You just updated the full path of the storage space root!', MessageSeverity.success);
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
        { type: Component, args: [{
                    selector: 'host-reserved-disk-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"storageRootFullPath\">Storage Space Root Full Path</label>\n        <input formControlName=\"storageRootFullPath\" required \n               type=\"text\" class=\"form-control\" id=\"storageRootFullPath\" aria-describedby=\"storageRootFullPathHelper\">\n        <small id=\"storageRootFullPathHelper\" class=\"form-text text-muted\">\n            Please specify the full path of the directory where files are stored on the hosting device.\n            Please make sure that the path exists.\n        </small>\n        <div *ngIf=\"storageRootFullPath.invalid && (storageRootFullPath.dirty || storageRootFullPath.touched)\"\n             class=\"alert alert-danger\">\n            <div *ngIf=\"storageRootFullPath.errors.required\">\n                Full path is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"alert\" [ngClass]=\"alertType\">\n        <h6>{{alertMessage}}</h6>\n    </div>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"submit\" class=\"ml-2 btn btn-primary px-4\" [disabled]=\"form.invalid\">Submit</button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    HostReservedDiskFormComponent.ctorParameters = function () { return [
        { type: HostReservedDiskRWService },
        { type: AlertServiceAbstractProvider },
        { type: TranslationServiceAbstractProvider },
        { type: FormBuilder }
    ]; };
    return HostReservedDiskFormComponent;
}());
export { HostReservedDiskFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1yZXNlcnZlZC1kaXNrLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ob3N0LXJlc2VydmVkLWRpc2stZm9ybS9ob3N0LXJlc2VydmVkLWRpc2stZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFDSCxlQUFlLEVBQ2YsNEJBQTRCLEVBRzVCLGtDQUFrQyxFQUNyQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCx5QkFBeUIsRUFFNUIsTUFBTSw4Q0FBOEMsQ0FBQztBQUV0RDtJQWdCSSx1Q0FBNkIsWUFBdUMsRUFDaEUsb0JBQWtELEVBQ2xELHdCQUE0RCxFQUM1RCxXQUF3QjtRQUhDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtRQUtoRSxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzFCLG1CQUFtQixFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ2xGLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSSw4REFBbUI7Ozs7UUFBdkIsY0FBNEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7Ozs7SUFFMUUsZ0RBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFORyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTthQUN4QixJQUFJOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ0gsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVELDhDQUFNOzs7OztJQUFOLFVBQU8sSUFBYSxFQUFFLEdBQVU7UUFDNUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixHQUFHLElBQUksR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTdCLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7Ozs7SUFFRCw4Q0FBTTs7O0lBQU47UUFBQSxpQkFpQkM7UUFoQkcsOERBQThEO1FBQzlELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3hDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUM7WUFDSCxpQ0FBaUM7WUFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7WUFDakMsS0FBSSxDQUFDLFlBQVksR0FBRyw0QkFBNEIsQ0FBQztZQUNqRCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLDJEQUEyRCxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvSSxDQUFDOzs7O1FBQUUsVUFBQSxDQUFDO1lBQ0EsS0FBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7WUFDaEMsS0FBSSxDQUFDLFlBQVksR0FBRyx1QkFBdUIsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztJQUVYLENBQUM7O2dCQXZFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsbWtEQUF1RDs7aUJBRTFEOzs7O2dCQVJHLHlCQUF5QjtnQkFQekIsNEJBQTRCO2dCQUc1QixrQ0FBa0M7Z0JBUDdCLFdBQVc7O0lBd0ZwQixvQ0FBQztDQUFBLEFBekVELElBeUVDO1NBcEVZLDZCQUE2Qjs7O0lBRXRDLDZDQUF5Qjs7SUFDekIscURBQXFCOztJQUNyQixrREFBZ0U7Ozs7O0lBRWhFLHNEQUFzRDs7SUFDdEQsbURBQWlEOztJQUVqRCxtREFBMEM7Ozs7O0lBRTlCLHFEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgICBNZXNzYWdlU2V2ZXJpdHksXG4gICAgQWxlcnRTZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBJQWxlcnRTZXJ2aWNlQ29udHJhY3QsXG4gICAgSVRyYW5zbGF0aW9uU2VydmljZUNvbnRyYWN0LFxuICAgIFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBIb3N0UmVzZXJ2ZWREaXNrUldTZXJ2aWNlLFxuICAgIElIb3N0UmVzZXJ2ZWREaXNrTW9kZWxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9zdC1yZXNlcnZlZC1kaXNrLXJ3LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvc3QtcmVzZXJ2ZWQtZGlzay1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9zdC1yZXNlcnZlZC1kaXNrLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2hvc3QtcmVzZXJ2ZWQtZGlzay1mb3JtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9zdFJlc2VydmVkRGlza0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcmVhZG9ubHkgZm9ybTogRm9ybUdyb3VwO1xuICAgIGFsZXJ0TWVzc2FnZTogc3RyaW5nO1xuICAgIGFsZXJ0VHlwZTogJ2FsZXJ0LWluZm8nIHwgJ2FsZXJ0LXN1Y2Nlc3MnIHwgJ2FsZXJ0LWRhbmdlcicgfCAnJztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2FsZXJ0U2VydmljZTogSUFsZXJ0U2VydmljZUNvbnRyYWN0O1xuICAgIHJlYWRvbmx5IHRyYW5zbGF0b3I6IElUcmFuc2xhdGlvblNlcnZpY2VDb250cmFjdDtcblxuICAgIHB1YmxpYyBkZXZpY2VJbmZvOiBJSG9zdFJlc2VydmVkRGlza01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZGlza1NlcnZpY2U6IEhvc3RSZXNlcnZlZERpc2tSV1NlcnZpY2UsXG4gICAgICAgIGFsZXJ0U2VydmljZVByb3ZpZGVyOiBBbGVydFNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlUHJvdmljZXI6IFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXIsXG4gICAgICAgIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZSA9IGFsZXJ0U2VydmljZVByb3ZpZGVyLmdldCgpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IgPSB0cmFuc2xhdGVTZXJ2aWNlUHJvdmljZXIuZ2V0KCk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgc3RvcmFnZVJvb3RGdWxsUGF0aDogbmV3IEZvcm1Db250cm9sKCcnLCB7IHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc3RvcmFnZVJvb3RGdWxsUGF0aCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3N0b3JhZ2VSb290RnVsbFBhdGgnKTsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5fZGlza1NlcnZpY2UucmVhZEFzeW5jKClcbiAgICAgICAgICAgIC50aGVuKGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mbyA9IGE7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlUm9vdEZ1bGxQYXRoLnNldFZhbHVlKGEuc3RvcmFnZVJvb3RGdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUoZmFsc2UsIG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5hYmxlKGZsYWc6IGJvb2xlYW4sIGV2dDogRXZlbnQpIHtcbiAgICAgICAgZXZ0ICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZW5hYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIC8vIEFzc3VtaW5nIHRoYXQgdGhlIHZhbHVlcyB0byBiZSBzdWJtaXR0ZWQgYXJlIG5ldyBhbmQgdmFsaWQuXG4gICAgICAgIC8vIHRvZG86IFByb2dyZXNzXG4gICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LWluZm8nO1xuICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9IFwiU3VibWl0dGluZyAuLi5cIjtcbiAgICAgICAgdGhpcy5fZGlza1NlcnZpY2Uud3JpdGVBc3luYyh0aGlzLmZvcm0udmFsdWUpXG4gICAgICAgICAgICAudGhlbihfID0+IHtcbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgbWVzc2FnZSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1zdWNjZXNzJztcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9IFwiSnVzdCB1cGRhdGVkIHN1Y2Nlc3NmdWxseS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnU3RvcmFnZSBTcGFjZSBSb290JywgJ1lvdSBqdXN0IHVwZGF0ZWQgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgc3RvcmFnZSBzcGFjZSByb290IScsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0sIF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LWRhbmdlcic7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmchJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=