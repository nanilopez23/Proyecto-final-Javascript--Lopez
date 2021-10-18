//agregar objetos  




class producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.detalle = detalle
        this.cantidad = cantidad
        this.disponible = true
        this.hablar = function () { console.log("Caracteristicas del producto: " + " - " + nombre +" - " + precio + " - " + detalle + " - "+ cantidad) }
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

let listaProductos = []
do{
    let comprobacion = prompt ("ingrese el nombre del producto")
    if (comprobacion === "fin" || comprobacion === "Fin" || comprobacion === "FIN"){
        break
    }else{
        nombreProd = comprobacion
        let precioProd = prompt ("Ingrese el precio del producto")
        let detalleProd = prompt ("ingrese el detalle del producto")
        let cantidadProd = prompt ("Ingrese la cantidad comprada del producto")
        listaProductos.push (new producto(nombreProd, precioProd, detalleProd, cantidadProd))
    }
}
while (comprobacion != "fin" || comprobacion != "Fin" || comprobacion != "FIN")

console.log (listaProductos)

for (let producto of listaProductos){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>")
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>")
    document.write("<li><h3>El precio con IVA es: " + producto.sumarIva + "</h3></li></ul><br>")
    console.log(producto.nombre)
    console.log(producto.detalle)
    console.log(producto.cantidad)
    console.log(producto.recio)
    console.log(precio.sumarIva)
}


/*let precioProduct, cantidadProduct

let resultado = 0
function precioTotal (){
    precioProduct = parseInt(prompt("Ingrese el precio de la botella que desea comprar"));
    cantidadProduct = parseInt (prompt("Ingrese la cantidad de botellas que desea comprar"));
    document.write ("<h3>" + "El precio de su botella es de " + precioProduct + " y la cantidad de botellas que desea comprar es "+ cantidadProduct + "</h3"+ "<br>");
    if (cantidadProduct > precioProduct){
        alert("La cantidad no puede ser mayor que el precio")
    }
    if (cantidadProduct > 5){
        alert ("No puede pedir más de 5 unidades")
    }

        resultado = precioProduct * cantidadProduct
}

precioTotal(precioProduct,cantidadProduct)
console.log(resultado)
document.write ("<br>" + "El precio total sin descuento es de "+ resultado)

// descuentos por cantidad 

let precioDesc

function precioDescuentos (resultado, cantidadProduct){
    switch (cantidadProduct){
        case 1:
            precioDesc = resultado
        break
        case 2:
            precioDesc = resultado - (resultado * 0.05)
        break
        case 3: 
        precioDesc = resultado - (resultado * 0.1)
        break
        case 4: 
            precioDesc = resultado - (resultado * 0.15)
        break
        case 5: 
            precioDesc = resultado - (resultado * 0.20)
        break
        default:
            precioDesc = resultado 
            console.log("no hay descuento para dicha cantidad")
        break
    }
    console.log(precioDesc)
}
precioDescuentos(resultado,cantidadProduct)
document.write("<p>" + "<br>" + "El precio del total de producto con su desceunto de cantidad aplicado es de " +precioDesc + "</p>")

let cuotas = parseInt(prompt("Ingrese el número de cuotas que prefiera: "))
if (cuotas > 24){
    alert("Es preferible que pague en menos de 24 cuotas")
}
let precioCuotas

function precioXCuotas (precioDesc, cuotas){
    precioCuotas = precioDesc / cuotas
    console.log(Math.round(precioCuotas))
}
precioXCuotas(precioDesc, cuotas)

document.write("<br>" + "Usted tiene " + cuotas + " cuotas de " + Math.round(precioCuotas) + " sin impustos")

// precio con impuesto %21

let iva = 0.21
let precioDescIva, precioCuotasIva
function preciosIva (precioDesc, precioCuotas){
    precioCuotasIva = precioCuotas + precioCuotas * iva 
    precioDescIva = precioDesc + precioDesc * iva 
    console.log (precioDescIva)
    console.log (precioCuotasIva)

}
preciosIva(precioDesc, precioCuotas)

document.write("<br>" + "Su monto total a pagar con impuestos es de " + precioDescIva +" y su monto por cuota, con impuestos, es de " + Math.round(precioCuotasIva))
*/