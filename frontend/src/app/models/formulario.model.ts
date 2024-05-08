export class Formulario{

    constructor(nombre:string,correo_electronico:string,titulo:string,mensaje:string){
        this.nombre=nombre;
        this.correo_electronico=correo_electronico;
        this.titulo=titulo;
        this.mensaje=mensaje;
    }
    nombre:string;
    correo_electronico:string;
    titulo:string;
    mensaje:string;
}