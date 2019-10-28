import {Component} from '@angular/core';

@Component({
    template: `
        <div style="border: 3px dashed blue; padding: 10px">
            <div style="display: flex; justify-content: center; max-width: 80em; margin: auto">
                <div style="margin: 20px 0;">
                    <h2>Product Details for X</h2>
                    <img src="http://localhost:6100/x.png">
                </div>
                <div style="padding: 80px 60px 0 30px">
                    <h3>Oft unterschätzt und sträflich vernachlässigt: Blindtexte!</h3>
                    <p>
                        Oft unterschätzt und sträflich vernachlässigt: Blindtexte! Es muss nicht immer Lorem Ipsum sein.
                        Warum nicht Goethe, Kafka oder ein Pangram? Hier eine Auswahl an Blindtexten und Editoren für
                        Blindtexte.
                    </p>
                    <team-shopping-cart-buy-button></team-shopping-cart-buy-button>
                </div>
                <team-product-recommendations-2-products-widget></team-product-recommendations-2-products-widget>
            </div>
            <team-product-recommendations-more-products-widget></team-product-recommendations-more-products-widget>
        </div>
    `
})
export class DetailComponent {}
