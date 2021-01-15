const getRouter = require( './getRouter' );
const ReviewsCtrl = require( '../controllers/reviews' );

const authorizationConfig = {
    'get /': [ 'admin', 'member' ],
    'get /:id': [ 'admin', 'member' ],
    'post /': [ 'admin', 'member' ],
    'put /:id': [ 'admin', 'member' ],
    'delete /:id': [ 'admin', 'member' ],
};

module.exports = getRouter( ReviewsCtrl, authorizationConfig );