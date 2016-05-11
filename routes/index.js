var express = require('express');
var router = express.Router();

var master = {
  title:"Materialize Test",
  shortTitle: "Material"
};

/* GET home page. */
router.get('/', function(req, res) {
  
  //Just passing data through to views
  res.render('home', { 
    page: 'Home',
    master: master
  });
  
});

/* GET post page. */
router.get('/post', function(req, res) {
  
  //Just passing data through to views
  res.render('post', { 
    page: 'Post',
    master: master
  });
  
});

module.exports = router;