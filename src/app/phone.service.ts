import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  public phones:any=[
    {company:'sumsung',price:20000},
    {company:'iphone',price:50000},
    {company:'oneplus',price:25000},
    {company:'redmi',price:15000},
  ]


}
