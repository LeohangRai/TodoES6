import CustomError from "../errors/CustomError"

class BaseService {
  constructor(model) {
    this.model = model
    this.create = this.create.bind(this)
    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.updateById = this.updateById.bind(this)
    this.deleteById = this.deleteById.bind(this)
  }

  async create(payload) {
    try {
      let data = await this.model.forge(payload).save()
      return {
        data,
      }
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async findAll() {
    try {
      let data = await this.model.fetchAll()
      return {
        data,
      }
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async findById(id) {
    try {
      const data = await this.model.where({ id }).fetch({ require: true })
      return {
        data,
      }
    } catch (err) {
      throw CustomError.errorFinder(err, this.model.getTableName())
    }
  }

  async updateById(id, payload) {
    try {
      const row = await this.model.where({ id }).fetch({ require: true })
      const data = await row.save(payload)
      return {
        data,
      }
    } catch (err) {
      throw CustomError.errorFinder(err, this.model.getTableName())
    }
  }

  async deleteById(id) {
    try {
      const row = await this.model.where({ id }).fetch({ require: true })
      await row.destroy()
      return {
        message: `${this.model.getTableName()} deleted successfully`,
      }
    } catch (err) {
      throw CustomError.errorFinder(err, this.model.getTableName())
    }
  }
}

export default BaseService
