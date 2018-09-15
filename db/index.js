'use strict';

const Sequelize = require('sequelize');
const config = require('config')
//const uuid = require('uuid');
const fs = require('fs');
let sequelize = null;

class Db {
    constructor() {
        console.log('constructor start');
        if (!sequelize) {
            console.log('creating singleton instance');
            console.log(`new instance of sequelize with config - dbname: ${config.db.dbname} - username: ${config.db.username} - dialect: ${config.db.options.dialect}`);
            
            let dialectOptions = config.db.options.dialectOptions || {};
            if (config.db.ssl !== undefined) {
                let ssl = {
                    ca : fs.readFileSync(config.db.ssl.ca),
                    cert : fs.readFileSync(config.db.ssl.cert),
                    key : fs.readFileSync(config.db.ssl.key)
                }
                dialectOptions['ssl'] = ssl;
            }
            if (config.db.socketPath !== undefined && config.db.socketPath !== '') {
                dialectOptions['socketPath'] = config.db.socketPath;
            }
            let options = config.db.options;
            options['dialectOptions'] = dialectOptions;
            console.log('connection config', options);

            sequelize = new Sequelize(config.db.dbname, config.db.username, config.db.password, options);
        }
    }

    connect() {
        console.log('connect start');
        let connectPromise = sequelize.authenticate()
            .then(() => {
                console.log('sequelize authenticated');
                return sequelize.sync()
                    .then(() => {
                        console.log('sequelize synced');
                        return sequelize;
                    })
            }).catch((error) => {
                throw error;
            })
        this.initModels();
        return connectPromise;
    }

    getSequelize() {
        
        return sequelize;
    }

    //merge the properties from models into this Db object
    initModels() {
        console.log('initialize models');
        this.user = sequelize.import('./user')
        this.trip = sequelize.import('./trip')
        this.media = sequelize.import('./media')

    }

    initData() {
    }
}

module.exports = new Db();
