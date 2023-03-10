"use strict";
exports.__esModule = true;
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(pApuestaMin, pCantidadJugadores) {
        this.apuestaMinima = pApuestaMin;
        this.cantidadJugadores = pCantidadJugadores;
    }
    Juego.prototype.setApuestaMin = function (pApuestaMin) {
        this.apuestaMinima = pApuestaMin;
    };
    Juego.prototype.getApuestaMin = function () {
        return this.apuestaMinima;
    };
    Juego.prototype.setCantidadJUgadores = function (pCantidadJugadores) {
        this.apuestaMinima = pCantidadJugadores;
    };
    Juego.prototype.getCantidadJUgadores = function () {
        return this.cantidadJugadores;
    };
    return Juego;
}());
exports.Juego = Juego;
