export interface IDsuSpecModel {
    id: string;
    deviceUniqueId: string;
    ipV4?: string;
    host: string;
    protocol: number;
    prettyProtocol?: string;
    port: number;
    deviceName: string;
    deviceArch: number;
    prettyDeviceArch?: string;
    capacity: number;
    threshold: number;
    apiKey: number;
    rank?: number;
    status?: number;
    prettyStatus?: string;
    usage?: number;
    discoverEndpoint?: string;
    ipAddresses?: string[];
}
export interface IDsuSpecUpdatedModel {
    ipV4?: string;
    host?: string;
    protocol?: number;
    port?: number;
    deviceName?: string;
    deviceArch?: number;
    capacity?: number;
    threshold?: number;
    apiKey?: number;
    status?: number;
    discoverEndpoint?: string;
}
export declare function calculateDsuSpecChanges(oldSpec: IDsuSpecUpdatedModel, newSpec: IDsuSpecModel): IDsuSpecUpdatedModel;
