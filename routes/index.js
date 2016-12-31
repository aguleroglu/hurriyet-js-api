var express = require('express');
var router = express.Router();
var hurriyet = require('hurriyet-js')

var api = hurriyet('327c396d84c9491982f32e7c3625f908');
/* GET home page. */
router.get('/articles', function(req, res, next) {

var top = 50;
var skip = 0;

if(req.query.skip!=undefined || req.query.skip!=null){
  skip = parseInt(req.query.skip);
}

if(req.query.top!=undefined || req.query.top!=null){
  top = parseInt(req.query.top);
}

  api.articles({skip:skip,top:top},function(response){

    res.json(response);

  })
});

router.get('/article', function(req, res, next) {


  api.article(req.query.id,function(response){

    res.json(response);

  })
});

router.get('/columns', function(req, res, next) {

var top = 50;
var skip = 0;

if(req.query.skip!=undefined || req.query.skip!=null){
  skip = parseInt(req.query.skip);
}

if(req.query.top!=undefined || req.query.top!=null){
  top = parseInt(req.query.top);
}

  api.columns({skip:skip,top:top},function(response){

    res.json(response);

  })
});

router.get('/column', function(req, res, next) {


  api.column(req.query.id,function(response){

    res.json(response);

  })
});
router.get('/search', function(req, res, next) {

var top = 50;
var skip = 0;

if(req.query.skip!=undefined || req.query.skip!=null){
  skip = parseInt(req.query.skip);
}

if(req.query.top!=undefined || req.query.top!=null){
  top = parseInt(req.query.top);
}

  api.search(req.query.q,{skip:skip,top:top},function(response){

    res.json(response);

  })

});

module.exports = router;
