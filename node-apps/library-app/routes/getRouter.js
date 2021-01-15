const express = require('express');
const AuthUtils = require('../utils/auth');

const getRouter = (Ctrl, authorizationConfig) => {
    const router = express.Router();

    router.get('/', AuthUtils.authorize(authorizationConfig['get/']));
    router.get('/', Ctrl.getAll);
    router.get('/:id', AuthUtils.authorize(authorizationConfig['get/:id']));
    router.get('/:id', Ctrl.get);
    router.post('/', AuthUtils.authorize(authorizationConfig['post/']));
    router.post('/', Ctrl.post);
    router.put('/:id', AuthUtils.authorize(authorizationConfig['put/:id']));
    router.put('/:id', Ctrl.put);
    router.delete('/:id', AuthUtils.authorize(authorizationConfig['delete/:id']));
    router.delete('/:id', Ctrl.delete);

    return router;
};

module.exports = getRouter;