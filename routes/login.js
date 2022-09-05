var express = require('express');
var router = express.Router();
const Sequelize =require('sequelize');
var userconnection = require('../models').usuario;


/* GET users listing. */
router.get('/', async function(req, res, next) {
  const categoria =await userconnection.findAll();
  console.log(categoria);
  res.render('login', { title: 'Login',cat:categoria});

});

module.exports = router;
