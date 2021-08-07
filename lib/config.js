"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var stubs_1 = require("./stubs");
exports.Config = {
    stubs: {
        paths: {
            module: stubs_1.Stub.getStubModulePath(),
            controller: stubs_1.Stub.getStubControllerPath(),
            controllerSpec: stubs_1.Stub.getStubControllerSpecPath(),
            service: stubs_1.Stub.getStubServicePath(),
            serviceSpec: stubs_1.Stub.getStubServiceSpecPath(),
            exception: stubs_1.Stub.getStubExceptionPath()
        }
    }
};
//# sourceMappingURL=config.js.map