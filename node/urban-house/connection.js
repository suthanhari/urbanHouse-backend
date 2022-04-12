const mongoose = require('mongoose');

exports.connect = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/myfirstdb');
        console.log("Connection Success");
        
    } catch (error) {
        
    }

}