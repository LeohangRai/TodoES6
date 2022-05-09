import createTaskValidator from "@Validators/createTaskValidator"
import updateTaskValidator from "@Validators/updateTaskValidator"

export default {
  createTask: createTaskValidator,
  updateTask: updateTaskValidator,
}
