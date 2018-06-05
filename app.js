//let nombre: string="Luis";
//let apellido: string="Jurado";
//alert(nombre + " " + apellido);
//readonly caracteristica: string="Muy guapo";
//alert(nombre + ""+ apellido + "" + caracteristica);
var User = /** @class */ (function () {
    function User(nombre) {
        this.name = nombre;
    }
    User.prototype.getNombre = function () {
        return this.name;
    };
    User.prototype.setNombre = function (nombre) {
        this.name = nombre;
    };
    return User;
}());
//let user = new User("Antonio")
//alert(user.getNombre()); 
//alert(user.name);
var user = new User("antonio");
alert(user.getNombre());
user.setNombre("Luis");
alert(user.getNombre());
