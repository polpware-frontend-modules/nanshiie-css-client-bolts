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
            return this._pintDSMFromDSU;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pintDSMFromDSU = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "pingDSMEndpoint4DSP", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pintDSMFromDSP;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pintDSMFromDSP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfiguration.prototype, "pingDSMEndpoint4DSM", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pintDSMFromDSM;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pintDSMFromDSM = value;
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
    RuntimeConfiguration.prototype._pintDSMFromDSU;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._pintDSMFromDSP;
    /**
     * @type {?}
     * @private
     */
    RuntimeConfiguration.prototype._pintDSMFromDSM;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcnVudGltZS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBTzNDO0lBQUE7S0E0R0M7SUFyR0csc0JBQUksaURBQWU7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDOzs7OztRQUNELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLCtDQUFhOzs7O1FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7Ozs7O1FBQ0QsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLGlEQUFlOzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7Ozs7UUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSwrQ0FBYTs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7OztRQUNELFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxxREFBbUI7Ozs7UUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDOzs7OztRQUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDhDQUFZOzs7O1FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBQ0QsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLHFEQUFtQjs7OztRQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDLENBQUM7Ozs7O1FBQ0QsVUFBd0IsS0FBYTtZQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7OztPQUhBO0lBTUQsc0JBQUkscURBQW1COzs7O1FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDckMsQ0FBQzs7Ozs7UUFDRCxVQUF3QixLQUFhO1lBQ2pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxxREFBbUI7Ozs7UUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDOzs7OztRQUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQUtELHNCQUFJLHFEQUFtQjs7OztRQUF2QjtZQUNJLE9BQU8sY0FBYyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUkscURBQW1COzs7O1FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBQ0QsVUFBd0IsS0FBYTtZQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLHFEQUFtQjs7OztRQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7OztRQUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSxxREFBbUI7Ozs7UUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzs7Ozs7UUFDRCxVQUF3QixLQUFhO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQUhBOztnQkF2R0osVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OytCQVREO0NBbUhDLEFBNUdELElBNEdDO1NBekdZLG9CQUFvQjs7Ozs7O0lBRzdCLGdEQUFnQzs7Ozs7SUFTaEMsOENBQThCOzs7OztJQVE5QixnREFBZ0M7Ozs7O0lBUWhDLDhDQUE4Qjs7Ozs7SUFROUIsb0RBQW9DOzs7OztJQVNwQyw2Q0FBOEI7Ozs7O0lBUTlCLG9EQUFxQzs7Ozs7SUFRckMsb0RBQXFDOzs7OztJQVFyQyxvREFBcUM7Ozs7O0lBWXJDLCtDQUFnQzs7Ozs7SUFRaEMsK0NBQWdDOzs7OztJQVFoQywrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIFdlIG9uIHB1cnBvc2UgdXNlIGdldC9zZXQgdG8gcmV0cmlldmUgdmFsdWVzIGFuZFxuLy8gc3RvcmUgdmFsdWVzIG9udG8gY29ycmVzcG9uZGluZyBwcml2YXRlIHByb3BlcnRpZXMsXG4vLyBhcyB0aGVzZSBwcm9wZXJ0aWVzIG1heSBjaGFuZ2UgYXQgcnVuIHRpbWUuIFdlIG5lZWQgdG9cbi8vIGxhemlseSBkZWNpZGUgdGhlIHZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzLiBcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUnVudGltZUNvbmZpZ3VyYXRpb24ge1xuXG4gICAgLy8gVXJsIHJlbGF0aXZlIHBhdGggZm9yIFJlYWQvV3JpdGUgRFNNIHNldHRpbmdzIG9uIGNsaWVudCBcbiAgICBwcml2YXRlIF9kc21TZXR0aW5nc1BhdGg6IHN0cmluZ1xuICAgIGdldCBkc21TZXR0aW5nc1BhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXR0aW5nc1BhdGg7XG4gICAgfVxuICAgIHNldCBkc21TZXR0aW5nc1BhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc21TZXR0aW5nc1BhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBkc3UgcmVnaXN0ZXJ0aW9uXG4gICAgcHJpdmF0ZSBfZHN1TG9va3VwUGF0aDogc3RyaW5nXG4gICAgZ2V0IGRzdUxvb2t1cFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc3VMb29rdXBQYXRoO1xuICAgIH1cbiAgICBzZXQgZHN1TG9va3VwUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzdUxvb2t1cFBhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc3VSZWdpc3RhclBhdGg6IHN0cmluZ1xuICAgIGdldCBkc3VSZWdpc3RhclBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc3VSZWdpc3RhclBhdGg7XG4gICAgfVxuICAgIHNldCBkc3VSZWdpc3RhclBhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc3VSZWdpc3RhclBhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc3VVcGRhdGVQYXRoOiBzdHJpbmdcbiAgICBnZXQgZHN1VXBkYXRlUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzdVVwZGF0ZVBhdGg7XG4gICAgfVxuICAgIHNldCBkc3VVcGRhdGVQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHN1VXBkYXRlUGF0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RzdVVuZG9SZWdpc3RlclBhdGg6IHN0cmluZ1xuICAgIGdldCBkc3VVbmRvUmVnaXN0ZXJQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHN1VW5kb1JlZ2lzdGVyUGF0aDtcbiAgICB9XG4gICAgc2V0IGRzdVVuZG9SZWdpc3RlclBhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc3VVbmRvUmVnaXN0ZXJQYXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gU2V0dGluZ3MgZm9yIERTTVxuICAgIHByaXZhdGUgX2RzbVNlcnZlclVybDogc3RyaW5nO1xuICAgIGdldCBkc21TZXJ2ZXJVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXJ2ZXJVcmw7XG4gICAgfVxuICAgIHNldCBkc21TZXJ2ZXJVcmwodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc21TZXJ2ZXJVcmwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc21TZXJ2ZXJBcGlLZXk0RFNVOiBzdHJpbmc7XG4gICAgZ2V0IGRzbVNlcnZlckFwaUtleTREU1UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNVO1xuICAgIH1cbiAgICBzZXQgZHNtU2VydmVyQXBpS2V5NERTVSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU1UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc21TZXJ2ZXJBcGlLZXk0RFNQOiBzdHJpbmc7XG4gICAgZ2V0IGRzbVNlcnZlckFwaUtleTREU1AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNQO1xuICAgIH1cbiAgICBzZXQgZHNtU2VydmVyQXBpS2V5NERTUCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU1AgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc21TZXJ2ZXJBcGlLZXk0RFNNOiBzdHJpbmc7XG4gICAgZ2V0IGRzbVNlcnZlckFwaUtleTREU00oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNNO1xuICAgIH1cbiAgICBzZXQgZHNtU2VydmVyQXBpS2V5NERTTSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU00gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGlzY292ZXJEU01FbmRwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuICdhcGkvZGlzY292ZXInO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbnREU01Gcm9tRFNVOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU1UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW50RFNNRnJvbURTVTtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU1UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW50RFNNRnJvbURTVSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbnREU01Gcm9tRFNQOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU1AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW50RFNNRnJvbURTUDtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU1AodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW50RFNNRnJvbURTUCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbnREU01Gcm9tRFNNOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU00oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW50RFNNRnJvbURTTTtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU00odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW50RFNNRnJvbURTTSA9IHZhbHVlO1xuICAgIH1cblxufVxuIl19