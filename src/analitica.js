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
function valorVenta(venta) {
    return venta.cantidad * venta.precio;
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
    if (venta.cantidad > 0) {
      total += valorVenta(venta);
    }
  }
  return total;
}

/**
 * Suma todas las unidades vendidas en las órdenes válidas (cantidad > 0).
 * Patrón sugerido: Acumulador.
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {number} Total de unidades vendidas.
 */
function totalUnidades(ventas) {
  let unidades = 0;

  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      unidades += venta.cantidad;
    }
  }
  return unidades;
}

/**
 * Devuelve el objeto completo de la venta con mayor valor total (cantidad * precio).
 * Patrón sugerido: Búsqueda de extremo (máximo).
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object|null} El objeto de la venta más alta.
 */
function ventaMayorValor(ventas) {
   let mayor = null;

  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
        mayor = venta;
      }
    }
  }
  return mayor;
}

/**
 * Devuelve un nuevo arreglo con las ventas válidas de una ciudad específica,
 * sin importar diferencias de mayúsculas/minúsculas (ej. "Medellín" vs "medellín").
 * Patrón sugerido: Filtro manual con normalización de texto (.trim().toLowerCase()).
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @param {string} ciudad - Nombre de la ciudad a buscar.
 * @returns {Array} Nuevo arreglo con las ventas de esa ciudad.
 */
function ventasDeCiudad(ventas, ciudad) {
    let total = 0;

  for (const venta of ventas) {
    if (
      venta.cantidad > 0 &&
      venta.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase()
    ) {
      total += valorVenta(venta);
    }
  }
  return total;
}

/**
 * Calcula el promedio de dinero por venta, dividiendo el total vendido
 * únicamente entre la cantidad de ventas válidas (cantidad > 0).
 * Patrón sugerido: Acumulador + Contador combinados.
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {number} Promedio por venta válida.
 */
function promedioPorVenta(ventas) {
  let total = 0;
  let contador = 0;
  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      total += valorVenta(venta);
      contador++;
    }
  }
  if (contador === 0) {
    return 0;
  }
  return total / contador;
}

// ============================================================================
// MINIRRETO 3: Métodos de arreglo (.filter, .map, .reduce, .sort) y Top K
// Requisito: Resolver usando métodos de arreglos sin mutar el arreglo original.
// Guía recomendada: patrones/03-filter-map-reduce.js, 04-objetos-como-diccionarios.js
//                   y 05-ordenar-inmutable-y-top-k.js
// ============================================================================

/**
* Calcula el total vendido usando métodos de arreglos. 
* Método sugerido: .filter()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Array} Ventas con cantidad > 0.
 */

function totalVendidoM(ventas) {
  return ventas
    .filter(venta => venta.cantidad > 0)
    .map(venta => valorVenta(venta))
    .reduce((total, valor) => total + valor, 0);
}

/**
 * Calcula las unidades vendidas usando métodos de arreglos.
 * Método sugerido: .filter() seguido de .map()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Array} Arreglo de objetos resumidos.
 */

function unidadesVendidasM(ventas) {
  return ventas
    .filter(venta => venta.cantidad > 0)
    .map(venta => venta.cantidad)
    .reduce((total, cantidad) => total + cantidad, 0);
}

/**
 * Agrupa y suma el valor total vendido por cada ciudad normalizada en minúsculas.
 * Ejemplo de salida: { medellín: 356000, bogotá: 276000, ... }
 * Patrón sugerido: Objeto como diccionario con .reduce()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object} Diccionario { [ciudadNormalizada]: totalVendido }.
 */

function ventasPorCiudadM(ventas, ciudad) {
  return ventas
    .filter(venta =>
      venta.cantidad > 0 &&
      venta.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase()
    )
    .map(venta => valorVenta(venta))
    .reduce((total, valor) => total + valor, 0);
}

/**
 * Agrupa el dinero vendido por cada ciudad.
 * Normaliza los nombres para evitar grupos duplicados.
 */
function totalPorCiudad(ventas) {
  return ventas.reduce((totales, venta) => {
    if (venta.cantidad > 0) {
      const ciudad = venta.ciudad.trim().toLowerCase();

      if (ciudad === "medellín") {
        var nombre = "Medellín";
      } else if (ciudad === "bogotá") {
        var nombre = "Bogotá";
      } else if (ciudad === "cali") {
        var nombre = "Cali";
      } else if (ciudad === "pereira") {
        var nombre = "Pereira";
      }
      if (totales[nombre] === undefined) {
        totales[nombre] = 0;
      }
      totales[nombre] += valorVenta(venta);
    }
    return totales;
  }, {});
}

/**
 * Agrupa y suma el total de unidades vendidas por cada producto.
 * Ejemplo de salida: { "Origen Huila 500 g": 7, "Origen Nariño 250 g": 6, ... }
 * Patrón sugerido: Objeto como diccionario con .reduce()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object} Diccionario { [producto]: totalUnidades }.
 */

function unidadesPorProducto(ventas) {
  return ventas.reduce((totales, venta) => {
    if (venta.cantidad > 0) {
      const producto = venta.producto;
      if (totales[producto] === undefined) {
        totales[producto] = 0;
      }
      totales[producto] += venta.cantidad;
    }
    return totales;
  }, {});
}

/**
 * Devuelve un arreglo con los nombres de los `k` productos que más dinero generaron,
 * ordenados de mayor a menor valor vendido.
 * Ejemplo con k = 3: [ "Origen Huila 500 g", "Origen Sierra 500 g", "Prensa francesa" ]
 * Patrón sugerido: Diccionario con .reduce() -> Object.entries() -> .sort() -> .slice(0, k) -> .map()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @param {number} k - Cantidad de productos a incluir en el ranking.
 * @returns {Array<string>} Nombres de los k productos con mayor valor vendido.
 */

function topProductosPorValor(ventas, k) {
  const totales = ventas.reduce((acumulador, venta) => {
    if (venta.cantidad > 0) {
      const producto = venta.producto;

      if (acumulador[producto] === undefined) {
        acumulador[producto] = 0;
      }
      acumulador[producto] += valorVenta(venta);
    }
    return acumulador;
  }, {});

  const ranking = [...Object.entries(totales)];
  ranking.sort((a, b) => b[1] - a[1]);

  return ranking.slice(0, k).map(([producto, valor]) => ({
    producto,
    valor
  }));
}

//Funciones

module.exports = {
  valorVenta,
  totalVendido,
  totalUnidades,
  ventaMayorValor,
  promedioPorVenta,
  ventasDeCiudad,
  totalVendidoM,
  unidadesVendidasM,
  ventasPorCiudadM,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor
};


