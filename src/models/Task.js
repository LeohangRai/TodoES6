import bs from "../config/bookshelf.js"

const tableName = "tasks"
const Task = bs.model(
  "Task",
  {
    // Instance properties and methods are defined here
    tableName: tableName,
  },
  {
    // Static class properties and methods
    getTableName: function () {
      return tableName
    },

    // update: function(data) {
    //     this.where({ id }).fetch({ require: true })
    // }
  }
)

// console.log(Task.getTableName());
// console.log(Task.fetchAll());
// console.log(Task);
export default Task
