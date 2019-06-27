import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent {

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
