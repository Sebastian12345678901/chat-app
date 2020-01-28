const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const regSchema = new Schema({
    userID: {
        type: String,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        minlength: 3
    }

}, {
    timestamps: true
})

const regUser = mongoose.model("Reg", regSchema);

module.exports = regUser;