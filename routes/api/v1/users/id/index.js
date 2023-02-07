'use strict'

const users = require("../../../../../Database/users/usersData")

module.exports = async function (fastify, opts) {
    fastify.get('/:id', async function (request, reply) {
      const {id} = request.params
      let user;
      
      for(let i = 0; i<users.length; i++){
        if(users[i].id == id){
          user = users[i];
          break;
        }
      }
      if(user){
        reply.code(200).send(user);
      }
      else{
        const emptyResponse ={
          "Error": "Id not Registered."
        }
        reply.code(404).send(emptyResponse)
      }
    })
  }