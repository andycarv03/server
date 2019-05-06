var cors = require('cors');

var cert = require('./controller.js');
var cert1=require('./loginCreator.js')

module.exports = function(app){

  app.get('/certificates/:id', cors(), function(req, res){
    cert.get_cert(req, res);
  });
  app.get('/EnrolledStudent/:id',cors(),function(req,res){
    cert.get_student(req,res);
  });

  app.get('/login/:id1/:id2',cors(),function(req,res){
    cert1.CreatorLogin(req,res);
});
 
  app.post('/certificates', cors(), function(req, res){
    cert.addStudentRecord(req, res);
  });
  app.delete('/certificates', cors(), function(req, res){
    // cert.deleteCertificate(req, res);
  });
  app.get('/certificates', cors(), function(req, res){
    cert.get_all_cert(req, res);
  });
  app.post('/certificates/:certificate_id/transferName', cors(), function(req, res){
    cert.transfer_cert(req, res);
  });
}
