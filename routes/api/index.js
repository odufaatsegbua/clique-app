const router = require("express").Router();
const userRoutes = require("./users");
const communityRoutes = require("./community");
const userPostRoutes = require("./userPosts");


// routes

router.use("/users", userRoutes);
router.use("/community", communityRoutes);
router.use("/post", userPostRoutes);

module.exports = router;
