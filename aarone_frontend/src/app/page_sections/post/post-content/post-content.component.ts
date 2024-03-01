import { AfterViewInit, Component, Input } from '@angular/core';

declare  var jQuery:  any;
declare  var about_home:  any;

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements AfterViewInit {

  @Input() data: any;
  @Input() type: any;

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        about_home();
        }, 0);
      })(jQuery);
  }

}
