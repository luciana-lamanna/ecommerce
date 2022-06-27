function Apple() {
    let resultado = productos.filter((productos)=>productos.nombre.includes("Iphone"))   
    if(resultado != undefined) {
        let clear = document.getElementById("cajas");
        clear.remove()
        let iphones = document.createElement("div")
        iphones.innerHTML = ""
        document.div.append(iphones)
    }
}

function filtrarProductos(){
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.filter((productos)=> productos.nombre.includes(aBuscar))
        if(resultado != undefined) {
            console.clear()
            console.table(resultado)
        }
}

function buscarProducto (){
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.find((productos)=>productos.nombre.includes(aBuscar))
    console.clear()
    console.table(resultado)
}

function agregarAlCarrito(prod) {
    carrito.push(productos)
    const liNuevoProducto = document.createElement("li")
            liNuevoProducto.className = "collection-item blue-text"
            liNuevoProducto.innerText = prod
            liNuevoProducto.id = prod + "EnCarrito"
            liNuevoProducto.addEventListener("dblclick", () => {removerDelCarrito(`${liNuevoProducto.id}`)})
            carrito.append(liNuevoProducto)
}


// function generarCarrito(){
//     carrito.push(.....)
// }
// function calcularCarrito() {
//     let total = carrito.reduce()