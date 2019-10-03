import { Component, OnInit } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styles: []
})
export class ComponentesComponent implements OnInit {

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
