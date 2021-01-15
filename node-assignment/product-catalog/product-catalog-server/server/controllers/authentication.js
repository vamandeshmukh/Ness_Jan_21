const jwt = require( 'jsonwebtoken' );
const mongoose = require( 'mongoose' );
const Member = mongoose.model( 'Member' );

const AuthenticationCtrl = {};

AuthenticationCtrl.login = function( req, res ) {
    if( req.body ) {
        var username = req.body.username;
        var password = req.body.password;
    } else {
        return res.status( 400 ).json({
            message: 'Username and password are required'
        });
    }
    
    Member.findOne( { username, password }, function( error, user ) {
        if( error || !user ) {
            return res.status( 401 ).json({
                message: 'Authentication failed - username or password is incorrect'
            });
        }

        const claims = {
            _id: user._id,
            name: user.name,
            username: user.username,
            role: user.role
        };

        jwt.sign( claims, 'shh...', { expiresIn: '24h' }, function( error, token ) {
            if( error ) {
                return res.status( 500 ).json({
                    message: error.message
                });
            }

            res.status(200).json({
                message: 'Authentication succeeded - you are now logged in',
                token: token,
                name: user.name,
                username: user.username
            });
        });
    });
};

AuthenticationCtrl.logout = function( req, res ) {
    res.end();
};

module.exports = AuthenticationCtrl;