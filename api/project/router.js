// build your `/api/projects` router here
const express = require('express')

const Projects= require('../project/model')

const router= express.Router()

router.get('/',(req,res,next)=>{
   
    Projects.getProjects()
    .then(projects=>{
       console.log(projects)
       projects = projects.map(project =>{
        if(project.project_completed === 1){
            project.project_completed = true
          } else project.project_completed = false
          return project
       }) 
      
        res.json(projects)
    })
    .catch(next)
})


router.post('/', (req,res,next)=>{


    Projects.insertProject({
       project_name : req.body.project_name,
       project_description : req.body.project_description,
       project_completed : req.body.project_completed
    })
    .then(newProject=>{

        if(newProject.project_completed === null){
            newProject.project_completed = false
        } else  newProject.project_completed = true
        console.log(newProject)
        res.status(201).json(newProject)
    })
    .catch(next)
})

module.exports = router