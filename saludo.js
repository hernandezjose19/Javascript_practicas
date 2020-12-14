class Usuario {
    constructor(nombres, apellidos, dni) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.dni = dni
    }

    saluda(saludaa){
        console.log(`Hola ${saludaa}!`)
    }

    getNombres() {
        console.log(this.nombres)
    }

    setNombres(nombresa){
        this.nombres = nombresa
        console.log(this.nombres)
    }
}

class Profesores extends Usuario{
    constructor(nombres, apellidos, dni, cursos, horario){
        super(nombres, apellidos, dni)
        this.cursos = cursos,
        this.horario = horario
    }

    getHorarioManana() {

        console.log(this.horario.manana)
    }
}


const jose = new Profesores("Jose Antonio", "Hernandez Aljorna", 95931033, ["Django", "Javascript", "Base de datos"], {manana: "9:00 - 11:00", tarde:"12:00 - 16:00"})

jose.getHorarioManana()