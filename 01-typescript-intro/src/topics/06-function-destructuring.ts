
export interface Product {
    description: string;
    price: number;
}

// const phone:Product = {
//     description: "Redmi note 10pro",
//     price: 100
// }

// const laptop:Product = {
//     description: "MSI",
//     price: 1000
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function textCalculation( options: TaxCalculationOptions ) : [number, number] {

// function textCalculation( {tax, products}: TaxCalculationOptions ) : [number, number] {

export function taxCalculation( options: TaxCalculationOptions ) : [number, number] {
    const { tax, products} = options;

    let total = 0;

    products.forEach( ({ price }) => {
        total += price
    });

    return [total, total * tax];
}

// const shoppingCart = [laptop, phone ];
// const tax = 0.10

// const [total, taxTotal] = taxCalculation({
//     tax, 
//     products: shoppingCart
// });



// console.log('Tax', taxTotal);
// console.log('Total', total);

// //TODO: HACER DESESTRUCTURAZION DE OBJETOS Y ARRAYS

// tax = impuestos



// export {}