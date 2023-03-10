"use strict";
exports.__esModule = true;
var casino_1 = require("./casino");
var blackJack_1 = require("./blackJack");
var ruleta_1 = require("./ruleta");
var blackJack = new blackJack_1.Blackjack(10, 5);
var ruleta = new ruleta_1.Ruleta(20, 1);
var casino = new casino_1.Casino("elBarco", "la esquina", "mi barrio", blackJack, ruleta);
console.log(casino);
