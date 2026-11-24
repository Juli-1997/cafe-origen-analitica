----------Diccionario de Datos
#Propiedad	 Tipo de dato	  Significado
#id	         Number	          Identificador único de cada venta.
#fecha	     String	          Fecha en la que se realizó la venta.
#cliente	 String	          Código que identificará al cliente.
#producto	 String	          Nombre del producto vendido.
#ciudad	     String	          Ciudad donde se realizó la venta.
#cantidad	 Number	          Número de unidades vendidas.
#precio	     Number	          Precio unitario del producto.

#-----Casos bordes detectados-----
#--1--En el registro número 5 aparece la ciudad escrita como "medellín", en lugar de Medellín.
#-Problema: Esta diferencia puede ocasionar que el sistema interprete la misma ciudad como dos lugares diferentes al agrupar las ventas.
#-Decisión: Normalizar los nombres de las ciudades utilizando mayúsculas y minúsculas de manera uniforme. Se utilizará "Medellín" como formato estándar.

#--2--En el registro número 8 aparece una cantidad de 0 unidades vendidas.
#-Problema: Una venta con cantidad cero puede ser un error de registro o representar una operación que no se completó.
#-Decisión: Conservar el registro original, pero marcarlo para revisión. No se incluirá en los cálculos de unidades vendidas hasta confirmar si corresponde a una venta válida.

#--3--En la muestra aparecen los códigos de los clientes, como: C01, C02, C03, C04, C05, C06, C07 y C08.
#-Problema: No se cuenta con información adicional para verificar si los códigos representan clientes únicos o si existen registros duplicados.
#-Decisión: Conservar los códigos originales y utilizarlos como identificadores de clientes. No se eliminarán registros solamente porque un cliente aparezca varias veces, ya que puede hacer múltiples compras.

#--4--El cliente C01 aparece en varias ventas y compra el mismo producto en diferentes fechas.
#-Problema: Si se eliminan registros únicamente porque tienen el mismo cliente y producto, se podrían perder ventas legítimas.
#-Decisión: Conservar todos los registros, ya que cada uno tiene un identificador de venta diferente. Antes de eliminar duplicados se deberá verificar el identificador y la información completa de cada operación.


PRUEBAS DE LAS FUNCIONES

Se probaron las funciones utilizando tres tipos de entradas:
- El arreglo completo.
- Un arreglo con una sola venta.
- Un arreglo vacío.

RESULTADOS DE LOS CASOS BORDE:

1. valorVenta: recibe una venta individual, por lo tanto no se prueba con un arreglo vacío.
2. totalVendido: devuelve 0 cuando no existen ventas.
3. totalUnidades: devuelve 0 cuando no existen ventas.
4. ventaMayorValor: devuelve null porque no existe una venta mayor.
5. promedioPorVenta: devuelve 0 porque no hay ventas válidas para calcular el promedio.
6. ventasDeCiudad: devuelve 0 porque no existen ventas de esa ciudad.

Los resultados obtenidos en las pruebas coinciden con los resultados esperados.

-TABLAS DE TRAZA MANUAL
Traza 1: totalVendido()

| Paso | Venta | Operación | Total |
| Inicio | - | Inicializar en 0 | 0 |
| 1 | A | 2 * 5000 | 10000 |
| 2 | B | 3 * 8000 | 34000 |
| 3 | C | 1 * 6000 | 40000 |

Resultado final: 40000.

Traza 2: promedioPorVenta()
| Paso | Venta | Acumulador | Contador |
| Inicio | - | 0 | 0 |
| 1 | A | 10000 | 1 |
| 2 | B | 34000 | 2 |
| 3 | C | 40000 | 3 |

Operación final: 40000 / 3 = 13333.33
Resultado final: 13333.33.

COMPROBACIÓN:
Los resultados de las trazas manuales coinciden
con los resultados obtenidos al ejecutar el programa.

