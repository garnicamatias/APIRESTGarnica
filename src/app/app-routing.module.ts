import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/components/home-layout/home-layout.component';
import { MainLayoutComponent } from './main/components/main-layout/main-layout.component';
import { StudentsTableComponent } from './students/components/students-table/students-table.component';
import { TeachersListComponent } from './teachers/components/teachers-list/teachers-list.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes : Routes = [

  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeLayoutComponent},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},

  {path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  {path:'main', component: MainLayoutComponent,
  children: [
    {path:'students', component: StudentsTableComponent},
    {path:'teachers', component: TeachersListComponent}
  ]
},
{path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
