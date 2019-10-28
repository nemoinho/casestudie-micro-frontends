import {Component} from '@angular/core';

@Component({
    template: `
        <div style="border: 3px dashed green; padding: 10px; text-align: center">
            <p>Product Y</p>
            <img style="max-height: 250px" src="http://localhost:6100/y.png">
            <team-shopping-cart-buy-button></team-shopping-cart-buy-button>
            <p>Product Z</p>
            <img style="max-height: 250px" src="http://localhost:6100/z.png">
            <team-shopping-cart-buy-button></team-shopping-cart-buy-button>
        </div>
    `
})
export class TwoProductWidgetComponent {}
