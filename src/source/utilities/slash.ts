import { REST, Routes } from "discord.js";

import config from "../../config";

export default async function slash() {
  console.log(`Started refreshing application (/) commands.`);

  const rest = new REST({ version: "10" }).setToken(config.bot.token);
}
