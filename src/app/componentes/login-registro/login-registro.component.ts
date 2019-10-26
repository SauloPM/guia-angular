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
      texto: 'Puesta en marcha',
      enlace: 'puesta-en-marcha'
    },
    {
      texto: 'Registro',
      enlace: 'registro'
    },
    {
      texto: 'Login',
      enlace: 'login'
    },
    {
      texto: 'Logout',
      enlace: 'logout'
    },
    {
      texto: 'Recordar usuario',
      enlace: 'recordar-usuario'
    }
  ];

  constructor() { }

}
