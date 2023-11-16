const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Puerto del servidor

app.use(bodyParser.json());
app.use(cors());

// Rutas de ejemplo para la API

// Simula una base de datos
const data = require('./data');

app.get('/api/products', (req, res) => {
    // Obtiene todos los productos
    const products = data.getProducts();
    res.json(products);
});

app.get('/api/cart', (req, res) => {
    const cartContent = data.getCart(); // Aquí deberías tener una función para obtener el contenido del carrito desde tu simulación de base de datos
    res.json(cartContent);
});


app.post('/api/add-to-cart', (req, res) => {
    // Añade un producto al carrito
    const product = req.body;
    data.addToCart(product);
    res.json({ message: 'Producto añadido al carrito' });
});

app.listen(port, () => {
    console.log(`Servidor API corriendo en http://localhost:${port}`);
});
