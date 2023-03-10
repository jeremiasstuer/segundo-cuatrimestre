"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pnombre, pdireccion, pLocalidad, pBlackJack, pRuleta) {
        this.nombre = pnombre;
        this.direccion = pdireccion;
        this.localidad = pLocalidad;
        this.blackJack = pBlackJack;
        this.ruleta = pRuleta;
    }
    Casino.prototype.setNombre = function (pnombre) {
        this.nombre = pnombre;
    };
    Casino.prototype.getNombre = function () {
        return this.nombre;
    };
    Casino.prototype.setDireccion = function (pdireccion) {
        this.direccion = pdireccion;
    };
    Casino.prototype.getDirecion = function () {
        return this.direccion;
    };
    Casino.prototype.setLocalidad = function (plocalidad) {
        this.localidad = plocalidad;
    };
    Casino.prototype.getLocalidad = function () {
        return this.localidad;
    };
    return Casino;
}());
exports.Casino = Casino;
