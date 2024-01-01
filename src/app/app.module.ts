import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { CatalogueProductComponent } from './components/catalogue-product/catalogue-product.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { PanierComponent } from './components/panier/panier.component';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import {SliderComponent} from './components/slider/slider.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { ProductlistsComponent } from './components/productlists/productlists.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { TagsComponent } from './tags/tags.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PanierVideComponent } from './components/panier-vide/panier-vide.component';
import { NotArticleComponent } from './components/not-article/not-article.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';

@NgModule({
  declarations: [
    AppComponent,
    AproposComponent,
    CatalogueProductComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MainContainerComponent,
    ProductComponent,
    ProductItemComponent,
    ProductModalComponent,
    NavMenuComponent,
    SliderComponent,
    FilterPipe,
    SortPipe,
    PanierComponent,
    ProductlistComponent,
    PagenotfoundComponent,
    HomeComponent,
    ProductlistsComponent,
    CardComponent,
    SearchComponent,
    TagsComponent,
    ArticlePageComponent,
    CartPageComponent,
    PanierVideComponent,
    NotArticleComponent,
    NextDirective,
    PrevDirective,  
  ],
  imports: [
    BrowserModule,
    OrderModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
