'use strict';
module.exports = function(app) {
  var cashController = require('../controllers/cashController');

  // cash Routes
  app.post('/api/cash', function(req,res) {
    cashController.processCashRequest(req,res);
  })
};