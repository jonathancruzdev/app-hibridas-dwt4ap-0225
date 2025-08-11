const Alumno = require("./Alumno.js");

let nombre = "Pepe";
console.log(`Hola ${nombre}`);

const a1 = new Alumno("Julieta", "Ruiz", 25);
let edad = a1.obtenerEdad();
console.log( `La edad de ${a1.nombre} es ${edad}`);

a1.modificarEdad(30);
edad = a1.obtenerEdad();
console.log( `La edad de ${a1.nombre} es ${edad}`);

a1.agregarMateria('Clientes Web Mobile');
a1.agregarMateria('Aplicaciones Híbridas');
a1.agregarMateria('Portales y comercios electronicos');

console.table( a1.materias)


