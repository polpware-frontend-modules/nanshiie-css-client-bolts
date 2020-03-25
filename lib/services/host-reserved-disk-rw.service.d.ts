import { HttpClient } from '@angular/common/http';
import { RuntimeConfiguration } from './runtime-configuration';
export interface IHostReservedDiskModel {
    storageRootFullPath: string;
    tempDirName?: string;
    stagedDirName?: string;
    commitedDirName?: string;
    availableDrivers?: [{
        rootDirectory: string;
        totalSpace: number;
        freeSpace: number;
    }];
}
export declare class HostReservedDiskRWService {
    private readonly _httpClient;
    private readonly _runtimeConfiguration;
    private _cached;
    constructor(_httpClient: HttpClient, _runtimeConfiguration: RuntimeConfiguration);
    readAsync(checkCache?: boolean): Promise<IHostReservedDiskModel>;
    writeAsync(data: IHostReservedDiskModel): Promise<Object>;
}
