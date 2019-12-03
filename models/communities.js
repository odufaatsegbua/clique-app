module.exports = function(sequelize, DataTypes) {
  var Community = sequelize.define("Community", {
    category: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Community.associate = function(models) {
    Community.hasMany(models.User);
    Community.hasMany(models.Post);
    
     };
  return Community;
};
