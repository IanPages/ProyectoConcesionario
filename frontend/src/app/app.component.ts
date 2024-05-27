import { Component } from '@angular/core';
import { ApiDatosService } from './Services/api-datos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  expandido:boolean = false;
  constructor(private datosService:ApiDatosService,private router:Router){}
  Expandir(){
    if ( this.expandido == false)
    this.expandido = true;
    else
    this.expandido = false;
  }
  Cerrar(){
    this.expandido=false;
    const navElement = document.querySelector('nav');
  if (navElement) {
    navElement.classList.add('cerrar');
    setTimeout(() => {
      navElement.classList.remove('cerrar');
    }, 1000); 
  }
  }
  ClickLink(){
    this.expandido=false;
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
