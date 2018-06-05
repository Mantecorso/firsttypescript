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
    return User;
}());
var user = new User("Antonio");
alert(user.getNombre());
