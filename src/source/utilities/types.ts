import {
  SlashCommandBuilder,
  CommandInteraction,
  ButtonInteraction,
  SelectMenuInteraction,
} from "discord.js";

export type commandFileProps = {
  data: SlashCommandBuilder;
  run: (CommandInteraction: CommandInteraction) => Promise<void>;
};

export type componentFileProps = {
  data: { name: string };
  run: (
    ButtonInteraction: ButtonInteraction | SelectMenuInteraction
  ) => Promise<void>;
};
