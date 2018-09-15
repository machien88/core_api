'use strict';
const mediaSchema = require('./media.schema');
const mediaClassMethods = require('./media.classMethods');

class Media {
    getDefinition(sequelize, DataTypes) {
        let schema = mediaSchema.getSchema(DataTypes);
        let options = { freezeTableName: true, timestamps: false };
        let model = sequelize.define('media', schema, options);
        mediaClassMethods.getClassMethods(model);
        return model;
    }
}

module.exports = (sequelize, DataTypes) => {
    let media = new Media();
    return media.getDefinition(sequelize, DataTypes);
}