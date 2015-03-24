var express = require('express');
var router = express.Router();

var users = [
  {
    "name": "trev"
  },
  {
    "name": "aesse"
  },
  {
    "name": "andrew"
  },
  {
    "name": "henry"
  },
  {
    "name": "xavier"
  },
  {
    "name": "ben"
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(users);
});
router.get('/:id', function(req, res, next) {
  res.json(users[req.params.id]);
});

module.exports = router;
