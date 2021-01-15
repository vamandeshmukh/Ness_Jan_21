const ReviewsHelper = require( './reviewsHelper' );
const getController = require( './getController' );

const mongoose = require( 'mongoose' );
const Product = mongoose.model( 'Product' );
const ProductCtrl = getController( Product, 'name' );

ProductCtrl.Reviews = {};

ProductCtrl.Reviews.getAll = function( req, res ) {
    const productId = req.params.id;

    ReviewsHelper.getAll( res, 'productId', productId );
};

ProductCtrl.Reviews.post = function( req, res ) {
    const productId = req.params.id;
    const memberId = req.query.memberId;

    ReviewsHelper.post( req, res, productId, memberId );
};

ProductCtrl.Reviews.delete = function( req, res ) {
    const productId = req.params.id;
    const memberId = req.query.memberId;

    ReviewsHelper.delete( res, productId, memberId );
};

module.exports = ProductCtrl;