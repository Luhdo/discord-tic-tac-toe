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
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = new discord_js_1.SlashCommandBuilder()
    .setName("games")
    .setDescription("choose what game do you want to play with this bot")
    .addStringOption((opt) => opt
    .setName("game")
    .setDescription("choose the game")
    .setRequired(true)
    .addChoices({ name: "tic tac toe", value: "tic-tac-toe" }));
function run(interaction) {
    return __awaiter(this, void 0, void 0, function* () {
        const Game = interaction.options.get("game");
        interaction.reply({
            content: `${Game === null || Game === void 0 ? void 0 : Game.value}`,
            ephemeral: true,
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-0",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-1",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-2",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                    ],
                },
                {
                    type: 1,
                    components: [
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-3",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-4",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-5",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                    ],
                },
                {
                    type: 1,
                    components: [
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-6",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-7",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: undefined,
                            customId: "btn-8",
                            style: discord_js_1.ButtonStyle.Secondary,
                            emoji: "<:space:1033134191082217483>",
                            disabled: false,
                        },
                        {
                            type: discord_js_1.ComponentType.Button,
                            label: "reset",
                            customId: "reset",
                            style: discord_js_1.ButtonStyle.Danger,
                            emoji: undefined,
                            disabled: false,
                        },
                    ],
                },
            ],
        });
    });
}
exports.run = run;
exports.default = { data: exports.data, run };
