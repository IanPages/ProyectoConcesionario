import { Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche.model';
import { ApiDatosService } from '../../Services/api-datos.service';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-coche-especifico-component',
  templateUrl: './coche-especifico-component.component.html',
  styleUrl: './coche-especifico-component.component.css'
})
export class CocheEspecificoComponentComponent implements OnInit{

  coche:any;
  cocheId:number=0;
  cuadroModelo:string="";
  cuadroA_Salida:number=0;
  cuadroPrecio:number=0;
  cuadroPrecioAlquiler:number=0;
  cuadroTipo_Combustible:string="";
  cuadroKilometraje:number=0;
  cuadroImagen:string="";



  constructor(private datosService:ApiDatosService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.cocheId = this.route.snapshot.params['id'];
    this.datosService.cargarCoche(this.cocheId).subscribe((data:any)=>{
      this.coche=data;
      this.cuadroModelo=this.coche.modelo;
      this.cuadroA_Salida=this.coche.a_salida;
      this.cuadroPrecio=this.coche.precio;
      this.cuadroPrecioAlquiler=this.coche.precioalquiler;
      this.cuadroTipo_Combustible=this.coche.tipo_combustible;
      this.cuadroKilometraje=this.coche.kilometraje;
      this.cuadroImagen=this.coche.imagen;
    });
  }

}
