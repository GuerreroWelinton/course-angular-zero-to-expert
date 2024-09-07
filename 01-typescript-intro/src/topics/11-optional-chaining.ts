export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Welinton',
}

const passenger2: Passenger = {
    name: 'Jhonny',
    children: ['Jhon', 'Jordy'],
}


const printChildren = (passenger: Passenger): number => {
    // if (!passenger.children) return 0;
    const howManyChildren = passenger.children?.length || 0;
    // Decirle a TS que nunca va a recivir un nulo
    // const howManyChildren = passenger.children!.length;
    console.log( passenger.name, howManyChildren); 
    return howManyChildren;
}

printChildren(passenger1);