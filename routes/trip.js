const tripHander = require('../core/trip.handler')
const express = require('express')
var router = express.Router()
class TripRouter {
  registerRouters() {
    router.get('/list', (req, res, next) => {
      return tripHander.getTrip().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send(err)
      })
    })
    return router;
  }
}

let tripRouter = new TripRouter()
module.exports = tripRouter.registerRouters()