import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: []
})
export class NgStyleComponent {

  tamano1 = 20;
  tamano2 = '10px';

  constructor() { }

  reducirFuente() {
    if (this.tamano1 > 0) {
      this.tamano1 = this.tamano1 - 1;
    }
  }

}
