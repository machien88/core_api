'use strict';
class UserSchema {
    getSchema(DataTypes) {
        return {
            user_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV1
            },
            username: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            user_birthday: {
                type: DataTypes.DATE,
            },
            email: {
                type: DataTypes.STRING,
            },
            user_facebook_id: {
                type: DataTypes.STRING,
            },
            user_displayname: {
                type: DataTypes.STRING,
            },
            user_avatar: {
                type: DataTypes.STRING,
            },
            user_gender: {
                type: DataTypes.INTEGER,
            },
            user_address: {
                type: DataTypes.STRING,
            },
            user_coordinates: {
                type: DataTypes.FLOAT,
            },
            user_type: {
                type: DataTypes.INTEGER,
            },
            user_language: {
                type: DataTypes.STRING,
            },
            user_status: {
                type: DataTypes.INTEGER,
            },
            user_date_create: {
                type: DataTypes.INTEGER,
            },
            user_value: {
                type: DataTypes.INTEGER,
            },
            user_tutorial: {
                type: DataTypes.STRING,
            },
            user_last_login: {
                type: DataTypes.FLOAT,
            },
            user_last_report: {
                type: DataTypes.FLOAT,
            }
        };
    }
}
module.exports = new UserSchema();