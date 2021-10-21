// HICE VOY A HACER UN SISTEMA DE CONTROL DE INVENTRIO
//TODAVIA ESTOY EVALUANDO COMO LO VOY A HACER PERO ES UN BUEN COMIENZO 


//agregar objetos  

class producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.detalle = detalle
        this.cantidad = cantidad
        this.disponible = true
        //this.hablar = function () { console.log("Caracteristicas del producto: " + " - " + nombre +" - " + precio + " - " + detalle + " - "+ cantidad) }
    }
}

function sumarIva (){
    return this.precio * 1.21
}
function vender (){
    this.disponible = false 
}

function precioSugerido (){
    return this.precio * 1.21 * 1.25
}
//Array de productos 
let nombreProd, precioProd, detalleProd, cantidadProd
let listaProductos = []
do{
    nombreProd = prompt ("ingrese el nombre del producto").toLowerCase()
    precioProd = prompt ("Ingrese el precio del producto")
    detalleProd = prompt ("ingrese el detalle del producto")
    cantidadProd = prompt ("Ingrese la cantidad comprada del producto")
    listaProductos.push (new producto(nombreProd, precioProd, detalleProd, cantidadProd))
}while (nombreProd != "fin")



console.log (listaProductos)

for (let producto of listaProductos){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>")
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>")
    document.write("<li><h3>El precio con IVA es: " + producto.sumarIva + "</h3></li></ul><br>")
    console.log(producto.nombre)
    console.log(producto.detalle)
    console.log(producto.cantidad)
    console.log(producto.precio)
    //console.log(precio.sumarIva)
}

// Producto con poco Stock

let pocoStock = listaProductos.filter(producto => producto.cantidad <= 3)
console.log("producto con poco stock, comprar nuevamente: ")
console.log(pocoStock)
document.write("<h3> Lista de productos con poco stock (menos de 3 unidades): </h3>")

for (let producto of pocoStock){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>")
}

//Producto sin Stock

let sinStock = listaProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false)
console.log (sinStock)
document.write ("<h3> Lista de productos sin Stock (cantidad = 0 o disponible = false): </h3>")

for (let producto of sinStock){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>")
}

//buscar un producto por nombre ingresado 

let ingresado = prompt("Ingrese el nombre del producto que quiera buscar")
let prodIngresado = listaProductos.filter(producto => producto.nombre.includes(ingresado))
console.log(prodIngresado)
document.write("<h3> Lista de productos ingresados para busqueda: </h3>")

for (let producto of prodIngresado){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li></ul><br>")
}


//Ordenados por cantidad 

let ordenadosCantidad = []
ordenadosCantidad = listaProductos.map(elemento => elemento)
ordenadosCantidad.sort(function(a, b){
    return a.cantidad- b.cantidad
})
console.log ("Ordenados por Cantidad Ascendente: ")
console.log(ordenadosCantidad)
document.write("<h3> Lista de productos ordenados por cantidad:  </h3>")

for (let producto of ordenadosCantidad){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>")
}

//Ordenados por precio 
var ordenadosPrecio =[]
ordenadosPrecio = listaProductos.map(elemento => elemento)
var ordenadosPrecio = listaProductos
ordenadosPrecio.sort(function(a, b){
    return a.precio- b.precio
})
console.log("Ordenados por precios Ascendentes")
console.log(ordenadosPrecio)
document.write("<h3> Lista de productos ordenados por precio ascendente: </h3>")

for (let producto of ordenadosPrecio){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li></ul><br>")
}

