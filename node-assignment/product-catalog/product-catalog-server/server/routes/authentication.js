const express = require( 'express' );
const AuthenticationCtrl = require( '../controllers/authentication' );

const router = express.Router();

router.post( '/login', AuthenticationCtrl.login );
router.post( '/logout', AuthenticationCtrl.logout );

module.exports = router;