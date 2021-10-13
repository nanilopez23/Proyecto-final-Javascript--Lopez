// 04 Simulador Interactivo
/* Lo que busque hacer es que uno ingrese el precio de X producto y la cantidad.
teniendo e cuenta esos valores te calcule un descuento por cantidad*/

// solicitar al usuario que ingrese el precio de un producto y su cantidad 

let precioProduct, cantidadProduct

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
document.write(`<br>El precio del total de producto con su desceunto aplicado es de ${precioDesc}`)


