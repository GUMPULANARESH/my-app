import { Component } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  // public phones:any=[];
  public phones:Phone[]=[];
  
  constructor(private _phoneservice:PhoneService){
    this.phones=this._phoneservice.phones;
  }

}
