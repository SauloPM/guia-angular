import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Introducción',
      enlace: 'introduccion'
    },
    {
      texto: 'Firebase',
      enlace: 'firebase'
    },
    {
      texto: 'Formulario',
      enlace: 'formulario'
    },
    {
      texto: 'CREATE',
      enlace: 'create'
    },
    {
      texto: 'UPDATE',
      enlace: 'update'
    },
    {
      texto: 'DELETE',
      enlace: 'delete'
    }
  ];

  constructor() { }

}
