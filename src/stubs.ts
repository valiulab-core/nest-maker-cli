import { join } from 'path';
import * as fs from 'fs';

export class Stub {
	static stubsPath = join(`${__dirname}/stubs`);

	public static getStubPath(template: string): string {
		return join(Stub.stubsPath, template);
	}

	public static getStubModulePath(): string {
		return Stub.getStubPath('module.stub');
	}

	public static getStubControllerPath(): string {
		return Stub.getStubPath('controller.stub');
	}

	public static getStubControllerSpecPath(): string {
		return Stub.getStubPath('controller.spec.stub');
	}

	public static getStubServicePath(): string {
		return Stub.getStubPath('service.stub');
	}

	public static getStubServiceSpecPath(): string {
		return Stub.getStubPath('service.spec.stub');
	}

	public static getStubExceptionPath(): string {
		return Stub.getStubPath('exception.stub');
	}

	public static getStub(path: string): string {
		return fs.readFileSync(path, {
			encoding: 'utf-8'
		});
	}
}
