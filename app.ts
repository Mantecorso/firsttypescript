

class People{
     protected name:string;
     protected lastName:string;
     protected constructor(nombre:string)
    {
        this.name=nombre;
    }

    getNombre():string{
        return this.name;
    }

    setNombre(nombre:string):void{
        this.name= nombre;
    }
}

class User extends People
{
    private id:number;
    constructor(nombre:string, id:number)
    {
        super(nombre);
        this.id=id;
    }
    setId(id:number):void
    {
        this.id = id;
    }
    getId():number
    {
        return this.id;
    }
}

class Pepe extends People{
    constructor (nombre:string){
        super(nombre);
    }
}

let user = new User("antonio", 1)
alert(user.getNombre());
user.setNombre("Luis");
alert(user.getNombre());
alert(user.getId());
//let people = new People("Filipino");
//people.serId(3);
//ultimo no posible, people no puede modificarse desde fuera.//
let pepe = new Pepe("pepe");
alert(pepe.getNombre());

