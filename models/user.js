
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    description: DataTypes.TEXT
  });
 User.associate = function(models) {
User.hasMany(models.Post, {
onDelete: "cascade"
});

 };
  return User;
};
