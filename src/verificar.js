const analitica = require("./analitica");
const ventas = require("./datos");
const ventasOriginales = JSON.stringify(ventas);

function verificar(nombre, resultadoCiclo, resultadoMetodo) {
  if (resultadoCiclo === resultadoMetodo) {
    console.log(nombre + ": OK");
  } else {
    console.log(nombre + ": DIFERENTE");
    console.log("Resultado ciclo:", resultadoCiclo);
    console.log("Resultado método:", resultadoMetodo);
  }
}

// Comparación 1: Total vendido
verificar(
  "Total vendido",
  analitica.totalVendido(ventas),
  analitica.totalVendidoM(ventas)
);

// Comparación 2: Unidades vendidas
verificar(
  "Unidades vendidas",
  analitica.totalUnidades(ventas),
  analitica.unidadesVendidasM(ventas)
);

// Comparación 3: Ventas por ciudad
verificar(
  "Ventas por ciudad (Medellín)",
  analitica.ventasDeCiudad(ventas, "Medellín"),
  analitica.ventasPorCiudadM(ventas, "Medellín")
);

// agrupacionesssss
console.log("\nTOTAL VENDIDO POR CIUDAD:");
console.log(analitica.totalPorCiudad(ventas));

console.log("\nUNIDADES POR PRODUCTO:");
console.log(analitica.unidadesPorProducto(ventas));

console.log("\nTOP 3 PRODUCTOS POR VALOR:");
console.log(analitica.topProductosPorValor(ventas, 3));

// Comprobar que el arreglo original conserva su orden.
console.log("\nORDEN ORIGINAL DE VENTAS:");
console.log(
  JSON.stringify(ventas) === ventasOriginales ? "OK" : "DIFERENTE"
);
