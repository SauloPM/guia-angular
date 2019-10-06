import { Component, OnInit } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-despliegue',
  templateUrl: './despliegue.component.html',
  styles: []
})
export class DespliegueComponent implements OnInit {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Fichero environment.ts',
      enlace: 'fichero-environment'
    },
    {
      texto: 'Despliegue para preproducción',
      enlace: 'despliegue-preproduccion'
    },
    {
      texto: 'Despliegue para producción',
      enlace: 'despliegue-produccion'
    },
    {
      texto: 'Errores en despliegue de un servidor Apache',
      enlace: 'errores-apache'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
