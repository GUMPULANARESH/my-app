import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public name:string="abcd"
  public number:number=20;
  public isIndian:boolean=false;

  submit(){
    alert("submit clicked")
  }
  filter(){
    alert("key pressed in input");
  }
  cancel(){
    alert("mouse entered in cancel button")
  }
  public phone:number=91;

}
