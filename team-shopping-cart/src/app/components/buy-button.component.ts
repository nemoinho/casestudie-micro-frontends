import {Component} from '@angular/core';

@Component({
    template: `
        <div style="border: 3px dashed red; padding: 8px">
            <button routerLink="/team-shopping-cart">Kaufen</button>
        </div>
    `
})
export class BuyButtonComponent {}
