/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dsm-settings/dsm-settings-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
                /** @type {?} */
                const a = yield this._utilitiesService.discoverEndpoints(newServerUrl);
                this.steps[this.steps.length - 1].status = 'Ok';
                this.steps.push({ action: 'Validating API Key ...', status: '' });
                yield this._utilitiesService.pingFromDSUAsync(newServerUrl, newServerApiKey);
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
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNtLXNldHRpbmdzLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kc20tc2V0dGluZ3MvZHNtLXNldHRpbmdzLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUNILGVBQWUsRUFDZiw0QkFBNEIsRUFHNUIsa0NBQWtDLEVBQ3JDLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFOUMsNEJBR0M7OztJQUZHLCtCQUFlOztJQUNmLCtCQUFlOztBQVFuQixNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7OztJQVlqQyxZQUE2QixVQUFnQyxFQUN4QyxpQkFBc0MsRUFDdkQsb0JBQWtELEVBQ2xELHdCQUE0RCxFQUM1RCxXQUF3QjtRQUpDLGVBQVUsR0FBVixVQUFVLENBQXNCO1FBQ3hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7UUFOM0QsVUFBSyxHQUF5QixFQUFFLENBQUM7UUFXN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMxQixTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENB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OztJQUN6QixnREFBcUI7O0lBQ3JCLDZDQUFnRTs7SUFFaEUsNkNBQW1COztJQUNuQix5Q0FBaUM7Ozs7O0lBRWpDLGlEQUFzRDs7SUFDdEQsOENBQWlEOzs7OztJQUVyQyw4Q0FBaUQ7Ozs7O0lBQ3pELHFEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRHNtU2V0dGluZ3NSV1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kc20tc2V0dGluZ3Mtcncuc2VydmljZSc7XG5pbXBvcnQgeyBEc21VdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHNtLXV0aWxpdGllcy5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgICBNZXNzYWdlU2V2ZXJpdHksXG4gICAgQWxlcnRTZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBJQWxlcnRTZXJ2aWNlQ29udHJhY3QsXG4gICAgSVRyYW5zbGF0aW9uU2VydmljZUNvbnRyYWN0LFxuICAgIFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW50ZXJmYWNlIElTdGVwUHJvZ3Jlc3Mge1xuICAgIGFjdGlvbjogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Nzcy1kc20tc2V0dGluZ3MtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RzbS1zZXR0aW5ncy1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kc20tc2V0dGluZ3MtZm9ybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERzbVNldHRpbmdzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICByZWFkb25seSBmb3JtOiBGb3JtR3JvdXA7XG4gICAgYWxlcnRNZXNzYWdlOiBzdHJpbmc7XG4gICAgYWxlcnRUeXBlOiAnYWxlcnQtaW5mbycgfCAnYWxlcnQtc3VjY2VzcycgfCAnYWxlcnQtZGFuZ2VyJyB8ICcnO1xuXG4gICAgcGFzc0NoZWNrOiBib29sZWFuO1xuICAgIHN0ZXBzOiBBcnJheTxJU3RlcFByb2dyZXNzPiA9IFtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYWxlcnRTZXJ2aWNlOiBJQWxlcnRTZXJ2aWNlQ29udHJhY3Q7XG4gICAgcmVhZG9ubHkgdHJhbnNsYXRvcjogSVRyYW5zbGF0aW9uU2VydmljZUNvbnRyYWN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfcndTZXJ2aWNlOiBEc21TZXR0aW5nc1JXU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfdXRpbGl0aWVzU2VydmljZTogRHNtVXRpbGl0aWVzU2VydmljZSxcbiAgICAgICAgYWxlcnRTZXJ2aWNlUHJvdmlkZXI6IEFsZXJ0U2VydmljZUFic3RyYWN0UHJvdmlkZXIsXG4gICAgICAgIHRyYW5zbGF0ZVNlcnZpY2VQcm92aWNlcjogVHJhbnNsYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICAgICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cbiAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlID0gYWxlcnRTZXJ2aWNlUHJvdmlkZXIuZ2V0KCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IHRyYW5zbGF0ZVNlcnZpY2VQcm92aWNlci5nZXQoKTtcblxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBzZXJ2ZXJVcmw6IG5ldyBGb3JtQ29udHJvbCgnJywgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSksXG4gICAgICAgICAgICBzZXJ2ZXJBcGlLZXk6IG5ldyBGb3JtQ29udHJvbCgnJywgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlcnZlclVybCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3NlcnZlclVybCcpOyB9XG4gICAgZ2V0IHNlcnZlckFwaUtleSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3NlcnZlckFwaUtleScpOyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcndTZXJ2aWNlLnJlYWRBc3luYygpXG4gICAgICAgICAgICAudGhlbihhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zZXJ2ZXJVcmwgJiYgYS5zZXJ2ZXJBcGlLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGl0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5hYmxlKGZsYWc6IGJvb2xlYW4sIGV2dDogRXZlbnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgdGhpcy5mb3JtLmVuYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5zdGVwcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcHJlU3VibWl0KCkge1xuICAgICAgICAvLyBBc3N1bWluZyB0aGF0IHRoZSB2YWx1ZXMgdG8gYmUgc3VibWl0dGVkIGFyZSBuZXcgYW5kIHZhbGlkLlxuICAgICAgICAvLyB0b2RvOiBQcm9ncmVzc1xuICAgICAgICB0aGlzLnBhc3NDaGVjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0ZXBzID0gW107XG4gICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LWluZm8nO1xuICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9IFwiVmVyaWZ5aW5nIERTTSBJbmZvcm1hdGlvblwiO1xuXG4gICAgICAgIGNvbnN0IG5ld1NlcnZlclVybCA9IHRoaXMuc2VydmVyVXJsLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdTZXJ2ZXJBcGlLZXkgPSB0aGlzLnNlcnZlckFwaUtleS52YWx1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdGVwcy5wdXNoKHsgYWN0aW9uOiAnQ29ubmVjdGluZyB0byBEU00gLi4uJywgc3RhdHVzOiAnJyB9KTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBhd2FpdCB0aGlzLl91dGlsaXRpZXNTZXJ2aWNlLmRpc2NvdmVyRW5kcG9pbnRzKG5ld1NlcnZlclVybCk7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzW3RoaXMuc3RlcHMubGVuZ3RoIC0gMV0uc3RhdHVzID0gJ09rJztcblxuICAgICAgICAgICAgdGhpcy5zdGVwcy5wdXNoKHsgYWN0aW9uOiAnVmFsaWRhdGluZyBBUEkgS2V5IC4uLicsIHN0YXR1czogJycgfSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl91dGlsaXRpZXNTZXJ2aWNlLnBpbmdGcm9tRFNVQXN5bmMobmV3U2VydmVyVXJsLCBuZXdTZXJ2ZXJBcGlLZXkpO1xuICAgICAgICAgICAgdGhpcy5zdGVwc1t0aGlzLnN0ZXBzLmxlbmd0aCAtIDFdLnN0YXR1cyA9ICdPayc7XG5cbiAgICAgICAgICAgIHRoaXMucGFzc0NoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LXN1Y2Nlc3MnO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5zdGVwcy5sZW5ndGggLSAxXS5zdGF0dXMgPSAnRXJyb3InO1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSAnYWxlcnQtZGFuZ2VyJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJ0ZhaWwgdG8gdmVyaWZ5IERTTSBpbmZvcm1hdGlvbiEnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICAvLyBBc3N1bWluZyB0aGF0IHRoZSB2YWx1ZXMgdG8gYmUgc3VibWl0dGVkIGFyZSBuZXcgYW5kIHZhbGlkLlxuICAgICAgICAvLyB0b2RvOiBQcm9ncmVzc1xuICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1pbmZvJztcbiAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSBcIlN1Ym1pdHRpbmcgLi4uXCI7XG4gICAgICAgIHRoaXMuX3J3U2VydmljZS53cml0ZUFzeW5jKHRoaXMuZm9ybS52YWx1ZSlcbiAgICAgICAgICAgIC50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIC8vIG5vdGlmeSBtZXNzYWdlICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LXN1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gXCJKdXN0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdEU00gU2V0dGluZ3MgVXBkYXRlZCcsICdZb3UganVzdCB1cGRhdGVkIERTTSBTZXR0aW5ncyEnLCBNZXNzYWdlU2V2ZXJpdHkuc3VjY2Vzcyk7XG4gICAgICAgICAgICB9LCBfID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1kYW5nZXInO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nISc7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cbn1cbiJdfQ==