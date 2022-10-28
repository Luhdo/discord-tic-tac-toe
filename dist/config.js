"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { GatewayIntentBits } = require("discord.js");
exports.default = {
    bot: {
        token: process.env.DISCORD_BOT_TOKEN,
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
        guildId: "854044193811202108",
        version: "0.0.0",
    },
};
