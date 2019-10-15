'use strict';
module.exports = (sequelize, DataTypes) => {
  const chapter_page = sequelize.define('chapter_page', {
    page: DataTypes.INTEGER,
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    chapter_id: DataTypes.INTEGER
  }, {});
  chapter_page.associate = function(models) {
    // associations can be defined here
  };
  return chapter_page;
};