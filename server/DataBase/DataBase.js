const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./DataBase/DataBase" });

const DataBase = process.env.DATABASE;
mongoose.connect(DataBase)
    .then(() => {
        console.log("Data Base connnected ");
    })
    .catch((err) => {
        console.log("Not connected Error");
    });


module.exports = mongoose