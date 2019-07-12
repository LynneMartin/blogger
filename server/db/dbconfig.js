import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://LLM208:teeth208@cluster0-rt3sr.mongodb.net/blogger?retryWrites=true&w=majority'

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