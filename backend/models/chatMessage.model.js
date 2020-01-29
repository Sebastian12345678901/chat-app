const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatMessageSchema = new Schema({
    userID:{
     type: String,
     required: true
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        
    },
     
}, {
    timestamps: true
})

const chatMessage = mongoose.model("Message", chatMessageSchema);

module.exports = chatMessage;