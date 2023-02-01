import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  id!: number
  student!: Student[];

  constructor( private  studentService: StudentService, private router:Router,private route: ActivatedRoute ){}


  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(){
    this.studentService.getStudentList().subscribe(data => {
      this.student = data;

    });
  }


  onCreate(){
    this.router.navigate(['/create-student'])
    
    
  }
  StudentDetails(id: number){
    this.router.navigate(['employee-details', id]);

  }

  updateStudent(id:number){
    this.router.navigate(['update-student',id]);


  }

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(data =>{
      console.log(data);
      this.getStudent();
    })

  }

}
