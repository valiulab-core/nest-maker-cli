"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesUtils = void 0;
var chalk_1 = __importDefault(require("chalk"));
var MessagesUtils = /** @class */ (function () {
    function MessagesUtils() {
    }
    MessagesUtils.error = function (msg) {
        console.log(chalk_1.default.red("[ERROR] " + msg));
    };
    return MessagesUtils;
}());
exports.MessagesUtils = MessagesUtils;
//# sourceMappingURL=messages.utils.js.map