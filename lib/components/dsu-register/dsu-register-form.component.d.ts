import { OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertServiceAbstractProvider, ITranslationServiceContract, TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { IDsuSpecModel, IDsuSpecUpdatedModel } from '../../models/dsu-spec.model';
import { DsuRegistarService } from '../../services/dsu-registar.service';
export declare class DsuRegisterFormComponent implements OnInit, OnChanges {
    private readonly _dsuRegistar;
    initData: IDsuSpecModel;
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    readonly form: FormGroup;
    alertMessage: string;
    alertType: string;
    ipAddresses: string[];
    deviceArchOptions: {
        value: number;
        text: string;
    }[];
    statusOptions: {
        value: number;
        text: string;
    }[];
    protocolOptions: {
        value: number;
        text: string;
    }[];
    private readonly _alertService;
    readonly translator: ITranslationServiceContract;
    anyFormChange: boolean;
    showSubmitProgress: boolean;
    private _prevFormValue;
    private _entityId;
    constructor(_dsuRegistar: DsuRegistarService, alertServiceProvider: AlertServiceAbstractProvider, translateServiceProvicer: TranslationServiceAbstractProvider, formBuilder: FormBuilder);
    readonly deviceUniqueId: import("@angular/forms").AbstractControl;
    readonly ipV4: import("@angular/forms").AbstractControl;
    readonly host: import("@angular/forms").AbstractControl;
    readonly protocol: import("@angular/forms").AbstractControl;
    readonly port: import("@angular/forms").AbstractControl;
    readonly deviceName: import("@angular/forms").AbstractControl;
    readonly deviceArch: import("@angular/forms").AbstractControl;
    readonly capacity: import("@angular/forms").AbstractControl;
    readonly threshold: import("@angular/forms").AbstractControl;
    readonly apiKey: import("@angular/forms").AbstractControl;
    readonly status: import("@angular/forms").AbstractControl;
    readonly discoverEndpoint: import("@angular/forms").AbstractControl;
    ngOnInit(): void;
    ngOnChanges(): void;
    private onInputChanged;
    enable(flag: boolean, evt: Event): void;
    submit(): void;
    create(): Promise<void>;
    update(changes: IDsuSpecUpdatedModel): Promise<void>;
}
