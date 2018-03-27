import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminApiComponent } from './admin-api.component';
import { AdminApiRoutingModule } from './admin-api.routing';

@NgModule({
    declarations: [
        AdminApiComponent
    ],
    imports     : [
        AdminApiRoutingModule
    ]
})

export class AdminApiModule {

}
