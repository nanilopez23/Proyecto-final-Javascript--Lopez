// HICE VOY A HACER UN SISTEMA DE CONTROL DE INVENTRIO
//TODAVIA ESTOY EVALUANDO COMO LO VOY A HACER PERO ES UN BUEN COMIENZO 







































/*(function (){
    let formulario = document.getElementsById("formulario")
        elementos = formulario.elementos
        boton = document.getElementById("buttom-cargar-producto")

        var validarNombre = function (e) {
            if (formulario.nombre.value == 0){
                alert("Completa el campo Nombre")
                e.preventDefault()
            }
        }
        var validarPrecio = function(e){
            if (formulario.precio.value == 0){
                alert("indique el precio del prodcuto")
                e.preventDefault()
            }
        }
        var validarRadio = function (e){
            if (formulario.tipo[0].checked == true || formulario.tipo[1].checked == true || formulario.tipo[2].checked == true ){
            }else {
                alert("completa el tipo de producto")
                e.preventDefault()
            }
        }
        var validarCantidad = function (e){
            if (formulario.cantidad.value == 0){
                alert("Ingrese la cantidad comprada")
                e.preventDefault()
            }
        }

        var validar = function (e){
            validarNombre(e)
            validarPrecio(e)
            validarRadio(e)
            validarCantidad(e)
        }
    formulario.addEventListener("submit", validar)
}())
console.log(validacion)
*/




/*class producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.detalle = detalle
        this.cantidad = cantidad
        this.precioIva = precio *1.21
        this.precioSugerido = precio *1.21 * 1.30
        this.disponible = true
        //this.hablar = function () { console.log("Caracteristicas del producto: " + " - " + nombre +" - " + precio + " - " + detalle + " - "+ cantidad) }
    }
}


//Array de productos 
let nombreProd, precioProd, detalleProd, cantidadProd
let listaProductos = []

do{
    nombreProd = document.getElementById("nombre-prducto")
    precioProd = document.getElementById("precio-producto")
    detalleProd = document.getElementById("detalle-producto")
    cantidadProd = document.getElementById("cantidad-producto")
    listaProductos.push (new producto(nombreProd, precioProd, detalleProd, cantidadProd))
}while (nombreProd != "fin")

console.log (listaProductos)



for (let producto of listaProductos){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>")
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>")
    document.write("<li><h3>El precio con IVA es: " + producto.precioIva + "</h3></li></ul><br>")
    console.log(producto.nombre)
    console.log(producto.detalle)
    console.log(producto.cantidad)
    console.log(producto.precio)
    //console.log(precio.sumarIva)
}

document.write("<h3> Precios de cada unidad de compra: </h3>" )
for (let producto of listaProductos){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>")
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>")
    document.write("<li><h3>Precio unitario con Iva: " + producto.precioIva + "</h3></li>")
    document.write("<li><h3>Precio por cantidad con Iva: " + producto.precioIva * producto.cantidad + "</h3></li>")
    document.write("<li><h3>El precio sugerido de venta por unidad es: " + producto.precioSugerido + "</h3></li></ul><br>")
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.cantidad)
    console.log(producto.precioIva)
    console.log(producto.precioIva * producto.cantidad)
    console.log(producto.precioSugerido)
}

// Producto con poco Stock

let pocoStock = listaProductos.filter(producto => producto.cantidad <= 10)
console.log("producto con poco stock, comprar nuevamente: ")
console.log(pocoStock)
document.write("<h3> Lista de productos con poco stock (menos de 10 unidades): </h3>")

for (let producto of pocoStock){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>")
}

//Producto sin Stock

let sinStock = listaProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false)
console.log (sinStock)
document.write ("<h3> Lista de productos sin Stock: </h3>")

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
}*/

