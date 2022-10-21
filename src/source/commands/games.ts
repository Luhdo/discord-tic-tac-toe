import { SlashCommandBuilder } from "discord.js";

import type { Interaction } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("games")
  .setDescription("choose what game do you want to play with this bot")
  .addStringOption((opt) =>
    opt.setName("game").setDescription("choose the game")
  );

export async function run(interaction: Interaction) {
  interaction.isModalSubmit();
}

export default { data, run };
