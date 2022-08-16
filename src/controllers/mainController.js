const fs = require("fs");

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

        const plato = platos.find((plato) => plato.id == req.params.id);
        if (!plato) {
            return res.send("plato atipico");
        }
        return res.render("detalleMenu", { plato });
    },
    list: (req, res) => {
        let archivoJSON = fs.readFileSync("usuarios.json", {encoding: "utf-8"});
        let users = JSON.parse(archivoJSON);
        res.render('usersList', { "users": users });
    },
    search: (req, res) => {

        let loqueBuscoElUsuario = req.query.search;
        let archivoJSON = fs.readFileSync("usuarios.json", {encoding: "utf-8"});
        let users = JSON.parse(archivoJSON);
        
        let usersResults = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.includes(loqueBuscoElUsuario)) {
                usersResults.push(users[i]);
            };

        };

        res.render("usersResults", { usersResults });
    },
    register: (req, res) => {
        res.render("register");
    },
    create: (req, res) => {
        let usuario = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            email: req.body.email
        }
        // GUARDARLA   
        // leer que cosas ya habia
        let archivoUsuarios = fs.readFileSync("usuarios.json", { encoding: "utf-8" });
        let usuarios;
        if (!archivoUsuarios) {
             usuarios = [];
        } else{
            usuarios = JSON.parse(archivoUsuarios);
        }


        usuarios.push(usuario);

        usuariosJson = JSON.stringify(usuarios);
        fs.writeFileSync("usuarios.json", usuariosJson);



        res.redirect("/list");
    },
    edit: (req, res) => {
        let idUser = req.params.idUser;
        let users = [
            { id: 1, name: "dario" },
            { id: 2, name: "javier" },
            { id: 3, name: "maru" },
            { id: 4, name: "ale" },
            { id: 5, name: "Alan" },
        ];
        let userToEdit = users[idUser];
        res.render("userEdit", { userToEdit: userToEdit });
    }
}
module.exports = mainControllers;