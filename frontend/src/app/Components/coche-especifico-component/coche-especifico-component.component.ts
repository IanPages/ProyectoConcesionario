import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { Coche } from '../../models/coche.model';
import { ApiDatosService } from '../../Services/api-datos.service';
import {ActivatedRoute, Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';


@Component({
  selector: 'app-coche-especifico-component',
  templateUrl: './coche-especifico-component.component.html',
  styleUrl: './coche-especifico-component.component.css'
})
export class CocheEspecificoComponentComponent implements OnInit{

  public payPalConfig?: IPayPalConfig;
  public payPalConfigAlquiler?: IPayPalConfig;


  coche:any;
  cocheId:number=0;
  cuadroModelo:string="";
  cuadroA_Salida:number=0;
  cuadroPrecio:number=0;
  cuadroPrecioAlquiler:number=0;
  cuadroTipo_Combustible:string="";
  cuadroKilometraje:number=0;
  cuadroImagen:string="";

  urlImg:string="http://localhost:4000/imagenes/";
  showSuccess: boolean | undefined;

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
    this.paypalconfigPago();
    //this.paypalconfigAlquiler();

  }

  isLoggedIn():boolean{
    return this.datosService.isLogged();
  }

  
  paypalconfigPago():void{
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'Ac1qKyx4gPVwlK9Ofxupgf2x0-kjfddrjuqDZq5FPAOHMT7R2H5s9qtaPrr6uJRmyFV3389NDxhaxbDT',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: `${this.cuadroPrecio}`,
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: `${this.cuadroPrecio}`
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: `${this.cuadroPrecio}`,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
        this.datosService.borrarCoche(this.cocheId);
        this.router.navigate(['/successfulpayment']);
        
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  /*No deja tener mas de uno
  paypalconfigAlquiler():void{
    this.payPalConfigAlquiler = {
      currency: 'EUR',
      clientId: 'Ac1qKyx4gPVwlK9Ofxupgf2x0-kjfddrjuqDZq5FPAOHMT7R2H5s9qtaPrr6uJRmyFV3389NDxhaxbDT',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: `${this.cuadroPrecioAlquiler}`,
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: `${this.cuadroPrecioAlquiler}`
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: `${this.cuadroPrecioAlquiler}`,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };*/
  }

