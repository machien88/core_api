const db = require('../db')
const _ = require('lodash')

class UserHandler {
  async getUser() {
    try {
      return await db.user.findAll();
    } catch (error) {

    }
  }
}

module.exports = new UserHandler()