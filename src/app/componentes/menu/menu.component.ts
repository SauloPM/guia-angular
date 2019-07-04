import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  abrirDirectivas: boolean = false;

  constructor() { }

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

  abrirSubmenu( item: string ) {
    if ( item === 'directivas' ) {
      this.abrirDirectivas = !this.abrirDirectivas;
    } else {
      this.abrirDirectivas = false;
    }
  }
}
