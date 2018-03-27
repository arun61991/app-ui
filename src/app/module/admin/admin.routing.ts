import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
  {path: '', component: AdminComponent,
    children: [
      { path: '', loadChildren: 'app/module/admin/dashboard/admin-dashboard.module#AdminDashboardModule'},
      { path: 'dashboard', loadChildren: 'app/module/admin/dashboard/admin-dashboard.module#AdminDashboardModule' },
      { path: 'rfq', loadChildren: 'app/module/admin/rfq/admin-rfq.module#AdminRfqModule' },
      { path: 'api', loadChildren: 'app/module/admin/api/admin-api.module#AdminApiModule' },
      { path: 'adminProduct', loadChildren: 'app/module/admin/product/admin-product.module#AdminProductModule' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
