import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutDirecterComponent } from './about-directer/about-directer.component';
import { AboutAddressComponent } from './about-address/about-address.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutDirecterComponent,
    AboutAddressComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCeoComponent
  ]
})
export class AboutusModule { }
