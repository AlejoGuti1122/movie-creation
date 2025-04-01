const CarritoCompra = require("../index")

describe("CarritoCompra", () => {
  let carrito

  beforeEach(() => {
    carrito = new CarritoCompra()
  })

  test("Debe inicializar un carrito vacío", () => {
    expect(carrito.productos).toEqual([])
  })

  test("Debe agregar un producto al carrito", () => {
    const producto = { nombre: "Laptop", precio: 1000 }
    carrito.agregarProducto(producto)
    expect(carrito.productos).toContain(producto)
  })

  test("Debe calcular el total de la compra correctamente", () => {
    carrito.agregarProducto({ nombre: "Laptop", precio: 1000 })
    carrito.agregarProducto({ nombre: "Mouse", precio: 50 })
    expect(carrito.calcularTotal()).toBe(1050)
  })

  test("Debe aplicar un descuento correctamente", () => {
    carrito.agregarProducto({ nombre: "Laptop", precio: 1000 })
    carrito.agregarProducto({ nombre: "Mouse", precio: 50 })
    expect(carrito.aplicarDescuento(10)).toBe(945)
  })
})
