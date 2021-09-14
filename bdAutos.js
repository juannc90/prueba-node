const autos = [
    {
        marca : 'Ford',
        modelo : 'Fiesta',
        precio : 150000,
        km : 200,
        color : 'Azul',
        cuotas : 12,
        anio : 2019,
        patente : 'APL123',
        vendido : true
    },
    {
        marca : 'Toyota',
        modelo : 'Corolla',
        precio : 100000,
        km : 0,
        color : 'Blanco',
        cuotas : 14,
        anio : 2019,
        patente : 'JJK116',
        vendido : false,
    }
]

// let findAuto = autos.filter(item => item.patente == 'JJK116')
// console.log (findAuto) ===> Imprime por consola el objeto completo que contiene esa patente que se pide

module.exports = autos