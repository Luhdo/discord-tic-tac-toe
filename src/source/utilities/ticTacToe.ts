import { ButtonInteraction } from "discord.js";

const Matches = new Map();

let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function ticTacToe() {}

export async function runButton(interaction: ButtonInteraction) {
  if (!Matches.has(interaction.message.id))
    Matches.set(interaction.message.id, {
      player: "X",
      X: interaction.user.id,
      O: null,
      result: "Player X Turn",
      cells: ["", "", "", "", "", "", "", "", ""],
    });

  const Match = Matches.get(interaction.message.id);

  const num = parseInt(interaction.customId.split("-")[1]);
  let row = 0;
  if (num >= 3 && num <= 5) row = 1;
  if (num > 5) row = 2;

  let components = interaction.message.components;
  const component = components[row].components[num - row * 3] as any;

  component.data.disabled = true;
  component.data.label = Match.player;
  component.data.emoji = undefined;

  Match.cells[num] = Match.player;
  Match.player = Match.player == "X" ? "O" : "X";
  Match.result = `Player ${Match.player} Turn`;

  for (const condition of conditions) {
    let a = Match.cells[condition[0]];
    let b = Match.cells[condition[1]];
    let c = Match.cells[condition[2]];

    if (a == "" || b == "" || c == "") {
      continue;
    }

    if (a == b && b == c) {
      Match.result = `Player ${a} Won 🎉`;
      components.forEach((row) =>
        row.components.forEach((btn) => {
          const bt = btn as any;
          bt.data.disabled = true;
        })
      );
      const reset = components[2].components[3] as any;
      reset.data.disabled = false;
      condition.forEach((num1) => {
        let row1 = 0;
        if (num1 >= 3 && num1 <= 5) row1 = 1;
        if (num1 > 5) row1 = 2;
        const component1 = components[row1].components[num1 - row1 * 3] as any;
        component1.data.style = 3;
      });
    }
  }

  interaction.update({
    content: `${Match.result}`,
    components: components,
  });
}
