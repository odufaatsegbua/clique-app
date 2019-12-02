const router = require("express").Router();
const db = require("../../models");

// Defining methods for the communityController
const communityController = {
  findAll: function(req, res) {
    db.Community.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  // will search database for specific ID
  findById: function(req, res) {
    db.Community.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  
  // creates new communities in database
  create: function(req, res) {
     
        console.log(req.body)
       
        let newComm = {
          category: req.body.category,
          description: req.body.description,
        };

        db.Community.create(newComm)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      
},

  update: function(req, res) {
    db.Community.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Community.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// Matches with "/api/users"
router
  .route("/")
  .get(communityController
.findAll)
  .post(communityController
.create);


// Matches with "/api/users/:id"
// how to add api route that leads to dashboard.html after login button
router
  .route("/:id")
  .get(communityController
.findById)
  
  .put(communityController
.update)
  .delete(communityController
.remove);



module.exports = router;
