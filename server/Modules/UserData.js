const mongoose = require("mongoose")

const UserData = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:true,
    },
    passward: {
        type: string,
        required:true,
    }
})

const UsersData = new mongoose.model("USER", UserData);

module.exports = UsersData;