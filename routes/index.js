var express = require('express');
var router = express.Router();
var controller = require('../Controller/controller')
var cors = require('cors')

// *** api routes *** //
router.post('/apropos',cors(),controller.postapropos);
router.post('/slogan',cors(),controller.postslogan);
router.post('/text',cors(),controller.postfabien);
router.post('/give',cors(),controller.postgive);
router.post('/message',cors(),controller.postmessage);
router.post('/question',cors(),controller.postquestion);
router.post('/priere',cors(),controller.priere);
router.post('/login',cors(),controller.login);
router.get('/slogan', cors(),controller.getslogan);
router.get('/text', cors(),controller.gettext);
router.get('/apropos', cors(),controller.getapropos);
router.get('/message', cors(),controller.get);
router.get('/priere', cors(),controller.prier);
router.get('/give', cors(),controller.getgive);
router.get('/question', cors(),controller.getpriere);
router.get('/message/:_id', controller.delete);
router.get('/priere/:_id', controller.deletepriere);
router.put('/blob/', controller.put);
router.get('/blobs/:id', controller.find);

module.exports = router;
