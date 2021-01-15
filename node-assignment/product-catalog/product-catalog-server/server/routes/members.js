const getRouter = require( './getRouter' );
const MemberCtrl = require( '../controllers/members' );
const AuthUtils = require( '../utils/auth' );

const authorizationConfig = {
    'get /': [ 'admin' ],
    'get /:id': [ 'admin' ],
    'post /': [ 'admin' ],
    'put /:id': [ 'admin' ],
    'delete /:id': [ 'admin' ],
    'get /:id/issues': [ 'admin' ],
    'post /:id/issues': [ 'admin' ],
    'delete /:id/issues': [ 'admin' ]
};

const router = getRouter( MemberCtrl, authorizationConfig );

router.put( '/me/changePassword', AuthUtils.authorize( authorizationConfig[ 'put /me/changePassword' ] ) );
router.put( '/me/changePassword', MemberCtrl.changePassword );

router.get( '/:id/reviews', AuthUtils.authorize( authorizationConfig[ 'get /:id/reviews' ] ) );
router.get( '/:id/reviews', MemberCtrl.Reviews.getAll );

router.post( '/:id/reviews', AuthUtils.authorize( authorizationConfig[ 'post /:id/reviews' ] ) );
router.post( '/:id/reviews', MemberCtrl.Reviews.post );

router.delete( '/:id/reviews', AuthUtils.authorize( authorizationConfig[ 'delete /:id/reviews' ] ) );
router.delete( '/:id/reviews', MemberCtrl.Reviews.delete );

module.exports = router;