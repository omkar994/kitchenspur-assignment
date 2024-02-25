const mongoose = require('mongoose');
const mongoURI ='mongodb://127.0.0.1:27017/KitchenSpurs';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect( mongoURI , { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { 
    connectToMongoDB 
};