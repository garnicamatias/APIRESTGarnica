import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TeachersService } from 'src/app/teachers/services/teachers.service';


const routes : Routes = [
  {path:'', component: MainLayoutComponent,
  children: [
    {path: 'students', loadChildren: () => import('../students/students.module').then(m => m.StudentsModule)},
    {path: 'teachers', loadChildren: () => import('../teachers/teachers.module').then(m => m.TeachersModule)},
  ]
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
