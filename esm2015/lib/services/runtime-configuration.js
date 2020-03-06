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
export class RuntimeConfiguration {
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
        return this._pintDSMFromDSU;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pingDSMEndpoint4DSU(value) {
        this._pintDSMFromDSU = value;
    }
    /**
     * @return {?}
     */
    get pingDSMEndpoint4DSP() {
        return this._pintDSMFromDSP;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pingDSMEndpoint4DSP(value) {
        this._pintDSMFromDSP = value;
    }
    /**
     * @return {?}
     */
    get pingDSMEndpoint4DSM() {
        return this._pintDSMFromDSM;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pingDSMEndpoint4DSM(value) {
        this._pintDSMFromDSM = value;
    }
}
RuntimeConfiguration.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ RuntimeConfiguration.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RuntimeConfiguration_Factory() { return new RuntimeConfiguration(); }, token: RuntimeConfiguration, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcnVudGltZS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVTNDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFJN0IsSUFBSSxlQUFlO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7OztJQUdELElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFHRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFJRCxJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDOzs7O0lBR0QsSUFBSSxtQkFBbUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsSUFBSSxtQkFBbUIsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFDRCxJQUFJLG1CQUFtQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUdELElBQUksbUJBQW1CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7WUExR0osVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7Ozs7OztJQUlHLGdEQUFnQzs7Ozs7SUFTaEMsOENBQThCOzs7OztJQVE5QixnREFBZ0M7Ozs7O0lBUWhDLDhDQUE4Qjs7Ozs7SUFROUIsb0RBQW9DOzs7OztJQVNwQyw2Q0FBOEI7Ozs7O0lBUTlCLG9EQUFxQzs7Ozs7SUFRckMsb0RBQXFDOzs7OztJQVFyQyxvREFBcUM7Ozs7O0lBWXJDLCtDQUFnQzs7Ozs7SUFRaEMsK0NBQWdDOzs7OztJQVFoQywrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIFdlIG9uIHB1cnBvc2UgdXNlIGdldC9zZXQgdG8gcmV0cmlldmUgdmFsdWVzIGFuZFxuLy8gc3RvcmUgdmFsdWVzIG9udG8gY29ycmVzcG9uZGluZyBwcml2YXRlIHByb3BlcnRpZXMsXG4vLyBhcyB0aGVzZSBwcm9wZXJ0aWVzIG1heSBjaGFuZ2UgYXQgcnVuIHRpbWUuIFdlIG5lZWQgdG9cbi8vIGxhemlseSBkZWNpZGUgdGhlIHZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzLiBcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUnVudGltZUNvbmZpZ3VyYXRpb24ge1xuXG4gICAgLy8gVXJsIHJlbGF0aXZlIHBhdGggZm9yIFJlYWQvV3JpdGUgRFNNIHNldHRpbmdzIG9uIGNsaWVudCBcbiAgICBwcml2YXRlIF9kc21TZXR0aW5nc1BhdGg6IHN0cmluZ1xuICAgIGdldCBkc21TZXR0aW5nc1BhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXR0aW5nc1BhdGg7XG4gICAgfVxuICAgIHNldCBkc21TZXR0aW5nc1BhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc21TZXR0aW5nc1BhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBkc3UgcmVnaXN0ZXJ0aW9uXG4gICAgcHJpdmF0ZSBfZHN1TG9va3VwUGF0aDogc3RyaW5nXG4gICAgZ2V0IGRzdUxvb2t1cFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc3VMb29rdXBQYXRoO1xuICAgIH1cbiAgICBzZXQgZHN1TG9va3VwUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzdUxvb2t1cFBhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc3VSZWdpc3RhclBhdGg6IHN0cmluZ1xuICAgIGdldCBkc3VSZWdpc3RhclBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc3VSZWdpc3RhclBhdGg7XG4gICAgfVxuICAgIHNldCBkc3VSZWdpc3RhclBhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc3VSZWdpc3RhclBhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc3VVcGRhdGVQYXRoOiBzdHJpbmdcbiAgICBnZXQgZHN1VXBkYXRlUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzdVVwZGF0ZVBhdGg7XG4gICAgfVxuICAgIHNldCBkc3VVcGRhdGVQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHN1VXBkYXRlUGF0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RzdVVuZG9SZWdpc3RlclBhdGg6IHN0cmluZ1xuICAgIGdldCBkc3VVbmRvUmVnaXN0ZXJQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHN1VW5kb1JlZ2lzdGVyUGF0aDtcbiAgICB9XG4gICAgc2V0IGRzdVVuZG9SZWdpc3RlclBhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc3VVbmRvUmVnaXN0ZXJQYXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gU2V0dGluZ3MgZm9yIERTTVxuICAgIHByaXZhdGUgX2RzbVNlcnZlclVybDogc3RyaW5nO1xuICAgIGdldCBkc21TZXJ2ZXJVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXJ2ZXJVcmw7XG4gICAgfVxuICAgIHNldCBkc21TZXJ2ZXJVcmwodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc21TZXJ2ZXJVcmwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc21TZXJ2ZXJBcGlLZXk0RFNVOiBzdHJpbmc7XG4gICAgZ2V0IGRzbVNlcnZlckFwaUtleTREU1UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNVO1xuICAgIH1cbiAgICBzZXQgZHNtU2VydmVyQXBpS2V5NERTVSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU1UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc21TZXJ2ZXJBcGlLZXk0RFNQOiBzdHJpbmc7XG4gICAgZ2V0IGRzbVNlcnZlckFwaUtleTREU1AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNQO1xuICAgIH1cbiAgICBzZXQgZHNtU2VydmVyQXBpS2V5NERTUCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU1AgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kc21TZXJ2ZXJBcGlLZXk0RFNNOiBzdHJpbmc7XG4gICAgZ2V0IGRzbVNlcnZlckFwaUtleTREU00oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc21TZXJ2ZXJBcGlLZXk0RFNNO1xuICAgIH1cbiAgICBzZXQgZHNtU2VydmVyQXBpS2V5NERTTSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU00gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGlzY292ZXJEU01FbmRwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuICdhcGkvZGlzY292ZXInO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbnREU01Gcm9tRFNVOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU1UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW50RFNNRnJvbURTVTtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU1UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW50RFNNRnJvbURTVSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbnREU01Gcm9tRFNQOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU1AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW50RFNNRnJvbURTUDtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU1AodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW50RFNNRnJvbURTUCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbnREU01Gcm9tRFNNOiBzdHJpbmc7XG4gICAgZ2V0IHBpbmdEU01FbmRwb2ludDREU00oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW50RFNNRnJvbURTTTtcbiAgICB9XG4gICAgc2V0IHBpbmdEU01FbmRwb2ludDREU00odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9waW50RFNNRnJvbURTTSA9IHZhbHVlO1xuICAgIH1cblxufVxuIl19