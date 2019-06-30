import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent {

  // Descomenta el html, que lo comenté porque me daba error ese código cuando intentaba generar la versión de producción...
  // El mensaej de error era Property 'danger' does not exist on type 'Object'.

  alerta = 'alert-danger';
  // tslint:disable-next-line:ban-types
  propiedades: Object = {
    danger: true
  };

  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = false;

  constructor() { }

  ejecutar() {
    this.loading = true;

    setTimeout( () => {
      this.loading = false;
    }, 1000);
  }

}
