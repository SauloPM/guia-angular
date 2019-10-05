import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

// Interfaces
import { ItemIndice } from 'src/app/interfaces/item-indice';

// jQuery
declare var $: any;

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements AfterViewInit {

  @Input() items: ItemIndice[];

  constructor() { }

  ngAfterViewInit() {

    // Smooth scroll
    $('#indice .item').click( ( event: any ) => {
      
      // Almacenamos el destino
      const target = $(event.currentTarget).attr('data-target');

      // Nos desplazamos hasta la sección correspondiente
      $('html, body').animate({
        scrollTop: ( $('#' + target).offset().top - 50 )
      }, 500);
    });
  }
}
