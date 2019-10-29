import { Component } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html'
})
export class LoginRegistroComponent {

  itemsIndice: ItemIndice[] = [
    {
      texto: 'Introducción',
      enlace: 'introduccion'
    },
    {
      texto: 'Servicio',
      enlace: 'servicio'
    },
    {
      texto: 'Componente del registro',
      enlace: 'componente-registro'
    },
    {
      texto: 'Componente del login',
      enlace: 'componente-login'
    },
    {
      texto: 'Logout',
      enlace: 'logout'
    },
    {
      texto: 'Guardián',
      enlace: 'guardian'
    }
  ];

  constructor() { }

}
