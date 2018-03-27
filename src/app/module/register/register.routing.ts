import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRegisterComponent } from './register.component';

export const LOGIN_ROUTES: Routes = [
  {path: '', component: AppRegisterComponent, children: [
    { path: '', component: AppRegisterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(LOGIN_ROUTES)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
