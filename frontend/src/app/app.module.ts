import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';

const appRoutes:Routes=[
  {path: '',component:HomeComponentComponent},
  {path: '**',component:ErrorComponentComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
