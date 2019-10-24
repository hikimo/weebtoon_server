'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.manga, {
      foreignKey: 'created_by'
    })
    user.belongsToMany(models.manga, {
      through: 'favorites',
      foreignKey: 'user_id',
    });

  };
  return user;
};