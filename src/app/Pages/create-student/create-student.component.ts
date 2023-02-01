import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit{

  constructor(private studentServices:StudentService, private router: Router){}

  ngOnInit(): void {
    
  }
  student: Student = new Student();



  saveStudent(){
    this.studentServices.createStudent(this.student).subscribe(data =>{
      console.log(data)
      this.goToStudentList();
     
    }, error => console.log(error));

  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.saveStudent();
    console.log(this.student)

  }

}
