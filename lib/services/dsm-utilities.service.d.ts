import { HttpClient } from '@angular/common/http';
import { RuntimeConfiguration } from './runtime-configuration';
export declare class DsmUtilitiesService {
    private readonly _httpClient;
    private readonly _configuration;
    constructor(_httpClient: HttpClient, _configuration: RuntimeConfiguration);
    discoverEndpoints(serverUrl: string): Promise<any>;
    pingFromDSPAsync(serverUrl: string, apiKey: string): Promise<Object>;
    pingFromDSUAsync(serverUrl: string, apiKey: string): Promise<Object>;
    pingFromDSMAsync(serverUrl: string, apiKey: string): Promise<Object>;
}
