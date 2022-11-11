/* Interface
    Solo existen en tiempo de compilacion
    Se usan para verificar tipos
*/

interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id: number) => void
}/* Creacion de interface */

const book: Book = {
    id: 1,
    title: "My title",
    author: "Diego"
}/* Declaracion / asignacion */

const books: Book[] = [];

function getBook(): Book {
    return { id: 2, title: "Subtitle", author: "Carlos" }
}/* Metodo de tipo "Book"(interface) que retorna un objeto de tipo "Book"(interface) */

const myBook = getBook();

function createBook(book:Book):Book{
    return book
}/* Metodo de tipo "Book"(interface) que recibe un objeto de tipo "Book"(interface) */

const newBook: Book = { id: 2, title: "Subtitle", author: "Carlos" }
createBook(newBook);

// Extends

interface Person {
    id: number;
    name: string;
}

interface Employee extends Person{
    dept: string;
} /* Agrega propiedades del interface Person */

const employee: Employee = { id: 1, name: "Diego", dept: "Sistemas" }

/* Clases
    Existen en tiempo de compilacion y durante el tiempo de ejecucion
    Se pueden inicializar propiedades e implementar metodos
*/

interface Animal {
    name: string;
    getDogs: () => void;
    getCats: () => void;
}

class Zoo implements Animal {
    name = "Dog";
    getDogs(): void{

    }
    getCats(): void{

    }
}