export class Articles{
    id!:number;
    name!:string;
    description!:string;
    sold_price!:number;
    regular_price!:number;
    favorite:boolean = false;
    star:number=0;
    imageUrl!:string;
    origins!:string[];
    tags?:string[];

}