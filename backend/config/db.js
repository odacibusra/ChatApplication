const mongose = require("mongoose");
const color = require("colors");

const connectDB = async () => {
    try {
        const conn = await mongose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology:true
            })
        console.log(`MongoDB Connection Succesfull`.blue.bold)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports = connectDB;