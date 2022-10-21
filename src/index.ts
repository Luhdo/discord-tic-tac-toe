import { config as cg } from "dotenv";
cg();

import ora from "ora";
import { Client, Collection } from "discord.js";
import fs from "fs";

import config from "./config";

import type { GatewayIntentBits } from "discord.js";

const Loader = ora("Registering Intents").start();

let finalIntents: GatewayIntentBits[] = [];
if (!Array.isArray(config.bot.intents)) {
  Loader.warn(
    "Intents in config file must be in an array, default intents will be used"
  );
} else {
  finalIntents = config.bot.intents;
  Loader.succeed("Loaded intents successfully from the config file");
}

export const client = new Client({ intents: finalIntents });

client.on("interactionCreate", (i) => {});

export const commands = new Collection();

const events = fs
  .readdirSync("./src/source/events")
  .filter((file) => file.endsWith(".ts"));
events.forEach((event) => require(`./source/events/${event}`));

client.login(config.bot.token);
