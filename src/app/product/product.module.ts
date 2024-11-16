import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductscomponentComponent } from './productscomponent/productscomponent.component';
import { FormproductComponent } from '../formproduct/formproduct.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductscomponentComponent,
    FormproductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
