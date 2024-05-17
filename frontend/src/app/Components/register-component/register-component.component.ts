import { Component, OnInit } from '@angular/core';
import { ApiDatosService } from '../../Services/api-datos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent implements OnInit{

  cuadroEmail:string="";
  cuadroPassword:string="";
  cuadroPasswordVerificacion:string="";

  constructor(private datosService:ApiDatosService,private router:Router){}

  ngOnInit(): void {

  }

  // onSubmit(){
  //   this.datosService.registerUser(this.cuadroEmail,this.cuadroPassword).subscribe(data =>{
  //     console.log('Cuenta creada proceda a iniciar sesión');
  //     alert('La cuenta ha sido creada.')
  //     this.router.navigate(['/login']);
  //   },error=>{
  //     console.log('Error al crear la cuenta', error.message);
  //   });
  // }

  alerta(){
    Swal.fire({
      title: '¡Register Hecho!',
      text: 'La cuenta ha sido creada',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  onSubmit() {
    if (this.cuadroPassword === this.cuadroPasswordVerificacion && this.cuadroPassword.length >= 6) {
      this.datosService.registerUser(this.cuadroEmail,this.cuadroPassword).subscribe(data =>{
        console.log('Cuenta creada proceda a iniciar sesión');
        this.alerta();
        this.router.navigate(['/login']);
      });
    } else {
      console.error('Las contraseñas no coinciden o no cumplen con los requisitos de longitud.');
    }
  }

}
