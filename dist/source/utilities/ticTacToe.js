"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runButton = exports.handleReset = void 0;
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
function ticTacToe() { }
exports.default = ticTacToe;
function handleReset(msgId) {
    Matches.delete(msgId);
}
exports.handleReset = handleReset;
function runButton(interaction) {
    return __awaiter(this, void 0, void 0, function* () {
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
        if (num >= 3 && num <= 5)
            row = 1;
        if (num > 5)
            row = 2;
        let components = interaction.message.components;
        const component = components[row].components[num - row * 3];
        component.data.disabled = true;
        component.data.label = Match.player;
        component.data.emoji = undefined;
        Match.cells[num] = Match.player;
        Match.player = Match.player == "X" ? "O" : "X";
        Match.result = `Player **${Match.player}** Turn`;
        for (const condition of conditions) {
            let a = Match.cells[condition[0]];
            let b = Match.cells[condition[1]];
            let c = Match.cells[condition[2]];
            if (a == "" || b == "" || c == "") {
                continue;
            }
            if (a == b && b == c) {
                Match.result = `Player ${a} Won 🎉`;
                components.forEach((row) => row.components.forEach((btn) => {
                    const bt = btn;
                    bt.data.disabled = true;
                }));
                const reset = components[2].components[3];
                reset.data.disabled = false;
                condition.forEach((num1) => {
                    let row1 = 0;
                    if (num1 >= 3 && num1 <= 5)
                        row1 = 1;
                    if (num1 > 5)
                        row1 = 2;
                    const component1 = components[row1].components[num1 - row1 * 3];
                    component1.data.style = 3;
                });
            }
            else if (!Match.cells.some((f) => f == "") &&
                !Match.result.endsWith("🎉")) {
                Match.result = `The match was equalized`;
            }
        }
        interaction.update({
            content: `${Match.result}`,
            components: components,
        });
    });
}
exports.runButton = runButton;
