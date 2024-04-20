import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name='john doe';
  addToCart:number=0;
product={
  name:'iPhone 13',
  price:657,
  color:'red',
  discount:7.5,
  inStock:5,
  pImage:'assets/iphone_files/iphone.png'
}
getDiscountedPrice(){
  return this.product.price-(this.product.price * this.product.discount/100)
}

// onNameChange(){
//   this.name='abishek'
// } 
// onNameChange(event:any){
//   this.name=event.target.value
// } 

// decrementCartValue(){
//   if(this.addToCart>0){
// this.addToCart--;
//   }

// }
// incrementCartValue(){
//   if(this.addToCart<this.product.inStock){
//     this.addToCart++;
//   }

// }

}
