module.exports = (req, res, dependencies) => {

    const { User } = dependencies.mongodb.getModels();

    const newUser = new User({
        email: "test@test.com",
        password: "password"
    });

    newUser.save( (err) => {
        if (err) console.log("error");
        return res.json({error: false});
    });

}
