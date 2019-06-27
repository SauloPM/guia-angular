import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor: string;

  constructor( private elemento: ElementRef) {
    // tslint:disable-next-line:comment-format
    //elemento.nativeElement.style.backgroundColor = 'yellow';
  }

  // Lo de mousenetro es un alias que le puse yo
  @HostListener('mouseenter') mouseEntro() {

    this.resaltar( this.nuevoColor || 'yellow' );

    // this.elemento.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio() {

    this.resaltar( null );

    // this.elemento.nativeElement.style.backgroundColor = null;
  }

  private resaltar( color: string ) {
    this.elemento.nativeElement.style.backgroundColor = color;
  }

  // Otra forma de hacer lo mismo
  // private resaltar( color: string = 'yellow' ) {
  //   this.elemento.nativeElement.style.backgroundColor = color;
  // }

}
