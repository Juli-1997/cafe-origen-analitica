const ventas = require("./datos");
const analitica = require("./analitica");

// Formato de pesos colombianos
function formatoPesos(valor) {
  return "$ " + valor.toLocaleString("es-CO");
}

// Título del reporet
console.log("========================================");
console.log("       CAFÉ ORIGEN - REPORTE v0.1");
console.log("========================================");

// 1. RESUMEN GENERAL
console.log("\n1. RESUMEN GENERAL");
console.log("----------------------------------------");

const total = analitica.totalVendido(ventas);
const unidades = analitica.totalUnidades(ventas);
const promedio = analitica.promedioPorVenta(ventas);

console.log(`Total vendido:       ${formatoPesos(total)}`);
console.log(`Unidades vendidas:   ${unidades}`);
console.log(`Ticket promedio:     ${formatoPesos(promedio)}`);

// 2. VENTAS POR CIUDAD
console.log("\n2. VENTAS POR CIUDAD");
console.log("----------------------------------------");

const ciudades = analitica.totalPorCiudad(ventas);

const tablaCiudades = Object.entries(ciudades).map(([ciudad, valor]) => ({
  Ciudad: ciudad,
  "Total vendido": formatoPesos(valor)
}));

console.table(tablaCiudades);

// 3. UNIDADES POR PRODUCTO
console.log("\n3. UNIDADES POR PRODUCTO");
console.log("----------------------------------------");

const productos = analitica.unidadesPorProducto(ventas);

const tablaProductos = Object.entries(productos).map(([producto, cantidad]) => ({
  Producto: producto,
  "Unidades vendidas": cantidad
}));

console.table(tablaProductos);

// 4. TOP 3 PRODUCTOS POR VALOR
console.log("\n4. TOP 3 PRODUCTOS POR VALOR");
console.log("----------------------------------------");

const topProductos = analitica.topProductosPorValor(ventas, 3);

const tablaTop = topProductos.map((producto, indice) => ({
  Puesto: indice + 1,
  Producto: producto.producto,
  "Valor generado": formatoPesos(producto.valor)
}));

console.table(tablaTop);

// 5. RESUMEN DE UN DÍA CON VENTAS
console.log("\n5. RESUMEN DE UN DÍA CON VENTAS");
console.log("----------------------------------------");

const fechaConVentas = "2026-09-01";
const ventasDia = analitica.ventasDelDia(ventas, fechaConVentas);

console.log(`Fecha: ${fechaConVentas}`);
console.log(`Número de registros: ${ventasDia.length}`);
console.log(`Total vendido: ${formatoPesos(analitica.totalVendido(ventasDia))}`);
console.log(`Unidades vendidas: ${analitica.totalUnidades(ventasDia)}`);
console.log(`Ticket promedio: ${formatoPesos(analitica.promedioPorVenta(ventasDia))}`);

// 6. RESUMEN DE UN DÍA SIN VENTAS
console.log("\n6. RESUMEN DE UN DÍA SIN VENTAS");
console.log("----------------------------------------");

const fechaSinVentas = "2026-09-07";
const ventasDiaVacio = analitica.ventasDelDia(ventas, fechaSinVentas);

console.log(`Fecha: ${fechaSinVentas}`);
console.log(`Número de registros: ${ventasDiaVacio.length}`);
console.log(`Total vendido: ${formatoPesos(analitica.totalVendido(ventasDiaVacio))}`);
console.log(`Unidades vendidas: ${analitica.totalUnidades(ventasDiaVacio)}`);
console.log(`Ticket promedio: ${formatoPesos(analitica.promedioPorVenta(ventasDiaVacio))}`);

console.log("\n========================================");
console.log("             FIN DEL REPORTEEEEEE, Adiós");
console.log("========================================");