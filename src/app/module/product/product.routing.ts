import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductComponent } from './product.component';


export const SEARCH_ROUTES: Routes = [
  {path: '', component: AppProductComponent, children: [
    { path: '', component: AppProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(SEARCH_ROUTES)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
