const mediaHander = require('../core/media.handler')
const express = require('express')
var router = express.Router()
class MediaRouter {
  registerRouters() {
    router.get('/list', (req, res, next) => {
      return mediaHander.getmedia().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send(err)
      })
    })
    return router;
  }
}

let mediaRouter = new MediaRouter()
module.exports = mediaRouter.registerRouters()