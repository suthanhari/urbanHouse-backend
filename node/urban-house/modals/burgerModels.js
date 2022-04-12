const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    varients: [],
    price: [],
    category: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

const Burgermodel = mongoose.model('burger-data', clientSchema)
module.exports = Burgermodel
