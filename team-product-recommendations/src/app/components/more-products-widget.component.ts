import {Component} from '@angular/core';

@Component({
    template: `
        <div style="border: 3px dashed green; padding: 10px; display: flex; justify-content: space-around; text-align: center; margin: auto; max-width: 80em">
            <div>
                <p style="margin: 0">Product A</p>
                <img style="max-height: 220px" src="http://localhost:6100/a.jpg">
            </div>
            <div>
                <p style="margin: 0">Product B</p>
                <img style="max-height: 220px" src="http://localhost:6100/b.jpg">
            </div>
            <div>
                <p style="margin: 0">Product C</p>
                <img style="max-height: 220px" src="http://localhost:6100/c.jpg">
            </div>
        </div>
    `
})
export class MoreProductsWidgetComponent {}
