import { Component } from '@angular/core';

@Component({
  selector: 'app-carttask',
  templateUrl: './carttask.component.html',
  styleUrls: ['./carttask.component.css']
})
export class CarttaskComponent {
  public students:any=[
    {name:'naresh',DOB:'12/08/1996',education:'B.Tech',isPlaced:true,company:'wipro',package:1100000},
    {name:'sridhar',DOB:'11/07/1995',education:'B.com',isPlaced:false,company:'capgemini',package:900000},
    {name:'sravan',DOB:'14/09/1997',education:'MBA',isPlaced:true,company:'Delliotee',package:800000},
    {name:'sathish',DOB:'01/02/1998',education:'M.Tech',isPlaced:true,company:'HCL',package:600000},
    {name:'anji',DOB:'11/11/1994',education:'B.Tech',isPlaced:false,company:'TCS',package:550000},
    {name:'ganesh',DOB:'12/09/1992',education:'BA',isPlaced:false,company:'congnigent',package:700000},
  ]
  public term:string="";
  public term1:string="";

  public name:string="";
  public DOB:string="";
  public education:string="";
  public isPlaced:boolean=true;
  public company:string="";
  public package:number=0;

  search(){
    this.students=this.students.filter((student:any)=>student.name.indexOf(this.term) !=-1);
  }

  search1(){
    this.students=this.students.filter((student:any)=>student.company.indexOf(this.term1) !=-1);
  }
  isplaced(){
    this.students=this.students.filter((student:any)=>student.isPlaced==true);
  }
  isnotplaced(){
    this.students=this.students.filter((student:any)=>student.isPlaced==false);
  }
  delete(i:any){
    this.students.splice(i,1);
  }
  lowtohigh(){
    this.students=this.students.sort((a:any,b:any)=>a.package-b.package);
  }
  hightolow(){
    this.students=this.students.sort((a:any,b:any)=>b.package-a.package);
  }
  total(){
    var total=this.students.reduce((sum:any,student:any)=>sum+student.package,0);
    alert("total package is"+total);
  }
  totalstu(){
    alert("Total no of students are" +this.students.length);
  }
  addbonus(){
    this.students=this.students.filter((student:any)=>{
      student.package=student.package+50000;
      return student;
    });
  }
  minus(){
    this.students=this.students.map((student:any)=>{
      student.package=student.package-90000;
    return student;} )
  }


  addcart(){
    var student={
      name:this.name,
      DOB:this.DOB,
      education:this.education,
      isPlaced:this.isPlaced,
      company:this.company,
      package:this.package
     }
     this.students.push(student)
  }
     



}
