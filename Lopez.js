//agregar objetos  




class remeras {
    constructor(nombre, precio, estilo, talle) {
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.estilo = estilo
        this.talle = ["S", "M", "L"]
        this.hablar = function () { console.log("Caracteristicas de la prenda: " + " - " + nombre + " - " + precio + " - " + estilo + " - " + talle) }
    }
}

let remeraMen = new remeras ("Aviac", 3000 , "Remera Minimalista", "M" )
let remeraWom = new remeras ("Viking", 4000, "Remera Minimalista", "M")
remeraMen.hablar()
remeraWom.hablar()

class pantalones {
    constructor(nombre, precio, estilo, talle) {
        this.nombre = nombre
        this.precio = parseFloat (precio)
        this.estilo = estilo
        this.talle = ["S", "M", "L"]
        this.hablar = function () { console.log("Caracteristicas de la prenda: " + " - " + nombre + " - " + precio + " - " + estilo + " - " + talle) }
    }
}

let pantalonMen = new remeras ("Bell", 4000 , "Pantalon Minimalista", "38" )
let pantalonWom = new remeras ("Zara", 5000, "Pantalon Minimalista", "24")
pantalonMen.hablar()
pantalonWom.hablar()

//Array de productos 

const listaremeras = [remeraMen.nombre, remeraWom.nombre]
console.log(listaremeras)
const listapantalones = [pantalonMen.nombre, pantalonWom.nombre]
console.log(listapantalones)



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