
import { Juego } from "./juego";

export class Blackjack extends Juego{

    private cantidadCartas:number;
    public constructor(pApuestaMin:number,pCantidadJugadores){
        super(pApuestaMin, pCantidadJugadores);
        this.cantidadCartas = 20
    }
}