import ora from "ora";

import { client } from "../../index";
import commands from "../commands";
import slash from "../utilities/slash";

import type { SlashCommandBuilder } from "discord.js";

type commandFileProps = { data: SlashCommandBuilder; run: () => void };

const Loader = ora("Starting Discord.js Client").start();

client.on("ready", () => {
  let commandsArray: commandFileProps[] = [];

  Loader.succeed(`${client.user?.tag} Started`);
});
