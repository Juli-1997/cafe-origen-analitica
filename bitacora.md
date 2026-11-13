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