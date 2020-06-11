const { create, index } = require('./OngController');

const connection = require('../database/connection');
module.exports = {
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
    if (!ong_id) {
      console.log('Error');
      return;
    }

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  },
  async index(request, response) {
    const incidents = await connection('incidents').select('*');

    return response.json(incidents);
  }
};
