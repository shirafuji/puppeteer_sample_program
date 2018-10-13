"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = __importDefault(require("../providers/puppeteer/search"));
exports.default = (function (r) {
    var search_words = r.keywords.join(' ');
    search_1.default(search_words, function (results, err) {
        if (err) {
            r.callback(null, err);
        }
        else {
            r.callback(results, null);
        }
    });
});
