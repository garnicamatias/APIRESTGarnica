import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { env } from 'src/enviroment/enviroment';
import { Student } from '../../shared/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http : HttpClient
  ) {

   }


  getStudents () : Observable<Student[]>{
    return this.http.get<Student[]>(`${env.apiURL}/students`)
  }

  addStudent (newStudent : Student) {
  }

  editStudent (newStudent : Student){
    // let setPosition = (student : Student) => student.id == newStudent.id
    // let studentPosition = this.students.findIndex(setPosition)
    // this.students[studentPosition] = newStudent;
    // this.students$.next(this.students)
  }

  deleteStudent(studentId : number){
    // this.students = this.students.filter(e => 
    //   e.id !== studentId)
    // this.students$.next(this.students)
  }
}
