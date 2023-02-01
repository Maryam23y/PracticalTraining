import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURl = "http://localhost:8080/api/v1/students"
  constructor( private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURl}`);
  }

  createStudent(student:Student): Observable<object>{
    return this.httpClient.post(`${this.baseURl}`,student)
  }
  getStudentById(id:number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURl}/${id}`);
  }

  updateStudent(id:number, student:Student):Observable<object>{
    return this.httpClient.put(`${this.baseURl}/${id}`,student)
  }

  deleteStudent(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURl}/${id}`);
  }
}


