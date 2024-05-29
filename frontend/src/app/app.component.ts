import { Component, OnInit } from '@angular/core';
import { ApiDatosService } from './Services/api-datos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'frontend';
  expandido:boolean = false;
  constructor(private datosService:ApiDatosService,private router:Router){}
  ngOnInit(): void {
    initFlowbite();
  }
 
 
  

  isLoggedIn():boolean{
    return this.datosService.isLogged();
  }

  logout():void{
   this.datosService.logout();
   this.alerta();
   this.router.navigate(['']);
  }
  alerta(){
    Swal.fire({
      title: 'Sesión cerrada',
      text: 'Se te redirigirá a la página principal',
      icon: 'warning',  // 'success', 'error', 'warning', 'info', 'question'
      confirmButtonText: 'Aceptar'
    });
  }
}
