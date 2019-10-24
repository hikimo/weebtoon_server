'use strict';
module.exports = (sequelize, DataTypes) => {
  const manga = sequelize.define('manga', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    is_hot: DataTypes.BOOLEAN,
    is_favorite: DataTypes.BOOLEAN,
    favorites: DataTypes.INTEGER,
    banner: DataTypes.STRING,
    cover: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  manga.associate = function(models) {
    // associations can be defined here
    // manga.belongsTo(models.user, {foreignKey: 'created_by'})
    manga.belongsToMany(models.user, {
      through: 'favorites',
      foreignKey: 'manga_id',
    });
  };
  return manga;
};