const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const courses = data.courses
const footer_links = data.footer_links
const tecnologies = data.tecnologies

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function (req, res) {
    res.render("about", {  courses, footer_links, tecnologies })

    server.use(function (req, res) {
        res.status(404).render("not-found");
    });
})

server.get("/courses", function (req, res) {
    res.render("courses", { courses, footer_links, tecnologies })

    server.use(function (req, res) {
        res.status(404).render("not-found");
    });
})

server.listen(5000, function () {
    console.log('server is running')
})