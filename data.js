// Simulación de interacción con la base de datos

let products = [
    { id: 1, lugar: 'Gran Cafe | Tuxtla Gutierrez, Chiapas', nombreEvento: 'Café Concert', direccion: 'Estadio Panchon Contreras, Tuxtla Gutierrez, Chiapas', fecha: '22/11/2023', hora: '3:00 Pm', localidades: 'Vip Preferente General' },
    { id: 2, lugar: 'Kings of leons | United State', nombreEvento: 'Kings of leons', direccion: '169 Main Street, Springfield, IL 62701', fecha: '25/11/2023', hora: '8:00 Pm', localidades: 'Vip Preferente General' },
    {
        id: 3,
        lugar: "Molotov Fest | Avenida Central 456, Ciudad del Carmen",
        nombreEvento: "Molotov Fest",
        direccion: "Teatro del Este, CDMX",
        fecha: "29/11/2023",
        hora: "10:00 Pm",
        localidades: "Vip, Preferente, General",
    },
    {
        id: 4,
        lugar: "Concert Fest | Ciudad Capital",
        nombreEvento: "Concert Fest",
        direccion: "Teatro Municipal de la Ciudad, Calle Principal 123,",
        fecha: "30/11/2023",
        hora: "5:00 Pm",
        localidades: ["Vip", "Preferente", "General"],
    },
    {
        id: 5,
        lugar: "Conciertito de Rock | Tuxtla Gutiérrez, Chiapas",
        nombreEvento: "Conciertito de Rock",
        direccion: "Estadio Panchón Contreras",
        fecha: "04/12/2023",
        hora: "7:30 Pm",
        localidades: ["Vip", "Preferente", "General"],
    },
    {
        id: 6,
        lugar: "Rock Bones | CDMX",
        nombreEvento: "Rock Bones",
        direccion: "Angel de la independencia",
        fecha: "06/12/2023",
        hora: "11:00 Pm",
        localidades: ["Vip", "Preferente", "General"],
    }
    // ... Otros productos
];

let cart = [];

const getProducts = () => products;

const addToCart = (product) => {
    cart.push(product);
};

const getCart = () => {
    return cart;
};

module.exports = {
    getProducts,
    addToCart,
    getCart,
};