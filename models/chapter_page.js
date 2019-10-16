'use strict';
module.exports = (sequelize, DataTypes) => {
  const chapter_page = sequelize.define('chapter_page', {
    page: DataTypes.INTEGER,
    name: DataTypes.STRING,
    manga_id: DataTypes.INTEGER,
    img: DataTypes.STRING,
    chapter_id: DataTypes.INTEGER
  }, {});
  chapter_page.associate = function(models) {
    // page belongsTo chapter on chapter_id
    chapter_page.belongsTo(models.chapter, {foreignKey: 'chapter_id'})
  };
  return chapter_page;
};