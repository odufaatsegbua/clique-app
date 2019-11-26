
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  // User.hasMany(, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
  return User;
};
