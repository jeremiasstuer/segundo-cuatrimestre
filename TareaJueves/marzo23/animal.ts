
export abstract class Animal{
    public patas:number

    public constructor(patas:number){
        this.patas=patas
    };

    public getPatas():number{
        return this.patas
    };
    public setPatas(patas:number):void{
        this.patas=patas
    }

    public abstract comer():void;
    public abstract caminar(patas:number):void;
}