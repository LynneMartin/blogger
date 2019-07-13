import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://LLM208:teeth208@cluster0-rt3sr.mongodb.net/blogs?retryWrites=true&w=majority' //NOTE changed from blogger to blogs for test

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//NOTE log any errors 
connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//NOTE Confirm connection
connection.once('open', () => {
  console.log("Connected to the DB!")
})