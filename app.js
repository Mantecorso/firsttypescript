var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People(nombre) {
        this.name = nombre;
    }
    People.prototype.getNombre = function () {
        return this.name;
    };
    People.prototype.setNombre = function (nombre) {
        this.name = nombre;
    };
    return People;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(nombre, id) {
        var _this = _super.call(this, nombre) || this;
        _this.id = id;
        return _this;
    }
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    return User;
}(People));
var Pepe = /** @class */ (function (_super) {
    __extends(Pepe, _super);
    function Pepe(nombre) {
        return _super.call(this, nombre) || this;
    }
    return Pepe;
}(People));
var user = new User("antonio", 1);
alert(user.getNombre());
user.setNombre("Luis");
alert(user.getNombre());
alert(user.getId());
//let people = new People("Filipino");
//people.serId(3);
//ultimo no posible, people no puede modificarse desde fuera.//
var pepe = new Pepe("pepe");
alert(pepe.getNombre());
