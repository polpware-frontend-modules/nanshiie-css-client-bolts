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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHN1LXNwZWMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmFuc2hpaWUvY3NzLWNsaWVudC1ib2x0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHN1LXNwZWMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxtQ0FzQkM7OztJQXJCRywyQkFBVzs7SUFDWCx1Q0FBdUI7O0lBQ3ZCLDZCQUFjOztJQUNkLDZCQUFhOztJQUNiLGlDQUFpQjs7SUFDakIsdUNBQXdCOztJQUN4Qiw2QkFBYTs7SUFDYixtQ0FBbUI7O0lBRW5CLG1DQUFtQjs7SUFDbkIseUNBQTBCOztJQUMxQixpQ0FBaUI7O0lBQ2pCLGtDQUFrQjs7SUFDbEIsK0JBQWU7O0lBQ2YsNkJBQWM7O0lBQ2QsK0JBQWdCOztJQUNoQixxQ0FBc0I7O0lBQ3RCLDhCQUFlOztJQUNmLHlDQUEwQjs7SUFFMUIsb0NBQXVCOzs7OztBQUczQiwwQ0FhQzs7O0lBWkcsb0NBQWM7O0lBQ2Qsb0NBQWM7O0lBQ2Qsd0NBQWtCOztJQUNsQixvQ0FBYzs7SUFDZCwwQ0FBb0I7O0lBRXBCLDBDQUFvQjs7SUFDcEIsd0NBQWtCOztJQUNsQix5Q0FBbUI7O0lBQ25CLHNDQUFnQjs7SUFDaEIsc0NBQWdCOztJQUNoQixnREFBMEI7Ozs7Ozs7QUFHOUIsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQTZCLEVBQUUsT0FBc0I7O1VBQ25GLE1BQU0sR0FBRztRQUNYLE1BQU07UUFDTixNQUFNO1FBQ04sVUFBVTtRQUNWLE1BQU07UUFDTixZQUFZO1FBRVosWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO1FBQ1gsUUFBUTtRQUNSLFFBQVE7UUFDUixrQkFBa0I7S0FDckI7O1VBRUssR0FBRyxHQUF5QixFQUFFO0lBQ3BDLE1BQU0sQ0FBQyxPQUFPOzs7O0lBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDZixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgaW50ZXJmYWNlIElEc3VTcGVjTW9kZWwge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGV2aWNlVW5pcXVlSWQ6IHN0cmluZztcbiAgICBpcFY0Pzogc3RyaW5nO1xuICAgIGhvc3Q6IHN0cmluZztcbiAgICBwcm90b2NvbDogbnVtYmVyO1xuICAgIHByZXR0eVByb3RvY29sPzogc3RyaW5nO1xuICAgIHBvcnQ6IG51bWJlcjtcbiAgICBkZXZpY2VOYW1lOiBzdHJpbmc7XG5cbiAgICBkZXZpY2VBcmNoOiBudW1iZXI7XG4gICAgcHJldHR5RGV2aWNlQXJjaD86IHN0cmluZztcbiAgICBjYXBhY2l0eTogbnVtYmVyO1xuICAgIHRocmVzaG9sZDogbnVtYmVyO1xuICAgIGFwaUtleTogbnVtYmVyO1xuICAgIHJhbms/OiBudW1iZXI7XG4gICAgc3RhdHVzPzogbnVtYmVyO1xuICAgIHByZXR0eVN0YXR1cz86IHN0cmluZztcbiAgICB1c2FnZT86IG51bWJlcjtcbiAgICBkaXNjb3ZlckVuZHBvaW50Pzogc3RyaW5nO1xuXG4gICAgaXBBZGRyZXNzZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHN1U3BlY1VwZGF0ZWRNb2RlbCB7XG4gICAgaXBWND86IHN0cmluZztcbiAgICBob3N0Pzogc3RyaW5nO1xuICAgIHByb3RvY29sPzogbnVtYmVyO1xuICAgIHBvcnQ/OiBudW1iZXI7XG4gICAgZGV2aWNlTmFtZT86IHN0cmluZztcblxuICAgIGRldmljZUFyY2g/OiBudW1iZXI7XG4gICAgY2FwYWNpdHk/OiBudW1iZXI7XG4gICAgdGhyZXNob2xkPzogbnVtYmVyO1xuICAgIGFwaUtleT86IG51bWJlcjtcbiAgICBzdGF0dXM/OiBudW1iZXI7XG4gICAgZGlzY292ZXJFbmRwb2ludD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURzdVNwZWNDaGFuZ2VzKG9sZFNwZWM6IElEc3VTcGVjVXBkYXRlZE1vZGVsLCBuZXdTcGVjOiBJRHN1U3BlY01vZGVsKTogSURzdVNwZWNVcGRhdGVkTW9kZWwge1xuICAgIGNvbnN0IGZpZWxkcyA9IFtcbiAgICAgICAgJ2lwVjQnLFxuICAgICAgICAnaG9zdCcsXG4gICAgICAgICdwcm90b2NvbCcsXG4gICAgICAgICdwb3J0JyxcbiAgICAgICAgJ2RldmljZU5hbWUnLFxuXG4gICAgICAgICdkZXZpY2VBcmNoJyxcbiAgICAgICAgJ2NhcGFjaXR5JyxcbiAgICAgICAgJ3RocmVzaG9sZCcsXG4gICAgICAgICdhcGlLZXknLFxuICAgICAgICAnc3RhdHVzJyxcbiAgICAgICAgJ2Rpc2NvdmVyRW5kcG9pbnQnXG4gICAgXTtcblxuICAgIGNvbnN0IHJldDogSURzdVNwZWNVcGRhdGVkTW9kZWwgPSB7fTtcbiAgICBmaWVsZHMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgaWYgKG5ld1NwZWNbZl0gIT09IG9sZFNwZWNbZl0pIHtcbiAgICAgICAgICAgIHJldFtmXSA9IG5ld1NwZWNbZl07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG59XG5cbiJdfQ==