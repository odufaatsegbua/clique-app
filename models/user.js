
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    occupation: DataTypes.STRING,
    location: DataTypes.STRING,
    interests: DataTypes.STRING,
    birthdate: DataTypes.STRING
  




  });
 User.associate = function(models) {
User.hasMany(models.Post, {
onDelete: "cascade"
});

 };
  return User;
};
