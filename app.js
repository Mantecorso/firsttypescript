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
    function User(nombre) {
        return _super.call(this, nombre) || this;
    }
    return User;
}(People));
var user = new User("antonio");
alert(user.getNombre());
user.setNombre("Luis");
alert(user.getNombre());
