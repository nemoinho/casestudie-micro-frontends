import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmptyComponent} from './components/empty.component';
import {createCustomElement} from '@angular/elements';
import {StartComponent} from './components/start.component';
import {BuyButtonComponent} from './components/buy-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    StartComponent,
    BuyButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
      AppComponent,
      BuyButtonComponent,
  ]
})
export class AppModule implements DoBootstrap {
  constructor(
      private injector: Injector
  ) {}

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector});
    customElements.define('team-shopping-cart', appElement);
    const buyButtonElement = createCustomElement(BuyButtonComponent, { injector: this.injector});
    customElements.define('team-shopping-cart-buy-button', buyButtonElement);
  }
}
