import { Animal } from "./animal";
import { Mascotas } from "./interface";

export class Gato extends Animal implements Mascotas{
    private nombre:string;
    
    public constructor(patas:number,nombre:string){
        super(patas);
        this.nombre=nombre
    }
    
    public jugar(nombre:string){
        console.log(`${nombre}, veni miyimiyi`)
    }

    public walk(patas:number){

    }
    
    getNomber(): string {
        return this.nombre
    }
    setNomber(nombre:string): void {
        this.nombre=this.nombre
    }
    public comer(): void {
        
    }
    public caminar(patas: number): void {
        
    }
}