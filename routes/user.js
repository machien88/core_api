const userHander = require('../core/user.handler')
const express = require('express')
var router = express.Router()
class UserRouter {
  registerRouters() {
    router.get('/list', (req, res, next) => {
      return userHander.getUser().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send(err)
      })
    })
    return router;
  }
}

let userRouter = new UserRouter()
module.exports = userRouter.registerRouters()