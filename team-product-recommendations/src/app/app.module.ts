import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmptyComponent} from './components/empty.component';
import {createCustomElement} from '@angular/elements';
import {TwoProductWidgetComponent} from './components/two-product-widget.component';
import {MoreProductsWidgetComponent} from './components/more-products-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    TwoProductWidgetComponent,
    MoreProductsWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    AppComponent,
    TwoProductWidgetComponent,
    MoreProductsWidgetComponent,
  ]
})
export class AppModule implements DoBootstrap {
  constructor(
      private injector: Injector
  ) {}

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector});
    customElements.define('team-product-recommendations', appElement);

    const twoProductElement = createCustomElement(TwoProductWidgetComponent, { injector: this.injector});
    customElements.define('team-product-recommendations-2-products-widget', twoProductElement);

    const moreProductElement = createCustomElement(MoreProductsWidgetComponent, { injector: this.injector});
    customElements.define('team-product-recommendations-more-products-widget', moreProductElement);
  }
}
