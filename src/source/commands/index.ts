import { commands } from "../../index";

import type { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";

const commandsArray: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];

import games from "./games";

const COMMANDS = [games];

COMMANDS.forEach((cmd) => {
  commands.set(cmd.data.name, cmd);
  commandsArray.push(cmd.data.toJSON());
});

export default { commands, commandsArray };
