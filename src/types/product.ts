export type Product = {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    category: category;
    // rating: number;
    rate:number;
    count: number;
    isShow:boolean;
};
export type ProductForm = {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    category: category;
    // rating: number;
    rate:number;
    count: number;
    isShow:boolean;
};
export type category = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    
}