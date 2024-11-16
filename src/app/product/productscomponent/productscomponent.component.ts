import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-productscomponent',
  templateUrl: './productscomponent.component.html',
  styleUrls: ['./productscomponent.component.css']
})
export class ProductscomponentComponent {
  id!:number;
  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0,"nb_likes":0,"quantity":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0,"nb_likes":0,"quantity":10},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0,"nb_likes":0,"quantity":10},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0,"nb_likes":0,"quantity":10},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0,"nb_likes":0,"quantity":10},
    {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0,"nb_likes":0,"quantity":10},
  ]
  constructor(private activated:ActivatedRoute) {

    this.id = this.activated.snapshot.params['id'];
    console.log('snapshot method :')
    console.log(this.activated.snapshot.params['id']);

    console.log('params :')
    this.activated.params.subscribe({
      next : (param)=>console.log(param['id'])
    })
    this.listProducts = this.listProducts.filter((pr)=>pr.categoryId == this.id);

    }
    increment (Product: Product){
      Product.nb_likes++;
    }
    buy (Product: Product){
      Product.quantity--;
    }
    shortList: Product[] = [];

    addToShortlist(event: any) {
      const idUser = 123;
      const productWithUser = { ...event, idUser };
      this.shortList.push(productWithUser);
      console.log(this.shortList);
    }


}
