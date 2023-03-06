class Electrodomestico{
    public nombre:string;
    public precioBase: number;
    public color: string ;
    public consumoEnergetico: number ;
    public peso: number ;
    public tipoConsumo: boolean; 
    public balance:number ;

    constructor(nombre:string, precioBase:number, color: string ,consumoEnergetico: number ,peso: number){
        
        this.nombre= nombre;
        this.precioBase= precioBase;
        this.color= color;
        this.consumoEnergetico= consumoEnergetico;
        this.peso = peso;

    }

    public consumoEner():boolean{
        if(this.consumoEnergetico <=100){
            
            return this.tipoConsumo=true
        }else{
            return this.tipoConsumo=false

        }
    }

    public calcBalance():number{
        return this.balance= this.precioBase/this.peso
    }

    public calidadPro ():void{
        if(this.balance>=3){
           return console.log("Este producto es de alta gama")
        }else{
           return console.log("Este producto no es de alta gama")
        }
    }

    //getter lee una propiedad y setter establece la propiedad

    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }
    public getNombre():string{
        return this.nombre;
    }

    public setPrecioBase(precioBase:number):void{
        this.precioBase = precioBase;
    }
    public getPrecioBase():number{
        return this.precioBase;
    }

    public setColor(color:string):void{
        this.color = color;
    }
    public getColor():string{
        return this.color;
    }   
    
    public setConsumoEnergetico(consumoEnergetico:number):void{
        this.consumoEnergetico = consumoEnergetico;
    }
    public getConsumoEnergetico():number{
        return this.consumoEnergetico;
    }

    public setPeso(peso:number):void{
        this.peso = peso;
    }
    public getPeso():number{
        return this.peso;
    }
    
}

const electrodomestico1: Electrodomestico = new Electrodomestico("microondas",200,"gris", 25, 10);

const electrodomestico2: Electrodomestico = new Electrodomestico("helader",2000,"negro", 200, 70);

console.log(electrodomestico1)
console.log(electrodomestico2)

//console.log(electrodomestico1.calcBalance())