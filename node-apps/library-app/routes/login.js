var express = require('express');
var router = express.Router();

let login = false;

// login  
router.post('/', (req, res) => {
    console.log('login');
    let loginData = {
        user: req.body.user,
        password: req.body.password
    };
    if (loginData.user === 'admin' && loginData.password === 'admin') {
        login = true;
        res.send('Login successful.');
    }
    else {
        res.send('Login failed.');
    }
});

module.exports = login;
module.exports = router;
