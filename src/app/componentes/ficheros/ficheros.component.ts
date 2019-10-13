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
      texto: 'Directorio <i>dist</i>',
      enlace: 'dist'
    },
    {
      texto: 'Directorio <i>e2e</i>',
      enlace: 'e2e'
    },
    {
      texto: 'Directorio <i>node_modules</i>',
      enlace: 'node_modules'
    },
    {
      texto: 'Directorio <i>src</i>',
      enlace: 'src'
    },
    {
      texto: 'Ficheros <i>package.json</i> y <i>package.lock.json</li>',
      enlace: 'package'
    },
    {
      texto: 'Fichero <i>angular.json</i>',
      enlace: 'angular'
    },
    {
      texto: 'Fichero <i>tsconfig.json</i>',
      enlace: 'tsconfig'
    },
    {
      texto: 'Fichero <i>tslint.json</i>',
      enlace: 'tslint'
    },
    {
      texto: 'Fichero <i>.editorconfig</i>',
      enlace: 'editorconfig'
    },
    {
      texto: 'Fichero <i>.gitignore</i>',
      enlace: 'gitignore'
    },
    {
      texto: 'Fichero <i>README.md</i>',
      enlace: 'readme'
    }
  ]

  constructor() { }

}
