const express = require('express')
const server = express()

server.get("/", function(req, res) {
    res.render("about")
})

server.get("/courses", function() {
    res.render("courses")
})

server.listen(5000, function() {
    console.log('server is running')
})