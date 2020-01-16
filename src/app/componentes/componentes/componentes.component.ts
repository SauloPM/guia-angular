import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html'
})
export class ComponentesComponent {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Introducción',
      enlace: 'introduccion'
    },
    {
      texto: 'Decorador',
      enlace: 'decorador'
    },
    {
      texto: 'Crear componente',
      enlace: 'crear-componente'
    },
    {
      texto: 'Eliminar componente',
      enlace: 'eliminar-componente'
    },
    {
      texto: 'Modificar componente',
      enlace: 'modificar-componente'
    },
    {
      texto: 'Renderizar componente',
      enlace: 'renderizar-componente'
    },
    {
      texto: 'Enviar información desde un componente padre a un componente hijo',
      enlace: 'comunicacion-padre-hijo'
    },
    {
      texto: 'Enviar información o disparar un evento desde un componente hijo a un componente padre',
      enlace: 'comunicacion-hijo-padre'
    },
    {
      texto: 'Enviar información o disparar evento entre componentes hermanos',
      enlace: 'comunicacion-hermanos'
    }
  ];

  constructor() { }

}
