"use strict";
exports.__esModule = true;
exports.ListaDeAnimales = void 0;
var ListaDeAnimales = /** @class */ (function () {
    function ListaDeAnimales() {
    }
    ListaDeAnimales.prototype.buscar = function (animal) {
    };
    ListaDeAnimales.prototype.agregarAnimal = function (animal) {
        this.animales.push(animal);
    };
    ListaDeAnimales.prototype.removerAnimal = function (animal) {
        /*  const indiceanimal = this.animales.findIndex((e) => e === animal)
          this.animales.splice(indiceanimal,1)
          return this.animales*/
    };
    return ListaDeAnimales;
}());
exports.ListaDeAnimales = ListaDeAnimales;
