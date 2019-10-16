'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('favorites', [
      {
        user_id: 1,
        manga_id: 1
      },
      {
        user_id: 1,
        manga_id: 2
      },
      {
        user_id: 1,
        manga_id: 3
      },
      {
        user_id: 2,
        manga_id: 4
      },
      {
        user_id: 2,
        manga_id: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favorites', null, {});
  }
};
