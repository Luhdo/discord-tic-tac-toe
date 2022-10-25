import { ButtonStyle, SlashCommandBuilder, ComponentType } from "discord.js";

import type { CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("games")
  .setDescription("choose what game do you want to play with this bot")
  .addStringOption((opt) =>
    opt
      .setName("game")
      .setDescription("choose the game")
      .setRequired(true)
      .addChoices({ name: "tic tac toe", value: "tic-tac-toe" })
  );

export async function run(interaction: CommandInteraction) {
  const Game = interaction.options.get("game");

  interaction.reply({
    content: `${Game?.value}`,
    ephemeral: true,
    components: [
      {
        type: 1,
        components: [
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-0",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-1",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-2",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
        ],
      },
      {
        type: 1,
        components: [
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-3",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-4",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-5",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
        ],
      },
      {
        type: 1,
        components: [
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-6",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-7",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
          {
            type: ComponentType.Button,
            label: undefined,
            customId: "btn-8",
            style: ButtonStyle.Secondary,
            emoji: "<:space:1033134191082217483>",
            disabled: false,
          },
          {
            type: ComponentType.Button,
            label: "reset",
            customId: "reset",
            style: ButtonStyle.Danger,
            emoji: undefined,
            disabled: false,
          },
        ],
      },
    ],
  });
}

export default { data, run };
