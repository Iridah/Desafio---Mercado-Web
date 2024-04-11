//Constantes
const express = require ("express");
const app = express();
const exphbs = require("express-handlebars");
const handlebars = require('handlebars');
const fs = require('fs');

//Listener
app.listen(3000, ()=> {
    console.log("Servidor de pruebas funcionando en la frecuencia 3000");
})

// Motor de vistas && configuracion de express
app.set('view engine', 'hbs');
app.set('views', './views');
app.engine('hbs', hbs.engine);

// Middleware para archivos estáticos
app.use(express.static('public'));

//Carga de datos
let data;
try {
  data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
} catch (error) {
  console.error('Error al leer archivo JSON:', error);
  data = {};
}

//Definicion de rutas
app.get('/', (req, res) => {

    // Renderiza el dashboard con datos
    res.render('dashboard', { data });
  });

  app.get('/producto/:nombre', (req, res) => {
    const nombreProducto = req.params.nombre;
    const producto = obtenerProducto(nombreProducto); // Función para obtener el producto por nombre
    res.render('producto', { producto });
  });
  
// Importación de Handlebars partials
const hbs = handlebars.create();
hbs.registerPartials(__dirname + '/views/partials');