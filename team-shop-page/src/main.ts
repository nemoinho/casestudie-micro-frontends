import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Hack the browser history, to be able to listen to route-changes all the time
(() => {
  const pushState = window.history.pushState;
  window.history.pushState = (state: any, title: string, url?: string) => {
    pushState.call(history, state, title, url);
    const push = new PopStateEvent('popstate', {state});
    window.dispatchEvent(push);
  };
  const replaceState = window.history.replaceState;
  window.history.replaceState = (state: any, title: string, url?: string) => {
    replaceState.call(history, state, title, url);
    const push = new PopStateEvent('popstate', {state});
    window.dispatchEvent(push);
  };
})();
