var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(nombre, precioBase, color, consumoEnergetico, peso) {
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
    }
    Electrodomestico.prototype.consumoEner = function () {
        if (this.consumoEnergetico <= 100) {
            return this.tipoConsumo = true;
        }
        else {
            return this.tipoConsumo = false;
        }
    };
    Electrodomestico.prototype.calcBalance = function () {
        return this.balance = this.precioBase / this.peso;
    };
    Electrodomestico.prototype.calidadPro = function () {
        if (this.balance >= 3) {
            return console.log("Este producto es de alta gama");
        }
        else {
            return console.log("Este producto no es de alta gama");
        }
    };
    return Electrodomestico;
}());
var electrodomestico1 = new Electrodomestico("microondas", 200, "gris", 25, 10);
var electrodomestico2 = new Electrodomestico("helader", 2000, "negro", 200, 70);
console.log(electrodomestico1);
console.log(electrodomestico2);
console.log(electrodomestico1.calcBalance());
