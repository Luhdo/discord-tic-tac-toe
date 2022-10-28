"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const commandsArray = [];
const games_1 = __importDefault(require("./games"));
const COMMANDS = [games_1.default];
COMMANDS.forEach((cmd) => {
    index_1.commands.set(cmd.data.name, cmd);
    commandsArray.push(cmd.data.toJSON());
});
exports.default = { commands: index_1.commands, commandsArray };
