const autos = require('./bdAutos')

let concesionaria = {
    autos : autos,
    buscarAuto : function(patenteUser){
        // return this.autos.filter(item => item.patente == patente) [0] || null // ====> caso arrow functions
        let buscar
        let autoPatente = autos.filter(function(item){
            if (patenteUser == item.patente){
                buscar = item.patente
                return autoPatente
            }else{
                return null
            }
        })
    }
}

console.log(concesionaria.buscarAuto('JJK116'))