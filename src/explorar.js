const ventas = require("../src/datos.js");

console.log("Cantidad de registros", ventas.length);
console.log("Primer registro", ventas[0]);
console.log("Último registro", ventas[ventas.length - 1]);
console.log("Prodcuto del registro 4", ventas[4].producto);
console.table(ventas)