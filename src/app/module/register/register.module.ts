import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRegisterComponent } from './register.component';

import { RegisterRoutingModule } from './register.routing';

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
        AppRegisterComponent
    ],
    imports     : [
        RegisterRoutingModule    ]
})

export class RegisterModule
{

}
