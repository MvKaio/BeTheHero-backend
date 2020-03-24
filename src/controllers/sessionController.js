const connection = require('../database/index')

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const inDb = await connection('ongs').where('id', id).select('name').first();

    if (inDb) {
      return response.json(inDb);
    }
    return response.status(400).json({ error: "This ONG is not defined in our system, please check for spelling issues" });
  }
}