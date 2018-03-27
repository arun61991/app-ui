import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {path: '', component: AppHomeComponent, children: [
    // { path: '', component: AppHomeComponent},
    {path: '', loadChildren: 'app/module/product/product.module#ProductModule'},
    {path: 'product', loadChildren: 'app/module/product/product.module#ProductModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
