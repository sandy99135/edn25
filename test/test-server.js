process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
let should = chai.should()
chai.use(chaiHttp);



describe('=== Test POST and GET client==', () => {

//   Test POST Client
   describe.only('HTTP POST /blobs', () => {
      it('post', (done) => {
         chai.request(server)
            .post('/blobs')
            // changer les données entrants à chaque test pour eviter les doublants
            .send({
               nom: 'brunomars',
               prenom: 'marcelinoB'
            })
            .end((err, res) => {

               should.not.exist(err);
               res.status.should.eql(200);
               // if(err){
               //    console.log(err)
               // }
               console.log(res.body);
               
             
               done();
             });
      });
   });

describe('HTTTP GET /client', () => {
   it('get client should return the result', (done) => {
     chai.request(server)
       .get('/blobs')
       .end((err, res) => {
         should.not.exist(err);
         res.status.should.eql(200);
         res.type.should.eql('application/json');
        
         done();
       });
   });
  });
 
  
describe('HTTTP DELETE /client', () => {
   it('get client should return the result', (done) => {
      chai.request(server)
        .delete('/blobs')
        .send({
           _id:1
         })
        .end((err, res) => {
          should.not.exist(err);
         
         //  res.type.should.eql('application/json');
         
          done();
        });
    });
  });
  describe('HTTTP PUT /client', () => {
   it('get client should return the result', (done) => {
      chai.request(server)
        .put('/blobs')
        .send({
           _id:2,
           nom:"test",
           prenom:"test"
         })
        .end((err, res) => {
          should.not.exist(err);
         
         //  res.type.should.eql('application/json');
         
          done();
        });
    });
  });
});
