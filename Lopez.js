// HICE VOY A HACER UN SISTEMA DE CONTROL DE INVENTRIO
//TODAVIA ESTOY EVALUANDO COMO LO VOY A HACER PERO ES UN BUEN COMIENZO 

document.getElementById("buttom-cargar-producto").addEventListener("click", saveProduct)

function saveProduct(){
    var sNombre = document.getElementById("nombre-producto").value,
        sPrecio = document.getElementById("precio-producto").value,
        sTipo = document.getElementById("tipo-producto").value,
        sCantidad = document.getElementById("cantidad-producto").value

addProduct(sNombre,sPrecio,sTipo, sCantidad)
drawProduct()
}

function drawProduct(){
    var list = getproductList(),
        tbody = document.getElementById("mostrar__tbody")

    //tbody.innerHTML = " " 

    for (var i = 0; i < list.length; i++)
    var row = tbody.insertRow(index)
        nombreCell = row.insertCell(0),
        precioCell = row.insertCell(1),
        tipoCell = row.insertCell(2),
        cantidadCell = row.insertCell(3);

        nombreCell.innerHTML = list[i].nombre;
        precioCell.innerHTML = list[i].precio;
        tipoCell.innerHTML = list[i].tipo;
        cantidadCell.innerHTML = list[i].cantidad;

    var inputSelect = document.createElement("input")

    inputSelect.type = "radio"
    inputSelect.value = list[i].nombre
    selectCell.appendChild(inputSelect)



    tbody.appendChild(row)
}


