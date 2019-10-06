
// Caso 1
let a = 'Hola, mundo';

// Caso 2
let b = 'mundo';
let c = 'Hola, ' +  b;

// Caso 3
let d = 'mundo';
let e = `Hola, ${ d }`;

// Caso 4
let f = 'James';
let g = 'Howlett';
let h = 'Logan';
let i = 'Lobezno';
let k = 'Hola, mi nombre real es ' + f + " " + g + ", pero todo el mundo me conoce como " + h + " o " + i;

// Caso 5
let l = `Hola, mi nombre real es ${ f} ${ g }, pero todo el mundo me conoce como ${ h } o ${ i }`;


let ingredientes = {
    ingrediente1: 'huevos',
    ingrediente2: 'aceite',
    ingrediente3: 'sal',
    ingrediente4: 'jamón',
    ingrediente5: 'queso'
}

let receta = `Lista de la ingredientes:

            - Ingrediente 1 » ${ ingredientes.ingrediente1 },
            - Ingrediente 2 » ${ ingredientes.ingrediente2 },
            - Ingrediente 3 » ${ ingredientes.ingrediente3 },
            - Ingrediente 4 » ${ ingredientes.ingrediente4 },
            - Ingrediente 5 » ${ ingredientes.ingrediente5 }`

console.log(receta)