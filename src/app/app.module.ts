import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TeachersModule } from './teachers/teachers.module';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';
import { CoreModule } from './core/core.module';
import { SignupModule } from './signup/signup.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    LayoutModule,
    HomeModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
