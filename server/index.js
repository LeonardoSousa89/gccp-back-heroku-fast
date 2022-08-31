const dB=require('../dB/index')
const express=require('express')
const server=express.Router()

server.route('/').get(async(req, res)=>{
     await dB.select().table('data_message').then(response=>res.status(200).json(response))
                                                           .catch(err=>res.status(400).send(err))
}).post(async(req,res)=>{
    const data={ msg:req.body.msg}

    await dB.insert(data).table('data_message').then(response=>res.status(200).send([]))
                                                           .catch(err=>res.status(400).json(err))
})

module.exports=server 

//res.status(200).json(response)