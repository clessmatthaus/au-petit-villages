import { Routes } from "@angular/router";
import { AproposComponent } from "./components/apropos/apropos.component";
import { MainContainerComponent } from "./components/main-container/main-container.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductlistComponent } from "./components/productlist/productlist.component";
import { PanierComponent } from "./components/panier/panier.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";



export const ROUTES: Routes = [
  {
      path: "",
      component: MainContainerComponent,
      pathMatch: 'full'
    },
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
      path: "**",
      component: PagenotfoundComponent,
      pathMatch: 'full'
    }
];
