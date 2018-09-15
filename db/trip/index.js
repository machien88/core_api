'use strict';
const tripSchema = require('./trip.schema');
const tripClassMethods = require('./trip.classMethods');

class Trip {
    getDefinition(sequelize, DataTypes) {
        let schema = tripSchema.getSchema(DataTypes);
        let options = { freezeTableName: true, timestamps: false };
        let model = sequelize.define('trip', schema, options);
        tripClassMethods.getClassMethods(model);
        return model;
    }
}

module.exports = (sequelize, DataTypes) => {
    let trip = new Trip();
    return trip.getDefinition(sequelize, DataTypes);
}