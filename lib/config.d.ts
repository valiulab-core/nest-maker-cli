import { IStubs } from './interfaces/stubs.interface';
export interface IConfig {
    stubs: {
        paths: IStubs;
    };
}
export declare const Config: IConfig;
