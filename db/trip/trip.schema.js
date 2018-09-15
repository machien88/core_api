'use strict';
class TripSchema {
    getSchema(DataTypes) {
        return {
            trip_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV1
            },
            user_id: {
                type: DataTypes.UUID,
            },
            trip_name: {
                type: DataTypes.STRING,
            },
            trip_slug: {
                type: DataTypes.STRING,
            },
            trip_summary: {
                type: DataTypes.STRING,
            },
            trip_distance: {
                type: DataTypes.INTEGER,
            },
            trip_start_day: {
                type: DataTypes.INTEGER,
            },
            trip_end_day: {
                type: DataTypes.INTEGER,
            },
            trip_date_create: {
                type: DataTypes.INTEGER,
            },
            trip_settings: {
                type: DataTypes.STRING,
            },
            trip_status: {
                type: DataTypes.INTEGER,
            },
            trip_meta: {
                type: DataTypes.STRING,
            },
            trip_explorer: {
                type: DataTypes.INTEGER,
            },
            trip_is_top: {
                type: DataTypes.INTEGER,
            }
        };
    }
}
module.exports = new TripSchema();