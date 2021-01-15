const mongoose = require( 'mongoose' );

const ReviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    reviewer: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    starRating: {
        type: Number,
        required: true
    },
    title: String,
    text: {
        type: String,
        required: true
    }
});

const Review = mongoose.model( 'Review', ReviewSchema );

module.exports = {
    model: Review,
    schema: ReviewSchema
};