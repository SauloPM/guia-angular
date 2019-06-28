import { Component      } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-crear',
  template: `
    <p>
      Crear usuario
    </p>
  `
})
export class UsuarioCrearComponent {

  constructor( private router: ActivatedRoute) {
    this.router.parent.params.subscribe( parametrosURL => {
      console.log('Ruta hija');
      console.log(parametrosURL);
    });
  }

}
