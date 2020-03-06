/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/dsu-spec.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IDsuSpecModel() { }
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
export function IDsuSpecUpdatedModel() { }
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
export function calculateDsuSpecChanges(oldSpec, newSpec) {
    /** @type {?} */
    var fields = [
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
    var ret = {};
    fields.forEach((/**
     * @param {?} f
     * @return {?}
     */
    function (f) {
        if (newSpec[f] !== oldSpec[f]) {
            ret[f] = newSpec[f];
        }
    }));
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHN1LXNwZWMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmFuc2hpaWUvY3NzLWNsaWVudC1ib2x0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHN1LXNwZWMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxtQ0FzQkM7OztJQXJCRywyQkFBVzs7SUFDWCx1Q0FBdUI7O0lBQ3ZCLDZCQUFjOztJQUNkLDZCQUFhOztJQUNiLGlDQUFpQjs7SUFDakIsdUNBQXdCOztJQUN4Qiw2QkFBYTs7SUFDYixtQ0FBbUI7O0lBRW5CLG1DQUFtQjs7SUFDbkIseUNBQTBCOztJQUMxQixpQ0FBaUI7O0lBQ2pCLGtDQUFrQjs7SUFDbEIsK0JBQWU7O0lBQ2YsNkJBQWM7O0lBQ2QsK0JBQWdCOztJQUNoQixxQ0FBc0I7O0lBQ3RCLDhCQUFlOztJQUNmLHlDQUEwQjs7SUFFMUIsb0NBQXVCOzs7OztBQUczQiwwQ0FhQzs7O0lBWkcsb0NBQWM7O0lBQ2Qsb0NBQWM7O0lBQ2Qsd0NBQWtCOztJQUNsQixvQ0FBYzs7SUFDZCwwQ0FBb0I7O0lBRXBCLDBDQUFvQjs7SUFDcEIsd0NBQWtCOztJQUNsQix5Q0FBbUI7O0lBQ25CLHNDQUFnQjs7SUFDaEIsc0NBQWdCOztJQUNoQixnREFBMEI7Ozs7Ozs7QUFHOUIsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQTZCLEVBQUUsT0FBc0I7O1FBQ25GLE1BQU0sR0FBRztRQUNYLE1BQU07UUFDTixNQUFNO1FBQ04sVUFBVTtRQUNWLE1BQU07UUFDTixZQUFZO1FBRVosWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO1FBQ1gsUUFBUTtRQUNSLFFBQVE7UUFDUixrQkFBa0I7S0FDckI7O1FBRUssR0FBRyxHQUF5QixFQUFFO0lBQ3BDLE1BQU0sQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxDQUFDO1FBQ1osSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGludGVyZmFjZSBJRHN1U3BlY01vZGVsIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRldmljZVVuaXF1ZUlkOiBzdHJpbmc7XG4gICAgaXBWND86IHN0cmluZztcbiAgICBob3N0OiBzdHJpbmc7XG4gICAgcHJvdG9jb2w6IG51bWJlcjtcbiAgICBwcmV0dHlQcm90b2NvbD86IHN0cmluZztcbiAgICBwb3J0OiBudW1iZXI7XG4gICAgZGV2aWNlTmFtZTogc3RyaW5nO1xuXG4gICAgZGV2aWNlQXJjaDogbnVtYmVyO1xuICAgIHByZXR0eURldmljZUFyY2g/OiBzdHJpbmc7XG4gICAgY2FwYWNpdHk6IG51bWJlcjtcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcbiAgICBhcGlLZXk6IG51bWJlcjtcbiAgICByYW5rPzogbnVtYmVyO1xuICAgIHN0YXR1cz86IG51bWJlcjtcbiAgICBwcmV0dHlTdGF0dXM/OiBzdHJpbmc7XG4gICAgdXNhZ2U/OiBudW1iZXI7XG4gICAgZGlzY292ZXJFbmRwb2ludD86IHN0cmluZztcblxuICAgIGlwQWRkcmVzc2VzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURzdVNwZWNVcGRhdGVkTW9kZWwge1xuICAgIGlwVjQ/OiBzdHJpbmc7XG4gICAgaG9zdD86IHN0cmluZztcbiAgICBwcm90b2NvbD86IG51bWJlcjtcbiAgICBwb3J0PzogbnVtYmVyO1xuICAgIGRldmljZU5hbWU/OiBzdHJpbmc7XG5cbiAgICBkZXZpY2VBcmNoPzogbnVtYmVyO1xuICAgIGNhcGFjaXR5PzogbnVtYmVyO1xuICAgIHRocmVzaG9sZD86IG51bWJlcjtcbiAgICBhcGlLZXk/OiBudW1iZXI7XG4gICAgc3RhdHVzPzogbnVtYmVyO1xuICAgIGRpc2NvdmVyRW5kcG9pbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEc3VTcGVjQ2hhbmdlcyhvbGRTcGVjOiBJRHN1U3BlY1VwZGF0ZWRNb2RlbCwgbmV3U3BlYzogSURzdVNwZWNNb2RlbCk6IElEc3VTcGVjVXBkYXRlZE1vZGVsIHtcbiAgICBjb25zdCBmaWVsZHMgPSBbXG4gICAgICAgICdpcFY0JyxcbiAgICAgICAgJ2hvc3QnLFxuICAgICAgICAncHJvdG9jb2wnLFxuICAgICAgICAncG9ydCcsXG4gICAgICAgICdkZXZpY2VOYW1lJyxcblxuICAgICAgICAnZGV2aWNlQXJjaCcsXG4gICAgICAgICdjYXBhY2l0eScsXG4gICAgICAgICd0aHJlc2hvbGQnLFxuICAgICAgICAnYXBpS2V5JyxcbiAgICAgICAgJ3N0YXR1cycsXG4gICAgICAgICdkaXNjb3ZlckVuZHBvaW50J1xuICAgIF07XG5cbiAgICBjb25zdCByZXQ6IElEc3VTcGVjVXBkYXRlZE1vZGVsID0ge307XG4gICAgZmllbGRzLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGlmIChuZXdTcGVjW2ZdICE9PSBvbGRTcGVjW2ZdKSB7XG4gICAgICAgICAgICByZXRbZl0gPSBuZXdTcGVjW2ZdO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG4iXX0=