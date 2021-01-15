const mongoose = require( 'mongoose' );

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    releaseDate: Date,
    description: String,
    price: {
        type: Number,
        required: true
    },
    starRating: Number,
    imageUrl: String
});

const Product = mongoose.model( 'Product', ProductSchema );

module.exports = {
    model: Product,
    schema: ProductSchema
};