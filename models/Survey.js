// models/Survey.js
const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    restaurantId: {
        type: Number,
        required: true
    },
    date: {
        type: String, // YYYY-MM-DD 형식
        required: true
    },
    timeSlot: {
        type: String, // HH:mm 형식
        required: true
    },
    count: {
        type: Number,
        default: 0
    }
});

surveySchema.index({ restaurantId: 1, date: 1, timeSlot: 1 }, { unique: true });

module.exports = mongoose.model('Survey', surveySchema);
