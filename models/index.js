const User = require("./User.js");

module.exports = {

    compile: (connection, mongoose) => {
        return {
            User: connection.model("User", User.getSchema(mongoose), "users")
        }
    }

}
