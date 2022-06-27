class Producto {
    constructor (id, nombre, ram, rom, precio){
        this.id = id
        this.nombre = nombre
        this.ram = ram
        this.rom = rom
        this.precio = precio
    }
}

const producto1 = new Producto (1,"Samsung S22 Ultra", 12, 512, 230000)
const producto2 = new Producto (2,"Samsung Z Flip3", 8, 128, 120000)
const producto3 = new Producto (3,"Iphone 13 Pro Max", 12, 512, 250000)
const producto4 = new Producto (4,"Iphone 13", 8, 256, 210000)
const producto5 = new Producto (5,"Xiaomi Mi 11 Ultra", 10, 512, 200000)
const producto6 = new Producto (6,"Xiaomi Mi 11 Lite", 8, 256, 140000)

const productos = [producto1,producto2,producto3,producto4,producto5,producto6]
const carrito = []

// const Samsung = productos.filter((el) => el.nombre.includes('Samsung'))
// const Apple = productos.filter((el) => el.nombre.includes('Iphone'))
// const Xiaomi = productos.filter((el) => el.nombre.includes('Xiaomi'))

// const hola = document.querySelector("Iphone13ProMax")