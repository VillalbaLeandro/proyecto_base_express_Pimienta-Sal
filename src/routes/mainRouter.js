// Acá nos falta express y el router
const express = require("express");
const router= express.Router();
// Aća nos falta traer el controller
const mainControllers=require("../controllers/mainController")
// Acá definimos las rutas
router.get('/', mainControllers.index);
router.get('/detalle/:id', mainControllers.detalle);
router.get('/list', mainControllers.list);
router.get('/search', mainControllers.search);
router.get("/users/register", mainControllers.register);
router.post("/users/register", mainControllers.create);
router.get("/users/edit/:idUser", mainControllers.edit);
router.put("/users/edit", function(req, res){
    res.send("fui por put!")
});
router.delete("/users/delete/:idUser", (req, res)=>{
    res.send("esta viajando por delete")
})





// Acá exportamos el resultado
module.exports=router;