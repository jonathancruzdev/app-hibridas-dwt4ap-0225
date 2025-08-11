class Alumno {
    // Atributos
    nombre = "";
    apellido = "";
    edad = "";
    materias = [];
    constructor(nombre, apellido, edad, materias=[]){
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
    agregarMateria(materia){
        this.materias.push(materia);
    }
}

module.exports = Alumno;