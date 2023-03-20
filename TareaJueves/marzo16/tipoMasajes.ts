export class TipoMasajes{
    protected tipoMasajes:string

    constructor(tipoMasajes:string){
        this.tipoMasajes=tipoMasajes
    }

    public getTipoMasajes():string{
        return this.tipoMasajes
    }
    public setTipoMasajes(tipoMasajes:string){
        this.tipoMasajes=tipoMasajes
    }
}