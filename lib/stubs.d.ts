export declare class Stub {
    static stubsPath: string;
    static getStubPath(template: string): string;
    static getStubModulePath(): string;
    static getStubControllerPath(): string;
    static getStubControllerSpecPath(): string;
    static getStubServicePath(): string;
    static getStubServiceSpecPath(): string;
    static getStubExceptionPath(): string;
    static getStub(path: string): string;
}
