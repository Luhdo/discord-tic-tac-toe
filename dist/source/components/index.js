"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const ticTacToe_1 = require("../utilities/ticTacToe");
const reset_1 = __importDefault(require("./reset"));
const COMPONENTS = [reset_1.default];
Array(9)
    .fill(null)
    .forEach((o, i) => COMPONENTS.push({ data: { name: `btn-${i}` }, run: ticTacToe_1.runButton }));
COMPONENTS.forEach((c) => {
    index_1.components.set(c.data.name, c);
});
exports.default = index_1.components;
