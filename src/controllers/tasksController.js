import BaseController from "@BaseController"
import tasksService from "@Services/tasksService"
class TasksController extends BaseController {
  constructor(service) {
    super(service)
  }
}

export default new TasksController(tasksService)
