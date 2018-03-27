import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './login.component';

export const LOGIN_ROUTES: Routes = [
  {path: '', component: AppLoginComponent, children: [
    { path: '', component: AppLoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(LOGIN_ROUTES)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
