module.exports = (req, res, dependencies) => {

    const { mongodb, logger } = dependencies;
    const { User } = mongodb.getModels();

    const newUser = new User({
        email: "test@test.com",
        password: "password"
    });

    newUser.save( (err) => {
        if (err) logger.error("some db error");
        return res.json({error: false});
    });

}
