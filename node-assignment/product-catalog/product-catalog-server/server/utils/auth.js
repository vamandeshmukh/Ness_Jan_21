const jwt = require( 'jsonwebtoken' );

const Auth = {
    // authenticate : ( req, res, next ) => {
    //     console.log( 'req.url = ', req.url );
    //     const authorizationHeader = req.get( 'Authorization' ) || req.get( 'authorization' );
    //     const token = authorizationHeader.split( ' ' )[1];
    
    //     jwt.verify( token, 'shh...', function( error, claims ) {
    //         if( error ) {
    //             return res.status( 401 ).json({
    //                 message: 'You are not authorized to access this endpoint'
    //             });
    //         }

    //         console.log( 'claims = ', claims );
    
    //         req.user = claims;
    //         next();
    //     });
    // },
    authenticate : ( req, cb ) => {
        console.log( 'req.url = ', req.url );
        const authorizationHeader = req.get( 'Authorization' ) || req.get( 'authorization' );

        if( !authorizationHeader ) {
            return cb( false );
        }

        const token = authorizationHeader.split( ' ' )[1];
    
        jwt.verify( token, 'shh...', function( error, claims ) {
            if( error ) {
                return cb( false );
            }

            console.log( 'claims = ', claims );
    
            req.user = claims;
            cb( true );
        });
    },
    authorize: function permit( allowed ) {
        const isAllowed = role => allowed.indexOf(role) > -1;
        
        return ( req, res, next ) => {
            console.log( 'request.user = ', req.user );
            console.log( 'allowed = ', allowed );
            console.log( isAllowed( req.user.role ) );

            if( req.user && isAllowed( req.user.role ) ) {
                next();
            } else {
                res.status( 403 ).json({
                    message: 'Forbidden'
                });
            }
        }
    }
};

module.exports = Auth;