'use strict';
module.exports = (sequelize, DataTypes) => {
  const chapter = sequelize.define('chapter', {
    title: DataTypes.STRING,
    manga_id: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {});
  chapter.associate = function(models) {
    // chapter belongsTo manga -> manga_id
    chapter.belongsTo(models.manga, {foreignKey: 'manga_id'})
  };
  return chapter;
};