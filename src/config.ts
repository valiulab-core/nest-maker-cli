import { IStubs } from './interfaces/stubs.interface';
import { Stub } from './stubs';

export interface IConfig {
	stubs: {
		paths: IStubs;
	};
}

export const Config: IConfig = {
	stubs: {
		paths: {
			module: Stub.getStubModulePath(),
			controller: Stub.getStubControllerPath(),
			controllerSpec: Stub.getStubControllerSpecPath(),
			service: Stub.getStubServicePath(),
			serviceSpec: Stub.getStubServiceSpecPath(),
			exception: Stub.getStubExceptionPath()
		}
	}
};
