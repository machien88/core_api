'use strict';
const userSchema = require('./user.schema');
const userClassMethods = require('./user.classMethods');

class User {
    getDefinition(sequelize, DataTypes) {
        let schema = userSchema.getSchema(DataTypes);
        let options = { freezeTableName: true, timestamps: false };
        let model = sequelize.define('user', schema, options);
        userClassMethods.getClassMethods(model);
        return model;
    }
}

module.exports = (sequelize, DataTypes) => {
    let user = new User();
    return user.getDefinition(sequelize, DataTypes);
}