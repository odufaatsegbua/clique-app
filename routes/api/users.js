const router = require("express").Router();
// const userController = require("../../controllers/userController");
const db = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 13;

// Defining methods for the userController
const userController = {


  // this route should direct to user dashboard if password is correct
  login: function(req, res) {
    console.log(req.body.username, req.body.password)
    // this should search database for where usersame 
    // else res.send "incorrect username or password"
    db.User.findAll({where: {username:req.body.username}})
      .then(dbModel =>{
        bcrypt.compare(req.body.password, dbModel[0].password, (err, result) => {
          if (result === true) {
            res.json(dbModel);
          } else {
            res.send("Incorrect username or password!");
          }
        })}
      )
      .catch(err => res.status(422).json(err));
  },
  // creates new user in database
  create: function(req, res) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        console.log(req.body)
        // Store hash in your password DB.
        let newUser = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          password: hash,
          email: req.body.email,
          description: req.body.description
        };
        db.User.create(newUser)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      });
    });
  },
  update: function(req, res) {
    db.User.update(req.body, {where:{id: req.params.id}}).then((rows) =>{
      console.log(rows)
      db.User.findAll(
        {where:{id: req.params.id}}
      ).then(dbModel => res.json(dbModel))
    })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// Matches with "/api/users"
router
  .route("/")
  .get(function(req, res) {
    db.User.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })
  .post(userController.create);


// Matches with "/api/users/:id"
// how to add api route that leads to dashboard.html after login button
router
  .route("/:id")
  .get(function(req, res) {
    db.User.findAll({where: {id: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })
  
  .put(userController.update)
  .delete(userController.remove);
router
.route("/login")
.post(userController.login)




module.exports = router;
