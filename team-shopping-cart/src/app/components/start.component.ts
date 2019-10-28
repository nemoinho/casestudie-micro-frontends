import {Component} from "@angular/core";

@Component({
    template: `
        <div style="border: 3px dashed red; padding: 10px; width: 80em; max-width: 100%; margin: auto">
            <h1>Here is the shopping cart</h1>
            <p>Your items in the cart</p>
            <div style="display: flex; justify-content: space-around">
                <div>
                    <h3>Product X</h3>
                    <img src="http://localhost:6100/x.png" style="max-height: 300px">
                </div>
                <div>
                    <h3>Product Y</h3>
                    <img src="http://localhost:6100/y.png" style="max-height: 300px">
                </div>
                <div>
                    <h3>Product Z</h3>
                    <img src="http://localhost:6100/z.png" style="max-height: 300px">
                </div>
            </div>
            <team-product-recommendations-more-products-widget></team-product-recommendations-more-products-widget>
        </div>
    `
})
export class StartComponent {}
