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
exports.Masajista = void 0;
var seleccionFutbol_1 = require("./seleccionFutbol");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, apellido, pasaporte, fechaDeNacimiento, tipoMasajes) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaDeNacimiento) || this;
        _this.tipoMasajes = tipoMasajes;
        return _this;
    }
    Masajista.prototype.getInfo = function () {
        var info = "".concat(this.nombre, " ").concat(this.apellido, ", hace masajes ").concat(this.tipoMasajes.getTipoMasajes(), " ");
        console.log(info);
    };
    return Masajista;
}(seleccionFutbol_1.SeleccionDeFutbol));
exports.Masajista = Masajista;
