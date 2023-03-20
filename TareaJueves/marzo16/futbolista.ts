import { SeleccionDeFutbol } from "./seleccionFutbol";

export class Futbolista extends SeleccionDeFutbol{
    protected numeroCamiseta:number

    public constructor(nombre:string,apellido:string,pasaporte:number,fechaDeNacimiento:number, numeroCamiseta:number){
        super(nombre,apellido,pasaporte,fechaDeNacimiento)
        this.numeroCamiseta=numeroCamiseta
    }

    public getNumeroCamiseta():number {
        return this.numeroCamiseta
    }
    public setNumeroCamiseta(numeroCamiseta:number):void{
        this.numeroCamiseta =  numeroCamiseta
    }

    public getInfo(): void {
        let info= `${this.nombre} ${this.apellido} lleva la camiseta Nº ${this.numeroCamiseta}`
        console.log(info)
    }
}