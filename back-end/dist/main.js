"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookHttpController_1 = require("./api/BookHttpController");
const app = (0, express_1.default)();
app.use('/app/v1/books', BookHttpController_1.router);
app.listen(8081, () => console.log("Server has been started at 8081"));
