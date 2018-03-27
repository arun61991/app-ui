import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApiComponent } from './admin-api.component';

export const ADMIN_API_ROUTES: Routes = [
  {path: '', component: AdminApiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_API_ROUTES)],
  exports: [RouterModule]
})
export class AdminApiRoutingModule {

}
