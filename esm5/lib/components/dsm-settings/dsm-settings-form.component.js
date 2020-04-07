/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dsm-settings/dsm-settings-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { DsmSettingsRWService } from '../../services/dsm-settings-rw.service';
import { DsmUtilitiesService } from '../../services/dsm-utilities.service';
import { MessageSeverity, AlertServiceAbstractProvider, TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
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
        this.deviceUnit = 'dsu';
        this.steps = [];
        this._alertService = alertServiceProvider.get();
        this.translator = translateServiceProvicer.get();
        this.form = formBuilder.group({
            serverUrl: new FormControl('', { validators: [Validators.required] }),
            serverApiKey: new FormControl('', { validators: [Validators.required] })
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newServerUrl, newServerApiKey, _a;
            return tslib_1.__generator(this, function (_b) {
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
                        _b.trys.push([1, 9, , 10]);
                        this.steps.push({ action: 'Connecting to DSM ...', status: '' });
                        return [4 /*yield*/, this._utilitiesService.discoverEndpoints(newServerUrl)];
                    case 2:
                        _b.sent();
                        this.steps[this.steps.length - 1].status = 'Ok';
                        this.steps.push({ action: 'Validating API Key ...', status: '' });
                        if (!(this.deviceUnit == 'dsu')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._utilitiesService.pingFromDSUAsync(newServerUrl, newServerApiKey)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!(this.deviceUnit == 'dsp')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this._utilitiesService.pingFromDSPAsync(newServerUrl, newServerApiKey)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this._utilitiesService.pingFromDSMAsync(newServerUrl, newServerApiKey)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        this.steps[this.steps.length - 1].status = 'Ok';
                        this.passCheck = true;
                        this.alertType = 'alert-success';
                        return [3 /*break*/, 10];
                    case 9:
                        _a = _b.sent();
                        this.steps[this.steps.length - 1].status = 'Error';
                        this.alertType = 'alert-danger';
                        this.alertMessage = 'Fail to verify DSM information!';
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
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
            _this._alertService.showMessage('DSM Settings Updated', 'You just updated DSM Settings!', MessageSeverity.success);
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
        { type: Component, args: [{
                    selector: 'css-dsm-settings-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"serverUrl\">DSM Server URL</label>\n        <input formControlName=\"serverUrl\" required \n            type=\"text\" class=\"form-control\" id=\"serverUrl\" aria-describedby=\"serverUrlHelper\">\n        <small id=\"serverUrlHelper\" class=\"form-text text-muted\">\n            A DSM URL like <strong>https://dsm.cloudbodyguard.com</strong>\n        </small>\n        <div *ngIf=\"serverUrl.invalid && (serverUrl.dirty || serverUrl.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"serverUrl.errors.required\">\n                Server URL is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"form-group\">\n        <label for=\"serverApiKey\">DSM Server API Key</label>\n        <input formControlName=\"serverApiKey\" required\n               type=\"text\" class=\"form-control\" id=\"serverApiKey\" aria-describedby=\"serverApiKeyHelper\">\n        <small id=\"serverApiKeyHelper\" class=\"form-text text-muted\">\n            Please consult with DSM administrator for this value.\n        </small>\n        <div *ngIf=\"serverApiKey.invalid && (serverApiKey.dirty || serverApiKey.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"serverApiKey.errors.required\">\n                Server API Key is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"alert\" [ngClass]=\"alertType\">\n        <h6>{{alertMessage}}</h6>\n        <ol>\n            <li *ngFor=\"let m of steps\">\n                <span>{{m.action}}</span>\n                <strong class=\"ml-2\">{{m.status}}</strong>\n            </li>\n        </ol>\n    </div>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"button\" class=\"btn btn-warning px-4\" [disabled]=\"form.invalid || passCheck\" (click)=\"preSubmit()\">Verify</button>            \n            <button type=\"submit\" class=\"ml-2 btn btn-primary px-4\" [disabled]=\"form.invalid || !passCheck\">Submit</button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DsmSettingsFormComponent.ctorParameters = function () { return [
        { type: DsmSettingsRWService },
        { type: DsmUtilitiesService },
        { type: AlertServiceAbstractProvider },
        { type: TranslationServiceAbstractProvider },
        { type: FormBuilder }
    ]; };
    DsmSettingsFormComponent.propDecorators = {
        deviceUnit: [{ type: Input }]
    };
    return DsmSettingsFormComponent;
}());
export { DsmSettingsFormComponent };
if (false) {
    /** @type {?} */
    DsmSettingsFormComponent.prototype.deviceUnit;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNtLXNldHRpbmdzLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kc20tc2V0dGluZ3MvZHNtLXNldHRpbmdzLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFLE9BQU8sRUFDSCxlQUFlLEVBQ2YsNEJBQTRCLEVBRzVCLGtDQUFrQyxFQUNyQyxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRTlDLDRCQUdDOzs7SUFGRywrQkFBZTs7SUFDZiwrQkFBZTs7QUFHbkI7SUFrQkksa0NBQTZCLFVBQWdDLEVBQ3hDLGlCQUFzQyxFQUN2RCxvQkFBa0QsRUFDbEQsd0JBQTRELEVBQzVELFdBQXdCO1FBSkMsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7UUFDeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQVpsRCxlQUFVLEdBQTBCLEtBQUssQ0FBQztRQU1uRCxVQUFLLEdBQXlCLEVBQUUsQ0FBQztRQVc3QixJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzFCLFNBQVMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFB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S0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxnQ0FBZ0MsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEgsQ0FBQzs7OztRQUFFLFVBQUEsQ0FBQztZQUNBLEtBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsdUJBQXVCLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7SUFFWCxDQUFDOztnQkFuSEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLHE5RUFBaUQ7O2lCQUVwRDs7OztnQkFwQlEsb0JBQW9CO2dCQUNwQixtQkFBbUI7Z0JBSXhCLDRCQUE0QjtnQkFHNUIsa0NBQWtDO2dCQVY3QixXQUFXOzs7NkJBeUJmLEtBQUs7O0lBNkdWLCtCQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0EvR1ksd0JBQXdCOzs7SUFFakMsOENBQW1EOztJQUNuRCx3Q0FBeUI7O0lBQ3pCLGdEQUFxQjs7SUFDckIsNkNBQWdFOztJQUVoRSw2Q0FBbUI7O0lBQ25CLHlDQUFpQzs7Ozs7SUFFakMsaURBQXNEOztJQUN0RCw4Q0FBaUQ7Ozs7O0lBRXJDLDhDQUFpRDs7Ozs7SUFDekQscURBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRHNtU2V0dGluZ3NSV1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kc20tc2V0dGluZ3Mtcncuc2VydmljZSc7XG5pbXBvcnQgeyBEc21VdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHNtLXV0aWxpdGllcy5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgICBNZXNzYWdlU2V2ZXJpdHksXG4gICAgQWxlcnRTZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBJQWxlcnRTZXJ2aWNlQ29udHJhY3QsXG4gICAgSVRyYW5zbGF0aW9uU2VydmljZUNvbnRyYWN0LFxuICAgIFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW50ZXJmYWNlIElTdGVwUHJvZ3Jlc3Mge1xuICAgIGFjdGlvbjogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Nzcy1kc20tc2V0dGluZ3MtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RzbS1zZXR0aW5ncy1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kc20tc2V0dGluZ3MtZm9ybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERzbVNldHRpbmdzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBkZXZpY2VVbml0OiAnZHN1JyB8ICdkc20nIHwgJ2RzcCcgPSAnZHN1JztcbiAgICByZWFkb25seSBmb3JtOiBGb3JtR3JvdXA7XG4gICAgYWxlcnRNZXNzYWdlOiBzdHJpbmc7XG4gICAgYWxlcnRUeXBlOiAnYWxlcnQtaW5mbycgfCAnYWxlcnQtc3VjY2VzcycgfCAnYWxlcnQtZGFuZ2VyJyB8ICcnO1xuXG4gICAgcGFzc0NoZWNrOiBib29sZWFuO1xuICAgIHN0ZXBzOiBBcnJheTxJU3RlcFByb2dyZXNzPiA9IFtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYWxlcnRTZXJ2aWNlOiBJQWxlcnRTZXJ2aWNlQ29udHJhY3Q7XG4gICAgcmVhZG9ubHkgdHJhbnNsYXRvcjogSVRyYW5zbGF0aW9uU2VydmljZUNvbnRyYWN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfcndTZXJ2aWNlOiBEc21TZXR0aW5nc1JXU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfdXRpbGl0aWVzU2VydmljZTogRHNtVXRpbGl0aWVzU2VydmljZSxcbiAgICAgICAgYWxlcnRTZXJ2aWNlUHJvdmlkZXI6IEFsZXJ0U2VydmljZUFic3RyYWN0UHJvdmlkZXIsXG4gICAgICAgIHRyYW5zbGF0ZVNlcnZpY2VQcm92aWNlcjogVHJhbnNsYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICAgICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cbiAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlID0gYWxlcnRTZXJ2aWNlUHJvdmlkZXIuZ2V0KCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IHRyYW5zbGF0ZVNlcnZpY2VQcm92aWNlci5nZXQoKTtcblxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBzZXJ2ZXJVcmw6IG5ldyBGb3JtQ29udHJvbCgnJywgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSksXG4gICAgICAgICAgICBzZXJ2ZXJBcGlLZXk6IG5ldyBGb3JtQ29udHJvbCgnJywgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlcnZlclVybCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3NlcnZlclVybCcpOyB9XG4gICAgZ2V0IHNlcnZlckFwaUtleSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3NlcnZlckFwaUtleScpOyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcndTZXJ2aWNlLnJlYWRBc3luYygpXG4gICAgICAgICAgICAudGhlbihhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zZXJ2ZXJVcmwgJiYgYS5zZXJ2ZXJBcGlLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGl0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5hYmxlKGZsYWc6IGJvb2xlYW4sIGV2dDogRXZlbnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgdGhpcy5mb3JtLmVuYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5zdGVwcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcHJlU3VibWl0KCkge1xuICAgICAgICAvLyBBc3N1bWluZyB0aGF0IHRoZSB2YWx1ZXMgdG8gYmUgc3VibWl0dGVkIGFyZSBuZXcgYW5kIHZhbGlkLlxuICAgICAgICAvLyB0b2RvOiBQcm9ncmVzc1xuICAgICAgICB0aGlzLnBhc3NDaGVjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0ZXBzID0gW107XG4gICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LWluZm8nO1xuICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9IFwiVmVyaWZ5aW5nIERTTSBJbmZvcm1hdGlvblwiO1xuXG4gICAgICAgIGNvbnN0IG5ld1NlcnZlclVybCA9IHRoaXMuc2VydmVyVXJsLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdTZXJ2ZXJBcGlLZXkgPSB0aGlzLnNlcnZlckFwaUtleS52YWx1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdGVwcy5wdXNoKHsgYWN0aW9uOiAnQ29ubmVjdGluZyB0byBEU00gLi4uJywgc3RhdHVzOiAnJyB9KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3V0aWxpdGllc1NlcnZpY2UuZGlzY292ZXJFbmRwb2ludHMobmV3U2VydmVyVXJsKTtcbiAgICAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5zdGVwcy5sZW5ndGggLSAxXS5zdGF0dXMgPSAnT2snO1xuXG4gICAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goeyBhY3Rpb246ICdWYWxpZGF0aW5nIEFQSSBLZXkgLi4uJywgc3RhdHVzOiAnJyB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZVVuaXQgPT0gJ2RzdScpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl91dGlsaXRpZXNTZXJ2aWNlLnBpbmdGcm9tRFNVQXN5bmMobmV3U2VydmVyVXJsLCBuZXdTZXJ2ZXJBcGlLZXkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRldmljZVVuaXQgPT0gJ2RzcCcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl91dGlsaXRpZXNTZXJ2aWNlLnBpbmdGcm9tRFNQQXN5bmMobmV3U2VydmVyVXJsLCBuZXdTZXJ2ZXJBcGlLZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl91dGlsaXRpZXNTZXJ2aWNlLnBpbmdGcm9tRFNNQXN5bmMobmV3U2VydmVyVXJsLCBuZXdTZXJ2ZXJBcGlLZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0ZXBzW3RoaXMuc3RlcHMubGVuZ3RoIC0gMV0uc3RhdHVzID0gJ09rJztcblxuICAgICAgICAgICAgdGhpcy5wYXNzQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSAnYWxlcnQtc3VjY2Vzcyc7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5zdGVwc1t0aGlzLnN0ZXBzLmxlbmd0aCAtIDFdLnN0YXR1cyA9ICdFcnJvcic7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1kYW5nZXInO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnRmFpbCB0byB2ZXJpZnkgRFNNIGluZm9ybWF0aW9uISc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIC8vIEFzc3VtaW5nIHRoYXQgdGhlIHZhbHVlcyB0byBiZSBzdWJtaXR0ZWQgYXJlIG5ldyBhbmQgdmFsaWQuXG4gICAgICAgIC8vIHRvZG86IFByb2dyZXNzXG4gICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LWluZm8nO1xuICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9IFwiU3VibWl0dGluZyAuLi5cIjtcbiAgICAgICAgdGhpcy5fcndTZXJ2aWNlLndyaXRlQXN5bmModGhpcy5mb3JtLnZhbHVlKVxuICAgICAgICAgICAgLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbm90aWZ5IG1lc3NhZ2UgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSAnYWxlcnQtc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSBcIkp1c3QgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RTTSBTZXR0aW5ncyBVcGRhdGVkJywgJ1lvdSBqdXN0IHVwZGF0ZWQgRFNNIFNldHRpbmdzIScsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0sIF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LWRhbmdlcic7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmchJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19