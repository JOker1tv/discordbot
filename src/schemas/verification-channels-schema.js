const mongoose = require('mongoose');


const verificationChannelsSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    channelID: {
        type: String,
        required: true
    },
    roleID: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('verification-channels', verificationChannelsSchema);