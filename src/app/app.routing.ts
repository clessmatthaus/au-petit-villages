import { Routes } from "@angular/router";
import { AproposComponent } from "./components/apropos/apropos.component";
import { MainContainerComponent } from "./components/main-container/main-container.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductlistComponent } from "./components/productlist/productlist.component";
import { PanierComponent } from "./components/panier/panier.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductlistsComponent } from "./components/productlists/productlists.component";
import { CardComponent } from "./components/card/card.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { ArticlePageComponent } from "./components/article-page/article-page.component";
import { CartPageComponent } from "./components/cart-page/cart-page.component";
import { PanierVideComponent } from "./components/panier-vide/panier-vide.component";
import { NotArticleComponent } from "./components/not-article/not-article.component";



export const ROUTES: Routes = [
    {
      path: "apropos",
      component: AproposComponent,
      pathMatch: 'full'
    },
    {
      path: "contact",
      component: ContactComponent,
      pathMatch: 'full'
    },
    {
      path: "panier",
      component: PanierComponent,
      pathMatch: 'full'
    },
    {
      path: "product/:slug",
      component: ProductComponent,
      pathMatch: 'full'
    },
    {
      path: "productlist",
      component: ProductlistComponent,
      pathMatch: 'full'
    },
    {
      path: "",
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: "search/:searchItem",
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: "tags/:tag",
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: "article/:id",
      component: ArticlePageComponent,
      pathMatch: 'full'
    },
    {
      path: "cart-page",
      component: CartPageComponent,
      pathMatch: 'full'
    },
    {
      path: "panier-vide",
      component: PanierVideComponent,
      pathMatch: 'full'
    },
    {
      path: "not-found",
      component: NotArticleComponent,
      pathMatch: 'full'
    },
    
    {
      path: "card",
      component: CardComponent,
      pathMatch: 'full'
    },
    {
      path: "**",
      component: PagenotfoundComponent,
      pathMatch: 'full'
    }
];
