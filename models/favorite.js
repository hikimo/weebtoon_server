'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorites', {
    user_id: DataTypes.INTEGER,
    manga_id: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
    
  };
  return favorite;
};