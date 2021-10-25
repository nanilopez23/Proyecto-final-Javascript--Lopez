var productList = []

function addProduct(pnombre, pprecio, ptipo, pcantidad){

    var newProduct = {
        nombre : pnombre,
        precio : pprecio,
        tipo : ptipo,
        cantidad : pcantidad

    }
    console.log(newProduct)
    productList.push(newProduct)
}
console.log(productList)

function getproductList(){
    return friendList
}