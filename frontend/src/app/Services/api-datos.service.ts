import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formulario } from '../models/formulario.model';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiDatosService {

  constructor(private http:HttpClient) { }

  guardarFormularios(formulario:any){
    this.http.post('http://localhost:4000/formularios', formulario).subscribe(
      response => console.log("Se ha almacenado el formulario enviado." + response),
      error => console.log("Error" + error)
    );
  }

  cargarCoches():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:4000/coches').pipe(catchError(error=>{
      console.error('Error:',error);
      throw error;
    }));
  }

  cargarCoche(indice:number):Observable<any>{
    return this.http.get<any>('http://localhost:4000/coches/'+ indice).pipe(catchError(error=>{
    console.error("Error" , error);
    throw error;
    }));
  }

  borrarCoche(indice:number){
    this.http.delete('http://localhost:4000/coches/'+ indice).subscribe(
      response=> ("Se ha borrado el socio" + response),
      error => ("Error" + error)
    );
  }

  loginUser(email:string,password:string){
    return this.http.post<any>('http://localhost:4000/login', {email,password});
  }

  registerUser(email:string,password:string){
    return this.http.post<any>('http://localhost:4000/signup', {email,password});
  }

  isLogged(): boolean{
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
