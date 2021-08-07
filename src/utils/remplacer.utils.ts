import { Stub } from './../stubs';
export class ReplacerUtils {
	private _toLoweraName: string;
	private _toUpperaName: string;
	constructor(private _name: string) {
		this._toLoweraName = this.toLowerFirstLetter(_name);
		this._toUpperaName = this.toUpperFirstLetter(_name);
	}

	private toLowerFirstLetter(word: string): string {
		return word.charAt(0).toLowerCase() + word.slice(1);
	}

	private toUpperFirstLetter(word: string): string {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	public getServiceTemplate() {
		if (!this._name) throw new Error('[Remplace - Service] You neet to enter the service name');

		const servicePath: string = Stub.getStubServicePath();
		const text: string = Stub.getStub(servicePath);

		return text;
	}

	public remplaceText(text: string): string {
		let re1 = /{{upperName}}/gi;
		let re2 = /{{lowerName}}/gi;
		let text2 = text.replace(re1, this._toUpperaName);
		return text2.replace(re2, this._toLoweraName);
	}

	public getNewService() {
		const tmp: string = this.getServiceTemplate();
		return this.remplaceText(tmp);
	}
}
