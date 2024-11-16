import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductscomponentComponent } from './product/productscomponent/productscomponent.component';
import { FormCategorieComponent } from './Components/form-categorie/form-categorie.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "product/:id", component: ProductscomponentComponent },
  { path: 'products', loadChildren: () =>
    import('./product/product.module')
    .then((m) => m.ProductModule)
  },
  { path: 'apropos', loadChildren: () =>
    import('./apropos/apropos.module')
    .then((m) => m.AproposModule)
  },
  { path: 'contact', loadChildren: () =>
    import('./contact/contact.module')
    .then((m) => m.ContactModule)//lazyloading
  },
  { path: 'profile', loadChildren: () =>
    import('./profile/profile.module')
    .then((m) => m.ProfileModule)
  },
  { path: "category/add", component: FormCategorieComponent },
  { path: "category/update/:obj", component: FormCategorieComponent },
  { path: "**", component: NotfoundComponent }  // Une seule route "**"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
