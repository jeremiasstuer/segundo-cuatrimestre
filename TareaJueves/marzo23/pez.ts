import { Animal } from "./animal"
import { Mascotas } from "./interface"

export class Pez extends Animal implements Mascotas{
    private nombre:string

    public constructor(patas:number,nombre:string){
        super(patas)
        this.nombre=nombre
    }

    public comer(): void {
        
    }

    getNomber(): string {
        return this.nombre
    }
    setNomber(nombre: string): void {
        this.nombre=nombre
    }

    public jugar(nombre:string){}
    public caminar(patas: number): void {}
}