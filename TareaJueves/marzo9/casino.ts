import { Blackjack } from "./blackJack";
import { Juego } from "./juego";
import { Ruleta } from "./ruleta";

export class Casino{
   private nombre:string;
   private direccion:string;
   private localidad:string; 
   private blackJack:Blackjack;
   private ruleta:Ruleta;

    constructor(pnombre:string, pdireccion:string, pLocalidad:string, pBlackJack:Blackjack, pRuleta:Ruleta){

        this.nombre = pnombre
        this.direccion = pdireccion
        this.localidad = pLocalidad
        this.blackJack=pBlackJack;
        this.ruleta=pRuleta
    }


    public setNombre(pnombre:string):void{
        this.nombre = pnombre
    }
    public getNombre() : string {
        return this.nombre
    }
    public setDireccion(pdireccion:string):void{
        this.direccion = pdireccion
    }
    public getDirecion() : string {
        return this.direccion
    }
    public setLocalidad(plocalidad:string):void{
        this.localidad = plocalidad
    }
    public getLocalidad() : string {
        return this.localidad
    }
    
}