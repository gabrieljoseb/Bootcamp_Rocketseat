const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    res.render("about")

    server.use(function(req, res) {
        res.status(404).render("not-found");
      });
})

server.get("/courses", function(req, res) {
    res.render("courses")

    server.use(function(req, res) {
        res.status(404).render("not-found");
      });
})

server.listen(5000, function() {
    console.log('server is running')
})