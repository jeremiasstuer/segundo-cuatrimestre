import { Libros } from "./libros";
import { SecAccion } from "./secAccion";


class Biblioteca{
    private nombre:string;
    private direccion:string;
    private telefono:number;
    private localidad:string;

    private libros:Libros[];

    public constructor(nombre:string, direccion:string, telefono:number, localidad:string,libros:Libros[]){
        this.nombre = nombre;
        this.direccion=direccion;
        this.telefono=telefono;
        this.localidad=localidad;
        this.libros=libros
    }

    public setNombre(nombre:string){
        this.nombre=nombre
    }
    public getNombre():string{
        return this.nombre
    }


    public setDireccion(direccion:string){
        this.direccion=direccion
    }
    public getdireccion():string{
        return this.direccion
    }


    public setTelefono(telefono:number){
        this.telefono=telefono
    }
    public getTelefono():number{
        return this.telefono
    }

    public setLocalidad(localidad:string){
        this.localidad=localidad;
    }
    public getLocalidad():string{
        return this.localidad
    }

    public setLibros(libros:Libros[]){
        this.libros=libros;
    }
    public getLibros():Libros[]{
        return this.libros
    }


    public getInfoBiblioteca():void{
        console.log(`
        Datos de la biblioteca
        Nombre: ${this.nombre}
        Direccion:${this.direccion}
        Telefono:${this.telefono}
        Localidad:${this.localidad}`)
    }

    public buscadorLibros(nombre:string):void{
        const buscaLibros =libros.find(element => element.nombreLibro === nombre)
        console.log(buscaLibros?.nombreLibro)
    }

}

const libros:Libros[]=[new Libros("moni","harri poter", "pluma","aventura"),
                       new Libros("juana","crepusculo","10ojos","romance"),
                       new Libros("marta","francotirador","ojitosAzuloes","accion")
                    ]



const biblioteca:Biblioteca = new Biblioteca("biblioteca Rusa","en la esquina",222222,"mi barrio",libros)


biblioteca.getInfoBiblioteca()

//console.log(biblioteca.getLibros())

biblioteca.buscadorLibros("crepusculo")



















/*
public setSecAccion(secAccion:SecAccion){
    this.secAccion=secAccion;
}
public getSecAccion():SecAccion{
    return this.secAccion
}

public setSecAventura(secAventura:SecAventura){
    this.secAventura=secAventura;
}
public getSecAventura():SecAventura{
    return this.secAventura
}

public setSecRomance(secRomance:SecRomance){
    this.secRomance=secRomance;
}
public getSecRomance():SecRomance{
    return this.secRomance
}
*/