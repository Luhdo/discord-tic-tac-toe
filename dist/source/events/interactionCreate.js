"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const index_1 = require("../../index");
const commands_1 = __importDefault(require("../commands"));
const components_1 = __importDefault(require("../components"));
index_1.client.on("interactionCreate", (i) => __awaiter(void 0, void 0, void 0, function* () {
    if (i.type == discord_js_1.InteractionType.ApplicationCommand) {
        const commandCheck = commands_1.default.commands.get(i.commandName);
        if (!commandCheck) {
            return console.log(`Could not find slashCommand " '${i.commandName}'`);
        }
        else {
            yield commandCheck.run(i);
        }
    }
    else if (i.type == discord_js_1.InteractionType.MessageComponent) {
        const componentCheck = components_1.default.get(i.customId);
        if (!componentCheck) {
            return console.log(`Could not find messageComponent " '${i.customId}'`);
        }
        else {
            yield componentCheck.run(i);
        }
    }
}));
