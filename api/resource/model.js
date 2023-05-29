// build your `Resource` model here
const db = require('../../data/dbConfig')



module.exports = {
    getResources,
    getById,
    insertResource,
  };
  
  function getResources() {
    return db('resources');
  }
  
  function getById(id) {
    return db('resources').where({ resource_id: id }).first();
  }
  
  function insertResource(resource) {
    return db('resources')
      .insert(resource)
      .then(ids => {
        return getById(ids[0]);
      });
  }