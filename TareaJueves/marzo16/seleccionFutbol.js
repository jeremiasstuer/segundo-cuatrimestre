"use strict";
exports.__esModule = true;
exports.SeleccionDeFutbol = void 0;
var SeleccionDeFutbol = /** @class */ (function () {
    function SeleccionDeFutbol(nombre, apellido, pasaporte, fechaDeNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pasaporte = pasaporte;
        this.fechaDeNacimiento = fechaDeNacimiento;
    }
    SeleccionDeFutbol.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    SeleccionDeFutbol.prototype.getNomber = function () {
        return this.nombre;
    };
    SeleccionDeFutbol.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    SeleccionDeFutbol.prototype.getApellido = function () {
        return this.apellido;
    };
    SeleccionDeFutbol.prototype.setPasaporte = function (pasaporte) {
        this.pasaporte = pasaporte;
    };
    SeleccionDeFutbol.prototype.getPasaporte = function () {
        return this.pasaporte;
    };
    SeleccionDeFutbol.prototype.setFechaDeNacimiento = function (fechaDeNacimiento) {
        this.fechaDeNacimiento = fechaDeNacimiento;
    };
    SeleccionDeFutbol.prototype.getFechaDeNacimiento = function () {
        return this.fechaDeNacimiento;
    };
    SeleccionDeFutbol.prototype.getInfo = function () {
        var info = this.nombre + this.apellido;
        console.log(info);
    };
    return SeleccionDeFutbol;
}());
exports.SeleccionDeFutbol = SeleccionDeFutbol;
