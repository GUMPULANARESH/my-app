import { Component } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {
  public marks:number=0;
  public grade:string="";

  calculate(){
    if(this.marks<=100&&this.marks>=90){
      this.grade="A";
    }
    else if(this.marks<90&&this.marks>40){
      this.grade="B";
    }
    else{
this.grade="c";
    }

  }


}
