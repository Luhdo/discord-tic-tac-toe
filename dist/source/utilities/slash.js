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
const ora_1 = __importDefault(require("ora"));
const config_1 = __importDefault(require("../../config"));
function slash(clientId, commands) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const Loader = (0, ora_1.default)("Registering slash commands");
        const rest = new discord_js_1.REST({ version: "10" }).setToken(config_1.default.bot.token);
        try {
            const guildId = (_a = config_1.default.bot) === null || _a === void 0 ? void 0 : _a.guildId;
            if (guildId) {
                yield rest
                    .put(discord_js_1.Routes.applicationGuildCommands(clientId, guildId), {
                    body: commands,
                })
                    .then(() => Loader.succeed(`Loaded Guild Slash Commands`));
            }
            else {
                yield rest
                    .put(discord_js_1.Routes.applicationCommands(clientId), { body: commands })
                    .then(() => Loader.succeed(`Loaded Slash Commands`));
            }
        }
        catch (error) {
            Loader.fail("Could not register slash commands");
            console.error(error);
        }
    });
}
exports.default = slash;
