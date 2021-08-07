"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stub = void 0;
var path_1 = require("path");
var fs = __importStar(require("fs"));
var Stub = /** @class */ (function () {
    function Stub() {
    }
    Stub.getStubPath = function (template) {
        return path_1.join(Stub.stubsPath, template);
    };
    Stub.getStubModulePath = function () {
        return Stub.getStubPath('module.stub');
    };
    Stub.getStubControllerPath = function () {
        return Stub.getStubPath('controller.stub');
    };
    Stub.getStubControllerSpecPath = function () {
        return Stub.getStubPath('controller.spec.stub');
    };
    Stub.getStubServicePath = function () {
        return Stub.getStubPath('service.stub');
    };
    Stub.getStubServiceSpecPath = function () {
        return Stub.getStubPath('service.spec.stub');
    };
    Stub.getStubExceptionPath = function () {
        return Stub.getStubPath('exception.stub');
    };
    Stub.getStub = function (path) {
        return fs.readFileSync(path, {
            encoding: 'utf-8'
        });
    };
    Stub.stubsPath = path_1.join(__dirname + "/stubs");
    return Stub;
}());
exports.Stub = Stub;
//# sourceMappingURL=stubs.js.map