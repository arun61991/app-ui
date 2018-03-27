import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRfqComponent } from './admin-rfq.component';

export const ADMIN_RFQ_ROUTES: Routes = [
  {path: '', component: AdminRfqComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_RFQ_ROUTES)],
  exports: [RouterModule]
})
export class AdminRfqRoutingModule {

}
