'use strict';
class MediaSchema {
    getSchema(DataTypes) {
        return {
            media_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV1
            },
            user_id: {
                type: DataTypes.UUID,
            },
            trip_id: {
                type: DataTypes.UUID,
            },
            media_type: {
                type: DataTypes.STRING,
            },
            media_mime: {
                type: DataTypes.STRING,
            },
            media_slug: {
                type: DataTypes.STRING,
            },
            media_url: {
                type: DataTypes.STRING,
            },
            media_urls: {
                type: DataTypes.STRING,
            },
            media_thumb_url: {
                type: DataTypes.STRING,
            },
            Media_settings: {
                type: DataTypes.STRING,
            },
            media_title: {
                type: DataTypes.INTEGER,
            },
            media_description: {
                type: DataTypes.STRING,
            },
            media_lat: {
                type: DataTypes.STRING,
            },
            media_lng: {
                type: DataTypes.STRING,
            },
            media_lng: {
                type: DataTypes.STRING,
            },
            media_lng: {
                type: DataTypes.STRING,
            },
            media_address: {
                type: DataTypes.STRING,
            },
            media_size: {
                type: DataTypes.STRING,
            },
            media_date_create: {
                type: DataTypes.DATE,
            },
            media_date_take: {
                type: DataTypes.DATE,
            },
            media_value: {
                type: DataTypes.INTEGER,
            },
            media_highlight: {
                type: DataTypes.INTEGER,
            },
            media_showcase_time: {
                type: DataTypes.INTEGER,
            },
            media_status: {
                type: DataTypes.STRING,
            },
            media_index: {
                type: DataTypes.INTEGER,
            }
        };
    }
}
module.exports = new MediaSchema();