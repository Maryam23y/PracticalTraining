import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './Pages/company/company.component';
import { CreateStudentComponent } from './Pages/create-student/create-student.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { StudentsComponent } from './Pages/students/students.component';
import { UpdateStudentComponent } from './Pages/update-student/update-student.component';


const routes: Routes = [
{path: '', component:NavbarComponent,
children:[{
  path: '', component:HomeComponent
},
{path: 'students', component:StudentsComponent},

{path: 'company',component:CompanyComponent},
{path: 'create-student',component:CreateStudentComponent},
{path: 'update-student/:id',component:UpdateStudentComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
