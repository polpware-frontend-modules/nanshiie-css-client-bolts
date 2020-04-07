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
export class DsmSettingsFormComponent {
    /**
     * @param {?} _rwService
     * @param {?} _utilitiesService
     * @param {?} alertServiceProvider
     * @param {?} translateServiceProvicer
     * @param {?} formBuilder
     */
    constructor(_rwService, _utilitiesService, alertServiceProvider, translateServiceProvicer, formBuilder) {
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
    /**
     * @return {?}
     */
    get serverUrl() { return this.form.get('serverUrl'); }
    /**
     * @return {?}
     */
    get serverApiKey() { return this.form.get('serverApiKey'); }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._rwService.readAsync()
            .then((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (a.serverUrl && a.serverApiKey) {
                this.form.setValue(a);
                // Disable it
                this.form.disable();
            }
        }));
    }
    /**
     * @param {?} flag
     * @param {?} evt
     * @return {?}
     */
    enable(flag, evt) {
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
    }
    /**
     * @return {?}
     */
    preSubmit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Assuming that the values to be submitted are new and valid.
            // todo: Progress
            this.passCheck = false;
            this.steps = [];
            this.alertType = 'alert-info';
            this.alertMessage = "Verifying DSM Information";
            /** @type {?} */
            const newServerUrl = this.serverUrl.value;
            /** @type {?} */
            const newServerApiKey = this.serverApiKey.value;
            try {
                this.steps.push({ action: 'Connecting to DSM ...', status: '' });
                yield this._utilitiesService.discoverEndpoints(newServerUrl);
                this.steps[this.steps.length - 1].status = 'Ok';
                this.steps.push({ action: 'Validating API Key ...', status: '' });
                if (this.deviceUnit == 'dsu') {
                    yield this._utilitiesService.pingFromDSUAsync(newServerUrl, newServerApiKey);
                }
                else if (this.deviceUnit == 'dsp') {
                    yield this._utilitiesService.pingFromDSPAsync(newServerUrl, newServerApiKey);
                }
                else {
                    yield this._utilitiesService.pingFromDSMAsync(newServerUrl, newServerApiKey);
                }
                this.steps[this.steps.length - 1].status = 'Ok';
                this.passCheck = true;
                this.alertType = 'alert-success';
            }
            catch (_a) {
                this.steps[this.steps.length - 1].status = 'Error';
                this.alertType = 'alert-danger';
                this.alertMessage = 'Fail to verify DSM information!';
            }
        });
    }
    /**
     * @return {?}
     */
    submit() {
        // Assuming that the values to be submitted are new and valid.
        // todo: Progress
        this.alertType = 'alert-info';
        this.alertMessage = "Submitting ...";
        this._rwService.writeAsync(this.form.value)
            .then((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            // notify message                
            this.alertType = 'alert-success';
            this.alertMessage = "Just updated successfully.";
            this.form.disable();
            this._alertService.showMessage('DSM Settings Updated', 'You just updated DSM Settings!', MessageSeverity.success);
        }), (/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.alertType = 'alert-danger';
            this.alertMessage = 'Something went wrong!';
        }));
    }
}
DsmSettingsFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'css-dsm-settings-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"serverUrl\">DSM Server URL</label>\n        <input formControlName=\"serverUrl\" required \n            type=\"text\" class=\"form-control\" id=\"serverUrl\" aria-describedby=\"serverUrlHelper\">\n        <small id=\"serverUrlHelper\" class=\"form-text text-muted\">\n            A DSM URL like <strong>https://dsm.cloudbodyguard.com</strong>\n        </small>\n        <div *ngIf=\"serverUrl.invalid && (serverUrl.dirty || serverUrl.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"serverUrl.errors.required\">\n                Server URL is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"form-group\">\n        <label for=\"serverApiKey\">DSM Server API Key</label>\n        <input formControlName=\"serverApiKey\" required\n               type=\"text\" class=\"form-control\" id=\"serverApiKey\" aria-describedby=\"serverApiKeyHelper\">\n        <small id=\"serverApiKeyHelper\" class=\"form-text text-muted\">\n            Please consult with DSM administrator for this value.\n        </small>\n        <div *ngIf=\"serverApiKey.invalid && (serverApiKey.dirty || serverApiKey.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"serverApiKey.errors.required\">\n                Server API Key is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"alert\" [ngClass]=\"alertType\">\n        <h6>{{alertMessage}}</h6>\n        <ol>\n            <li *ngFor=\"let m of steps\">\n                <span>{{m.action}}</span>\n                <strong class=\"ml-2\">{{m.status}}</strong>\n            </li>\n        </ol>\n    </div>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"button\" class=\"btn btn-warning px-4\" [disabled]=\"form.invalid || passCheck\" (click)=\"preSubmit()\">Verify</button>            \n            <button type=\"submit\" class=\"ml-2 btn btn-primary px-4\" [disabled]=\"form.invalid || !passCheck\">Submit</button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DsmSettingsFormComponent.ctorParameters = () => [
    { type: DsmSettingsRWService },
    { type: DsmUtilitiesService },
    { type: AlertServiceAbstractProvider },
    { type: TranslationServiceAbstractProvider },
    { type: FormBuilder }
];
DsmSettingsFormComponent.propDecorators = {
    deviceUnit: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNtLXNldHRpbmdzLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kc20tc2V0dGluZ3MvZHNtLXNldHRpbmdzLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFLE9BQU8sRUFDSCxlQUFlLEVBQ2YsNEJBQTRCLEVBRzVCLGtDQUFrQyxFQUNyQyxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRTlDLDRCQUdDOzs7SUFGRywrQkFBZTs7SUFDZiwrQkFBZTs7QUFRbkIsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7SUFhakMsWUFBNkIsVUFBZ0MsRUFDeEMsaUJBQXNDLEVBQ3ZELG9CQUFrRCxFQUNsRCx3QkFBNEQsRUFDNUQsV0FBd0I7UUFKQyxlQUFVLEdBQVYsVUFBVSxDQUFzQjtRQUN4QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO1FBWmxELGVBQVUsR0FBMEIsS0FBSyxDQUFDO1FBTW5ELFVBQUssR0FBeUIsRUFBRSxDQUFDO1FBVzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDMUIsU0FBUyxFQUFFLElBQUks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Q3RILENBQUM7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRTtZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsdUJBQXVCLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7SUFFWCxDQUFDOzs7WUFuSEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHE5RUFBaUQ7O2FBRXBEOzs7O1lBcEJRLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFJeEIsNEJBQTRCO1lBRzVCLGtDQUFrQztZQVY3QixXQUFXOzs7eUJBeUJmLEtBQUs7Ozs7SUFBTiw4Q0FBbUQ7O0lBQ25ELHdDQUF5Qjs7SUFDekIsZ0RBQXFCOztJQUNyQiw2Q0FBZ0U7O0lBRWhFLDZDQUFtQjs7SUFDbkIseUNBQWlDOzs7OztJQUVqQyxpREFBc0Q7O0lBQ3RELDhDQUFpRDs7Ozs7SUFFckMsOENBQWlEOzs7OztJQUN6RCxxREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEc21TZXR0aW5nc1JXU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RzbS1zZXR0aW5ncy1ydy5zZXJ2aWNlJztcbmltcG9ydCB7IERzbVV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kc20tdXRpbGl0aWVzLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICAgIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBBbGVydFNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElBbGVydFNlcnZpY2VDb250cmFjdCxcbiAgICBJVHJhbnNsYXRpb25TZXJ2aWNlQ29udHJhY3QsXG4gICAgVHJhbnNsYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbnRlcmZhY2UgSVN0ZXBQcm9ncmVzcyB7XG4gICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3NzLWRzbS1zZXR0aW5ncy1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHNtLXNldHRpbmdzLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RzbS1zZXR0aW5ncy1mb3JtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHNtU2V0dGluZ3NGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGRldmljZVVuaXQ6ICdkc3UnIHwgJ2RzbScgfCAnZHNwJyA9ICdkc3UnO1xuICAgIHJlYWRvbmx5IGZvcm06IEZvcm1Hcm91cDtcbiAgICBhbGVydE1lc3NhZ2U6IHN0cmluZztcbiAgICBhbGVydFR5cGU6ICdhbGVydC1pbmZvJyB8ICdhbGVydC1zdWNjZXNzJyB8ICdhbGVydC1kYW5nZXInIHwgJyc7XG5cbiAgICBwYXNzQ2hlY2s6IGJvb2xlYW47XG4gICAgc3RlcHM6IEFycmF5PElTdGVwUHJvZ3Jlc3M+ID0gW107XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hbGVydFNlcnZpY2U6IElBbGVydFNlcnZpY2VDb250cmFjdDtcbiAgICByZWFkb25seSB0cmFuc2xhdG9yOiBJVHJhbnNsYXRpb25TZXJ2aWNlQ29udHJhY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9yd1NlcnZpY2U6IERzbVNldHRpbmdzUldTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF91dGlsaXRpZXNTZXJ2aWNlOiBEc21VdGlsaXRpZXNTZXJ2aWNlLFxuICAgICAgICBhbGVydFNlcnZpY2VQcm92aWRlcjogQWxlcnRTZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICAgICAgdHJhbnNsYXRlU2VydmljZVByb3ZpY2VyOiBUcmFuc2xhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgICAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblxuICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2UgPSBhbGVydFNlcnZpY2VQcm92aWRlci5nZXQoKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdG9yID0gdHJhbnNsYXRlU2VydmljZVByb3ZpY2VyLmdldCgpO1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIHNlcnZlclVybDogbmV3IEZvcm1Db250cm9sKCcnLCB7IHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSxcbiAgICAgICAgICAgIHNlcnZlckFwaUtleTogbmV3IEZvcm1Db250cm9sKCcnLCB7IHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2VydmVyVXJsKCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgnc2VydmVyVXJsJyk7IH1cbiAgICBnZXQgc2VydmVyQXBpS2V5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgnc2VydmVyQXBpS2V5Jyk7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9yd1NlcnZpY2UucmVhZEFzeW5jKClcbiAgICAgICAgICAgIC50aGVuKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnNlcnZlclVybCAmJiBhLnNlcnZlckFwaUtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUoYSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgaXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbmFibGUoZmxhZzogYm9vbGVhbiwgZXZ0OiBFdmVudCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZW5hYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwcmVTdWJtaXQoKSB7XG4gICAgICAgIC8vIEFzc3VtaW5nIHRoYXQgdGhlIHZhbHVlcyB0byBiZSBzdWJtaXR0ZWQgYXJlIG5ldyBhbmQgdmFsaWQuXG4gICAgICAgIC8vIHRvZG86IFByb2dyZXNzXG4gICAgICAgIHRoaXMucGFzc0NoZWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RlcHMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGVydFR5cGUgPSAnYWxlcnQtaW5mbyc7XG4gICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gXCJWZXJpZnlpbmcgRFNNIEluZm9ybWF0aW9uXCI7XG5cbiAgICAgICAgY29uc3QgbmV3U2VydmVyVXJsID0gdGhpcy5zZXJ2ZXJVcmwudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1NlcnZlckFwaUtleSA9IHRoaXMuc2VydmVyQXBpS2V5LnZhbHVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goeyBhY3Rpb246ICdDb25uZWN0aW5nIHRvIERTTSAuLi4nLCBzdGF0dXM6ICcnIH0pO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXRpbGl0aWVzU2VydmljZS5kaXNjb3ZlckVuZHBvaW50cyhuZXdTZXJ2ZXJVcmwpO1xuICAgICAgICAgICAgdGhpcy5zdGVwc1t0aGlzLnN0ZXBzLmxlbmd0aCAtIDFdLnN0YXR1cyA9ICdPayc7XG5cbiAgICAgICAgICAgIHRoaXMuc3RlcHMucHVzaCh7IGFjdGlvbjogJ1ZhbGlkYXRpbmcgQVBJIEtleSAuLi4nLCBzdGF0dXM6ICcnIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlVW5pdCA9PSAnZHN1Jykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3V0aWxpdGllc1NlcnZpY2UucGluZ0Zyb21EU1VBc3luYyhuZXdTZXJ2ZXJVcmwsIG5ld1NlcnZlckFwaUtleSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGV2aWNlVW5pdCA9PSAnZHNwJykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3V0aWxpdGllc1NlcnZpY2UucGluZ0Zyb21EU1BBc3luYyhuZXdTZXJ2ZXJVcmwsIG5ld1NlcnZlckFwaUtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3V0aWxpdGllc1NlcnZpY2UucGluZ0Zyb21EU01Bc3luYyhuZXdTZXJ2ZXJVcmwsIG5ld1NlcnZlckFwaUtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5zdGVwcy5sZW5ndGggLSAxXS5zdGF0dXMgPSAnT2snO1xuXG4gICAgICAgICAgICB0aGlzLnBhc3NDaGVjayA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1zdWNjZXNzJztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzW3RoaXMuc3RlcHMubGVuZ3RoIC0gMV0uc3RhdHVzID0gJ0Vycm9yJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LWRhbmdlcic7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICdGYWlsIHRvIHZlcmlmeSBEU00gaW5mb3JtYXRpb24hJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgLy8gQXNzdW1pbmcgdGhhdCB0aGUgdmFsdWVzIHRvIGJlIHN1Ym1pdHRlZCBhcmUgbmV3IGFuZCB2YWxpZC5cbiAgICAgICAgLy8gdG9kbzogUHJvZ3Jlc3NcbiAgICAgICAgdGhpcy5hbGVydFR5cGUgPSAnYWxlcnQtaW5mbyc7XG4gICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gXCJTdWJtaXR0aW5nIC4uLlwiO1xuICAgICAgICB0aGlzLl9yd1NlcnZpY2Uud3JpdGVBc3luYyh0aGlzLmZvcm0udmFsdWUpXG4gICAgICAgICAgICAudGhlbihfID0+IHtcbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgbWVzc2FnZSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1zdWNjZXNzJztcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9IFwiSnVzdCB1cGRhdGVkIHN1Y2Nlc3NmdWxseS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnRFNNIFNldHRpbmdzIFVwZGF0ZWQnLCAnWW91IGp1c3QgdXBkYXRlZCBEU00gU2V0dGluZ3MhJywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSwgXyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSAnYWxlcnQtZGFuZ2VyJztcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG59XG4iXX0=