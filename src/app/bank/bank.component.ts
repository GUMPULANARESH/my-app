import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
   public banks:any=[];

  constructor(private _bankService:BankService){
    _bankService.getBank().subscribe(
      (data:any)=>{this.banks=data;},
      (err:any)=>{alert("Internal server error")}
    )
  }

}
