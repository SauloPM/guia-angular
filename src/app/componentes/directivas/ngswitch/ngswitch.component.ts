import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html'
})
export class NgswitchComponent {

  // Atributos
  tipoAlerta: string = 'info';

  constructor() { }

  cambiarAlerta( tipo: string ) {
    switch ( tipo ) {
      case '1' : {
        this.tipoAlerta = 'info';
        break;
      }
      case '2' : {
        this.tipoAlerta = 'primary';
        break;
      }
      case '3' : {
        this.tipoAlerta = 'secondary';
        break;
      }
      case '4' : {
        this.tipoAlerta = 'success';
        break;
      }
      case '5' : {
        this.tipoAlerta = 'danger';
        break;
      }
      default : {
        this.tipoAlerta = 'warning';
        break;
      }
    }
  }

}
