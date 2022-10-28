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

export type Match = {
  player: string;
  X: string;
  O?: string | null;
  result: string;
  cells: string[];
};
