import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetFrom();
  }

  onSubmit(productForm: NgForm)
  {
    this.productService.insertProduct(productForm.value);
    this.resetFrom(productForm);
  }

  resetFrom(productForm?: NgForm)
  {
    if(productForm != null){
      productForm.reset();
      this.productService.selectedProduct= new Product();
    }
  }

}
