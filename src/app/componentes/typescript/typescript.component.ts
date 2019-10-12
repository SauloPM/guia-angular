import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html'
})
export class TypescriptComponent {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Propósito',
      enlace: 'proposito'
    },
    {
      texto: 'Configuración',
      enlace: 'configuracion'
    },
    {
      texto: 'Variables',
      enlace: 'variables'
    },
    {
      texto: 'Plantillas de literales <b>string</b>',
      enlace: 'interpolacion'
    },
    {
      texto: 'Funciones',
      enlace: 'funciones'
    },
    {
      texto: 'Desestructuración',
      enlace: 'desestructuracion'
    },
    {
      texto: 'Promesas',
      enlace: 'promesas'
    },
    {
      texto: 'Interfaces',
      enlace: 'interfaces'
    }
  ];

  constructor() { }

}
