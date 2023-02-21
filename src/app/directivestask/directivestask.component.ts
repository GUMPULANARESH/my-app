import { Component } from '@angular/core';

@Component({
  selector: 'app-directivestask',
  templateUrl: './directivestask.component.html',
  styleUrls: ['./directivestask.component.css']
})
export class DirectivestaskComponent {
  public employees:any=[
    {name:'Naresh',position:'uideveloper',office:'india',age:26,Startdate:'2020-8-12',salary:10000},
    {name:'Raju',position:'software engineer',office:'india',age:25,Startdate:'2021-12-28',salary:19000},
    {name:'kalandar',position:'Engineer',office:'usa',age:26,Startdate:'2016-1-1',salary:12000},
    {name:'saipavan',position:'mechanical Engineer',office:'australia',age:27,Startdate:'2017-2-26',salary:15000},
    {name:'arun',position:'civil engineer',office:'afganistan',age:28,Startdate:'2018-4-5',salary:50000},
    {name:'aravind',position:'Accountant',office:'England',age:29,Startdate:'2019-5-5',salary:30000}
  ];
  public search:string[]=['name','position','office','age','startdate','salary'];

}
