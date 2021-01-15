const getController = require( './getController' );
const mongoose = require( 'mongoose' );
const Review = mongoose.model( 'Review' );

module.exports = getController( Review );