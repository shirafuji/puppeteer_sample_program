"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = __importDefault(require("../engine/search"));
exports.default = (function (req, res) {
    console.log("GET Request: '/search', keywords:" + req.query.keywords.join(" "));
    search_1.default({
        keywords: req.query.keywords,
        callback: function (results, err) {
            if (err) {
                res.writeHead(err.code, { 'content-type': 'application/json' });
                res.end(JSON.stringify(err));
            }
            else {
                res.writeHead(200, { 'content-type': 'application/json' });
                res.end(JSON.stringify(results));
            }
        }
    });
});
