import { __awaiter } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, NgModule } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MessageSeverity, AlertServiceAbstractProvider, TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/dsm-settings.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IDsmSettingsModel() { }
if (false) {
    /** @type {?} */
    IDsmSettingsModel.prototype.serverUrl;
    /** @type {?} */
    IDsmSettingsModel.prototype.serverApiKey;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/dsu-spec.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IDsuSpecModel() { }
if (false) {
    /** @type {?} */
    IDsuSpecModel.prototype.id;
    /** @type {?} */
    IDsuSpecModel.prototype.deviceUniqueId;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.ipV4;
    /** @type {?} */
    IDsuSpecModel.prototype.host;
    /** @type {?} */
    IDsuSpecModel.prototype.protocol;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.prettyProtocol;
    /** @type {?} */
    IDsuSpecModel.prototype.port;
    /** @type {?} */
    IDsuSpecModel.prototype.deviceName;
    /** @type {?} */
    IDsuSpecModel.prototype.deviceArch;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.prettyDeviceArch;
    /** @type {?} */
    IDsuSpecModel.prototype.capacity;
    /** @type {?} */
    IDsuSpecModel.prototype.threshold;
    /** @type {?} */
    IDsuSpecModel.prototype.apiKey;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.rank;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.status;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.prettyStatus;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.usage;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.discoverEndpoint;
    /** @type {?|undefined} */
    IDsuSpecModel.prototype.ipAddresses;
}
/**
 * @record
 */
function IDsuSpecUpdatedModel() { }
if (false) {
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.ipV4;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.host;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.protocol;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.port;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.deviceName;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.deviceArch;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.capacity;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.threshold;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.apiKey;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.status;
    /** @type {?|undefined} */
    IDsuSpecUpdatedModel.prototype.discoverEndpoint;
}
/**
 * @param {?} oldSpec
 * @param {?} newSpec
 * @return {?}
 */
function calculateDsuSpecChanges(oldSpec, newSpec) {
    /** @type {?} */
    const fields = [
        'ipV4',
        'host',
        'protocol',
        'port',
        'deviceName',
        'deviceArch',
        'capacity',
        'threshold',
        'apiKey',
        'status',
        'discoverEndpoint'
    ];
    /** @type {?} */
    const ret = {};
    fields.forEach((/**
     * @param {?} f
     * @return {?}
     */
    f => {
        if (newSpec[f] !== oldSpec[f]) {
            ret[f] = newSpec[f];
        }
    }));
    return ret;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/runtime-configuration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// We on purpose use get/set to retrieve values and
// store values onto corresponding private properties,
// as these properties may change at run time. We need to
// lazily decide the values of these properties. 
class RuntimeConfiguration {
    /**
     * @return {?}
     */
    get dsmSettingsPath() {
        return this._dsmSettingsPath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsmSettingsPath(value) {
        this._dsmSettingsPath = value;
    }
    /**
     * @return {?}
     */
    get dsuLookupPath() {
        return this._dsuLookupPath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsuLookupPath(value) {
        this._dsuLookupPath = value;
    }
    /**
     * @return {?}
     */
    get dsuRegistarPath() {
        return this._dsuRegistarPath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsuRegistarPath(value) {
        this._dsuRegistarPath = value;
    }
    /**
     * @return {?}
     */
    get dsuUpdatePath() {
        return this._dsuUpdatePath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsuUpdatePath(value) {
        this._dsuUpdatePath = value;
    }
    /**
     * @return {?}
     */
    get dsuUndoRegisterPath() {
        return this._dsuUndoRegisterPath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsuUndoRegisterPath(value) {
        this._dsuUndoRegisterPath = value;
    }
    /**
     * @return {?}
     */
    get dsmServerUrl() {
        return this._dsmServerUrl;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsmServerUrl(value) {
        this._dsmServerUrl = value;
    }
    /**
     * @return {?}
     */
    get dsmServerApiKey4DSU() {
        return this._dsmServerApiKey4DSU;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsmServerApiKey4DSU(value) {
        this._dsmServerApiKey4DSU = value;
    }
    /**
     * @return {?}
     */
    get dsmServerApiKey4DSP() {
        return this._dsmServerApiKey4DSP;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsmServerApiKey4DSP(value) {
        this._dsmServerApiKey4DSP = value;
    }
    /**
     * @return {?}
     */
    get dsmServerApiKey4DSM() {
        return this._dsmServerApiKey4DSM;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dsmServerApiKey4DSM(value) {
        this._dsmServerApiKey4DSM = value;
    }
    /**
     * @return {?}
     */
    get discoverDSMEndpoint() {
        return 'api/discover';
    }
    /**
     * @return {?}
     */
    get pingDSMEndpoint4DSU() {
        return this._pingDSMFromDSU;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pingDSMEndpoint4DSU(value) {
        this._pingDSMFromDSU = value;
    }
    /**
     * @return {?}
     */
    get pingDSMEndpoint4DSP() {
        return this._pingDSMFromDSP;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pingDSMEndpoint4DSP(value) {
        this._pingDSMFromDSP = value;
    }
    /**
     * @return {?}
     */
    get pingDSMEndpoint4DSM() {
        return this._pingDSMFromDSM;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pingDSMEndpoint4DSM(value) {
        this._pingDSMFromDSM = value;
    }
    /**
     * @return {?}
     */
    get hostReservedDiskSettingPath() {
        return this._hostReservedDiskSettingPath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hostReservedDiskSettingPath(value) {
        this._hostReservedDiskSettingPath = value;
    }
}
RuntimeConfiguration.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ RuntimeConfiguration.ngInjectableDef = ɵɵdefineInjectable({ factory: function RuntimeConfiguration_Factory() { return new RuntimeConfiguration(); }, token: RuntimeConfiguration, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsmSettingsPath;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsuLookupPath;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsuRegistarPath;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsuUpdatePath;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsuUndoRegisterPath;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsmServerUrl;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsmServerApiKey4DSU;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsmServerApiKey4DSP;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._dsmServerApiKey4DSM;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._pingDSMFromDSU;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._pingDSMFromDSP;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._pingDSMFromDSM;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._hostReservedDiskSettingPath;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dsm-settings-rw.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* Read and write dsm settings */
class DsmSettingsRWService {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ DsmSettingsRWService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DsmSettingsRWService_Factory() { return new DsmSettingsRWService(ɵɵinject(HttpClient), ɵɵinject(RuntimeConfiguration)); }, token: DsmSettingsRWService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dsm-utilities.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DsmUtilitiesService {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ DsmUtilitiesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DsmUtilitiesService_Factory() { return new DsmUtilitiesService(ɵɵinject(HttpClient), ɵɵinject(RuntimeConfiguration)); }, token: DsmUtilitiesService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dsm-settings/dsm-settings-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class DsmSettingsFormComponent {
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
        return __awaiter(this, void 0, void 0, function* () {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dsu-registar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DsuRegistarService {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ DsuRegistarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DsuRegistarService_Factory() { return new DsuRegistarService(ɵɵinject(HttpClient), ɵɵinject(RuntimeConfiguration)); }, token: DsuRegistarService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dsu-register/dsu-register-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DsuRegisterFormComponent {
    /**
     * @param {?} _dsuRegistar
     * @param {?} alertServiceProvider
     * @param {?} translateServiceProvicer
     * @param {?} formBuilder
     */
    constructor(_dsuRegistar, alertServiceProvider, translateServiceProvicer, formBuilder) {
        this._dsuRegistar = _dsuRegistar;
        this.faSpinner = faSpinner;
        this.ipAddresses = [];
        this.deviceArchOptions = [
            { value: 0, text: 'Unknown' },
            { value: 10, text: 'Windows' },
            { value: 20, text: 'Mac' },
            { value: 30, text: 'Linux' },
            { value: 40, text: ' Unix' }
        ];
        this.statusOptions = [
            { value: 0, text: 'Init' },
            { value: 10, text: 'Ready' },
            { value: 20, text: 'Offline' },
            { value: 30, text: 'Failure' },
            { value: 100, text: 'Unknown' }
        ];
        this.protocolOptions = [
            { value: 0, text: 'HTTP' },
            { value: 10, text: 'HTTPS' },
            { value: 20, text: 'FTP' }
        ];
        this._alertService = alertServiceProvider.get();
        this.translator = translateServiceProvicer.get();
        this.form = formBuilder.group({
            deviceUniqueId: new FormControl({ value: '', disabled: true }, { validators: [Validators.required] }),
            ipV4: new FormControl(''),
            host: new FormControl('', { validators: [Validators.required] }),
            protocol: new FormControl({ value: -1, disabled: true }, { validators: [Validators.required] }),
            port: new FormControl({ value: 0, disabled: true }, { validators: [Validators.required] }),
            deviceName: new FormControl('', { validators: [Validators.required] }),
            deviceArch: new FormControl({ value: -1, disabled: true }, { validators: [Validators.required] }),
            capacity: new FormControl(0, { validators: [Validators.required] }),
            threshold: new FormControl(0, { validators: [Validators.required] }),
            apiKey: new FormControl({ value: '', disabled: true }, { validators: [Validators.required] }),
            status: new FormControl(-1, { validators: [Validators.required] }),
            discoverEndpoint: new FormControl('')
        });
    }
    /**
     * @return {?}
     */
    get deviceUniqueId() { return this.form.get('deviceUniqueId'); }
    /**
     * @return {?}
     */
    get ipV4() { return this.form.get('ipV4'); }
    /**
     * @return {?}
     */
    get host() { return this.form.get('host'); }
    /**
     * @return {?}
     */
    get protocol() { return this.form.get('protocol'); }
    /**
     * @return {?}
     */
    get port() { return this.form.get('port'); }
    /**
     * @return {?}
     */
    get deviceName() { return this.form.get('deviceName'); }
    /**
     * @return {?}
     */
    get deviceArch() { return this.form.get('deviceArch'); }
    /**
     * @return {?}
     */
    get capacity() { return this.form.get('capacity'); }
    /**
     * @return {?}
     */
    get threshold() { return this.form.get('threshold'); }
    /**
     * @return {?}
     */
    get apiKey() { return this.form.get('apiKey'); }
    /**
     * @return {?}
     */
    get status() { return this.form.get('status'); }
    /**
     * @return {?}
     */
    get discoverEndpoint() { return this.form.get('discoverEndpoint'); }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInputChanged();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.onInputChanged();
    }
    /**
     * @private
     * @return {?}
     */
    onInputChanged() {
        // init data ready
        if (this.initData && this.initData.deviceUniqueId) {
            this._dsuRegistar.getByUniqueIdAsync(this.initData.deviceUniqueId)
                .then((/**
             * @param {?} a
             * @return {?}
             */
            a => {
                console.log(a);
                if (a) {
                    /** @type {?} */
                    const v = Object.assign({}, this.initData, a);
                    this.ipAddresses = v.ipAddresses;
                    delete v.ipAddresses;
                    delete v.prettyDeviceArch;
                    delete v.prettyProtocol;
                    delete v.prettyStatus;
                    delete v.rank;
                    delete v.usage;
                    this._entityId = v.id;
                    delete v.id;
                    this.form.setValue(v);
                    this.enable(false, null);
                }
                else {
                    /** @type {?} */
                    const v = Object.assign({
                        ipV4: '',
                        host: '',
                        deviceName: '',
                        threshold: 0,
                        status: -1,
                        discoverEndpoint: ''
                    }, this.initData);
                    this.ipAddresses = v.ipAddresses;
                    delete v.ipAddresses;
                    this.form.setValue(v);
                    this.enable(true, null);
                }
                this._prevFormValue = Object.assign({}, this.form.value);
            }));
        }
        else {
            this._prevFormValue = Object.assign({}, this.form.value);
            this.enable(false, null);
        }
    }
    /**
     * @param {?} flag
     * @param {?} evt
     * @return {?}
     */
    enable(flag, evt) {
        evt && evt.preventDefault();
        evt && evt.stopPropagation();
        if (flag) {
            this.form.enable();
        }
        else {
            this.form.disable();
        }
    }
    /**
     * @return {?}
     */
    submit() {
        /** @type {?} */
        const currentFormValue = this.form.value;
        if (JSON.stringify(this._prevFormValue) !== JSON.stringify(currentFormValue)) {
            if (this._entityId) {
                /** @type {?} */
                const changes = calculateDsuSpecChanges(this._prevFormValue, currentFormValue);
                if (Object.keys(changes).length > 0) {
                    this.update(changes);
                }
            }
            else {
                this.create();
            }
        }
    }
    /**
     * @return {?}
     */
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            this.alertType = 'alert-info';
            this.alertMessage = "Submitting ...";
            /** @type {?} */
            const v = Object.assign({}, this.form.value, {
                deviceUniqueId: this.deviceUniqueId.value,
                protocol: this.protocol.value,
                port: this.port.value,
                deviceArch: this.deviceArch.value,
                apiKey: this.apiKey.value
            });
            this.showSubmitProgress = true;
            yield this._dsuRegistar.registerAsync(v)
                .then((/**
             * @param {?} id
             * @return {?}
             */
            id => {
                this._entityId = id;
                // Stop progress
                this.showSubmitProgress = false;
                // notify message                
                this.alertType = 'alert-success';
                this.alertMessage = "Just registered successfully.";
                this.form.disable();
                // TODO: should have some id returned.
                this._prevFormValue = Object.assign({}, this.form.value);
                this._alertService.showMessage('DSU registar', 'You just registered your device!', MessageSeverity.success);
            }), (/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                // Stop progress                
                this.showSubmitProgress = false;
                this.alertType = 'alert-danger';
                this.alertMessage = 'Something went wrong!';
            }));
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    update(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            this.alertType = 'alert-info';
            this.alertMessage = "Submitting ...";
            // Progress
            this.showSubmitProgress = true;
            yield this._dsuRegistar.updateByUniqueIdAsync(this.deviceUniqueId.value, changes)
                .then((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                // Stop progress
                this.showSubmitProgress = false;
                // notify message                
                this.alertType = 'alert-success';
                this.alertMessage = "Just updated successfully.";
                this.form.disable();
                this._prevFormValue = Object.assign({}, this.form.value);
                this._alertService.showMessage('DSU registar', 'You just updated your device!', MessageSeverity.success);
            }), (/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                // Stop progress
                this.showSubmitProgress = false;
                this.alertType = 'alert-danger';
                this.alertMessage = 'Something went wrong!';
            }));
        });
    }
}
DsuRegisterFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'css-dsu-register-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"deviceUniqueId\">Unique Device ID</label>\n        <input formControlName=\"deviceUniqueId\" required \n               type=\"text\" class=\"form-control\" id=\"deviceUniqueId\" aria-describedby=\"deviceUniqueIdHelper\">\n        <small id=\"deviceUniqueIdHelper\" class=\"form-text text-muted\">\n            System generated unique ID (cannot be updated) for this device\n        </small>\n    </div>\n    <!-- host -->\n    <div class=\"form-group\">\n        <label for=\"host\">Host</label>\n        <select formControlName=\"host\" required\n                class=\"form-control\" id=\"host\" aria-describedby=\"hostHelper\">\n            <option value=\"\" disabled>Choose the right IP address</option>                                    \n            <option *ngFor=\"let ip of ipAddresses\" [ngValue]=\"ip\">\n                {{ ip }}\n            </option>\n        </select>\n        <small id=\"hostHelper\" class=\"form-text text-muted\">\n            The host address of this device used to access the service on it,\n            such examples as 'http://192.168.1.0' or 'https://mystorage.com'\n        </small>\n        <div *ngIf=\"host.invalid && (host.dirty || host.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"host.errors.required\">\n                Host address is required\n            </div>\n        </div>        \n    </div>\n    <!-- ipV4 -->   \n    <div class=\"form-group\">\n        <label for=\"ipV4\">IP Address</label>\n        <input formControlName=\"ipV4\" \n               type=\"text\" class=\"form-control\" id=\"ipV4\" aria-describedby=\"ipV4Helper\">\n        <small id=\"ipV4Helper\" class=\"form-text text-muted\">\n            The IP address of the device\n        </small>\n        <div *ngIf=\"ipV4.invalid && (ipV4.dirty || ipV4.touched)\"\n             class=\"alert alert-danger\">\n        </div>        \n    </div>\n    <!-- protocol -->\n    <div class=\"form-group\">\n        <label for=\"protocol\">Protocol</label>\n        <select formControlName=\"protocol\" required\n                class=\"form-control\" id=\"protocol\" aria-describedby=\"protocolHelper\">\n            <option value=\"-1\" disabled>Choose the right protocol</option>                        \n            <option *ngFor=\"let o of protocolOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"protocolHelper\" class=\"form-text text-muted\">\n            The protocol of the service on this device, such examples as HTTP, HTTPS, ftp\n        </small>\n        <div *ngIf=\"protocol.invalid && (protocol.dirty || protocol.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"protocol.errors.required\">\n                Protocol is required.\n            </div>\n        </div>        \n    </div>\n    <!-- port -->\n    <div class=\"form-group\">\n        <label for=\"port\">Port number</label>\n        <input formControlName=\"port\" required\n               type=\"text\" class=\"form-control\" id=\"port\" aria-describedby=\"portHelper\">\n        <small id=\"portHelper\" class=\"form-text text-muted\">\n            The port number of the service on this device\n        </small>\n        <div *ngIf=\"port.invalid && (port.dirty || port.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"port.errors.required\">\n                Port number is required\n            </div>\n        </div>        \n    </div>\n    <!-- deviceName -->\n    <div class=\"form-group\">\n        <label for=\"deviceName\">Device Name</label>\n        <input formControlName=\"deviceName\" required\n               type=\"text\" class=\"form-control\" id=\"deviceName\" aria-describedby=\"deviceNameHelper\">\n        <small id=\"deviceNameHelper\" class=\"form-text text-muted\">\n            The descriptive name of this device, not required to be unique\n        </small>\n        <div *ngIf=\"deviceName.invalid && (deviceName.dirty || deviceName.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"deviceName.errors.required\">\n                Device name is required.\n            </div>\n        </div>        \n    </div>\n    <!-- deviceArch -->\n    <div class=\"form-group\">\n        <label for=\"deviceArch\">Device Operating System</label>\n        <select formControlName=\"deviceArch\" required\n                class=\"form-control\" id=\"deviceArch\" aria-describedby=\"deviceArchHelper\">\n            <option value=\"-1\" disabled>Choose the right operating system</option>            \n            <option *ngFor=\"let o of deviceArchOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"deviceArchHelper\" class=\"form-text text-muted\">\n            The operating system of this device, such examples as Linux, Windows, and so on\n        </small>\n        <div *ngIf=\"deviceArch.invalid && (deviceArch.dirty || deviceArch.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"deviceArch.errors.required\">\n                Device operating system is required.\n            </div>\n        </div>        \n    </div>\n    <!-- capacity -->\n    <div class=\"form-group\">\n        <label for=\"capacity\">Storage Capacity</label>\n        <input formControlName=\"capacity\" required\n               type=\"text\" class=\"form-control\" id=\"capacity\" aria-describedby=\"capacityHelper\">\n        <small id=\"capacityHelper\" class=\"form-text text-muted\">\n            The allowed storage capacity, in Gigabit, on this device\n        </small>\n        <div *ngIf=\"capacity.invalid && (capacity.dirty || capacity.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"capacity.errors.required\">\n                Storage capacity is required.\n            </div>\n        </div>        \n    </div>\n    <!-- threshold -->\n    <div class=\"form-group\">\n        <label for=\"threshold\">Storage Threshold</label>\n        <input formControlName=\"threshold\" required\n               type=\"text\" class=\"form-control\" id=\"threshold\" aria-describedby=\"thresholdHelper\">\n        <small id=\"thresholdHelper\" class=\"form-text text-muted\">\n            The threshold for the usage of the storage space on this device\n        </small>\n        <div *ngIf=\"threshold.invalid && (threshold.dirty || threshold.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"threshold.errors.required\">\n                Storage threshold is required.\n            </div>\n        </div>        \n    </div>\n    <!-- apiKey -->\n    <div class=\"form-group\">\n        <label for=\"apiKey\">API Key</label>\n        <input formControlName=\"apiKey\" required\n               type=\"text\" class=\"form-control\" id=\"apiKey\" aria-describedby=\"apiKeyHelper\">\n        <small id=\"apiKeyHelper\" class=\"form-text text-muted\">\n            The authorized API Key of this device, used to access the service on it\n        </small>\n        <div *ngIf=\"apiKey.invalid && (apiKey.dirty || apiKey.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"apiKey.errors.required\">\n                API Key is required.\n            </div>\n        </div>        \n    </div>\n    <!-- status -->\n    <div class=\"form-group\">\n        <label for=\"status\">Status</label>\n        <select formControlName=\"status\" required\n                class=\"form-control\" id=\"status\" aria-describedby=\"statusHelper\">\n            <option value=\"-1\" disabled>Choose the right status</option>\n            <option *ngFor=\"let o of statusOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"statusHelper\" class=\"form-text text-muted\">\n            The storage status of this device\n        </small>\n        <div *ngIf=\"status.invalid && (status.dirty || status.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"status.errors.required\">\n                Storage status is required.\n            </div>\n        </div>        \n    </div>\n    <!-- discoverEndpoint -->\n    <div class=\"form-group\">\n        <label for=\"discoverEndpoint\">Discover Endpoint</label>\n        <input formControlName=\"discoverEndpoint\" \n               type=\"text\" class=\"form-control\" id=\"discoverEndpoint\" aria-describedby=\"discoverEndpointHelper\">\n        <small id=\"discoverEndpointHelper\" class=\"form-text text-muted\">\n            The discover endpoint for the service on this device\n        </small>\n        <div *ngIf=\"discoverEndpoint.invalid && (discoverEndpoint.dirty || discoverEndpoint.touched)\"\n             class=\"alert alert-danger\">\n\n        </div>        \n    </div>\n    \n    <p class=\"alert\" [ngClass]=\"alertType\">\n        {{alertMessage}}\n    </p>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"submit\" class=\"btn btn-primary px-4\" [disabled]=\"form.invalid\">\n                <fa-icon class=\"fa-spin mr-2\" [icon]=\"faSpinner\" *ngIf=\"showSubmitProgress\"></fa-icon>\n                Submit\n            </button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DsuRegisterFormComponent.ctorParameters = () => [
    { type: DsuRegistarService },
    { type: AlertServiceAbstractProvider },
    { type: TranslationServiceAbstractProvider },
    { type: FormBuilder }
];
DsuRegisterFormComponent.propDecorators = {
    initData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DsuRegisterFormComponent.prototype.initData;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.faSpinner;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.form;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.alertMessage;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.alertType;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.ipAddresses;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.deviceArchOptions;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.statusOptions;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.protocolOptions;
    /**
     * @type {?}
     * @private
     */
    DsuRegisterFormComponent.prototype._alertService;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.translator;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.anyFormChange;
    /** @type {?} */
    DsuRegisterFormComponent.prototype.showSubmitProgress;
    /**
     * @type {?}
     * @private
     */
    DsuRegisterFormComponent.prototype._prevFormValue;
    /**
     * @type {?}
     * @private
     */
    DsuRegisterFormComponent.prototype._entityId;
    /**
     * @type {?}
     * @private
     */
    DsuRegisterFormComponent.prototype._dsuRegistar;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/host-reserved-disk-rw.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IHostReservedDiskModel() { }
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
class HostReservedDiskRWService {
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
        return __awaiter(this, void 0, void 0, function* () {
            if (checkCache && this._cached) {
                return this._cached;
            }
            return yield this._httpClient.get(this._runtimeConfiguration.hostReservedDiskSettingPath)
                .pipe(tap((/**
             * @param {?} a
             * @return {?}
             */
            (a) => {
                this._cached = a;
            }))).toPromise();
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    writeAsync(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._httpClient.post(this._runtimeConfiguration.hostReservedDiskSettingPath, data)
                .pipe(tap((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                this._cached.storageRootFullPath = data.storageRootFullPath;
            }))).toPromise();
        });
    }
}
HostReservedDiskRWService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HostReservedDiskRWService.ctorParameters = () => [
    { type: HttpClient },
    { type: RuntimeConfiguration }
];
/** @nocollapse */ HostReservedDiskRWService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HostReservedDiskRWService_Factory() { return new HostReservedDiskRWService(ɵɵinject(HttpClient), ɵɵinject(RuntimeConfiguration)); }, token: HostReservedDiskRWService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/host-reserved-disk-form/host-reserved-disk-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HostReservedDiskFormComponent {
    /**
     * @param {?} _diskService
     * @param {?} alertServiceProvider
     * @param {?} translateServiceProvicer
     * @param {?} formBuilder
     */
    constructor(_diskService, alertServiceProvider, translateServiceProvicer, formBuilder) {
        this._diskService = _diskService;
        this._alertService = alertServiceProvider.get();
        this.translator = translateServiceProvicer.get();
        this.form = formBuilder.group({
            storageRootFullPath: new FormControl('', { validators: [Validators.required] })
        });
    }
    /**
     * @return {?}
     */
    get storageRootFullPath() { return this.form.get('storageRootFullPath'); }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._diskService.readAsync()
            .then((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            this.deviceInfo = a;
            this.storageRootFullPath.setValue(a.storageRootFullPath);
            this.enable(false, null);
        }));
    }
    /**
     * @param {?} flag
     * @param {?} evt
     * @return {?}
     */
    enable(flag, evt) {
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
    }
    /**
     * @return {?}
     */
    submit() {
        // Assuming that the values to be submitted are new and valid.
        // todo: Progress
        this.alertType = 'alert-info';
        this.alertMessage = "Submitting ...";
        this._diskService.writeAsync(this.form.value)
            .then((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            // notify message                
            this.alertType = 'alert-success';
            this.alertMessage = "Just updated successfully.";
            this.form.disable();
            this._alertService.showMessage('Storage Space Root', 'You just updated the full path of the storage space root!', MessageSeverity.success);
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
HostReservedDiskFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'host-reserved-disk-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"storageRootFullPath\">Storage Space Root Full Path</label>\n        <input formControlName=\"storageRootFullPath\" required \n               type=\"text\" class=\"form-control\" id=\"storageRootFullPath\" aria-describedby=\"storageRootFullPathHelper\">\n        <small id=\"storageRootFullPathHelper\" class=\"form-text text-muted\">\n            Please specify the full path of the directory where files are stored on the hosting device.\n            Please make sure that the path exists.\n        </small>\n        <div *ngIf=\"storageRootFullPath.invalid && (storageRootFullPath.dirty || storageRootFullPath.touched)\"\n             class=\"alert alert-danger\">\n            <div *ngIf=\"storageRootFullPath.errors.required\">\n                Full path is required.\n            </div>\n        </div>        \n    </div>\n    <div class=\"alert\" [ngClass]=\"alertType\">\n        <h6>{{alertMessage}}</h6>\n    </div>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"submit\" class=\"ml-2 btn btn-primary px-4\" [disabled]=\"form.invalid\">Submit</button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
HostReservedDiskFormComponent.ctorParameters = () => [
    { type: HostReservedDiskRWService },
    { type: AlertServiceAbstractProvider },
    { type: TranslationServiceAbstractProvider },
    { type: FormBuilder }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/css-client-bolts.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CssClientBoltsModule {
}
CssClientBoltsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DsmSettingsFormComponent,
                    DsuRegisterFormComponent,
                    HostReservedDiskFormComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FontAwesomeModule
                ],
                exports: [
                    DsmSettingsFormComponent,
                    DsuRegisterFormComponent,
                    HostReservedDiskFormComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: nanshiie-css-client-bolts.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CssClientBoltsModule, DsmSettingsFormComponent, DsmSettingsRWService, DsmUtilitiesService, DsuRegistarService, DsuRegisterFormComponent, HostReservedDiskFormComponent, HostReservedDiskRWService, RuntimeConfiguration, calculateDsuSpecChanges };
//# sourceMappingURL=nanshiie-css-client-bolts.js.map
