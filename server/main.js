import express from 'express'
import bp from 'body-parser'
import "./db/dbconfig"

import BlogController from './controllers/blogController'

let port = 3000
let server = express()
server.use(bp.json())
server.use('/', express.static(__dirname + '/../public')) //NOTE Points to the Public folder (front end)
server.use('/api/blogs', new BlogController().router) //REVIEW changed from blogger to blogs for test

function defaultErrorHandler(req, res, next) {
  res.status(404).send("route not found")
}

server.use('*', defaultErrorHandler)

server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("Your server is running on port: ", port, "you better go catch it!")
})