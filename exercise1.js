// Las funciones constructoras siempre deben ir en mayusculas
// al usar metodos constructores, las propiedades y metodos deben ir precedidos de this.
// al instanciar un objeto, se debe usar la palabra clave new metodo_constructor

function Student(name,age,subjects) {
    this.name = name
    this.age = age
    this.subjects = subjects
}

const student1 = new Student('jeison',27,['espanol','matematica','ingles'])

console.log(student1)