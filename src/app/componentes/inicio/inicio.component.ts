import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Propósito',
      enlace: 'proposito'
    },
    {
      texto: 'Introducción',
      enlace: 'introduccion'
    },
    {
      texto: 'jQuery',
      enlace: 'jquery'
    }
  ]

  constructor() { }

}
