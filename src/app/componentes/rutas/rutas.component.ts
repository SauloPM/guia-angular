import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html'
})
export class RutasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Smooth scroll
    $('.indice a').click( ( event ) => {

      // Evitamos que cambie la URL
      event.preventDefault();

      // Almacenamos el destino
      const target = event.currentTarget.hash;

      // Nos desplazamos hasta la sección correspondiente
      $('html, body').animate({
        scrollTop: ( $(target).offset().top - 50 )
      }, 500);

    });

  }

}
