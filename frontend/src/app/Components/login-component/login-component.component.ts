import { Component, OnInit } from '@angular/core';
import { ApiDatosService } from '../../Services/api-datos.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent implements OnInit {

  cuadroEmail:string="";
  cuadroPassword:string="";
  errorMessage:String="";

  constructor(private datosService:ApiDatosService,private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(){
    this.datosService.loginUser(this.cuadroEmail,this.cuadroPassword).subscribe(data =>{
      localStorage.setItem('token',data.token);
      localStorage.setItem('CorreoUser', this.cuadroEmail);
      console.log('Login Exitoso');
      this.router.navigate(['']);
    },
    error=>{
      if(error.status===401){
        this.errorMessage='Credenciales Incorrectas';
      }
      else{
        this.errorMessage='Error al iniciar sesión. Intentalo de nuevo.';
      }
      console.log('Error en el login:', error.message);
    });
  }
}
