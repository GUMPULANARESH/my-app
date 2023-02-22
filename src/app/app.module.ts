import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GradeComponent } from './grade/grade.component';
import { RegistrationComponent } from './registration/registration.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivestaskComponent } from './directivestask/directivestask.component';
import { DirectivestasktwoComponent } from './directivestasktwo/directivestasktwo.component';
import { CartComponent } from './cart/cart.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { CarttaskComponent } from './carttask/carttask.component';
import { PhoneComponent } from './phone/phone.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { BankComponent } from './bank/bank.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { AboutusModule } from './aboutus/aboutus.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    GradeComponent,
    RegistrationComponent,
    DirectivesComponent,
    DirectivestaskComponent,
    DirectivestasktwoComponent,
    CartComponent,
    AttributeDirectivesComponent,
    PipesComponent,
    CarttaskComponent,
    PhoneComponent,
    VehicleComponent,
    ProductsComponent,
    BankComponent,
    CreateVehicleComponent,
    StudentComponent,
    CreateStudentComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
    ParentComponent,
    ChildComponent,
    ItemsComponent,
    NavComponent,
    CartlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
