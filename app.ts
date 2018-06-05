

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
    constructor(nombre:string)
    {
        super(nombre);
    }
}

let user = new User("antonio")
alert(user.getNombre());
user.setNombre("Luis");
alert(user.getNombre());

