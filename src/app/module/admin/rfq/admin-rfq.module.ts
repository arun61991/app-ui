import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminRfqComponent } from './admin-rfq.component';
import { AdminRfqRoutingModule } from './admin-rfq.routing';

@NgModule({
    declarations: [
        AdminRfqComponent
    ],
    imports     : [
        AdminRfqRoutingModule
    ]
})

export class AdminRfqModule {

}
