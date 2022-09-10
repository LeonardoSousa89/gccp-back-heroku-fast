const port=process.env.PORT || 3003
const server=require('./server/index')
const cors=require('cors')
const express=require('express')
const application=express()


application.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods",['GET','POST'])
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    application.use(cors())
    next()
})
application.use(express.urlencoded({ extended:true }))
application.use(express.json())
application.use('/',server)

application.listen(port)

