var express = require('express');
var router = express.Router();

var auth = require('basic-auth')

// http.createServer(function (request, response) {

//   const credentials = auth(request)
//   if (!credentials || (credentials.name !== "imarticus" && credentials.pass !== "imarticus")) {
//     response.statusCode = 401
//     response.setHeader('WWW-Authenticate', 'Basic realm="example"')
//     response.end('Access denied')
//   } else {
//     response.end('Hello Everyone via Basic Auth!')
//   }

// }).listen(4000);





/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
