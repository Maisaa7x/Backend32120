class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros || [];
        this.mascotas = mascotas || [];
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(string){
        this.mascotas.push(string);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({nombre, autor});
    }

    getBookNames(){
        return this.libros.map(({nombre}) => nombre);
    }
}

const usuario1 = new Usuario("Lucas", "Janson")
console.log(`Hola mi nombre es ${usuario1.getFullName()}`);
console.log("Mascotas: " + usuario1.countMascotas());
usuario1.addMascota("Janula");
console.log("Mascotas: " + usuario1.countMascotas());
console.log("Mis libros son: " + usuario1.getBookNames());
usuario1.addBook("IT", "Stephen King");
usuario1.addBook("Time Machine", "H.G. Wells");
console.log("Mis libros son: " + usuario1.getBookNames());

const usuario2 = new Usuario("Jose", "Perez", [{nombre: "IT", autor: "Stephen King"}], ["Time Machine", "H.G. Wells"])
console.log(`Hola mi nombre es ${usuario2.getFullName()}`);
console.log("Mascotas: " + usuario2.countMascotas());
console.log("Mis libros son: " + usuario2.getBookNames());