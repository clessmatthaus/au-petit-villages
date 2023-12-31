import { Articles } from "./article";

export class cartItem{
    constructor(article: Articles){
        this.article = article;
    }
     article:Articles;
     quantity: number = 1;
     get price(): number{
        return this.article.sold_price * this.quantity;
     }

}