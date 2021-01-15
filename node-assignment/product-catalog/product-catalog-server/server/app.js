const path = require('path');
const express = require('express');
const cors = require('cors');
const AuthUtils = require('./utils/auth');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')))

// app.use( /^((?!login).)*$/, AuthUtils.authenticate );
app.use(function (req, res, next) {
    if (req.url.indexOf('/login') === -1) {
        AuthUtils.authenticate(req, function (isAuthenticated) {
            if (isAuthenticated) {
                next();
            } else {
                return res.status(401).json({
                    message: 'You are not authorized to access this endpoint'
                });
            }
        });
    } else {
        next();
    }
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// drop existing db, connect to it and freshly upload initial data
require('./db/db').init(error => {
    if (error) {
        console.error('Error initializing DB : ', error.message);
        process.exit(1);
    }

    console.log('DB initialized');

    app.use(require('./routes/authentication'));
    app.use('/products', require('./routes/products'));
    app.use('/members', require('./routes/members'));
    app.use('/reviews', require('./routes/reviews'));

    app.listen(4201);
});