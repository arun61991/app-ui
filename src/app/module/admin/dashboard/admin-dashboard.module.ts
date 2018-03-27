import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDashboardRoutingModule } from './admin-dashboard.routing';


@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
    imports     : [
        AdminDashboardRoutingModule
    ]
})

export class AdminDashboardModule {

}
