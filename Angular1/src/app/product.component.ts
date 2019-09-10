import { Component } from '@angular/core';
import { ProductList } from './productEx';
@Component({
    selector: 'product',
    template: `
    <h1>This is product component</h1>
    <ul >This is Mobile List
    <li 
    *ngFor ="let mobile of mobileVar">
    {{mobile}}
    </li>
    </ul>
    <ul>This is LAptop List
    <li *ngFor ="let laptop of mobileVar">
    {{laptop}}
    </li>
    </ul>
    `,
    styles: [``]

})

export class ProductClass {
    public isActive:boolean=true;
    public mobileVar: Array<string>;
    public laptopVar: Array<string>;

    constructor(private productPar: ProductList) {
        this.mobileVar = productPar.getMobileList();
        this.laptopVar = productPar.getLapTopList();

    };

   
}