const mongoose = require("mongoose");

module.exports = mongoose.connect('mongodb+srv://rodrigo:1234@clusterangular.2quni.mongodb.net/db_produtos?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
