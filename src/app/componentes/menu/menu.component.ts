import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  abrirRutas: boolean = false;
  abrirDirectivas: boolean = false;

  constructor() { }

  abrirSubmenu( item: string ) {
    if ( item === 'rutas' ) {
      this.abrirRutas      = !this.abrirRutas;
      this.abrirDirectivas = false;
    } else if ( item === 'directivas' ) {
      this.abrirDirectivas = !this.abrirDirectivas;
      this.abrirRutas      = false;
    } else {
      this.abrirDirectivas = false;
      this.abrirRutas      = false;
    }
  }
}
