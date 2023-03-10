import { Libros } from "./libros";



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
        const search =libros.map(element => element)   
         search.forEach(element => {
            if(element.nombreLibro === nombre){
                console.log(element)
            }
         });
    }

}

const libros:Libros[]=[new Libros("moni","harri poter", "pluma","aventura"),
                       new Libros("juana","crepusculo","10ojos","romance"),
                       new Libros("marta","francotirador","ojitosAzuloes","accion")
                    ]



const biblioteca:Biblioteca = new Biblioteca("biblioteca Rusa","en la esquina",222222,"mi barrio",libros)


biblioteca.getInfoBiblioteca()


biblioteca.buscadorLibros("crepuculo")
















