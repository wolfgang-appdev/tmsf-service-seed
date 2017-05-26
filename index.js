const TMSF = require("tmsf");
const config = require("./config.js");

const mongodb = new TMSF.MongoDB(config.dependencies.mongodb);
const authProvider = new TMSF.AuthProvider(config.settings.tokenSecret);
const dependencies = { mongodb, authProvider };
const service = new TMSF.Service(config.settings, dependencies);
const server = service.start();
