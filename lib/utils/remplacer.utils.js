"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplacerUtils = void 0;
var stubs_1 = require("./../stubs");
var ReplacerUtils = /** @class */ (function () {
    function ReplacerUtils(_name) {
        this._name = _name;
        this._toLoweraName = this.toLowerFirstLetter(_name);
        this._toUpperaName = this.toUpperFirstLetter(_name);
    }
    ReplacerUtils.prototype.toLowerFirstLetter = function (word) {
        return word.charAt(0).toLowerCase() + word.slice(1);
    };
    ReplacerUtils.prototype.toUpperFirstLetter = function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    ReplacerUtils.prototype.getServiceTemplate = function () {
        if (!this._name)
            throw new Error('[Remplace - Service] You neet to enter the service name');
        var servicePath = stubs_1.Stub.getStubServicePath();
        var text = stubs_1.Stub.getStub(servicePath);
        return text;
    };
    ReplacerUtils.prototype.remplaceText = function (text) {
        var re1 = /{{upperName}}/gi;
        var re2 = /{{lowerName}}/gi;
        var text2 = text.replace(re1, this._toUpperaName);
        return text2.replace(re2, this._toLoweraName);
    };
    ReplacerUtils.prototype.getNewService = function () {
        var tmp = this.getServiceTemplate();
        return this.remplaceText(tmp);
    };
    return ReplacerUtils;
}());
exports.ReplacerUtils = ReplacerUtils;
//# sourceMappingURL=remplacer.utils.js.map