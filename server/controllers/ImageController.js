import { axiosService } from "../services/AxiosService";
import BaseController from "../utils/BaseController";


export class ImageController extends BaseController{
  constructor(){
    super("api/images")
    this.router
    .get("", this.getAll)
  }
  async getAll(req, res, next) {
    try {
      res.send(await axiosService.getImages())
    } catch (error) {
      next(error)
    }
  }
}