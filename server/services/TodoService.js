import { dbContext } from "../db/DbContext"

class TodoService{

  async create(body) {
    return await dbContext.Todos.create(body)
  }
  async getTodos(query = {}) {
    return await dbContext.Todos.find(query)
  }
  async edit(body) {
   return await dbContext.Todos.findOneAndUpdate({_id: body.id}, body, {new:true})
  }

  async delete(id) {
    return await dbContext.Todos.findOneAndDelete({_id: id})
  }

}


export const todoService = new TodoService()