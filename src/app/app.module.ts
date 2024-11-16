import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FilterPipe } from './filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductModule } from './product/product.module';
import { ProductscomponentComponent } from './product/productscomponent/productscomponent.component';
import { FormCategorieComponent } from './Components/form-categorie/form-categorie.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UserComponent } from './user/user.component';
import { MainuserComponent } from './profile/mainuser/mainuser.component';
import { TestComponent } from './test/test.component';
import { CategoryComponent } from './category/category.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    FilterPipe,
    HighlightDirective,
    NotfoundComponent,
    FormCategorieComponent,
    FormUserComponent,
    UserComponent,
    MainuserComponent,
    CategoryComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ProductModule,TestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
