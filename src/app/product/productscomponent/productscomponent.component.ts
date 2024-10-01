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
    {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
  ]
  ngOnInit(){//kol manrefrechi yeb3ath 
    this.activated.paramMap.subscribe(res=>{this.id=Number(res.get('id'));
  for(let p of this.listProducts){
     if (p.categoryId == this.id){
      this.listProducts.push(p);
     }
  }})
  }
  constructor(private activated:ActivatedRoute){
    console.log(this.activated.snapshot.params)
    this.activated.params.subscribe({
      next:(param)=>console.log(param['id'])
    })
    this.activated.paramMap.subscribe({
      next:(param1)=>console.log(param1.get('id'))
    })

    this.listProducts=this.listProducts.filter((p)=>p.categoryId==this.id)

  }
}
