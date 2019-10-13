import { Component } from '@angular/core';

// Interfaces
import { ItemMenu } from 'src/app/interfaces/item-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  tieneSubmenu: boolean = false;

  items: ItemMenu[] = [
    {
      texto: 'Inicio',
      enlace: 'inicio',
      icono: 'fa-home',
      tieneSubmenu: false
    },
    {
      texto: 'Ficheros y directorios',
      enlace: 'ficheros',
      icono: 'fa-folder',
      tieneSubmenu: false
    },
    {
      texto: 'TypeScript',
      enlace: 'typescript',
      icono: 'fa-gear',
      tieneSubmenu: false,
      itemsSubmenu: [
        'Propósito',
        'Configuración',
        'Variables',
        'Plantillas de literales <b>string</b>',
        'Funciones',
        'Desestructuración',
        'Promesas',
        'Interfaces'
      ]
    },
    {
      texto: 'Componentes',
      enlace: 'componentes',
      icono: 'fa-puzzle-piece',
      tieneSubmenu: false
    },
    {
      texto: 'Servicios',
      enlace: 'servicios',
      icono: 'fa-paper-plane',
      tieneSubmenu: false
    },
    {
      texto: 'Directivas',
      enlace: 'directivas',
      icono: 'fa-lightbulb-o',
      tieneSubmenu: false
    },
    {
      texto: 'Pipes',
      enlace: 'pipes',
      icono: 'fa-wrench',
      tieneSubmenu: false
    },
    {
      texto: 'Rutas',
      enlace: 'rutas',
      icono: 'fa-link',
      tieneSubmenu: false
    },
    {
      texto: 'Ciclos de vida',
      enlace: 'ciclos-de-vida',
      icono: 'fa-leaf',
      tieneSubmenu: false
    },
    {
      texto: 'Login y registro',
      enlace: 'auth',
      icono: 'fa-lock',
      tieneSubmenu: false
    },
    {
      texto: 'Despliegue',
      enlace: 'despliegue',
      icono: 'fa-star',
      tieneSubmenu: false
    },
    {
      texto: 'Depuración',
      enlace: 'depuracion',
      icono: 'fa-search',
      tieneSubmenu: false
    },
    {
      texto: 'Aplicaciones',
      enlace: 'aplicaciones',
      icono: 'fa-coffee',
      tieneSubmenu: true
    }
  ]

  constructor() { }
  
}
