export class Coche{

    constructor(modelo:string,a_salida:number,precio:number,tipo_combustible:string,kilometraje:number,imagen:string,marcaId:number,categoriaId:number){
        this.modelo=modelo;
        this.a_salida=a_salida;
        this.precio=precio;
        this.tipo_combustible=tipo_combustible;
        this.kilometraje=kilometraje;
        this.imagen=imagen;
        this.marcaId=marcaId;
        this.categoriaId=categoriaId;
    }
    modelo:string="";
    a_salida:number=0;
    precio:number=0;
    tipo_combustible:string="";
    kilometraje:number=0;
    imagen:string="";
    marcaId:number=0;
    categoriaId:number=0;
}