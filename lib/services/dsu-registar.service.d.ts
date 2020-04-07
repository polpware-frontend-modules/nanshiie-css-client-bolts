import { HttpClient } from '@angular/common/http';
import { RuntimeConfiguration } from './runtime-configuration';
import { IDsuSpecModel, IDsuSpecUpdatedModel } from '../models/dsu-spec.model';
export declare class DsuRegistarService {
    private readonly _httpClient;
    private readonly _runtimeConfiguration;
    constructor(_httpClient: HttpClient, _runtimeConfiguration: RuntimeConfiguration);
    getByUniqueIdAsync(deviceUniqueId: string): Promise<IDsuSpecModel>;
    registerAsync(data: IDsuSpecModel): Promise<string>;
    updateByUniqueIdAsync(deviceUniqueId: string, data: IDsuSpecUpdatedModel): Promise<Object>;
    undoRegisterByEntityIdAsync(entityId: string): Promise<Object>;
}
