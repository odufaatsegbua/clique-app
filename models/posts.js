module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: DataTypes.STRING,
      text: DataTypes.TEXT,
    });
    return Post;
  };