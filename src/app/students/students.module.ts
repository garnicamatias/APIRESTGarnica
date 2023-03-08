import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from './services/students.service';



@NgModule({
  declarations: [
    AddModalComponent,
    EditModalComponent,
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentsService]
})
export class StudentsModule { }
