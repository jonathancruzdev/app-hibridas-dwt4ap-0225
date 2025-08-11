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

module.exports = Alumno;