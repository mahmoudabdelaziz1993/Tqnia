const mongoose = require('mongoose')
const Schema = mongoose.Schema



const SubscribeSchema = Schema({
    email: { type: String, unique: true, required: true },
    channel: { type: String, required: true },
}, { timestamps: true })


module.exports = mongoose.model('Subscribe', SubscribeSchema)