import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmptyComponent} from './components/empty.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(
      private injector: Injector
  ) {}

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector});
    customElements.define('team-shopping-cart', appElement);
  }
}
