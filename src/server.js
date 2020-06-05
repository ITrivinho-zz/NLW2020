const express = require("express")
const server = express()


// config public dir
server.use(express.static("public"))


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
    return res.render("create-point.html")
}) 

server.get("/search", (req, res) => {
    return res.render("search-results.html")
}) 

// turn the server on
server.listen(3000)
