import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule, Http} from '@angular/http';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';

import { EventService } from '../../services/event.service';
import { CustomHttpService } from '../../services/CustomHttp.service';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports     : [
        HttpModule,
        AdminRoutingModule
    ],
    providers: [ EventService,
        CustomHttpService
        ],
})

export class AdminModule {

}
