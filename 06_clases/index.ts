class Person{

    public zone = "Sao Paulo";  // Por defecto -> accesable desde Employee
    protected city = "Lapa";    // Hay acceso desde otras clases solo si se hereda (extends) -> accesable desde Employee
    private country = "Brasil"; // El scope no esta expuesto a otras clases -> NO accesable desde Employee

    constructor() { }

    greet(): void {
        console.log("Hola!");
    }
}

class Employee extends Person {
    
    // Atributos
    //private id: number;
    //private name: string;
    //private dept: string;

    constructor( private readonly id: number, private name: string, private depto: string ){ // propiedad id de solo lectura una vez inicializado
        //this.id = id;
        //this.name = name;
        //this.dept = dept;
        super();
        this.showInfo();
    }

    // Métodos
    private showInfo(): void{
        console.log(`${this.name} ${this.depto} ${this.id}`);
    }

}

const emp = new Employee(1, "Diego", "Sales");
// emp.showInfo(); -> es privado y accesible solo desde la clase Employee
emp.greet();