"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hello_js_1 = require("./routes/hello.js");
var app = (0, express_1.default)();
var port = 3000;
var caca = 0;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use("/hello", hello_js_1.helloRouter);
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
