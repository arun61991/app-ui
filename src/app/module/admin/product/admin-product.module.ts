import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppAdminProductComponent } from './admin-product.component';
import { AdminProductRoutingModule } from './admin-product.routing';


@NgModule({
    declarations: [
        AppAdminProductComponent
    ],
    imports     : [
        AdminProductRoutingModule,
        CommonModule
    ]
})

export class  AdminProductModule
{

}
