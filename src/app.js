"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("./item");
var elem = document.getElementById('output');
var aBook = new item_1.Item('初めてのTS', 20);
aBook.say(elem);
