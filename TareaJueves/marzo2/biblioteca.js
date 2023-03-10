"use strict";
exports.__esModule = true;
var libros_1 = require("./libros");
var Biblioteca = /** @class */ (function () {
    function Biblioteca(nombre, direccion, telefono, localidad, libros) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.localidad = localidad;
        this.libros = libros;
    }
    Biblioteca.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Biblioteca.prototype.getNombre = function () {
        return this.nombre;
    };
    Biblioteca.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Biblioteca.prototype.getdireccion = function () {
        return this.direccion;
    };
    Biblioteca.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Biblioteca.prototype.getTelefono = function () {
        return this.telefono;
    };
    Biblioteca.prototype.setLocalidad = function (localidad) {
        this.localidad = localidad;
    };
    Biblioteca.prototype.getLocalidad = function () {
        return this.localidad;
    };
    Biblioteca.prototype.setLibros = function (libros) {
        this.libros = libros;
    };
    Biblioteca.prototype.getLibros = function () {
        return this.libros;
    };
    Biblioteca.prototype.getInfoBiblioteca = function () {
        console.log("\n        Datos de la biblioteca\n        Nombre: ".concat(this.nombre, "\n        Direccion:").concat(this.direccion, "\n        Telefono:").concat(this.telefono, "\n        Localidad:").concat(this.localidad));
    };
    Biblioteca.prototype.buscadorLibros = function (nombre) {
        var search = libros.map(function (element) { return element; });
        search.forEach(function (element) {
            if (element.nombreLibro === nombre) {
                console.log(element);
            }
        });
    };
    return Biblioteca;
}());
var libros = [new libros_1.Libros("moni", "harri poter", "pluma", "aventura"),
    new libros_1.Libros("juana", "crepusculo", "10ojos", "romance"),
    new libros_1.Libros("marta", "francotirador", "ojitosAzuloes", "accion")
];
var biblioteca = new Biblioteca("biblioteca Rusa", "en la esquina", 222222, "mi barrio", libros);
biblioteca.getInfoBiblioteca();
biblioteca.buscadorLibros("crepuculo");
