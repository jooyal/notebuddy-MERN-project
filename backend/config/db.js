const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MongoDB connected at : ${conn.connection.host}`);

    } catch (error) {
        console.error(`Error : ${error}`);
        process.exit();
    }
}

module.exports = connectDB;