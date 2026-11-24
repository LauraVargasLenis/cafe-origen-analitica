const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM
} = require("./analitica.js");

const { ventas } = require("./datos.js");


/* Comparar total vendido por for y por array*/
const totalCiclo = totalVendido(ventas);
const totalMetodo = totalVendidoM(ventas);

if (totalCiclo === totalMetodo) {
    console.log("Total vendido: OK");
} else {
    console.log("Total vendido: DIFERENTE");
}

/* función para verificar */
function verificar (nombre, resultadoCiclo, resultadoMetodo) {

    if (resultadoCiclo === resultadoMetodo) {
        console.log(nombre + ": OK");
    } else {
        console.log(nombre + ": DIFERENTE");
    }

}

// Verificar total vendido
verificar(
    "Total vendido",
    totalVendido(ventas),
    totalVendidoM(ventas)
);


// Verificar unidades vendidas
verificar(
    "Unidades vendidas",
    unidadesVendidas(ventas),
    unidadesVendidasM(ventas)
);


// Verificar ventas por ciudad
verificar(
    "Ventas Medellín",
    ventasPorCiudad(ventas, "Medellín"),
    ventasPorCiudadM(ventas, "Medellín")
);

verificar(
    "Ventas Bogotá",
    ventasPorCiudad(ventas, "Bogotá"),
    ventasPorCiudadM(ventas, "Bogotá")
);

verificar(
    "Ventas Cali",
    ventasPorCiudad(ventas, "Cali"),
    ventasPorCiudadM(ventas, "Cali")
);

verificar(
    "Ventas Pereira",
    ventasPorCiudad(ventas, "Pereira"),
    ventasPorCiudadM(ventas, "Pereira")
);