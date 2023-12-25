export interface Product {
    _id: string,
    name: string,
    description: string,
    imageUrl: string[],
    sold_price: number,
    regular_price: number,
    slug?: string,

}
