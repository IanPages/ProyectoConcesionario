import { Component } from '@angular/core';
import { ApiDatosService } from './Services/api-datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(private datosService:ApiDatosService,private router:Router){}

  isLoggedIn():boolean{
    return this.datosService.isLogged();
  }

  logout():void{
   this.datosService.logout();
   alert('La sesión ha sido cerrada.');
   this.router.navigate(['']);
  }
}
