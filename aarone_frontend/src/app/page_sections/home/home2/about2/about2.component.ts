import { AfterViewInit, Component, Input } from '@angular/core';

declare  var jQuery:  any;
declare  var about_home:  any;

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.css']
})
export class About2Component implements AfterViewInit {

  @Input() data: any;
  
  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        about_home();
        }, 0);
      })(jQuery);
  }

}
