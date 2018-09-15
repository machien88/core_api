const user = require('./user')
const trip = require('./trip')
const media = require('./media')
class RouterIndex {
    constructor(app) {
        this.app = app;
    }
    registerRoutes() {
        this.app.use('/user', user)
        this.app.use('/trip', trip)
        this.app.use('/media', media)
    }
}

module.exports = (app) => { return new RouterIndex(app) };