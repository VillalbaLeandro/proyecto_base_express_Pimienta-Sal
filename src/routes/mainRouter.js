// Acá nos falta express y el router
const express = require("express");
const router= express.Router();
// Aća nos falta traer el controller
const mainControllers=require("../controllers/mainController")
// Acá definimos las rutas
router.get('/', mainControllers.index);
router.get('/detalle/:id', mainControllers.detalle);



// Acá exportamos el resultado
module.exports=router;