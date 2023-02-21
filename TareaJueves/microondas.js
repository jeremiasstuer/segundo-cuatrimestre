var Microondas = /** @class */ (function () {
    function Microondas() {
        this.marca = "";
        this.precioBase = 40;
        this.color = "grey";
        this.consumoEnergetico = 110;
        this.peso = 20;
        this.bajoConsumo = false;
        this.altoConsumo = false;
        this.balance = 0;
        this.encendido = false;
        this.botonCalentar = false;
        this.tiempo = 0;
        this.tiempoTotal = this.tiempo * 1000;
    }
    Microondas.prototype.tipoConsumo = function () {
        if (this.consumoEnergetico <= 100) {
            return this.bajoConsumo = true;
        }
        else {
            return this.altoConsumo = true;
        }
    };
    Microondas.prototype.calcBalance = function () {
        return this.balance = this.precioBase / this.peso;
    };
    Microondas.prototype.calidadPro = function () {
        if (this.balance > 3) {
            console.log("Este producto es de alta gama");
        }
        else {
            console.log("Este producto no es de alta gama");
        }
    };
    Microondas.prototype.prenderApagar = function () {
        if (this.encendido = false) {
            this.encendido = true;
        }
        else {
            this.encendido = false;
        }
    };
    Microondas.prototype.tiempoCalentar = function () {
        if (this.botonCalentar == false) {
            this.botonCalentar = true;
            this.tiempo += 30;
        }
    };
    Microondas.prototype.cuantaAtras = function () {
        setTimeout(function hot() {
            console.log("ring ring");
        }, this.tiempoTotal);
    };
    return Microondas;
}());
var microondas = new Microondas();
console.log(microondas.calcBalance());
//console.log(microondas.balance)
console.log(microondas.tipoConsumo());
console.log(microondas.calidadPro());
