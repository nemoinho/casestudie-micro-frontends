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
    }
  };

  ngOnInit(): void {
    this.load('team-product-details');
  }

  load(name: string) {
    const configItem = this.config[name];
    if (!configItem || configItem.loaded) {
      return;
    }

    // ugly hack to prevent angular-versions from overwriting each other…
    // @ts-ignore
    delete window.webpackJsonp;

    configItem.loaded = true;
    const content = document.getElementById('content');
    configItem.paths.forEach(path => {
      const script = document.createElement('script');
      script.src = configItem.url + '/' + path + '.js';
      script.onerror = (e) => console.error('Failed to load', e);
      document.body.appendChild(script);
    });
    const elem = document.createElement(name);
    content.appendChild(elem);
  }
}
