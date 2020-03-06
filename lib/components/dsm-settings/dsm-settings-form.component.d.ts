import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DsmSettingsRWService } from '../../services/dsm-settings-rw.service';
import { DsmUtilitiesService } from '../../services/dsm-utilities.service';
import { AlertServiceAbstractProvider, ITranslationServiceContract, TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
interface IStepProgress {
    action: string;
    status: string;
}
export declare class DsmSettingsFormComponent implements OnInit {
    private readonly _rwService;
    private readonly _utilitiesService;
    readonly form: FormGroup;
    alertMessage: string;
    alertType: 'alert-info' | 'alert-success' | 'alert-danger' | '';
    passCheck: boolean;
    steps: Array<IStepProgress>;
    private readonly _alertService;
    readonly translator: ITranslationServiceContract;
    constructor(_rwService: DsmSettingsRWService, _utilitiesService: DsmUtilitiesService, alertServiceProvider: AlertServiceAbstractProvider, translateServiceProvicer: TranslationServiceAbstractProvider, formBuilder: FormBuilder);
    readonly serverUrl: import("@angular/forms").AbstractControl;
    readonly serverApiKey: import("@angular/forms").AbstractControl;
    ngOnInit(): void;
    enable(flag: boolean, evt: Event): void;
    preSubmit(): Promise<void>;
    submit(): void;
}
export {};
