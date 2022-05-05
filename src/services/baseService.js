class BaseService {
  constructor(model) {
    this.model = model
    this.create = this.create.bind(this)
    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.updateById = this.updateById.bind(this)
    this.deleteById = this.deleteById.bind(this)
  }

  async create(data) {
    try {
      let newObj = await this.model.forge(data).save()
      return newObj
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async findAll() {
    try {
      let objects = await this.model.fetchAll()
      return objects
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async findById(id) {
    try {
      const queryObj = await this.model.where({ id }).fetch({ require: true })
      return queryObj
    } catch (err) {
      if (err.message === "EmptyResponse") {
        throw new Error(
          `There are no ${this.model.getTableName()} for the given id`
        )
      }
      throw new Error(err.message)
    }
  }

  async updateById(id, data) {
    try {
      const obj = await this.model.where({ id }).fetch({ require: true })
      const updatedObj = await obj.save(data)
      return updatedObj
    } catch (err) {
      if (err.message === "EmptyResponse") {
        throw new Error(
          `There are no ${this.model.getTableName()} for the given id`
        )
      }
      throw new Error(err.message)
    }
  }

  async deleteById(id) {
    try {
      const obj = await this.model.where({ id }).fetch({ require: true })
      await obj.destroy()
      return "Deleted successfully"
    } catch (err) {
      if (err.message === "EmptyResponse") {
        throw new Error(
          `There are no ${this.model.getTableName()} for the given id`
        )
      }
      throw new Error(err.message)
    }
  }
}

export default BaseService
