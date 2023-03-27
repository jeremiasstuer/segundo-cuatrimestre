"use strict";
exports.__esModule = true;
var ara_a_1 = require("./ara\u00F1a");
var gato_1 = require("./gato");
var listaDeAnimales_1 = require("./listaDeAnimales");
var pez_1 = require("./pez");
var miGato = new gato_1.Gato(4, "mishi");
var miPez = new pez_1.Pez(0, "nemo");
var miAraña = new ara_a_1.Araña(8);
var miLista = new listaDeAnimales_1.ListaDeAnimales();
console.log(miGato);
miGato.jugar("mishi");
//miLista.agregarAnimal(miGato)
//console.log(miLista)
