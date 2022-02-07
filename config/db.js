const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB Connected");
    } catch (err) {
        console.log(err.message);
    }
}


exports.connectDB = connectDB