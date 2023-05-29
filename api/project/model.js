// build your `Project` model here
const db =require('../../data/dbConfig')

module.exports ={
    getProjects,
    getById,
    insertProject
}

function getProjects(){
    return db('projects')
}


function getById(project_id){
return db('projects')
.where({project_id})
.first()
}


function insertProject(project){
    return db('projects')
    .insert(project)
    .then(ids =>{
        return getById(ids[0])
    })

}