import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppProductComponent } from './product.component';

import { ProductRoutingModule } from './product.routing';


@NgModule({
    declarations: [
        AppProductComponent
    ],
    imports     : [
        ProductRoutingModule,
        CommonModule
    ]
})

export class  ProductModule
{

}
