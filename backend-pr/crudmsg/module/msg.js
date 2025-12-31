const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Msg = mongoose.model("Msg", msgSchema);

module.exports = Msg;