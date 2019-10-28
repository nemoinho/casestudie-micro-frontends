import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
      if (!environment.production) {
        ['http://localhost:6502/main.js'].forEach(s => {
          const t = document.createElement('script');
          t.src = s;
          document.body.appendChild(t);
        });
      }
    })
  .catch(err => console.error(err));
