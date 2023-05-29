// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    getTasks,
    getById,
    insertTask
}

function getTasks(){
    return db('tasks as t')
    .join('projects as p', 't.project_id','p.project_id')
    
}
function getById(task_id){
    return db('tasks')
    .where({task_id})
    .first()
}

function insertTask(task){
    return db('tasks')
    .insert(task)
    .then(ids =>{
        return getById(ids[0])
    })
}