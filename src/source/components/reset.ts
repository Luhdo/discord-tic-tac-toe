import { ButtonInteraction, ButtonStyle, ComponentType } from "discord.js";
import { handleReset } from "../utilities/ticTacToe";

export const data = { name: "reset" };

export async function run(interaction: ButtonInteraction) {
  handleReset(interaction.message.id);

  await interaction.update({
    content: "Player **X** Turn",
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
