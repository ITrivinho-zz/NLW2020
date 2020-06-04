const express = require("express")
const server = express()


// config public dir
server.use(express.static("public"))

// config the path of the aplication
// home page
// req -> requisição | res -> resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
}) 

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
}) 

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
}) 

// turn the server on
server.listen(3000)
