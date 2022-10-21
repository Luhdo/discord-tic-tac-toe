import { ButtonInteraction, InteractionType } from "discord.js";

import { client } from "../../index";
import commands from "../commands";
import components from "../components";
import { commandFileProps, componentFileProps } from "../utilities/types";

client.on("interactionCreate", async (i) => {
  if (i.type == InteractionType.ApplicationCommand) {
    const commandCheck = commands.commands.get(
      i.commandName
    ) as commandFileProps;

    if (!commandCheck) {
      return console.log(`Could not find slashCommand " '${i.commandName}'`);
    } else {
      await commandCheck.run(i);
    }
  } else if (i.type == InteractionType.MessageComponent) {
    const componentCheck = components.get(i.customId) as componentFileProps;

    if (!componentCheck) {
      return console.log(`Could not find messageComponent " '${i.customId}'`);
    } else {
      await componentCheck.run(i);
    }
  }
});
