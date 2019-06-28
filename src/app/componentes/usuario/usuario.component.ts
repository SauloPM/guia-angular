import { Component      } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {

  constructor( private router: ActivatedRoute) {
    this.router.params.subscribe( parametrosURL => {
      console.log('Ruta padre');
      console.log(parametrosURL);
    });
  }

}