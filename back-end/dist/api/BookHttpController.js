"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.delete('/:isbn', (req, res) => {
    res.send("<h1>Hello delete</h1>");
});
exports.router.patch('/:isbn', (req, res) => {
    res.send("<h1>Hello patch</h1>");
});
