import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public name:string="";
  public price:number=0;
  public rating:number=0;
  public isFreeDelivery:boolean=false;

  public term:string="";
  public products:any=[
    {name:'pen',price:10,rating:3,isFreeDelivery:true},
    {name:'phone',price:100,rating:4,isFreeDelivery:false},
    {name:'shirt',price:200,rating:2,isFreeDelivery:true},
    {name:'cap',price:600,rating:5,isFreeDelivery:false},
    {name:'mobile case',price:90,rating:3.5,isFreeDelivery:true},
    {name:'remote',price:60,rating:2.6,isFreeDelivery:true},
    {name:'tv',price:1000,rating:5.0,isFreeDelivery:false},
    {name:'headset',price:250,rating:4.5,isFreeDelivery:true},
    {name:'airpods',price:220,rating:4,isFreeDelivery:false},
    {name:'pant',price:850,rating:4.8,isFreeDelivery:true}
  ];
  pricelh(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
  };
  pricehl(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
  };
  ratinglowhigh(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);
  };
  ratinghighlow(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);
  };
  search(){
    this.products=this.products.filter((product:any)=> product.name.indexOf(this.term) !=-1);
  }
  onlyfreedelivery(){
    this.products=this.products.filter((product:any)=>product.isFreeDelivery==true)
  }
  applyDisount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price/2;
      return product;
    })
  }
  total(){
    var total=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert("total price is"+total);
  }
  cartitems(){
    alert("Total cart items:"+this.products.length);
  }
  delete(i:any){
    this.products.splice(i,1);
  }
  add(){
    var product={
      name:this.name,
      price:this.price,
      rating:this.rating,
      isFreeDelivery:this.isFreeDelivery
    }
    this.products.push(product)
  }
 
applydeliverycharges(){
  this.products=this.products.filter((product:any)=>{
    if(product.isFreeDelivery==false){
      product.price=product.price+20;
    }
    return product;
  })
}


}
