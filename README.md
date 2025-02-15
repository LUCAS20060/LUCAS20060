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
