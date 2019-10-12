import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-ficheros',
  templateUrl: './ficheros.component.html',
  styles: []
})
export class FicherosComponent {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Directorio <i>e2e</i>',
      enlace: 'e2e'
    },
    {
      texto: 'Directorio <i>node_modules</i>',
      enlace: 'node_modules'
    },
    {
      texto: 'Ficheros <i>package.json</i> y <i>package.lock.json</li>',
      enlace: 'package'
    }
  ]

  constructor() { }

}
