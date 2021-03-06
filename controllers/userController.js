// const db = require("../models");
// const bcrypt = require("bcrypt");
// const saltRounds = 13;

// // Defining methods for the userController
// module.exports = {
//   findAll: function(req, res) {
//     db.User.findAll({})
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  
//   // will search database for specific ID
//   findById: function(req, res) {
//     db.User.findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   // this route should direct to user dashboard if password is correct
//   login: function(req, res) {
  
//     // this should search database for where usersame 
//     // else res.send "incorrect username or password"
//     db.User.findAll({where: {username:req.body.username}})
//       .then(dbModel =>{
//         bcrypt.compare(req.body.password, dbModel[0].password, (err, result) => {
//           if (result === true) {
//             res.json(dbModel);
//           } else {
//             res.send("Incorrect username or password!");
//           }
//         })}
//       )
//       .catch(err => res.status(422).json(err));
//   },
//   // creates new user in database
//   create: function(req, res) {
//     bcrypt.genSalt(saltRounds, function(err, salt) {
//       bcrypt.hash(req.body.password, salt, function(err, hash) {
//         console.log(req.body)
//         // Store hash in your password DB.
//         let newUser = {
//           firstname: req.body.firstname,
//           lastname: req.body.lastname,
//           username: req.body.username,
//           password: hash,
//           email: req.body.email,
//           description: req.body.description
//         };
//         db.User.create(newUser)
//           .then(dbModel => res.json(dbModel))
//           .catch(err => res.status(422).json(err));
//       });
//     });
//   },
//   update: function(req, res) {
//     db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User.findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
