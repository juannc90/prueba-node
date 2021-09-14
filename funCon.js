const autos = require('./bdAutos')

let concesionaria = {
    autos : autos,
    
    buscarAuto : function(patente){
        return this.autos.filter(item => item.patente == patente) [0] || null
    },

    venderAuto : function(patente){
        let autoBuscado = this.buscarAuto(patente)
        if (autoBuscado.patente != null){
            this.autos.map(function(item){
                if (item == autoBuscado) item.vendido = true
                
            })
        }
    },

    autosParaLaVenta : function(){
        return this.autos.filter(item => item.vendido == false) //item.vendido == false || !item.vendido ===> esto es negar un true o una condición
    },

    autosNuevos : function(){
        return this.autosParaLaVenta().filter(item => item.km < 100)
    },

    autosVendidos : function(){
        return this.autos.filter(item => item.vendido == true)
    },

    listaDeVentas : function(){
        return this.autosVendidos().map(item => item.precio)
    },

    totalDeVentas : function(){
        return this.listaDeVentas().reduce((totalVentas,ventaIndividual) => (totalVentas + ventaIndividual), 0) // Al colocarle cero (0), indico que quiero que mi contador inicie en cero (0)
    },

    puedeComprar : function(auto,persona){
        if ((auto.precio <= persona.capacidadDePagoTotal) && ((auto.precio/auto.cuotas) <= persona.capacidadDePagoEnCuotas)){
            return true
        }else{
            return false
        }
        // return (auto.precio <= persona.capacidadDePagoTotal) && ((auto.precio/auto.cuotas) <= persona.capacidadDePagoEnCuotas) ====> Otra manera de presentar una proposición simple
    },

    autosQuePuedeComprar : function(persona){
        let autosParaEscoger = this.autosParaLaVenta()
        return autosParaEscoger.filter(item => this.puedeComprar(item,persona) == true) //se puede omitir el == true   
    }
}






