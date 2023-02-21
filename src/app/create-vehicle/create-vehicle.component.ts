import { Component } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm:FormGroup= new FormGroup(
    {vehicle: new FormControl(),
     manufacturer: new FormControl(),   
     model: new FormControl(),
     type: new FormControl(),
     color: new FormControl(),
     image: new FormControl()
    })

    public isEdit:boolean=false;
    public id:any="";

    constructor(private _vehicleService:VehicleService,private _activateRoute:ActivatedRoute){
      this._activateRoute.params.subscribe(
        (data:any)=>{

          if(data.id){
            this.isEdit=true;
            this.id=data.id;
          }
          // alert(data.id);
          this._vehicleService.getVehicleDetails(data.id).subscribe(
            (data:any)=>{
              this.vehicleForm.patchValue(data);
            }
          )
        }
      )
    }
submit(){
  console.log(this.vehicleForm);
// here
if(this.isEdit){
  // update
  this._vehicleService.updateVehicle(this.vehicleForm.value,this.id).subscribe(
    (data:any)=>{alert("vehicle updated succesfully");},
    (err:any)=>{alert("internal server error");}
  )
}
else{
  // create
  this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{alert("vehicle created succesfully");},
    (err:any)=>{alert("Internal server error");}
  )
}



  this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{alert("Vehicle created succesfully.");},
    (err:any)=>{alert("Internal server error");}
  )
}

}
