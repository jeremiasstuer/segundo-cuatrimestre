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
exports.Futbolista = void 0;
var seleccionFutbol_1 = require("./seleccionFutbol");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, apellido, pasaporte, fechaDeNacimiento, numeroCamiseta) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaDeNacimiento) || this;
        _this.numeroCamiseta = numeroCamiseta;
        return _this;
    }
    Futbolista.prototype.getNumeroCamiseta = function () {
        return this.numeroCamiseta;
    };
    Futbolista.prototype.setNumeroCamiseta = function (numeroCamiseta) {
        this.numeroCamiseta = numeroCamiseta;
    };
    Futbolista.prototype.getInfo = function () {
        var info = "".concat(this.nombre, " ").concat(this.apellido, " lleva la camiseta N\u00BA ").concat(this.numeroCamiseta);
        console.log(info);
    };
    return Futbolista;
}(seleccionFutbol_1.SeleccionDeFutbol));
exports.Futbolista = Futbolista;
