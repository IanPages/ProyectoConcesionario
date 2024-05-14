import { Component, OnInit } from '@angular/core';
import { ApiDatosService } from '../../Services/api-datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent implements OnInit{

  cuadroEmail:string="";
  cuadroPassword:string="";

  constructor(private datosService:ApiDatosService,private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(){
    this.datosService.registerUser(this.cuadroEmail,this.cuadroPassword).subscribe(data =>{
      console.log('Cuenta creada proceda a iniciar sesión');
      alert('La cuenta ha sido creada.')
      this.router.navigate(['/login']);
    },error=>{
      console.log('Error al crear la cuenta', error.message);
    });
  }

}
