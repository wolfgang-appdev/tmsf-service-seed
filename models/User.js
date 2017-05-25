module.exports = {
    getSchema: (mongoose) => {
        return new mongoose.Schema({
            email:      {type: String,  required: true, unique: false},
            password:   {type: String,  required: true, unique: false}
        });
    }
}
