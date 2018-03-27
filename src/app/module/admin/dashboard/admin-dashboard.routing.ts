import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';

export const ADMIN_DASHBOARD_ROUTES: Routes = [
  {path: '', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_DASHBOARD_ROUTES)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}