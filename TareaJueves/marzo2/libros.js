"use strict";
exports.__esModule = true;
exports.Libros = void 0;
var Libros = /** @class */ (function () {
    function Libros(autor, nombreLibro, editorial, tipo) {
        this.autor = autor;
        this.nombreLibro = nombreLibro;
        this.editorial = editorial;
        this.tipo = tipo;
    }
    Libros.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libros.prototype.getAutor = function () {
        return this.autor;
    };
    Libros.prototype.setNombreLibro = function (nombreLibro) {
        this.nombreLibro = nombreLibro;
    };
    Libros.prototype.getNombreLibro = function () {
        return this.nombreLibro;
    };
    Libros.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Libros.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libros.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Libros.prototype.getTipo = function () {
        return this.tipo;
    };
    return Libros;
}());
exports.Libros = Libros;
