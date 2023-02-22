import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { AuthenticationGuard } from './authentication.guard';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CarttaskComponent } from './carttask/carttask.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivestaskComponent } from './directivestask/directivestask.component';
import { DirectivestasktwoComponent } from './directivestasktwo/directivestasktwo.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PhoneComponent } from './phone/phone.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductsComponent } from './products/products.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentComponent } from './student/student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'grade',component:GradeComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'directivestask',component:DirectivestaskComponent},
    {path:'directivestasktwo',component:DirectivestasktwoComponent},
    {path:'cart',component:CartComponent},
    {path:'AttributeDirectives',component:AttributeDirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'carttask',component:CarttaskComponent},
    {path:'phone',component:PhoneComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'products',component:ProductsComponent},
    {path:'bank',component:BankComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'student',component:StudentComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'parent',component:ParentComponent},
    {path:'items',component:ItemsComponent},
    {path:'nav',component:NavComponent},
    {path:'cartlist',component:CartlistComponent}

  ]},
  {path:'',component:DashboardComponent},
  {path:'**',component:PagenotfoundComponent},
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
