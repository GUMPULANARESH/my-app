import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup= new FormGroup(
    {
      // FormGroup
      name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      age: new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
      phone: new FormControl(),
      email: new FormControl("",[Validators.required,Validators.email]),

      // Nested Form group
      address: new FormGroup(
        {
          state: new FormControl("",[Validators.required]),
          pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
        }
      ),
// FormArray
      cards: new FormArray([]),

      // <!-- Dynamic forms -->
      type: new FormControl(),
      BusFee: new FormControl(),
      HostelFee: new FormControl()
    }
  );

  // FormArray
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
add(){
  this.cardsFormArray.push( 
    new FormGroup({
      number: new FormControl("",[Validators.required]),
      expiry: new FormControl(),
      cvv: new FormControl()
    })
  )}

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }



  submit(){
    console.log(this.userForm);
    // this.userForm.reset();
    this.userForm.markAllAsTouched();
    if(this.userForm.valid){
      alert("form valid and submitted succesfully")
    }
  }

}
  