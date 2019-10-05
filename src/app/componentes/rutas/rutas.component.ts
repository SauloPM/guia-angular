import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html'
})
export class RutasComponent {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Fichero de rutas',
      enlace: 'fichero-rutas'
    },
    {
      texto: 'Módulo principal',
      enlace: 'modulo-principal'
    },
    {
      texto: 'Selector <b>&lt;router-outlet&gt;</b>',
      enlace: 'router-outlet'
    },
    {
      texto: 'Atributo <b>routerLink</b>',
      enlace: 'routerlink'
    },
    {
      texto: 'Atributo <b>routerLinkActive</b>',
      enlace: 'routerlinkactive'
    },
    {
      texto: 'Enviar parámetros dentro de la URL',
      enlace: 'enviar-parametros'
    },
    {
      texto: 'Recibir parámetros de la URL',
      enlace: 'recibir-parametros'
    },
    {
      texto: 'Rutas hijas',
      enlace: 'rutas-hijas'
    },
    {
      texto: 'Obtener parámetros del padre desde una ruta hija',
      enlace: 'obtener-parametros-padre'
    },
    {
      texto: 'Dividir el fichero de rutas en varios ficheros de rutas',
      enlace: 'dividir-fichero-rutas'
    },
    {
      texto: 'Manejo de rutas en Angular',
      enlace: 'manejo-rutas'
    }
  ]

  constructor() { }

}
