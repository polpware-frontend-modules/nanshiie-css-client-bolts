/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/runtime-configuration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// We on purpose use get/set to retrieve values and
// store values onto corresponding private properties,
// as these properties may change at run time. We need to
// lazily decide the values of these properties. 
var RuntimeConfiguration = /** @class */ (function () {
    function RuntimeConfiguration() {
    }
    Object.defineProperty(RuntimeConfiguration.prototype, "dsmSettingsPath", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsmSettingsPath;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsmSettingsPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "dsuLookupPath", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsuLookupPath;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsuLookupPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "dsuRegistarPath", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsuRegistarPath;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsuRegistarPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "dsuUpdatePath", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsuUpdatePath;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsuUpdatePath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "dsuUndoRegisterPath", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsuUndoRegisterPath;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsuUndoRegisterPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "dsmServerUrl", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsmServerUrl;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsmServerUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "dsmServerApiKey4DSU", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsmServerApiKey4DSU;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsmServerApiKey4DSU = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "dsmServerApiKey4DSP", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsmServerApiKey4DSP;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsmServerApiKey4DSP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "dsmServerApiKey4DSM", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dsmServerApiKey4DSM;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dsmServerApiKey4DSM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "discoverDSMEndpoint", {
        get: /**
         * @return {?}
         */
        function () {
            return 'api/discover';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "pingDSMEndpoint4DSU", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pingDSMFromDSU;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pingDSMFromDSU = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "pingDSMEndpoint4DSP", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pingDSMFromDSP;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pingDSMFromDSP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "pingDSMEndpoint4DSM", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pingDSMFromDSM;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pingDSMFromDSM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "hostReservedDiskSettingPath", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hostReservedDiskSettingPath;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hostReservedDiskSettingPath = value;
        },
        enumerable: true,
        configurable: true
    });
    RuntimeConfiguration.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ RuntimeConfiguration.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RuntimeConfiguration_Factory() { return new RuntimeConfiguration(); }, token: RuntimeConfiguration, providedIn: "root" });
    return RuntimeConfiguration;
}());
export { RuntimeConfiguration };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcnVudGltZS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBTzNDO0lBQUE7S0E4SEM7SUFuSEcsc0JBQUksaURBQWU7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDOzs7OztRQUNELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLCtDQUFhOzs7O1FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7Ozs7O1FBQ0QsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLGlEQUFlOzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7Ozs7UUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSwrQ0FBYTs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7OztRQUNELFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxxREFBbUI7Ozs7UUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDOzs7OztRQUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDhDQUFZOzs7O1FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBQ0QsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLHFEQUFtQjs7OztRQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDLENBQUM7Ozs7O1FBQ0QsVUFBd0IsS0FBYTtZQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7OztPQUhBO0lBTUQsc0JBQUkscURBQW1COzs7O1FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDckMsQ0FBQzs7Ozs7UUFDRCxVQUF3QixLQUFhO1lBQ2pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxxREFBbUI7Ozs7UUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDOzs7OztRQUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLHFEQUFtQjs7OztRQUF2QjtZQUNJLE9BQU8sY0FBYyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBTUQsc0JBQUkscURBQW1COzs7O1FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBQ0QsVUFBd0IsS0FBYTtZQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLHFEQUFtQjs7OztRQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7OztRQUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxxREFBbUI7Ozs7UUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzs7Ozs7UUFDRCxVQUF3QixLQUFhO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQUhBO0lBU0Qsc0JBQUksNkRBQTJCOzs7O1FBQS9CO1lBQ0ksT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7UUFDN0MsQ0FBQzs7Ozs7UUFDRCxVQUFnQyxLQUFhO1lBQ3pDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUM7UUFDOUMsQ0FBQzs7O09BSEE7O2dCQXpISixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7K0JBVEQ7Q0FxSUMsQUE5SEQsSUE4SEM7U0EzSFksb0JBQW9COzs7Ozs7SUFPN0IsZ0RBQWdDOzs7OztJQVNoQyw4Q0FBOEI7Ozs7O0lBUTlCLGdEQUFnQzs7Ozs7SUFRaEMsOENBQThCOzs7OztJQVE5QixvREFBb0M7Ozs7O0lBU3BDLDZDQUE4Qjs7Ozs7SUFROUIsb0RBQXFDOzs7OztJQVFyQyxvREFBcUM7Ozs7O0lBUXJDLG9EQUFxQzs7Ozs7SUFlckMsK0NBQWdDOzs7OztJQVFoQywrQ0FBZ0M7Ozs7O0lBUWhDLCtDQUFnQzs7Ozs7SUFXaEMsNERBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBXZSBvbiBwdXJwb3NlIHVzZSBnZXQvc2V0IHRvIHJldHJpZXZlIHZhbHVlcyBhbmRcbi8vIHN0b3JlIHZhbHVlcyBvbnRvIGNvcnJlc3BvbmRpbmcgcHJpdmF0ZSBwcm9wZXJ0aWVzLFxuLy8gYXMgdGhlc2UgcHJvcGVydGllcyBtYXkgY2hhbmdlIGF0IHJ1biB0aW1lLiBXZSBuZWVkIHRvXG4vLyBsYXppbHkgZGVjaWRlIHRoZSB2YWx1ZXMgb2YgdGhlc2UgcHJvcGVydGllcy4gXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJ1bnRpbWVDb25maWd1cmF0aW9uIHtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRFNNIFNldHRpbmdzXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFVybCByZWxhdGl2ZSBwYXRoIGZvciBSZWFkL1dyaXRlIERTTSBzZXR0aW5ncyBvbiBjbGllbnQgXG4gICAgcHJpdmF0ZSBfZHNtU2V0dGluZ3NQYXRoOiBzdHJpbmdcbiAgICBnZXQgZHNtU2V0dGluZ3NQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHNtU2V0dGluZ3NQYXRoO1xuICAgIH1cbiAgICBzZXQgZHNtU2V0dGluZ3NQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHNtU2V0dGluZ3NQYXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gZHN1IHJlZ2lzdGVydGlvblxuICAgIHByaXZhdGUgX2RzdUxvb2t1cFBhdGg6IHN0cmluZ1xuICAgIGdldCBkc3VMb29rdXBQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHN1TG9va3VwUGF0aDtcbiAgICB9XG4gICAgc2V0IGRzdUxvb2t1cFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc3VMb29rdXBQYXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHN1UmVnaXN0YXJQYXRoOiBzdHJpbmdcbiAgICBnZXQgZHN1UmVnaXN0YXJQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHN1UmVnaXN0YXJQYXRoO1xuICAgIH1cbiAgICBzZXQgZHN1UmVnaXN0YXJQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHN1UmVnaXN0YXJQYXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHN1VXBkYXRlUGF0aDogc3RyaW5nXG4gICAgZ2V0IGRzdVVwZGF0ZVBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc3VVcGRhdGVQYXRoO1xuICAgIH1cbiAgICBzZXQgZHN1VXBkYXRlUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzdVVwZGF0ZVBhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc3VVbmRvUmVnaXN0ZXJQYXRoOiBzdHJpbmdcbiAgICBnZXQgZHN1VW5kb1JlZ2lzdGVyUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzdVVuZG9SZWdpc3RlclBhdGg7XG4gICAgfVxuICAgIHNldCBkc3VVbmRvUmVnaXN0ZXJQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHN1VW5kb1JlZ2lzdGVyUGF0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIFNldHRpbmdzIGZvciBEU01cbiAgICBwcml2YXRlIF9kc21TZXJ2ZXJVcmw6IHN0cmluZztcbiAgICBnZXQgZHNtU2VydmVyVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHNtU2VydmVyVXJsO1xuICAgIH1cbiAgICBzZXQgZHNtU2VydmVyVXJsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHNtU2VydmVyVXJsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHNtU2VydmVyQXBpS2V5NERTVTogc3RyaW5nO1xuICAgIGdldCBkc21TZXJ2ZXJBcGlLZXk0RFNVKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHNtU2VydmVyQXBpS2V5NERTVTtcbiAgICB9XG4gICAgc2V0IGRzbVNlcnZlckFwaUtleTREU1UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNVID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHNtU2VydmVyQXBpS2V5NERTUDogc3RyaW5nO1xuICAgIGdldCBkc21TZXJ2ZXJBcGlLZXk0RFNQKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHNtU2VydmVyQXBpS2V5NERTUDtcbiAgICB9XG4gICAgc2V0IGRzbVNlcnZlckFwaUtleTREU1AodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNQID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHNtU2VydmVyQXBpS2V5NERTTTogc3RyaW5nO1xuICAgIGdldCBkc21TZXJ2ZXJBcGlLZXk0RFNNKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHNtU2VydmVyQXBpS2V5NERTTTtcbiAgICB9XG4gICAgc2V0IGRzbVNlcnZlckFwaUtleTREU00odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNNID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2NvdmVyRFNNRW5kcG9pbnQoKSB7XG4gICAgICAgIHJldHVybiAnYXBpL2Rpc2NvdmVyJztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFBpbmdcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHByaXZhdGUgX3BpbmdEU01Gcm9tRFNVOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU1UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW5nRFNNRnJvbURTVTtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU1UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW5nRFNNRnJvbURTVSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbmdEU01Gcm9tRFNQOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU1AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW5nRFNNRnJvbURTUDtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU1AodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW5nRFNNRnJvbURTUCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbmdEU01Gcm9tRFNNOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU00oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW5nRFNNRnJvbURTTTtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU00odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW5nRFNNRnJvbURTTSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQ29tbW9uYWxpdHkgYW1vbmcgYWxsIGtpbmRzIG9mIGNsaWVudHNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHByaXZhdGUgX2hvc3RSZXNlcnZlZERpc2tTZXR0aW5nUGF0aDogc3RyaW5nO1xuICAgIGdldCBob3N0UmVzZXJ2ZWREaXNrU2V0dGluZ1BhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0UmVzZXJ2ZWREaXNrU2V0dGluZ1BhdGg7XG4gICAgfVxuICAgIHNldCBob3N0UmVzZXJ2ZWREaXNrU2V0dGluZ1BhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9ob3N0UmVzZXJ2ZWREaXNrU2V0dGluZ1BhdGggPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiJdfQ==