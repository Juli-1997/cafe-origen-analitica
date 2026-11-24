
const {
  valorVenta,
  totalVendido,
  totalUnidades,
  ventaMayorValor,
  promedioPorVenta,
  ventasDeCiudad
} = require("./analitica");

const ventas = [
  { id: 1, fecha: "2026-09-01", cliente: "C01", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 2, precio: 42000 },
  { id: 2, fecha: "2026-09-01", cliente: "C02", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 1, precio: 26000 },
  { id: 3, fecha: "2026-09-02", cliente: "C03", producto: "Prensa francesa", ciudad: "Cali", cantidad: 1, precio: 95000 },
  { id: 4, fecha: "2026-09-02", cliente: "C01", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 1, precio: 42000 },
  { id: 5, fecha: "2026-09-03", cliente: "C04", producto: "Origen Sierra 500 g", ciudad: "medellín", cantidad: 3, precio: 45000 },
  { id: 6, fecha: "2026-09-03", cliente: "C05", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 2, precio: 26000 },
  { id: 7, fecha: "2026-09-04", cliente: "C02", producto: "Molino manual", ciudad: "Bogotá", cantidad: 1, precio: 120000 },
  { id: 8, fecha: "2026-09-04", cliente: "C06", producto: "Origen Huila 500 g", ciudad: "Cali", cantidad: 0, precio: 42000 },
  { id: 9, fecha: "2026-09-05", cliente: "C03", producto: "Origen Sierra 500 g", ciudad: "Cali", cantidad: 2, precio: 45000 },
  { id: 10, fecha: "2026-09-05", cliente: "C07", producto: "Origen Huila 500 g", ciudad: "Pereira", cantidad: 4, precio: 42000 },
  { id: 11, fecha: "2026-09-06", cliente: "C01", producto: "Prensa francesa", ciudad: "Medellín", cantidad: 1, precio: 95000 },
  { id: 12, fecha: "2026-09-06", cliente: "C08", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 3, precio: 26000 },
];

const unaVenta = [
  { id: 1, cantidad: 2, precio: 5000, ciudad: "Medellín" }
];

// Arreglo vacío
const ventasVacias = [];

// Función para probar los tres casos
function probar(nombre, funcion) {
  console.log("\n========== " + nombre + " ==========");
  console.log("Arreglo completo:", funcion(ventas));
  console.log("Una sola venta:", funcion(unaVenta));
  console.log("Arreglo vacío:", funcion(ventasVacias));
}

// Pruebas
console.log("VALOR DE UNA VENTA");
console.log(valorVenta(ventas[0]));

probar("TOTAL VENDIDO", totalVendido);
probar("TOTAL DE UNIDADES", totalUnidades);
probar("VENTA MAYOR", ventaMayorValor);
probar("PROMEDIO POR VENTA", promedioPorVenta);

probar("VENTAS DE MEDELLÍN", (datos) =>
  ventasDeCiudad(datos, " medellín ")
);
