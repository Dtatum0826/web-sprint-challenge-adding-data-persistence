// build your server here and require it from index.js
const express = require('express')


const taskRouter = require('./task/router')
const resourceRouter = require('./resource/router')
 const projectRouter = require('./project/router')

const server = express()

server.use(express.json())
server.use('/api/tasks', taskRouter)
 server.use('/api/resources', resourceRouter)
 server.use('/api/projects', projectRouter)



// server.use('*', (req,res)=>{
//     res.json({Server:' is up'})
// })



module.exports = server