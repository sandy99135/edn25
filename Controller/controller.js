var Blob = require('../models/blob');
var Slogan = require('../models/sloganmodel');
var Apropos = require('../models/aproposmodele');

var Fabientext = require('../models/fabientextemodele');
var Blob1 = require('../models/blob1');
var Give = require('../models/givemodele');
var Priere = require('../models/prieremodele');
const path = require('path');
const fs =require("fs")
exports.postmessage = function (req, res) {
    Blob.find()
    .then(eleve => {
        var id2;
        if (eleve.length == 0) {
            id2 = 0
        }
        else {

            id2 = parseInt(eleve[eleve.length - 1].id) + 1
        }
        const elv = new Blob ({
            _id: id2,
            nom: req.body.nom || "Untitled Note",
            prenom: req.body.prenom,
            numero: req.body.numero ,
            email: req.body.email,
            sujet: req.body.sujet,
            message:req.body.message


        });
       if (req.body.nom && req.body.prenom &&req.body.numero && req.body.message) {
            elv.save()

                .then(data => {
                    var sa =fs.readFileSync("./index.html")

                    res.send(data)
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                    });
                });
        }
      else {
           res.send("Les champs nom ,prenom ,numero et messages sont obligatoires")
        }

    })
  }
  exports.postquestion = function (req, res) {
//  let imageFile = req.files.file;

//   imageFile.mv(`${__dirname}/public/${req.body.nom}.jpg`, function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }

// res.json({file: `public/${req.body.nom}.jpg`});
// })
    Blob1.find()
    .then(eleve => {
        var id2;
        if (eleve.length == 0) {
            id2 = 0
        }
        else {

            id2 = parseInt(eleve[eleve.length - 1].id) + 1
        }
        
        const elv = new Blob1 ({
            _id: id2,
            nom: req.body.nom || "Untitled Note",
            prenom: req.body.prenom,
            numero: req.body.numero ,
            message: req.body.message,
           


        });
        if (req.body.nom && req.body.prenom&&req.body.numero &&req.body.message) {
            elv.save()

                .then(data => {

                   res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                    });
                });
        }
        else {
            res.send("Les champs nom ,prenom ,numero et messages sont obligatoires")
        }

    })
  }
  exports.postslogan = function (req, res) {
    Slogan.find()
    .then(eleve => {
        var id2;
        if (eleve.length == 0) {
            id2 = 0
        }
        else {

            id2 = parseInt(eleve[eleve.length - 1].id) + 1
        }
        
        const slog = new Slogan ({
            _id: id2,
            slogan1: req.body.slogan1 || "Untitled Note",
            slogan2: req.body.slogan2,
            
        });
        console.log(slog)
        if (req.body.slogan1&& req.body.slogan2) {
            slog.save()

                .then(data => {
                    console.log(data)
                   res.send(data);
                }).catch(err => {
                    console.log(err)
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                    });
                });
        }
        else {
            res.send("Les champs nom ,prenom ,numero et messages sont obligatoires")
        }

    })
  }
   exports.postfabien = function (req, res) {
    Slogan.find()
    .then(eleve => {
        var id2;
        if (eleve.length == 0) {
            id2 = 0
        }
        else {

            id2 = parseInt(eleve[eleve.length - 1].id) + 1
        }
        
        const text = new Fabientext ({
            _id: id2,
            texte1: req.body.texte1 || "Untitled Note",
            texte2: req.body.texte2,
            texte3: req.body.texte3,
            
        });
        
        if (req.body.texte1&& req.body.texte2&& req.body.texte3) {
            text.save()

                .then(data => {
                    console.log(data)
                   res.send(data);
                }).catch(err => {
                    console.log(err)
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                    });
                });
        }
        else {
            res.send("Les champs nom ,prenom ,numero et messages sont obligatoires")
        }

    })
  }
  exports.postapropos = function (req, res) {
    Slogan.find()
    .then(eleve => {
        var id2;
        if (eleve.length == 0) {
            id2 = 0
        }
        else {

            id2 = parseInt(eleve[eleve.length - 1].id) + 1
        }
        
        const PROP = new Apropos ({
            _id: id2,
            apropos1: req.body. apropos1 || "Untitled Note",
            apropos2: req.body. apropos2,
            apropos3: req.body. apropos3,
            apropos4: req.body. apropos4 || "Untitled Note",
            apropos5: req.body. apropos5,
            apropos6: req.body. apropos6,
            
        });
        
        if (req.body.apropos1&& req.body.apropos2&& req.body.apropos3 && req.body.apropos4&& req.body.apropos5&& req.body.apropos6) {
            PROP.save()

                .then(data => {
                    console.log(data)
                   res.send(data);
                }).catch(err => {
                    console.log(err)
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                    });
                });
        }
        else {
            res.send("Les champs nom ,prenom ,numero et messages sont obligatoires")
        }

    })
  }
   exports.postgive = function (req, res) {
//  let imageFile = req.files.file;

//   imageFile.mv(`${__dirname}/public/${req.body.nom}.jpg`, function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }

// res.json({file: `public/${req.body.nom}.jpg`});
// })
    Give.find()
    .then(eleve => {
        var id2;
        if (eleve.length == 0) {
            id2 = 0
        }
        else {

            id2 = parseInt(eleve[eleve.length - 1].id) + 1
        }
        
        const elv = new Give ({
            _id: id2,
            nom: req.body.nom || "Untitled Note",
            montant:req.body.montant,
            prenom: req.body.prenom,
            numero: req.body.numero ,
            message: req.body.message,
        });
        if (req.body.nom && req.body.prenom&&req.body.numero &&req.body.message && req.body.montant) {
            elv.save()

                .then(data => {

                   res.send(data);
                }).catch(err => {
                    console.log(err)
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                    });
                });
        }
        else {
            res.send("Les champs nom ,prenom ,numero et messages sont obligatoires")
        }

    })
  }
    exports.priere = function (req, res) {
//  let imageFile = req.files.file;

//   imageFile.mv(`${__dirname}/public/${req.body.nom}.jpg`, function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }

// res.json({file: `public/${req.body.nom}.jpg`});
// })
    Priere.find()
    .then(eleve => {
        var id2;
        if (eleve.length == 0) {
            id2 = 0
        }
        else {

            id2 = parseInt(eleve[eleve.length - 1].id) + 1
        }
        
        const elv = new Priere ({
            _id: id2,
            nom: req.body.nom || "Untitled Note",
            prenom: req.body.prenom,
            numero: req.body.numero ,
            message: req.body.message,
        });
        if (req.body.nom && req.body.prenom&&req.body.numero &&req.body.message ) {
            elv.save()

                .then(data => {

                   res.send(data);
                }).catch(err => {
                    console.log(err)
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                    });
                });
        }
        else {
            console.log("Les champs nom ,prenom ,numero et messages sont obligatoires")
            res.send("Les champs nom ,prenom ,numero et messages sont obligatoires")
        }

    })
  }
  exports.get = (req, res) => {
    Blob.find()
        .then(eleve => {

            res.json(eleve);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};
exports.getgive = (req, res) => {
    Give.find()
        .then(eleve => {

            res.json(eleve);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};
exports.getslogan = (req, res) => {
    Slogan.find()
        .then(eleve => {

            res.json(eleve);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};
exports.gettext = (req, res) => {
    Fabientext.find()
        .then(eleve => {

            res.json(eleve);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};
exports.getapropos = (req, res) => {
    Apropos.find()
        .then(eleve => {

            res.json(eleve);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};
exports.getpriere = (req, res) => {
    Blob1.find()
        .then(eleve => {

            res.json(eleve);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};
exports.prier = (req, res) => {
    Priere.find()
        .then(eleve => {

            res.json(eleve);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};
exports.delete = (req, res) => {
    Blob.findByIdAndRemove(req.params._id)
    .then(eleve => {
        if(!eleve) {
            return res.status(404).send({
                message: "Note not found with id " + req.params._id
            });
        }
      Blob.find().then(el=>res.send(el))
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params._id
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params._id




            
        });
    });
};
exports.deletepriere = (req, res) => {
    Blob1.findByIdAndRemove(req.params._id)
    .then(eleve => {
        if(!eleve) {
            return res.status(404).send({
                message: "Note not found with id " + req.params._id
            });
        }
      Blob.find().then(el=>res.send(el))
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params._id
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params._id




            
        });
    });
};
exports.put = (req, res) => {
    Blob.findByIdAndUpdate(req.body._id, {
        nom: req.body.nom || "Untitled Note",
        prenom: req.body.prenom
    })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " +req.body._id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.body._id
            });
        });

};
exports.find = (req, res) => {
    const tab = []

        Blob.findById(req.params._id)
        .then(eleve => {
            if (!eleve) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params._id
                });
            }



                    res.send(eleve)

        });

};
exports.login = (req, res) => {
    const admin=
    {nom:"tsiferana",
        password:"tsifer2019"
    }
    
    
    const login=new Blob({
        nom:req.body.nom,
        password:req.body.password
    })
    var count=0;
   
   
        if(admin.nom==login.nom &&admin.password==login.password){
            res.send("success")
           console.log("success")
        }
     else{
        res.send("utilisateur ou mot de passe incorrect")
     }
};

