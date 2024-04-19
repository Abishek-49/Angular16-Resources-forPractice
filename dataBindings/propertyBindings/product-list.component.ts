import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name='john doe';
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
}
