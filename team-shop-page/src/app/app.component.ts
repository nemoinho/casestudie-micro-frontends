import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Demo-Shop</h1>
      <div id="content"></div>
  `
})
export class AppComponent implements OnInit {
  private config = {
    'team-product-details': {
      url: 'http://localhost:6501',
      paths: ['runtime-es2015', 'main-es2015'],
      loaded: false
    },
    'team-product-recommendations': {
      url: 'http://localhost:6502',
      paths: ['runtime-es2015', 'main-es2015'],
      loaded: false
    },
    'team-shopping-cart': {
      url: 'http://localhost:6503',
      paths: ['runtime-es2015', 'main-es2015'],
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
    if (this.queue.length === 0) {
      return;
    }
    const name = this.queue.shift();
    const configItem = this.config[name];
    if (!configItem) {
      this.load();
      return;
    }

    // ugly hack to prevent angular-versions from overwriting each other…
    // @ts-ignore
    delete window.webpackJsonp;

    configItem.loaded = true;
    const content = document.getElementById('content');
    Promise.all(configItem.paths.map(path => new Promise(resolve => {
      const script = document.createElement('script');
      script.src = configItem.url + '/' + path + '.js';
      script.onerror = (e) => console.error('Failed to load', e);
      script.onload = () => resolve();
      document.body.appendChild(script);
    }))).then(() => setTimeout(() => this.load(), 0));
    const elem = document.createElement(name);
    content.appendChild(elem);
  }
}
