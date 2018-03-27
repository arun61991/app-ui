import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppHomeComponent } from './home.component';

import { HomeRoutingModule } from './home.routing';


@NgModule({
    declarations: [
        AppHomeComponent
    ],
    imports     : [
        HomeRoutingModule    ]
})

export class HomeModule
{

}
