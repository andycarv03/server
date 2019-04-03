var cors = require('cors');

//var cert = require('./controller.js');
var a = require('./queryAll.js');
var b=require('./transferCert.js');
var c =require('./addCert.js');
var d=require('/queryCert.js');

module.exports = function(app){

  app.get('/certificates/:id', cors(), function(req, res){
    d.get_cert(req, res);
  });


  app.post('/certificates', cors(), function(req, res){
    c.addNewCertificate(req, res);
  });

  /*app.delete('/certificates', cors(), function(req, res){
    // cert.deleteCertificate(req, res);
  });
  */

  app.get('/certificates', cors(), function(req, res){
    a.get_all_cert(req, res);
  });

  app.post('/certificates/:certificate_id/transferName', cors(), function(req, res){
    b.transfer_cert(req, res);
  });
}