import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
