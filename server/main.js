import express from 'express'
import bp from 'body-parser'
import './db/dbconfig'
let port = 3000

let server = express()

server.use(bp.json({ limit: '50mb' }))


//NOTE Register our routes here at some point


server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("your server is running on port: ", port, " You better go catch it!")
})