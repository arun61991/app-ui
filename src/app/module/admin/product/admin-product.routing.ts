import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminProductComponent } from './admin-product.component';


export const SEARCH_ROUTES: Routes = [
  {path: '', component: AppAdminProductComponent, children: [
    { path: '', component: AppAdminProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(SEARCH_ROUTES)],
  exports: [RouterModule]
})
export class AdminProductRoutingModule {}
