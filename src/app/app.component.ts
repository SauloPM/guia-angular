import { Component, AfterViewInit } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  title = 'Guía de Angular';

  ngAfterViewInit() {
    $.getScript('../assets/js/functions.js');
  }
}
