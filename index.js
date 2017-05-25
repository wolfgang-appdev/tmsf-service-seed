const TMSF = require("tmsf");
const config = require("./config.js");

const mongodb = new TMSF.MongoDB(config.dependencies.mongodb);
const authProvider = new TMSF.AuthProvider(config.tokenSecret);
const service = new TMSF.Service(config, mongodb, authProvider);
const server = service.start();
