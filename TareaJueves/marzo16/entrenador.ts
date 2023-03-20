import { SeleccionDeFutbol } from "./seleccionFutbol";

export class Entrenador extends SeleccionDeFutbol{
    protected anosExperiencia:number

    public constructor(nombre:string,apellido:string,pasaporte:number,fechaDeNacimiento:number, anosExperiencia:number){
        super(nombre,apellido,pasaporte,fechaDeNacimiento)
        this.anosExperiencia=anosExperiencia
    }

    public getAnosExperiencia():number {
        return this.anosExperiencia
    }
    public setAnosExperiencia(anosExperiencia:number):void{
        this.anosExperiencia =  anosExperiencia
    }

    public getInfo(): void {
        let info= `${this.nombre} ${this.apellido}, tiene ${this.anosExperiencia} de experincia`
        console.log(info)
    }
}