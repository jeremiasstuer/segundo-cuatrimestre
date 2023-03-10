
export class Juego{
    protected apuestaMinima:number
    protected cantidadJugadores:number;

    constructor(pApuestaMin:number, pCantidadJugadores:number){
        this.apuestaMinima = pApuestaMin
        this.cantidadJugadores = pCantidadJugadores
    }

    public setApuestaMin(pApuestaMin:number):void{
        this.apuestaMinima = pApuestaMin
    }
    public getApuestaMin() : number {
        return this.apuestaMinima
    }

    public setCantidadJUgadores(pCantidadJugadores:number):void{
        this.apuestaMinima = pCantidadJugadores
    }
    public getCantidadJUgadores() : number {
        return this.cantidadJugadores
    }

}