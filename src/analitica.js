



const ventas = [
    {
        id: 1,
        fecha: "2026-09-01",
        cliente: "C01",
        producto: "Origen Huila 500 g",
        ciudad: "Medellín",
        cantidad: 2,
        precio: 42000
    },
    {
        id: 2,
        fecha: "2026-09-01",
        cliente: "C02",
        producto: "Origen Nariño 250 g",
        ciudad: "Bogotá",
        cantidad: 1,
        precio: 26000
    },
    {
        id: 3,
        fecha: "2026-09-02",
        cliente: "C03",
        producto: "Prensa francesa",
        ciudad: "Cali",
        cantidad: 1,
        precio: 95000
    },
    {
        id: 4,
        fecha: "2026-09-02",
        cliente: "C01",
        producto: "Origen Huila 500 g",
        ciudad: "Medellín",
        cantidad: 1,
        precio: 42000
    },
    {
        id: 5,
        fecha: "2026-09-03",
        cliente: "C04",
        producto: "Origen Sierra 500 g",
        ciudad: "medellín",
        cantidad: 3,
        precio: 45000
    },
    {
        id: 6,
        fecha: "2026-09-03",
        cliente: "C05",
        producto: "Origen Nariño 250 g",
        ciudad: "Bogotá",
        cantidad: 2,
        precio: 26000
    },
    {
        id: 7,
        fecha: "2026-09-04",
        cliente: "C02",
        producto: "Molino manual",
        ciudad: "Bogotá",
        cantidad: 1,
        precio: 120000
    },
    {
        id: 8,
        fecha: "2026-09-04",
        cliente: "C06",
        producto: "Origen Huila 500 g",
        ciudad: "Cali",
        cantidad: 0,
        precio: 42000
    },
    {
        id: 9,
        fecha: "2026-09-05",
        cliente: "C03",
        producto: "Origen Sierra 500 g",
        ciudad: "Cali",
        cantidad: 2,
        precio: 45000
    },
    {
        id: 10,
        fecha: "2026-09-05",
        cliente: "C07",
        producto: "Origen Huila 500 g",
        ciudad: "Pereira",
        cantidad: 4,
        precio: 42000
    },
    {
        id: 11,
        fecha: "2026-09-06",
        cliente: "C01",
        producto: "Prensa francesa",
        ciudad: "Medellín",
        cantidad: 1,
        precio: 95000
    },
    {
        id: 12,
        fecha: "2026-09-06",
        cliente: "C08",
        producto: "Origen Nariño 250 g",
        ciudad: "Bogotá",
        cantidad: 3,
        precio: 26000
    }
];

/**
 * Motor de analítica de Café Origen v0.1 (Plantilla Base)
 *
 * Instrucciones:
 * - Implementa el cuerpo de cada función siguiendo su descripción.
 * - Apóyate en los archivos de la carpeta `patrones/` para ver ejemplos de cada técnica.
 * - Recuerda NO modificar (mutar) el arreglo `ventas` original.
 */

/**
 * Calcula el valor total de una venta individual (cantidad * precio).
 * @param {Object} venta - Objeto que representa una venta.
 * @returns {number} Valor monetario de la venta.
 */

function valorVenta(ventas) {
    const totalVenta = ventas.cantidad * ventas.precio;
    return totalVenta;
}
// ============================================================================
// MINIRRETO 2: Indicadores básicos con ciclos manuales (for ... of)
// Requisito: Resolver usando un ciclo `for ... of` (sin .reduce, .filter, .map)
// Guía recomendada: patrones/01-contadores-y-acumuladores.js y 02-extremos-maximo-minimo.js
// ============================================================================

/**
 * Suma el valor total (cantidad * precio) de todas las ventas válidas (cantidad > 0).
 * Patrón sugerido: Acumulador con filtro manual.
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {number} Dinero total vendido.
 */
function totalVendido(ventas) {
    let total = 0;
    
    for (const venta of ventas) {
        const subtotal = valorVenta(venta);
        total = total + subtotal;
    }
    return total;
}
/**
 * Suma todas las unidades vendidas en las órdenes válidas (cantidad > 0).
 * Patrón sugerido: Acumulador.
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {number} Total de unidades vendidas.
 */
function unidadesVendidas(ventas) {
    let totalUnd = 0;

    for (const venta of ventas){
        if (venta.cantidad > 0){
            totalUnd = totalUnd + venta.cantidad;
        }
    }
    return totalUnd;
}

/**
 * Devuelve el objeto completo de la venta con mayor valor total (cantidad * precio).
 * Patrón sugerido: Búsqueda de extremo (máximo).
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object|null} El objeto de la venta más alta.
 */
function ventaMayor(ventas) {
    let mayorValor = 0;
    let mayorRegistro = null;
    

    for (const venta of ventas){
        if (venta.cantidad > 0){
            let totalVenta = valorVenta(venta);

            if (mayorValor < totalVenta){
                mayorValor = totalVenta;
                mayorRegistro = venta;
            }
        }
    }
    return mayorRegistro;
    
}

/**
 * Crea ticketPromedio(ventas): el valor total dividido entre la cantidad de ventas válidas
 * (las que tienen cantidad mayor que 0).
 */

function ticketPromedio(ventas) {
    let ventasVal = 0;
    let sumaVentas = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            ventasVal = ventasVal + 1;
            sumaVentas = sumaVentas + valorVenta(venta);
        }
    }
    if (ventasVal === 0) {
        return 0;
    }

    return (sumaVentas/ventasVal);
}
/*89545.45454545454*/

/**
 * Devuelve un nuevo arreglo con las ventas válidas de una ciudad específica,
 * sin importar diferencias de mayúsculas/minúsculas (ej. "Medellín" vs "medellín").
 * Patrón sugerido: Filtro manual con normalización de texto (.trim().toLowerCase()).
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @param {string} ciudad - Nombre de la ciudad a buscar.
 * @returns {Array} Nuevo arreglo con las ventas de esa ciudad.
 */
function ventasPorCiudad(ventas, ciudad) {
    let total = 0
    const ciudadBuscada = ciudad.trim().toLowerCase();

    for (const venta of ventas) {
        if (venta.cantidad > 0 && (ciudadBuscada === venta.ciudad.trim().toLowerCase())){
            total = total + valorVenta(venta);
        }
    }
    return total
}


// ============================================================================
// MINIRRETO 3: Métodos de arreglo (.filter, .map, .reduce, .sort) y Top K
// Requisito: Resolver usando métodos de arreglos sin mutar el arreglo original.
// Guía recomendada: patrones/03-filter-map-reduce.js, 04-objetos-como-diccionarios.js
//                   y 05-ordenar-inmutable-y-top-k.js
// ============================================================================

function totalVendidoM (ventas) {
    const ventasValidas = ventas.filter(venta => venta.cantidad>0);
    const subtotales = ventasValidas.map(venta => valorVenta(venta));

    const total = subtotales.reduce((acumulador, subtotal) =>{
        return acumulador + subtotal    ;
    }, 0);

    return total

}


function unidadesVendidasM (ventas) {
    const ventasValidas = ventas.filter(venta => venta.cantidad>0);
    const totalUnd = ventasValidas.map(venta => venta.cantidad );

    const unidadesVend = totalUnd.reduce((acumulador, cantidad) =>{
        return acumulador + cantidad;
    }, 0);

    return unidadesVend
}


function ventasPorCiudadM (ventas, ciudad) {
    const ciudadBuscada = ciudad.trim().toLowerCase();

    const ventasValidas = ventas.filter(venta => 
        venta.cantidad > 0 &&
        venta.ciudad.trim().toLowerCase() === ciudadBuscada
    );

    const subtotales = ventasValidas.map(venta => valorVenta(venta));

    const total = subtotales.reduce((acumulador, subtotal) => {
        return acumulador + subtotal;
    }, 0);

    return total;
}

function totalPorCiudad (ventas) {
    const ventasValidas = ventas.filter(venta => venta.cantidad > 0);

    const ventasCiudad = ventasValidas.reduce((acumulador, venta) => {
        const ciudad = venta.ciudad.trim().toLowerCase();

        if (!acumulador[ciudad]) {
            acumulador[ciudad] = 0;
        }

        acumulador[ciudad] = acumulador[ciudad] + valorVenta(venta);

        return acumulador;
    }, {});

    return ventasCiudad;
}



function unidadesPorProducto (ventas) {
    const ventasValidas = ventas.filter(venta => venta.cantidad > 0);

    const unidadesProducto = ventasValidas.reduce((acumulador, venta) => {
        const producto = venta.producto;

        if (!acumulador[producto]) {
            acumulador[producto] = 0;
        }

        acumulador[producto] = acumulador[producto] + venta.cantidad;

        return acumulador;
    }, {});

    return unidadesProducto;
}


function topProductosPorValor (ventas, k) {
    const ventasValidas = ventas.filter(venta => venta.cantidad > 0);

    const valorProducto = ventasValidas.reduce((acumulador, venta) => {
        const producto = venta.producto;

        if (!acumulador[producto]) {
            acumulador[producto] = 0;
        }

        acumulador[producto] = acumulador[producto] + valorVenta(venta);

        return acumulador;
    }, {});

    const arregloProductos = Object.entries(valorProducto);
    const productosOrdenados = [...arregloProductos].sort((a, b) => b[1] - a[1]);

    const topProductos = productosOrdenados.slice(0, k);

    return topProductos;
}

function ventasDelDia (ventas, fecha) {
    const ventasFecha = ventas.filter(venta =>
        venta.fecha === fecha &&
        venta.cantidad > 0
    );

    return ventasFecha;
}

module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia,
};



