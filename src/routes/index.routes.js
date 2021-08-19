const { Router } = require("express");
const userRoutes = require("./user.routes");

const express = require('express');
var layout = require('express-layout');

const model = require('../database/models/index');




const rutas = () => {
  
  const router = Router();


  router.use("/users", userRoutes);


  router.get('/', (req, res) =>{
    res.render('hola')});
 
  return router;
};

module.exports = { rutas };
