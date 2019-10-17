import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html'
})
export class ServiciosComponent {

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
    },
    {
      texto: 'El servicio devuelve <b>undefined</b>',
      enlace: 'undefined'
    }
  ];

  constructor() { }

}
