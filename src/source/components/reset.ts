import type { ButtonInteraction } from "discord.js";

export const data = { name: "reset" };

export async function run(interaction: ButtonInteraction) {
  console.log("RESET");
}

export default { data, run };
