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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ora_1 = __importDefault(require("ora"));
const index_1 = require("../../index");
const commands_1 = __importDefault(require("../commands"));
const slash_1 = __importDefault(require("../utilities/slash"));
const Loader = (0, ora_1.default)("Starting Discord.js Client").start();
index_1.client.on("ready", () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    Loader.succeed(`${(_a = index_1.client.user) === null || _a === void 0 ? void 0 : _a.tag} Started`);
    yield (0, slash_1.default)((_b = index_1.client.user) === null || _b === void 0 ? void 0 : _b.id, commands_1.default.commandsArray);
}));
