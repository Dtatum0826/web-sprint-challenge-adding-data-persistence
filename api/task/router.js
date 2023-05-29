// build your `/api/tasks` router here
const express = require('express')

const Tasks = require('./model')

const router = express.Router()

router.get('/',(req,res,next)=>{
  
    Tasks.getTasks()

    .then(tasks =>{
       tasks = tasks.map (task=>{
        if(task.task_completed === 1 ){
            task.task_completed = true
        } else task.task_completed = false
        return task
       })
        res.json(tasks)
    })
    .catch(next)
})


router.post('/',(req,res,next)=>{

 
    Tasks.insertTask({
        task_description:req.body.task_description,
        task_notes:req.body.task_notes,
        task_completed:req.body.task_completed,
        project_id:req.body.project_id
    })
    .then(newTask =>{
        if(newTask.task_completed === null){
            newTask.task_completed = false
        } else newTask.task_completed = true
        console.log(newTask)
        res.status(201).json(newTask)
    })
    .catch(next)
})




module.exports = router