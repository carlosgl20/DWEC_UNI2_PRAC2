class Grupo {
    constructor(codigoGrupo, numAlumnos = "") {
        this.codigoGrupo = codigoGrupo;
        this.numAlumnos = numAlumnos;
    }
}

class Instituto {
    constructor(codigoInstituto, nombre) {
        this.codigoInstituto = codigoInstituto;
        this.nombre = nombre;
        this.listaGrupo = [];
    }

    //método para coger el código de instituto
    getCodigoInstituto() {
        return this.codigoInstituto;
    }

    // método para sacar el total de alumnos
    numeroTotalAlumnos() {
        let numeroAlumnos = 0;
        for (let i = 0; i < this.listaGrupo; i++) {
            numeroAlumnos += grupo.numAlumnos; // sumamos el numero de alumnos de todos los grupos
        }
        return numeroAlumnos;
    }
    //método para agregar grupos al instituto
    agregarGrupos(codigoGrupo, numAlumnos) {
        const nuevoGrupo = new Grupo(codigoGrupo, numAlumnos); //creamos un nuevo grupo
        this.listaGrupo.push(nuevoGrupo); //añadimos a la lista el nuevo grupo
    }
}

const Instituto1 = new Instituto(1, "Fleming");
Instituto1.agregarGrupos(1, 150);

console.log("Código del instituto: "+Instituto1.getCodigoInstituto);
console.log("Número total de alumnos: "+Instituto1.numeroTotalAlumnos);
console.log("Grupos del instituto: "+Instituto1.listaGrupo);

