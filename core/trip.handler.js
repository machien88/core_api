const db = require('../db')
const _ = require('lodash')

class TripHandler {
  async getTrip() {
    try {
      return await db.trip.findAll();
    } catch (error) {

    }
  }
}

module.exports = new TripHandler()