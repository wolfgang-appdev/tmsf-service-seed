const router = require("./handler/router.js");
const models = require("./models");

module.exports = {

    nodeEnv: process.env.NODE_ENV || "development",
    tokenSecret: process.env.TOKEN_SECRET || "super_duper_secret",
    router: router,

    endpoint: {
        host: process.env.NODE_HOST || "0.0.0.0",
        port: process.env.NODE_PORT || 3000
    },

    dependencies: {
        mongodb: {
            host: process.env.MONGODB_HOST || "0.0.0.0",
            port: process.env.MONGODB_PORT || 27017,
            name: process.env.MONGODB_NAME || "name",
            models: models
        }
    }

}
