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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hbnNoaWllL2Nzcy1jbGllbnQtYm9sdHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcnVudGltZS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVTNDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFRN0IsSUFBSSxlQUFlO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7OztJQUdELElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFHRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFJRCxJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDOzs7O0lBTUQsSUFBSSxtQkFBbUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsSUFBSSxtQkFBbUIsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFHRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFDRCxJQUFJLG1CQUFtQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUdELElBQUksbUJBQW1CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUNELElBQUksbUJBQW1CLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7O0lBTUQsSUFBSSwyQkFBMkI7UUFDM0IsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFDRCxJQUFJLDJCQUEyQixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDOzs7WUE1SEosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7Ozs7OztJQVFHLGdEQUFnQzs7Ozs7SUFTaEMsOENBQThCOzs7OztJQVE5QixnREFBZ0M7Ozs7O0lBUWhDLDhDQUE4Qjs7Ozs7SUFROUIsb0RBQW9DOzs7OztJQVNwQyw2Q0FBOEI7Ozs7O0lBUTlCLG9EQUFxQzs7Ozs7SUFRckMsb0RBQXFDOzs7OztJQVFyQyxvREFBcUM7Ozs7O0lBZXJDLCtDQUFnQzs7Ozs7SUFRaEMsK0NBQWdDOzs7OztJQVFoQywrQ0FBZ0M7Ozs7O0lBV2hDLDREQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gV2Ugb24gcHVycG9zZSB1c2UgZ2V0L3NldCB0byByZXRyaWV2ZSB2YWx1ZXMgYW5kXG4vLyBzdG9yZSB2YWx1ZXMgb250byBjb3JyZXNwb25kaW5nIHByaXZhdGUgcHJvcGVydGllcyxcbi8vIGFzIHRoZXNlIHByb3BlcnRpZXMgbWF5IGNoYW5nZSBhdCBydW4gdGltZS4gV2UgbmVlZCB0b1xuLy8gbGF6aWx5IGRlY2lkZSB0aGUgdmFsdWVzIG9mIHRoZXNlIHByb3BlcnRpZXMuIFxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSdW50aW1lQ29uZmlndXJhdGlvbiB7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIERTTSBTZXR0aW5nc1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyBVcmwgcmVsYXRpdmUgcGF0aCBmb3IgUmVhZC9Xcml0ZSBEU00gc2V0dGluZ3Mgb24gY2xpZW50IFxuICAgIHByaXZhdGUgX2RzbVNldHRpbmdzUGF0aDogc3RyaW5nXG4gICAgZ2V0IGRzbVNldHRpbmdzUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzbVNldHRpbmdzUGF0aDtcbiAgICB9XG4gICAgc2V0IGRzbVNldHRpbmdzUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzbVNldHRpbmdzUGF0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGRzdSByZWdpc3RlcnRpb25cbiAgICBwcml2YXRlIF9kc3VMb29rdXBQYXRoOiBzdHJpbmdcbiAgICBnZXQgZHN1TG9va3VwUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzdUxvb2t1cFBhdGg7XG4gICAgfVxuICAgIHNldCBkc3VMb29rdXBQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHN1TG9va3VwUGF0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RzdVJlZ2lzdGFyUGF0aDogc3RyaW5nXG4gICAgZ2V0IGRzdVJlZ2lzdGFyUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzdVJlZ2lzdGFyUGF0aDtcbiAgICB9XG4gICAgc2V0IGRzdVJlZ2lzdGFyUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzdVJlZ2lzdGFyUGF0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RzdVVwZGF0ZVBhdGg6IHN0cmluZ1xuICAgIGdldCBkc3VVcGRhdGVQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHN1VXBkYXRlUGF0aDtcbiAgICB9XG4gICAgc2V0IGRzdVVwZGF0ZVBhdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kc3VVcGRhdGVQYXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHN1VW5kb1JlZ2lzdGVyUGF0aDogc3RyaW5nXG4gICAgZ2V0IGRzdVVuZG9SZWdpc3RlclBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kc3VVbmRvUmVnaXN0ZXJQYXRoO1xuICAgIH1cbiAgICBzZXQgZHN1VW5kb1JlZ2lzdGVyUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzdVVuZG9SZWdpc3RlclBhdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBTZXR0aW5ncyBmb3IgRFNNXG4gICAgcHJpdmF0ZSBfZHNtU2VydmVyVXJsOiBzdHJpbmc7XG4gICAgZ2V0IGRzbVNlcnZlclVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzbVNlcnZlclVybDtcbiAgICB9XG4gICAgc2V0IGRzbVNlcnZlclVybCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RzbVNlcnZlclVybCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RzbVNlcnZlckFwaUtleTREU1U6IHN0cmluZztcbiAgICBnZXQgZHNtU2VydmVyQXBpS2V5NERTVSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU1U7XG4gICAgfVxuICAgIHNldCBkc21TZXJ2ZXJBcGlLZXk0RFNVKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHNtU2VydmVyQXBpS2V5NERTVSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RzbVNlcnZlckFwaUtleTREU1A6IHN0cmluZztcbiAgICBnZXQgZHNtU2VydmVyQXBpS2V5NERTUCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU1A7XG4gICAgfVxuICAgIHNldCBkc21TZXJ2ZXJBcGlLZXk0RFNQKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHNtU2VydmVyQXBpS2V5NERTUCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RzbVNlcnZlckFwaUtleTREU006IHN0cmluZztcbiAgICBnZXQgZHNtU2VydmVyQXBpS2V5NERTTSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RzbVNlcnZlckFwaUtleTREU007XG4gICAgfVxuICAgIHNldCBkc21TZXJ2ZXJBcGlLZXk0RFNNKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZHNtU2VydmVyQXBpS2V5NERTTSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkaXNjb3ZlckRTTUVuZHBvaW50KCkge1xuICAgICAgICByZXR1cm4gJ2FwaS9kaXNjb3Zlcic7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQaW5nXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBwcml2YXRlIF9waW5nRFNNRnJvbURTVTogc3RyaW5nO1xuICAgIGdldCBwaW5nRFNNRW5kcG9pbnQ0RFNVKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGluZ0RTTUZyb21EU1U7XG4gICAgfVxuICAgIHNldCBwaW5nRFNNRW5kcG9pbnQ0RFNVKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGluZ0RTTUZyb21EU1UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9waW5nRFNNRnJvbURTUDogc3RyaW5nO1xuICAgIGdldCBwaW5nRFNNRW5kcG9pbnQ0RFNQKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGluZ0RTTUZyb21EU1A7XG4gICAgfVxuICAgIHNldCBwaW5nRFNNRW5kcG9pbnQ0RFNQKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGluZ0RTTUZyb21EU1AgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9waW5nRFNNRnJvbURTTTogc3RyaW5nO1xuICAgIGdldCBwaW5nRFNNRW5kcG9pbnQ0RFNNKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGluZ0RTTUZyb21EU007XG4gICAgfVxuICAgIHNldCBwaW5nRFNNRW5kcG9pbnQ0RFNNKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGluZ0RTTUZyb21EU00gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIENvbW1vbmFsaXR5IGFtb25nIGFsbCBraW5kcyBvZiBjbGllbnRzXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBwcml2YXRlIF9ob3N0UmVzZXJ2ZWREaXNrU2V0dGluZ1BhdGg6IHN0cmluZztcbiAgICBnZXQgaG9zdFJlc2VydmVkRGlza1NldHRpbmdQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faG9zdFJlc2VydmVkRGlza1NldHRpbmdQYXRoO1xuICAgIH1cbiAgICBzZXQgaG9zdFJlc2VydmVkRGlza1NldHRpbmdQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faG9zdFJlc2VydmVkRGlza1NldHRpbmdQYXRoID0gdmFsdWU7XG4gICAgfVxuXG59XG4iXX0=