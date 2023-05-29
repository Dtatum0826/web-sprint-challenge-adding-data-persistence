// build your `/api/resources` router here
const express = require('express')

const Resources = require('./model')

const router = express.Router()

router.get('/', (req,res,next)=>{
    Resources.getResources()
    .then(resources =>{
res.json(resources)
    })
    .catch(next)
})

router.post('/',(req,res,next)=>{
    Resources.insertResource({
        
        resource_name:req.body.resource_name,
        resource_description:req.body.resource_description
    })
    .then(newResource =>{
        res.status(201).json(newResource)
    })
    .catch(next)
})





module.exports = router