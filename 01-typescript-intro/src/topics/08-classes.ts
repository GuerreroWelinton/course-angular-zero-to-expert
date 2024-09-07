// La variables dentro de la clase de denominan propiedades
// Las funciones dentro de las clases se denominan metodos
export class Person {
  // public name?: string;
  //* public
  // La puedo utilizar fuera de la clase
  //* private
  // Solo se puede utilizar dentro de la clase
//   public name: string;
//   private address: string;

  //* es un metodo especial en nuestras clases - es el primero en llamarse
  constructor(
    public firstname: string, 
    public lastname: string, 
    private address: string = "No Address",
    ) { }
}

//* Priorizar la composición sobre la herencia 

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) { 
        // this.person = new Person(realName);
    }
}


//export class Hero extends Person {
    // constructor(
    //     public alterEgo: string,
    //     public age: number,
    //     public realName: string
    // ) {
    //     super( realName, 'New York'); //Funcion especial para llamar al constructor del padre
    // }
//}

const tony = new Person('Tony', 'Stark', 'New York');

//Instanciamos una persona
const ironman = new Hero("Ironman", 45, "Tony", tony);
console.log(ironman);

// Tener en cuenta que esto se puede hacer ya que TS transpila a JS y en las clases de JS no existe public ni private
// Aunque en angular se puede configurar para que no ejecute si encuentra uno de estos errores
// console.log(ironman.address);
