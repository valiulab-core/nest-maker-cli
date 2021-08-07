export declare class ReplacerUtils {
    private _name;
    private _toLoweraName;
    private _toUpperaName;
    constructor(_name: string);
    private toLowerFirstLetter;
    private toUpperFirstLetter;
    getServiceTemplate(): string;
    remplaceText(text: string): string;
    getNewService(): string;
}
