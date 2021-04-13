import { todoService } from "../services/TodoService";
import BaseController from "../utils/BaseController";


export class TodoController extends BaseController{
  constructor(){
    super("api/:user/todos")
    this.router
    .get('', this.getAll)
    .post('', this.createTodo)
    .put('/:id', this.editTodo)
    .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      req.query.user = req.params.user
      res.send(await todoService.getTodos(req.query))
    } catch (error) {
      next(error)
    }
  }
  async createTodo(req, res, next) {
    try {
      req.body.user = req.params.user
      res.send(await todoService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

    async editTodo(req, res, next) {
     try {
      req.body.user = req.params.user
      req.body.id = req.params.id
      res.send(await todoService.edit(req.body))
     } catch (error) {
       next(error)
     }
    }


    async delete(req, res, next) {
      try {
        await todoService.delete(req.params.id)
        res.send("Delorted")
        
      } catch (error) {
        next(error)
      }
    }
  
}