const express = require('express')
const app = express();
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000


http.listen(PORT , ()=>{
console.log(`LISTENING ON  ${PORT} `)

})

app.use(express.static(__dirname + "/public"))

app.get('/' , (req , resp)=>{

resp.sendFile(__dirname + "/index.html")

})


// socket


const io = require('socket.io')(http)
io.on("connection" , (socket)=>{
console.log("connected successfully")

socket.on('message' , (mssg)=>{
// console.log(mssg)

socket.broadcast.emit('message' , mssg)


})


})


