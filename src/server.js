const express = require("express")
const server = express()

// catch detabase
const db = require("./database/db")


// config public dir
server.use(express.static("public"))

// habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

// using template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// config the path of the aplication
// home page
// req -> requisição | res -> resposta
server.get("/", (req, res) => {
    return res.render("index.html")
}) 



server.get("/create-point", (req, res) => {

    // req.query -> Query Strings da nossa url
    // console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    
    // console.log(req.body)

    // inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            itens
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.itens
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)          
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
    
})

server.get("/search", (req, res) => {

    const search = req.query.search

    // if(search == "") {
    //     // pesquisa vazia
    //     return res.render("search-results.html", { total: 0 })
    // }

    // get the data from db

    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err);
        }

        const total = rows.length

        // send the html and the data
        return res.render("search-results.html", { places: rows, total })
       
    })

})

// turn the server on
server.listen(3000)