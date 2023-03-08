export class Libros{
    public autor:string;
    public nombreLibro:string;
    public editorial:string;
    public tipo:string;


    constructor(autor:string, nombreLibro:string,editorial:string, tipo:string){
        this.autor=autor;
        this.nombreLibro=nombreLibro;
        this.editorial=editorial;
        this.tipo=tipo
    }

    public setAutor(autor:string){
        this.autor=autor
    }

    public getAutor():string{
        return this.autor
    }

    public setNombreLibro(nombreLibro:string){
        this.nombreLibro=nombreLibro
    }

    public getNombreLibro():string{
        return this.nombreLibro
    }

    public setEditorial(editorial:string){
        this.editorial=editorial
    }

    public getEditorial():string{
        return this.editorial
    }

    public setTipo(tipo:string){
        this.tipo=tipo
    }
    public getTipo():string{
        return this.tipo
    }
}