const ventas= require("./datos");

//----Registros-Cantidad//
console.log("Cantidad de registros: ")
console.log(ventas.length);

//------Primer y último registro-----//
console.log("Primer registro:");
console.log(ventas[0]);

console.log("Último registro:");
console.log(ventas[ventas.length -1]);

//----Producto en la posición 4-----//
console.log("Posición 4 de propiedad producto en el registro:");
console.log(ventas[4].producto);

//-----Tabla de ventas-----//
console.log("Tabla de ventas:");
console.table(ventas);

