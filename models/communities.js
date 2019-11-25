module.exports = function(sequelize, DataTypes) {
  var Community = sequelize.define("Community", {
    category: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Community;
};
