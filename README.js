<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Digital 2025</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <header>
        <h1>🛍️ Tienda Digital</h1>
        <div class="modo-oscuro">
            <span>🌙</span>
            <input type="checkbox" id="modoOscuroToggle">
        </div>
        <button id="verCarrito">🛒 <span id="cantidadCarrito">0</span></button>
    </header>

    <main>
        <div id="productos"></div>
    </main>

    <div id="carrito" class="carrito">
        <h2>🛒 Carrito de Compras</h2>
        <ul id="carritoLista"></ul>
        <p class="total">Total: <span id="totalCarrito">0.00</span> USD</p>
        <button id="vaciarCarrito">🗑 Vaciar Carrito</button>
    </div>

    <div id="notificacion" class="notificacion">✅ Producto agregado</div>
</body>
</html>
/* Estilos Generales */
body {
    font-family: 'Arial', sans-serif;
    text-align: center;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
    transition: background 0.3s;
}

header {
    background: #007bff;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
}

#productos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
}

.producto {
    background: white;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 200px;
    transition: transform 0.2s;
}

.producto:hover {
    transform: scale(1.05);
}

.producto img {
    width: 100%;
    border-radius: 10px;
}

.carrito {
    position: fixed;
    right: -300px;
    top: 0;
    width: 300px;
    height: 100vh;
    background: white;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    overflow-y: auto;
    transition: right 0.3s;
}

.carrito.abierto {
    right: 0;
}

.total {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}

.notificacion {
    position: fixed;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    background: green;
    color: white;
    padding: 10px;
    border-radius: 5px;
    transition: bottom 0.3s;
}

.notificacion.mostrar {
    bottom: 20px;
}

.modo-oscuro {
    display: flex;
    align-items: center;
    cursor: pointer;
}

body.dark {
    background: #222;
    color: white;
}

body.dark .carrito {
    background: #333;
    color: white;
}
const productos = [
    { id: 1, nombre: "Camiseta", precio: 20, imagen: "https://via.placeholder.com/150" },
    { id: 2, nombre: "Pantalón", precio: 35, imagen: "https://via.placeholder.com/150" },
    { id: 3, nombre: "Zapatos", precio: 50, imagen: "https://via.placeholder.com/150" },
];

let carrito = [];

const productosDiv = document.getElementById("productos");
const carritoDiv = document.getElementById("carrito");
const carritoLista = document.getElementById("carritoLista");
const totalCarrito = document.getElementById("totalCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const notificacion = document.getElementById("notificacion");

// Muestra los productos en la tienda
function mostrarProductos() {
    productosDiv.innerHTML = "";
    productos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productosDiv.appendChild(div);
    });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find((p) => p.id === id);
    carrito.push(producto);
    actualizarCarrito();

    notificacion.classList.add("mostrar");
    setTimeout(() => notificacion.classList.remove("mostrar"), 2000);
}

// Actualizar el carrito
function actualizarCarrito() {
    carritoLista.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;
        const li = document.createElement("li");
        li.innerHTML = `${producto.nombre} - $${producto.precio} 
            <button onclick="eliminarDelCarrito(${index})">❌</button>`;
        carritoLista.appendChild(li);
    });

    totalCarrito.textContent = total.toFixed(2);
    cantidadCarrito.textContent = carrito.length;
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Mostrar u ocultar carrito
document.getElementById("verCarrito").addEventListener("click", () => {
    carritoDiv.classList.toggle("abierto");
});

// Vaciar carrito
document.getElementById("vaciarCarrito").addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});

// Modo oscuro
document.getElementById("modoOscuroToggle").addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});

mostrarProductos();
