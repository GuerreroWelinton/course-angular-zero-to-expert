
function addNumbers(a:number, b:number):number {
    return a + b;
}


const addNumbersArrow = (a:number, b:number):string => {
    // return  (a + b).toString();
    return  `${a + b}`;
}


//* ORDEN DE LOS ARGUMENTOS 
// Los que no tienen valores por defecto
// Los que son opcionales
// Los que son opcionales con valores por defecto
//* Si son más de 3 pasarle un objeto
function multiply( firstNumber: number, secondNumber?:number, base: number = 2) {
    return firstNumber * base;
}

// const result:number = addNumbers(1,2);
// const result2: string = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5);
// console.log({result, result2, multiplyResult});


interface Character {
    name:string;
    hp: number;
    showHp: ()=> void; 
}

const healCharacter = (character: Character, amount:number) => {
    character.hp += amount;

};

const strider: Character = {
    name: 'Mocha',
    hp: 75,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);        
    }
}

healCharacter( strider, 10);
healCharacter( strider, 15);


strider.showHp();

export {}