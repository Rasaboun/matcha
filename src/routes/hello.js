"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRouter = void 0;
var express_1 = require("express");
exports.helloRouter = (0, express_1.Router)();
exports.helloRouter.get('/', function (req, res) {
    res.send('Hello in hello routes !');
});
