// let const y var
// let y const son variables de scope
// var es una variable global
// let y const no se pueden redeclarar
// var si se puede redeclarar

// arrow functions
// las arrow functions no tienen contexto de this

function suma(a, b) {
  return a + b;
}

const suma1 = (a, b) => {
  return a + b;
};

const suma2 = (a, b) => a + b;

// JSON - JavaScript Object Notation

/* 

  {
    "clave":  "valor",
    "clave1": "valor1",
  }

*/

const persona = {
  nombre: "Nico",
  apellido: "Perez",
  saludar: () => {
    return `Hola, mi nombre es ${persona.nombre} ${persona.apellido}`;
  },
};

const estoEsUnString = JSON.stringify(persona);
//console.log(estoEsUnString);

//console.log(`hola soy ${persona.nombre}`);

// JSON es un formato de intercambio de datos
// es un estandar de la industria
// es un string

// coincide en sintaxis con los objetos literales de JS
// pero no son lo mismo

// JSON.stringify() -> convierte un objeto a JSON
// JSON.parse() -> convierte un JSON a objeto

//const estoEsUnObj = JSON.parse('{"nombre": "Nico"}');
//console.log(estoEsUnObj.nombre);

// destructuring por nombre
// es una forma de extraer valores de un objeto o array
// y asignarlos a variables

const alguien = {
  ciudad: "Bariloche",
  nombre: "Nico",
  calle: "Mitre",
};

const { ciudad } = alguien;

//console.log(ciudad);

alguien.ciudad = "CABA";

//console.log(alguien.ciudad);
//console.log(ciudad);

// destructuring por posicion
//const arr = ["Nico", "Perez", "Bariloche"];
//const [primer, segundo, tercer, cuarto] = arr;
//console.log(cuarto);

// spread operator

// es una forma de copiar un objeto o array
// y asignarlo a una nueva variable

// template literals
// es una forma de concatenar strings
// usando backticks (``) y ${}

// default parameters
// es una forma de asignar valores por defecto a los parametros de una funcion

// ARRAYS

// son una estructura de datos
// es una lista de elementos
// se declaran con []
// los elementos se separan con comas
// pueden tener cualquier tipo de dato
// pueden tener distintos tipos de datos
// pueden tener objetos y arrays
// son mutables

/* const arr = [
  "string",
  1,
  false,
  [1, 2, 3],
  { nombre: "Ada" },
  null,
  undefined,
  NaN,
  function () {},
  Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
  suma,
  suma1,
  suma(1, 2),
  suma1(1, 2),
];

arr[0] = "otro string"; */

// comparacion de arrays
// los arrays se comparan por referencia
// dos arrays son iguales si apuntan a la misma referencia en memoria

/* const arr1 = [];
const arr2 = [];
const arr3 = arr1;

console.log(arr1 === arr2);
console.log(arr1 === arr3);

arr1.push(1);

console.log(arr1);
console.log(arr3);

const arrStrToUpperCase = (arr) => arr.map((el) => el.toUpperCase());

const nombresMayuscula = (nombres) => {
  let nombresMayus = [];

  for (let i = 0; i < nombres.length; i++) {
    nombresMayus.push(nombres[i].toUpperCase());
  }

  return nombresMayus;
};

console.log(nombresMayuscula(nombres)); */

// CLASES

/* class Persona {
  nombre;
  apellido;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
  }
} */

/* const ada = new Persona("Ada", "Lovelace");
ada.saludar(); */

// HERENCIA

/* class Estudiante extends Persona {
  legajo;

  constructor(nombre, apellido, legajo) {
    super(nombre, apellido);
    this.legajo = legajo;
  }

  saludar() {
    console.log(
      `Hola, soy ${this.nombre} ${this.apellido} y mi legajo es ${this.legajo}`
    );
  }
}

const grace = new Estudiante("Grace", "Hopper", 123);
grace.saludar(); */
//

// MAP FILTER FIND FOREACH

const nombres = ["Ada", "Grace", "Hedy", "Radia"];

const mapeo = nombres.map((nombre, i) => {
  return `${i} - ${nombre}`;
});

const personas = [
  {
    nombre: "Ada",
    email: "ada@test.com",
  },
  {
    nombre: "Grace",
    email: "grace@test.com",
  },
];

const ada = personas.find((persona) => {
  return persona.email === "ada@test.com";
});

const todosMenosAda = nombres.filter((nombre) => {
  return nombre === "Adas";
});

console.log(todosMenosAda);

const productos = [
  {
    id: 1,
    nombre: "Remera",
  },
  {
    id: 2,
    nombre: "Pantalon",
  },
];
const objetosVendidos = [];

const vender = (id) => {
  const producto = productos.find((prod) => prod.id === id);

  const newListProductos = productos.filter((prod) => prod.id !== id);
  const newListObjetosVendidos = [...objetosVendidos, producto];
  //
};
