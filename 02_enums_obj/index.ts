// Enum -> define un conjunto de constantes

enum Roles {
    User = "Hola", 
    Admin = 33,
    SuperAdmin = "Bye"
}// Por defecto su valor es la posicion +1

console.log(Roles.Admin); // -> 33

// Object

const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};

console.log(roles.User); // -> 0