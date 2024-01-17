class BaseService {
  constructor(model) {
    this.model = model;
  }

  async list(data) {
    return await this.model?.find(data || {});
  }
  async create(data) {
    return await this.model?.create(data);
  }
  async update(data, id) {
    return await this.model?.findByIdAndUpdate(id, data);
  }
  async delete(id) {
    return await this.model?.findByIdAndDelete(id);
  }
}
module.exports = BaseService;
