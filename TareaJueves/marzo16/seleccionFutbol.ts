
export class SeleccionDeFutbol{
    protected nombre:string;
    protected apellido:string;
    protected pasaporte:number
    protected fechaDeNacimiento:number
     
    public constructor(nombre:string,apellido:string,pasaporte:number,fechaDeNacimiento:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pasaporte=pasaporte;
        this.fechaDeNacimiento=fechaDeNacimiento;
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre
    }
    public getNomber():string{
        return this.nombre
    }

    public setApellido(apellido:string):void{
        this.apellido=apellido
    }
    public getApellido():string{
        return this.apellido
    }

    public setPasaporte(pasaporte:number):void{
        this.pasaporte=pasaporte
    }
    public getPasaporte():number{
        return this.pasaporte
    }

    public setFechaDeNacimiento(fechaDeNacimiento:number):void{
        this.fechaDeNacimiento=fechaDeNacimiento
    }
    public getFechaDeNacimiento():number{
        return this.fechaDeNacimiento
    }

    public getInfo():void{
        let info =  this.nombre + this.apellido
        console.log(info)
    }
}