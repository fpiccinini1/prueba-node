let stock = require('./datosBici')

let dhBicis = {
    bicicletas: stock,
    buscarBici: function (id) {
        let bicisFiltradas = this.bicicletas.filter((bici) => {

            return bici.id == id
        })
        if (bicisFiltradas.length > 0) {
            return bicisFiltradas[0]
        } else {
            return null
        }
    },
    venderBici: function (id) {
        let bicisDisponibles = this.bicicletas.filter((estatus) => {
            return estatus.vendida == 'no' && estatus.id == id
        })
        if (bicisDisponibles.length > 0) {
            bicisDisponibles[0].vendida = 'si'
            return bicisDisponibles[0]
        }else{
            return 'bicicleta no encontrada'
        }
    }
}


console.log(dhBicis.venderBici(1))