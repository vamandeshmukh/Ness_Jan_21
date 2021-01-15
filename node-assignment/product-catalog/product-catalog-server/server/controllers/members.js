const ReviewsHelper = require( './reviewsHelper' );
const getController = require( './getController' );

const mongoose = require( 'mongoose' );
const Member = mongoose.model( 'Member' );
const MemberCtrl = getController( Member, 'name' );

MemberCtrl.changePassword = function( req, res ) {
    const password = req.body.password;
    const newPassword = req.body.newPassword;

    Member.findOne(
        {
            username : req.session.username,
            password : password
        },
        function( error, member ) {
            if( error ) {
                return res.status( 401 ).json({
                    message: 'Incorrect password'
                });
            }

            member.password = newPassword;
            member.save(function( error, updatedMember ) {
                if( error ) {
                    return res.status( 500 ).json({
                        message: 'Update password failed'
                    });
                }

                res.status( 200 ).json({
                    message: 'Password updated successfully'
                });
            });
        }
    );
}


MemberCtrl.Reviews = {};

MemberCtrl.Reviews.getAll = function( req, res ) {
    const memberId = req.params.id;

    ReviewsHelper.getAll( res, 'memberId', memberId );
};

MemberCtrl.Reviews.post = function( req, res ) {
    const memberId = req.params.id;
    const productId = req.query.productId;

    ReviewsHelper.post( res, productId, memberId );
};

MemberCtrl.Reviews.delete = function( req, res ) {
    const memberId = req.params.id;
    const productId = req.query.productId;

    ReviewsHelper.delete( res, productId, memberId );
};

module.exports = MemberCtrl;