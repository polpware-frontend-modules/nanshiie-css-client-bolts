/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dsu-register/dsu-register-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MessageSeverity, AlertServiceAbstractProvider, TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { calculateDsuSpecChanges } from '../../models/dsu-spec.model';
import { DsuRegistarService } from '../../services/dsu-registar.service';
var DsuRegisterFormComponent = /** @class */ (function () {
    function DsuRegisterFormComponent(_dsuRegistar, alertServiceProvider, translateServiceProvicer, formBuilder) {
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
    Object.defineProperty(DsuRegisterFormComponent.prototype, "deviceUniqueId", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('deviceUniqueId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "ipV4", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('ipV4'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "host", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('host'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "protocol", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('protocol'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "port", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('port'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "deviceName", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('deviceName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "deviceArch", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('deviceArch'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "capacity", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('capacity'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "threshold", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('threshold'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "apiKey", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('apiKey'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DsuRegisterFormComponent.prototype, "discoverEndpoint", {
        get: /**
         * @return {?}
         */
        function () { return this.form.get('discoverEndpoint'); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DsuRegisterFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInputChanged();
    };
    /**
     * @return {?}
     */
    DsuRegisterFormComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.onInputChanged();
    };
    /**
     * @private
     * @return {?}
     */
    DsuRegisterFormComponent.prototype.onInputChanged = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // init data ready
        if (this.initData && this.initData.deviceUniqueId) {
            this._dsuRegistar.getByUniqueIdAsync(this.initData.deviceUniqueId)
                .then((/**
             * @param {?} a
             * @return {?}
             */
            function (a) {
                console.log(a);
                if (a) {
                    /** @type {?} */
                    var v = Object.assign({}, _this.initData, a);
                    _this.ipAddresses = v.ipAddresses;
                    delete v.ipAddresses;
                    delete v.prettyDeviceArch;
                    delete v.prettyProtocol;
                    delete v.prettyStatus;
                    delete v.rank;
                    delete v.usage;
                    _this._entityId = v.id;
                    delete v.id;
                    _this.form.setValue(v);
                    _this.enable(false, null);
                }
                else {
                    /** @type {?} */
                    var v = Object.assign({
                        ipV4: '',
                        host: '',
                        deviceName: '',
                        threshold: 0,
                        status: -1,
                        discoverEndpoint: ''
                    }, _this.initData);
                    _this.ipAddresses = v.ipAddresses;
                    delete v.ipAddresses;
                    _this.form.setValue(v);
                    _this.enable(true, null);
                }
                _this._prevFormValue = Object.assign({}, _this.form.value);
            }));
        }
        else {
            this._prevFormValue = Object.assign({}, this.form.value);
            this.enable(false, null);
        }
    };
    /**
     * @param {?} flag
     * @param {?} evt
     * @return {?}
     */
    DsuRegisterFormComponent.prototype.enable = /**
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
        }
    };
    /**
     * @return {?}
     */
    DsuRegisterFormComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentFormValue = this.form.value;
        if (JSON.stringify(this._prevFormValue) !== JSON.stringify(currentFormValue)) {
            if (this._entityId) {
                /** @type {?} */
                var changes = calculateDsuSpecChanges(this._prevFormValue, currentFormValue);
                if (Object.keys(changes).length > 0) {
                    this.update(changes);
                }
            }
            else {
                this.create();
            }
        }
    };
    /**
     * @return {?}
     */
    DsuRegisterFormComponent.prototype.create = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var v;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alertType = 'alert-info';
                        this.alertMessage = "Submitting ...";
                        v = Object.assign({}, this.form.value, {
                            deviceUniqueId: this.deviceUniqueId.value,
                            protocol: this.protocol.value,
                            port: this.port.value,
                            deviceArch: this.deviceArch.value,
                            apiKey: this.apiKey.value
                        });
                        this.showSubmitProgress = true;
                        return [4 /*yield*/, this._dsuRegistar.registerAsync(v)
                                .then((/**
                             * @param {?} id
                             * @return {?}
                             */
                            function (id) {
                                _this._entityId = id;
                                // Stop progress
                                _this.showSubmitProgress = false;
                                // notify message                
                                _this.alertType = 'alert-success';
                                _this.alertMessage = "Just registered successfully.";
                                _this.form.disable();
                                // TODO: should have some id returned.
                                _this._prevFormValue = Object.assign({}, _this.form.value);
                                _this._alertService.showMessage('DSU registar', 'You just registered your device!', MessageSeverity.success);
                            }), (/**
                             * @param {?} _
                             * @return {?}
                             */
                            function (_) {
                                // Stop progress                
                                _this.showSubmitProgress = false;
                                _this.alertType = 'alert-danger';
                                _this.alertMessage = 'Something went wrong!';
                            }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DsuRegisterFormComponent.prototype.update = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alertType = 'alert-info';
                        this.alertMessage = "Submitting ...";
                        // Progress
                        this.showSubmitProgress = true;
                        return [4 /*yield*/, this._dsuRegistar.updateByUniqueIdAsync(this.deviceUniqueId.value, changes)
                                .then((/**
                             * @param {?} _
                             * @return {?}
                             */
                            function (_) {
                                // Stop progress
                                _this.showSubmitProgress = false;
                                // notify message                
                                _this.alertType = 'alert-success';
                                _this.alertMessage = "Just updated successfully.";
                                _this.form.disable();
                                _this._prevFormValue = Object.assign({}, _this.form.value);
                                _this._alertService.showMessage('DSU registar', 'You just updated your device!', MessageSeverity.success);
                            }), (/**
                             * @param {?} _
                             * @return {?}
                             */
                            function (_) {
                                // Stop progress
                                _this.showSubmitProgress = false;
                                _this.alertType = 'alert-danger';
                                _this.alertMessage = 'Something went wrong!';
                            }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DsuRegisterFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'css-dsu-register-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"deviceUniqueId\">Unique Device ID</label>\n        <input formControlName=\"deviceUniqueId\" required \n               type=\"text\" class=\"form-control\" id=\"deviceUniqueId\" aria-describedby=\"deviceUniqueIdHelper\">\n        <small id=\"deviceUniqueIdHelper\" class=\"form-text text-muted\">\n            System generated unique ID (cannot be updated) for this device\n        </small>\n    </div>\n    <!-- host -->\n    <div class=\"form-group\">\n        <label for=\"host\">Host</label>\n        <select formControlName=\"host\" required\n                class=\"form-control\" id=\"host\" aria-describedby=\"hostHelper\">\n            <option value=\"\" disabled>Choose the right IP address</option>                                    \n            <option *ngFor=\"let ip of ipAddresses\" [ngValue]=\"ip\">\n                {{ ip }}\n            </option>\n        </select>\n        <small id=\"hostHelper\" class=\"form-text text-muted\">\n            The host address of this device used to access the service on it,\n            such examples as 'http://192.168.1.0' or 'https://mystorage.com'\n        </small>\n        <div *ngIf=\"host.invalid && (host.dirty || host.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"host.errors.required\">\n                Host address is required\n            </div>\n        </div>        \n    </div>\n    <!-- ipV4 -->   \n    <div class=\"form-group\">\n        <label for=\"ipV4\">IP Address</label>\n        <input formControlName=\"ipV4\" \n               type=\"text\" class=\"form-control\" id=\"ipV4\" aria-describedby=\"ipV4Helper\">\n        <small id=\"ipV4Helper\" class=\"form-text text-muted\">\n            The IP address of the device\n        </small>\n        <div *ngIf=\"ipV4.invalid && (ipV4.dirty || ipV4.touched)\"\n             class=\"alert alert-danger\">\n        </div>        \n    </div>\n    <!-- protocol -->\n    <div class=\"form-group\">\n        <label for=\"protocol\">Protocol</label>\n        <select formControlName=\"protocol\" required\n                class=\"form-control\" id=\"protocol\" aria-describedby=\"protocolHelper\">\n            <option value=\"-1\" disabled>Choose the right protocol</option>                        \n            <option *ngFor=\"let o of protocolOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"protocolHelper\" class=\"form-text text-muted\">\n            The protocol of the service on this device, such examples as HTTP, HTTPS, ftp\n        </small>\n        <div *ngIf=\"protocol.invalid && (protocol.dirty || protocol.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"protocol.errors.required\">\n                Protocol is required.\n            </div>\n        </div>        \n    </div>\n    <!-- port -->\n    <div class=\"form-group\">\n        <label for=\"port\">Port number</label>\n        <input formControlName=\"port\" required\n               type=\"text\" class=\"form-control\" id=\"port\" aria-describedby=\"portHelper\">\n        <small id=\"portHelper\" class=\"form-text text-muted\">\n            The port number of the service on this device\n        </small>\n        <div *ngIf=\"port.invalid && (port.dirty || port.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"port.errors.required\">\n                Port number is required\n            </div>\n        </div>        \n    </div>\n    <!-- deviceName -->\n    <div class=\"form-group\">\n        <label for=\"deviceName\">Device Name</label>\n        <input formControlName=\"deviceName\" required\n               type=\"text\" class=\"form-control\" id=\"deviceName\" aria-describedby=\"deviceNameHelper\">\n        <small id=\"deviceNameHelper\" class=\"form-text text-muted\">\n            The descriptive name of this device, not required to be unique\n        </small>\n        <div *ngIf=\"deviceName.invalid && (deviceName.dirty || deviceName.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"deviceName.errors.required\">\n                Device name is required.\n            </div>\n        </div>        \n    </div>\n    <!-- deviceArch -->\n    <div class=\"form-group\">\n        <label for=\"deviceArch\">Device Operating System</label>\n        <select formControlName=\"deviceArch\" required\n                class=\"form-control\" id=\"deviceArch\" aria-describedby=\"deviceArchHelper\">\n            <option value=\"-1\" disabled>Choose the right operating system</option>            \n            <option *ngFor=\"let o of deviceArchOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"deviceArchHelper\" class=\"form-text text-muted\">\n            The operating system of this device, such examples as Linux, Windows, and so on\n        </small>\n        <div *ngIf=\"deviceArch.invalid && (deviceArch.dirty || deviceArch.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"deviceArch.errors.required\">\n                Device operating system is required.\n            </div>\n        </div>        \n    </div>\n    <!-- capacity -->\n    <div class=\"form-group\">\n        <label for=\"capacity\">Storage Capacity</label>\n        <input formControlName=\"capacity\" required\n               type=\"text\" class=\"form-control\" id=\"capacity\" aria-describedby=\"capacityHelper\">\n        <small id=\"capacityHelper\" class=\"form-text text-muted\">\n            The allowed storage capacity, in Gigabit, on this device\n        </small>\n        <div *ngIf=\"capacity.invalid && (capacity.dirty || capacity.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"capacity.errors.required\">\n                Storage capacity is required.\n            </div>\n        </div>        \n    </div>\n    <!-- threshold -->\n    <div class=\"form-group\">\n        <label for=\"threshold\">Storage Threshold</label>\n        <input formControlName=\"threshold\" required\n               type=\"text\" class=\"form-control\" id=\"threshold\" aria-describedby=\"thresholdHelper\">\n        <small id=\"thresholdHelper\" class=\"form-text text-muted\">\n            The threshold for the usage of the storage space on this device\n        </small>\n        <div *ngIf=\"threshold.invalid && (threshold.dirty || threshold.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"threshold.errors.required\">\n                Storage threshold is required.\n            </div>\n        </div>        \n    </div>\n    <!-- apiKey -->\n    <div class=\"form-group\">\n        <label for=\"apiKey\">API Key</label>\n        <input formControlName=\"apiKey\" required\n               type=\"text\" class=\"form-control\" id=\"apiKey\" aria-describedby=\"apiKeyHelper\">\n        <small id=\"apiKeyHelper\" class=\"form-text text-muted\">\n            The authorized API Key of this device, used to access the service on it\n        </small>\n        <div *ngIf=\"apiKey.invalid && (apiKey.dirty || apiKey.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"apiKey.errors.required\">\n                API Key is required.\n            </div>\n        </div>        \n    </div>\n    <!-- status -->\n    <div class=\"form-group\">\n        <label for=\"status\">Status</label>\n        <select formControlName=\"status\" required\n                class=\"form-control\" id=\"status\" aria-describedby=\"statusHelper\">\n            <option value=\"-1\" disabled>Choose the right status</option>\n            <option *ngFor=\"let o of statusOptions\" [ngValue]=\"o.value\">\n                {{ o.text }}\n            </option>\n        </select>            \n        <small id=\"statusHelper\" class=\"form-text text-muted\">\n            The storage status of this device\n        </small>\n        <div *ngIf=\"status.invalid && (status.dirty || status.touched)\"\n             class=\"alert alert-danger\">\n\n            <div *ngIf=\"status.errors.required\">\n                Storage status is required.\n            </div>\n        </div>        \n    </div>\n    <!-- discoverEndpoint -->\n    <div class=\"form-group\">\n        <label for=\"discoverEndpoint\">Discover Endpoint</label>\n        <input formControlName=\"discoverEndpoint\" \n               type=\"text\" class=\"form-control\" id=\"discoverEndpoint\" aria-describedby=\"discoverEndpointHelper\">\n        <small id=\"discoverEndpointHelper\" class=\"form-text text-muted\">\n            The discover endpoint for the service on this device\n        </small>\n        <div *ngIf=\"discoverEndpoint.invalid && (discoverEndpoint.dirty || discoverEndpoint.touched)\"\n             class=\"alert alert-danger\">\n\n        </div>        \n    </div>\n    \n    <p class=\"alert\" [ngClass]=\"alertType\">\n        {{alertMessage}}\n    </p>\n    <div class=\"d-flex flex-row justify-content-start\">\n        <button *ngIf=\"form.disabled; else submitTmpl\"\n                type=\"button\" class=\"btn btn-primary px-4\" (click)=\"enable(true, $event)\">Edit</button>\n        <ng-template #submitTmpl>\n            <button type=\"submit\" class=\"btn btn-primary px-4\" [disabled]=\"form.invalid\">\n                <fa-icon class=\"fa-spin mr-2\" [icon]=\"faSpinner\" *ngIf=\"showSubmitProgress\"></fa-icon>\n                Submit\n            </button>\n            <button type=\"button\" class=\"ml-2 px-4 btn btn-secondary\" (click)=\"enable(false, $event)\">Cancel</button>        \n        </ng-template>\n    </div>\n</form>\n\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DsuRegisterFormComponent.ctorParameters = function () { return [
        { type: DsuRegistarService },
        { type: AlertServiceAbstractProvider },
        { type: TranslationServiceAbstractProvider },
        { type: FormBuilder }
    ]; };
    DsuRegisterFormComponent.propDecorators = {
        initData: [{ type: Input }]
    };
    return DsuRegisterFormComponent;
}());
export { DsuRegisterFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHN1LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kc3UtcmVnaXN0ZXIvZHN1LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFDSCxlQUFlLEVBQ2YsNEJBQTRCLEVBRzVCLGtDQUFrQyxFQUNyQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUU5RCxPQUFPLEVBQWlCLHVCQUF1QixFQUF3QixNQUFNLDZCQUE2QixDQUFDO0FBQzNHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXpFO0lBK0NJLGtDQUE2QixZQUFnQyxFQUN6RCxvQkFBa0QsRUFDbEQsd0JBQTRELEVBQzVELFdBQXdCO1FBSEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBdEM3RCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBTXRCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLHNCQUFpQixHQUFHO1lBQ2hCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQzlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQzFCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzVCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQy9CLENBQUM7UUFFRixrQkFBYSxHQUFHO1lBQ1osRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDMUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDNUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDOUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDOUIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7U0FDbEMsQ0FBQztRQUVGLG9CQUFlLEdBQUc7WUFDZCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUMxQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM1QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtTQUM3QixDQUFDO1FBZ0JFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDMUIsY0FBYyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNyRyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNoRSxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDL0YsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUMxRixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDdEUsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2pHLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNuRSxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDcEUsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM3RixNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFV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RyxLQUFLLENBQUM7Z0NBRWhDLEtBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO2dDQUNoQyxLQUFJLENBQUMsWUFBWSxHQUFHLHVCQUF1QixDQUFDOzRCQUNoRCxDQUFDLEVBQUMsRUFBQTs7d0JBbEJOLFNBa0JNLENBQUM7Ozs7O0tBQ1Y7O2dCQS9OSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsd3BUQUFpRDs7aUJBRXBEOzs7O2dCQU5RLGtCQUFrQjtnQkFUdkIsNEJBQTRCO2dCQUc1QixrQ0FBa0M7Z0JBUDdCLFdBQVc7OzsyQkFzQmYsS0FBSzs7SUEwTlYsK0JBQUM7Q0FBQSxBQWpPRCxJQWlPQztTQTVOWSx3QkFBd0I7OztJQUVqQyw0Q0FBaUM7O0lBRWpDLDZDQUFzQjs7SUFFdEIsd0NBQXlCOztJQUN6QixnREFBcUI7O0lBQ3JCLDZDQUFrQjs7SUFFbEIsK0NBQTJCOztJQUMzQixxREFNRTs7SUFFRixpREFNRTs7SUFFRixtREFJRTs7Ozs7SUFFRixpREFBc0Q7O0lBQ3RELDhDQUFpRDs7SUFHakQsaURBQXVCOztJQUN2QixzREFBNEI7Ozs7O0lBQzVCLGtEQUFzQzs7Ozs7SUFDdEMsNkNBQTBCOzs7OztJQUVkLGdEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgICBNZXNzYWdlU2V2ZXJpdHksXG4gICAgQWxlcnRTZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBJQWxlcnRTZXJ2aWNlQ29udHJhY3QsXG4gICAgSVRyYW5zbGF0aW9uU2VydmljZUNvbnRyYWN0LFxuICAgIFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuaW1wb3J0IHsgSURzdVNwZWNNb2RlbCwgY2FsY3VsYXRlRHN1U3BlY0NoYW5nZXMsIElEc3VTcGVjVXBkYXRlZE1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RzdS1zcGVjLm1vZGVsJztcbmltcG9ydCB7IERzdVJlZ2lzdGFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RzdS1yZWdpc3Rhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjc3MtZHN1LXJlZ2lzdGVyLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kc3UtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZHN1LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERzdVJlZ2lzdGVyRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGluaXREYXRhOiBJRHN1U3BlY01vZGVsO1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgcmVhZG9ubHkgZm9ybTogRm9ybUdyb3VwO1xuICAgIGFsZXJ0TWVzc2FnZTogc3RyaW5nO1xuICAgIGFsZXJ0VHlwZTogc3RyaW5nO1xuXG4gICAgaXBBZGRyZXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgZGV2aWNlQXJjaE9wdGlvbnMgPSBbXG4gICAgICAgIHsgdmFsdWU6IDAsIHRleHQ6ICdVbmtub3duJyB9LFxuICAgICAgICB7IHZhbHVlOiAxMCwgdGV4dDogJ1dpbmRvd3MnIH0sXG4gICAgICAgIHsgdmFsdWU6IDIwLCB0ZXh0OiAnTWFjJyB9LFxuICAgICAgICB7IHZhbHVlOiAzMCwgdGV4dDogJ0xpbnV4JyB9LFxuICAgICAgICB7IHZhbHVlOiA0MCwgdGV4dDogJyBVbml4JyB9XG4gICAgXTtcblxuICAgIHN0YXR1c09wdGlvbnMgPSBbXG4gICAgICAgIHsgdmFsdWU6IDAsIHRleHQ6ICdJbml0JyB9LFxuICAgICAgICB7IHZhbHVlOiAxMCwgdGV4dDogJ1JlYWR5JyB9LFxuICAgICAgICB7IHZhbHVlOiAyMCwgdGV4dDogJ09mZmxpbmUnIH0sXG4gICAgICAgIHsgdmFsdWU6IDMwLCB0ZXh0OiAnRmFpbHVyZScgfSxcbiAgICAgICAgeyB2YWx1ZTogMTAwLCB0ZXh0OiAnVW5rbm93bicgfVxuICAgIF07XG5cbiAgICBwcm90b2NvbE9wdGlvbnMgPSBbXG4gICAgICAgIHsgdmFsdWU6IDAsIHRleHQ6ICdIVFRQJyB9LFxuICAgICAgICB7IHZhbHVlOiAxMCwgdGV4dDogJ0hUVFBTJyB9LFxuICAgICAgICB7IHZhbHVlOiAyMCwgdGV4dDogJ0ZUUCcgfVxuICAgIF07XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hbGVydFNlcnZpY2U6IElBbGVydFNlcnZpY2VDb250cmFjdDtcbiAgICByZWFkb25seSB0cmFuc2xhdG9yOiBJVHJhbnNsYXRpb25TZXJ2aWNlQ29udHJhY3Q7XG5cbiAgICAvLyBUT0RPOiB1c2UgaXQgdG8gY29udHJvbCBzdWJtaXQgYnV0dG9uP1xuICAgIGFueUZvcm1DaGFuZ2U6IGJvb2xlYW47XG4gICAgc2hvd1N1Ym1pdFByb2dyZXNzOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3ByZXZGb3JtVmFsdWU6IElEc3VTcGVjTW9kZWw7XG4gICAgcHJpdmF0ZSBfZW50aXR5SWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2RzdVJlZ2lzdGFyOiBEc3VSZWdpc3RhclNlcnZpY2UsXG4gICAgICAgIGFsZXJ0U2VydmljZVByb3ZpZGVyOiBBbGVydFNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlUHJvdmljZXI6IFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXIsXG4gICAgICAgIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZSA9IGFsZXJ0U2VydmljZVByb3ZpZGVyLmdldCgpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IgPSB0cmFuc2xhdGVTZXJ2aWNlUHJvdmljZXIuZ2V0KCk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgZGV2aWNlVW5pcXVlSWQ6IG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiAnJywgZGlzYWJsZWQ6IHRydWUgfSwgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSksXG4gICAgICAgICAgICBpcFY0OiBuZXcgRm9ybUNvbnRyb2woJycpLFxuICAgICAgICAgICAgaG9zdDogbmV3IEZvcm1Db250cm9sKCcnLCB7IHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSxcbiAgICAgICAgICAgIHByb3RvY29sOiBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogLTEsIGRpc2FibGVkOiB0cnVlIH0sIHsgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdIH0pLFxuICAgICAgICAgICAgcG9ydDogbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IDAsIGRpc2FibGVkOiB0cnVlIH0sIHsgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdIH0pLFxuICAgICAgICAgICAgZGV2aWNlTmFtZTogbmV3IEZvcm1Db250cm9sKCcnLCB7IHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSxcbiAgICAgICAgICAgIGRldmljZUFyY2g6IG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiAtMSwgZGlzYWJsZWQ6IHRydWUgfSwgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSksXG4gICAgICAgICAgICBjYXBhY2l0eTogbmV3IEZvcm1Db250cm9sKDAsIHsgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdIH0pLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBuZXcgRm9ybUNvbnRyb2woMCwgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSksXG4gICAgICAgICAgICBhcGlLZXk6IG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiAnJywgZGlzYWJsZWQ6IHRydWUgfSwgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSksXG4gICAgICAgICAgICBzdGF0dXM6IG5ldyBGb3JtQ29udHJvbCgtMSwgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSksXG4gICAgICAgICAgICBkaXNjb3ZlckVuZHBvaW50OiBuZXcgRm9ybUNvbnRyb2woJycpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBkZXZpY2VVbmlxdWVJZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2RldmljZVVuaXF1ZUlkJyk7IH1cbiAgICBnZXQgaXBWNCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2lwVjQnKTsgfVxuICAgIGdldCBob3N0KCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgnaG9zdCcpOyB9XG4gICAgZ2V0IHByb3RvY29sKCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgncHJvdG9jb2wnKTsgfVxuICAgIGdldCBwb3J0KCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgncG9ydCcpOyB9XG4gICAgZ2V0IGRldmljZU5hbWUoKSB7IHJldHVybiB0aGlzLmZvcm0uZ2V0KCdkZXZpY2VOYW1lJyk7IH1cbiAgICBnZXQgZGV2aWNlQXJjaCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2RldmljZUFyY2gnKTsgfVxuICAgIGdldCBjYXBhY2l0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2NhcGFjaXR5Jyk7IH1cbiAgICBnZXQgdGhyZXNob2xkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgndGhyZXNob2xkJyk7IH1cbiAgICBnZXQgYXBpS2V5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgnYXBpS2V5Jyk7IH1cbiAgICBnZXQgc3RhdHVzKCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgnc3RhdHVzJyk7IH1cbiAgICBnZXQgZGlzY292ZXJFbmRwb2ludCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2Rpc2NvdmVyRW5kcG9pbnQnKTsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMub25JbnB1dENoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25JbnB1dENoYW5nZWQoKSB7XG4gICAgICAgIC8vIGluaXQgZGF0YSByZWFkeVxuICAgICAgICBpZiAodGhpcy5pbml0RGF0YSAmJiB0aGlzLmluaXREYXRhLmRldmljZVVuaXF1ZUlkKSB7XG4gICAgICAgICAgICB0aGlzLl9kc3VSZWdpc3Rhci5nZXRCeVVuaXF1ZUlkQXN5bmModGhpcy5pbml0RGF0YS5kZXZpY2VVbmlxdWVJZClcbiAgICAgICAgICAgICAgICAudGhlbihhID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5pdERhdGEsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pcEFkZHJlc3NlcyA9IHYuaXBBZGRyZXNzZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdi5pcEFkZHJlc3NlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2LnByZXR0eURldmljZUFyY2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdi5wcmV0dHlQcm90b2NvbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2LnByZXR0eVN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2LnJhbms7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdi51c2FnZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW50aXR5SWQgPSB2LmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHYuaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlKGZhbHNlLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcFY0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3ZlckVuZHBvaW50OiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5pbml0RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlwQWRkcmVzc2VzID0gdi5pcEFkZHJlc3NlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2LmlwQWRkcmVzc2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGUodHJ1ZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmV2Rm9ybVZhbHVlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mb3JtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZGb3JtVmFsdWUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5lbmFibGUoZmFsc2UsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlKGZsYWc6IGJvb2xlYW4sIGV2dDogRXZlbnQpIHtcbiAgICAgICAgZXZ0ICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZW5hYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBjb25zdCBjdXJyZW50Rm9ybVZhbHVlID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5fcHJldkZvcm1WYWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRGb3JtVmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZW50aXR5SWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VzID0gY2FsY3VsYXRlRHN1U3BlY0NoYW5nZXModGhpcy5fcHJldkZvcm1WYWx1ZSwgY3VycmVudEZvcm1WYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1pbmZvJztcbiAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSBcIlN1Ym1pdHRpbmcgLi4uXCI7XG5cbiAgICAgICAgY29uc3QgdiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZm9ybS52YWx1ZSwge1xuICAgICAgICAgICAgZGV2aWNlVW5pcXVlSWQ6IHRoaXMuZGV2aWNlVW5pcXVlSWQudmFsdWUsXG4gICAgICAgICAgICBwcm90b2NvbDogdGhpcy5wcm90b2NvbC52YWx1ZSxcbiAgICAgICAgICAgIHBvcnQ6IHRoaXMucG9ydC52YWx1ZSxcbiAgICAgICAgICAgIGRldmljZUFyY2g6IHRoaXMuZGV2aWNlQXJjaC52YWx1ZSxcbiAgICAgICAgICAgIGFwaUtleTogdGhpcy5hcGlLZXkudmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaG93U3VibWl0UHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLl9kc3VSZWdpc3Rhci5yZWdpc3RlckFzeW5jKHYpXG4gICAgICAgICAgICAudGhlbihpZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW50aXR5SWQgPSBpZDtcbiAgICAgICAgICAgICAgICAvLyBTdG9wIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3VibWl0UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgbWVzc2FnZSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1zdWNjZXNzJztcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9IFwiSnVzdCByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHNob3VsZCBoYXZlIHNvbWUgaWQgcmV0dXJuZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldkZvcm1WYWx1ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZm9ybS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RTVSByZWdpc3RhcicsICdZb3UganVzdCByZWdpc3RlcmVkIHlvdXIgZGV2aWNlIScsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0sIF8gPT4ge1xuICAgICAgICAgICAgICAgIC8vIFN0b3AgcHJvZ3Jlc3MgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3VibWl0UHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gJ2FsZXJ0LWRhbmdlcic7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmchJztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZShjaGFuZ2VzOiBJRHN1U3BlY1VwZGF0ZWRNb2RlbCkge1xuICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1pbmZvJztcbiAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSBcIlN1Ym1pdHRpbmcgLi4uXCI7XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3NcbiAgICAgICAgdGhpcy5zaG93U3VibWl0UHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLl9kc3VSZWdpc3Rhci51cGRhdGVCeVVuaXF1ZUlkQXN5bmModGhpcy5kZXZpY2VVbmlxdWVJZC52YWx1ZSwgY2hhbmdlcylcbiAgICAgICAgICAgIC50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIC8vIFN0b3AgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdWJtaXRQcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gbm90aWZ5IG1lc3NhZ2UgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSAnYWxlcnQtc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSBcIkp1c3QgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2Rm9ybVZhbHVlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mb3JtLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnRFNVIHJlZ2lzdGFyJywgJ1lvdSBqdXN0IHVwZGF0ZWQgeW91ciBkZXZpY2UhJywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSwgXyA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU3RvcCBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N1Ym1pdFByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9ICdhbGVydC1kYW5nZXInO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nISc7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==