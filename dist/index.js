"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var search_1 = __importDefault(require("./handlers/search"));
app.get('/search', search_1.default);
app.listen(3000, function () {
    console.log("the server listening on port 3000");
});
