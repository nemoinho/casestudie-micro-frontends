import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  template: `
      <div style="border: 3px dashed blue; padding: 10px">
        <router-outlet></router-outlet>
      </div>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  constructor(
      private router: Router
  ) {}

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?

    // Standalone mode
    if (!environment.production) {
      this.router.navigate(['/team-product-details']);
    }
  }
}
