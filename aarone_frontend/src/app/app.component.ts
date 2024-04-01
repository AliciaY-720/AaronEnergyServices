import { Component, AfterViewInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var jQuery: any;
declare var initializeOnReady: any;
declare var initializeOnLoad: any;
declare var shortCodesOnReady: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'shapen';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Subscribe to router events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
        
        // Reinitialize things after navigation
        this.reinitializeThings();
      });
  }
  
  reinitializeThings() {
    (function ($) {
      setTimeout(function () {
        initializeOnLoad();
        initializeOnReady();
        shortCodesOnReady()
      }, 500);
    })(jQuery);
  }

}
