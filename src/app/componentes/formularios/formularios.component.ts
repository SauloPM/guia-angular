import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html'
})
export class FormulariosComponent {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Introducción',
      enlace: 'introduccion'
    },
    {
      texto: 'Modificaciones en el fichero <i>app.module.ts</i>',
      enlace: 'modulo'
    },
    {
      texto: 'Fichero HTML del componente',
      enlace: 'fichero-html'
    },
    {
      texto: 'Fichero TS del componente',
      enlace: 'fichero-ts'
    },
    {
      texto: 'Estructura interna de un objeto de tipo <b>NgForm</b>',
      enlace: 'estructura-interna'
    },
    {
      texto: 'Código HTML de un formulario de Angular visto desde el inspector del navegador web',
      enlace: 'clases-angular'
    }
  ];

  // Entradas del formulario
  nombre  = '';
  asunto  = '';
  mensaje = '';

  constructor() { }

  enviarDatosFormulario( formulario: NgForm ) {
    console.log( formulario );
  }
}
