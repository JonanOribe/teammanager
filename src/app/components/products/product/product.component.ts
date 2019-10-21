import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetFrom();
  }

  onSubmit(productForm: NgForm)
  {
    if(productForm.value.$key==null){
      this.productService.insertProduct(productForm.value);
      this.resetFrom(productForm);
    }else{
      this.productService.updateProduct(productForm.value);
      this.resetFrom(productForm);
    }
    this.toastr.success('Successful Operation','Successful Operation')

  }

  resetFrom(productForm?: NgForm)
  {
    if(productForm != null){
      productForm.reset();
      this.productService.selectedProduct= new Product();
    }
  }

}
