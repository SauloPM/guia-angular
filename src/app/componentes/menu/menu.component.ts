import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  abrirRutas: boolean = false;
  abrirDirectivas: boolean = false;

  ngOnInit() {

    $('.item a').click( ( event ) => {

      const id = '#' + event.target.id + ' .caret';

      if ( !$(id).hasClass('active') ) {
        $(id).addClass('active');
      } else {
        $(id).removeClass('active');
      }

    });

  }

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
