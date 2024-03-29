"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Gato = void 0;
var animal_1 = require("./animal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(patas, nombre) {
        var _this = _super.call(this, patas) || this;
        _this.nombre = nombre;
        return _this;
    }
    Gato.prototype.jugar = function (nombre) {
        console.log("".concat(nombre, ", veni miyimiyi"));
    };
    Gato.prototype.walk = function (patas) {
    };
    Gato.prototype.getNomber = function () {
        return this.nombre;
    };
    Gato.prototype.setNomber = function (nombre) {
        this.nombre = this.nombre;
    };
    Gato.prototype.comer = function () {
    };
    Gato.prototype.caminar = function (patas) {
    };
    return Gato;
}(animal_1.Animal));
exports.Gato = Gato;
