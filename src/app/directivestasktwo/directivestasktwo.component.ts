import { Component } from '@angular/core';

@Component({
  selector: 'app-directivestasktwo',
  templateUrl: './directivestasktwo.component.html',
  styleUrls: ['./directivestasktwo.component.css']
})
export class DirectivestasktwoComponent {
  public companys:any=[
    {companyname:'audi',price:1000000},
    {companyname:'kia',price:200000}
  ];
  public company:string="";

}
