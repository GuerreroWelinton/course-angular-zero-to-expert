import { Product, taxCalculation } from "./06-function-destructuring";

const shoopingCart: Product[] = [
    {
        description: 'CELL',
        price: 4
    } ,
    {
        description: 'MSI',
        price: 5
    }
];

const tax = 0.15

const [total, taxTotal] = taxCalculation({
    tax,
    products: shoopingCart,
});

console.log('Tax', taxTotal);
console.log('Total', total);
