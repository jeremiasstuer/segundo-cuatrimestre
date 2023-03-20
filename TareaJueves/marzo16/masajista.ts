import { SeleccionDeFutbol } from "./seleccionFutbol";
import { TipoMasajes } from "./tipoMasajes";

export class Masajista extends SeleccionDeFutbol{
    protected tipoMasajes:TipoMasajes;

    public constructor(nombre:string,apellido:string,pasaporte:number,fechaDeNacimiento:number,tipoMasajes:TipoMasajes){
        super(nombre,apellido,pasaporte,fechaDeNacimiento)
        this.tipoMasajes=tipoMasajes
    }

    public getInfo(): void {
        let info= `${this.nombre} ${this.apellido}, hace masajes ${this.tipoMasajes.getTipoMasajes()} `
        console.log(info)
    }
}