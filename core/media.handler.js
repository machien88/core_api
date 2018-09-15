const db = require('../db')
const _ = require('lodash')

class MediaHandler {
  async getMedia() {
    try {
      return await db.media.findAll();
    } catch (error) {

    }
  }
}

module.exports = new MediaHandler()