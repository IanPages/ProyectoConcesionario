import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';
import { SobreNosotrosComponentComponent } from './Components/sobre-nosotros-component/sobre-nosotros-component.component';
import { ContactoComponentComponent } from './Components/contacto-component/contacto-component.component';
import { ApiDatosService } from './Services/api-datos.service';
import { CochesComponentComponent } from './Components/coches-component/coches-component.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { CocheEspecificoComponentComponent } from './Components/coche-especifico-component/coche-especifico-component.component';

const appRoutes:Routes=[
  {path: '',component:HomeComponentComponent},
  {path: 'about',component:SobreNosotrosComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'coches',component:CochesComponentComponent},
  {path:'coche/:id',component:CocheEspecificoComponentComponent},
  {path:'login', component:LoginComponentComponent},
  {path: '**',component:ErrorComponentComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ErrorComponentComponent,
    SobreNosotrosComponentComponent,
    ContactoComponentComponent,
    CochesComponentComponent,
    LoginComponentComponent,
    CocheEspecificoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
