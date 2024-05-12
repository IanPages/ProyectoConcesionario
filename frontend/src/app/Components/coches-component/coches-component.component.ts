import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coche } from '../../models/coche.model';
import { ActivatedRoute,Route,Router } from '@angular/router';

import { ApiDatosService } from '../../Services/api-datos.service';


@Component({
  selector: 'app-coches-component',
  templateUrl: './coches-component.component.html',
  styleUrl: './coches-component.component.css'
})
export class CochesComponentComponent implements OnInit{
  data:any[]=[];

  constructor(private datosService:ApiDatosService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.llamarCoches();
  }
  llamarCoches(){
    this.datosService.cargarCoches().subscribe(data => {
      this.data=data;
    });
  }


}
