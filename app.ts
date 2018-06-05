//let nombre: string="Luis";
//let apellido: string="Jurado";
//alert(nombre + " " + apellido);

//readonly caracteristica: string="Muy guapo";
//alert(nombre + ""+ apellido + "" + caracteristica);

class User{
    name:string;
    lastName:string;
    constructor(nombre:string)
    {
        this.name=nombre;
    }

    getNombre():string{
        return this.name;
    }
}

let user = new User("Antonio")
alert(user.getNombre()); 