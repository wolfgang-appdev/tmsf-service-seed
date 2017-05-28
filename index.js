const TMSF = require("tmsf");
const config = require("./config.js");

const mongodb = new TMSF.MongoDB(config.dependencies.mongodb);
const logger = new TMSF.Logger(config.dependencies.logger);
const authProvider = new TMSF.AuthProvider(config.dependencies.authProvider);
const dependencies = { mongodb, logger, authProvider };

const service = new TMSF.Service(config.settings, dependencies);
const server = service.start();
