import { HttpClient } from '@angular/common/http';
import { IDsmSettingsModel } from '../models/dsm-settings.model';
import { RuntimeConfiguration } from './runtime-configuration';
export declare class DsmSettingsRWService {
    private readonly _httpClient;
    private readonly _runtimeConfiguration;
    private _cached;
    constructor(_httpClient: HttpClient, _runtimeConfiguration: RuntimeConfiguration);
    readAsync(checkCache?: boolean): Promise<IDsmSettingsModel>;
    writeAsync(data: IDsmSettingsModel): Promise<Object>;
}
