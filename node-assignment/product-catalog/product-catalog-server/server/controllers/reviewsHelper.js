const mongoose = require( 'mongoose' );
const async = require( 'async');

const Product = mongoose.model( 'Product' );
const Member = mongoose.model( 'Member' );
const Review = mongoose.model( 'Review' );

const ReviewsHelper = {};

ReviewsHelper.getAll = function( res, searchParam, searchValue ) {
    Review
        .find( { [searchParam]: searchValue } )
        .exec(function( error, reviews ) {
            if( error ) {
                return res.status( 404 ).json({
                    message: error.message
                });
            }

            return res.status( 200 ).json( reviews );
        });
};

ReviewsHelper.post = function( req, res, productId ) {    
    async.parallel(
        {
            productName: function( done ) {
                Product.findById( productId, function( error, product ) {
                    if( error ) {
                        return done( error );
                    }

                    done( null, product.name );
                });
            }
        },
        function( error, results ) {
            if( error ) {
                return res.status( 404 ).json({
                    message: error.message
                });
            }

            Review
                .create(
                    {
                        ...req.body,
                        productId: productId,
                        productName: results.productName,
                        reviewerId: req.user._id,
                        reviewer: req.user.name
                    },
                    function( error, updatedDoc ) {
                        if( error ) {
                            return res.status( 404 ).json({
                                message: error.message
                            });
                        }

                        return res.status( 200 ).json( updatedDoc );
                    }
                );
        }
    );
};

ReviewsHelper.delete = function( res, productId, memberId ) {
    Review
        .findOneAndDelete({
            productId: productId,
            reviewerId: memberId
        })
        .exec(function( error ) {
            if( error ) {
                return res.status( 404 ).json({
                    message: error.message
                });
            }

            return res.status( 204 ).end();
        });
};

module.exports = ReviewsHelper;