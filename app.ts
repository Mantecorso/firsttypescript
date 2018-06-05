//let nombre: string="Luis";
//let apellido: string="Jurado";
//alert(nombre + " " + apellido);

//readonly caracteristica: string="Muy guapo";
//alert(nombre + ""+ apellido + "" + caracteristica);

class User{
     private name:string;
     private lastName:string;
    constructor(nombre:string)
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

//let user = new User("Antonio")
//alert(user.getNombre()); 
//alert(user.name);

let user = new User("antonio")
alert(user.getNombre());
user.setNombre("Luis");
alert(user.getNombre());

