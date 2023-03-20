
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

    public setCantidadJugadores(pCantidadJugadores:number):void{
        this.apuestaMinima = pCantidadJugadores
    }
    public getCantidadJugadores() : number {
        return this.cantidadJugadores
    }

}