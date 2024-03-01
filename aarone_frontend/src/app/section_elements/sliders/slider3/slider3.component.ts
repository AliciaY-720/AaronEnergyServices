import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_3:  any;

@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.css']
})
export class Slider3Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function () {
        load_rev_slider_3();
      }, 100);
    })(jQuery);
  }

}
