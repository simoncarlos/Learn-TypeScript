// Enum -> define un conjunto de constantes
var Roles;
(function (Roles) {
    Roles["User"] = "Hola";
    Roles[Roles["Admin"] = 33] = "Admin";
    Roles["SuperAdmin"] = "Bye";
})(Roles || (Roles = {})); // Por defecto su valor es la posicion +1
console.log(Roles.Admin); // -> 33
// Object
var roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.User); // -> 0
