const name:string = 'Mocha';
// let hpPoints: number | string = 95;
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

hpPoints = 'FULL';

console.log({
    name, hpPoints, isAlive
});


export {};