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
exports.Entrenador = void 0;
var seleccionFutbol_1 = require("./seleccionFutbol");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, pasaporte, fechaDeNacimiento, anosExperiencia) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaDeNacimiento) || this;
        _this.anosExperiencia = anosExperiencia;
        return _this;
    }
    Entrenador.prototype.getAnosExperiencia = function () {
        return this.anosExperiencia;
    };
    Entrenador.prototype.setAnosExperiencia = function (anosExperiencia) {
        this.anosExperiencia = anosExperiencia;
    };
    Entrenador.prototype.getInfo = function () {
        var info = "".concat(this.nombre, " ").concat(this.apellido, ", tiene ").concat(this.anosExperiencia, " de experincia");
        console.log(info);
    };
    return Entrenador;
}(seleccionFutbol_1.SeleccionDeFutbol));
exports.Entrenador = Entrenador;
