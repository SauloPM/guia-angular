import { Component, OnInit } from '@angular/core';
import { ServicioService } from './../../servicios/servicio.service';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html'
})
export class ServiciosComponent implements OnInit {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Introducción',
      enlace: 'introduccion'
    },
    {
      texto: 'Crear servicio',
      enlace: 'crear-servicio'
    },
    {
      texto: 'Configurar servicio',
      enlace: 'configurar-servicio'
    },
    {
      texto: 'Consumir servicio',
      enlace: 'consumir-servicio'
    }
  ];

  constructor( private servicio: ServicioService ) { }

  respuestaServicio: any[];

  ngOnInit() {
    this.servicio.getSaludo().subscribe( ( data:any[] ) => {
      this.respuestaServicio = data;
      console.log(this.respuestaServicio)
    });
  }

}
