import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/module/home/home.module#HomeModule'},
  {path: 'login', loadChildren: 'app/module/login/login.module#LoginModule'},
  {path: 'admin', loadChildren: 'app/module/admin/admin.module#AdminModule'}  
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
