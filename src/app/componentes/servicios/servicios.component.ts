import { ServicioService } from './../../servicios/servicio.service';
import { Component, OnInit } from '@angular/core';

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
    }
  ];

  informacion: string;

  constructor( private servicio: ServicioService ) { }

  ngOnInit() {
    this.informacion = this.servicio.getSaludo();
  }

}
