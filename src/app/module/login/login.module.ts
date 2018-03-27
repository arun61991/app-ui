import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppLoginComponent } from './login.component';

import { LoginRoutingModule } from './login.routing';

/*
const routes = [
    {
        path     : 'auth/login',
        component: FuseLoginComponent
    }
];
*/

@NgModule({
    declarations: [
        AppLoginComponent
    ],
    imports     : [
        LoginRoutingModule    ]
})

export class LoginModule
{

}
