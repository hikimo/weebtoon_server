'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chapters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      chapter: {
        type: Sequelize.INTEGER
      },
      manga_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'mangas',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      img: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chapters');
  }
};