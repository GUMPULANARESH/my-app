import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  // public vehicles:any=[];
  public vehicles:Vehicle[]=[];
  public term:string="";

  public column:string="";
  // public order:string="";

  public page:number=0;
  public limit:any=[];

  constructor(private _vehicleService:VehicleService,private _router:Router){
    _vehicleService.getVehicles().subscribe(
      // (data:any)=>{
      //   this.vehicles=data;
      // },
      (data:Vehicle[])=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{this.vehicles=data;},
      (err:any)=>{alert("Internal server error");}
    )
  }

  //    sort(){
  //   this._vehileService.getSortedVehicles(this.column,this.order).subscribe(
  //     (data:any)=>{this.vehicles=data;},
  //     (err:any)=>{alert("Internal server error");}

  //   )
  
  // }

  pagination(){
    this._vehicleService.getPagedVehicles(this.page,this.limit).subscribe(
      (data:any)=>{this.vehicles=data;},
      (err:any)=>{alert("Internal server error");}

    )
  
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{alert("vehicle deleted succesfully");location.reload();},
      (err:any)=>{alert("Internal server error");}
    )
  }
  view(id:string){
    this._router.navigateByUrl("/dashboard/vehicle-details/"+id); 

  }
  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-vehicle/"+id);
   }
  

}
