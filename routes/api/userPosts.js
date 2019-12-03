const router = require("express").Router();
const db = require("../../models");

// Defining methods for the userPostController
const userPostController = {
  findAll: function(req, res) {
    db.Post.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  // will search database for specific ID
  findById: function(req, res) {
    db.Post.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  
  // creates new communities in database
  create: function(req, res) {
     
        console.log(req.body)
       
        let newPost = {
          title: req.body.title,
          text: req.body.text,
          CommunityId: req.body.CommunityId,
          UserId: req.body.UserId,
        };

        db.Post.create(newPost)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      
},

  update: function(req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// Matches with "/api/users"
router
  .route("/")
  .get(userPostController
.findAll)
  .post(userPostController
.create);


// Matches with "/api/users/:id"
// how to add api route that leads to dashboard.html after login button
router
  .route("/:id")
  .get(userPostController
.findById)
  
  .put(userPostController
.update)
  .delete(userPostController
.remove);



module.exports = router;
