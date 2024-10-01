import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductscomponentComponent } from './product/productscomponent/productscomponent.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"product/:id",component:ProductscomponentComponent},
  {path:"**",component:NotfoundComponent}
];
//dima manensewech el routeroutlet
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
