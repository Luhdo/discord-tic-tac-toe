const { GatewayIntentBits } = require("discord.js");

export default {
  bot: {
    token: process.env.DISCORD_BOT_TOKEN!,
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
    guildId: "854044193811202108",
    version: "0.0.0",
  },
};
