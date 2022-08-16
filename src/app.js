// Módulos
const exp = require('constants');
const express = require('express');
const app = express();
const path = require("path");
const mainRouter=require("./routes/mainRouter");
const methodOverride = require("method-override");

// Acá falta uno... 😇
app.set("view engine", "ejs");
app.set("views",  path.join(__dirname, "views"));

// Configuración
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride("_method"));
// Acá falta el template engine

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', mainRouter);
// app.get('/detalleMenu', detalleMenu);






app.listen(3000, () => { console.log('Servidor arriba en el puerto http://localhost:3000 🤓👌');})