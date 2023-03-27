import { Animal } from "./animal"

export class ListaDeAnimales{
    private animales:Animal[]

    public buscar(animal:Animal){

    }
    public agregarAnimal(animal:Animal):void{
        this.animales.push(animal)
    }
    public removerAnimal(animal:Animal){
      /*  const indiceanimal = this.animales.findIndex((e) => e === animal)
        this.animales.splice(indiceanimal,1)
        return this.animales*/
    }
}
