const getRouter = require( './getRouter' );
const ProductCtrl = require( '../controllers/products' );
const AuthUtils = require( '../utils/auth' );

const authorizationConfig = {
    'get /': [ 'admin', 'member' ],
    'get /:id': [ 'admin', 'member' ],
    'post /': [ 'admin' ],
    'put /:id': [ 'admin' ],
    'delete /:id': [ 'admin' ],
    'get /:id/reviews': [ 'admin', 'member' ],
    'post /:id/reviews': [ 'admin', 'member' ],
    'delete /:id/reviews': [ 'admin' ],
};

const router = getRouter( ProductCtrl, authorizationConfig );

router.get( '/:id/reviews', AuthUtils.authorize( authorizationConfig[ 'get /:id/reviews' ] ) );
router.get( '/:id/reviews', ProductCtrl.Reviews.getAll );

router.post( '/:id/reviews', AuthUtils.authorize( authorizationConfig[ 'post /:id/reviews' ] ) );
router.post( '/:id/reviews', ProductCtrl.Reviews.post );

router.delete( '/:id/reviews', AuthUtils.authorize( authorizationConfig[ 'delete /:id/reviews' ] ) );
router.delete( '/:id/reviews', ProductCtrl.Reviews.delete );

module.exports = router;