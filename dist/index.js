"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.components = exports.commands = exports.client = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const ora_1 = __importDefault(require("ora"));
const discord_js_1 = require("discord.js");
const fs_1 = __importDefault(require("fs"));
const config_1 = __importDefault(require("./config"));
const Loader = (0, ora_1.default)("Registering Intents").start();
let finalIntents = [];
if (!Array.isArray(config_1.default.bot.intents)) {
    Loader.warn("Intents in config file must be in an array, default intents will be used");
}
else {
    finalIntents = config_1.default.bot.intents;
    Loader.succeed("Loaded intents successfully from the config file");
}
exports.client = new discord_js_1.Client({ intents: finalIntents });
exports.commands = new discord_js_1.Collection();
exports.components = new discord_js_1.Collection();
const events = fs_1.default
    // *Change /src/ in the line below to /dist/ before you build, also change the .ts filter to .js
    .readdirSync("./dist/source/events")
    .filter((file) => file.endsWith(".js"));
events.forEach((event) => require(`./source/events/${event}`));
exports.client.login(config_1.default.bot.token);
