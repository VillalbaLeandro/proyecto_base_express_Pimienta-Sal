const platos = [
    {
        id: 1,
        tittle: "Carpaccio fresco",
        description: "Entrada Carpaccio de salmón con cítricos",
        price: "U$S 65.50",
        img: "/images/Carpaccio-de-salmon.jpg"
    },
    {
        id: 2,
        tittle: "Risotto de berenjena",
        description: "Risotto de berenjena y queso de cabra",
        price: "U$S 47.00",
        img: "/images/Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id: 3,
        tittle: "Mousse de arroz",
        description: "Mousse de arroz con leche y aroma de azahar",
        price: "U$S 27.50",
        img: "/images/Mousse-de-arroz-con-leche.jpg"

    },
    {
        id: 4,
        tittle: "Espárragos blancos",
        description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        price: "U$S 37.50",
        img: "/images/esparragos.png"

    },
]
const mainControllers = {
    index: (req, res) => {
        res.render('index', { platos })
    },
    detalle: (req, res) => {
        
        const plato = platos.find((plato) => plato.id==req.params.id);
        if(!plato){
            return res.send("plato atipico")
        }
        return res.render("detalleMenu", {plato})
    },
};

module.exports = mainControllers;