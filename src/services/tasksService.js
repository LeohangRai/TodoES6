import BaseService from "./baseService"
import Task from "../models/Task"

class TasksService extends BaseService {
  constructor(model) {
    super(model)
  }
}

export default new TasksService(Task)
