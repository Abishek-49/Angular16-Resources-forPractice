import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
product={
  name:'iPhone 13',
  price:657,
  color:'red',
  discount:7.5,
  inStock:0
}
getDiscountedPrice(){
  return this.product.price * this.product.discount/100
}
}
