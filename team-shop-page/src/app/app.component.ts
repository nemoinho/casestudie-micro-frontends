import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Demo-Shop</h1>
      <div style="display: flex; max-width: 100em; margin: auto; justify-content: center">
        <ul style="min-width: 150px">
          <li><a routerLink="">Start</a></li>
          <li><a routerLink="/team-product-details">Show product</a></li>
          <li><a routerLink="/team-shopping-cart">Show cart</a></li>
        </ul>
        <div id="content"></div>
      </div>
  `
})
export class AppComponent implements OnInit {
  private config = {
    'team-product-details': {
      url: 'http://localhost:6501/main.js',
      loaded: false
    },
    'team-product-recommendations': {
      url: 'http://localhost:6502/main.js',
      loaded: false
    },
    'team-shopping-cart': {
      url: 'http://localhost:6503/main.js',
      loaded: false
    }
  };

  private queue = [];

  ngOnInit(): void {
    this.queue.push('team-product-details');
    this.queue.push('team-product-recommendations');
    this.queue.push('team-shopping-cart');
    setTimeout(() => this.load(), 10);
  }

  load() {
    const content = document.getElementById('content');
    this.queue.forEach(name => {
      const configItem = this.config[name];
      if (!configItem) {
        return;
      }
      configItem.loaded = true;
      const script = document.createElement('script');
      script.src = configItem.url;
      script.onerror = (e) => console.error('Failed to load', e);
      content.appendChild(script);
      const elem = document.createElement(name);
      content.appendChild(elem);
    });
  }
}
