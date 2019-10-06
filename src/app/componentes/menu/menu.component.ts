import { Component } from '@angular/core';

// Interfaces
import { ItemMenu } from 'src/app/interfaces/item-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  submenu: boolean = false;

  items: ItemMenu[] = [
    {
      texto: 'Inicio',
      enlace: 'inicio',
      icono: 'fa-home',
      submenu: false
    },
    {
      texto: 'Ficheros',
      enlace: 'ficheros',
      icono: 'fa-folder',
      submenu: false
    },
    {
      texto: 'TypeScript',
      enlace: 'typescript',
      icono: 'fa-gear',
      submenu: false
    },
    {
      texto: 'Componentes',
      enlace: 'componentes',
      icono: 'fa-puzzle-piece',
      submenu: false
    },
    {
      texto: 'Servicios',
      enlace: 'servicios',
      icono: 'fa-paper-plane',
      submenu: false
    },
    {
      texto: 'Directivas',
      enlace: 'directivas',
      icono: 'fa-lightbulb-o',
      submenu: false
    },
    {
      texto: 'Pipes',
      enlace: 'pipes',
      icono: 'fa-wrench',
      submenu: false
    },
    {
      texto: 'Rutas',
      enlace: 'rutas',
      icono: 'fa-link',
      submenu: false
    },
    {
      texto: 'Ciclos de vida',
      enlace: 'ciclos-de-vida',
      icono: 'fa-leaf',
      submenu: false
    },
    {
      texto: 'Login y registro',
      enlace: 'auth',
      icono: 'fa-lock',
      submenu: false
    },
    {
      texto: 'Despliegue',
      enlace: 'despliegue',
      icono: 'fa-star',
      submenu: false
    },
    {
      texto: 'Depuración',
      enlace: 'depuracion',
      icono: 'fa-search',
      submenu: false
    },
    {
      texto: 'Aplicaciones',
      enlace: 'aplicaciones',
      icono: 'fa-coffee',
      submenu: true
    }
  ]

  constructor() { }
  
}
