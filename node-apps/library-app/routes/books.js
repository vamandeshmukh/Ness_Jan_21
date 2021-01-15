const getRouter = require('./getRouter');
const BookCtrl = require('../controllers/books');
const AuthUtils = require('../utils/auth');

const authorizationConfig = {
    'get /:id/issues': ['admin', 'member'],
    'post /:id/issues': ['admin'],
    'delete /:id/issues': ['admin'],
};

const router = getRouter(BookCtrl, authorizationConfig);

router.get('/:id/issues', AuthUtils.authorize(authorizationConfig['get/:id/issues']));
router.get('/:id/issues', BookCtrl.Issues.getAll);

router.post('/:id/issues', AuthUtils.authorize(authorizationConfig['post/:id/issues']));
router.post('/:id/issues', BookCtrl.Issues.post);

router.delete('/:id/issues', AuthUtils.authorize(authorizationConfig['delete/:id/issues']));
router.delete('/:id/issues', BookCtrl.Issues.delete);

module.exports = router;


