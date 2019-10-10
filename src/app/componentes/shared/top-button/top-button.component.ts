import { Component, AfterViewInit } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    showTopButton();

    $(document).scroll(() => {
        showTopButton();
    });

    // Top button revealing
    function showTopButton() {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        $('.top-button').css('opacity', '1');
      } else {
        $('.top-button').css('opacity', '0');
      }
    }

    // Top button click event
    $('.top-button').click(() => {
      $('html, body').stop().animate({
        scrollTop: 0
      }, 500);
    });
  }

}
