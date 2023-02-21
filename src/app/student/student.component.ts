import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public students:any=[];

  constructor(private _studentService:StudentService){
    _studentService.getStudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  public term:string="";

  public column:any=[];
  public order:string="";

  public Page:number=0;
  public limit:any=[];

  filter(){
    this._studentService.getFilteredStudents(this.term).subscribe(
      (data:any)=>{this.students=data;},
      (err:any)=>{alert("Internal server error");}
    )
  }
     sort(){
    this._studentService.getSortedStudents(this.column,this.order).subscribe(
      (data:any)=>{this.students=data;},
      (err:any)=>{alert("Internal server error");}

    )
  
  }

  pagination(){
    this._studentService.getPagedStudents(this.Page,this.limit).subscribe(
      (data:any)=>{this.students=data;},
      (err:any)=>{alert("Internal server error");}

    )
  }

  delete(id:string){
    this._studentService.deleteStudent(id).subscribe(
      (data:any)=>{alert("student deleted succesfully");location.reload();},
      (err:any)=>{alert("Internal server error");}
    )
  }

  


}
