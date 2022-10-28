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
const ticTacToe_1 = require("../utilities/ticTacToe");
exports.data = { name: "reset" };
function run(interaction) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, ticTacToe_1.handleReset)(interaction.message.id);
        yield interaction.update({
            content: "Player **X** Turn",
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
