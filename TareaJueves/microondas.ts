class Microondas{
 
    public marca:string = "";
    public precioBase:number = 40
    public color:string = "grey"
    public consumoEnergetico:number = 110
    public peso:number = 20
    public bajoConsumo:boolean=false
    public altoConsumo:boolean=false
    public balance:number = 0

    public encendido: boolean = false;
    public botonCalentar:boolean = false;
    public tiempo:number = 0;
    public tiempoTotal:number = this.tiempo *1000
    

    public tipoConsumo():boolean{
        if(this.consumoEnergetico <= 100){
            
            return this.bajoConsumo=true
        }else{
            return this.altoConsumo=true

        }
    }

    public calcBalance():number{
        return this.balance= this.precioBase/this.peso
    }

    public calidadPro ():void{
        if(this.balance>3){
            console.log("Este producto es de alta gama")
        }else{
            console.log("Este producto no es de alta gama")
        }
    }

    public prenderApagar():void{

        if(this.encendido = false){
            this.encendido = true;
        }else{
            this.encendido=false;
        }
    }

    public tiempoCalentar():void{
        if(this.botonCalentar ==false){
            this.botonCalentar = true
            this.tiempo +=30;
        }
    }

    public cuantaAtras ():void{

        setTimeout(function hot() {
            console.log("ring ring")
        },this.tiempoTotal)

    }
}

const microondas = new Microondas()

console.log(microondas.calcBalance())
//console.log(microondas.balance)
console.log(microondas.tipoConsumo())
console.log(microondas.calidadPro())
