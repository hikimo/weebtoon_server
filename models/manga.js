'use strict';
module.exports = (sequelize, DataTypes) => {
  const manga = sequelize.define('manga', {
    name: DataTypes.STRING,
    is_hot: DataTypes.BOOLEAN,
    is_favorite: DataTypes.BOOLEAN,
    banner: DataTypes.STRING,
    cover: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  manga.associate = function(models) {
    // associations can be defined here
  };
  return manga;
};