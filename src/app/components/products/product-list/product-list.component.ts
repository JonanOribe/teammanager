import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {

    this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item=>{
      this.productList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]= element.key;
        this.productList.push(x as Product);
      })
    });

  }

  onEdit(product: Product){

  }

  onDelete($key: string){
    
  }

}
