'use strict';
module.exports = (sequelize, DataTypes) => {
  const chapter = sequelize.define('chapter', {
    title: DataTypes.STRING,
    manga_id: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {});
  chapter.associate = function(models) {
    // associations can be defined here
  };
  return chapter;
};