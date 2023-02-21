import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm:FormGroup= new FormGroup(
    {
      name: new FormControl(),
      city: new FormControl(),
      phone: new FormControl(),
      adress: new FormControl(),
      photo: new FormControl(),
      placeIn: new FormControl(),
      salary: new FormControl()
    }
    
  )

  constructor(private _studentService:StudentService){}
submit(){
  console.log(this.studentForm);

  this._studentService.createStudent(this.studentForm.value).subscribe(
    (data:any)=>{alert("Student created succesfully.");},
    (err:any)=>{alert("Internal server error");}
  )
}


}
