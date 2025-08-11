class Alumno {
    // Atributos
    nombre = "";
    apellido = "";
    edad = "";
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    // Métodos
    modificarEdad(edad){
        this.edad = edad;
    }
    obtenerEdad(){
        return this.edad;
    }
}

const a1 = new Alumno("Julieta", "Ruiz", 25);
let edad = a1.obtenerEdad();
console.log( `La edad de ${a1.nombre} es ${edad}`);

a1.modificarEdad(30);
edad = a1.obtenerEdad();
console.log( `La edad de ${a1.nombre} es ${edad}`);
