import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertServiceAbstractProvider, ITranslationServiceContract, TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { HostReservedDiskRWService, IHostReservedDiskModel } from '../../services/host-reserved-disk-rw.service';
export declare class HostReservedDiskFormComponent implements OnInit {
    private readonly _diskService;
    readonly form: FormGroup;
    alertMessage: string;
    alertType: 'alert-info' | 'alert-success' | 'alert-danger' | '';
    private readonly _alertService;
    readonly translator: ITranslationServiceContract;
    deviceInfo: IHostReservedDiskModel;
    constructor(_diskService: HostReservedDiskRWService, alertServiceProvider: AlertServiceAbstractProvider, translateServiceProvicer: TranslationServiceAbstractProvider, formBuilder: FormBuilder);
    readonly storageRootFullPath: import("@angular/forms").AbstractControl;
    ngOnInit(): void;
    enable(flag: boolean, evt: Event): void;
    submit(): void;
}
