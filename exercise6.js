// Notas: para borrar una propiedad creada con let, se usa la palabra clave delete nombre_objeto.propiedad

let book = { 
    title: "1984", 
    author: "George Orwell",
    yearPublished: 1949 
}

delete book.yearPublished

console.log(book)