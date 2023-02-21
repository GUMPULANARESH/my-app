import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public names:string[]=['abc','naresh','xyz'];
  public states:string[]=['telangana','andhrapradesh','bihar'];

  public users:any=[{name:'abc',age:20},{name:'naresh',age:26}];

  public students:any=[{name:'naresh',sub:'math',marks:80},
                       {name:'sridhar',sub:'telugu',marks:35},
                      {name:'sravan',sub:'hindi',marks:50}];
  public products:any=[
    
    {name:'pen',price:10,rating:4},
    {name:'shirt',price:1000,rating:4.3},
    {name:'phone',price:11000,rating:5.0}

  ]
  public time:number=0;
  public user:any={name:'abc',age:20};


}
