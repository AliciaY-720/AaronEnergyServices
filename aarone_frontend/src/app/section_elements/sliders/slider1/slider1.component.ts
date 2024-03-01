import { AfterViewInit, Component } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_1:  any;

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			load_rev_slider_1();
		  }, 100);
	  })(jQuery);
  }
}
